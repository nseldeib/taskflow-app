"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { MoreHorizontal, Calendar, Plus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { format } from "date-fns"
import Link from "next/link"

interface Task {
  id: string
  title: string
  description?: string
  completed: boolean
  due_date?: string
  priority?: string
  project_id: string
}

interface TaskBoardProps {
  tasks: Task[]
  projectId: string
}

export function TaskBoard({ tasks, projectId }: TaskBoardProps) {
  const [loading, setLoading] = useState<Record<string, boolean>>({})
  const router = useRouter()

  const toggleTaskCompletion = async (task: Task) => {
    setLoading((prev) => ({ ...prev, [task.id]: true }))

    try {
      const supabase = createClient()

      const { error } = await supabase.from("todos").update({ completed: !task.completed }).eq("id", task.id)

      if (error) throw error

      router.refresh()
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to update task. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading((prev) => ({ ...prev, [task.id]: false }))
    }
  }

  const deleteTask = async (taskId: string) => {
    try {
      const supabase = createClient()

      const { error } = await supabase.from("todos").delete().eq("id", taskId)

      if (error) throw error

      toast({
        title: "Task deleted",
        description: "The task has been deleted successfully.",
      })

      router.refresh()
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to delete task. Please try again.",
        variant: "destructive",
      })
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "#ef4444"
      case "high":
        return "#f97316"
      case "medium":
        return "#eab308"
      case "low":
        return "#22c55e"
      default:
        return "#6b7280"
    }
  }

  const statusColumns = [
    {
      name: "Planned",
      tasks: tasks.filter((t) => (t.priority === "low" || t.priority === "medium") && !t.completed),
    },
    {
      name: "Important",
      tasks: tasks.filter((t) => (t.priority === "high" || t.priority === "urgent") && !t.completed),
    },
    {
      name: "In Progress",
      tasks: tasks.filter(
        (t) =>
          !t.completed &&
          t.priority !== "low" &&
          t.priority !== "medium" &&
          t.priority !== "high" &&
          t.priority !== "urgent",
      ),
    },
    {
      name: "Completed",
      tasks: tasks.filter((t) => t.completed),
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statusColumns.map((column) => (
        <div key={column.name} className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              {column.name} ({column.tasks.length})
            </h3>
            <Button size="sm" variant="ghost" asChild>
              <Link href={`/dashboard/projects/${projectId}/tasks/new`}>
                <Plus className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="space-y-3">
            {column.tasks.map((task) => (
              <Card key={task.id} className="p-3">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 flex-1">
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTaskCompletion(task)}
                        disabled={loading[task.id]}
                        className="h-4 w-4"
                      />
                      <div className="flex items-center gap-1">
                        <span className="text-sm">📝</span>
                        <span
                          className={`text-sm font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}
                        >
                          {task.title}
                        </span>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => deleteTask(task.id)}>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {task.description && <p className="text-xs text-muted-foreground line-clamp-2">{task.description}</p>}

                  <div className="flex flex-wrap gap-1">
                    {task.priority && (
                      <Badge
                        className="text-xs"
                        style={{
                          backgroundColor: `${getPriorityColor(task.priority)}20`,
                          color: getPriorityColor(task.priority),
                          borderColor: `${getPriorityColor(task.priority)}40`,
                        }}
                        variant="outline"
                      >
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </Badge>
                    )}
                    {task.due_date && (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {format(new Date(task.due_date), "MMM d")}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
            {column.tasks.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No tasks in {column.name.toLowerCase()}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
