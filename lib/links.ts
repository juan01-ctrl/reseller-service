const defaultWhatsappMessage =
  "Hola%2C%20quiero%20info%20sobre%20Resellix";

/** Enlace wa.me (sin +). Override con NEXT_PUBLIC_WHATSAPP_URL si hace falta. */
export const whatsappHref =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ??
  `https://wa.me/5491159570977?text=${defaultWhatsappMessage}`;
