import { useId } from "react"

type BrandMarkProps = {
  className?: string
}

/** Isotipo circular: barras + chevron (boost), paleta evergreen del sitio. */
export function BrandMark({ className = "" }: BrandMarkProps) {
  const id = useId().replace(/:/g, "")

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden ${className}`}
      aria-hidden
    >
      <img src="/icon.png" alt="ImportBoost" width={36} height={36} />
    </span>
  )
}
