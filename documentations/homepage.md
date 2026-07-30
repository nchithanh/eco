# Homepage

Entry: `app/page.tsx`.

## Section order → component

| # | Section | Component | Anchor / notes |
| --- | --- | --- | --- |
| — | Nav (+ announcement) | `Nav`, `AnnouncementBar` | |
| 1 | Hero | `Hero` | `#top` — web-first copy; `aiPill`; glass panels center **Web & App** |
| 2 | Popular services | `PopularServices` | `#popular-services` — comparison table: Landing / Business / Shop / Web App |
| 3 | UI gallery | `UiGallery` | `#ui-gallery` — filterable layout showcase (20 previews) |
| 4 | AI edge | `AiEdge` | `#ai-edge` — practical AI differentiator (chat, workflow, agent); links to `/ai-transform`, `/custom-agent` |
| 5 | Capabilities | `Capabilities` | `#capabilities` |
| 6 | Outcomes | `SiteOutcomes` | |
| 7 | Deliverables | `WhatYouGet` | |
| 8 | Ops lifecycle | `OpsLifecycle` | `#ops` |
| 9 | Works | `WorksShowcase` | |
| 10 | Process | `Process` | `#process` |
| 11 | Handover | `TrustStrip` | |
| 12 | Tech stack | `TechStack` | `#stack` |
| 13 | Why us | `WhyKuct` | |
| 14 | Co-founder | `CoFounder` | `#cofounder` |
| 15 | Notes | `HomeNews` | |
| 16 | FAQ | `Faq` | |
| 17 | Contact | `ContactForm` | `#contact` |
| 18 | Footer | `Footer` | |

`Technology` (heavy AI globe/dashboard) is **not** on the homepage; it remains available as a component for other routes if needed.

## Global overlays (not sections)

- `AiChatWidget` — floating assist / contact FABs
- `QuoteEstimatorModal` via `QuoteProvider` — reference quote wizard
- `CookieConsent`, `PagePreviewModal`, `DesignViewerModal` as wired in providers

## Copy source

Most homepage strings: `lib/i18n/dictionaries.ts` (+ `popular-services-copy.ts`, `ui-gallery-copy.ts`, `ai-edge-copy.ts`, `faq-copy.ts`, `news-copy.ts` for featured packages / gallery / AI edge / FAQ / news blurb). Gallery preview images: external R2 URLs in `lib/ui-gallery-data.ts`.
