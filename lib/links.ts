export const WHATSAPP_NUMBER = "5491140431125"
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
  nav: "Hola, quiero empezar ahora con ImportBoost.",
  hero: "Hola, quiero empezar ahora con ImportBoost.",
  "hero-secondary": "Hola, quiero ver una demo de ImportBoost.",
  "pricing-setup": "Hola, quiero empezar ahora con el setup promocional (30% OFF por tiempo limitado).",
  "pricing-mensual": "Hola, tengo consultas sobre el mantenimiento mensual.",
  final: "Hola, quiero empezar ahora con ImportBoost.",
  "final-secondary": "Hola, quiero ver una demo de ImportBoost.",
  proof: "Hola, me interesa la promocion por tiempo limitado del setup.",
}

export function whatsappUrl(ref: WhatsAppRef): string {
  const text = encodeURIComponent(MESSAGES[ref])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
