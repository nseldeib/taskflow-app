"use client"

import { useState, useEffect } from "react"
import { DailyRecapModal } from "./daily-recap-modal"
import { useRecapTimer } from "@/hooks/use-recap-timer"
import { Button } from "@/components/ui/button"

export function DailyRecapProvider() {
  const { shouldShowRecap, dismissRecap, showRecapManually } = useRecapTimer()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(shouldShowRecap)
  }, [shouldShowRecap])

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      dismissRecap()
    }
  }

  return (
    <>
      <DailyRecapModal open={isOpen} onOpenChange={handleOpenChange} />
      {/* Manual trigger button for testing */}
      <div className="fixed bottom-4 right-4">
        <Button
          onClick={showRecapManually}
          variant="gradient"
          size="lg"
          className="shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          📝 Daily Recap
        </Button>
      </div>
    </>
  )
}
