# Pages (beyond home)

| Route | Page file | Main content |
| --- | --- | --- |
| `/schema/` | `app/schema/page.tsx` | List clickable → company / homepage / services / agents (+ slug chips); `noindex` |
| `/schema/company/` | `app/schema/company/page.tsx` | Overview JSON (`public/schema/company.json`); `noindex` |
| `/schema/homepage/` | `app/schema/homepage/page.tsx` | List section homepage; overview raw `homepage/overview.json` |
| `/schema/homepage/[slug]/` | `app/schema/homepage/[slug]/page.tsx` | JSON từng section (hero, stats, why, …) |
| `/schema/services/` | `app/schema/services/page.tsx` | Services index JSON |
| `/schema/services/[slug]/` | `app/schema/services/[slug]/page.tsx` | Per-service JSON (`web`, `mobile`, `backend`, `design`, `integrations`, `agents`, `custom-agent`) |
| `/schema/agents/` | `app/schema/agents/page.tsx` | Agents index JSON |
| `/schema/agents/[slug]/` | `app/schema/agents/[slug]/page.tsx` | Agent product JSON (`dolphin-care`, `custom-agent`, `ai-transform`) |
| `/company_value/` | `app/company_value/page.tsx` | Legacy redirect → `/schema/company/` |
| `/about/` | `app/about/page.tsx` | `AboutContent` — studio intro; founder photo `public/about/founder.png`; copy `lib/i18n/about-copy.ts` |
| `/careers/` | `app/careers/page.tsx` | `CareersContent` + jobs in `lib/careers-jobs.ts` / `careers-copy.ts` — Mobile/Design closed; Marketing/Growth open |
| `/dolphin-care/` | `app/dolphin-care/page.tsx` | **Dolphin Care** — `AgentDolphinContent` + `agent-dolphin-copy.ts`; OG `public/og-dolphin-care.png` (VI social meta) |
| `/agent-dolphin/` | `app/agent-dolphin/page.tsx` | Legacy redirect (noindex) → `/dolphin-care/` |
| `/custom-agent/` | `app/custom-agent/page.tsx` | `CustomAgentContent` + `custom-agent-copy.ts` |
| `/ai-transform/` | `app/ai-transform/page.tsx` | `AiTransformContent` + `ai-transform-copy.ts` |
| `/news/` | `app/news/page.tsx` | `NewsContent` |
| `/news/[slug]/` | `app/news/[slug]/page.tsx` | `NewsDetailView` + `lib/news-details.ts` |
| `/services/[slug]/` | `app/services/[slug]/page.tsx` | `ServiceDetailView` + `lib/i18n/service-details.ts` — premium dark hero (CTA in hero), 3 outcome cards, Best for + FAQ, closing quote CTA. **`/services/web/`** is ICP #1 landing (VI meta + Service/FAQ JSON-LD); includes embedded pricing table (`#web-pricing`) + Sites shipped grid. |
| `/tech/[slug]/` | `app/tech/[slug]/page.tsx` | `TechDetailView` + `lib/tech-stack.ts` / extras |
| `/works/[slug]/` | `app/works/[slug]/page.tsx` | `WorkDetailView` + `lib/works-details.ts` |
| `/more/[slug]/` | `app/more/[slug]/page.tsx` | `MoreDetailView` + `lib/more-details.ts` |

Nav: dropdown **Dịch vụ** (web / landing / mobile / backend / UI) + **AI Agent** dropdown; News / About / Careers. Process & Tech removed from nav/footer.
