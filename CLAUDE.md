# DeepWeaver website

Next.js 16 · TypeScript · Tailwind v4 · Framer Motion.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (all routes static)
- `npm run lint` — eslint
- `npm test` — unit tests: `tsconfig.test.json` compiles `tests/` and the two pure modules they cover to `.test-dist/`, then Node's built-in runner executes the JavaScript (works on any supported Node, no extra tooling)

## Structure

- `src/app` — routes (home, four `(pillars)`, services, ai-fde, ai-governance, factory-brain, outcomes, about, contact, legal), metadata, sitemap, robots; `api/contact` is the one server route (the contact form posts to it)
- `src/components/layout` — Nav (theme-aware, mega menu, mobile overlay), Footer, Logo
- `src/components/ui` — primitives: Section, Button, Eyebrow, SectionHeader, Stat, Tag, Disclosure, Facts
- `src/components/sections` — composed page sections (home/, pillars/, shared)
- `src/components/motion` — Reveal, CountUp, Lenis, Magnetic
- `src/components/three` — the hero mark in real-time 3D (three.js, dynamically imported); `hero-logo.ts` builds and animates it, `hero-logo-view.tsx` hosts it with the glow layers and the still-image fallback
- `src/content` — typed content modules; content traces to the AINS deck, the website changelog and the partner site (primary reference for the four AI domains, service lines, advantages, FDE and logos). No numeric outcome metrics by design.
- `src/lib/contact.ts` — enquiry shape and validation shared by form and route; `src/lib/mail.ts` — sends through Resend's HTTP API (no SDK)
- `public/brand` — supplied DeepWeaver assets (never redrawn)

## Conventions

- Every section declares `data-theme` (light | dark | deep). Components use semantic tokens (`bg-bg`, `text-fg`, `border-line`) so they work on any theme; the nav mirrors the section beneath it.
- Semantic tokens live in `@theme inline` so per-section overrides cascade.
- Motion is gated on `prefers-reduced-motion` via MotionConfig. The hero mark is real-time 3D: entrance from the first frame, idle drift, pointer parallax, an occasional light sweep and a breathing glow; it pauses off-screen, draws one still frame under reduced motion, and falls back to `public/brand/hero-mark.webp` without WebGL.
- Contact form: `/api/contact` rejects cross-site posts, validates server-side, rate-limits per address, drops honeypot submissions and emails the enquiry to `CONTACT_TO_EMAIL` (default: the site email) with reply-to set to the enquirer. One codebase for every environment: `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (a sender on the verified deepweaver.ai domain in production) are read from the hosting environment at request time; see `.env.example`. There is no test-sender default: if either is missing the route returns 503 and the form shows an error with a mail fallback, never a silent failure. Keys are never logged.
