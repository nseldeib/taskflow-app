"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export interface Reflections {
  wentWell: string
  challenges: string
  tomorrowPriorities: string
}

interface ReflectionFormProps {
  reflections: Reflections
  onReflectionsChange: (reflections: Reflections) => void
}

const questions = [
  {
    key: "wentWell" as keyof Reflections,
    label: "What went well today?",
    placeholder: "Celebrate your wins, big or small...",
    icon: "✨",
  },
  {
    key: "challenges" as keyof Reflections,
    label: "What was challenging?",
    placeholder: "What obstacles did you face?",
    icon: "🤔",
  },
  {
    key: "tomorrowPriorities" as keyof Reflections,
    label: "What are your priorities for tomorrow?",
    placeholder: "What do you want to focus on?",
    icon: "🎯",
  },
]

export function ReflectionForm({ reflections, onReflectionsChange }: ReflectionFormProps) {
  const updateReflection = (key: keyof Reflections, value: string) => {
    onReflectionsChange({
      ...reflections,
      [key]: value,
    })
  }

  return (
    <div className="space-y-6">
      {questions.map((question) => (
        <div key={question.key} className="space-y-2">
          <Label htmlFor={question.key} className="flex items-center gap-2">
            <span>{question.icon}</span>
            {question.label}
          </Label>
          <Textarea
            id={question.key}
            placeholder={question.placeholder}
            value={reflections[question.key]}
            onChange={(e) => updateReflection(question.key, e.target.value)}
            maxLength={200}
            rows={3}
            className="resize-none"
          />
          <div className="text-right text-xs text-muted-foreground">{reflections[question.key].length}/200</div>
        </div>
      ))}
    </div>
  )
}
