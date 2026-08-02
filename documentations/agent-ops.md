# Agent ops — Dolphin Software

How Cursor **agents**, **Content Agent pack**, modes/skills, and **`documentations/`** work together.

## Layers

| Layer | Path | Role |
| --- | --- | --- |
| Core rule | `.cursor/rules/dolphin-core.mdc` | Always on — brand, ICP, docs pointer |
| Agent router | `.cursor/agents/_router.md` | Pick primary persona (content / seo / frontend / …) |
| Personas | `.cursor/agents/*.md` | Role briefs |
| Content rules | `.cursor/rules/content-*.mdc` | Brand, writing, forbidden, SEO for copy |
| Knowledge pack | `.cursor/knowledge/` | Company source of truth (company, opinion, values, services, pains…) — not customer RAG |
| Examples | `.cursor/examples/` | Tone references (blog / FB / Zalo / landing) |
| Prompts | `.cursor/prompts/` | `create-blog`, `create-social`, `pipeline` |
| Mode news | `.cursor/rules/mode-news.mdc` | Blog `/news/` |
| Mode social | `.cursor/rules/mode-social.mdc` | FB / Zalo / TikTok / IG |
| Skill lang | `.cursor/skills/lang/` | vi · en · ja |
| Skill seo | `.cursor/skills/seo/` | Keywords, meta, links |
| Canonical docs | `documentations/*` | Product truth, routes, deploy, changelog |

Existing rules (confirm-before-acting, workspace-only, update-documentations, …) still apply.

## How to call

In chat, say for example:

- `mode news` + `skill seo` + `lang ja` — bài news tiếng Nhật  
- `mode social` + `lang vi` — caption Zalo/FB  
- `agents/content` + pipeline — multi-step blog  
- `agents/frontend` — homepage UI  

Or describe the task; agent should route via `_router.md`, attach mode/skill, and **read listed docs/knowledge first**.

## Knowledge — always start here for brand/copy

1. `.cursor/knowledge/README.md` (index)  
2. At minimum for marketing: `company.md` + `company-opinion.md` + `company-values.md` + `customer-pain.md`  
3. Then topic files (`services`, `website`, `dolphin-care`, `ai`, `case-studies`)  
4. Then `documentations/` for routes / SEO / homepage structure  

## Checklist — news

1. Router → **content** (+ **seo**)  
2. Read company knowledge (above) + `prompts/create-blog.md` / `pipeline.md` + content rules  
3. Docs: `seo-keywords.md`, `growth-reach-users.md`, `brand-voice.md`  
4. Plan keyword + slug + locale → **`ok`**  
5. Edit `lib/news-details.ts` / locale copy only as needed  
6. Changelog if non-trivial  

## Checklist — social

1. Router → **content**  
2. Read company knowledge (above) + `prompts/create-social.md`; `social-playbook.md`, `brand-voice.md`, examples  
3. Plan channels + CTA → **`ok`**  
4. Deliver per-channel copy (no fake metrics)  

## Coding homepage / features

Router → **frontend** (+ optional **reviewer** / **tester**).  
Docs: `homepage.md`, `architecture.md`, `conventions.md`, `i18n.md`.

## Deploy

Router → **devops**. Commit/push only when user asks; identity `nchithanh`.
