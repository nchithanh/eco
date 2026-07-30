# Changelog

## 2026-07-30

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
- Fixed browser tab: metadata title **Dolphin Kick** (was KU THANH); added `public/favicon.ico` + refreshed `app/icon.png` from brand logo.
- Regenerated browser tab favicon `app/icon.png` from `public/brand/logo-dolphin.png` (512×512).
- Created `documentations/` tree + rule `.cursor/rules/update-documentations.mdc`.
- Documented current architecture: Dolphin Kick brand, homepage section map, routes, i18n modules, Pages deploy `/eco`.
- Noted mobile/tablet motion kill-switch (`max-width: 1023px`) in `globals.css`.
- Brand display name standardized to **Dolphin Kick** (legacy `Dolphin Kich` still accepted by `BrandText`).
