"use client"

import * as React from "react"
import {
  Dithering,
  DotOrbit,
  GrainGradient,
  NeuroNoise,
  PerlinNoise,
  PulsingBorder,
  SmokeRing,
  Waves,
} from "@paper-design/shaders-react"
import { cn } from "@/lib/utils"

export type ShaderVariant =
  | "smoke"
  | "orbit"
  | "dither"
  | "pulse"
  | "waves"
  | "grain"
  | "perlin"
  | "neuro"

const EVERGREEN = {
  light: "#8ee97c",
  mid: "#43da25",
  deep: "#288316",
  ink: "#0d2c07",
  whisper: "#ecfbe9",
}

type Props = {
  variant: ShaderVariant
  children: React.ReactNode
  className?: string
  size?: number
}

const SHADER_SIZE_STYLE = { width: "100%", height: "100%" } as const
const COMMON = {
  speed: 0.6,
  maxPixelCount: 320 * 320,
  style: SHADER_SIZE_STYLE,
} as const

function ShaderLayer({ variant }: { variant: ShaderVariant }) {
  switch (variant) {
    case "smoke":
      return (
        <SmokeRing
          {...COMMON}
          colorBack={EVERGREEN.ink}
          colors={[EVERGREEN.light, EVERGREEN.mid]}
          thickness={0.45}
          radius={0.4}
          noiseScale={1.8}
          innerShape={1.2}
        />
      )
    case "orbit":
      return (
        <DotOrbit
          {...COMMON}
          colorBack={EVERGREEN.ink}
          colors={[EVERGREEN.light, EVERGREEN.mid, EVERGREEN.whisper]}
          size={0.6}
          spreading={0.8}
          stepsPerColor={2}
          scale={1.6}
        />
      )
    case "dither":
      return (
        <Dithering
          {...COMMON}
          colorBack={EVERGREEN.deep}
          colorFront={EVERGREEN.whisper}
          shape="swirl"
          type="8x8"
          pxSize={1.8}
        />
      )
    case "pulse":
      return (
        <PulsingBorder
          {...COMMON}
          colorBack={EVERGREEN.ink}
          colors={[EVERGREEN.mid, EVERGREEN.light]}
          roundness={1}
          thickness={0.15}
          softness={0.6}
          intensity={1}
          pulse={1}
        />
      )
    case "waves":
      return (
        <Waves
          {...COMMON}
          colorBack={EVERGREEN.deep}
          colorFront={EVERGREEN.light}
          shape={1}
          frequency={2}
          amplitude={0.5}
          spacing={0.8}
        />
      )
    case "grain":
      return (
        <GrainGradient
          {...COMMON}
          colorBack={EVERGREEN.ink}
          colors={[EVERGREEN.light, EVERGREEN.mid, EVERGREEN.deep]}
          softness={0.8}
          intensity={0.5}
          noise={0.35}
          shape="wave"
        />
      )
    case "perlin":
      return (
        <PerlinNoise
          {...COMMON}
          colorBack={EVERGREEN.ink}
          colorFront={EVERGREEN.light}
          scale={0.8}
          proportion={0.35}
        />
      )
    case "neuro":
      return (
        <NeuroNoise
          {...COMMON}
          colorBack={EVERGREEN.ink}
          colorFront={EVERGREEN.mid}
          brightness={1.1}
        />
      )
    default:
      return null
  }
}

export function ShaderBadge({ variant, children, className, size = 44 }: Props) {
  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-foreground/90",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span className="absolute inset-0">
        <ShaderLayer variant={variant} />
      </span>
      <span className="relative z-10 flex items-center justify-center text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
        {children}
      </span>
    </span>
  )
}
