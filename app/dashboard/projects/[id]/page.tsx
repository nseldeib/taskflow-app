import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import { CalendarDays, ListTodo, Plus, Settings } from "lucide-react"
import Link from "next/link"
import { TaskList } from "@/components/task-list"
import { TaskBoard } from "@/components/task-board"

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Fetch project details
  const { data: project } = await supabase.from("projects").select("*").eq("id", params.id).single()

  if (!project) {
    notFound()
  }

  // Fetch tasks for this project
  const { data: tasks } = await supabase
    .from("tasks")
    .select(`
      *,
      task_priorities(name, color),
      task_statuses(name)
    `)
    .eq("project_id", params.id)
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
          {project.description && <p className="text-muted-foreground mt-1">{project.description}</p>}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href={`/dashboard/projects/${params.id}/settings`}>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/dashboard/projects/${params.id}/tasks/new`}>
              <Plus className="mr-2 h-4 w-4" /> Add Task
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="board" className="space-y-4">
        <TabsList>
          <TabsTrigger value="board">
            <ListTodo className="h-4 w-4 mr-2" />
            Board
          </TabsTrigger>
          <TabsTrigger value="list">
            <CalendarDays className="h-4 w-4 mr-2" />
            List
          </TabsTrigger>
        </TabsList>
        <TabsContent value="board" className="space-y-4">
          <TaskBoard tasks={tasks || []} projectId={params.id} />
        </TabsContent>
        <TabsContent value="list" className="space-y-4">
          <Card className="p-0">
            <TaskList tasks={tasks || []} />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
