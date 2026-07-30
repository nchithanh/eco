# Homepage

Entry: `app/page.tsx`.

## Section order → component

UX flow: **website / delivery first**, then **AI layer**, then **trust & contact**.

| # | Block | Section | Component | Anchor / notes |
| --- | --- | --- | --- | --- |
| — | — | Nav (+ announcement) | `Nav`, `AnnouncementBar` | |
| 1 | Web | Hero | `Hero` | `#top` — web-first copy; secondary CTA → `#capabilities` |
| 2 | AI | Technology (globe) | `Technology` | `#technology` — animated globe + AI transform CTA |
| 3 | Web | Capabilities | `Capabilities` | `#capabilities` — service grid |
| 4 | Web | Popular services | `PopularServices` | `#popular-services` — package comparison table |
| 5 | Web | Works | `WorksShowcase` | `#works` — portfolio / case studies |
| 6 | Web | Outcomes | `SiteOutcomes` | `#outcomes` |
| 7 | Web | Process | `Process` | `#process` |
| 8 | Web | Deliverables | `WhatYouGet` | `#what-you-get` |
| 9 | Web | Ops lifecycle | `OpsLifecycle` | `#ops` |
| 10 | Web | Handover | `TrustStrip` | `#handover` |
| 11 | Web | Tech stack | `TechStack` | `#stack` |
| 12 | AI | AI edge | `AiEdge` | `#ai-edge` |
| 13 | Trust | Why us | `WhyKuct` | `#why` |
| 14 | Trust | Co-founder | `CoFounder` | `#cofounder` |
| 15 | Trust | Notes | `HomeNews` | `#news` |
| 16 | Trust | FAQ | `Faq` | `#faq` |
| 17 | Trust | Contact | `ContactForm` | `#contact` |
| 18 | — | Footer | `Footer` | |

`UiGallery` / `#ui-gallery` is **not** on the homepage (component + copy remain in repo if reused later).

## Global overlays (not sections)

- `AiChatWidget` — floating assist / contact FABs
- `QuoteEstimatorModal` via `QuoteProvider`
- `CookieConsent`, `PagePreviewModal`, `DesignViewerModal`

## Copy source

Most homepage strings: `lib/i18n/dictionaries.ts` (+ `popular-services-copy.ts`, `ai-edge-copy.ts`, `faq-copy.ts`, `news-copy.ts`).
