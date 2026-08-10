---
description: When product/content changes, update matching public/schema JSON in the same task
---

# Schema JSON sync

Khi **điều chỉnh content / product truth** của Dolphin, cập nhật file JSON liên quan dưới `public/schema/` **trong cùng task** (trước khi coi xong; ghi vào plan + `documentations/` nếu đổi route/hành vi).

## Map

| Thay đổi | Cập nhật |
| --- | --- |
| Company / values / opinion / pains / FAQ neo / positioning | `public/schema/company.json` (+ page `/schema/company/` tự theo import) |
| Homepage section copy / order (`homepage_lang_vi`, home Care, FAQ…) | `public/schema/homepage/{section}.json` + `homepage/index.json` (+ `overview.json` nếu đổi nhiều section) |
| Service detail / offers / routes (`service-details`, knowledge `services`/`website`) | `public/schema/services/{slug}.json` + `services/index.json` nếu thêm/xóa slug |
| Dolphin Care / custom agent / AI transform | `public/schema/agents/{slug}.json` + `agents/index.json` nếu thêm/xóa slug |
| Thêm/xóa slug schema | `lib/schema/catalog.ts` + `generateStaticParams` pages + index UI `/schema/` (và `/schema/homepage/` nếu section) |

## Do

- Giữ `meta.id`, `schemaPath`, `rawPath`, `productRoute` khớp route thật.
- Locale schema hiện tại: **vi** (SoT). Không bịa metric/case.
- Nếu chỉ sửa UI chrome không đổi truth → không bắt buộc đụng schema.

## Do not

- Đổi copy marketing / knowledge rồi bỏ qua JSON schema.
- Tạo path schema mới ngoài `/schema/...` song song (legacy `/company_value/` chỉ redirect).
