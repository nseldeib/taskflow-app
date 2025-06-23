"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type Mood = "terrible" | "bad" | "okay" | "good" | "amazing"

interface MoodOption {
  value: Mood
  emoji: string
  label: string
  color: string
}

const moodOptions: MoodOption[] = [
  { value: "terrible", emoji: "😔", label: "Terrible", color: "hover:bg-red-50 dark:hover:bg-red-950/20" },
  { value: "bad", emoji: "😐", label: "Bad", color: "hover:bg-orange-50 dark:hover:bg-orange-950/20" },
  { value: "okay", emoji: "🙂", label: "Okay", color: "hover:bg-yellow-50 dark:hover:bg-yellow-950/20" },
  { value: "good", emoji: "😊", label: "Good", color: "hover:bg-green-50 dark:hover:bg-green-950/20" },
  { value: "amazing", emoji: "🎉", label: "Amazing", color: "hover:bg-purple-50 dark:hover:bg-purple-950/20" },
]

interface MoodSelectorProps {
  selectedMood?: Mood
  onMoodChange: (mood: Mood) => void
}

export function MoodSelector({ selectedMood, onMoodChange }: MoodSelectorProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Select how you're feeling about today:</p>
      <div className="grid grid-cols-5 gap-2">
        {moodOptions.map((mood) => (
          <Button
            key={mood.value}
            variant="outline"
            className={cn(
              "h-20 flex-col gap-1 transition-all",
              mood.color,
              selectedMood === mood.value && "ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/20",
            )}
            onClick={() => onMoodChange(mood.value)}
          >
            <span className="text-2xl">{mood.emoji}</span>
            <span className="text-xs">{mood.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
