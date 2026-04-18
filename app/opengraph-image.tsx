import { ImageResponse } from "next/og";
import { defaultDescription, siteName } from "@/lib/site";

export const runtime = "edge";

export const alt = `${siteName} — Web + IA para WhatsApp e Instagram`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#05070b",
          backgroundImage:
            "radial-gradient(ellipse 120% 90% at 15% 10%, rgba(59,130,246,0.35), transparent 50%), radial-gradient(ellipse 80% 60% at 90% 80%, rgba(99,102,241,0.12), transparent 55%)",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 22,
              background:
                "linear-gradient(145deg, #0F2A5C 0%, #081428 50%, #050910 100%)",
              border: "1px solid rgba(148,196,255,0.35)",
              boxShadow: "0 0 40px rgba(59,130,246,0.25)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 7,
              paddingBottom: 15,
              paddingLeft: 17,
              paddingRight: 17,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: 13,
                height: 24,
                borderRadius: 5,
                background: "linear-gradient(180deg, #F4F7FF, #A8C4FF)",
              }}
            />
            <div
              style={{
                width: 13,
                height: 36,
                borderRadius: 5,
                background: "linear-gradient(180deg, #F4F7FF, #A8C4FF)",
              }}
            />
            <div
              style={{
                width: 13,
                height: 48,
                borderRadius: 5,
                background: "linear-gradient(180deg, #FFFFFF, #6EE7D8)",
              }}
            />
          </div>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#fafafa",
            }}
          >
            {siteName}
          </span>
        </div>
        <div
          style={{
            fontSize: 38,
            fontWeight: 600,
            color: "#e4e4e7",
            lineHeight: 1.2,
            maxWidth: 980,
            letterSpacing: -0.5,
          }}
        >
          Web profesional + automatización IA para WhatsApp e Instagram
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 22,
            fontWeight: 400,
            color: "#a1a1aa",
            maxWidth: 920,
            lineHeight: 1.45,
          }}
        >
          {defaultDescription}
        </div>
      </div>
    ),
    { ...size }
  );
}
