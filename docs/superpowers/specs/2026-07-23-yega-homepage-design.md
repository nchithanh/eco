# YeGa Homepage Design

**Date:** 2026-07-23  
**Status:** Approved in conversation — pending user review of this file  
**Brand:** YeGa  
**Positioning:** Web & mobile app studio (primary). Architecture support and stock community are secondary.

## Goal

Ship a single Vietnamese marketing homepage that presents YeGa as a professional product studio, converts visitors to project inquiries, and lightly surfaces secondary services without competing with the core offer.

## Scope

**In scope**
- One-page Home (`/`)
- Sections: Nav, Hero, Capabilities, Process, Secondary services, Contact CTA, Footer
- Responsive layout (desktop + mobile)
- Light motion (2–3 intentional effects)
- Contact form UI (client-side; mailto or placeholder submit until backend exists)

**Out of scope (this iteration)**
- Separate pages for each service
- Auth, CMS, blog
- Real case-study CMS / portfolio gallery
- Stock ID tracking backend
- Multi-language (EN)

## Positioning & copy (VI)

**One-liner:** YeGa là studio làm website & mobile app — từ landing đơn giản đến hệ thống phức tạp.

**Hero**
- Brand: **YeGa** (hero-level signal)
- Headline: *Xây web & app — từ MVP đến sản phẩm thật.*
- Support: Đội ngũ 7+ năm kinh nghiệm — thiết kế, xây dựng và bàn giao end-to-end.
- Primary CTA: **Nhận báo giá** → scroll/focus `#contact`
- Secondary CTA: **Xem năng lực** → `#capabilities`

**Nav:** YeGa · Năng lực · Quy trình · Dịch vụ · Liên hệ

## Visual direction

| Token | Value |
|-------|--------|
| Background base | `#0B1220` (than) |
| Surface / elevated | slightly lighter navy |
| Accent (single) | Teal `#2DD4BF` |
| Text primary | near-white |
| Text muted | slate-ish gray |
| Atmosphere | Dark-to-navy gradient + subtle technical grid texture (full-bleed, not inset cards) |
| Display font | Syne |
| Body font | DM Sans |
| Avoid | Purple gradients, cream+terracotta, Inter/Roboto defaults, pill clusters, stat strips, floating badges on hero, heavy cards in hero |

**Motion**
1. Brand / hero text fade-in on load
2. CTA hover underline or accent shift
3. Slow grid drift in hero background

## Page sections

### 1. Nav
Minimal sticky or static top bar: wordmark YeGa + section anchors. No mega-menu.

### 2. Hero (first viewport)
One composition only:
- YeGa brand
- One headline
- One support sentence
- CTA group (primary + secondary)
- Full-bleed atmosphere (gradient + grid)

No cards, badges, stats, or secondary marketing blocks in the first viewport.

### 3. Capabilities (`#capabilities`)
- Headline: *Năng lực chính*
- One support sentence about full-cycle delivery
- Four capability groups (light layout: typography + thin line icons, not heavy cards):
  1. Website — landing, corporate, CMS
  2. Mobile app — iOS / Android (cross-platform as needed)
  3. Backend & tích hợp — API, auth, payment, third-party
  4. UI/UX & bàn giao — design system, docs, training

### 4. Process
- Headline: *Quy trình gọn*
- Four steps (row on desktop, stack on mobile):
  1. Discovery — hiểu bài toán & phạm vi
  2. Estimate — báo giá + milestone
  3. Build — sprint, demo định kỳ
  4. Handover — UAT, deploy, chuyển giao

### 5. Secondary services (`#services`)
- Headline: *Thêm từ YeGa*
- Support: phụ trợ khi đã tin đội ngũ — không phải core.
- Two items with divider (not hero cards):
  1. **Kiến trúc & hỗ trợ hệ thống** — audit, khắc phục, hỗ trợ remote khi hệ thống đang gặp vấn đề. Text link toward contact.
  2. **Cộng đồng đầu tư CK** — hỗ trợ gắn ID; miễn phí theo điều kiện. Short disclaimer: không phải tư vấn đầu tư có giấy phép / không cam kết lợi nhuận.
- No large competing CTAs.

### 6. Contact (`#contact`)
- Headline: *Bắt đầu dự án với YeGa*
- Form fields: Tên · Email hoặc Zalo · Mô tả ngắn dự án · Submit **Gửi yêu cầu**
- Until backend exists: `mailto:` or client-side success message + console/log placeholder
- Optional plain contact lines (Telegram / Zalo / Email) if provided later

### 7. Footer
- YeGa · © 2026
- Compact anchors
- One-line stock disclaimer repeat
- No fake social icon rows

## Technical approach

- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS
- **Forms:** react-hook-form (+ zod if validation added)
- **i18n:** Hardcoded Vietnamese for v1 (structure ready to extract later)
- **Deploy target:** Vercel-friendly static/SSR landing
- **Architecture:** Single page component composition under `app/page.tsx` with section components in `components/` (e.g. `Hero`, `Capabilities`, `Process`, `SecondaryServices`, `Contact`, `Footer`, `Nav`)

## Success criteria

- First viewport reads as one branded composition; removing nav still clearly says YeGa
- Primary message is web/app studio; secondary services are visibly subordinate
- Mobile and desktop both usable; CTAs reach `#contact`
- No placeholder lorem; all copy is intentional Vietnamese
- Lighthouse-friendly: no huge unused deps; fonts loaded cleanly

## Open points (non-blocking for Home v1)

- Exact Zalo / Telegram / email addresses
- Real project case studies (add later section when available)
- Legal review of stock disclaimer wording
