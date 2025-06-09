import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { Plus, Star } from "lucide-react"
import { TaskList } from "@/components/task-list"
import Link from "next/link"

export default async function StarredTasks() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch starred tasks
  const { data: tasks } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user?.id)
    .eq("starred", true)
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 text-yellow-500" />
          <h1 className="text-3xl font-bold tracking-tight">Starred Tasks</h1>
        </div>
        <Button asChild>
          <Link href="/dashboard/tasks/new">
            <Plus className="mr-2 h-4 w-4" /> New Task
          </Link>
        </Button>
      </div>

      <Card className="p-0">
        <TaskList tasks={tasks || []} />
      </Card>

      {(!tasks || tasks.length === 0) && (
        <div className="text-center py-12">
          <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No starred tasks</h3>
          <p className="text-muted-foreground mb-4">Star important tasks to find them quickly here.</p>
          <Button asChild>
            <Link href="/dashboard/tasks">Browse all tasks</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
