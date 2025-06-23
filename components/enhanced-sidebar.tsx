"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Settings,
  Menu,
  X,
  Sparkles,
  Star,
  AlertCircle,
  Calendar,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Plus,
} from "lucide-react"
import { useState, useEffect } from "react"
import { createClient } from "@/utils/supabase/client"
import { defaultProjectIcons, initializeDefaultProjects } from "@/utils/default-projects"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"

interface Project {
  id: string
  title: string
  description?: string
}

export function EnhancedSidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const fetchProjectsAndInitialize = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user && !isInitialized) {
        try {
          await initializeDefaultProjects(user.id)
          setIsInitialized(true)
        } catch (error) {
          console.error("Error initializing default projects:", error)
        }
      }

      if (user) {
        const { data: projectsData } = await supabase
          .from("events")
          .select("id, title, description")
          .eq("user_id", user.id)
          .order("created_at", { ascending: true })

        if (projectsData) {
          setProjects(projectsData)
        }
      }
    }

    fetchProjectsAndInitialize()
  }, [isInitialized])

  const taskRoutes = [
    {
      label: "Important",
      icon: AlertCircle,
      href: "/dashboard/tasks/important",
      active: pathname === "/dashboard/tasks/important",
      color: "text-red-500",
    },
    {
      label: "Starred",
      icon: Star,
      href: "/dashboard/tasks/starred",
      active: pathname === "/dashboard/tasks/starred",
      color: "text-yellow-500",
    },
    {
      label: "Today",
      icon: Calendar,
      href: "/dashboard/tasks/today",
      active: pathname === "/dashboard/tasks/today",
      color: "text-blue-500",
    },
    {
      label: "This Week",
      icon: CalendarDays,
      href: "/dashboard/tasks/week",
      active: pathname === "/dashboard/tasks/week",
      color: "text-green-500",
    },
    {
      label: "All Tasks",
      icon: CheckSquare,
      href: "/dashboard/tasks",
      active: pathname === "/dashboard/tasks",
      color: "text-slate-500",
    },
  ]

  const mainRoutes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname.includes("/dashboard/settings"),
    },
  ]

  return (
    <>
      {/* Mobile Header */}
      <div className="flex h-16 items-center justify-between px-4 border-b bg-background lg:hidden">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-500" />
          <span className="font-semibold text-lg">TaskFlow</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-black/20 lg:hidden" onClick={() => setIsMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 transform bg-background border-r transition-transform duration-200 ease-in-out lg:static lg:top-0 lg:h-screen lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Desktop Logo */}
          <div className="hidden lg:flex items-center gap-2 px-6 py-4 border-b">
            <Sparkles className="h-6 w-6 text-purple-500" />
            <span className="font-bold text-xl">TaskFlow</span>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto py-4">
            {/* Main Navigation */}
            <div className="px-3 mb-6">
              <div className="space-y-1">
                {mainRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      route.active
                        ? "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300"
                        : "text-muted-foreground",
                    )}
                  >
                    <route.icon className="h-4 w-4 shrink-0" />
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>

            <Separator className="mx-3 mb-6" />

            {/* Tasks Section */}
            <div className="px-3 mb-6">
              <div className="flex items-center px-3 mb-3">
                <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tasks</h2>
              </div>
              <div className="space-y-1">
                {taskRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      route.active
                        ? "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300"
                        : "text-muted-foreground",
                    )}
                  >
                    <route.icon className={cn("h-4 w-4 shrink-0", route.color)} />
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>

            <Separator className="mx-3 mb-6" />

            {/* Projects Section */}
            <div className="px-3">
              <Collapsible open={isProjectsOpen} onOpenChange={setIsProjectsOpen}>
                <div className="flex items-center justify-between px-3 mb-3">
                  <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Projects</h2>
                  <div className="flex items-center gap-1">
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:bg-accent" asChild>
                      <Link href="/dashboard/projects/new">
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">New Project</span>
                      </Link>
                    </Button>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-accent">
                        {isProjectsOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                        <span className="sr-only">Toggle Projects</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </div>
                <CollapsibleContent className="space-y-1">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      href={`/dashboard/projects/${project.id}`}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        pathname.includes(`/dashboard/projects/${project.id}`)
                          ? "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300"
                          : "text-muted-foreground",
                      )}
                    >
                      <span className="text-base shrink-0 w-4 h-4 flex items-center justify-center">
                        {defaultProjectIcons[project.title] || "📁"}
                      </span>
                      <span className="truncate">{project.title}</span>
                    </Link>
                  ))}
                  <Link
                    href="/dashboard/projects"
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      pathname === "/dashboard/projects"
                        ? "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300"
                        : "text-muted-foreground",
                    )}
                  >
                    <FolderKanban className="h-4 w-4 shrink-0" />
                    All Projects
                  </Link>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
