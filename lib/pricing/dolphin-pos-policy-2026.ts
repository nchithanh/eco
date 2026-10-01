/**
 * Dolphin POS — pricing SoT (yearly packs).
 * Feature/price lines mirror the approved retail POS reference (Mỗi năm).
 * Product line is separate from CRM · Care · Ops combos.
 * Runtime POS app: TODO — marketing / quote SoT only for now.
 */

import { formatVnd } from "./dolphin-pricing-policy-2026";

export const POS_POLICY_PATH = "/chinh-sach-gia-dolphin-2026/#pos";

export const POS_POLICY_META = {
  title: "Dolphin POS — bảng giá theo năm",
  description:
    "Ba gói POS theo năm cho F&B, pet shop, fashion và cửa hàng bán hàng: Cơ Bản, Chuyên nghiệp, Toàn Diện.",
  lead: "Nhóm POS — bán hàng tại quầy · web · kho · FnB. Khác CRM dịch vụ (spa/salon/clinic).",
  billingYearLabel: "Mỗi năm",
  billingMonthLabel: "Mỗi tháng",
  /** Month prices not published yet */
  monthBillingTodo: true,
  statusNote:
    "Bảng giá POS công bố cho báo giá. Triển khai app POS: TODO theo lộ trình sản phẩm.",
} as const;

export type PosIndustryId =
  | "fnb"
  | "cafe"
  | "tra-sua"
  | "pet"
  | "fashion"
  | "retail";

export const POS_INDUSTRIES: readonly {
  id: PosIndustryId;
  label: string;
  lead: string;
}[] = [
  {
    id: "fnb",
    label: "F&B",
    lead: "Quán ăn / đồ uống — bán tại quầy, ca, tồn và FnB trên POS.",
  },
  {
    id: "cafe",
    label: "Tiệm cafe",
    lead: "Cafe — order quầy, ca làm, tồn nguyên liệu / thành phẩm cơ bản.",
  },
  {
    id: "tra-sua",
    label: "Trà sữa",
    lead: "Trà sữa — bán nhanh, topping/biến thể, ca và tồn theo ngày.",
  },
  {
    id: "pet",
    label: "Pet shop",
    lead: "Cửa hàng thú cưng — bán hàng, tồn kho, nhiều kênh khi cần.",
  },
  {
    id: "fashion",
    label: "Fashion",
    lead: "Shop thời trang — quầy, web, kho size/màu và sàn khi scale.",
  },
  {
    id: "retail",
    label: "Shop bán hàng",
    lead: "Cửa hàng / hộ kinh doanh — hóa đơn, tài chính, bán online.",
  },
] as const;

export type PosPlanId = "co-ban" | "chuyen-nghiep" | "toan-dien";

export type PosPlan = {
  id: PosPlanId;
  name: string;
  audience: string;
  /** Prepaid VND for 12 months (Mỗi năm) */
  priceYear: number;
  popular?: boolean;
  badge?: string;
  /** First line before feature bullets (e.g. includes lower tier) */
  includesLine?: string;
  features: readonly string[];
};

/** Exact yearly tiers — do not invent monthly amounts here. */
export const POS_PLANS: readonly PosPlan[] = [
  {
    id: "co-ban",
    name: "Cơ Bản",
    audience: "Mới sử dụng, cá nhân kinh doanh hoặc Hộ kinh doanh nhỏ",
    priceYear: 1_920_000,
    features: [
      "Tạo hóa đơn cơ bản",
      "Tài chính cơ bản",
      "Bán hàng tại cửa hàng cơ bản",
      "Bán hàng web online cơ bản",
      "Giải pháp tích hợp ngân hàng",
    ],
  },
  {
    id: "chuyen-nghiep",
    name: "Chuyên nghiệp",
    audience: "Cá nhân kinh doanh hoặc Hộ kinh doanh có một cửa hàng",
    priceYear: 2_520_000,
    popular: true,
    badge: "Phổ biến",
    includesLine: "Toàn bộ tính năng gói cơ bản",
    features: [
      "Quản lý tồn kho cơ bản",
      "Quản lý FnB cơ bản",
      "Tích hợp vận chuyển",
      "Quản lý ca",
      "Kết nối hóa đơn điện tử",
      "Quản lý nhân viên cơ bản",
    ],
  },
  {
    id: "toan-dien",
    name: "Toàn Diện",
    audience: "Chủ hộ kinh doanh đa kênh hoặc đa ngành nghề",
    priceYear: 8_400_000,
    includesLine: "Toàn bộ tính năng gói chuyên nghiệp",
    features: [
      "Quản lý tồn kho nâng cao",
      "Quản lý FnB nâng cao",
      "Tích điểm khách hàng",
      "Bán hàng MXH - Chat đa kênh",
      "Thêm nhiều cửa hàng",
      "Quản lý sàn TMĐT",
    ],
  },
] as const;

export const POS_CTA = {
  buy: "Mua ngay",
  consult: "Nhận tư vấn POS",
} as const;

export const POS_FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Dolphin POS khác CRM · Care · Ops ở đâu?",
    a: "POS dành cho cửa hàng bán hàng / F&B / pet / fashion (hóa đơn, quầy, kho, kênh bán). CRM · Care · Ops dành cho doanh nghiệp dịch vụ (khách, lịch, follow-up, AI chăm sóc). Hai nhóm giá tách riêng trên trang chính sách giá.",
  },
  {
    q: "Gói POS tính theo chu kỳ nào?",
    a: "Bảng giá công bố theo Mỗi năm (12 tháng, thanh toán trước). Giá theo tháng: TODO khi công bố.",
  },
  {
    q: "Giá gói Cơ Bản / Chuyên nghiệp / Toàn Diện POS là bao nhiêu?",
    a: `Cơ Bản ${formatVnd(1_920_000)}/năm; Chuyên nghiệp ${formatVnd(2_520_000)}/năm; Toàn Diện ${formatVnd(8_400_000)}/năm.`,
  },
];
