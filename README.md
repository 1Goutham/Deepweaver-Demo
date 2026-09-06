# DeepWeaver — website

Production site for [deepweaver.ai](https://deepweaver.ai): AI-native services across Australia and India — Digital, Physical, Frontier and Sovereign AI.

Built with Next.js 16 (App Router, TypeScript), Tailwind CSS v4, Framer Motion and Lenis.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # every route is prerendered as static HTML
npm run lint
```

## Where things live

| Path | What |
|---|---|
| `src/app` | Routes, per-route metadata, `sitemap.ts`, `robots.ts`, `not-found.tsx` |
| `src/components/layout` | Theme-aware `Nav` (four-domain mega menu, mobile overlay), `Footer`, `Logo` |
| `src/components/ui` | Primitives: `Section`, `Button`, `Eyebrow`, `SectionHeader`, `Stat`, `Tag`, `Disclosure`, `Facts`, `PillarGlyph` |
| `src/components/sections` | Composed page sections (`home/`, `pillars/`, `page-hero`, `cta`, `case-studies`, `contact-form`) |
| `src/components/motion` | `Reveal`, `CountUp`, `LenisProvider`, `Magnetic` |
| `src/content` | Typed content modules — pillars, services, governance, sovereign, factory, work, about |
| `public/brand` | Supplied DeepWeaver assets: lockups, mark, deck forms, hero still |

## Conventions

- Every section declares `data-theme="light" | "dark" | "deep"`. Components use the semantic tokens (`bg-bg`, `text-fg`, `text-fg-muted`, `border-line`, `bg-surface`) so one component works on navy and on canvas. The nav watches the section beneath it and switches logo and colours.
- Semantic tokens are declared in `@theme inline` so per-section overrides cascade.
- Motion honours `prefers-reduced-motion` through MotionConfig. The hero image is the brand's own weave render, served as WebP with a PNG source.
- The contact form composes an email to contact@deepweaver.ai; wire a route handler when a CRM is chosen.
