import type React from "react"
import { EnhancedSidebar } from "@/components/enhanced-sidebar"
import { UserNav } from "@/components/user-nav"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { initializeDefaultProjects } from "@/utils/default-projects"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  // Initialize default projects for new users
  try {
    await initializeDefaultProjects(session.user.id)
  } catch (error) {
    console.error("Error initializing default projects:", error)
  }

  return (
    <div className="flex min-h-screen">
      <EnhancedSidebar />
      <div className="flex-1">
        <header className="border-b bg-background">
          <div className="flex h-16 items-center px-4 sm:px-6">
            <div className="ml-auto flex items-center space-x-4">
              <UserNav user={session.user} />
            </div>
          </div>
        </header>
        <main className="p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}
