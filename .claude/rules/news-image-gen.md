---
description: News / blog image generation — brand palette, editorial realism, no AI clichés; pair with mode-news.
alwaysApply: false
---

# News image generation

Use when generating or regenerating images for `/news/` (`public/news/`, body `type: "image"`, cover/OG).

Pair with **mode-news**, `content-forbidden`, and `documentations/news-{slug}-canva-prompts.md`.

## Look

- **Editorial / SMB desk** realism or clean flat illustration — soft light, Vietnamese office context when relevant.
- **Palette:** soft lavender + charcoal (site brand). Avoid neon, cyberpunk, purple–indigo glow stacks, cream–terracotta stock looks.
- **Aspect:** prefer **16:9** for cover + inline; export **JPEG** ≤ ~1600px wide into `public/news/`.

## Do

- Match **exact article beats** (silos, 5-step path, outcomes, product UI) — alt text must describe the same scene.
- If the copy names tools (e.g. ChatGPT / Claude / Kimi / CRM), put **readable labels** on windows/cards in the image.
- Keep compositions quiet: one idea per frame; space for hero crop.
- After gen: save under `public/news/`, wire `src`/`alt`, log prompts in `documentations/news-{slug}-canva-prompts.md`.

## Do not

- Robots, glowing brains, holographic HUD, “AI will change everything” scenery.
- Fake KPI charts, invented ROI %, customer logos you do not have rights to.
- Keyword-stuffed watermarks or unreadable micro-text.
- Lazy-load LCP cover incorrectly in UI (cover = list/OG; inline = descriptive alt).

## Prompt skeleton

```text
Editorial illustration for Dolphin Software news.
[scene matching section]. Soft lavender + charcoal. Soft lighting.
No robots, no neon, no cyberpunk. Wide 16:9.
[Required labels if any: ChatGPT, Claude, Kimi, …]
```
