import { SplitHeading } from "@/components/motion/split-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"

const stats = [
  { value: "7 días", label: "De tu catálogo a producción" },
  { value: "< 1 min", label: "Tiempo de respuesta del asistente" },
  { value: "30 días", label: "Garantía con devolución completa" },
]

export function Stats() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
          Por qué ImportBoost
        </p>
        <SplitHeading
          as="h2"
          className="mx-auto mt-3 max-w-2xl text-balance text-center text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[40px]"
        >
          Lo que sí podemos garantizar.
        </SplitHeading>

        <StaggerGroup
          className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3"
          stagger={0.15}
          y={18}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2 bg-card px-8 py-10 text-center">
              <span className="font-mono text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {s.value}
              </span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
