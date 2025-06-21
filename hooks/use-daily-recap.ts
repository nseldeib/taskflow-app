"use client"

import { useState, useCallback } from "react"
import { createClient } from "@/utils/supabase/client"
import { toast } from "@/hooks/use-toast"
import type { Mood } from "@/components/daily-recap/mood-selector"
import type { Reflections } from "@/components/daily-recap/reflection-form"

interface RecapFormData {
  mood?: Mood
  reflections: Reflections
}

const initialReflections: Reflections = {
  wentWell: "",
  challenges: "",
  tomorrowPriorities: "",
}

export function useDailyRecap() {
  const [formData, setFormData] = useState<RecapFormData>({
    reflections: initialReflections,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const updateFormData = useCallback((updates: Partial<RecapFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }, [])

  const submitRecap = useCallback(async (): Promise<boolean> => {
    if (!formData.mood) {
      toast({
        title: "Missing Information",
        description: "Please select your mood before submitting.",
        variant: "destructive",
      })
      return false
    }

    setIsSubmitting(true)

    try {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        throw new Error("User not authenticated")
      }

      // For now, we'll store in localStorage since we don't have a recaps table yet
      // In a real implementation, you'd save to Supabase
      const recapData = {
        date: new Date().toISOString().split("T")[0],
        mood: formData.mood,
        reflections: formData.reflections,
        userId: user.id,
        createdAt: new Date().toISOString(),
      }

      // Store in localStorage for now
      const existingRecaps = JSON.parse(localStorage.getItem("dailyRecaps") || "[]")
      const updatedRecaps = [...existingRecaps, recapData]
      localStorage.setItem("dailyRecaps", JSON.stringify(updatedRecaps))

      // Mark today as completed
      localStorage.setItem(`recap_completed_${new Date().toISOString().split("T")[0]}`, "true")

      toast({
        title: "Recap Saved! 🎉",
        description: "Thank you for taking time to reflect on your day.",
      })

      setIsComplete(true)
      return true
    } catch (error) {
      console.error("Error submitting recap:", error)
      toast({
        title: "Error",
        description: "Failed to save your recap. Please try again.",
        variant: "destructive",
      })
      return false
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  const resetForm = useCallback(() => {
    setFormData({ reflections: initialReflections })
    setIsComplete(false)
  }, [])

  return {
    formData,
    updateFormData,
    submitRecap,
    isSubmitting,
    isComplete,
    resetForm,
  }
}
