# Pages (beyond home)

| Route | Page file | Main content |
| --- | --- | --- |
| `/about/` | `app/about/page.tsx` | `AboutContent` — studio intro; founder photo `public/about/founder.png`; copy `lib/i18n/about-copy.ts` |
| `/careers/` | `app/careers/page.tsx` | `CareersContent` + jobs in `lib/careers-jobs.ts` / `careers-copy.ts` |
| `/custom-agent/` | `app/custom-agent/page.tsx` | `CustomAgentContent` + `custom-agent-copy.ts` |
| `/ai-transform/` | `app/ai-transform/page.tsx` | `AiTransformContent` + `ai-transform-copy.ts` |
| `/news/` | `app/news/page.tsx` | `NewsContent` |
| `/news/[slug]/` | `app/news/[slug]/page.tsx` | `NewsDetailView` + `lib/news-details.ts` |
| `/services/[slug]/` | `app/services/[slug]/page.tsx` | `ServiceDetailView` + `lib/i18n/service-details.ts` — premium dark hero (CTA in hero), 3 outcome cards, Best for + FAQ, closing quote CTA |
| `/tech/[slug]/` | `app/tech/[slug]/page.tsx` | `TechDetailView` + `lib/tech-stack.ts` / extras |
| `/works/[slug]/` | `app/works/[slug]/page.tsx` | `WorkDetailView` + `lib/works-details.ts` |
| `/more/[slug]/` | `app/more/[slug]/page.tsx` | `MoreDetailView` + `lib/more-details.ts` |

Nav links for About / Careers / News / AI pages are in `components/Nav.tsx` and `Footer.tsx` using `t.nav.*` + `assetPath()`.
