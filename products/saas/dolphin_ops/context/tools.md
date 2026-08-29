# Tools

Each tool: capability, input schema, validation, permission, UI schema, execution, result.

## First slice

| id | UI when selected | Example intent |
| --- | --- | --- |
| `booking` | Form lịch mới (Khách / Dịch vụ / Thời gian 3 cột + tóm tắt; demo) | “Đặt lịch cho Lan thứ Bảy” |
| `customer` | Customer 360 | “Hồ sơ khách Hương” |

## Catalog (not all built)

Booking · Customer · Notification · Reports · Payment · Staff · Inventory (later)

FE nav full menu = **stub** (*Sắp có*) trừ 5 mục Vận hành. Chat không route vào stub. Canvas: ngôn ngữ NexaFlow (Inter, tím `#7A60CA`, 2 cột + widget + chip) + chat phải giữ layout hiện tại.

Chat demo: `frontend/data/chat-actions.json` (phrase → stage/view/chip). `resolveChat` trong `frontend/lib/intent.ts`.

## Sensitive → pause for human

Bulk notify, payment, refund, delete, important data changes.

## Admin customize (later, enabled tools only)

Examples: required notes field on booking; revenue = bookings × price → chart. Do not claim complete ACL.
