"use client"

import { useEffect, useMemo, useState } from "react"

const STORAGE_KEY = "importboost-pricing-deadline-v1"
const DEFAULT_DURATION_HOURS = 72

function resolveDeadline(): number {
  const now = Date.now()

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? Number(stored) : NaN
    if (Number.isFinite(parsed) && parsed > now) return parsed
  } catch {
    // no-op
  }

  const fresh = now + DEFAULT_DURATION_HOURS * 60 * 60 * 1000

  try {
    window.localStorage.setItem(STORAGE_KEY, String(fresh))
  } catch {
    // no-op
  }

  return fresh
}

function formatRemaining(ms: number) {
  const totalMinutes = Math.max(0, Math.floor(ms / 60000))
  const days = Math.floor(totalMinutes / (60 * 24))
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60)
  const minutes = totalMinutes % 60
  return `${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m`
}

export function OfferCountdown() {
  const [deadline, setDeadline] = useState<number | null>(null)
  const [now, setNow] = useState<number>(() => Date.now())

  useEffect(() => {
    const resolved = resolveDeadline()
    setDeadline(resolved)
    setNow(Date.now())

    const id = window.setInterval(() => {
      setNow(Date.now())
    }, 30000)

    return () => window.clearInterval(id)
  }, [])

  const label = useMemo(() => {
    if (!deadline) return "Cargando oferta..."
    const remaining = deadline - now
    if (remaining <= 0) return "Promo 30% OFF finalizada"
    return `Promo 30% OFF: termina en ${formatRemaining(remaining)}`
  }, [deadline, now])

  return (
    <span className="inline-flex whitespace-nowrap rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
      {label}
    </span>
  )
}
