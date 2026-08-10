---
description: Prefer viewport/relative CSS units; avoid hard px for layout
---

# Responsive CSS units

Prefer units that scale with screen size or root font size. Avoid hard `px` for layout, spacing, and typography.

## Prefer

- `rem` / `em` for type, padding, gaps, radii
- `%`, `fr`, `minmax()` for flexible layout
- `svw` / `svh` / `dvh` / `lvh` for viewport-based sizing
- `clamp(min, preferred, max)` for fluid type and spacing
- Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) instead of one fixed size
- Relative Tailwind tokens (`text-sm`, `p-4`, `gap-3`, `w-full`, `max-w-*`) over arbitrary `px` values

## Avoid

- Hard `px` for width, height, margin, padding, font-size, gap, positioning offsets
- Arbitrary Tailwind values like `w-[224px]`, `mt-[18px]`, `text-[14px]` when a relative alternative exists

```tsx
// ❌ BAD
<div className="mt-[18px] w-[224px] text-[14px]" />

// ✅ GOOD
<div className="mt-4 w-[min(14rem,calc(100svw-2rem))] text-sm" />
```

```css
/* ❌ BAD */
.panel { width: 224px; padding: 16px; font-size: 14px; }

/* ✅ GOOD */
.panel {
  width: min(14rem, calc(100svw - 2rem));
  padding: 1rem;
  font-size: 0.875rem;
}
```

## Narrow exceptions

Allowed when relative units are impractical:

- Hairline borders: `1px` / `border`
- Very small decorative strokes in SVG
- Shadow blur/spread where design tools export `px` and rem would be noisy

If an exception is needed, keep it local and prefer `rem` when the value is ≥ ~8px.
