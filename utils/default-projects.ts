import { createClient } from "@/utils/supabase/client"

export async function initializeDefaultProjects(userId: string) {
  const supabase = createClient()

  try {
    // Call the database function to create default projects
    const { error } = await supabase.rpc("create_default_projects", { user_id: userId })

    if (error) {
      console.error("Error creating default projects:", error)
      return false
    }

    // Also create sample tasks
    const { error: sampleError } = await supabase.rpc("create_sample_tasks", { user_id: userId })

    if (sampleError) {
      console.error("Error creating sample tasks:", sampleError)
      // Don't return false here as projects were created successfully
    }

    return true
  } catch (error) {
    console.error("Error in initializeDefaultProjects:", error)
    return false
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
