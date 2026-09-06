# DeepWeaver website

Next.js 16 · TypeScript · Tailwind v4 · Framer Motion.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (all routes static)
- `npm run lint` — eslint

## Structure

- `src/app` — routes, metadata, sitemap, robots
- `src/components/layout` — Nav (theme-aware, mega menu, mobile overlay), Footer, Logo
- `src/components/ui` — primitives: Section, Button, Eyebrow, SectionHeader, Stat, Tag, Disclosure, Facts
- `src/components/sections` — composed page sections (home/, pillars/, shared)
- `src/components/motion` — Reveal, CountUp, Lenis, Magnetic
- `src/content` — typed content modules; content traces to the AINS deck, the website changelog and the partner site
- `public/brand` — supplied DeepWeaver assets (never redrawn)

## Conventions

- Every section declares `data-theme` (light | dark | deep). Components use semantic tokens (`bg-bg`, `text-fg`, `border-line`) so they work on any theme; the nav mirrors the section beneath it.
- Semantic tokens live in `@theme inline` so per-section overrides cascade.
- Motion is gated on `prefers-reduced-motion` via MotionConfig; the hero uses the brand's own weave render as a static image.
