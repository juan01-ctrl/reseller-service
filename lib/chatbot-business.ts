import { CALENDLY_URL, whatsappUrl } from "@/lib/links"

export type ChatTurn = {
  role: "user" | "assistant"
  text: string
}

export type ChatIntent =
  | "pricing"
  | "founder_offer"
  | "setup_scope"
  | "monthly_scope"
  | "timing"
  | "channels"
  | "guarantee"
  | "support_handoff"
  | "scheduling"
  | "web_presence"
  | "off_topic"
  | "other_business"

export const businessFacts = {
  brand: "ImportBoost",
  niche: "Importadores y revendedores de tecnología en Argentina",
  channels: ["WhatsApp", "Instagram", "web"],
  prices: {
    setupPromo: "USD 270 (40% OFF sobre USD 450, quedan 5 cupos)",
    setupBase: "USD 450 pago único",
    monthly: "USD 39 por mes",
  },
  setupIncludes: [
    "Web profesional",
    "Conexión WhatsApp + Instagram",
    "IA entrenada con catálogo",
    "Carga inicial de productos",
    "Garantía 30 días",
  ],
  maintenanceIncludes: [
    "Hosting incluido",
    "IA siempre activa",
    "Soporte humano",
    "Cambios chicos incluidos",
    "Sin contrato anual",
    "Cancelación cuando quieras",
  ],
  timing: {
    standard: "7 días hábiles",
    express: "4 días con adicional",
  },
  guarantee: "Si el asistente no genera cierres que antes se perdían, se devuelve el setup (30 días).",
  roi: "Con un solo cierre, la inversión suele recuperarse en el primer mes.",
  cta: {
    whatsapp: whatsappUrl("final"),
    calendly: CALENDLY_URL,
  },
} as const

const domainKeywords = [
  "importboost",
  "ofrecen",
  "ofreces",
  "ofrecer",
  "oferta",
  "servicio",
  "servicios",
  "solucion",
  "solución",
  "propuesta",
  "mejorar ventas",
  "vender",
  "clientes",
  "leads",
  "negocio",
  "ayudan",
  "ayuda",
  "como funciona",
  "cómo funciona",
  "en que consiste",
  "en qué consiste",
  "quiero info",
  "informacion",
  "información",
  "precio",
  "precios",
  "cuanto",
  "cuánto",
  "sale",
  "vale",
  "cobran",
  "cobras",
  "usd",
  "dolar",
  "dólar",
  "plan",
  "planes",
  "setup",
  "mantenimiento",
  "mensual",
  "fundador",
  "cupo",
  "descuento",
  "web",
  "catalogo",
  "catálogo",
  "whatsapp",
  "instagram",
  "dm",
  "chat",
  "ia",
  "garantia",
  "garantía",
  "devolucion",
  "devolución",
  "soporte",
  "tiempo",
  "dias",
  "días",
  "implementacion",
  "implementación",
  "agendar",
  "llamada",
  "reunion",
  "reunión",
  "calendly",
  "ventas",
  "cerrar",
  "respuestas",
  "automatizacion",
  "automatización",
  "importadores",
  "revendedores",
  "tecnologia",
  "tecnología",
]

const offTopicHints = [
  "clima",
  "futbol",
  "fútbol",
  "receta",
  "programar",
  "codigo",
  "código",
  "criptomoneda",
  "bitcoin",
  "política",
  "presidente",
  "guerra",
  "medicina",
  "diagnostico",
  "diagnóstico",
  "horoscopo",
  "horóscopo",
]

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
}

export function hasStrongOffTopicHint(message: string): boolean {
  const normalized = normalize(message)
  return offTopicHints.some((k) => normalized.includes(normalize(k)))
}

export function detectIntent(message: string): ChatIntent {
  const q = normalize(message)

  if (q.includes("fundador") || q.includes("cupo") || q.includes("descuento") || q.includes("off")) {
    return "founder_offer"
  }
  if (
    q.includes("precio") ||
    q.includes("precios") ||
    q.includes("plan") ||
    q.includes("costo") ||
    q.includes("inversion") ||
    q.includes("cuanto sale") ||
    q.includes("cuanto vale") ||
    q.includes("cuanto cuesta") ||
    q.includes("sale")
  ) {
    return "pricing"
  }
  if (q.includes("setup") || q.includes("incluye") || q.includes("que trae")) {
    return "setup_scope"
  }
  if (q.includes("mantenimiento") || q.includes("mensual") || q.includes("suscripcion")) {
    return "monthly_scope"
  }
  if (q.includes("tarda") || q.includes("tiempo") || q.includes("dias") || q.includes("implement")) {
    return "timing"
  }
  if (q.includes("whatsapp") || q.includes("instagram") || q.includes("dm") || q.includes("chat web") || q.includes("canales")) {
    return "channels"
  }
  if (q.includes("garantia") || q.includes("devol")) {
    return "guarantee"
  }
  if (q.includes("soporte") || q.includes("humano") || q.includes("deriva") || q.includes("atender yo")) {
    return "support_handoff"
  }
  if (q.includes("agendar") || q.includes("llamada") || q.includes("reunion") || q.includes("calendly")) {
    return "scheduling"
  }
  if (q.includes("web") || q.includes("pagina") || q.includes("página")) {
    return "web_presence"
  }
  if (hasStrongOffTopicHint(message) && !isBusinessRelevant(message)) {
    return "off_topic"
  }
  return "other_business"
}

export function isBusinessRelevant(message: string): boolean {
  const normalized = normalize(message)
  const hasDomain = domainKeywords.some((k) => normalized.includes(normalize(k)))
  const hasOffTopic = hasStrongOffTopicHint(message)

  const genericCommercialQuestion =
    (normalized.includes("que me ofrecen") ||
      normalized.includes("que ofrecen") ||
      normalized.includes("que hacen") ||
      normalized.includes("como trabajan") ||
      normalized.includes("como me ayudan") ||
      normalized.includes("quiero saber mas") ||
      normalized.includes("quiero mas info")) &&
    normalized.length <= 100

  if (genericCommercialQuestion && !hasOffTopic) return true
  if (hasOffTopic && !hasDomain) return false
  return hasDomain
}

export function fallbackReply(message: string): string {
  const q = normalize(message)

  if (
    q.includes("que me ofrecen") ||
    q.includes("que ofrecen") ||
    q.includes("servicio") ||
    q.includes("que hacen") ||
    q.includes("en que consiste")
  ) {
    return `Ofrecemos una solución completa para vender más por WhatsApp e Instagram: setup de web + IA entrenada con tu catálogo (${businessFacts.prices.setupPromo}) y mantenimiento mensual (${businessFacts.prices.monthly}).`
  }

  if (q.includes("precio") || q.includes("plan") || q.includes("costo")) {
    return `Tenemos setup promocional ${businessFacts.prices.setupPromo} y mantenimiento ${businessFacts.prices.monthly}.`
  }

  if (q.includes("setup") || q.includes("incluye")) {
    return `El setup incluye ${businessFacts.setupIncludes.slice(0, 4).join(", ")} y ${businessFacts.setupIncludes[4]}.`
  }

  if (q.includes("mantenimiento") || q.includes("mensual")) {
    return `El mantenimiento es ${businessFacts.prices.monthly} e incluye hosting, IA activa, soporte humano y cambios chicos.`
  }

  if (q.includes("tarda") || q.includes("dias") || q.includes("implement")) {
    return `Implementación estándar: ${businessFacts.timing.standard}. Opción express: ${businessFacts.timing.express}.`
  }

  if (q.includes("garantia") || q.includes("devol")) {
    return businessFacts.guarantee
  }

  if (!isBusinessRelevant(message)) {
    return `Puedo ayudarte solo con dudas sobre ${businessFacts.brand} (precios, implementación, canales, garantía y soporte). Si querés, te derivo por WhatsApp: ${businessFacts.cta.whatsapp}`
  }

  return `Te ayudo con eso. Si querés avanzar ya, escribime por WhatsApp (${businessFacts.cta.whatsapp}) o agendá llamada (${businessFacts.cta.calendly}).`
}

export function formatBusinessContext() {
  return [
    `Marca: ${businessFacts.brand}`,
    `Nicho: ${businessFacts.niche}`,
    `Canales: ${businessFacts.channels.join(", ")}`,
    `Precios: Setup promocional ${businessFacts.prices.setupPromo}; Setup base ${businessFacts.prices.setupBase}; Mantenimiento ${businessFacts.prices.monthly}`,
    `Setup incluye: ${businessFacts.setupIncludes.join(", ")}`,
    `Mantenimiento incluye: ${businessFacts.maintenanceIncludes.join(", ")}`,
    `Tiempos: estándar ${businessFacts.timing.standard}; express ${businessFacts.timing.express}`,
    `Garantía: ${businessFacts.guarantee}`,
    `ROI claim permitido: ${businessFacts.roi}`,
    `CTA WhatsApp: ${businessFacts.cta.whatsapp}`,
    `CTA Agendar: ${businessFacts.cta.calendly}`,
  ].join("\n")
}
