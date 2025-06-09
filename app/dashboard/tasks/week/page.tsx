import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { Plus, CalendarDays } from "lucide-react"
import { TaskList } from "@/components/task-list"
import Link from "next/link"

export default async function WeekTasks() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Get this week's date range
  const today = new Date()
  const weekStart = new Date(today.setDate(today.getDate() - today.getDay()))
  const weekEnd = new Date(today.setDate(today.getDate() - today.getDay() + 6))

  const weekStartStr = weekStart.toISOString().split("T")[0]
  const weekEndStr = weekEnd.toISOString().split("T")[0]

  // Fetch tasks due this week
  const { data: tasks } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user?.id)
    .gte("due_date", weekStartStr)
    .lte("due_date", `${weekEndStr}T23:59:59`)
    .order("due_date", { ascending: true })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-6 w-6 text-green-500" />
          <h1 className="text-3xl font-bold tracking-tight">This Week's Tasks</h1>
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
          <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No tasks due this week</h3>
          <p className="text-muted-foreground mb-4">Plan ahead for a productive week!</p>
          <Button asChild>
            <Link href="/dashboard/tasks/new">Add a task for this week</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
