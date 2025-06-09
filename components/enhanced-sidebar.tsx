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
        // Initialize default projects for new users
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
      color: "text-gray-500",
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
      <div className="flex h-16 items-center px-4 border-b lg:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex items-center gap-2 ml-4">
          <Sparkles className="h-6 w-6 text-purple-500" />
          <h1 className="text-xl font-bold">TaskFlow</h1>
        </div>
      </div>

      <div
        className={cn("fixed inset-0 top-16 z-50 bg-background lg:static lg:block", isMobileOpen ? "block" : "hidden")}
      >
        <div className="space-y-4 py-4 h-full border-r overflow-y-auto">
          {/* Logo - Desktop only */}
          <div className="px-3 py-2 hidden lg:block">
            <div className="flex items-center gap-2 px-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <h1 className="text-xl font-bold">TaskFlow</h1>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="px-3">
            <div className="space-y-1">
              {mainRoutes.map((route) => (
                <Button
                  key={route.href}
                  variant={route.active ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", route.active ? "bg-purple-500/10 text-purple-500" : "")}
                  asChild
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Link href={route.href}>
                    <route.icon className="mr-2 h-5 w-5" />
                    {route.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Tasks Section */}
          <div className="px-3">
            <div className="px-2 mb-2">
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tasks</h2>
            </div>
            <div className="space-y-1">
              {taskRoutes.map((route) => (
                <Button
                  key={route.href}
                  variant={route.active ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", route.active ? "bg-purple-500/10 text-purple-500" : "")}
                  asChild
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Link href={route.href}>
                    <route.icon className={cn("mr-2 h-4 w-4", route.color)} />
                    {route.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="px-3">
            <Collapsible open={isProjectsOpen} onOpenChange={setIsProjectsOpen}>
              <div className="flex items-center justify-between px-2 mb-2">
                <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Projects</h2>
                <div className="flex items-center gap-1">
                  <Button size="sm" variant="ghost" className="h-6 w-6 p-0" asChild>
                    <Link href="/dashboard/projects/new">
                      <Plus className="h-3 w-3" />
                    </Link>
                  </Button>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      {isProjectsOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                    </Button>
                  </CollapsibleTrigger>
                </div>
              </div>
              <CollapsibleContent className="space-y-1">
                {projects.map((project) => (
                  <Button
                    key={project.id}
                    variant={pathname.includes(`/dashboard/projects/${project.id}`) ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      pathname.includes(`/dashboard/projects/${project.id}`) ? "bg-purple-500/10 text-purple-500" : "",
                    )}
                    asChild
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <Link href={`/dashboard/projects/${project.id}`}>
                      <span className="mr-2 text-sm">{defaultProjectIcons[project.title] || "📁"}</span>
                      <span className="truncate">{project.title}</span>
                    </Link>
                  </Button>
                ))}
                <Button
                  variant={pathname === "/dashboard/projects" ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start text-muted-foreground",
                    pathname === "/dashboard/projects" ? "bg-purple-500/10 text-purple-500" : "",
                  )}
                  asChild
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Link href="/dashboard/projects">
                    <FolderKanban className="mr-2 h-4 w-4" />
                    All Projects
                  </Link>
                </Button>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </>
  )
}
