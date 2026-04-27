import { IntegrationType } from "@prisma/client"

export const WHATSAPP_REQUIRED_SCOPES = [
  "whatsapp_business_messaging",
  "whatsapp_business_management",
  "business_management",
]

export const INSTAGRAM_REQUIRED_SCOPES = [
  "instagram_manage_messages",
  "pages_show_list",
  "business_management",
]

export function getScopesForType(type: IntegrationType) {
  if (type === "whatsapp") return WHATSAPP_REQUIRED_SCOPES
  return INSTAGRAM_REQUIRED_SCOPES
}
