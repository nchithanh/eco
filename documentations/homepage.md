# Homepage

Entry: `app/page.tsx`.

## Section order → component

| # | Section | Component | Anchor / notes |
| --- | --- | --- | --- |
| — | Nav (+ announcement) | `Nav`, `AnnouncementBar` | |
| 1 | Hero | `Hero` | `#top` |
| 2 | Technology | `Technology` | |
| 3 | Popular services | `PopularServices` | `#popular-services` — comparison table: Landing / Business / Shop / Web App |
| 4 | Capabilities | `Capabilities` | `#capabilities` |
| 5 | Outcomes | `SiteOutcomes` | |
| 6 | Deliverables | `WhatYouGet` | |
| 7 | Ops lifecycle | `OpsLifecycle` | `#ops` |
| 8 | Works | `WorksShowcase` | |
| 9 | Process | `Process` | `#process` |
| 10 | Handover | `TrustStrip` | |
| 11 | Tech stack | `TechStack` | `#stack` / `#technology` |
| 12 | Why us | `WhyKuct` | |
| 13 | Co-founder | `CoFounder` | `#cofounder` |
| 14 | Notes | `HomeNews` | |
| 15 | FAQ | `Faq` | |
| 16 | Contact | `ContactForm` | `#contact` |
| 17 | Footer | `Footer` | |

## Global overlays (not sections)

- `AiChatWidget` — floating assist / contact FABs
- `QuoteEstimatorModal` via `QuoteProvider` — reference quote wizard
- `CookieConsent`, `PagePreviewModal`, `DesignViewerModal` as wired in providers

## Copy source

Most homepage strings: `lib/i18n/dictionaries.ts` (+ `popular-services-copy.ts`, `faq-copy.ts`, `news-copy.ts` for featured packages / FAQ / news blurb).
