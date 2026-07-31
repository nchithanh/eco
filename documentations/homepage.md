# Homepage

Entry: `app/page.tsx`.

## Section order → component

UX flow: **website / delivery first**, then **AI layer**, then **trust & contact**.

| # | Block | Section | Component | Anchor / notes |
| --- | --- | --- | --- | --- |
| — | — | Nav (+ announcement) | `Nav`, `AnnouncementBar` | |
| 1 | Web | Hero | `Hero` | `#top` — web-first copy; secondary CTA → `#capabilities` |
| 2 | AI | Agent Dolphin | `AgentDolphinHome` | `#agent-dolphin` — chat-style teaser → `/agent-dolphin/` |
| 3 | AI | Technology (globe) | `Technology` | `#technology` — animated globe + AI transform CTA |
| 4 | Web | Capabilities | `Capabilities` | `#capabilities` — service grid |
| 5 | Web | Popular services | `PopularServices` | `#popular-services` — package comparison table |
| 6 | Web | Works | `WorksShowcase` | `#works` — portfolio / case studies |
| 7 | Web | Outcomes | `SiteOutcomes` | `#outcomes` |
| 8 | Web | Process | `Process` | `#process` |
| 9 | Web | Deliverables | `WhatYouGet` | `#what-you-get` |
| 10 | Web | Ops lifecycle | `OpsLifecycle` | `#ops` |
| 11 | Web | Handover | `TrustStrip` | `#handover` |
| 12 | Web | Tech stack | `TechStack` | `#stack` |
| 13 | AI | AI edge | `AiEdge` | `#ai-edge` |
| 14 | Trust | Why us | `WhyKuct` | `#why` |
| 15 | Trust | Co-founder | `CoFounder` | `#cofounder` |
| 16 | Trust | Notes | `HomeNews` | `#news` |
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
