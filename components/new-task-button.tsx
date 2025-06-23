"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
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
  const href = projectId ? `/dashboard/projects/${projectId}/tasks/new` : "/dashboard/tasks/new"

  // Floating action button variant (LOCAL version wins)
  if (variant === "floating") {
    return (
      <Button
        asChild
        size="icon-lg"
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full shadow-xl",
          "bg-gradient-to-r from-purple-500 to-blue-500",
          "hover:from-purple-600 hover:to-blue-600",
          "hover:shadow-2xl transition-all duration-300",
          "hover:scale-110 active:scale-105",
          "md:hidden", // Only show on mobile
          className,
        )}
      >
        <Link href={href}>
          <Plus className="h-6 w-6" />
          <span className="sr-only">Add new task</span>
        </Link>
      </Button>
    )
  }

  // Regular button (LOCAL version wins - uses variant="gradient")
  return (
    <Button asChild variant={variant === "default" ? "gradient" : variant} size={size} className={className}>
      <Link href={href}>
        <Plus className="h-4 w-4" />
        {showText && <span className="ml-2">New Task</span>}
        <span className="sr-only">Create a new task</span>
      </Link>
    </Button>
  )
}
