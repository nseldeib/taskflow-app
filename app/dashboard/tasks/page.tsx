import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { Plus, Search } from "lucide-react"
import { TaskList } from "@/components/task-list"
import Link from "next/link"

export default async function Tasks() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch all tasks from todos table
  const { data: allTasks } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false })

  // Filter tasks by priority and completion status
  const importantTasks = allTasks?.filter((task) => task.priority === "high" || task.priority === "urgent") || []
  const plannedTasks =
    allTasks?.filter((task) => !task.completed && (task.priority === "low" || task.priority === "medium")) || []
  const completedTasks = allTasks?.filter((task) => task.completed) || []

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search tasks..." className="w-full sm:w-[200px] pl-8" />
          </div>
          <Button asChild>
            <Link href="/dashboard/tasks/new">
              <Plus className="mr-2 h-4 w-4" /> New Task
            </Link>
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
