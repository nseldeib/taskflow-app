"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NewTaskButton } from "@/components/new-task-button"
import { Search, Filter, SortAsc } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface PageHeaderProps {
  title: string
  description?: string
  projectId?: string
  showSearch?: boolean
  showFilters?: boolean
  children?: React.ReactNode
}

export function PageHeader({
  title,
  description,
  projectId,
  showSearch = true,
  showFilters = false,
  children,
}: PageHeaderProps) {
  const pathname = usePathname()

  const getNewButtonText = () => {
    if (pathname.includes("/projects/") && !pathname.includes("/tasks")) {
      return "New Project"
    }
    return "New Task"
  }

  const getNewButtonHref = () => {
    if (pathname.includes("/projects/") && !pathname.includes("/tasks")) {
      return "/dashboard/projects/new"
    }
    if (projectId) {
      return `/dashboard/projects/${projectId}/tasks/new`
    }
    return "/dashboard/tasks/new"
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2">
          {children}
          {pathname.includes("/projects/") && !pathname.includes("/tasks") ? (
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              <Link href={getNewButtonHref()}>
                <span className="mr-2">+</span>
                {getNewButtonText()}
              </Link>
            </Button>
          ) : (
            <NewTaskButton projectId={projectId} />
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex sm:hidden items-center gap-2 w-full">
          {showSearch && (
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-8" />
            </div>
          )}
          <NewTaskButton projectId={projectId} size="sm" showText={false} className="shrink-0" />
        </div>
      </div>

      {/* Desktop Search and Filters */}
      {(showSearch || showFilters) && (
        <div className="hidden sm:flex items-center gap-2">
          {showSearch && (
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search tasks..." className="pl-8" />
            </div>
          )}

          {showFilters && (
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>All Tasks</DropdownMenuItem>
                  <DropdownMenuItem>Completed</DropdownMenuItem>
                  <DropdownMenuItem>Pending</DropdownMenuItem>
                  <DropdownMenuItem>High Priority</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <SortAsc className="h-4 w-4 mr-2" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Date Created</DropdownMenuItem>
                  <DropdownMenuItem>Due Date</DropdownMenuItem>
                  <DropdownMenuItem>Priority</DropdownMenuItem>
                  <DropdownMenuItem>Alphabetical</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      )}

      {/* Floating Action Button for Mobile */}
      <NewTaskButton variant="floating" projectId={projectId} />
    </div>
  )
}
