import { cn } from "@/lib/utils"

// TODO: Reemplazar con clientes reales cuando estén listos.
const CLIENTS = [
  "Importaciones M/R",
  "TechCenter AR",
  "ElectroImport",
  "Mobile Planet",
  "Importados.ar",
  "Phone Center",
  "Consolas Premium",
  "Gadget House",
]

type Props = {
  items?: string[]
  label?: string
  className?: string
  speed?: string
}

export function Marquee({
  items = CLIENTS,
  label = "Confían en nosotros",
  className,
  speed = "45s",
}: Props) {
  const doubled = [...items, ...items]

  return (
    <div className={cn("relative", className)}>
      <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
      <div
        className="marquee-mask relative overflow-hidden"
        style={{ ["--marquee-speed" as string]: speed }}
      >
        <div className="flex w-max animate-marquee-x items-center gap-x-16 whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-muted-foreground/80 sm:text-xl"
            >
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60"
              />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
