import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { Plus, Search } from "lucide-react"
import { TaskList } from "@/components/task-list"

export default async function Tasks() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch all tasks
  const { data: allTasks } = await supabase
    .from("tasks")
    .select(`
      *,
      projects(name),
      task_priorities(name, color),
      task_statuses(name)
    `)
    .eq("projects.user_id", user?.id)
    .order("created_at", { ascending: false })

  // Filter tasks by status
  const importantTasks = allTasks?.filter((task) => task.task_statuses.name === "Important") || []
  const plannedTasks = allTasks?.filter((task) => task.task_statuses.name === "Planned") || []
  const completedTasks = allTasks?.filter((task) => task.is_completed) || []

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search tasks..." className="w-full sm:w-[200px] pl-8" />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Task
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="important">Important</TabsTrigger>
          <TabsTrigger value="planned">Planned</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card className="p-0">
            <TaskList tasks={allTasks || []} />
          </Card>
        </TabsContent>
        <TabsContent value="important" className="space-y-4">
          <Card className="p-0">
            <TaskList tasks={importantTasks} />
          </Card>
        </TabsContent>
        <TabsContent value="planned" className="space-y-4">
          <Card className="p-0">
            <TaskList tasks={plannedTasks} />
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card className="p-0">
            <TaskList tasks={completedTasks} />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
