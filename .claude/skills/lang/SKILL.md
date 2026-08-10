---
name: lang
description: >-
  Localize or write Dolphin Software copy in vi, en, or ja with correct
  tone. Use when the user asks for a locale, Japan/JA priority, translation, or
  multi-language news/social/UI strings.
---

# Skill: lang

## When to use

- User specifies locale: vi, en, ja  
- Japan / JA / 日本 priority  
- Translating or writing news, social, UI, careers copy  

## Required context

Read before writing:

1. `documentations/brand-voice.md`
2. Content rules `content-brand` / `content-writing` when marketing copy
3. `documentations/i18n.md` — where strings live
4. If **ja**: `documentations/geo-japan.md`
5. Matching existing locale file (e.g. `dictionaries.ts`, `news-details`, `*-copy.ts`) for tone match
6. Optional: `.cursor/examples/` for channel tone

## Rules

- Prefer **natural** locale tone over literal translation  
- Keep brand **Dolphin Software**  
- JA: polite but not stiff; SMB-friendly; avoid over-English loanwords when a clear Japanese phrase exists  
- VI: warm “anh chị” when marketing to SMB owners; avoid robotic studio jargon  
- Do not invent i18n keys or routes — mirror existing patterns  
- Confirm-before-acting: plan locales + files → **`ok`** → edit  

## Output

- State target locale(s)  
- Provide copy in that locale  
- Note any keys/files to update  
