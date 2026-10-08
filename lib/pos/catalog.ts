/**
 * Dolphin POS industry landings — separate from CRM `/industries/*`.
 * Pricing anchors: `/chinh-sach-gia-dolphin-2026/#pos-{pricingId}`
 * Visuals aligned with app vertical chooser (`products/saas/pos`).
 */

export const POS_DEMO_URL = "https://nchithanh.github.io/pos/";

export const POS_SLUGS = [
  "fnb",
  "cafe",
  "tra-sua",
  "pet",
  "fashion",
  "retail",
] as const;

export type PosSlug = (typeof POS_SLUGS)[number];

/** Tab id on pricing POS line (must exist in POS_INDUSTRIES). */
export type PosPricingId =
  | "fnb"
  | "cafe"
  | "tra-sua"
  | "pet"
  | "fashion"
  | "retail";

export type PosCatalogEntry = {
  slug: PosSlug;
  labelVi: string;
  pricingId: PosPricingId;
  priority: "p0" | "p1";
  /** App chooser emoji */
  emoji: string;
  /** Pastel tile (app vertical soft color) */
  colorSoft: string;
  /** One-line hub card description */
  blurb: string;
};

export const POS_CATALOG: readonly PosCatalogEntry[] = [
  {
    slug: "fnb",
    labelVi: "Nhà hàng",
    pricingId: "fnb",
    priority: "p0",
    emoji: "🍽️",
    colorSoft: "#FFF7ED",
    blurb: "Quầy món, ca, tồn nguyên liệu — đối chiếu cuối ngày.",
  },
  {
    slug: "cafe",
    labelVi: "Tiệm cafe",
    pricingId: "cafe",
    priority: "p0",
    emoji: "☕",
    colorSoft: "#FFFBEB",
    blurb: "Order nhanh, ca barista, theo dõi hạt và sữa.",
  },
  {
    slug: "tra-sua",
    labelVi: "Trà sữa",
    pricingId: "tra-sua",
    priority: "p0",
    emoji: "🧋",
    colorSoft: "#FDF2F8",
    blurb: "Topping, peak giờ, tồn trân châu theo ngày.",
  },
  {
    slug: "pet",
    labelVi: "Pet shop",
    pricingId: "pet",
    priority: "p0",
    emoji: "🐾",
    colorSoft: "#ECFDF5",
    blurb: "SKU nhiều, kiểm nhận nhập, nhắc khách lâu chưa mua.",
  },
  {
    slug: "fashion",
    labelVi: "Thời trang",
    pricingId: "fashion",
    priority: "p0",
    emoji: "👗",
    colorSoft: "#F5F3FF",
    blurb: "Size/màu, bán quầy, tồn lệch thấy sớm hơn Excel.",
  },
  {
    slug: "retail",
    labelVi: "Tạp hóa",
    pricingId: "retail",
    priority: "p0",
    emoji: "🛒",
    colorSoft: "#F0FDFA",
    blurb: "Hóa đơn, tồn kệ, quỹ và công nợ cửa hàng nhỏ.",
  },
] as const;

/** Module story on hub — mirrors shipped Dolphin POS app. */
export const POS_HUB_MODULES: readonly {
  title: string;
  body: string;
}[] = [
  {
    title: "Bán hàng",
    body: "Giỏ, giảm giá, tách bill, điểm, in / gửi bill Zalo.",
  },
  {
    title: "Kho",
    body: "Nhập kiểm nhận, xuất duyệt/soạn, tồn khả dụng.",
  },
  {
    title: "Tài chính",
    body: "Quỹ, công nợ, ca — sổ local, chưa nối ngân hàng.",
  },
  {
    title: "Chi nhánh",
    body: "Chọn chi nhánh hoặc Tất cả; catalog & khách dùng chung.",
  },
] as const;

/** Shared scannable blocks for industry POS landings. */
export const POS_WHO_CARDS: readonly {
  title: string;
  body: string;
  emoji: string;
}[] = [
  {
    title: "Chủ cửa hàng",
    body: "Xem doanh thu, công nợ, tồn sắp hết — không cần Excel cuối ngày.",
    emoji: "🏪",
  },
  {
    title: "Thu ngân / barista",
    body: "Bán nhanh trên quầy, mở–đóng ca, in hoặc gửi bill cho khách.",
    emoji: "🧾",
  },
  {
    title: "Thủ kho",
    body: "Kiểm nhận nhập, xuất có bước duyệt — tồn khớp kệ hơn sổ tay.",
    emoji: "📦",
  },
] as const;

export const POS_LIMIT_CARDS: readonly {
  title: string;
  body: string;
  emoji: string;
}[] = [
  {
    title: "Chạy trên trình duyệt",
    body: "Demo local-first (IndexedDB). Sync cloud / app native: theo lộ trình gói.",
    emoji: "💻",
  },
  {
    title: "Chưa nối ngân hàng thật",
    body: "QR và sổ quỹ là demo. Đối soát NH thật khi triển khai có credential.",
    emoji: "🏦",
  },
  {
    title: "Không phải CRM dịch vụ",
    body: "Lịch liệu trình spa/salon nằm ở CRM · Care — không gộp vào POS.",
    emoji: "✂️",
  },
] as const;

export const POS_DAY_STEPS: readonly {
  label: string;
  detail: string;
}[] = [
  { label: "Mở ca", detail: "Nhân viên vào ca, ghi quỹ đầu ca." },
  { label: "Bán", detail: "Thêm món/SKU, thu tiền mặt · CK · QR." },
  { label: "Kho", detail: "Nhập kiểm nhận hoặc xuất khi cần." },
  { label: "Đóng ca", detail: "Đối chiếu quỹ, xem đơn và tồn trong ngày." },
] as const;

export function isPosSlug(value: string): value is PosSlug {
  return (POS_SLUGS as readonly string[]).includes(value);
}

export function posBySlug(slug: PosSlug): PosCatalogEntry {
  return POS_CATALOG.find((item) => item.slug === slug)!;
}

export function pricingHashForPosSlug(slug: PosSlug): string {
  const entry = posBySlug(slug);
  return `#pos-${entry.pricingId}`;
}
