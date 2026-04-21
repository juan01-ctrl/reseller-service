export const WHATSAPP_NUMBER = "5491159570977"
export const CALENDLY_URL = "https://calendly.com/juaniera01/30min"
export const FOUNDER_NAME = "Juan"

type WhatsAppRef =
  | "nav"
  | "hero"
  | "hero-secondary"
  | "pricing-setup"
  | "pricing-mensual"
  | "final"
  | "final-secondary"
  | "proof"

const MESSAGES: Record<WhatsAppRef, string> = {
  nav: "Hola, quiero empezar ahora con ImportBoost. [ref:nav]",
  hero: "Hola, quiero empezar ahora con ImportBoost. [ref:hero]",
  "hero-secondary": "Hola, quiero ver una demo de ImportBoost. [ref:hero-secondary]",
  "pricing-setup": "Hola, quiero empezar ahora con el setup promocional (40% OFF). [ref:setup]",
  "pricing-mensual": "Hola, tengo consultas sobre el mantenimiento mensual. [ref:mensual]",
  final: "Hola, quiero empezar ahora con ImportBoost. [ref:final]",
  "final-secondary": "Hola, quiero ver una demo de ImportBoost. [ref:final-secondary]",
  proof: "Hola, me interesa el setup promocional. [ref:proof]",
}

export function whatsappUrl(ref: WhatsAppRef): string {
  const text = encodeURIComponent(MESSAGES[ref])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
