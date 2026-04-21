# Front-End Expert Starter

Next.js 15 · React 19 · Tailwind v4 (CSS-first) · shadcn/ui patterns · Radix Primitives · Motion · Storybook with a11y addon.

## Use

```bash
# Copy this template into a new project
cp -R template my-new-app && cd my-new-app

# Install
pnpm install    # or npm install

# Dev
pnpm dev
pnpm storybook
```

## What's in the box

- [app/globals.css](app/globals.css) — complete OKLCH token set, `@theme` bridge, class-based dark mode, `prefers-reduced-motion` reset.
- [app/layout.tsx](app/layout.tsx) — `next-themes` provider wired to the `.dark` class.
- [app/page.tsx](app/page.tsx) — smoke-test page using `<Button>`.
- [lib/utils.ts](lib/utils.ts) — the `cn()` helper (clsx + tailwind-merge).
- [components/ui/button.tsx](components/ui/button.tsx) — canonical cva + forwardRef + asChild component.
- [components/ui/button.stories.tsx](components/ui/button.stories.tsx) — CSF3 story with state stories + `play` interaction test + a11y.
- [.storybook/main.ts](.storybook/main.ts) / [preview.ts](.storybook/preview.ts) — addons + dark-mode decorator.

## Next steps

1. `npx shadcn@latest init` — point it at `app/globals.css` and `components/ui`.
2. Add primitives with `npx shadcn@latest add dialog dropdown-menu ...` — or scaffold your own with the `component-scaffold` skill.
3. Read the [source-of-truth stack rules](../skills/frontend-stack/SKILL.md).
