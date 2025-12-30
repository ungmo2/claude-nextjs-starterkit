"use client"

import { useState, useEffect, useId } from "react"

export function ParticlesBackground() {
  const id = useId()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* CSS 애니메이션 particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`${id}-particle-${i}`}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  )
}
