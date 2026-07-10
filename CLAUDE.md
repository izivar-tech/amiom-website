# Amiom Private Limited — Corporate Website

## About
Corporate website for **Amiom Private Limited**, a financial services company (Corporate Finance).
The site is a static marketing website focused on SEO, performance, accessibility, and mobile-first responsive design.

## Tech Stack
- **Framework**: Next.js 15 (App Router, Server Components by default)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Button, Card, Sheet, NavigationMenu, Badge, Separator)
- **Marketing Components**: 21st.dev-style animated components (HeroSection, FeatureGrid, FeatureCard, CtaSection, StatsSection, ValueCard, SectionHeader)
- **Animations**: Framer Motion (FadeIn, StaggerContainer, Reveal)
- **Icons**: Lucide React
- **Package Manager**: pnpm (monorepo with workspaces)
- **Deployment Target**: Vercel

## Monorepo Structure
```
apps/web/                  → Next.js app (main website)
packages/ui/               → Shared UI: shadcn/ui + 21st.dev marketing components + animations
packages/constants/        → Centralized content data (company, navigation, pages, legal)
```

## Key Commands
```bash
pnpm dev          # Start dev server (apps/web)
pnpm build        # Production build
pnpm lint         # Lint all packages
pnpm format       # Format with Prettier
pnpm type-check   # TypeScript check all packages
```

## Architecture Decisions

### Content-Driven Approach
All page content lives in `packages/constants/`. Never hardcode text in components.
- `company.ts` → company info, brand assets, social links
- `navigation.ts` → main nav, footer nav (typed with NavItem interface)
- `home.ts` → hero, services, why-us, CTA content
- `about.ts` → hero, mission, vision, values, story
- `legal.ts` → copyright, disclaimer, privacy policy, terms

### Component Architecture
- **shadcn/ui** for all base UI primitives (no plain HTML buttons/dialogs/nav)
- **21st.dev-style** marketing components with animated gradients, glass morphism, hover effects
- Components are in `packages/ui/` and consumed by the app
- Header uses `NavigationMenu` (desktop) + `Sheet` (mobile drawer)
- All marketing sections use `Container`, `Section`, `SectionHeader` wrappers

### Rendering Strategy
- Static Generation for all pages (SSG)
- Server Components by default
- Client Components only for: Framer Motion animations, interactive nav, Sheet/dialog

### SEO
- `sitemap.ts` and `robots.ts` in app directory (Next.js metadata API)
- JSON-LD structured data (Organization + WebSite schemas) in root layout
- Open Graph + Twitter card metadata via `createMetadata()` helper
- Canonical URLs on all pages
- Google Analytics 4 via `NEXT_PUBLIC_GA_ID` env var
- Google Search Console via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var

### Brand Colors (from logo)
- Primary Green: `#25ab5a` → used for buttons, links, accents
- Accent Gold: `#fdc40c` → used for highlights, secondary accents
- Dark Navy: `#192b3d` → used for footer background, dark text
- Colors defined as oklch values in `globals.css` @theme block

### Logo Assets
SVG logos are in `apps/web/public/images/logo/`:
- `logo-original.svg` — full color logo
- `logo-white.svg` — white version (for dark backgrounds)
- `favicon.svg` — color favicon (bull icon + A mark)
- `favicon-white.svg` — white favicon
- `logo-monochrome.svg` — single color version

## Adding New Pages
1. Add content constants to `packages/constants/src/{page}.ts`
2. Export from `packages/constants/src/index.ts`
3. Create page at `apps/web/src/app/(public)/{route}/page.tsx`
4. Use `createMetadata()` for SEO metadata
5. Compose with components from `@amiom/ui` (HeroSection, Section, Container, etc.)
6. Add route to `sitemap.ts`

## Adding New UI Components
1. Add to `packages/ui/src/components/` (for shadcn/ui base components)
2. Add to `packages/ui/src/marketing/` (for marketing/page-level components)
3. Add to `packages/ui/src/animations/` (for animation wrappers)
4. Export from `packages/ui/src/index.ts`

## Environment Variables
```
NEXT_PUBLIC_GA_ID=                          # Google Analytics 4 measurement ID
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=       # Google Search Console verification
NEXT_PUBLIC_SITE_URL=https://amiom.com      # Used for sitemap, canonical URLs, OG
```

## Pages Implemented
- `/` — Home (hero, stats, services, why-us, CTA)
- `/about` — About (hero, mission/vision cards, values, story, CTA)
- `404` — Not Found

## Pages To Build (future)
- `/services` — Services overview
- `/services/corporate-finance`
- `/services/investment-advisory`
- `/services/mergers-acquisitions`
- `/services/capital-markets`
- `/contact` — Contact form
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/disclaimer` — Disclaimer
