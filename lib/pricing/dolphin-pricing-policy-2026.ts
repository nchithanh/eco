/** Official Dolphin Software pricing policy — SoT for /chinh-sach-gia-dolphin-2026/ */

export const PRICING_POLICY_PATH = "/chinh-sach-gia-dolphin-2026/";

export const PRICING_POLICY_META = {
  title: "Chính sách giá Dolphin Software 2026",
  description:
    "Bảng giá chính thức 2026: CRM, Dolphin Care, Ops, Intelligence, 6 gói combo SaaS, thuê lẻ Care và dịch vụ tích hợp — thanh toán trước, không dùng thử.",
  eyebrow: "Tài liệu chính sách · Dolphin Software",
  updated: "Cập nhật tháng 9/2026 – Tài liệu tham chiếu chính thức",
  subtitle:
    "Niêm yết giá SaaS, gói combo và quy tắc áp dụng — dùng cho website, hồ sơ năng lực và báo giá khách hàng.",
  badge: "CRM là nền tảng – AI là tăng trưởng – Website hỗ trợ chốt",
} as const;

export type PrincipleGroup =
  | "Base Revenue"
  | "Growth Revenue"
  | "Hỗ trợ chốt"
  | "Thanh toán"
  | "Không trial"
  | "Phí bên thứ 3";

export const PRICING_PRINCIPLES: readonly {
  group: PrincipleGroup;
  title: string;
  body: string;
  icon: "base" | "growth" | "web" | "pay" | "trial" | "third";
}[] = [
  {
    group: "Base Revenue",
    title: "CRM — doanh thu nền",
    body: "CRM là sản phẩm lõi. Mọi gói combo và upsell xoay quanh nền tảng vận hành khách hàng.",
    icon: "base",
  },
  {
    group: "Growth Revenue",
    title: "AI — doanh thu tăng trưởng",
    body: "Dolphin Care, Ops và Intelligence thuộc Growth Revenue — bán kèm hoặc mở rộng sau CRM.",
    icon: "growth",
  },
  {
    group: "Hỗ trợ chốt",
    title: "Website — hỗ trợ chốt",
    body: "Landing / Website doanh nghiệp được tặng hoặc giảm sâu theo gói combo để tăng khả năng triển khai.",
    icon: "web",
  },
  {
    group: "Thanh toán",
    title: "Thanh toán trước",
    body: "Tất cả gói SaaS bán theo kỳ hạn (6 hoặc 12 tháng). Khách thanh toán trước toàn bộ thời hạn gói.",
    icon: "pay",
  },
  {
    group: "Không trial",
    title: "Không dùng thử",
    body: "Dolphin Software không cung cấp dùng thử miễn phí cho SaaS.",
    icon: "trial",
  },
  {
    group: "Phí bên thứ 3",
    title: "Phí bên thứ ba",
    body: "Zalo OA, ZNS, SMTP, cổng thanh toán, Google… không gồm trong giá Dolphin — khách trả trực tiếp NCC.",
    icon: "third",
  },
] as const;

export const SAAS_MONTHLY = [
  { product: "CRM", price: 500_000 },
  { product: "Dolphin Care", price: 1_000_000 },
  { product: "Dolphin Ops", price: 1_000_000 },
  { product: "Dolphin Intelligence", price: 2_000_000 },
] as const;

export const ONETIME_WEB = [
  { item: "Landing Page", price: 1_500_000 },
  { item: "Website doanh nghiệp", price: 4_500_000 },
] as const;

export const INTEGRATION_OUTSOURCE = [
  { item: "Tích hợp thanh toán online", price: "2.000.000đ" },
  { item: "Tích hợp tính năng đơn giản", price: "1.000.000đ – 3.000.000đ" },
  { item: "Tích hợp tính năng nâng cao", price: "3.000.000đ – 7.000.000đ" },
  { item: "Outsource App", price: "10.000.000đ – 50.000.000đ" },
  { item: "Outsource System", price: "10.000.000đ – 100.000.000đ" },
] as const;

export type ComboPackage = {
  no: number;
  name: string;
  components: string;
  term: string;
  prepaid: number;
  webSupport: string;
  /** Popular packages to emphasize in UI */
  highlight?: boolean;
  badge?: string;
};

export const COMBO_PACKAGES: readonly ComboPackage[] = [
  {
    no: 1,
    name: "CRM Base 12",
    components: "CRM",
    term: "12 tháng",
    prepaid: 5_400_000,
    webSupport: "Tặng Landing Page hoặc giảm 50% Website (còn 2.250.000đ)",
  },
  {
    no: 2,
    name: "CRM + Care 6",
    components: "CRM + Dolphin Care",
    term: "6 tháng",
    prepaid: 9_000_000,
    webSupport: "Tặng Website (4.500.000đ)",
  },
  {
    no: 3,
    name: "CRM + Care 12",
    components: "CRM + Dolphin Care",
    term: "12 tháng",
    prepaid: 16_200_000,
    webSupport: "Tặng Website (4.500.000đ)",
    highlight: true,
    badge: "Phổ biến",
  },
  {
    no: 4,
    name: "CRM + Ops 6",
    components: "CRM + Dolphin Ops",
    term: "6 tháng",
    prepaid: 9_000_000,
    webSupport: "Tặng Website (4.500.000đ)",
  },
  {
    no: 5,
    name: "Full Growth 6",
    components: "CRM + Care + Ops",
    term: "6 tháng",
    prepaid: 15_000_000,
    webSupport: "Tặng Website (4.500.000đ)",
  },
  {
    no: 6,
    name: "Full Growth 12",
    components: "CRM + Care + Ops",
    term: "12 tháng",
    prepaid: 27_000_000,
    webSupport: "Tặng Website (4.500.000đ)",
    highlight: true,
    badge: "Đầy đủ nhất",
  },
] as const;

export const CARE_STANDALONE = [
  {
    term: "6 tháng",
    list: 6_000_000,
    price: 5_100_000,
    discount: "15%",
    avgMonthly: 850_000,
    recommended: false,
  },
  {
    term: "12 tháng",
    list: 12_000_000,
    price: 9_600_000,
    discount: "20%",
    avgMonthly: 800_000,
    recommended: true,
  },
] as const;

export const CARE_STANDALONE_AUDIENCE =
  "Dành cho khách đã có CRM — không tặng Website.";

export const IMPORTANT_RULES = [
  "CRM đứng một mình chỉ bán gói 12 tháng (CRM Base 12).",
  "Gói 6 tháng chỉ bán khi có kèm AI (Dolphin Care hoặc Dolphin Ops).",
  "Từ gói CRM + Care 6 trở đi → tặng toàn bộ Website doanh nghiệp (4.500.000đ) khi triển khai.",
  "CRM Base 12: tặng Landing Page hoặc giảm 50% Website doanh nghiệp.",
  "Dolphin Intelligence là add-on — chỉ bán khi khách đã có gói có CRM.",
  "Gói thuê lẻ Dolphin Care chỉ dành cho khách đã có CRM — không tặng Website.",
  "Không có dùng thử miễn phí.",
  "Thanh toán trước theo đúng thời hạn gói đã chọn.",
] as const;

export const PRICING_CTA = {
  title: "Chọn gói phù hợp với vận hành của bạn",
  body: "Nhắn Zalo để Dolphin Software tư vấn combo CRM · AI · Website theo phạm vi thực tế.",
  zaloLabel: "Chat Zalo ngay",
  contactLabel: "Nhận tư vấn gói phù hợp",
  stickyLabel: "Chat Zalo",
} as const;

export function formatVnd(amount: number): string {
  return `${new Intl.NumberFormat("vi-VN").format(amount)}đ`;
}
