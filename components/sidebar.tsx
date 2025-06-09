"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FolderKanban, CheckSquare, Settings, Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Projects",
      icon: FolderKanban,
      href: "/dashboard/projects",
      active: pathname.includes("/dashboard/projects"),
    },
    {
      label: "Tasks",
      icon: CheckSquare,
      href: "/dashboard/tasks",
      active: pathname.includes("/dashboard/tasks"),
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
          <h1 className="text-xl font-bold">TaskMaster</h1>
        </div>
      </div>

      <div
        className={cn("fixed inset-0 top-16 z-50 bg-background lg:static lg:block", isMobileOpen ? "block" : "hidden")}
      >
        <div className="space-y-4 py-4 h-full border-r">
          <div className="px-3 py-2 hidden lg:block">
            <div className="flex items-center gap-2 px-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <h1 className="text-xl font-bold">TaskMaster</h1>
            </div>
          </div>
          <div className="px-3 py-2">
            <div className="space-y-1">
              {routes.map((route) => (
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
        </div>
      </div>
    </>
  )
}
