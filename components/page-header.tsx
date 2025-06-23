"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NewTaskButton } from "@/components/new-task-button"
import { Search, Filter, SortAsc, Plus } from "lucide-react"
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
  const isProjectsPage = pathname === "/dashboard/projects"

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>

        {/* Desktop Actions (LOCAL version wins) */}
        <div className="hidden sm:flex items-center gap-3">
          {children}
          {isProjectsPage ? (
            <Button asChild variant="gradient" size="lg">
              <Link href="/dashboard/projects/new">
                <Plus className="h-4 w-4" />

                New Project
              </Link>
            </Button>
          ) : (

            <NewTaskButton projectId={projectId} size="lg" />
          )}
        </div>

        {/* Mobile Actions (LOCAL version wins) */}
        <div className="flex sm:hidden items-center gap-2 w-full">
          {showSearch && (
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2" />
              <Input type="search" placeholder="Search..." className="pl-10 rounded-lg" />
            </div>
          )}
          {isProjectsPage ? (
            <Button asChild size="icon" variant="gradient" className="shrink-0">
              <Link href="/dashboard/projects/new">
                <Plus className="h-4 w-4" />
                <span className="sr-only">New Project</span>
              </Link>
            </Button>
          ) : (
            <NewTaskButton projectId={projectId} size="sm" showText={false} className="shrink-0" />
          )}
        </div>
      </div>

      {/* Desktop Search and Filters (LOCAL version wins) */}
      {(showSearch || showFilters) && (
        <div className="hidden sm:flex items-center gap-3">
          {showSearch && (
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2" />
              <Input type="search" placeholder="Search tasks..." className="pl-10 rounded-lg" />
            </div>
          )}

          {showFilters && (
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="default">
                    <Filter className="h-4 w-4" />
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

                  <Button variant="outline" size="default">
                    <SortAsc className="h-4 w-4" />
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

      {/* Floating Action Button for Mobile (LOCAL version wins) */}
      {!isProjectsPage && <NewTaskButton variant="floating" projectId={projectId} />}
    </div>
  )
}
