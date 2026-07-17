# Amiom Corporate Finance Private Limited — Website

## About
Corporate website for **Amiom Corporate Finance Private Limited** (CIN: U64990TN2026PTC194318), a registered **Direct Selling Agent (DSA)** for banks and NBFCs.
The site is a lead-generation focused marketing website for loan products and credit cards. Built with SEO, performance, accessibility, and mobile-first responsive design.

## Business Model
Amiom is a DSA — it does not lend directly. It connects customers with partner banks and NBFCs to facilitate:
- Personal Loans, Home Loans, Business Loans
- Loan Against Property, Education Loans, Vehicle Loans
- Credit Cards

## Company Details
- **Registered Name**: AMIOM CORPORATE FINANCE PRIVATE LIMITED
- **CIN**: U64990TN2026PTC194318
- **ROC**: ROC Chennai
- **Date of Incorporation**: 18/06/2026
- **Email**: amiomcorporatefinance@gmail.com
- **Address**: SF NO 106/2C, ADIANNAMALAI, Adaiyur, Tiruvannamalai, Tamil Nadu, India - 606604

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
packages/constants/        → Centralized content data (company, navigation, pages, legal, services)
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
- `company.ts` → company info (CIN, address, brand assets, social links)
- `navigation.ts` → main nav, footer nav (typed with NavItem interface)
- `home.ts` → hero, services, why-us, partner banks, customer journey, CTA
- `about.ts` → hero, mission, vision, values, story
- `services.ts` → all 7 loan/credit card service details (slug, features, eligibility, documents, rates)
- `contact.ts` → contact page content, form config (loan types)
- `legal.ts` → copyright, DSA disclaimer, privacy policy, terms

### Component Architecture
- **shadcn/ui** for all base UI primitives (no plain HTML buttons/dialogs/nav)
- **21st.dev-style** marketing components with animated gradients, glass morphism, hover effects
- Components are in `packages/ui/` and consumed by the app
- Header uses `NavigationMenu` (desktop) + `Sheet` (mobile drawer)
- All marketing sections use `Container`, `Section`, `SectionHeader` wrappers
- `LeadForm` client component for contact/lead capture

### Rendering Strategy
- Static Generation for all pages (SSG)
- Server Components by default
- Client Components only for: Framer Motion animations, interactive nav, Sheet/dialog, LeadForm

### SEO
- `sitemap.ts` dynamically generates routes from `SERVICE_SLUGS` constant
- `robots.ts` in app directory (Next.js metadata API)
- JSON-LD structured data: Organization + WebSite + FinancialService schemas in root layout
- JSON-LD FinancialProduct schema on individual service pages
- Open Graph + Twitter card metadata via `createMetadata()` helper
- Canonical URLs on all pages
- DSA/loan-focused keywords in root metadata
- Google Analytics 4 via `NEXT_PUBLIC_GA_ID` env var
- Google Search Console via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var
- Lead form tracks `generate_lead` GA4 event on submission

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

## Pages Implemented
- `/` — Home (hero, stats, loan products grid, how it works, why choose us, partner banks, CTA)
- `/about` — About (hero, mission/vision cards, values, story, CTA)
- `/services` — Services overview (all 7 loan products)
- `/services/[slug]` — Individual service detail (features, eligibility, documents, rates)
  - `/services/personal-loans`
  - `/services/home-loans`
  - `/services/business-loans`
  - `/services/loan-against-property`
  - `/services/education-loans`
  - `/services/vehicle-loans`
  - `/services/credit-cards`
- `/contact` — Contact page with lead capture form + company contact info
- `404` — Not Found

## Pages To Build (future)
- `/privacy` — Privacy Policy (content exists in constants)
- `/terms` — Terms of Service (content exists in constants)
- `/disclaimer` — Disclaimer (content exists in constants)

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

## Adding New Loan Products
1. Add service object to `SERVICES` array in `packages/constants/src/services.ts`
2. Add icon mapping if needed in `packages/ui/src/marketing/feature-grid.tsx`
3. The `/services/[slug]` dynamic route auto-generates the page
4. Sitemap auto-updates from `SERVICE_SLUGS`

## Environment Variables
```
NEXT_PUBLIC_GA_ID=                          # Google Analytics 4 measurement ID
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=       # Google Search Console verification
NEXT_PUBLIC_SITE_URL=https://amiom.com      # Used for sitemap, canonical URLs, OG
```
