# Homepage

Entry: `app/page.tsx`.

## Section order → component

UX flow: **website / delivery first**, then **AI layer**, then **trust & contact**.

| # | Block | Section | Component | Anchor / notes |
| --- | --- | --- | --- | --- |
| — | — | Nav (+ announcement) | `Nav`, `AnnouncementBar` | |
| 1 | Web | Hero | `Hero` | `#top` — web-first copy; secondary CTA → `#capabilities` |
| 2 | Web | Capabilities | `Capabilities` | `#capabilities` — service grid (build + integrations + AI items) |
| 3 | Web | Popular services | `PopularServices` | `#popular-services` — package comparison table |
| 4 | Web | UI gallery | `UiGallery` | `#ui-gallery` — layout showcase |
| 5 | Web | Works | `WorksShowcase` | `#works` — portfolio / case studies |
| 6 | Web | Outcomes | `SiteOutcomes` | `#outcomes` — business results |
| 7 | Web | Process | `Process` | `#process` — 5-step delivery |
| 8 | Web | Deliverables | `WhatYouGet` | `#what-you-get` |
| 9 | Web | Ops lifecycle | `OpsLifecycle` | `#ops` |
| 10 | Web | Handover | `TrustStrip` | `#handover` |
| 11 | Web | Tech stack | `TechStack` | `#stack` |
| 12 | AI | AI edge | `AiEdge` | `#ai-edge` — chat / workflow / agent; links to AI routes |
| 13 | Trust | Why us | `WhyKuct` | `#why` |
| 14 | Trust | Co-founder | `CoFounder` | `#cofounder` |
| 15 | Trust | Notes | `HomeNews` | `#news` |
| 16 | Trust | FAQ | `Faq` | `#faq` |
| 17 | Trust | Contact | `ContactForm` | `#contact` |
| 18 | — | Footer | `Footer` | |

`Technology` (heavy AI globe/dashboard) is **not** on the homepage.

## Global overlays (not sections)

- `AiChatWidget` — floating assist / contact FABs
- `QuoteEstimatorModal` via `QuoteProvider` — reference quote wizard
- `CookieConsent`, `PagePreviewModal`, `DesignViewerModal` as wired in providers

## Copy source

Most homepage strings: `lib/i18n/dictionaries.ts` (+ `popular-services-copy.ts`, `ui-gallery-copy.ts`, `ai-edge-copy.ts`, `faq-copy.ts`, `news-copy.ts`). Gallery images: `lib/ui-gallery-data.ts`.
