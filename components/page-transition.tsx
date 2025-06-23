"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { LoadingScreen } from "./loading-screen"

interface PageTransitionProps {
  children: React.ReactNode
  loading?: boolean
  loadingMessage?: string
}

export function PageTransition({ children, loading = false, loadingMessage = "Loading..." }: PageTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(loading)

  useEffect(() => {
    if (loading) {
      setIsTransitioning(true)
      // Minimum loading time for smooth UX
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 800)
      return () => clearTimeout(timer)
    } else {
      setIsTransitioning(false)
    }
  }, [loading])

  if (isTransitioning) {
    return <LoadingScreen message={loadingMessage} variant="default" />
  }

  return <div className="animate-fade-in">{children}</div>
}
