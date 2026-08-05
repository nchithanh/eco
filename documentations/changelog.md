# Changelog

## 2026-08-04

- Theme mặc định (`violet`): **dark → light** flat white; grid kẻ ô đen nhạt; **tím đậm** `#7c3aed`; **bỏ shadow tím** (chỉ shadow xám trung tính); header scroll hide; giảm radius; comment token dark cũ.
- Gỡ `SiteGridRuns` — bỏ line phát sáng chạy ngẫu nhiên trên nền grid; giữ lưới ô vuông tĩnh `body::after`.
- Homepage `#news` carousel: desktop click card mở popup (mouse không hijack drag pointer).
- `/news/` layout Canva **pageNew** (page 2): eyebrow + title/blurb trái, filter pills phải; featured ngang; grid 3 cột; i18n `pageEyebrow`, `featuredLabel`.
- `/news/[slug]/` hero split: category/date + title + excerpt trái, ảnh chính phải (lg+); popup `Reveal immediate` để body hiện đủ.

## 2026-08-06

- News: bài SEO/GEO **「Website giới thiệu xe: Showroom cần gì…」** — slug `website-gioi-thieu-xe-showroom`; VI SoT nguyên văn; FAQ 5 Q; hero + 2 inline images; Canva prompts `documentations/news-website-gioi-thieu-xe-showroom-canva-prompts.md`; sitemap entry.

## 2026-08-07

- News SEO/GEO: **「Dolphin Care: Không Chỉ Chatbot AI — Còn Báo Cáo Insight Hằng Ngày」** — slug `dolphin-care-bao-cao-insight-hang-ngay`; VI SoT từ content pack; FAQ 6 Q; hero + 3 inline images; Canva prompts `documentations/news-dolphin-care-bao-cao-insight-hang-ngay-canva-prompts.md`; sitemap entry.

## 2026-08-05 (b)

- Detail links (services, tech, works, capabilities, sites shipped): click **redirect** trang detail thay vì mở `PagePreviewModal` popup; `PagePreviewProvider` dùng `location.assign`.

- AI chat: client gọi Cloudflare Worker Free `dolphin-chat` (`lib/chat-api.ts`); source `workers/dolphin-chat/` + **system-context** đầy đủ (company/services/Care/AI + personality/consultant voice); secret `GROQ_API_KEY` trên dashboard; fallback keyword `matchAiChatReply` nếu Worker lỗi.
- `AiChatWidget`: reply assistant **typewriter** (chữ chạy ra); `prefers-reduced-motion` → hiện full ngay.
- `AiChatWidget`: `data-lenis-prevent` / `data-lenis-prevent-wheel` trên panel + list — wheel cuộn trong popup (không bị Lenis bắt).
- Desktop: **Lenis** smooth wheel scroll (`SmoothScroll`, `lg+` only; off khi `prefers-reduced-motion`).
- News: click bài trên homepage + `/news/` **redirect** `/news/[slug]/` (không mở popup preview).
- News detail: body + FAQ `Reveal immediate` (tránh content opacity 0); lead `overflow-visible`.
- News detail: nút **Chia sẻ Facebook** + **Sao chép liên kết** dưới excerpt (`NewsDetailView` + i18n `getNewsDetailUi`).
- Cookie consent: versioned keys via `COOKIE_CONSENT_REVISION` in `lib/cookie-consent.ts`; rule `.cursor/rules/cookie-consent-bump.mdc` — bump mỗi commit/push/build để popup hiện lại trên thiết bị cũ.
- Mở **animation mọi thiết bị** (CSS float/fade/reveal/title + JS Reveal/IO + chat demos + NeuralSphere); chỉ tắt khi `prefers-reduced-motion`. Hover transform vẫn off dưới `lg`.
- Hero: **parallax** nhẹ (`lib/use-parallax-scroll.ts`) trên glow / glass / mascot; copy + CTA đứng yên.
- `AiChatWidget`: FAB dolphin luôn **bo tròn** (kiểu Samsung); nút **X** góc launcher ẩn chat trong phiên (toast + panel + avatar), giữ contact FAB; refresh hiện lại.
- News: bài SEO/GEO **「Studio cưới cần website xem váy online」** — slug `studio-cuoi-website-xem-vay-online`; VI SoT nguyên văn từ content pack; body blocks thêm `h3` + inline `image`; FAQ 5 Q; hero `public/news/studio-cuoi-website-xem-vay-online.jpg` + catalog inline `studio-cuoi-catalog-vay-online.jpg`; sitemap entry.
- Homepage `#news` carousel: slide animation on prev/next/dot; **drag/swipe ngang** (pointer + touch, `touch-action: pan-y`); chặn click card sau swipe.
- Rule **`.cursor/rules/seo-geo-html.mdc`** (always on): semantic HTML cho SEO/GEO — headings, `article`, `alt`, landmarks, carousel a11y; news UI aligned.

## 2026-08-04

- News: bài SEO/GEO đầu tiên **「5 dấu hiệu website doanh nghiệp đang làm mất khách」** — slug `5-dau-hieu-website-lam-mat-khach`; body blocks (lead/H2/p), FAQ accordion, Article + FAQPage JSON-LD; hero `public/news/5-dau-hieu-website-lam-mat-khach.jpg`; internal links `/services/web/`, `/dolphin-care/`, `/#contact`; VI SoT + EN/JA; sitemap entry.
- Homepage: `HomeNews` carousel layout (Canva page 4) — eyebrow + title + View full; card slider glow center; dots/arrows.

## 2026-08-03

- `/services/backend/` VI SEO/AEO/GEO rewriter (Jasper): meta “Phát Triển Backend & Tích Hợp Hệ Thống”; intro snippet-ready; section leads; use cases cụ thể; FAQ 6 Q (+ VN payments → `/services/integrations/`, timeline 2–4 tuần); bake VI meta + Service/FAQ JSON-LD; EN/JA sync; schema `public/schema/services/backend.json`.
- Nav/footer: remove UI/UX (`/services/design/`) from menus; route kept.
- `#popular-services` mobile: 2×2 package tabs, tighter padding, hide “Bao gồm” on xs, full-width CTA; desktop keeps horizontal tabs + 50/50 split.
- `#popular-services`: **50/50 split** — left intro (eyebrow/title/support + Zalo); right top horizontal package tabs; right body includes + CTA.
- `#popular-services`: split layout — **left** numbered includes; **right top** package radiogroup + Zalo; **right bottom** price + CTA.
- `#popular-services`: AAAWeb-style **left/right split** — left package list + Zalo consult; right numbered includes + commitments + CTA; chrome strings `includedLabel` / `commitments` / etc. in `popular-services-copy`.
- `#popular-services` (`PopularServices`): comparison table → **click-select** package options + detail panel (default featured); prices still on each option for FX.
- Site background grid: purple run-lines via `SiteGridRuns` on `body::after` square grid (not AgentLoader); respects `prefers-reduced-motion`.
- Root layout boot scripts (theme + locale): `BootScripts` + `useServerInsertedHTML` — inject outside React tree (fixes React 19 script-tag dev warning); replaces `next/script` / raw `<script>` in layout.
- i18n boot: `DEFAULT_LOCALE` `ja` → `en`; locale boot script fallback `en`; `AgentLoader` copy always EN (no JA flash on load); `LocaleProvider` first render always `DEFAULT_LOCALE` (hydration-safe), resolve in `useEffect`.
- Desktop title text motion: `Reveal` `variant="title"` (rise + soft blur) on homepage/key page H1–H2; hero uses LCP-safe `kuct-title-enter` (no opacity hide); gated `lg+` + `prefers-reduced-motion`.
- **Removed Custom Agent product:** deleted `CustomAgentContent` / `custom-agent-copy` / schema JSON; `/custom-agent/` + `/services/custom-agent/` redirect → `/ai-transform/`; nav/footer/AiEdge/sitemap retargeted; agent = building block inside AI Transform roadmap only.
- Careers FAQ (`#careers-faq`): accordion dropdown (open first item) — same pattern as Dolphin Care / AI Transform.
- About FAQ (`#about-faq`): same accordion pattern.
- `/ai-transform/` VI SEO/AEO/GEO rewriter (Jasper): meta “Lộ Trình Triển Khai AI”; seats vs lộ trình; process 5 bước; Custom AI Agent building block; ROI framework + AI governance; FAQ 6 Q (+ Care, chi phí; links `/dolphin-care/`, `/about/`); EN/JA sync; schema `agents/ai-transform.json`.
- i18n: sync VI SoT → EN/JA for homepage overlays (`homepage_lang_en`/`_ja`), FAQ 13 Q + package timelines, About SEO copy, Dolphin Care page/home, web & mobile service details + FAQ extras. Schema JSON remains VI-only; homepage `<title>` bake still VI for crawlers.
- Desktop motion amp (CSS only): stronger Reveal travel/duration, Hero panel side float + mascot bob; Hero copy no entrance fade (LCP/SEO-safe); still gated below `lg` + `prefers-reduced-motion`.
- `/careers/` VI SEO/AEO/GEO rewriter (Jasper): meta “tuyển dụng freelance IT”; mô hình freelance; roles open/closed tách block; how-to-apply; FAQ 6 Q (+ `/services/web/`, `/about/`); bake VI meta; FAQPage + JobPosting JSON-LD.
- `/about/` VI SEO/AEO/GEO rewriter (Jasper): meta “Dolphin Software là gì? / công ty thiết kế web”; entity-led sections; founder Nguyễn Chí Thanh 7+ năm; FAQ 6 Q; FAQPage + Person JSON-LD; internal links; schema `company.json` founder + about FAQ.
- `/dolphin-care/` VI SEO/AEO/GEO rewriter (Jasper): meta keyword “AI chăm sóc khách hàng trên website”; hero/compare/pillars/how entity-led; FAQ 6 Q (+ Zalo, báo giá; internal links `/custom-agent/`, `/services/web/`); schema `public/schema/agents/dolphin-care.json`.
- `/services/mobile/` VI SEO/AEO/GEO rewriter (Jasper): meta/H1/intro entity-led; section leads; FAQ 6 Q (Flutter vs RN, store, timeline 8–14 tuần, chi phí, hỗ trợ sau BG, AI + internal links); use cases vấn đề→phạm vi→kết quả; bake VI meta/JSON-LD; schema `public/schema/services/mobile.json`.
- `/services/web/` VI SEO/AEO/GEO rewriter (Jasper): meta/H1/intro entity-led; section leads; FAQ 7 Q (timeline khớp gói 3–5 ngày / 7–14 ngày / 3–4 tuần); pricing footer “không bán thừa, không phí ẩn”; schema `public/schema/services/web.json` + homepage works 6 cases.
- i18n: drop `de` and `zh` locales — product supports **vi / en / ja** only; `DEFAULT_LOCALE` stays `ja`; pricing FX VND/USD/JPY; LanguageSwitcher, SEO alternates, boot script updated.

## 2026-08-02

- Homepage SEO/AEO/GEO rewriter: merge Part1+Part2 → `public/schema/homepage/*`; map VI UI copy; Fit matrix; homepage meta VI + WebPage/FAQPage JSON-LD; FAQ timeline khớp Solutions (3–5 ngày).
- Homepage VI rewrite (full section copy): hero→contact; Technology = AI Philosophy + principles; FAQ 13 Q; Care/home + contact afterSubmit; schema `/schema/homepage/*` synced.
- Schema homepage: `/schema/homepage/` list + `/schema/homepage/[slug]/` JSON (VI SoT); sync rule updated.
- Agent rule: `schema-json-sync.mdc` — khi chỉnh content/product truth, cập nhật `public/schema/` liên quan trong cùng task.
- Schema tree: `/schema/` (list index) → `/schema/company/`, `/schema/services/[slug]/`, `/schema/agents/[slug]/` (+ raw JSON under `public/schema/`); `/company_value/` redirects to company overview.
- Agent rule: `reply-vietnamese.mdc` — chat replies always Vietnamese (product copy still follows locale).
- Homepage story reorder: Hero → Outcomes → Why → How we help → Projects → Care → Ops AI → Process → Fit → Solutions → FAQ → CTA. VI chrome renames + `FitSection` + contact “Có bài toán?”; Solutions moved near end.
- Brand chrome eyebrows (VI homepage): keep English — `Outcomes`, `How we help`, `Why Dolphin`, `Projects`, `Ops AI`, `Fit`, `Solutions` (BrandText / display name always EN).
- Dolphin Care `#dolphin-care` (VI): pain heading Option 1; outcome benefits; situations + industries; pipeline “không phải chatbot”; CTA demo.
- Featured projects `#works` (VI): Option 1 heading; case titles/problem/scope/result + Before→After + industry chips; CTA “bài toán tương tự”.
- Why Dolphin `#why` (VI): operating principles eyebrow; 6 cards (không vội code → đơn giản → modernize → cam kết → AI đúng chỗ → đồng hành).
- What we do `#capabilities` (VI): Option A heading, owner-voice cards + “khi nào dùng”, industry tags → `#works`, CTA tư vấn / `#process`.
- Stats `#stats` (VI): keep “chạy được việc thật”; support + `painLead` + 6 outcome cards (owner voice) in `homepage_lang_vi`.
- Revert homepage VI UX-writer rewrite — restore prior `homepage_lang_vi` (schema order unchanged).
- Homepage schema reorder: Hero → Stats → What we do → Why → Solutions → Projects → Care → AI Transform → Process → FAQ → CTA. Dropped from home: stack/ops/handover/news/cofounder/what-you-get. VI copy via `homepage_lang_vi.ts` (+ merge in `homepage_lang.ts`); other langs TODO.
- Hero copy: “Đừng để công nghệ thành gánh nặng…” + Build/Modernize/AI đúng chỗ (5 locales); hide empty `aiPill`; widen H1 measure.
- Knowledge SoT upgrade: `company.md`, `company-opinion.md`, `company-values.md`; rewrite `services` / pains / Care / AI; positioning **Build · Modernize · Automate · Care**; `knowledge/README.md` index; brand-voice + agent-ops wired.
- Content Agent pack: rules `content-*`, `.cursor/knowledge/`, `examples/`, `prompts/` (blog/social/pipeline).
- Agents router: `.cursor/agents/` (content, seo, frontend, reviewer, tester, devops).
- Agent ops setup: `dolphin-core` + modes `news` / `social`; skills `lang` / `seo`; docs `agent-ops`, `brand-voice`, `geo-japan`, `social-playbook`. `documentations/` = canonical full context.

## 2026-08-01

- Homepage `#dolphin-care`: align container to main page gutters (`max-w-6xl px-6`) like Hero/Capabilities.
- Homepage `#dolphin-care`: full-width to page edges (`max-w-none`, light `px-4`/`lg:px-6`) — left/right flush, not narrowed.
- Homepage `#dolphin-care`: narrower again (`max-w-4xl` + `px-8`/`lg:px-12`) for clearer margin from page edges.
- Homepage `#dolphin-care`: narrower container (`max-w-5xl` + more horizontal padding) for more side breathing room.
- Careers: close Mobile (+ Design already closed); open **Marketing / Growth** (`marketing`) — content SEO + social traffic; 5 locales.
- Homepage `#news`: secondary column 4 compact cards (no excerpt) to reduce empty space next to featured.
- Homepage `#news` redesign: editorial layout — 1 featured article (image + excerpt + read CTA) + 3 secondary compact cards; reading time via `estimateNewsReadMinutes`; removed homepage pagination.
- Homepage `#dolphin-care`: 2-column layout (content left, one longer spa booking chat card right); typewriter on desktop; dual CTA kept.- Homepage `#capabilities` redesign: premium offer cards (icon + title + body + meta) + secondary service tags + CTA group; removed filter chips, image carousel, pagination. Copy web-intro oriented (5 locales).
- Homepage story order: Hero (overview) → Capabilities (website intro) → Dolphin Care (agent intro) → descriptive sections (packages → works → outcomes → process → deliverables → handover → stack → Technology → AI edge → ops) → trust/contact.
- Hero copy: warmer benefit tone + AI as ops efficiency; new `subhead`; secondary CTA → `#capabilities` (5 locales).
- Homepage: remove soft violet hairline borders between `main > section`s.
- Homepage `#dolphin-care`: intro on top + 3 context chat cards (shop / spa / cafe); typewriter on middle card (desktop).
- Homepage: hide `#capabilities` (`Capabilities` commented out); hero secondary CTA → `#popular-services`.
- Homepage `#technology`: swap columns — dashboard left, copy/CTA right.

## 2026-07-31

- Dolphin Care OG banner: `public/og-dolphin-care.png` + VI `og:title`/`og:image` on `/dolphin-care/`.
- Dolphin Care route: `/dolphin-care/` (legacy `/agent-dolphin/` noindex + client redirect).
- Rename product display **Agent Dolphin → Dolphin Care** (nav, copy, meta, docs).
- Nav: **Dịch vụ** dropdown (thiết kế website, landing, app, backend, UI/UX); removed Process/Tech; `/services/web/` adds pricing table + Sites shipped; cofounder role → **Nhà sáng lập** / Founder.
- **Web SEO landing:** `/services/web/` — VI meta title/description, expanded FAQ + Service/FAQ JSON-LD; nav/footer **Làm website** → `/services/web/` (was only `#capabilities`); CTA “Xem gói giá” → `#popular-services`.
- SEO keyword sheet: `seo-keywords.md` (P1 web / P2 ngành / P3 AI, ~55 cụm + gợi ý bài 4 tuần); linked from growth §4 & §12 B (keyword sheet done).
- Growth plan checklist followable: `growth-reach-users.md` §12 (A→G) — web-first; GSC/CF done; next = Zalo/FB posts + 1 bài `/news/`.
- **SEO (P0/P1):** `public/robots.txt` + `public/sitemap.xml` (69 URLs); per-route metadata + correct canonicals; `public/og-default.png`; JSON-LD Organization/WebSite (+ Service/FAQ on agent pages); `/services/custom-agent/` noindex → prefer `/custom-agent/`. Helpers in `lib/seo.ts`.
- Detail pages: add desktop-only Reveal scroll motion (custom-agent, ai-transform, works/tech/more/news details, careers).
- `/agent-dolphin` how-section: `embed.jpg` → CSS browser + chat widget mock (`EmbedSiteMock`); copy `embedMock` in `agent-dolphin-copy.ts`.
- `/agent-dolphin` hero: 2-column layout (copy left, 3 toast chat cards + typewriter right); typewriter/`Reveal` desktop-only (`lg` / `useDesktopMotion`); copy `heroCards` in `agent-dolphin-copy.ts`.
- Homepage `#agent-dolphin` chat-style teaser (`AgentDolphinHome`) under Hero — chat demo typewriter desktop-only → `/agent-dolphin/`.
- **Dolphin Care** service page `/agent-dolphin/` — nav/footer under AI Agent; copy `agent-dolphin-copy.ts` (5 locales); Canva images under `public/services/agent-dolphin/` + `capabilities/agent-dolphin.jpg`; prompts in `agent-dolphin-canva-prompts.md`.
- **Perf (assets):** mascot/logo → WebP (eco ~58KB, chat ~14KB, logo ~14KB); contact panel uses contact mascot WebP. Fonts: Quicksand preloads only; Noto JP + Instrument Serif `preload: false`, JP weights cut to 400/700.
- Documented optional **Cloudflare Free** proxy in front of GitHub Pages (DNS, SSL Full, cache rules, purge) in `architecture.md` / `overview.md`.
- Mobile chat input uses `text-base` (≥16px) to prevent iOS/Android focus zoom when the keyboard opens.
- **Fix mobile scroll:** AgentLoader no longer sets `kuct-loading` / overflow lock; mobile `touch-action: pan-y` on html/body; PopularServices table allows vertical pan.
- Hero mobile scroll: `overflow-hidden` → `overflow-x-clip` + `touch-pan-y` so swipes on description scroll the page.
- Mobile nav: language switcher always visible in header next to hamburger (removed duplicate from drawer).
- Replaced favicon set from `favicon_io` pack: `app/favicon.ico` + `public/` (ico / 16 / 32, apple-touch, android-chrome 192/512), `app/icon.png`, `site.webmanifest` (Dolphin Software).

## 2026-07-30

- **Fix mobile scroll:** nested-safe `lib/scroll-lock.ts` for loader/modals/chat — stops stuck `overflow: hidden` / `kuct-loading` after unlock races.
- **Custom domain:** `dolphin-software.io.vn` on GitHub Pages; removed `/eco` `basePath`; `public/CNAME`; site URL / metadata → custom domain.
- Restored homepage `Technology` globe section (`#technology`) immediately after Hero.
- **Brand rename:** display name **Dolphin Software** (was Dolphin Kick) — `Logo`, `BrandName`, metadata, i18n copy (5 locales).
- Updated homepage section separators to soft violet top/bottom hairlines for clearer visual grouping.
- Removed `UiGallery` showcase from homepage (component kept in repo).
- Reverted homepage `HomeNews` to paginated 6-item grid (see-more tile removed).
- **Homepage section order (UX):** web block first (Hero → Capabilities → packages → works → outcomes → process → deliverables → ops → handover → stack), then `AiEdge`, then trust/contact.
- **Homepage rebalance (web-first):** removed `Technology` from homepage; new `AiEdge` (`#ai-edge`) with 3 practical AI cards + links to `/ai-transform` and `/custom-agent`. Hero copy web-first with `aiPill`, centered Web & App glass panel, secondary CTA → `#capabilities`. Nav/footer stack link → `#stack`. Copy: `lib/i18n/ai-edge-copy.ts`, hero updates in `dictionaries.ts`.
- **Fix:** `routePath()` for Next.js `<Link>` — prevents double `/eco/eco/` on GitHub Pages (`AiEdge`, `Capabilities`, `NewsDetailView`).
- Added homepage **UI gallery** (`UiGallery`, `#ui-gallery`): filterable showcase of 20 layout previews (R2 images), chips + card grid + CTAs; copy in `lib/i18n/ui-gallery-copy.ts`.
- Added homepage **Popular services** section (`PopularServices`, `#popular-services`): 4-package comparison table (Landing **1.000.000đ** price-focused, Business recommended, Shop, Web App); locale FX via `lib/pricing-fx.ts` (VND base → USD/EUR/JPY/CNY, ref. 2026-07-30); quote modal estimate + project-type hints use same FX; Zalo footer CTA.
- Fixed mobile scroll: moved/disabled `body::before` noise overlay (was `z-50` above content); hardened `AgentLoader` unlock so `kuct-loading` / `touch-action: none` cannot stick.
- Polished sticky header/nav: denser glass bar, clearer link hover/active, AI dropdown, stronger Contact CTA; dark LanguageSwitcher.
- Polished service detail pages (`ServiceDetailView`): 2-col hero with primary quote CTA, indexed cards, Best for / FAQ blocks, closing CTA strip.
- Fixed browser tab: metadata title **Dolphin Software** (was KU THANH); added `public/favicon.ico` + refreshed `app/icon.png` from brand logo.
- Regenerated browser tab favicon `app/icon.png` from `public/brand/logo-dolphin.png` (512×512).
- Created `documentations/` tree + rule `.cursor/rules/update-documentations.mdc`.
- Documented current architecture: Dolphin Software brand, homepage section map, routes, i18n modules, Pages deploy `/eco`.
- Noted mobile/tablet motion kill-switch (`max-width: 1023px`) in `globals.css`.
- Brand display name standardized to **Dolphin Software** (legacy `Dolphin Kich` still accepted by `BrandText`).
