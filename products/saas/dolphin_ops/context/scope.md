# Scope — first slice

Build **plain** and vertical. Do not start from a full CRM menu.

## In

- One industry: **Spa**
- Demo chrome (FE): **Tổng quan · Inbox · Lịch hẹn · Khách · Tác vụ · Nhân sự · Phòng/giường** (đủ chức năng demo)
- Nav full menu (stub *Sắp có*, chat không mở): Chăm sóc (Thông báo, Chiến dịch, Follow-up) · Kinh doanh (Liệu trình, Gói, Báo cáo) · Cửa hàng (Ca làm, Kho, NCC, Thanh toán, Hoàn tiền) · Hệ thống (Cài đặt, Phân quyền, Tích hợp, Nhật ký)
- Seed `frontend/lib/seed.ts`: **100** khách / lịch / inbox / tác vụ (hardcode, chưa BE)
- Booking matching (FE): slot trống theo NV → chọn NV+giờ (block tạm) → chọn phòng/giường → đủ 3 yếu tố = confirmed; thiếu = incomplete
- Phòng/giường: CRUD demo + bật/tắt matching; form lịch chỉ hiện resource `active`
- Tools in canvas: **Booking**, **Customer**, **Staff**, **Rooms**, human confirm (Tasks)
- Intent (chat phải) hoặc click nav trái mở UI giữa — không trả lời text-only
- Chat keywords: `frontend/data/chat-actions.json`
- Visual (FE): NexaFlow language + **chat cột phải luôn mở** (không bỏ chatbox)
- Human confirm for cancel booking

## Out (until slice works)

- Payment, Inventory
- Full ACL product
- Admin “customize everything”
- Public pricing / SLA (stay **TODO**)
- Proof metrics / case studies
- Deploy to the subdomain until DNS is requested

## Later

Admin chat can change **enabled** tools (add a form field, simple report formula). Large structural change → human confirm, not a silent migrate.
