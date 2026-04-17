/**
 * URL canónica del sitio (OG, sitemap, robots). Definí NEXT_PUBLIC_SITE_URL en producción.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const siteName = "ImportBoost";

export const defaultDescription =
  "Web profesional y asistente con IA para WhatsApp: respuestas al instante, 24/7. Para importadores y revendedores Apple en Argentina.";
