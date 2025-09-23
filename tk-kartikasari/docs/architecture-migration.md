# Architecture Migration Plan: From Single-Page Static Site to Multi-Page Next.js App

## 1. Objectives & Success Criteria
- Deliver a modern multi-page experience that improves organic discovery through per-page metadata and structured content.
- Support clearer content organization so families can easily find information about TK Kartikasari's programs, admissions, and activities.
- Enhance navigation and conversion flows via dedicated pages and context-aware CTAs.
- Ensure the site can scale for future content updates without major rewrites.

**Key benefits of the migration**
1. Better SEO with page-level optimization (Open Graph, schema, structured data).
2. Improved content organization by separating concerns per route.
3. Enhanced user navigation through reusable layout, sticky CTAs, and sitemap alignment.
4. Scalable content management by externalizing copy, media, and structured data.

## 2. Target Architecture Overview
- **Framework**: Next.js 14 App Router with React Server Components for fast, SEO-friendly pages.
- **Rendering strategy**: Static Site Generation (SSG) for public content with optional Incremental Static Regeneration (ISR) to refresh agenda/pengumuman data without full redeploys.
- **Routing model**: Nested routes using the `app/` directory (e.g., `app/tentang/page.tsx`, `app/program/page.tsx`) with a shared `app/layout.tsx` for global theming, meta, and navigation.
- **Component system**: Consolidate UI patterns in `components/` (hero, testimonials, navigation, cards) to keep pages declarative.
- **Content layer**: Store structured data in `data/*.json` (agenda, pengumuman, galeri, testimonials, site metadata) and exported helper content in `content/`. Migrate ad-hoc copy into these sources to decouple presentation from content.
- **Styling**: Continue Tailwind CSS via `app/globals.css` and `tailwind.config.js`, leveraging utility classes for rapid iteration.
- **SEO utilities**: Centralize schema definitions in `lib/schema.ts` and expose a helper to inject JSON-LD per page. Use Next.js Metadata API for dynamic titles/descriptions.

## 3. Information Architecture & Sitemap
| Page | Route | Content Source | Notes |
| --- | --- | --- | --- |
| Beranda | `/` | Hero, stats, FAQ, CTA content from `components/home` and `data/site.json` | Showcase differentiators, testimonials, WhatsApp CTA.
| Tentang | `/tentang` | Narrative sections sourced from JSON / markdown | Highlight vision, educator profiles, facility photos.
| Program | `/program` | Program list from `data/site.json` (or future CMS) | Provide detailed curriculum breakdown per usia.
| PPDB | `/ppdb` | Step-by-step admissions data from JSON | Embed forms/CTA using `content/cta.ts` exports.
| Pengumuman | `/pengumuman` | Structured list from `data/pengumuman.json` | Support ISR when integrated with CMS.
| Agenda | `/agenda` | Events from `data/agenda.json` | Use chronological grouping and filters.
| Galeri | `/galeri` | Gallery items from `data/galeri.json` with images stored in `public/photos` | Optimize images via `next/image`.
| Kontak | `/kontak` | Contact methods and map embed from JSON | Include persistent CTA.

## 4. Migration Strategy
1. **Audit & content extraction**
   - Inventory sections in the current single-page site and map each to the target route above.
   - Externalize copy and list data into JSON/TypeScript modules inside `data/` or `content/`.
2. **Bootstrap Next.js foundation**
   - Initialize Next.js App Router project (already present in this repository) with TypeScript, Tailwind, and linting.
   - Configure shared layout, navigation (`data/navigation.ts`), and footer.
3. **Implement page shells**
   - Create `app/{route}/page.tsx` files rendering page-level components.
   - Wire metadata via `generateMetadata` for titles, descriptions, and canonical URLs.
4. **Componentize shared UI**
   - Port sections into reusable components within `components/` (hero, CTA blocks, testimonials, agenda list, cards).
   - Add motion enhancements with `framer-motion` where needed for interactivity.
5. **Data binding & dynamic content**
   - Replace hardcoded strings with data imports (e.g., agenda, announcements, testimonials).
   - Prepare adapters for future CMS integration (contentful, Sanity, or simple CMS) while defaulting to local JSON.
6. **Navigation & conversion flows**
   - Implement top navigation, sticky CTA bar, and context-specific actions using data from `content/cta.ts`.
   - Ensure WhatsApp CTA and Directions CTA persist across pages using the shared layout.
7. **SEO, analytics, and performance**
   - Inject structured data via helpers in `lib/schema.ts`.
   - Configure per-page Open Graph images and meta tags.
   - Add analytics snippet (e.g., Google Analytics) via Next.js `head` management if required.
8. **Testing & launch**
   - Validate responsive design across key breakpoints.
   - Run automated accessibility and Lighthouse audits.
   - Use `next build` and preview deployment before cut-over.

## 5. Content Management & Scalability
- Define a clear contract for data objects in `data/*.json` to enable validation.
- Introduce Zod or TypeScript types to guard against malformed content when scaling contributors.
- Plan for optional CMS integration by encapsulating data fetching in utility functions (e.g., `lib/api.ts`).
- Organize media assets under `public/photos` with consistent naming; adopt `next/image` for optimization.

## 6. Non-Functional Requirements
- **Performance**: Aim for <1s Largest Contentful Paint on 4G, leverage image optimization and static generation.
- **Accessibility**: Use semantic HTML, focus states, aria labels, and test with screen readers.
- **Internationalization** (optional future): Structure content to allow locale keys if bilingual site is needed.
- **Security**: Enforce HTTPS redirects and security headers during deployment (Vercel or equivalent).

## 7. Risks & Mitigation
| Risk | Impact | Mitigation |
| --- | --- | --- |
| Content drift between JSON and actual sections | Medium | Document content owners and editing workflow; add content validation step in CI. |
| SEO regression during cut-over | High | Launch on staging domain, crawl for broken links, submit updated sitemap to Google. |
| Limited internal familiarity with Next.js | Medium | Pair programming sessions, provide code walkthroughs, add README instructions. |
| Asset optimization backlog | Low | Schedule dedicated task to compress and convert gallery images to `.webp`. |

## 8. Implementation Roadmap (6–8 weeks)
1. Week 1: Content audit, sitemap sign-off, Next.js foundation review.
2. Weeks 2-3: Build page shells and shared layout/navigation.
3. Weeks 3-4: Component extraction, data binding, integrate CTAs.
4. Week 5: SEO setup, structured data, analytics, performance tuning.
5. Week 6: QA (responsive, accessibility, Lighthouse), content freeze.
6. Weeks 7-8: Optional CMS adapter, stakeholder review, production launch & monitoring.

## 9. Definition of Done
- All key routes (`/`, `/tentang`, `/program`, `/ppdb`, `/pengumuman`, `/agenda`, `/galeri`, `/kontak`) implemented with dedicated content.
- Shared layout delivers consistent navigation and CTAs across pages.
- Page-level metadata, schema, and Open Graph tags configured.
- Content stored in structured sources with documented update workflow.
- `next build` passes without errors and deployment preview validated by stakeholders.
