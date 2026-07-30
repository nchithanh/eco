# Overview

## Product

**Dolphin Kick** — marketing site for a web / mobile / AI studio (also referenced as **KU THANH** in some SEO metadata).

- Package name: `dolphin-kick`
- Repo: `nchithanh/eco`
- Live (GitHub Pages): https://nchithanh.github.io/eco/
- Local: `npm run dev` → http://localhost:3000

## Brand

- Display name: `BRAND_DISPLAY_NAME = "Dolphin Kick"` in `components/Logo.tsx`
- Logo asset: `public/brand/logo-dolphin.png`
- Favicon / tab icon: `app/icon.png` (generated from the brand logo; Next.js App Router file convention)
- Inline brand replacement: `BrandText` / `hasBrand` in `components/BrandName.tsx` (also recognizes legacy `Dolphin Kich`, `KU THANH`)
- Accent titles: `AccentText` with `[[keyword]]` markers in dictionary strings

## Deploy

- Workflow: `.github/workflows/deploy-pages.yml`
- Trigger: push to `main` (or `workflow_dispatch`)
- Build: `GITHUB_PAGES=true npm run build` → artifact `out/`
- When Pages: `basePath` / `assetPrefix` = `/eco`, `trailingSlash: true`
- Assets: always use `assetPath()` / `BASE_PATH` from `lib/asset.ts`
- GitHub push identity: user `nchithanh` + key `~/.ssh/id_ed25519` (see `.cursor/rules/github-nchithanh.mdc`)
