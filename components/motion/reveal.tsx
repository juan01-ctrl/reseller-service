"use client"

import * as React from "react"
import { gsap, prefersReducedMotion } from "@/lib/gsap"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
  y?: number
  delay?: number
  duration?: number
  start?: string
}

export function Reveal({
  children,
  className,
  as: Tag = "div",
  y = 24,
  delay = 0,
  duration = 0.7,
  start = "top 85%",
}: Props) {
  const ref = React.useRef<HTMLElement | null>(null)

  React.useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 })
      return
    }
    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, y })
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      })
    })
    return () => ctx.revert()
  }, [y, delay, duration, start])

  const Component = Tag as React.ElementType
  return (
    <Component ref={ref} className={cn(className)}>
      {children}
    </Component>
  )
}
