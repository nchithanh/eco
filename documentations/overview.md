# Overview

## Product

**Dolphin Software** — marketing site for a web / mobile / AI studio (legacy aliases: Dolphin Kick, KU THANH in `BrandText`).

- Package name: `dolphin-kick`
- Repo: `nchithanh/eco`
- Live: https://dolphin-software.io.vn/ (GitHub Pages + custom domain)
- Legacy path URL redirects: https://nchithanh.github.io/eco/ → custom domain
- Local: `npm run dev` → http://localhost:3000

## Brand

- Display name: `BRAND_DISPLAY_NAME = "Dolphin Software"` in `components/Logo.tsx`
- Logo asset: `public/brand/logo-dolphin.png`
- Favicon / tab icon: `app/icon.png` (from brand logo) + `public/favicon.ico`
- Document title / OG: **Dolphin Software** (`app/layout.tsx` metadata)
- Inline brand replacement: `BrandText` / `hasBrand` in `components/BrandName.tsx` (also recognizes legacy `Dolphin Kich`, `KU THANH`)
- Accent titles: `AccentText` with `[[keyword]]` markers in dictionary strings

## Deploy

- Workflow: `.github/workflows/deploy-pages.yml`
- Trigger: push to `main` (or `workflow_dispatch`)
- Build: `GITHUB_PAGES=true npm run build` → artifact `out/`
- When Pages: `output: "export"`, `trailingSlash: true`, **no** `basePath` (custom domain at `/`)
- `public/CNAME` → `dolphin-software.io.vn`
- Assets: use `assetPath()` / `BASE_PATH` from `lib/asset.ts` (empty on Pages)
- GitHub push identity: user `nchithanh` + key `~/.ssh/id_ed25519` (see `.cursor/rules/github-nchithanh.mdc`)
