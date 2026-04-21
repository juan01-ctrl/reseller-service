export const WHATSAPP_NUMBER = "5491100000000"
export const CALENDLY_URL = "https://cal.com/juan-importboost/15min"
export const FOUNDER_NAME = "Juan"

type WhatsAppRef =
  | "nav"
  | "hero"
  | "hero-secondary"
  | "pricing-fundador"
  | "pricing-setup"
  | "pricing-mensual"
  | "final"
  | "final-secondary"
  | "proof"

const MESSAGES: Record<WhatsAppRef, string> = {
  nav: "Hola, quiero ver una demo de ImportBoost. [ref:nav]",
  hero: "Hola, quiero ver una demo de ImportBoost. [ref:hero]",
  "hero-secondary": "Hola, tengo consultas sobre ImportBoost. [ref:hero-secondary]",
  "pricing-fundador": "Hola, me interesa uno de los cupos fundadores con 40% off. [ref:fundador]",
  "pricing-setup": "Hola, quiero arrancar con el setup de ImportBoost. [ref:setup]",
  "pricing-mensual": "Hola, tengo consultas sobre el mantenimiento mensual. [ref:mensual]",
  final: "Hola, quiero ver una demo de ImportBoost. [ref:final]",
  "final-secondary": "Hola, quiero coordinar una llamada. [ref:final-secondary]",
  proof: "Hola, me interesa uno de los cupos fundadores. [ref:proof]",
}

export function whatsappUrl(ref: WhatsAppRef): string {
  const text = encodeURIComponent(MESSAGES[ref])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
