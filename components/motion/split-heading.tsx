"use client"

import * as React from "react"
import { gsap, prefersReducedMotion } from "@/lib/gsap"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p"
  y?: number
  stagger?: number
  duration?: number
  start?: string
}

function splitTextNodes(nodes: React.ReactNode): React.ReactNode {
  return React.Children.map(nodes, (node, idx) => {
    if (typeof node === "string") {
      const words = node.split(/(\s+)/)
      return words.map((w, i) => {
        if (/^\s+$/.test(w)) return w
        return (
          <span
            key={`w-${idx}-${i}`}
            className="split-word inline-block"
            style={{ willChange: "transform, opacity" }}
          >
            {w}
          </span>
        )
      })
    }
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{ children?: React.ReactNode }>
      const childProps = element.props ?? {}
      return React.cloneElement(element, childProps, splitTextNodes(childProps.children))
    }
    return node
  })
}

export function SplitHeading({
  children,
  className,
  as: Tag = "h2",
  y = 24,
  stagger = 0.05,
  duration = 0.7,
  start = "top 85%",
}: Props) {
  const ref = React.useRef<HTMLElement | null>(null)

  React.useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const words = el.querySelectorAll<HTMLElement>(".split-word")
    if (words.length === 0) return
    if (prefersReducedMotion()) {
      gsap.set(words, { opacity: 1, y: 0 })
      return
    }
    const ctx = gsap.context(() => {
      gsap.set(words, { opacity: 0, y })
      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      })
    })
    return () => ctx.revert()
  }, [y, stagger, duration, start])

  const Component = Tag as React.ElementType
  return (
    <Component ref={ref} className={cn(className)}>
      {splitTextNodes(children)}
    </Component>
  )
}
