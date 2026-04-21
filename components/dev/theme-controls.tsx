"use client"

import * as React from "react"
import { Moon, Sun, Palette, X } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

type ColorOption = {
  id: string
  name: string
  sub: string
  primary: string
  primaryForeground: string
  ring: string
  accent: string
  accentForeground: string
}

const COLORS: ColorOption[] = [
  {
    id: "verde",
    name: "Verde",
    sub: "Evergreen · marca",
    primary: "#36ae1e",
    primaryForeground: "#ffffff",
    ring: "#36ae1e",
    accent: "#ecfbe9",
    accentForeground: "#1b570f",
  },
  {
    id: "indigo",
    name: "Índigo",
    sub: "Premium / software",
    primary: "#4F46E5",
    primaryForeground: "#ffffff",
    ring: "#4F46E5",
    accent: "#EEF2FF",
    accentForeground: "#3730A3",
  },
  {
    id: "terracotta",
    name: "Terracotta",
    sub: "Cálido / retail",
    primary: "#C2410C",
    primaryForeground: "#ffffff",
    ring: "#C2410C",
    accent: "#FFF7ED",
    accentForeground: "#9A3412",
  },
  {
    id: "teal",
    name: "Teal",
    sub: "Confianza / grounded",
    primary: "#0D9488",
    primaryForeground: "#ffffff",
    ring: "#0D9488",
    accent: "#F0FDFA",
    accentForeground: "#115E59",
  },
]

const STORAGE_KEY = "ib-primary-color"

function applyColor(c: ColorOption) {
  const root = document.documentElement
  root.style.setProperty("--primary", c.primary)
  root.style.setProperty("--primary-foreground", c.primaryForeground)
  root.style.setProperty("--ring", c.ring)
  root.style.setProperty("--accent", c.accent)
  root.style.setProperty("--accent-foreground", c.accentForeground)
}

export function ThemeControls() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [activeId, setActiveId] = React.useState<string>("verde")
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null
    const match = COLORS.find((c) => c.id === stored) ?? COLORS[0]
    setActiveId(match.id)
    applyColor(match)
  }, [])

  const handlePick = (c: ColorOption) => {
    setActiveId(c.id)
    applyColor(c)
    localStorage.setItem(STORAGE_KEY, c.id)
  }

  const toggleTheme = () => {
    const current = resolvedTheme ?? theme
    setTheme(current === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  const isDark = (resolvedTheme ?? theme) === "dark"

  return (
    <div className="fixed bottom-4 right-4 z-[100] print:hidden">
      {open ? (
        <div className="flex max-w-[320px] flex-col gap-3 rounded-2xl border border-border bg-card p-3 shadow-[0_20px_40px_-15px_oklch(0.2_0.05_240_/_0.3)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 px-1">
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Tema de prueba
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar panel de tema"
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {COLORS.map((c) => (
              <button
                key={c.id}
                onClick={() => handlePick(c)}
                aria-label={`Primary color ${c.name} — ${c.sub}`}
                title={`${c.name} · ${c.sub}`}
                className={cn(
                  "h-8 w-8 rounded-full border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                  activeId === c.id
                    ? "scale-110 border-foreground"
                    : "border-transparent hover:scale-105",
                )}
                style={{ backgroundColor: c.primary }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
            <span className="text-xs text-muted-foreground">
              {COLORS.find((c) => c.id === activeId)?.name}
            </span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              {isDark ? "Claro" : "Oscuro"}
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir panel de tema"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-[0_10px_30px_-10px_oklch(0.2_0.05_240_/_0.25)] transition-colors hover:bg-muted"
        >
          <Palette className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
