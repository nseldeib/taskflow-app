import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHeader } from "@/components/page-header"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import { CalendarDays, ListTodo, Settings } from "lucide-react"
import Link from "next/link"
import { TaskList } from "@/components/task-list"

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Fetch project details from events table
  const { data: project } = await supabase.from("events").select("*").eq("id", params.id).single()

  if (!project) {
    notFound()
  }

  // Fetch tasks for this project
  const { data: tasks } = await supabase
    .from("todos")
    .select("*")
    .eq("event_id", params.id)
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <PageHeader
        title={project.title}
        description={project.description}
        projectId={params.id}
        showSearch={true}
        showFilters={true}
      >
        <Button asChild variant="outline">
          <Link href={`/dashboard/projects/${params.id}/settings`}>
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Link>
        </Button>
      </PageHeader>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">
            <ListTodo className="h-4 w-4 mr-2" />
            List
          </TabsTrigger>
          <TabsTrigger value="calendar">
            <CalendarDays className="h-4 w-4 mr-2" />
            Calendar
          </TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="space-y-4">
          <Card className="p-0">
            <TaskList tasks={tasks || []} />
          </Card>
        </TabsContent>
        <TabsContent value="calendar" className="space-y-4">
          <Card className="p-6">
            <p className="text-center text-muted-foreground">Calendar view coming soon</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
