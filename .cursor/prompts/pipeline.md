# Content pipeline (multi-step)

Do **not** skip to a finished article in one shot when quality matters. Run stages; show intermediate output if the user wants review.

## 1. Planner (agents/content + skill seo)

- Primary keyword (from `seo-keywords.md`)  
- Audience pain (from `customer-pain.md`)  
- Outline: H2s only  
- Locale (skill **lang**)  
→ wait **`ok`** if mutating later  

## 2. Writer

- Draft from outline + knowledge + examples tone  
- Missing fact → `TODO`  

## 3. Editor

- Cut repetition, generic AI filler, feature lists without pain  

## 4. SEO reviewer (agents/seo + content-seo)

- Keyword in title / open / one H2 / close  
- Meta + slug + internal links  

## 5. Humanizer

- Add one concrete example or question  
- Enforce `content-forbidden`  
- Soft CTA (10%)  

## Then

Implement into repo only after user **`ok`**.
