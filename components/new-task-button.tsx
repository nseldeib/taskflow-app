"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NewTaskButtonProps {
  variant?: "default" | "outline" | "ghost" | "floating"
  size?: "default" | "sm" | "lg"
  className?: string
  projectId?: string
  showText?: boolean
}

export function NewTaskButton({
  variant = "default",
  size = "default",
  className,
  projectId,
  showText = true,
}: NewTaskButtonProps) {
  const pathname = usePathname()

  // Determine the correct href based on context
  const getHref = () => {
    if (projectId) {
      return `/dashboard/projects/${projectId}/tasks/new`
    }
    return "/dashboard/tasks/new"
  }

  // Floating action button variant
  if (variant === "floating") {
    return (
      <Button
        asChild
        size="icon"
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg",
          "bg-gradient-to-r from-purple-500 to-blue-500",
          "hover:from-purple-600 hover:to-blue-600",
          "hover:shadow-xl transition-all duration-200",
          "md:hidden", // Only show on mobile
          className,
        )}
      >
        <Link href={getHref()}>
          <Plus className="h-6 w-6" />
          <span className="sr-only">Add new task</span>
        </Link>
      </Button>
    )
  }

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        variant === "default" && "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600",
        className,
      )}
    >
      <Link href={getHref()}>
        <Plus className="h-4 w-4" />
        {showText && <span className="ml-2">New Task</span>}
        <span className="sr-only">Create a new task</span>
      </Link>
    </Button>
  )
}
