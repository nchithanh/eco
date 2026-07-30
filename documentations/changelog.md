# Changelog

## 2026-07-30

- Fixed mobile scroll: moved/disabled `body::before` noise overlay (was `z-50` above content); hardened `AgentLoader` unlock so `kuct-loading` / `touch-action: none` cannot stick.
- Polished sticky header/nav: denser glass bar, clearer link hover/active, AI dropdown, stronger Contact CTA; dark LanguageSwitcher.
- Polished service detail pages (`ServiceDetailView`): 2-col hero with primary quote CTA, indexed cards, Best for / FAQ blocks, closing CTA strip.
- Fixed browser tab: metadata title **Dolphin Kick** (was KU THANH); added `public/favicon.ico` + refreshed `app/icon.png` from brand logo.
- Regenerated browser tab favicon `app/icon.png` from `public/brand/logo-dolphin.png` (512×512).
- Created `documentations/` tree + rule `.cursor/rules/update-documentations.mdc`.
- Documented current architecture: Dolphin Kick brand, homepage section map, routes, i18n modules, Pages deploy `/eco`.
- Noted mobile/tablet motion kill-switch (`max-width: 1023px`) in `globals.css`.
- Brand display name standardized to **Dolphin Kick** (legacy `Dolphin Kich` still accepted by `BrandText`).
