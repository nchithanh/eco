/** Official Dolphin SaaS / combo prices for MA Dance quote. */

export const QUOTE_SCHEMA = "dolphin-quote-ma-dance/v2";
export const QUOTE_STORAGE_KEY = "dolphin-quote-ma-dance-20260914c";
export const QUOTE_SOURCE = "/demo/bao-gia-crm-nhay/";
export const QUOTE_SOT = "products/saas/dolphin_edu/context/quotes/ma-dance.md";

export const CLIENT_NAME = "MA Dance";
export const PREPARED_BY = "Nguyễn Chí Thành";
export const PREPARED_PHONE = "0779937633";
export const DEFAULT_QUOTE_DATE = "2026-09-14";

export const MONTHLY = {
  crm: 500_000,
  care: 1_000_000,
  ops: 1_000_000,
  intelligence: 2_000_000,
} as const;

export const ONCE = {
  landing: 1_500_000,
  website: 4_500_000,
  paymentOnline: 2_000_000,
  tasks: 2_000_000,
  bookingRoom: 1_000_000,
  ecom: 4_500_000,
  portal: 3_000_000,
} as const;

export type ComboId =
  | "crm-base-12"
  | "crm-care-6"
  | "crm-care-12"
  | "crm-ops-6"
  | "full-growth-6"
  | "full-growth-12";

export type ComboProduct = "crm" | "care" | "ops";

export type Combo = {
  id: ComboId;
  name: string;
  products: readonly ComboProduct[];
  months: 6 | 12;
  price: number;
  support: string;
  /** Gift full website (4.5tr). CRM Base 12 uses Base12Support instead. */
  giftWebsite: boolean;
};

export const COMBOS: readonly Combo[] = [
  {
    id: "crm-base-12",
    name: "CRM Base 12",
    products: ["crm"],
    months: 12,
    price: 5_400_000,
    support: "Tặng Landing Page hoặc giảm 50% Website (còn 2.250.000đ)",
    giftWebsite: false,
  },
  {
    id: "crm-care-6",
    name: "CRM + Care 6",
    products: ["crm", "care"],
    months: 6,
    price: 9_000_000,
    support: "Tặng Website (4.500.000đ)",
    giftWebsite: true,
  },
  {
    id: "crm-care-12",
    name: "CRM + Care 12",
    products: ["crm", "care"],
    months: 12,
    price: 16_200_000,
    support: "Tặng Website (4.500.000đ)",
    giftWebsite: true,
  },
  {
    id: "crm-ops-6",
    name: "CRM + Ops 6",
    products: ["crm", "ops"],
    months: 6,
    price: 9_000_000,
    support: "Tặng Website (4.500.000đ)",
    giftWebsite: true,
  },
  {
    id: "full-growth-6",
    name: "Full Growth 6",
    products: ["crm", "care", "ops"],
    months: 6,
    price: 15_000_000,
    support: "Tặng Website (4.500.000đ)",
    giftWebsite: true,
  },
  {
    id: "full-growth-12",
    name: "Full Growth 12",
    products: ["crm", "care", "ops"],
    months: 12,
    price: 27_000_000,
    support: "Tặng Website (4.500.000đ)",
    giftWebsite: true,
  },
] as const;

export const PRODUCT_LABEL: Record<ComboProduct, string> = {
  crm: "CRM",
  care: "Dolphin Care (chatbot AI trả lời khách hàng trên website / Zalo / Messenger)",
  ops: "Dolphin Ops",
};

export type CareStandaloneTerm = "6" | "12";

export type CareStandalonePlan = {
  term: CareStandaloneTerm;
  months: 6 | 12;
  list: number;
  price: number;
  discountPct: number;
  avgMonthly: number;
};

/** Dolphin Care thuê lẻ — giá chính thức Dolphin. */
export const CARE_STANDALONE: readonly CareStandalonePlan[] = [
  {
    term: "6",
    months: 6,
    list: 6_000_000,
    price: 5_100_000,
    discountPct: 15,
    avgMonthly: 850_000,
  },
  {
    term: "12",
    months: 12,
    list: 12_000_000,
    price: 9_600_000,
    discountPct: 20,
    avgMonthly: 800_000,
  },
] as const;

export function comboIncludesCare(combo: Combo): boolean {
  return combo.products.includes("care");
}

export function getCareStandalonePlan(term: CareStandaloneTerm): CareStandalonePlan {
  const plan = CARE_STANDALONE.find((item) => item.term === term);
  if (!plan) throw new Error(`Unknown Care standalone term: ${term}`);
  return plan;
}

export type ExtraKey =
  | "landing"
  | "website"
  | "tasks"
  | "booking-room"
  | "ecom"
  | "portal"
  | "payment-online";

export type Extra = {
  key: ExtraKey;
  title: string;
  scope: string;
  once: number;
  /** Reference bucket for “Khoảng giá” table — not selectable. */
  rangeKey?: string;
};

/** MA-mapped extras with locked prices (count toward prepaid total). */
export const EXTRAS: readonly Extra[] = [
  {
    key: "landing",
    title: "Landing Page",
    scope: "Trang giới thiệu một trang — one-time",
    once: ONCE.landing,
  },
  {
    key: "website",
    title: "Website doanh nghiệp",
    scope: "Website giới thiệu trung tâm — one-time (khác website bán hàng)",
    once: ONCE.website,
  },
  {
    key: "tasks",
    title: "Quản lý tác vụ",
    scope: "Giao việc / hạn / trạng thái — outsource tính năng đơn giản",
    once: ONCE.tasks,
    rangeKey: "integrate-simple",
  },
  {
    key: "booking-room",
    title: "Đặt phòng tập (thuê studio)",
    scope: "Khác gán phòng lớp — outsource tính năng đơn giản",
    once: ONCE.bookingRoom,
    rangeKey: "integrate-simple",
  },
  {
    key: "ecom",
    title: "Website bán hàng cơ bản",
    scope: "Catalog / giỏ — website one-time (khác website doanh nghiệp được tặng)",
    once: ONCE.ecom,
    rangeKey: "integrate-advanced",
  },
  {
    key: "portal",
    title: "Website theo dõi dành cho học viên & giáo viên",
    scope: "Đăng nhập theo dõi lịch / lớp / khóa / hồ sơ — chỉ xem, không thu tiền",
    once: ONCE.portal,
    rangeKey: "integrate-simple",
  },
  {
    key: "payment-online",
    title: "Tích hợp thanh toán online",
    scope: "Cổng thanh toán trên CRM (phí giao dịch cổng — khách trả NCC)",
    once: ONCE.paymentOnline,
    rangeKey: "integrate-simple",
  },
];

export type RangeExtra = {
  key: string;
  title: string;
  range: string;
};

/** Official range buckets — reference only (which priced extras belong where). */
export const RANGE_EXTRAS: readonly RangeExtra[] = [
  {
    key: "integrate-simple",
    title: "Tích hợp tính năng đơn giản (khác mục đã chốt giá ở trên)",
    range: "1.000.000đ – 3.000.000đ",
  },
  {
    key: "integrate-advanced",
    title: "Tích hợp tính năng nâng cao",
    range: "3.000.000đ – 7.000.000đ",
  },
  {
    key: "outsource-app",
    title: "Outsource App",
    range: "10.000.000đ – 50.000.000đ",
  },
  {
    key: "outsource-system",
    title: "Outsource System",
    range: "10.000.000đ – 100.000.000đ",
  },
];

export const CRM_SCOPE: readonly { id: string; title: string; body: string }[] = [
  {
    id: "A1",
    title: "Nền tảng & phân quyền",
    body: "3 chi nhánh · 7 phòng; khóa gắn chi nhánh, phòng linh hoạt; quyền chủ / quản lý / lễ tân / giáo viên (GV không xem học phí & SĐT học viên)",
  },
  {
    id: "A2",
    title: "Khóa học & buổi",
    body: "Thể loại, level, khung giờ, giáo viên, ngày bắt đầu–kết thúc, chi nhánh; lịch tuần cố định; ~8 buổi/tháng; tạo buổi; trạng thái; hủy (HV không mất buổi); đổi giờ/phòng/GV; 1 GV/buổi; không trùng phòng–giờ",
  },
  {
    id: "A3",
    title: "Tuyển sinh / ghi danh",
    body: "Cửa sổ ghi danh; nhận giữa khóa theo level (Begin ~buổi 4–5; Inter buổi lẻ; Advance buổi 1 & 5); sĩ số 10–15; lớp đầy → khung giờ khác; nhiều khóa; đổi lớp cuối tháng / bảo lưu chuyển lớp; nghỉ → giữ hồ sơ",
  },
  {
    id: "A4",
    title: "Học viên & phụ huynh",
    body: "Hồ sơ + ngày sinh, email; trẻ em: điểm danh theo HV, liên hệ & thanh toán theo PH",
  },
  {
    id: "A5",
    title: "Giáo viên",
    body: "Tên, SĐT, email, phong cách dạy, lớp, chi nhánh; nghỉ → giáo viên dự phòng",
  },
  {
    id: "A6",
    title: "Gói buổi & trừ buổi",
    body: "Thu theo gói; điểm danh xong → trừ 1 buổi; không học bù; nghỉ không bảo lưu → mất buổi, không hoàn",
  },
  {
    id: "A7",
    title: "Thu học phí & công nợ",
    body: "Đóng 1 lần hoặc từng đợt; tiền mặt / CK + ảnh bill; cọc gói 6 & 12 tháng; nợ → vẫn vào lớp, thu sau; báo cáo theo chi nhánh",
  },
  {
    id: "A8",
    title: "Bảo lưu",
    body: "≥3 tháng tặng BL / gói ngắn mua BL lẻ; đã đóng HP + nghỉ dài; QL duyệt trên CRM; hạn gói + buổi còn; hết hạn không học → trừ buổi; lễ/hủy không tính hạn BL; giữ chỗ sĩ số; quay lại hỗ trợ đổi GV/lịch",
  },
  {
    id: "A9",
    title: "Điểm danh tay",
    body: "Có mặt / vắng trên CRM (lễ tân / quản lý)",
  },
  {
    id: "A10",
    title: "Điểm danh QR",
    body: "Điểm danh bằng mã QR",
  },
  {
    id: "A11",
    title: "Lịch / Google Calendar",
    body: "Đồng bộ lịch HV/GV với Google Calendar trung tâm. Tài khoản Google của MA; phí Google (nếu có) ngoài giá Dolphin.",
  },
  {
    id: "A12",
    title: "Promotion / voucher",
    body: "Quản lý chương trình khuyến mãi, mã giảm giá / voucher",
  },
  {
    id: "A13",
    title: "Chăm sóc & thông báo",
    body: "Chúc mừng sinh nhật HV; gửi tin Zalo / email hàng loạt cho HV hoặc PH. Phần mềm trong CRM. Phí Zalo OA, tin lẻ/ZNS, SMTP — khách trả NCC.",
  },
  {
    id: "A14",
    title: "Theo dõi doanh thu",
    body: "Theo dõi và báo cáo doanh thu theo chi nhánh / kỳ (đã thu, còn nợ, theo gói)",
  },
];

export function getCombo(id: ComboId): Combo {
  const combo = COMBOS.find((item) => item.id === id);
  if (!combo) throw new Error(`Unknown combo: ${id}`);
  return combo;
}

export function saasListPrice(combo: Combo): number {
  return combo.products.reduce((sum, product) => sum + MONTHLY[product] * combo.months, 0);
}

export function formatVnd(amount: number): string {
  return `${new Intl.NumberFormat("vi-VN").format(amount)}đ`;
}

export type ExtraSelection = Record<ExtraKey, boolean>;

export type QuoteInput = {
  comboId: ComboId;
  /** Thuê lẻ Care — chỉ khi gói combo chưa gồm Care. */
  careStandalone: CareStandaloneTerm | null;
  intelligence: boolean;
  extras: ExtraSelection;
};

export type QuoteExtraLine = {
  key: ExtraKey;
  title: string;
  list: number;
  due: number;
  gift?: number;
  giftLabel?: string;
};

export type QuoteCareLine = {
  term: CareStandaloneTerm;
  title: string;
  list: number;
  due: number;
  gift: number;
  giftLabel: string;
};

export type QuoteTotals = {
  combo: Combo;
  saasList: number;
  careLine: QuoteCareLine | null;
  intelligenceDue: number;
  extraLines: QuoteExtraLine[];
  extrasOnce: number;
  list: number;
  /** Subtotal due before volume discount. */
  prepaidBeforeVolume: number;
  volumeDiscount: number;
  volumeDiscountLabel: string;
  prepaid: number;
};

/** Volume discount when prepaid (before this discount) exceeds this amount. */
export const VOLUME_DISCOUNT_THRESHOLD = 15_000_000;
export const VOLUME_DISCOUNT_RATE = 0.1;

export const EMPTY_EXTRAS: ExtraSelection = {
  landing: false,
  website: false,
  tasks: false,
  "booking-room": false,
  ecom: false,
  portal: false,
  "payment-online": false,
};

export function comboGiftLines(combo: Combo): string[] {
  if (combo.id === "crm-base-12") {
    return [
      `Tặng Landing Page (${formatVnd(ONCE.landing)}) — khi chọn hạng mục Landing bên dưới`,
      `Giảm 50% Website doanh nghiệp (trả ${formatVnd(ONCE.website / 2)}) — khi chọn Website bên dưới`,
    ];
  }
  if (combo.giftWebsite) {
    return [
      `Tặng Website doanh nghiệp (${formatVnd(ONCE.website)}) — khi chọn hạng mục Website bên dưới`,
    ];
  }
  return [];
}

export function extraPriceHint(combo: Combo, key: ExtraKey): string {
  if (key === "landing") {
    return combo.id === "crm-base-12" ? "Tặng (CRM Base 12)" : formatVnd(ONCE.landing);
  }
  if (key === "website") {
    if (combo.giftWebsite) return "Tặng (gói combo)";
    if (combo.id === "crm-base-12") return formatVnd(ONCE.website / 2);
    return formatVnd(ONCE.website);
  }
  const extra = EXTRAS.find((item) => item.key === key);
  return extra ? formatVnd(extra.once) : "";
}

export function extraLineDue(combo: Combo, key: ExtraKey, selected: boolean): QuoteExtraLine {
  const extra = EXTRAS.find((item) => item.key === key);
  if (!extra || !selected) {
    return { key, title: extra?.title ?? key, list: 0, due: 0 };
  }

  if (key === "landing") {
    if (combo.id === "crm-base-12") {
      return {
        key,
        title: extra.title,
        list: ONCE.landing,
        due: 0,
        gift: ONCE.landing,
        giftLabel: "Tặng Landing Page",
      };
    }
    return { key, title: extra.title, list: ONCE.landing, due: ONCE.landing };
  }

  if (key === "website") {
    if (combo.giftWebsite) {
      return {
        key,
        title: extra.title,
        list: ONCE.website,
        due: 0,
        gift: ONCE.website,
        giftLabel: "Tặng Website doanh nghiệp",
      };
    }
    if (combo.id === "crm-base-12") {
      return {
        key,
        title: extra.title,
        list: ONCE.website,
        due: ONCE.website / 2,
        gift: ONCE.website / 2,
        giftLabel: "Giảm 50% Website doanh nghiệp",
      };
    }
    return { key, title: extra.title, list: ONCE.website, due: ONCE.website };
  }

  return { key, title: extra.title, list: extra.once, due: extra.once };
}

export function careStandaloneLine(term: CareStandaloneTerm): QuoteCareLine {
  const plan = getCareStandalonePlan(term);
  return {
    term,
    title: `Dolphin Care thuê lẻ (${plan.months} tháng)`,
    list: plan.list,
    due: plan.price,
    gift: plan.list - plan.price,
    giftLabel: `Ưu đãi thuê lẻ Dolphin Care (−${plan.discountPct}%)`,
  };
}

export function computeQuoteTotals(input: QuoteInput): QuoteTotals {
  const combo = getCombo(input.comboId);
  const saasList = saasListPrice(combo);

  const careLine =
    input.careStandalone && !comboIncludesCare(combo)
      ? careStandaloneLine(input.careStandalone)
      : null;

  const extraLines = EXTRAS.filter((extra) => input.extras[extra.key]).map((extra) =>
    extraLineDue(combo, extra.key, true),
  );

  const intelligenceDue = input.intelligence
    ? MONTHLY.intelligence * combo.months
    : 0;

  const extrasList = extraLines.reduce((sum, line) => sum + line.list, 0);
  const extrasDue = extraLines.reduce((sum, line) => sum + line.due, 0);
  const careList = careLine?.list ?? 0;
  const careDue = careLine?.due ?? 0;

  const list = saasList + careList + extrasList + intelligenceDue;
  const prepaidBeforeVolume = combo.price + careDue + extrasDue + intelligenceDue;
  const volumeDiscount =
    prepaidBeforeVolume > VOLUME_DISCOUNT_THRESHOLD
      ? Math.round(prepaidBeforeVolume * VOLUME_DISCOUNT_RATE)
      : 0;
  const prepaid = prepaidBeforeVolume - volumeDiscount;

  return {
    combo,
    saasList,
    careLine,
    intelligenceDue,
    extraLines,
    extrasOnce: extrasDue,
    list,
    prepaidBeforeVolume,
    volumeDiscount,
    volumeDiscountLabel:
      volumeDiscount > 0
        ? `Giảm ${VOLUME_DISCOUNT_RATE * 100}% khi thanh toán trước trên ${formatVnd(VOLUME_DISCOUNT_THRESHOLD)}`
        : "",
    prepaid,
  };
}

export function extraKeysSelected(extras: ExtraSelection): ExtraKey[] {
  return (Object.keys(extras) as ExtraKey[]).filter((key) => extras[key]);
}
