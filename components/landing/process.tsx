import { SplitHeading } from "@/components/motion/split-heading"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup } from "@/components/motion/stagger-group"

const steps = [
  {
    num: "01",
    day: "Día 1-2",
    title: "Conocemos tu negocio",
    body: "Nos pasás tu catálogo (o lo armamos desde tu Instagram). 30 min de llamada: tono, cuotas, bancos, envíos, criterio comercial.",
  },
  {
    num: "02",
    day: "Día 3-5",
    title: "Construimos",
    body: "Web + conexión WhatsApp Business + Instagram + IA entrenada con tu catálogo. Probamos respuestas juntos.",
  },
  {
    num: "03",
    day: "Día 6-7",
    title: "Ajustes y launch",
    body: "Afinamos con tus FAQs reales. Empieza a vender — con la tranquilidad de saber que responde como vos.",
  },
]

export function Process() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-28">
        <div className="max-w-2xl">
          <Reveal as="p" y={8} duration={0.5} className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Proceso
          </Reveal>
          <SplitHeading
            as="h2"
            className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[44px]"
          >
            De tu catálogo a ventas automáticas en 7 días.
          </SplitHeading>
          <Reveal delay={0.25} duration={0.7}>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Sin reuniones de dos horas. Sin demos interminables. Así arrancamos:
            </p>
          </Reveal>
        </div>

        <StaggerGroup as="ol" className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.12} y={32}>
          {steps.map((s, i) => (
            <li
              key={s.num}
              className="relative flex flex-col gap-6 rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">{s.num}</span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary">
                  {s.day}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-muted-foreground md:flex"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
