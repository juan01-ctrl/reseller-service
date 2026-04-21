# ImportBoost

Landing page for ImportBoost — IA de ventas para importadores de electrónica premium en Argentina. Responde WhatsApp, Instagram y tu web en menos de un minuto, 24/7.

**Live:** https://importboost.vercel.app

## Stack

- **Next.js 16** (App Router, static prerender)
- **Tailwind v4** (CSS-first tokens via `@theme`)
- **Radix Primitives** (Accordion, Slot)
- **shadcn/ui** patterns (owned components in `components/ui/`)
- **GSAP + ScrollTrigger** — scroll-triggered reveals, staggered cards, split-word heading animations
- **@paper-design/shaders-react** — per-icon WebGL shader backgrounds (8 unique shaders)
- **next-themes** — light default with dark toggle
- **Lucide** icons

## Project structure

```
app/
  globals.css          # Evergreen token scale, dark scope, motion keyframes
  layout.tsx           # Metadata, ThemeProvider, dev color picker mount
  page.tsx             # Section composition
components/
  landing/             # All sections: hero, problem, features, process,
                       # stats, testimonials, pricing, faq, final-cta,
                       # footer, marquee, chat-mock, shader-badge
  motion/              # Reveal, StaggerGroup, SplitHeading (GSAP wrappers)
  dev/theme-controls   # Floating color picker + dark toggle
  ui/                  # Button, Accordion (shadcn/Radix)
lib/
  gsap.ts              # ScrollTrigger registration + reduced-motion helper
  links.ts             # WhatsApp deep links, Calendly URL, founder name
  utils.ts             # cn() helper
```

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm typecheck
pnpm build
```

## Deploy

Hosted on Vercel. Push to `main` triggers production deploy (once Git is linked).

Manual deploy from local:

```bash
vercel deploy --prod
```

## TODO before full launch

1. Swap placeholders in `lib/links.ts` — real WhatsApp number, Calendly URL, founder name.
2. Replace testimonials in `components/landing/testimonials.tsx` with real quotes when fundador clients complete their 60-day window.
3. Replace marquee client names in `components/landing/marquee.tsx`.
4. Add OG image PNG at `public/og.png` (1200×630).
5. Add favicon to `app/`.
