import { Clock, MessageCircle, Instagram, Globe, Brain } from "lucide-react"
import { cn } from "@/lib/utils"
import { SplitHeading } from "@/components/motion/split-heading"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { ShaderBadge, type ShaderVariant } from "@/components/landing/shader-badge"

const features: Array<{
  icon: typeof Clock
  title: string
  body: string
  wide?: boolean
  shader: ShaderVariant
}> = [
  {
    icon: Clock,
    title: "Respuesta en < 1 min",
    body: "Mientras estás manejando, en reuniones o durmiendo, el asistente responde consultas con precio, stock y cuotas.",
    wide: true,
    shader: "pulse",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    body: "Cotiza, reserva y pasa datos de transferencia. Te deriva cuando hace falta criterio humano.",
    shader: "waves",
  },
  {
    icon: Instagram,
    title: "Instagram DM",
    body: "Mismo tono que en WhatsApp. Responde historias, menciones y DMs que llegan por comentarios.",
    shader: "grain",
  },
  {
    icon: Globe,
    title: "Web con catálogo claro",
    body: "Precios, cuotas y stock visibles. La confianza que falta para cerrar una transferencia grande a un desconocido.",
    shader: "perlin",
  },
  {
    icon: Brain,
    title: "Tu criterio comercial",
    body: "La IA aprende cómo cotizás, cuándo hacés cuotas, qué bancos aceptás. No inventa — pregunta.",
    shader: "neuro",
  },
]

export function Features() {
  return (
    <section id="como-funciona" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-28">
        <div className="max-w-2xl">
          <Reveal as="p" y={8} duration={0.5} className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Cómo funciona
          </Reveal>
          <SplitHeading
            as="h2"
            className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[44px]"
          >
            Una sola IA, tus tres canales, tu criterio comercial.
          </SplitHeading>
          <Reveal delay={0.25} duration={0.7}>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Conectamos tu catálogo a WhatsApp, Instagram y a una web profesional. El asistente
              conoce stock, cuotas, formas de pago y cómo vendés vos. Responde como vos — solo que
              24/7.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2" stagger={0.08} y={28}>
          {features.map((f) => (
            <article
              key={f.title}
              className={cn(
                "group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-all",
                "hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-25px_oklch(0.3_0.05_240_/_0.2)]",
                f.wide && "md:col-span-2",
              )}
            >
              <ShaderBadge variant={f.shader}>
                <f.icon className="h-5 w-5" aria-hidden />
              </ShaderBadge>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
