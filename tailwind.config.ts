import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(10,10,12,0) 0%, rgba(10,10,12,1) 100%), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
        "glow-blue":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.25), transparent)",
        "glow-soft":
          "radial-gradient(ellipse 60% 40% at 70% 20%, rgba(59,130,246,0.12), transparent)",
      },
      boxShadow: {
        glass:
          "0 0 0 1px rgba(255,255,255,0.07), 0 32px 100px -40px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.06)",
        card:
          "0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px -28px rgba(0,0,0,0.65)",
        surface:
          "0 0 0 1px rgba(255,255,255,0.08), 0 28px 80px -36px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.04)",
        glow:
          "0 0 0 1px rgba(59,130,246,0.2), 0 24px 80px -24px rgba(37,99,235,0.35)",
      },
      maxWidth: {
        content: "1240px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-10px) translateX(4px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(6px, -6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
