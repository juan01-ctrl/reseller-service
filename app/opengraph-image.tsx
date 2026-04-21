import { ImageResponse } from "next/og"
import { siteName, siteUrl } from "@/lib/site"

export const runtime = "edge"
export const alt = `${siteName} — IA para ventas por WhatsApp e Instagram`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

const logoUrl = new URL("/icon.png", siteUrl).toString()

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#EAE5D6",
          color: "#1e2a16",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          padding: "68px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {/* Logo PNG = mismo asset que favicon (/icon.png) */}
          <img
            src={logoUrl}
            alt=""
            width={72}
            height={72}
            style={{
              display: "block",
              flexShrink: 0,
              borderRadius: "50%",
            }}
          />
          {siteName}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
          <div style={{ fontSize: 66, lineHeight: 1.02, fontWeight: 700, letterSpacing: "-0.03em" }}>
            IA que responde y vende por vos.
          </div>
          <div style={{ fontSize: 34, color: "#3f4c34", lineHeight: 1.2 }}>
            WhatsApp + Instagram + Web, entrenado con tu catálogo.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 24,
            color: "#3f4c34",
          }}
        >
          <span>Argentina</span>
          <span>•</span>
          <span>Importadores y revendedores de tecnología</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
