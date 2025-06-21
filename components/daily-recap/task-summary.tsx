"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { CheckCircle2, Clock, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface TaskStats {
  completed: number
  total: number
  completedToday: number
}

export function TaskSummary() {
  const [stats, setStats] = useState<TaskStats>({ completed: 0, total: 0, completedToday: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTaskStats = async () => {
      try {
        const supabase = createClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) return

        // Get today's date range
        const today = new Date()
        const startOfDay = new Date(today.setHours(0, 0, 0, 0)).toISOString()
        const endOfDay = new Date(today.setHours(23, 59, 59, 999)).toISOString()

        // Fetch all tasks
        const { data: allTasks } = await supabase.from("todos").select("*").eq("user_id", user.id)

        // Fetch tasks completed today
        const { data: completedToday } = await supabase
          .from("todos")
          .select("*")
          .eq("user_id", user.id)
          .eq("completed", true)
          .gte("updated_at", startOfDay)
          .lte("updated_at", endOfDay)

        if (allTasks) {
          const completed = allTasks.filter((task) => task.completed).length
          setStats({
            completed,
            total: allTasks.length,
            completedToday: completedToday?.length || 0,
          })
        }
      } catch (error) {
        console.error("Error fetching task stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTaskStats()
  }, [])

  if (loading) {
    return <div className="text-center text-muted-foreground">Loading your progress...</div>
  }

  const completionRate = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0
  const remaining = stats.total - stats.completed

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span className="text-2xl font-bold text-green-600">{stats.completedToday}</span>
          </div>
          <p className="text-xs text-muted-foreground">Completed Today</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1">
            <Clock className="h-4 w-4 text-orange-500" />
            <span className="text-2xl font-bold text-orange-600">{remaining}</span>
          </div>
          <p className="text-xs text-muted-foreground">Remaining</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1">
            <TrendingUp className="h-4 w-4 text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">{Math.round(completionRate)}%</span>
          </div>
          <p className="text-xs text-muted-foreground">Overall Progress</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>
            {stats.completed} of {stats.total} tasks
          </span>
        </div>
        <Progress value={completionRate} className="h-2" />
      </div>

      {stats.completedToday > 0 && (
        <div className="text-center text-sm text-green-600 bg-green-50 dark:bg-green-950/20 p-2 rounded">
          🎉 Great job! You completed {stats.completedToday} task{stats.completedToday !== 1 ? "s" : ""} today.
        </div>
      )}
    </div>
  )
}
