"use client"

import { Sparkles, CheckCircle, Target, Layers } from "lucide-react"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  message?: string
  showProgress?: boolean
  variant?: "default" | "minimal" | "full"
}

export function LoadingScreen({
  message = "Loading your workspace...",
  showProgress = true,
  variant = "default",
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { icon: Target, label: "Setting up projects", color: "text-purple-400" },
    { icon: CheckCircle, label: "Loading tasks", color: "text-blue-400" },
    { icon: Layers, label: "Organizing workspace", color: "text-green-400" },
    { icon: Sparkles, label: "Almost ready", color: "text-yellow-400" },
  ]

  useEffect(() => {
    if (!showProgress) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        if (newProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return newProgress
      })
    }, 200)

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 800)

    return () => {
      clearInterval(interval)
      clearInterval(stepInterval)
    }
  }, [showProgress, steps.length])

  if (variant === "minimal") {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-spin">
            <div className="h-full w-full rounded-full border-2 border-transparent border-t-white animate-spin" />
          </div>
          <span className="text-sm text-muted-foreground">{message}</span>
        </div>
      </div>
    )
  }

  if (variant === "full") {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="text-center space-y-8 p-8">
          {/* Animated Logo */}
          <div className="relative">
            <div className="h-20 w-20 mx-auto rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center animate-pulse-glow">
              <Sparkles className="h-10 w-10 text-white animate-bounce" />
            </div>

            {/* Floating particles */}
            <div className="absolute -top-2 -left-2 h-4 w-4 bg-purple-400/60 rounded-full animate-float" />
            <div className="absolute -top-1 -right-3 h-3 w-3 bg-blue-400/60 rounded-full animate-float-delayed" />
            <div className="absolute -bottom-2 -right-1 h-2 w-2 bg-indigo-400/60 rounded-full animate-float-slow" />
            <div className="absolute -bottom-1 -left-3 h-3 w-3 bg-purple-300/60 rounded-full animate-float-reverse" />
          </div>

          {/* Loading Text */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              TaskFlow
            </h2>
            <p className="text-muted-foreground animate-pulse">{message}</p>
          </div>

          {/* Progress Steps */}
          {showProgress && (
            <div className="space-y-6 max-w-sm mx-auto">
              <div className="space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = index === currentStep
                  const isCompleted = index < currentStep

                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 transition-all duration-500 ${
                        isActive ? "scale-105 opacity-100" : "opacity-60"
                      }`}
                    >
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isCompleted
                            ? "bg-green-500/20 text-green-400"
                            : isActive
                              ? `bg-gradient-to-r from-purple-500/20 to-blue-500/20 ${step.color}`
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${isActive ? "animate-pulse" : ""}`} />
                      </div>
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center">{Math.round(progress)}% complete</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-6">
      {/* Animated Logo */}
      <div className="relative">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center animate-pulse-glow">
          <Sparkles className="h-8 w-8 text-white animate-spin-slow" />
        </div>

        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute -top-1 left-1/2 h-2 w-2 bg-purple-400 rounded-full animate-pulse" />
          <div className="absolute top-1/2 -right-1 h-2 w-2 bg-blue-400 rounded-full animate-pulse delay-300" />
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 bg-indigo-400 rounded-full animate-pulse delay-700" />
          <div className="absolute top-1/2 -left-1 h-2 w-2 bg-purple-300 rounded-full animate-pulse delay-1000" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <p className="text-muted-foreground animate-pulse">{message}</p>
        {showProgress && (
          <div className="flex items-center justify-center gap-1">
            <div className="h-1 w-1 bg-purple-400 rounded-full animate-bounce" />
            <div className="h-1 w-1 bg-blue-400 rounded-full animate-bounce delay-100" />
            <div className="h-1 w-1 bg-indigo-400 rounded-full animate-bounce delay-200" />
          </div>
        )}
      </div>
    </div>
  )
}
