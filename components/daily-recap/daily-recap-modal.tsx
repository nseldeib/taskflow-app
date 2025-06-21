"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TaskSummary } from "./task-summary"
import { ReflectionForm } from "./reflection-form"
import { MoodSelector } from "./mood-selector"
import { useDailyRecap } from "@/hooks/use-daily-recap"
import { Calendar, Clock, Heart } from "lucide-react"

interface DailyRecapModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DailyRecapModal({ open, onOpenChange }: DailyRecapModalProps) {
  const { formData, updateFormData, submitRecap, isSubmitting, isComplete } = useDailyRecap()

  const handleSubmit = async () => {
    const success = await submitRecap()
    if (success) {
      onOpenChange(false)
    }
  }

  if (isComplete) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">✨ Recap Complete!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">Thanks for reflecting on your day. See you tomorrow!</p>
            <Button onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-500" />
            Daily Recap - {new Date().toLocaleDateString()}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Task Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-4 w-4" />
                Today's Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TaskSummary />
            </CardContent>
          </Card>

          {/* Mood Selector */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Heart className="h-4 w-4" />
                How are you feeling?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MoodSelector selectedMood={formData.mood} onMoodChange={(mood) => updateFormData({ mood })} />
            </CardContent>
          </Card>

          {/* Reflection Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Daily Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionForm
                reflections={formData.reflections}
                onReflectionsChange={(reflections) => updateFormData({ reflections })}
              />
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Skip for Today
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.mood}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              {isSubmitting ? "Saving..." : "Complete Recap"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
