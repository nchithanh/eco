# Changelog

## 2026-08-13 (LP website-36-thang)

- `/website-36-thang/` — landing FB ads (VI): website DN + bảo hành kỹ thuật 36 tháng + tối đa 36 blog/3 tháng; form lead `website-36-thang` (cần Deploy lại Worker `dolphin-kick` để nhận source mới).
- Media: 5 ảnh section trong `public/website-36-thang/` (+ prompts `documentations/website-36-thang-image-prompts.md`).
- Announcement bar: quảng cáo ưu đãi này; text + CTA → `/website-36-thang/` (VI/EN/JA).
- Visual ads: hero pills 36/36, offer featured cards, form shell nổi, sticky CTA mobile (`.w36`).

## 2026-08-12 (gitignore workers)

- `.gitignore`: `/workers/` — Worker CF (demos-gate, leads, dolphin-chat) không còn track trong repo Pages; paste Deploy từ máy local.

## 2026-08-12 (demos-gate copy)

- Worker gate HTML: bỏ lead “Vault được bảo vệ trên Cloudflare…”. **Cần Deploy lại** Worker `demos-gate` trên CF.

## 2026-08-12 (restore capabilities/works slides)

- `#capabilities` / `#works`: trả lại carousel style trước center-focus strip (giữ demo gate đơn giản).

## 2026-08-12 (site grid + Pages CI)

- Khôi phục **nền caro** (ô lưới vuông `body::after`); Ask AI vẫn dùng dots.
- `next.config.ts`: chỉ `initOpenNextCloudflareForDev` khi `next dev` (không CI / `GITHUB_PAGES`) — tránh fail Deploy Pages.

## 2026-08-12 (OpenNext Cloudflare scaffold)

- Scaffold `@opennextjs/cloudflare` + `wrangler.jsonc` / `open-next.config.ts` / `public/_headers`; npm scripts `preview` / `deploy` / `upload`. Brand assets: `public/brand/logo1.png`, `logo1-white.png`, `logo-gold.png`. Pages deploy vẫn là path chính.

## 2026-08-12 (homepage carousels + demo gate)

- `#capabilities` / `#works`: center-focus strip carousel (peek sides, circular ←→ bottom-right).
- Demo vault gate: bỏ lead copy dưới form (`DemoGate` + `demos.css`).

## 2026-08-12 (careers · chỉ 2 job mở)

- `/careers/`: chỉ còn **Partner Automation Test** + **Business Development Partner** đang tuyển; đóng AI Engineer, Intern Fullstack, Fresher Tester, Backend (Marketing/FE/Mobile/Design đã đóng trước đó).

## 2026-08-12 (careers · Marketing closed)

- `/careers/`: đóng **Marketing / Growth** (`marketing` → `kind: "closed"`).

## 2026-08-12 (careers · Partner Automation Test)

- `/careers/`: mở vị trí **Partner Automation Test** (`partner-automation-test`) — kiểm thử AI agent trên Dolphin Intelligence; VI SoT + EN/JA; deep link `?job=partner-automation-test`; thù lao Partner · theo thỏa thuận.

## 2026-08-12 (homepage AiEdge → Intelligence)

- `#ai-edge`: section teaser **Dolphin Intelligence** (3 card Agent / Action·Logic / Human); CTA → `/dolphin-intelligence/` + `/ai-transform/`; schema `homepage/ai-edge.json` + homepage docs.

## 2026-08-12 (Ask AI · Dolphin Intelligence)

- `dolphin-chat` system context + `paste-for-dashboard.js`: thêm **Dolphin Intelligence** (AI workflow vs Care vs `/ai-transform/`); client `ai-chat-copy` / rich-text link `/dolphin-intelligence/`. Paste Deploy Worker trên CF.

## 2026-08-12 (Dolphin Intelligence)

- `/dolphin-intelligence/` — trang sản phẩm nền tảng AI workflow (Agent · Action · Logic · Human Checkpoint); copy VI SoT + EN/JA; demo canvas kiểu builder (Daily Content Engine, node IN/OUT, run highlight) theo prototype HTML; schema `public/schema/agents/dolphin-intelligence.json`; link Nav/Footer nhóm AI.

## 2026-08-11 (demo wedding-saler)

- `/demos/wedding-saler/` — port landing Saler Studio Wedding (HTML nguồn) vào vault: React + CSS scoped `.wsal`, catalog Wedding; ảnh Pexels (Canva Éternal set) trong `public/demos/wedding-saler/`.

## 2026-08-11 (leads rate limit 10/h)

- `dolphin-kick` Worker: rate limit **10 POST / IP / giờ** (harden rate key + D1 LIMIT check). Paste lại `workers/leads/worker.js` trên CF.

## 2026-08-11 (leads Worker D1)

- Form quote + careers: submit → CF Worker **`dolphin-kick`** (`https://dolphin-kick.nchithanh9999.workers.dev`) + D1 (không mailto). Client `lib/leads-api.ts`. Prompt scaffold: `workers/leads/CF-AI-PROMPT.md`.

## 2026-08-11 (quote drawer left)

- Quote estimator: centered modal → left drawer (Ask AI chrome: white shell, dot scroll, slide-in); logic/mailto unchanged.

## 2026-08-11 (layout width 7xl)

- Page shell desktop: `max-w-6xl` → `max-w-7xl` (Nav, Footer, homepage + service/news/about containers). Narrow reading widths (`max-w-3xl` FAQ/demos) unchanged.

## 2026-08-11 (landing + mobile service images)

- `/services/landing/`: regen hero + thêm what/conversion/process/industries; wire `LandingPageContent`.
- `/services/mobile/`: regen hero + thêm highlights/process/deliverables/audience; wire DetailBlock; **Best for** 2 cột + ảnh phải; FAQ section riêng canh giữa (accordion kiểu Landing).

## 2026-08-11 (demos-gate revision session)

- Demo vault: CF Worker **chỉ check mật khẩu**; phiên client gắn `COOKIE_CONSENT_REVISION` (sessionStorage) — push/bump → login lại. Cookie edge đơn giản; bỏ HMAC/`DEMOS_COOKIE_SECRET`.

## 2026-08-11 (demos-gate workers.dev default)

- Local `/demos` unlock gọi `https://dolphin-demos.nchithanh9999.workers.dev` (như chat); production vẫn same-origin `/demos/api/*` cho cookie edge.

## 2026-08-11 (demo english-teacher)

- `/demos/english-teacher/` — port landing giáo viên tiếng Anh 1-1 (HTML nguồn) vào vault: React + CSS scoped `.en11`, catalog Education; placeholder stats/reviews.

## 2026-08-11 (news: landing page giáo viên tiếng Anh)

- Bài `/news/landing-page-giao-vien-tieng-anh/` (VI/EN/JA): LP cho giáo viên tiếng Anh cá nhân vs Facebook-only; KW landing page giáo viên + neo *làm landing page*; ảnh cover + lead-scatter/structure/outcome; prompts `documentations/news-landing-page-giao-vien-tieng-anh-canva-prompts.md`.

## 2026-08-11 (nav Templates)

- Utility nav: **Templates** (trái News) + footer Updates → `/demos/` (vault gated); label `templatesNavLabel` (`templates-copy.ts`).

## 2026-08-11 (demos-gate Worker)

- Demo vault **option B**: Cloudflare Worker `workers/demos-gate/` chặn `/demos*` HTML khi chưa có cookie HMAC; unlock `POST /demos/api/unlock`; secrets `DEMOS_PASSWORD` / `DEMOS_COOKIE_SECRET`.
- Client: bỏ mật khẩu khỏi bundle (`lib/demos/catalog.ts`); `DemoGate` + `lib/demos/gate-api.ts` gọi Worker với `credentials`.

## 2026-08-11 (about-team-editorial)

- `/about/` team: editorial alternating portraits (`AboutTeamSection`) — no cards/pills; architectural grid; soft reveal + micro-parallax (`prefers-reduced-motion` off). Content unchanged.

## 2026-08-11 (about-team-nghia)

- `/about/` team grid: add **Hồ Quốc Nghĩa** (Business Development · **Japan Market**) + photo `public/about/team-nghia.png`; Person JSON-LD per member; schema `company.json` team.

## 2026-08-11 (founder-avatar)

- Replace founder photo `public/about/founder.png` (+ square `public/avatar.png`) with new portrait.

## 2026-08-11 (favicon-google)

- Favicon set for Google SERP: add 48×48 + 96×96 PNG, rebuild multi-size `favicon.ico`, expose `/icon.png` in `public/`, update `layout` icons + `site.webmanifest`.

## 2026-08-10 (brokerage demo LP)

- Demo `/demos/brokerage/` — LP marketing môi giới **Nguyễn Văn A Invest** (noindex): trust/products/platform/research/fees/security/open account; Market Flow CSS; disclaimer; strip “Demo bởi Dolphin Software”.
- Enrich mock UI: hardcode P&L danh mục, win/loss rate, lịch tư vấn 14:30, holdings/watchlist/alerts, biểu phí số; nhãn *Demo data*.
- Motion: parallax Market Flow + hero mock; scroll reveal section lớn (`Reveal`); section **Hiệu suất** chart P&L 12 tháng animate khi vào viewport (`prefers-reduced-motion` tắt).
- Palette SSI-inspired (đỏ `#c8102e` / trắng / xám); section lợi ích tham chiếu CTCK đầu ngành (vd. SSI) + strip Zalo/TikTok/Live/Facebook demo.
- Platform desktop panel: layout 2 cột (NAV/metrics/spark + holdings/lịch) — đỡ trống.

## 2026-08-10 (package pricing)

- Bảng giá `#popular-services`: Landing **1.500.000đ**; Business **4–10tr**; Shop **7–15tr**; Web App giữ **Từ 10tr**. `pricing-fx` hỗ trợ `nowMax`; sync schema landing.

## 2026-08-10 (chat fallback ví dụ)

- `matchAiChatReply` đọc transcript gần đây: “cho ví dụ” sau Care → ví dụ spa/shop; worker `system-context` + `paste-for-dashboard.js` bổ sung Care examples + follow-up rule (cần Deploy lại trên Cloudflare nếu muốn Worker live).

## 2026-08-10 (automotive demo LP)

- Demo `/demos/automotive/` — personal car sales experience (**Quân Auto Concierge** / Aether S7): Drive Flow, gallery, why scenes, variants, pricing, financing calculator, salesperson, trust, test-drive form, FAQ, mobile sticky bar; placeholder data + Unsplash; noindex.
- Parallax mạnh hơn: hero multi-layer + fade, Drive Flow ngang, gallery/scenes/final drift theo scroll (`prefers-reduced-motion` tắt).

## 2026-08-11 (demos vault gate)

- `/demos/` index + client gate (`DemoGate`) bọc `/demos/*` — noindex. (Superseded same day by **demos-gate Worker** edge gate — see entry above.)

## 2026-08-11 (news: landing page sales ô tô)

- Bài `/news/landing-page-sales-o-to-ca-nhan/` (VI/EN/JA): sales ô tô cá nhân vs Facebook-only; KW làm landing page; ảnh cover + lead/structure/outcome; prompts `documentations/news-landing-page-sales-o-to-ca-nhan-canva-prompts.md`.

## 2026-08-10 (news AI transformation)

- News: `chuyen-doi-ai-doanh-nghiep-lo-trinh-5-buoc` — lộ trình chuyển đổi AI 5 bước (VI/EN/JA); ảnh cover/silos (ChatGPT·Claude·Kimi)/roadmap/outcomes; links `/ai-transform/`, `/dolphin-care/`, `/#contact`.

## 2026-08-10 (technology ops AI)

- `#technology`: thay console/philosophy bằng **Giải pháp AI cho vận hành** (3 cards Agents/Automation/Integration + dual CTA `/ai-transform/`); bỏ dashboard mock; schema + copy VI/EN/JA.

## 2026-08-10 (careers share)

- Popup chi tiết job: nút **Share** (Web Share API / copy link); deep link `/careers/?job=<id>` mở lại popup.

## 2026-08-10 (careers BD)

- Sales → **Business Development Partner** (FB post); card overview + popup detail; hoa hồng **40% → 30%** (careers copy + announcement, VI/EN/JA).

## 2026-08-10 (mobile hero mock)

- `/services/mobile/` hero: `EmbedSiteMock variant="devices"` — **1 phone + 1 iPad**, trong cùng wireframe scroll như homepage/web (không browser desktop, không ảnh cứng).

## 2026-08-10 (anti-vibe site-wide)

- Áp Phase 0 design language lên **trang Nav** (+ `/works/[slug]/`): `kuct-glass` → `kuct-surface-card`; `.kuct-type-*` trên hero/section; bớt glow orb & shadow CTA nặng (services, Care, AI, about, careers, news, works).
- SoT: [homepage-anti-vibe-code.md](./homepage-anti-vibe-code.md) (site-wide in progress).

## 2026-08-10 (claude-handoff)

- Claude Code pack: `CLAUDE.md` project brief; `.claude/rules|agents|skills` mirrored from Cursor; `documentations/claude-handoff.md` + agent-ops dual-IDE table.

## 2026-08-10 (phase-4-motion)

- Phase 4 intentional motion: Contact static mascot; Technology no mouse tilt / quieter globe; `data-motion` + reduced-motion CSS; docs Done.

## 2026-08-10 (phase-3-signature)

- Phase 3: `lib/mascot.ts` context map; Ask AI welcome → chat mascot; Care/Tech surface polish; Technology glow toned down; Works cafe/clinic asset TODO documented.

## 2026-08-10 (phase-2-sprint-c)

- Sprint C rhythm: Why icon-line + promise; Outcomes lighter surface cards; Capabilities carousel back to Build·Modernize·Automate·Care (+ schema/docs).

## 2026-08-10 (phase-1-hero)

- Sprint B Hero signature: replace GlassPanels with `EmbedSiteMock` + eco mascot + floating metrics; hero tags badges; schema `hero.json` / overview sync. Plan status Phase 1 Done.

## 2026-08-10 (phase-0-tokens)

- Phase 0 / Sprint A anti-vibe-code: soft lavender tokens (`#6b56d6`), mist bg, charcoal text; type helpers `.kuct-type-*`; `.kuct-surface-card` / `.kuct-badge`. Docs: `homepage-anti-vibe-code.md` status, `conventions.md`, `homepage.md`.

## 2026-08-10 (docs)

- Added `documentations/homepage-anti-vibe-code.md` — plan thoát vibe-code (premium B2B, signature Hero, sprint A–E, checklist 15). Indexed in `README.md`.

## 2026-08-10 (ask-ai-drawer)

- Site chat: right-side **Ask AI** drawer (Cloudflare-style empty state: dolphin mascot, day greeting, suggestion cards). Trigger: banner **Ask AI** to the right of Apply now (`AnnouncementBar`). FAB dolphin + Nav Ask AI removed; contact FAB kept.

## 2026-08-08 (web-hero-mock)

- Extract `EmbedSiteMock` → `components/EmbedSiteMock.tsx` (Care how-section keeps chat overlay).
- `/services/web/` hero → browser + store wireframe only (`showChat={false}`), no Care chat — thay ảnh cứng.
- Web hero `animate`: auto mouse-scroll dọc qua 3 block wireframe (~7s/vòng, pause ngắn + scroll back); URL + scrollbar thumb; respects `prefers-reduced-motion`.

## 2026-08-08 (hero-wash)

- Canonical page-hero gradient `.kuct-hero-wash` (from Dolphin Care) applied site-wide: homepage Hero + Care / Software / AI Transform / Landing / About / Careers / service & detail heroes.

## 2026-08-08 (software)

- Reposition `/services/backend/` → umbrella **`/services/software/`** (“Phát triển phần mềm theo yêu cầu”). Schema `software.json`; catalog/index updated; legacy `/services/backend/` 301 redirect + noindex.
- Long-form page `SoftwareServiceContent` + section images under `public/services/software/`.
- Nav/Footer/homepage/about/popular-services/sitemap/internal links → `/services/software/`.

## 2026-08-08 (ai-transform)

- Additive upgrade `/ai-transform/`: sections **What We Build**, **Use Cases**, **Dolphin Builds With AI** (internal proof only — Overview/Content/Designer/Developer agents). Copy VI/EN/JA in `ai-transform-copy.ts`; schema `agents/ai-transform.json` adds `whatWeBuild`, `useCases`, `proof`. Meta/FAQ/process/route unchanged.
- Section images (Care-style): `public/services/ai-transform/{hero,compare,when,what-we-build,process,use-cases,proof}.jpg` wired via `SectionImage` in `AiTransformContent`.
- Regenerated AI Transform section images (violet `#7c3aed`, editorial B2B diagrams — workflow/friction/layers/process/use-cases/internal agents; no robot/neon).
- Brand assets champagne bronze (keep purple originals): `logo-dolphin-champagne.webp`, `dolphin-{chat,contact,eco}-champagne.webp` — Logo/SEO/chat widget/Hero/Contact/Care UI point to champagne.

## 2026-08-07 (ui)

- CTA primary (`.kuct-btn-primary`): filled tím + chữ trắng (bỏ outline); radius **10px**; `font-weight: 700`; padding ngang nhỏ hơn.
- Radius site: `@theme` map `rounded-sm`…`2xl` → **10px**; giữ `rounded-full` cho avatar/chấm tròn.
- Banner CTA **Ứng tuyển**: nền tím + chữ trắng (violet theme).
- Homepage **Outcomes** (`#stats`): layout 2 cột sticky trái + stack card phải (scroll hết card mới sang section sau); bullets + learn-more; schema `stats.json` sync.
- Homepage **How we help** (`#capabilities`): header badge + dashed + hub CTA; title\|support; carousel card giữa (ảnh + learn more), autoplay/pause; schema `capabilities.json` sync.
- Homepage **Fit** (`#fit`): chuyển ngay dưới Hero; layout header canh giữa + carousel 2 cột (copy \| ảnh); ảnh `public/fit/slide-0*.jpg` (AI generate).
- Buttons / CTA: `border-radius` thống nhất **10px** (CSS `button` + class CTA; `rounded-full` trên control → `rounded-[10px]`; giữ tròn avatar/dot/spinner).

## 2026-08-06 (landing)

- Page mới `/services/landing/` — SEO/AEO/GEO rewriter (VI + EN/JA): hero, when/why/include, bảng ngành & giá, quy trình 5 bước, FAQ 7 Q, JSON-LD; Nav + capabilities `landing` trỏ về đây; schema `services/landing.json`.
- Giá Landing theo locale qua `pricing-fx` (VI `1.000.000đ` / EN `$38` / JA `¥6,200`) — bảng giá + FAQ + schema VI.

## 2026-08-06 (about)

- Founder name: **Nguyễn Chí Thanh → Nguyễn Chí Thành** (about copy VI/EN/JA, schema `company.json`, test).

## 2026-08-06 (news)

- Bài news mới: `/news/dolphin-care-chatbot-ai-tang-chuyen-doi/` — Dolphin Care chatbot AI tăng chuyển đổi (VI/EN/JA, FAQ, internal link Care + bài insight); Canva prompts + hero placeholder.

## 2026-08-06 (careers)

- Sales/BD commission: **50% → 40%** trên mỗi deal (careers copy VI/EN/JA, announcement bar, careers test).

## 2026-08-05 (e)

- Nav desktop: layout 2 tầng kiểu commerce (utility Contact + ngôn ngữ trên; logo + GNB trái dưới); chữ GNB 16px/700, bỏ pill hover và border header; mobile giữ 1 hàng.
- Nav desktop: **bỏ dropdown** — hiện thẳng mọi link dịch vụ / AI / news / about / careers trên GNB; mobile vẫn accordion.
- Nav: `max-width: 90%`; GNB weight **600**; active = màu chữ accent.
- Nav: trả `max-w-7xl`; utility = Tin tức / Giới thiệu / Tuyển dụng / Liên hệ + locale; GNB chỉ dịch vụ + AI.
- Nav: `max-w-6xl px-6` khớp lề page (Hero/sections).
- Nav: utility + GNB cùng style chữ (size/weight/hover/active underline).
- Nav: chữ **14px** (`0.875rem`).
- Nav active: màu chữ tím (accent), không border-bottom; **homepage** → logo active; `#contact` → Liên hệ active.

## 2026-08-06 (chat)

- Dolphin Assist: prompt thêm **emoji + `**bold**` keyword** (cá nhân hóa); UI `renderChatRichText`; fallback `ai-chat-copy` VI/EN/JA; regenerate `paste-for-dashboard.js` (cần Deploy Worker).
- Chat: autolink `http(s)://` + path nội bộ (`/dolphin-care/`, `/services/…`, …) — click được trong bubble.

## 2026-08-06 (i18n)

- Sync **VI → EN/JA** toàn site (SoT VI): homepage overlays + popular/ai-edge/ui-gallery/faq; about/careers/quote/ai-chat/ai-transform/agent-dolphin/service-details; works/tech/detail-extras/more-details; dictionaries chrome (meta/nav/banner/whatYouGet…); news articles EN/JA mở rộng khớp cấu trúc VI. Tone EN clear / JA polite SMB.

## 2026-08-05 (d)

- `/dolphin-care/` VI SEO/AEO/GEO rewriter: meta + hero nhấn **báo cáo insight hằng ngày**; 4 lớp (LLM / business / customer / daily report); features 24/7 + Zalo/CRM + embed; bảng so sánh 5 tiêu chí; ngành phù hợp; quy trình 4 bước; FAQ 6 Q; EN/JA sync; schema `agents/dolphin-care.json` + knowledge + Worker Care context; homepage teaser align insight.

## 2026-08-05 (c)

- PageSpeed: bật `experimental.inlineCss` — inline CSS vào HTML, giảm render-blocking stylesheet chunks (~950 ms est.); Quicksand chỉ weight `400–700`; bump cookie `20260805f`.

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
