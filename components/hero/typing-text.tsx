"use client"

import { useState, useEffect } from "react"

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
}

export function TypingText({
  text,
  className = "",
  speed = 100,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-6 md:h-8 lg:h-10 ml-1 bg-primary animate-pulse" />
      )}
    </span>
  )
}
