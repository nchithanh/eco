---
name: create-blog
description: >-
  Dolphin content workflow — invoke for create blog.
  See also documentations/agent-ops.md and .cursor/prompts/.
---

# Prompt — create blog

## Read first (in order)

1. `.cursor/agents/_router.md` + `.cursor/agents/content.md` (+ `seo.md` if needed)  
2. Content rules: `content-brand`, `content-writing`, `content-forbidden`, `content-seo`  
3. Knowledge: `website.md`, `customer-pain.md`, plus topic files (`dolphin-care`, `ai`, `faq`, `case-studies`…)  
4. Examples: `.cursor/examples/blog/*` — **analyze tone, do not copy**  
5. Docs: `documentations/seo-keywords.md`, `growth-reach-users.md`, `brand-voice.md`  
6. Skills: **seo**, **lang** (if locale ≠ default)

## Process

Follow `.cursor/prompts/pipeline.md` (Planner → Writer → Editor → SEO → Humanizer).

## If knowledge is missing

**DO NOT hallucinate.** Leave `TODO:` and ask the user.

## Before writing files

Present plan → wait for **`ok`** → then edit `lib/news-details.ts` / news copy only as scoped.
