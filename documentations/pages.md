# Pages (beyond home)

| Route | Page file | Main content |
| --- | --- | --- |
| `/schema/` | `app/schema/page.tsx` | List clickable → company / homepage / services / agents (+ slug chips); `noindex` |
| `/schema/company/` | `app/schema/company/page.tsx` | Overview JSON (`public/schema/company.json`); `noindex` |
| `/schema/homepage/` | `app/schema/homepage/page.tsx` | List section homepage; overview raw `homepage/overview.json` |
| `/schema/homepage/[slug]/` | `app/schema/homepage/[slug]/page.tsx` | JSON từng section (hero, stats, why, …) |
| `/schema/services/` | `app/schema/services/page.tsx` | Services index JSON |
| `/schema/services/[slug]/` | `app/schema/services/[slug]/page.tsx` | Per-service JSON (`web`, `landing`, `mobile`, `software`, `design`, `integrations`, `agents`) |
| `/schema/agents/` | `app/schema/agents/page.tsx` | Agents index JSON |
| `/schema/agents/[slug]/` | `app/schema/agents/[slug]/page.tsx` | Agent product JSON (`dolphin-care`, `ai-transform`) |
| `/company_value/` | `app/company_value/page.tsx` | Legacy redirect → `/schema/company/` |
| `/about/` | `app/about/page.tsx` | `AboutContent` — studio intro; founder photo `public/about/founder.png`; copy `lib/i18n/about-copy.ts`; VI Jasper SEO/AEO/GEO (meta “công ty thiết kế web”, FAQ 6 Q + FAQPage/Person JSON-LD; internal links web/backend/ai-transform/dolphin-care). |
| `/careers/` | `app/careers/page.tsx` | `CareersContent` + `careers-jobs.ts` / `careers-copy.ts` — VI Jasper SEO/AEO/GEO (freelance model, open/closed roles, how-to-apply, FAQ 6 Q, FAQPage + JobPosting JSON-LD); Sales/Marketing priority; FE/Mobile/Design closed. Job detail popup: Share (`navigator.share` / copy) → deep link `?job=<id>` mở lại popup. |
| `/dolphin-care/` | `app/dolphin-care/page.tsx` | **Dolphin Care** — `AgentDolphinContent` + `agent-dolphin-copy.ts`; OG `public/og-dolphin-care.png`; VI Jasper SEO/AEO/GEO (meta keyword “AI chăm sóc khách hàng trên website”, FAQ 6 Q + Service/FAQ JSON-LD). |
| `/agent-dolphin/` | `app/agent-dolphin/page.tsx` | Legacy redirect (noindex) → `/dolphin-care/` |
| `/custom-agent/` | `app/custom-agent/page.tsx` | Legacy redirect (noindex) → `/ai-transform/` |
| `/services/custom-agent/` | `app/services/custom-agent/page.tsx` | Legacy redirect (noindex) → `/ai-transform/` |
| `/ai-transform/` | `app/ai-transform/page.tsx` | `AiTransformContent` + `ai-transform-copy.ts`; VI Jasper SEO/AEO/GEO (meta “Lộ Trình Triển Khai AI”; custom AI agent = building block in roadmap, not a separate product; sections What We Build / Use Cases / internal proof “Builds With AI”; ROI + governance; FAQ 6 Q + links Care/about); section images under `public/services/ai-transform/` |
| `/news/` | `app/news/page.tsx` | `NewsContent` — Canva **pageNew** (page 2): eyebrow + title/filters row; featured split; 3-col grid cards; click → full `/news/[slug]/` |
| `/news/[slug]/` | `app/news/[slug]/page.tsx` | `NewsDetailView` — hero split: meta + title + excerpt trái, ảnh chính phải; share Facebook + copy link; body + FAQ |
| `/services/[slug]/` | `app/services/[slug]/page.tsx` | `ServiceDetailView` + `service-details.ts`. **`/services/web/`** hero = browser `EmbedSiteMock`. **`/services/mobile/`** = `variant="devices"` (1 phone + 1 iPad, cùng wireframe scroll homepage). Care how-section: mock + chat, tĩnh. **`/services/software/`** long-form `SoftwareServiceContent`. **`/services/backend/`** legacy redirect → software. Web/mobile bake VI meta + FAQ JSON-LD. |
| `/services/landing/` | `app/services/landing/page.tsx` | **Landing Page** detail — `LandingPageContent` + `landing-copy.ts`; VI SEO/AEO/GEO (meta chuyên nghiệp, FAQ 7 Q, bảng ngành + giá, quy trình 5 bước); Service/FAQ JSON-LD; Nav GNB + capabilities `landing` → đây. |
| `/tech/[slug]/` | `app/tech/[slug]/page.tsx` | `TechDetailView` + `lib/tech-stack.ts` / extras |
| `/works/[slug]/` | `app/works/[slug]/page.tsx` | `WorkDetailView` + `lib/works-details.ts` |
| `/more/[slug]/` | `app/more/[slug]/page.tsx` | `MoreDetailView` + `lib/more-details.ts` |

Nav: desktop 2-tier (utility: News / About / Careers / Contact + locale; GNB flat — web / landing / mobile / software / Dolphin Care / AI Transform, no dropdown). Mobile giữ accordion Dịch vụ + AI. Process & Tech removed from nav/footer. `/services/design/` still exists but is not linked from nav/footer.
