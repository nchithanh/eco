---
description: Dolphin Software core — brand, ICP, docs as canonical context; always on for this repo.
---

# Dolphin core

## Canonical context

1. **Company knowledge (SoT for brand/copy):** `.cursor/knowledge/` — start `README.md` / `company.md` (+ opinion, values, pains, services).  
2. **Product/engineering docs:** `documentations/` — routes, homepage, deploy, SEO sheets.

Prefer these over inventing facts. Missing → **TODO**.

## Product & ICP (do not mix up)

1. Outcomes: **Build · Modernize · Automate · Care** (see `company.md`).
2. **Primary cold ICP:** SMB needs a **website** (Build) → Zalo / quote.
3. **Secondary / upsell:** Modernize, Automate, Dolphin Care — never lead cold outreach with “AI Agent”.
4. Brand display: **Dolphin Software** (never “Dolphin Kich” in new copy).
5. **Japan (JA)** priority when user mentions Japan / JA / 日本 — skill `lang` + `documentations/geo-japan.md`.

## Agents, Content pack, modes & skills

| Kind | Name | When |
| --- | --- | --- |
| Router | `.claude/agents/_router.md` (mirror `.cursor/agents/`) | Pick primary persona |
| Content pack | `.claude/rules/content-*.md`, **seo-geo-html**, **news-image-gen**, `.cursor/knowledge/`, `.cursor/examples/`, skills | News / social / landing + semantic HTML + news art |
| Mode | skill `mode-news` | Write / edit `/news/` blog |
| Mode | skill `mode-social` | FB / Zalo / TikTok / Instagram copy |
| Skill | `lang` | Locale tone (vi, en, ja) |
| Skill | `seo` | Keywords, titles, meta, internal links |

How to invoke: see `documentations/agent-ops.md` and `documentations/claude-handoff.md`.

## Always respect existing rules

Confirm-before-acting, workspace-only, update-documentations, github-nchithanh, design-mode-chat, responsive-css-units, cookie-consent-bump (under `.claude/rules/`).

## Anti-hallucination

- Do not invent prices, routes, or KPIs — read `.cursor/knowledge/` and `documentations/` or code.
- If unsure, say so and ask or read files first.
- Keep answers short unless the user asks for detail.
