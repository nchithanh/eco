/** Official Dolphin warranty & support policy — SoT for /chinh-sach-bao-hanh-ho-tro-2026/ */

import { DOLPHIN_CARE_GLOSS, formatVnd } from "./dolphin-pricing-policy-2026";

export const WARRANTY_POLICY_PATH = "/chinh-sach-bao-hanh-ho-tro-2026/";

export const WARRANTY_POLICY_META = {
  title: "Chính sách Bảo hành & Hỗ trợ Dolphin Software 2026",
  description:
    "Bảo hành Website 36 tháng, SaaS theo kỳ gói, dự án custom 3 tháng sau nghiệm thu; gói Maintenance và Vận hành sản phẩm; SLA phản hồi P1/P2/P3.",
  eyebrow: "Tài liệu chính sách · Dolphin Software",
  updated: "Cập nhật tháng 9/2026 – Tài liệu tham chiếu chính thức",
  subtitle:
    "Phạm vi bảo hành theo loại sản phẩm, nội dung covered / out of warranty, gói hỗ trợ dài hạn và cam kết phản hồi sự cố.",
  badge: "Website 36 tháng · SaaS theo gói · Custom 3 tháng sau nghiệm thu",
} as const;

export const WARRANTY_SCOPE_ROWS = [
  {
    item: "Website / Landing Page",
    duration: "36 tháng",
    form: "Bảo hành kỹ thuật",
    note: "Điểm mạnh hiện tại của Dolphin",
  },
  {
    item: "CRM + AI (Care / Ops / Intelligence)",
    duration: "Trong thời hạn gói đã thanh toán",
    form: "Hỗ trợ vận hành + duy trì AI",
    note: `Theo gói SaaS · Care = ${DOLPHIN_CARE_GLOSS}`,
  },
  {
    item: "Dự án Outsource / Custom (App, hệ thống lớn, E-com…)",
    duration: "03 tháng sau nghiệm thu",
    form: "Sửa lỗi (defect warranty)",
    note: "Theo báo giá từng dự án",
  },
  {
    item: "Tích hợp nhỏ",
    duration: "1–3 tháng",
    form: "Sửa lỗi trong phạm vi tích hợp",
    note: "Tùy hạng mục đã chốt",
  },
] as const;

export const WARRANTY_COVERED = [
  "Sửa lỗi chức năng đã triển khai theo phạm vi đã chốt",
  "Sửa lỗi logic nghiệp vụ không đúng yêu cầu đã thống nhất",
  "Sửa lỗi giao diện / hiển thị trên môi trường được hỗ trợ",
  "Hỗ trợ lỗi hệ thống trong phạm vi dự án / gói",
  "Hướng dẫn vận hành cơ bản (CMS, cấu hình…)",
] as const;

export const WARRANTY_OUT = [
  "Thêm chức năng mới hoặc thay đổi nghiệp vụ sau nghiệm thu",
  "Đổi UI/UX lớn",
  "Thay đổi cơ chế game / logic phức tạp (nếu có)",
  "Tích hợp thêm bên thứ 3 mới",
  "Lỗi từ hạ tầng / dịch vụ bên thứ 3 (hosting, Apple, Google, Zalo, cổng thanh toán, domain…)",
  "Khách tự chỉnh sửa code / cấu hình gây lỗi",
  "Yêu cầu ngoài phạm vi đã nghiệm thu",
] as const;

export const WARRANTY_MAINTENANCE = [
  {
    name: "Maintenance",
    scope: "Sửa lỗi + điều chỉnh nhỏ trong phạm vi đã bàn giao",
    price: "2.500.000đ – 4.000.000đ",
  },
  {
    name: "Vận hành sản phẩm",
    scope:
      "Dolphin vận hành giúp (giám sát, cập nhật, cấu hình hàng ngày, báo cáo tháng)",
    price: "6.000.000đ – 8.000.000đ",
  },
] as const;

export const WARRANTY_MAINTENANCE_NOTES = [
  "Đăng ký tối thiểu 3 tháng.",
  "Có thể đăng ký riêng từng gói hoặc cả hai.",
  "Không gồm: hosting, phí store, SMS/OTP, phí cổng thanh toán, domain và phí NCC khác.",
] as const;

export const WARRANTY_SLA_HOURS = [
  "Giờ hành chính: phản hồi trong 4–8 giờ làm việc.",
  "Ngoài giờ / cuối tuần: xử lý vào ngày làm việc tiếp theo (trừ khi thỏa thuận riêng trên hợp đồng).",
] as const;

export const WARRANTY_PRIORITIES = [
  {
    level: "P1",
    title: "Nghiêm trọng",
    definition:
      "Hệ thống / website / app không dùng được cho đa số người dùng (down, không đăng nhập, mất thanh toán…).",
    commit:
      "Ưu tiên cao nhất trong giờ hành chính; bắt đầu xử lý sớm nhất có thể.",
  },
  {
    level: "P2",
    title: "Cao",
    definition:
      "Lỗi lớn ảnh hưởng nghiệp vụ chính nhưng vẫn dùng được một phần.",
    commit:
      "Phản hồi trong SLA giờ hành chính; lên kế hoạch sửa trong vòng vài ngày làm việc.",
  },
  {
    level: "P3",
    title: "Thường",
    definition: "Lỗi nhỏ, UI, hỗ trợ vận hành, câu hỏi cấu hình.",
    commit:
      "Phản hồi trong 4–8 giờ làm việc; xếp lịch sửa theo backlog hợp lý.",
  },
] as const;

export const WARRANTY_COMMITMENTS = [
  "Bàn giao source code + tài liệu vận hành (với dự án custom)",
  "Không lock-in",
  "Có checklist nghiệm thu (UAT) rõ ràng trước bàn giao",
  "Đào tạo vận hành cơ bản (1–2 buổi tùy gói / dự án)",
] as const;

export const WARRANTY_CTA = {
  title: "Cần hỗ trợ hoặc gia hạn bảo hành?",
  body: "Nhắn Zalo — Dolphin Software phân loại P1/P2/P3 và tư vấn gói Maintenance / Vận hành phù hợp.",
  zaloLabel: "Chat Zalo ngay",
  pricingLabel: "Xem chính sách giá",
  stickyLabel: "Chat Zalo",
} as const;

export { formatVnd };
