"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
