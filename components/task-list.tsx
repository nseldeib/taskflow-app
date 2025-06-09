"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { toast } from "@/hooks/use-toast"
import { MoreHorizontal, Calendar, Star } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface Task {
  id: string
  title: string
  description?: string
  completed: boolean
  starred?: boolean
  due_date?: string
  priority?: string
  user_id: string
  event_id?: string
  created_at: string
  updated_at: string
}

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const [loading, setLoading] = useState<Record<string, boolean>>({})
  const [projectNames, setProjectNames] = useState<Record<string, string>>({})
  const router = useRouter()

  // Fetch project names for tasks that have event_id
  useEffect(() => {
    const fetchProjectNames = async () => {
      const supabase = createClient()
      const eventIds = tasks.filter((task) => task.event_id).map((task) => task.event_id!)

      if (eventIds.length > 0) {
        const { data: projects } = await supabase.from("events").select("id, title").in("id", eventIds)

        if (projects) {
          const nameMap: Record<string, string> = {}
          projects.forEach((project) => {
            nameMap[project.id] = project.title
          })
          setProjectNames(nameMap)
        }
      }
    }

    fetchProjectNames()
  }, [tasks])

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

  const toggleTaskStar = async (task: Task) => {
    setLoading((prev) => ({ ...prev, [task.id]: true }))

    try {
      const supabase = createClient()

      const { error } = await supabase.from("todos").update({ starred: !task.starred }).eq("id", task.id)

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
        return "bg-red-500/20 text-red-500 border-red-500/40"
      case "high":
        return "bg-orange-500/20 text-orange-500 border-orange-500/40"
      case "medium":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/40"
      case "low":
        return "bg-green-500/20 text-green-500 border-green-500/40"
      default:
        return "bg-gray-500/20 text-gray-500 border-gray-500/40"
    }
  }

  if (tasks.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-muted-foreground">No tasks found.</p>
      </div>
    )
  }

  return (
    <div className="divide-y">
      {tasks.map((task) => (
        <div key={task.id} className={`flex items-center p-4 hover:bg-muted/50 ${task.completed ? "bg-muted/30" : ""}`}>
          <div className="flex items-center gap-3 flex-1">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTaskCompletion(task)}
              disabled={loading[task.id]}
              className="h-5 w-5"
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0"
              onClick={() => toggleTaskStar(task)}
              disabled={loading[task.id]}
            >
              <Star
                className={cn(
                  "h-4 w-4",
                  task.starred ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground hover:text-yellow-400",
                )}
              />
            </Button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xl">📝</span>
                <span className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                  {task.title}
                </span>
              </div>
              {task.description && (
                <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{task.description}</p>
              )}
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {task.event_id && projectNames[task.event_id] && (
                  <Badge variant="outline" className="text-xs">
                    {projectNames[task.event_id]}
                  </Badge>
                )}
                {task.priority && (
                  <Badge className={`text-xs ${getPriorityColor(task.priority)}`} variant="outline">
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </Badge>
                )}
                {task.due_date && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {format(new Date(task.due_date), "MMM d, yyyy")}
                  </div>
                )}
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => toggleTaskStar(task)}>
                {task.starred ? "Unstar" : "Star"} Task
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => deleteTask(task.id)}>Delete Task</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}
