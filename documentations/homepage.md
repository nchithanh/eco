# Homepage

Entry: `app/page.tsx`.

## Section order → component

Story flow: **overview (Hero)** → **intro Website** → **intro Agent** → **descriptive sections** → trust & contact.

| # | Block | Section | Component | Anchor / notes |
| --- | --- | --- | --- | --- |
| — | — | Nav (+ announcement) | `Nav`, `AnnouncementBar` | |
| 1 | Overview | Hero | `Hero` | `#top` — benefit overview; secondary CTA → `#capabilities` |
| 2 | Intro | Website / services | `Capabilities` | `#capabilities` — 4 offer cards (landing/business/shop/webapp) + more-service tags + CTA (quote / `#popular-services`); no filter/carousel images |
| 3 | Intro | Dolphin Care | `AgentDolphinHome` | `#dolphin-care` — 2-col (copy+benefits+CTA left, 1 long chat demo right) → `/dolphin-care/` |
| 4 | Detail | Popular services | `PopularServices` | `#popular-services` — package comparison table |
| 5 | Detail | Works | `WorksShowcase` | `#works` |
| 6 | Detail | Outcomes | `SiteOutcomes` | `#outcomes` |
| 7 | Detail | Process | `Process` | `#process` |
| 8 | Detail | Deliverables | `WhatYouGet` | `#what-you-get` |
| 9 | Detail | Handover | `TrustStrip` | `#handover` |
| 10 | Detail | Tech stack | `TechStack` | `#stack` |
| 11 | Detail | Technology (globe) | `Technology` | `#technology` → `/ai-transform/` |
| 12 | Detail | AI edge | `AiEdge` | `#ai-edge` |
| 13 | Detail | Ops lifecycle | `OpsLifecycle` | `#ops` |
| 14 | Trust | Why us | `WhyKuct` | `#why` |
| 15 | Trust | Nhà sáng lập | `CoFounder` | `#cofounder` |
| 16 | Trust | Notes | `HomeNews` | `#news` — 1 featured + 4 secondary (compact); reading time; view all → `/news/` |
| 17 | Trust | FAQ | `Faq` | `#faq` |
| 18 | Trust | Contact | `ContactForm` | `#contact` |
| 19 | — | Footer | `Footer` | |

`UiGallery` / `#ui-gallery` is **not** on the homepage (component + copy remain in repo if reused later).

## Global overlays (not sections)

- `AiChatWidget` — floating assist / contact FABs
- `QuoteEstimatorModal` via `QuoteProvider`
- `CookieConsent`, `PagePreviewModal`, `DesignViewerModal`

## Copy source

Most homepage strings: `lib/i18n/dictionaries.ts` (+ `popular-services-copy.ts`, `ai-edge-copy.ts`, `agent-dolphin-copy.ts` home teaser, `faq-copy.ts`, `news-copy.ts`).
