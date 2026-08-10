# Homepage

Entry: `app/page.tsx` → `components/HomePage.tsx`.

## Schema (section order)

Outcome-first story: fit → trust → principles → how we help → proof → Care / Ops AI → process → packages → news → FAQ → CTA.

```
Hero
├── Fit                         → FitSection `#fit` (carousel; optional if no `t.fit`)
├── Outcomes                    → SiteOutcomes `#stats`
├── Why Dolphin (principles)    → WhyKuct `#why`
├── How we help                 → Capabilities `#capabilities` (Build·Modernize·Automate·Care)
├── Projects                    → WorksShowcase `#works`
├── Dolphin Care                → AgentDolphinHome `#dolphin-care`
├── Ops AI                      → Technology `#technology` + AiEdge `#ai-edge`
├── Process                     → Process `#process`
├── Solutions                   → PopularServices `#popular-services`
├── News                        → HomeNews `#news` (hidden when no posts)
├── FAQ                         → Faq `#faq`
└── CTA                         → ContactForm `#contact`
```

| # | Schema | Component | Anchor |
| --- | --- | --- | --- |
| — | Nav | `Nav` | Desktop 2-tier: utility (news/about/careers/contact) + GNB services/AI; mobile accordion |
| 1 | Hero | `Hero` | `#top` — signature: tags + `EmbedSiteMock` wireframe scroll + metrics + mascot eco; H1 LCP `kuct-title-enter`; wash `.kuct-hero-wash` |
| 2 | Fit | `FitSection` | `#fit` — centered header + 2-col carousel (copy \| image); images `public/fit/slide-0*.jpg` |
| 3 | Outcomes | `SiteOutcomes` | `#stats` — desktop sticky left + stacked cards right; section titles use `Reveal variant="title"` |
| 4 | Why Dolphin | `WhyKuct` | `#why` |
| 5 | How we help | `Capabilities` | `#capabilities` — hub header + center carousel (peek sides, autoplay/pause) |
| 6 | Projects | `WorksShowcase` | `#works` |
| 7 | Dolphin Care | `AgentDolphinHome` | `#dolphin-care` |
| 8 | Ops AI | `Technology`, `AiEdge` | `#technology` (AI Philosophy + principles VI), `#ai-edge` |
| 9 | Process | `Process` | `#process` |
| 10 | Solutions | `PopularServices` | `#popular-services` — 50/50: left intro / right top tabs + detail |
| 11 | News | `HomeNews` | `#news` — carousel; click card → `/news/[slug]/` (full page, no popup) |
| — | `/news/` list | `NewsContent` | Canva **pageNew** (page 2): eyebrow + title/filters row; featured split (copy \| image); grid cards ↗ |
| 12 | FAQ | `Faq` | `#faq` |
| 13 | CTA | `ContactForm` | `#contact` |
| — | Footer | `Footer` | |

**Deferred:** Testimonials. **Not on homepage:** WhatYouGet, TrustStrip, TechStack, OpsLifecycle, CoFounder, UiGallery.

## Brand chrome (VI)

Eyebrows stay English (`Outcomes`, `Why Dolphin`, `How we help`, `Projects`, `Ops AI`, `Fit`, `Solutions`, `Next step`). Display name always **Dolphin Software**. Titles/support/body in VI via `homepage_lang_vi.ts` (SEO/AEO/GEO rewriter SoT mirrored in `public/schema/homepage/`). Projects `#works`: 6 cases (bida, cầu lông, vé, beauty, cafe QR, clinic).

**Visual system (Phase 0):** mist canvas `#fcfcfd`, soft lavender accent `#6b56d6`, charcoal text — plan [homepage-anti-vibe-code.md](./homepage-anti-vibe-code.md). Type helpers `.kuct-type-*`, card `.kuct-surface-card`, badge `.kuct-badge`.

Homepage `<title>` / description (VI): from `homepageLangVi.seo` in `app/page.tsx`. JSON-LD: `WebPage` + `FAQPage` on `/` (Organization/WebSite remain in root layout).

## Homepage locale files

| File | Role |
| --- | --- |
| `lib/i18n/homepage_lang_vi.ts` | VI homepage SoT (sections + `fit` + contact chrome) |
| `lib/i18n/homepage_lang_en.ts` / `homepage_lang_ja.ts` | EN/JA overlays synced from VI |
| `lib/i18n/homepage_lang.ts` | Registers overlays; merge in `getDictionary` |
| `homepage_lang_*` extras | Add when localizing further chrome outside overlays |

Non-VI locales use their `homepage_lang_*` overlays when registered; otherwise fall back to `dictionaries.ts` (+ popular-services / ai-edge modules). `FitSection` only renders when `dict.fit` is set.

## Global overlays

- `AiChatWidget`, `QuoteEstimatorModal`, `CookieConsent`, `DesignViewerModal` (detail pages: full navigation, không còn `PagePreviewModal` trên homepage)
- Chat: `AiChatWidget` → Worker `dolphin-chat` (Groq proxy Free) via `lib/chat-api.ts`; keyword fallback `matchAiChatReply` — see `architecture.md` / `workers/dolphin-chat/`
