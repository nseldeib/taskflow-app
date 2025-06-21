import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHeader } from "@/components/page-header"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { TaskList } from "@/components/task-list"

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
      <PageHeader
        title="Tasks"
        description="Manage all your tasks across projects"
        showSearch={true}
        showFilters={true}
      />

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
