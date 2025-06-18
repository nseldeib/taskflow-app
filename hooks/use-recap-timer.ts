"use client"

import { useState, useEffect } from "react"

export function useRecapTimer() {
  const [shouldShowRecap, setShouldShowRecap] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // Update time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const checkRecapTime = () => {
      const now = new Date()
      const today = now.toISOString().split("T")[0]

      // Check if recap already completed today
      const isCompleted = localStorage.getItem(`recap_completed_${today}`) === "true"
      if (isCompleted) {
        setShouldShowRecap(false)
        return
      }

      // Check if it's 6 PM or later (18:00)
      const hour = now.getHours()
      const isRecapTime = hour >= 18 // 6 PM or later

      // Also check if user manually dismissed today
      const isDismissed = localStorage.getItem(`recap_dismissed_${today}`) === "true"

      setShouldShowRecap(isRecapTime && !isDismissed)
    }

    checkRecapTime()
  }, [currentTime])

  const dismissRecap = () => {
    const today = new Date().toISOString().split("T")[0]
    localStorage.setItem(`recap_dismissed_${today}`, "true")
    setShouldShowRecap(false)
  }

  const showRecapManually = () => {
    setShouldShowRecap(true)
  }

  return {
    shouldShowRecap,
    dismissRecap,
    showRecapManually,
    currentTime,
  }
}
