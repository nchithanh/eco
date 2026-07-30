# Homepage

Entry: `app/page.tsx`.

## Section order → component

| # | Section | Component | Anchor / notes |
| --- | --- | --- | --- |
| — | Nav (+ announcement) | `Nav`, `AnnouncementBar` | |
| 1 | Hero | `Hero` | `#top` |
| 2 | Technology | `Technology` | |
| 3 | Capabilities | `Capabilities` | `#capabilities` |
| 4 | Outcomes | `SiteOutcomes` | |
| 5 | Deliverables | `WhatYouGet` | |
| 6 | Ops lifecycle | `OpsLifecycle` | `#ops` |
| 7 | Works | `WorksShowcase` | |
| 8 | Process | `Process` | `#process` |
| 9 | Handover | `TrustStrip` | |
| 10 | Tech stack | `TechStack` | `#stack` / `#technology` |
| 11 | Why us | `WhyKuct` | |
| 12 | Co-founder | `CoFounder` | `#cofounder` |
| 13 | Notes | `HomeNews` | |
| 14 | FAQ | `Faq` | |
| 15 | Contact | `ContactForm` | `#contact` |
| 16 | Footer | `Footer` | |

## Global overlays (not sections)

- `AiChatWidget` — floating assist / contact FABs
- `QuoteEstimatorModal` via `QuoteProvider` — reference quote wizard
- `CookieConsent`, `PagePreviewModal`, `DesignViewerModal` as wired in providers

## Copy source

Most homepage strings: `lib/i18n/dictionaries.ts` (+ `faq-copy.ts`, `news-copy.ts` for FAQ/news blurb).
