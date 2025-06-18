import { Card } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { AlertCircle } from "lucide-react"
import { TaskList } from "@/components/task-list"

export default async function ImportantTasks() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch important tasks (high and urgent priority)
  const { data: tasks } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user?.id)
    .in("priority", ["high", "urgent"])
    .eq("completed", false)
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <PageHeader
        title="Important Tasks"
        description="High priority tasks that need your attention"
        showSearch={true}
        showFilters={true}
      />

      <Card className="p-0">
        <TaskList tasks={tasks || []} />
      </Card>

      {(!tasks || tasks.length === 0) && (
        <div className="text-center py-12">
          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No important tasks</h3>
          <p className="text-muted-foreground mb-4">Tasks with high or urgent priority will appear here.</p>
        </div>
      )}
    </div>
  )
}
