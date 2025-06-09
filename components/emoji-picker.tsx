"use client"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface EmojiPickerProps {
  value: string
  onChange: (emoji: string) => void
}

const emojis = [
  "📝",
  "📋",
  "✅",
  "🎯",
  "🚀",
  "💡",
  "🔥",
  "⭐",
  "🎨",
  "🛠️",
  "📊",
  "📈",
  "💼",
  "🏆",
  "🎉",
  "🔔",
  "⚡",
  "🌟",
  "💎",
  "🎪",
  "🎭",
  "🎨",
  "🎯",
  "🎲",
  "🎸",
  "🎺",
  "🎻",
  "🎤",
  "🎧",
  "🎮",
]

export function EmojiPicker({ value, onChange }: EmojiPickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-12 h-12 p-0 text-xl">
          {value}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2">
        <div className="grid grid-cols-6 gap-1">
          {emojis.map((emoji) => (
            <Button
              key={emoji}
              variant="ghost"
              className="w-8 h-8 p-0 text-lg hover:bg-muted"
              onClick={() => onChange(emoji)}
            >
              {emoji}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
