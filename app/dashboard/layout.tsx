import type React from "react"
import { EnhancedSidebar } from "@/components/enhanced-sidebar"
import { UserNav } from "@/components/user-nav"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

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

  return (
    <div className="flex min-h-screen bg-background">
      <EnhancedSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center px-4 lg:px-6">
            <div className="ml-auto flex items-center space-x-4">
              <UserNav user={session.user} />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 lg:p-6 xl:p-8 max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
