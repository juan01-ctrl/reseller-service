import { Clock3, Repeat2, ShieldQuestion } from "lucide-react"
import { cn } from "@/lib/utils"
import { SplitHeading } from "@/components/motion/split-heading"
import { Reveal } from "@/components/motion/reveal"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { ShaderBadge, type ShaderVariant } from "@/components/landing/shader-badge"

const cards: Array<{
  icon: typeof Clock3
  title: string
  body: string
  tag: string
  muted?: boolean
  shader: ShaderVariant
}> = [
  {
    icon: Clock3,
    title: "Consulta sin responder",
    body: "\u201C¿Tenés PS5 Slim en stock?\u201D — 02:14 AM, sábado. Lo viste 11:00. Cuando respondiste, ya compró en otro lado.",
    tag: "leído hace 3 h",
    muted: true,
    shader: "smoke",
  },
  {
    icon: Repeat2,
    title: "La misma pregunta, 40 veces al día",
    body: "\u201C¿Cuánto el iPhone 16?\u201D · \u201C¿Tenés Switch OLED?\u201D · \u201C¿Hay S24 Ultra?\u201D · \u201C¿Mandás a Mendoza?\u201D Contestás lo mismo todo el día y llegás tarde a los leads calientes.",
    tag: "40+ iguales hoy",
    shader: "orbit",
  },
  {
    icon: ShieldQuestion,
    title: "Confianza que no termina de cerrar",
    body: "Te van a transferir USD 1.200 a una persona que no conocen. Si no ven precio, stock y condiciones claras, dudan y se enfría la venta.",
    tag: "carrito abandonado",
    shader: "dither",
  },
]

export function Problem() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-28">
        <div className="max-w-2xl">
          <Reveal as="p" y={8} duration={0.5} className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            El problema
          </Reveal>
          <SplitHeading
            as="h2"
            className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[44px]"
          >
            La consulta llegó. Te demoraste. La venta se fue.
          </SplitHeading>
          <Reveal delay={0.25} duration={0.7}>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Si respondés rápido, vendés. Si tardás, ese cliente le compra a otro por WhatsApp o Instagram.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.12} y={32}>
          {cards.map((c) => (
            <article
              key={c.title}
              className={cn(
                "group flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 transition-shadow",
                "hover:shadow-[0_20px_40px_-20px_oklch(0.3_0.05_240_/_0.2)]",
              )}
            >
              <div className="flex items-center justify-between">
                <ShaderBadge variant={c.shader}>
                  <c.icon className="h-5 w-5" aria-hidden />
                </ShaderBadge>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider",
                    c.muted
                      ? "border-border bg-muted text-muted-foreground"
                      : "border-primary/20 bg-primary/10 text-primary",
                  )}
                >
                  {c.tag}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
