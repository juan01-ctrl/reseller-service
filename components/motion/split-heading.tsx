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
  /** Selector (dentro del heading) para un acento que se anima al terminar las palabras (ej. subrayado). */
  accentSelector?: string
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
  accentSelector,
}: Props) {
  const ref = React.useRef<HTMLElement | null>(null)

  React.useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const words = el.querySelectorAll<HTMLElement>(".split-word")
    if (words.length === 0) return
    const accent = accentSelector ? el.querySelector<HTMLElement>(accentSelector) : null

    if (prefersReducedMotion()) {
      gsap.set(words, { opacity: 1, y: 0 })
      if (accent) gsap.set(accent, { scaleX: 1, transformOrigin: "0% 50%" })
      return
    }

    const ctx = gsap.context(() => {
      const st = {
        trigger: el,
        start,
        toggleActions: "play none none none" as const,
      }

      if (!accent) {
        gsap.set(words, { opacity: 0, y })
        gsap.to(words, {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          stagger,
          scrollTrigger: st,
        })
        return
      }

      gsap.set(words, { opacity: 0, y })
      gsap.set(accent, { scaleX: 0, transformOrigin: "0% 50%" })

      const tl = gsap.timeline({ scrollTrigger: st })
      tl.fromTo(
        words,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration, ease: "power3.out", stagger },
      ).fromTo(
        accent,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: "power2.out" },
        ">-=0.28",
      )
    })
    return () => ctx.revert()
  }, [y, stagger, duration, start, accentSelector])

  const Component = Tag as React.ElementType
  return (
    <Component ref={ref} className={cn(className)}>
      {splitTextNodes(children)}
    </Component>
  )
}
