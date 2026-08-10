# Agent ops — Dolphin Software

How **Cursor** and **Claude Code** agents, Content pack, modes/skills, and **`documentations/`** work together.

Claude-specific handoff: [claude-handoff.md](./claude-handoff.md). Root brief: `CLAUDE.md`.

## Layers

| Layer | Cursor | Claude Code | Role |
| --- | --- | --- | --- |
| Project brief | (rules) | `CLAUDE.md` | Always-on context |
| Core / ops rules | `.cursor/rules/*.mdc` | `.claude/rules/*.md` | Brand, confirm-`ok`, cookie, docs… |
| Agent router | `.cursor/agents/_router.md` | `.claude/agents/_router.md` | Pick persona |
| Personas | `.cursor/agents/*.md` | `.claude/agents/*.md` | content / seo / frontend / … |
| Content rules | `.cursor/rules/content-*.mdc`, `seo-geo-html` | `.claude/rules/content-*.md` (+ paths) | Brand, writing, forbidden, SEO HTML |
| Knowledge pack | `.cursor/knowledge/` | same (SoT, do not fork) | Company truth |
| Examples | `.cursor/examples/` | same | Tone references |
| Prompts | `.cursor/prompts/` | `.claude/skills/{create-blog,create-social,content-pipeline}/` | Workflows |
| Mode news / social | `.cursor/rules/mode-*.mdc` | `.claude/skills/mode-*/` | Blog / social |
| Skill lang / seo | `.cursor/skills/` | `.claude/skills/` | Locale + SEO |
| Canonical docs | `documentations/*` | same | Product / routes / changelog |

When changing **policy**, update Cursor + Claude mirrors in the same task. Knowledge + `documentations/` stay single SoT.

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
2. Read company knowledge (above) + `create-blog` / `content-pipeline` + content rules  
3. Docs: `seo-keywords.md`, `growth-reach-users.md`, `brand-voice.md`  
4. Plan keyword + slug + locale → **`ok`**  
5. Edit `lib/news-details.ts` / locale copy only as needed  
6. Changelog if non-trivial  

## Checklist — social

1. Router → **content**  
2. Read company knowledge (above) + `create-social`; `social-playbook.md`, `brand-voice.md`, examples  
3. Plan channels + CTA → **`ok`**  
4. Deliver per-channel copy (no fake metrics)  

## Coding homepage / features

Router → **frontend** (+ optional **reviewer** / **tester**).  
Docs: `homepage.md`, `architecture.md`, `conventions.md`, `i18n.md`.

## Deploy

Router → **devops**. Commit/push only when user asks; identity `nchithanh`; bump cookie consent revision.
