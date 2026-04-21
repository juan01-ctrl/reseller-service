import { useId } from "react"

type BrandMarkProps = {
  className?: string
}

/** Isotipo circular: barras + chevron (boost), paleta evergreen del sitio. */
export function BrandMark({ className = "" }: BrandMarkProps) {
  const id = useId().replace(/:/g, "")

  return (
    <span
      className={`relative inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/25 bg-[var(--evergreen-950)] shadow-[0_6px_18px_-8px_rgba(13,44,7,0.5)] ring-1 ring-white/10 ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 40 40" className="size-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${id}-bg`} x1="8" y1="6" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--evergreen-800)" />
            <stop offset="0.5" stopColor="var(--evergreen-900)" />
            <stop offset="1" stopColor="var(--evergreen-950)" />
          </linearGradient>
          <radialGradient
            id={`${id}-glow`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(12 10) rotate(55) scale(28 24)"
          >
            <stop stopColor="var(--evergreen-400)" stopOpacity="0.22" />
            <stop offset="1" stopColor="var(--evergreen-400)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-ring`} x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--evergreen-200)" stopOpacity="0.55" />
            <stop offset="1" stopColor="var(--evergreen-600)" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id={`${id}-b1`} x1="11" y1="28" x2="11" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="var(--evergreen-100)" />
          </linearGradient>
          <linearGradient id={`${id}-b2`} x1="19.5" y1="30" x2="19.5" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--evergreen-200)" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id={`${id}-b3`} x1="28" y1="31" x2="28" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--evergreen-300)" />
            <stop offset="0.55" stopColor="var(--evergreen-200)" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id={`${id}-chev`} x1="11" y1="12" x2="17" y2="7" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--evergreen-200)" />
            <stop offset="1" stopColor="var(--evergreen-50)" />
          </linearGradient>
          <clipPath id={`${id}-circ`}>
            <circle cx="20" cy="20" r="20" />
          </clipPath>
        </defs>

        <circle cx="20" cy="20" r="20" fill={`url(#${id}-bg)`} />
        <circle cx="20" cy="20" r="20" fill={`url(#${id}-glow)`} />
        <circle cx="20" cy="20" r="19.35" fill="none" stroke={`url(#${id}-ring)`} strokeWidth="0.65" />

        <g clipPath={`url(#${id}-circ)`}>
          <rect x="9" y="22" width="5.5" height="9" rx="1.6" fill={`url(#${id}-b1)`} />
          <rect x="17.25" y="16" width="5.5" height="15" rx="1.6" fill={`url(#${id}-b2)`} />
          <rect x="25.5" y="10" width="5.5" height="21" rx="1.6" fill={`url(#${id}-b3)`} />
          <path
            d="M11 11.5L14 8.5L17 11.5"
            stroke={`url(#${id}-chev)`}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="29.5" cy="11" r="1.15" fill="var(--evergreen-300)" fillOpacity="0.55" />
        </g>
      </svg>
    </span>
  )
}
