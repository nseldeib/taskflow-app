import { createClient } from "@/utils/supabase/client"

export async function initializeDefaultProjects(userId: string) {
  const supabase = createClient()

  try {
    // First check if user already has projects
    const { data: existingProjects } = await supabase.from("events").select("id").eq("user_id", userId).limit(1)

    // If user already has projects, don't create defaults
    if (existingProjects && existingProjects.length > 0) {
      return true
    }

    // Try to use the database function first
    try {
      const { error: functionError } = await supabase.rpc("create_default_projects", { user_id: userId })

      if (!functionError) {
        // Function worked, also create sample tasks
        await supabase.rpc("create_sample_tasks", { user_id: userId })
        return true
      }
    } catch (funcError) {
      console.log("Database function not available, using direct insert method")
    }

    // Fallback: Create projects directly
    const defaultProjects = [
      {
        title: "Personal",
        description: "Personal tasks and life management",
        user_id: userId,
        start_time: new Date().toISOString(),
        end_time: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        title: "Work",
        description: "Professional tasks and projects",
        user_id: userId,
        start_time: new Date().toISOString(),
        end_time: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        title: "Goals",
        description: "Long-term objectives and milestones",
        user_id: userId,
        start_time: new Date().toISOString(),
        end_time: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        title: "Home",
        description: "Household tasks and family matters",
        user_id: userId,
        start_time: new Date().toISOString(),
        end_time: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        title: "Learning",
        description: "Education and skill development",
        user_id: userId,
        start_time: new Date().toISOString(),
        end_time: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        title: "Ideas",
        description: "Creative projects and future plans",
        user_id: userId,
        start_time: new Date().toISOString(),
        end_time: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]

    // Insert default projects
    const { data: insertedProjects, error: projectError } = await supabase
      .from("events")
      .insert(defaultProjects)
      .select("id, title")

    if (projectError) {
      console.error("Error creating default projects:", projectError)
      return false
    }

    // Create sample tasks if projects were created successfully
    if (insertedProjects && insertedProjects.length > 0) {
      await createSampleTasks(userId, insertedProjects)
    }

    return true
  } catch (error) {
    console.error("Error in initializeDefaultProjects:", error)
    return false
  }
}

async function createSampleTasks(userId: string, projects: { id: string; title: string }[]) {
  const supabase = createClient()

  try {
    const personalProject = projects.find((p) => p.title === "Personal")
    const workProject = projects.find((p) => p.title === "Work")
    const goalsProject = projects.find((p) => p.title === "Goals")

    const sampleTasks = []

    if (personalProject) {
      sampleTasks.push(
        {
          title: "Buy groceries",
          description: "Weekly grocery shopping",
          event_id: personalProject.id,
          user_id: userId,
          priority: "medium",
          completed: false,
          starred: false,
          due_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: "Schedule dentist appointment",
          description: "Annual checkup",
          event_id: personalProject.id,
          user_id: userId,
          priority: "low",
          completed: false,
          starred: true,
          due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week from now
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      )
    }

    if (workProject) {
      sampleTasks.push(
        {
          title: "Finish quarterly report",
          description: "Q4 performance analysis",
          event_id: workProject.id,
          user_id: userId,
          priority: "high",
          completed: false,
          starred: true,
          due_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: "Team meeting preparation",
          description: "Prepare agenda and materials",
          event_id: workProject.id,
          user_id: userId,
          priority: "medium",
          completed: false,
          starred: false,
          due_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day from now
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      )
    }

    if (goalsProject) {
      sampleTasks.push(
        {
          title: "Read 2 books this month",
          description: "Continue learning habit",
          event_id: goalsProject.id,
          user_id: userId,
          priority: "low",
          completed: false,
          starred: false,
          due_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks from now
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: "Exercise 3x this week",
          description: "Maintain fitness routine",
          event_id: goalsProject.id,
          user_id: userId,
          priority: "medium",
          completed: false,
          starred: true,
          due_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      )
    }

    if (sampleTasks.length > 0) {
      const { error: tasksError } = await supabase.from("todos").insert(sampleTasks)

      if (tasksError) {
        console.error("Error creating sample tasks:", tasksError)
      }
    }
  } catch (error) {
    console.error("Error in createSampleTasks:", error)
  }
}

export const defaultProjectIcons: Record<string, string> = {
  Personal: "🏠",
  Work: "💼",
  Goals: "🎯",
  Home: "🏡",
  Learning: "📚",
  Ideas: "💡",
}
