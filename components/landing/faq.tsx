import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SplitHeading } from "@/components/motion/split-heading"
import { Reveal } from "@/components/motion/reveal"

const items = [
  {
    q: "¿El asistente cubre WhatsApp e Instagram?",
    a: "Sí: WhatsApp Business API + DMs de Instagram + chat web. Mismo criterio comercial en los tres canales.",
  },
  {
    q: "¿Puedo cambiar precios o stock rápido?",
    a: "Sí, desde un panel simple. O nos pasás cambios y los actualizamos el mismo día. Está pensado para precios de importación que cambian seguido.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "7 días hábiles desde que nos pasás el catálogo. Si tenés apuro, hay cupo express de 4 días con un adicional.",
  },
  {
    q: "¿Funciona aunque no tenga página web hoy?",
    a: "Sí. La web está incluida en el setup. Si ya tenés una, la integramos o te armamos una nueva sin costo extra.",
  },
  {
    q: "¿Puedo atender yo algunas consultas?",
    a: "Obvio. Te pasa el chat cuando detecta que hace falta criterio humano (negociaciones, reclamos, casos especiales). Vos decidís qué se responde y qué no.",
  },
  {
    q: "¿Y si el asistente responde mal o inventa algo?",
    a: "Todo chat queda registrado y podés intervenir cuando quieras. Nunca responde fuera de lo configurado: si falta información, te deriva.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-14 md:py-28">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">FAQ</p>
          <SplitHeading
            as="h2"
            className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[40px]"
          >
            Preguntas que nos hacen todo el tiempo.
          </SplitHeading>
        </div>

        <Reveal delay={0.2} className="mt-12 rounded-2xl border border-border bg-card px-6 md:px-8">
          <Accordion type="single" defaultValue="q-0" collapsible>
            {items.map((item, i) => (
              <AccordionItem key={item.q} value={`q-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
