---
name: premium-saas-ui
description: Create premium, conversion-focused UI with Apple, Linear, Stripe and Raycast level polish. Use when designing, reviewing or improving marketing pages, SaaS interfaces and modern frontend composition.
---

# Premium SaaS UI

## When to Use

- Creating or redesigning marketing landing pages and product marketing surfaces.
- A section reads flat, generic, or “Tailwind template”—not intentional.
- Hierarchy, spacing, or visual composition need to be stronger.
- Building premium dark-mode interfaces and high-end dashboards.
- Designing heroes, cards, timelines, pricing, mockups, or proof sections.
- The user asks for an Apple-, Stripe-, Linear-, Raycast-, or Vercel-grade look.

## Core Philosophy

The UI must never read as a generic SaaS template. Every section should feel **authored**, not assembled.

Prefer:

- Fewer elements with clearer roles
- Stronger hierarchy and a single dominant focal point per section
- Generous whitespace as a deliberate design tool
- Asymmetry and varied rhythm over symmetrical grids
- Layered depth, overlap, and light—not flat panels
- One strong product visual over many weak illustrations

Benchmark the work against:

- Apple product pages (scale, restraint, product as hero)
- Stripe product marketing (narrative flow, credible demos)
- Linear (focus, typography, seriousness)
- Raycast (dark premium, craft, native-feeling UI)
- Vercel and top-tier startup marketing (minimal technical confidence)

**Never optimize only for clean code.** Optimize in this order:

1. Visual hierarchy and scanability  
2. Composition and focal clarity  
3. Perceived quality and trust  
4. Conversion (CTAs, proof, friction)  
5. Implementation details  

## Visual Rules

- **One focal point per section.** If two elements fight for attention, redesign until one wins.
- **Whitespace before chrome.** Reach for spacing before borders, rules, and extra boxes.
- **Asymmetry by default.** Break equal columns unless symmetry serves a specific idea.
- **Avoid the “three equal cards” default.** Vary size, weight, and position; use a featured + supporting pattern.
- **Depth over flatness.** Stack layers, soft shadows, subtle glass, radial blooms behind heroes—without turning into a glow disco.
- **One flagship mockup** beats a parade of small, generic graphics.
- **Every card should feel expensive:** intentional padding, surface treatment, and role in the layout.

## Layout System

For every section, answer explicitly:

1. What is the **focal point**?  
2. What is **secondary**?  
3. What should **recede** or nearly disappear?  

Then compose so the eye travels in that order.

**Strong patterns**

- Large type block + oversized layered mockup  
- Featured card + two supporting cards (unequal weights)  
- Split layouts with **unequal** column widths  
- Staggered metric or stat cards  
- Vertical timeline with a single glowing spine and clear step hierarchy  
- Floating UI (e.g. chat, notification) overlapping a browser or device frame  

**Weak patterns (fix or replace)**

- Three equal columns with icon + title + body, repeated forever  
- Headline → divider → paragraph with no visual anchor  
- Large empty negative space on one side of the hero  
- Grids of tiny, same-size cards  
- Perfect symmetry in every section  

## Spacing Rules

- Use **more** vertical spacing than feels comfortable at first; then tune.
- Target **120–160px** (or token equivalents) between major sections where the design allows.
- Generous card padding; clear separation between headline, body, and actions.
- Extra air around CTAs and around hero mockups so they breathe.
- Treat empty space as a luxury signal, not waste.

## Typography Rules

- Headlines at real scale; body copy never timid but secondary to the title.
- Short lines, intentional line breaks, and ruthless editing.
- Clear steps down from: eyebrow → title → subtitle → body → microcopy.
- Remove copy that does not support the one idea of the section.
- **Five-second test:** someone should grasp the section’s point and next step almost instantly.

Tone: short, direct, confident, slightly aspirational, business-credible—never fluffy or frantic.

## Color and Effects

**Palette direction**

- Near-black bases, graphite and charcoal surfaces  
- Cool, restrained accents (e.g. electric blue used **sparingly**)  
- White and near-white for type and key highlights, not rainbow fills  
- Avoid saturated multi-hue gradients unless they are extremely controlled  

**Effects**

- Radial gradients behind focal elements  
- Soft bloom and blur (frosted panels, subtle glows)  
- Layered, soft shadows—not heavy drop shadows on everything  
- Glassmorphism with discipline: readable, thin borders, ~5–10% opacity borders where used  

**Avoid**

- Heavy, muddy shadows  
- Full-spectrum gradients on every block  
- Neon glow on every interactive  
- Cards that are only a border and flat fill  

## Motion

Use motion (e.g. Framer Motion) **only** to clarify hierarchy and polish—not to perform.

**Allowed**

- Fade + slight translate on scroll reveal  
- Gentle float on small floating UI pieces  
- Soft hover lift on cards and primary controls  
- Light parallax on background layers  

**Avoid**

- Long bouncy springs, overshoot, or attention-grabbing choreography  
- Motion that competes with the headline or CTA  

## Libraries and Implementation Notes

Prefer tools that increase consistency and perceived quality when used with taste:

- Tailwind CSS for layout and tokens  
- Framer Motion for subtle transitions  
- shadcn/ui as a baseline for accessible primitives  
- Lucide for icons—sparingly  
- Patterns from Magic UI, Aceternity, or Motion Primitives only when they elevate the section, not when they add noise  

Use CSS masks, blur, gradients, and container queries when they sharpen the composition.

## Section-Specific Guidance

### Hero

- Dominant headline; supporting line stays short.  
- Clear primary + secondary CTA treatment.  
- **Right side (or main visual column) must carry weight:** layered mockup, device frame, or composed scene—never a void.  
- Optional: one primary floating element (e.g. chat, metric) + smaller satellites.  
- Radial or layered glow behind the composition to anchor depth.  

### Cards

- Vary dimensions and visual weight; avoid clone armies.  
- Depth, hover, and surface detail should feel consistent with the rest of the page.  

### Timelines / Steps

- Prefer vertical flow with a clear spine and large step markers.  
- Optional alternation or offset for rhythm; keep one clear reading order.  

### Pricing

- One plan must read as **recommended** through size, light, elevation, and typography—not only a “Popular” badge.  
- Surrounding plans should feel intentionally quieter.  

## Things to Avoid

- Generic Tailwind component dumps without composition  
- Boilerplate SaaS section clones  
- Small, apologetic type  
- Flat equal-width card grids  
- Tight spacing and crowded corners  
- Icon sprawl  
- Long paragraphs and redundant bullets  
- Repeating the same section skeleton  
- Weak or empty visual halves  
- Sections that are only text with no focal object  

## Internal Workflow

Before writing code:

1. Name the **single focal point** of the section.  
2. List what can be **cut** without losing the message.  
3. Sketch **composition**: asymmetry, layers, what overlaps what.  
4. Set **type scale and spacing** for hierarchy.  
5. Add **depth, light, and motion** only where they reinforce steps 1–4.  
6. **Then** implement in React / Tailwind (or the project stack).  

If the layout still feels like a default template after step 6, return to steps 1–5.
