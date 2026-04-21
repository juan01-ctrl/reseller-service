"use client"

import * as React from "react"
import { gsap, prefersReducedMotion } from "@/lib/gsap"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
  selector?: string
  y?: number
  stagger?: number
  duration?: number
  start?: string
}

export function StaggerGroup({
  children,
  className,
  as: Tag = "div",
  selector = ":scope > *",
  y = 28,
  stagger = 0.1,
  duration = 0.7,
  start = "top 85%",
}: Props) {
  const ref = React.useRef<HTMLElement | null>(null)

  React.useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const items = Array.from(root.querySelectorAll(selector)) as HTMLElement[]
    if (items.length === 0) return
    if (prefersReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0 })
      return
    }
    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y })
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration,
        ease: "power2.out",
        stagger,
        scrollTrigger: {
          trigger: root,
          start,
          toggleActions: "play none none none",
        },
      })
    })
    return () => ctx.revert()
  }, [selector, y, stagger, duration, start])

  const Component = Tag as React.ElementType
  return (
    <Component ref={ref} className={cn(className)}>
      {children}
    </Component>
  )
}
