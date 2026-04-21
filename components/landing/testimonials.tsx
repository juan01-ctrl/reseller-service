import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { SplitHeading } from "@/components/motion/split-heading"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup } from "@/components/motion/stagger-group"

// TODO: Reemplazar con testimonios reales cuando estén los fundadores.
type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
  featured?: boolean
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Antes perdía 10 ventas al mes por no responder a tiempo. Ahora ImportBoost me contesta a las 3 AM y cierro mientras duermo. En el primer mes se pagó el setup dos veces.",
    name: "Diego M.",
    role: "Importaciones M/R · Rosario",
    initials: "DM",
    featured: true,
  },
  {
    quote:
      "La web quedó impecable y el chat responde mejor que yo cuando estoy cansado. Lo mejor: cuando hace falta criterio me pasa el chat sin quemar al cliente.",
    name: "Lucas P.",
    role: "TechCenter AR · CABA",
    initials: "LP",
  },
  {
    quote:
      "Tenía miedo de que la IA respondiera cualquier cosa. Nunca inventa: si no sabe, me deriva. Pasé de 30 consultas sin responder a 0.",
    name: "Martín S.",
    role: "ElectroImport · Córdoba",
    initials: "MS",
  },
  {
    quote:
      "Lo armamos en 7 días y ya en la primera semana tres clientes me reservaron equipos por Instagram de madrugada. Nunca lo hubiera atendido a esa hora.",
    name: "Florencia G.",
    role: "Mobile Planet · Mendoza",
    initials: "FG",
  },
]

export function Testimonials() {
  const featured = testimonials.find((t) => t.featured)
  const rest = testimonials.filter((t) => !t.featured)

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" y={8} duration={0.5} className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Testimonios
          </Reveal>
          <SplitHeading
            as="h2"
            className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[44px]"
          >
            Lo que dicen los importadores que ya lo usan.
          </SplitHeading>
          <Reveal delay={0.25} duration={0.7}>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Resellers reales, ciudades reales, ventas reales. Cero guiones.
            </p>
          </Reveal>
        </div>

        {featured && (
          <Reveal delay={0.3} y={28} duration={0.8} className="mt-14">
            <figure
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 70% 70% at 100% 0%, color-mix(in oklch, var(--primary) 12%, transparent), transparent 70%)",
              }}
            >
              <Quote className="h-8 w-8 text-primary" aria-hidden />
              <blockquote className="mt-6 text-balance text-xl font-medium leading-snug text-foreground md:text-[28px] md:leading-[1.25]">
                “{featured.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-sm font-semibold tracking-tight">
                    {featured.initials}
                  </span>
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{featured.name}</p>
                  <p className="text-xs text-muted-foreground">{featured.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        )}

        <StaggerGroup className="mt-5 grid gap-5 md:grid-cols-3" stagger={0.1} y={28}>
          {rest.map((t) => (
            <figure
              key={t.name}
              className={cn(
                "flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 transition-shadow",
                "hover:shadow-[0_20px_40px_-25px_color-mix(in_oklch,var(--primary)_35%,transparent)]",
              )}
            >
              <Quote className="h-5 w-5 text-primary/70" aria-hidden />
              <blockquote className="flex-1 text-[15px] leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <span className="text-xs font-semibold tracking-tight">{t.initials}</span>
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
