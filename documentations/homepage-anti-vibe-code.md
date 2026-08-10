# Homepage — thoát vibe-code (premium B2B)

**Status:** In progress (homepage Done; **site-wide Nav pages** started 2026-08-10)  
**Phase 0 / Sprint A:** Done  
**Phase 1 / Sprint B:** Done  
**Phase 2 / Sprint C:** Done  
**Phase 3:** Done  
**Phase 4:** Done  
**Site-wide (Nav pages):** In progress — glass→surface, type helpers on service/Care/AI/About/Careers/News/Works  
**Next:** Sprint D (Works case depth + Process); Sprint E mobile polish Care/AiEdge  

Plan thiết kế hệ thống cho homepage Dolphin Software: không chỉ đổi màu/font — đổi **design system**, nhịp layout, và signature nhận diện.

**Định hướng cố định:** editorial premium B2B · console/dashboard feel · lavender accent tiết chế.

**Brand display:** luôn **Dolphin Software** (không dùng “Dolphin Kich” trong copy mới). Signature thị giác: mascot dolphin + Ask AI drawer + mock browser/wireframe.

**SoT liên quan:** [homepage.md](./homepage.md), [brand-voice.md](./brand-voice.md), `.cursor/knowledge/company.md`.

---

## Hiện trạng

Thứ tự gần đúng B2B (xem [homepage.md](./homepage.md)):

Hero → Fit → Outcomes → Why → Capabilities → Works → Care → Tech/AI Edge → Process → Pricing → News → FAQ → Contact.

**Rủi ro vibe-code còn lại:**

- Works chưa đậm problem → scope → result (Sprint D)
- Works thiếu ảnh cafe/clinic riêng (placeholder)
- Process deliverable UI (Sprint D)
- Care/AiEdge polish mobile (Sprint E)

---

## 3 trụ ưu tiên

| Trụ | Ý nghĩa trên site |
| --- | --- |
| Editorial B2B | Headline có nhịp; body gọn; định vị SMB rõ trong 5 giây đầu |
| Console / system | Hero & Care = mock thật / Ask AI drawer; không stock AI |
| Lavender tiết chế | Nền trắng/mist; accent chỉ CTA, focus, active; bỏ glow/neon |

---

## 10 nguyên tắc (tóm tắt)

1. **Định vị rõ** — ai / cho ai / vấn đề gì / khác gì
2. **Typography có cá tính** — display ≠ body; scale + tracking có kiểm soát
3. **Lưới & bố cục riêng** — xen nhịp; không section nào cũng card đều
4. **Màu có vai trò** — 1 accent chính, nền sạch; tránh gradient/glow AI
5. **Ảnh có bản sắc** — mock/case/mascot thật; tránh stock generic
6. **Component language** — radius, button, badge, shadow có dấu vân tay
7. **Motion có chủ đích** — dẫn mắt, không phô
8. **Content architecture** — vấn đề → kết quả → dịch vụ → proof → quy trình → FAQ → CTA
9. **Chiều sâu sản phẩm** — timeline, bàn giao, case, kết quả vận hành
10. **Signature element** — 1–3 dấu hiệu nhận diện mạnh (đủ, không nhiều)

---

## Phase 0 — Design system

**Status:** Done (2026-08-10)

**Tokens** (`app/globals.css`, `lib/theme.tsx`):

- Nền: `#fcfcfd` + panel mist `#f5f4f8`
- Accent: soft lavender `#6b56d6` / `#5644b8` / `#9b8ce8` (swatch theme violet cập nhật)
- Text: charcoal `#1a1625`, muted `#5c5668`
- Border `rgba(26,22,37,0.08)`, shadow mỏng; glow vẫn tắt

**Component language:**

- Radius ~10px (đã có)
- Helpers: `.kuct-surface-card`, `.kuct-badge`
- Button primary: filled accent (không đổi API class)

**Typography:**

- `.font-display` + tracking hơi âm
- Scale: `.kuct-type-h1` / `.kuct-type-h2` / `.kuct-type-body` / `.kuct-type-eyebrow`

Docs: `conventions.md`, `homepage.md`.

---

## Phase 1 — Signature Hero

**Status:** Done (2026-08-10)

File: `components/Hero.tsx`

- Trái: eyebrow + 3 tag (`.kuct-badge`) + CTA + trust line; type helpers
- Phải: `EmbedSiteMock` (`showChat={false}` `animate`) + floating metrics + mascot `dolphin-eco`
- Bỏ GlassPanels / glow orb / parallax nặng
- Copy tags/metrics: `homepage_lang_*` + `dictionaries` + `public/schema/homepage/hero.json`

---

## Phase 2 — Nhịp section

**Status:** Sprint C Done (2026-08-10) — Why / Outcomes / Capabilities. Fit nhẹ giữ; Works·Care·Process → Sprint D/E.

Giữ **outcome-first** và **Capabilities = Build · Modernize · Automate · Care** (không đổi thành 4 product cards — trùng Pricing / lệch ICP).

| Section | Vai trò | Đổi nhịp |
| --- | --- | --- |
| Fit | Vấn đề / “có phải bạn?” | Giữ sớm; bớt carousel card giống nhau nếu cần |
| Outcomes | Kết quả | Sticky+stack; count-up rất nhẹ |
| Why | 4 pillars | Icon line; có thể 1 hàng delivery promise |
| Capabilities | Outcomes | Giữ carousel/hub; khác visual Works/Pricing |
| Works | Proof | Case: preview + problem + scope + result |
| Care | Product demo | Split lợi ích \| chat mock — signature #2 |
| Tech / AI Edge | Nền tảng sau proof | Callout “website nền · AI lớp trên” |
| Process | Minh bạch | Timeline + deliverable mỗi bước |
| Pricing | Gói | Card đề xuất nổi; note “theo phạm vi” |
| FAQ / Contact | Đóng | Accordion thoáng; CTA + Zalo + phản hồi trong ngày |

```
Hero → Fit → Outcomes → Why → Capabilities → Works → Care
  → Tech/AI Edge → Process → Pricing → News → FAQ → Contact
```

---

## Phase 3 — Ảnh & signature thống nhất

**Status:** Done (2026-08-10)

- SoT mascot: `lib/mascot.ts` — `eco` (Hero) · `chat` (Care / Ask AI / EmbedSiteMock) · `contact` (Contact)
- Ưu tiên: `EmbedSiteMock`, screenshot case thật, Care UI, Ask AI drawer
- Technology: giảm glow SVG + surface border (không “AI dashboard” stock)
- Works: 4 ảnh thật; **TODO** `cafe.jpg` / `clinic.jpg` (đang placeholder tickets/beauty)

**Signature (tối đa 3):**

1. Hero console / browser mock (`EmbedSiteMock`)  
2. Ask AI drawer + Care chat (`dolphin-chat`)  
3. Mascot + lavender accent tiết chế (`dolphin-eco` / `dolphin-contact`)  

---

## Phase 4 — Motion có chủ đích

**Status:** Done (2026-08-10)

- Giữ Reveal sequence + Care/Ask AI typewriter (`useDesktopMotion`)
- Contact mascot: **static** (bỏ `kuct-mascot-float`)
- Technology: bỏ mouse-tilt parallax; satellite/node pulse off; globe chậm; `data-motion="off"` khi reduced-motion (vẫn hiện sphere)
- EmbedSiteMock scroll đã tôn trọng `useDesktopMotion`
- Không thêm Outcomes count-up
- `prefers-reduced-motion`: reveal/title/site-mock/globe đã kill trong `globals.css`

---

## Checklist 15 điểm (QA homepage)

1. Hero trả lời: ai / cho ai / vấn đề / khác gì trong 5s  
2. Không headline “AI / cutting-edge / next-gen”  
3. Typography: display ≠ body; scale có nhịp  
4. Lavender chỉ dẫn hướng (CTA, focus, tag)  
5. Không gradient cầu vồng / glow AI  
6. Hero không còn glass panel generic  
7. Có 1 signature visual (console/mock)  
8. Fit = vấn đề trước feature dump  
9. Outcomes = kết quả vận hành  
10. Capabilities = Build·Modernize·Automate·Care  
11. Works = problem / scope / result  
12. Care = product demo 2 cột  
13. Process có deliverable từng bước  
14. Section không cùng một layout card  
15. Motion phục vụ đọc, không phô  

---

## Sprint shippable

| Sprint | Scope | File chính | Status |
| --- | --- | --- | --- |
| **A** | Tokens + component language + typography scale | `globals.css`, `theme.tsx`, docs | **Done** |
| **B** | Hero signature + trust/tags + giảm motion | `Hero.tsx`, `EmbedSiteMock` | **Done** |
| **C** | Why / Outcomes / Capabilities nhịp layout | `WhyKuct`, `SiteOutcomes`, `Capabilities` | **Done** |
| **D** | Works case depth + Process deliverable UI | `WorksShowcase`, `Process` | Pending |
| **E** | Polish Care/Tech callout + QA mobile | `AgentDolphinHome`, `AiEdge`, `Technology` | Pending |

Mỗi sprint: cập nhật [homepage.md](./homepage.md) + [changelog.md](./changelog.md); bump cookie consent khi commit/push.

**Next:** Sprint **D** (Works case depth + Process).

---

## Ngoài scope

- Đổi Capabilities thành Landing / Website / E-com / Web App trong cùng đợt  
- Redesign toàn site ngoài homepage  
- Đổi brand name / mascot champagne  
