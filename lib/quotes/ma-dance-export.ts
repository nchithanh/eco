import {
  CLIENT_NAME,
  CARE_STANDALONE,
  COMBOS,
  CRM_SCOPE,
  EXTRAS,
  MONTHLY,
  ONCE,
  PRODUCT_LABEL,
  comboIncludesCare,
  QUOTE_SCHEMA,
  QUOTE_SOURCE,
  QUOTE_SOT,
  QUOTE_STORAGE_KEY,
  type ComboId,
  type ExtraSelection,
  type QuoteInput,
  computeQuoteTotals,
  extraKeysSelected,
  extraLineDue,
  formatVnd,
  getCombo,
} from "./ma-dance-pricing";

export type MaDanceQuoteState = QuoteInput & {
  quoteDate: string;
  notes: string;
};

type LegacyQuoteState = Partial<MaDanceQuoteState> & {
  base12Support?: "landing" | "website50" | null;
  includeWebsite?: boolean;
  rangeExtras?: Record<string, boolean>;
};

export function buildMaDanceQuoteJson(state: MaDanceQuoteState) {
  const totals = computeQuoteTotals(state);
  const combo = getCombo(state.comboId);

  return {
    schema: QUOTE_SCHEMA,
    client: CLIENT_NAME,
    quoteDate: state.quoteDate,
    notes: state.notes,
    currency: "VND",
    exportedAt: new Date().toISOString(),
    source: QUOTE_SOURCE,
    sot: QUOTE_SOT,
    pricing: {
      monthly: MONTHLY,
      once: ONCE,
      combos: COMBOS.map((item) => ({
        id: item.id,
        name: item.name,
        products: item.products,
        months: item.months,
        price: item.price,
        support: item.support,
        giftWebsite: item.giftWebsite,
      })),
      careStandalone: CARE_STANDALONE,
    },
    selection: {
      comboId: state.comboId,
      comboName: combo.name,
      months: combo.months,
      products: combo.products.map((p) => PRODUCT_LABEL[p]),
      careStandalone:
        comboIncludesCare(combo) || !state.careStandalone ? null : state.careStandalone,
      intelligence: state.intelligence,
      extras: EXTRAS.filter((e) => state.extras[e.key]).map((e) => {
        const line = extraLineDue(combo, e.key, true);
        return {
          key: e.key,
          title: e.title,
          list: line.list,
          due: line.due,
          gift: line.gift ?? null,
          giftLabel: line.giftLabel ?? null,
        };
      }),
    },
    totals: {
      saasList: totals.saasList,
      comboPrice: combo.price,
      careLine: totals.careLine,
      intelligenceDue: totals.intelligenceDue,
      extrasOnce: totals.extrasOnce,
      listBeforeGift: totals.list,
      prepaidBeforeVolume: totals.prepaidBeforeVolume,
      volumeDiscount: totals.volumeDiscount,
      volumeDiscountLabel: totals.volumeDiscountLabel || null,
      prepaidDue: totals.prepaid,
      prepaidDueFormatted: formatVnd(totals.prepaid),
      extraLines: totals.extraLines,
    },
    crmScope: CRM_SCOPE,
    policies: [
      "CRM đơn lẻ chỉ bán gói 12 tháng.",
      "Gói 6 tháng chỉ khi kèm Dolphin Care hoặc Dolphin Ops.",
      "Từ CRM + Care 6 trở đi: tặng Website doanh nghiệp (4.500.000đ) khi chọn hạng mục Website.",
      "CRM Base 12: tặng Landing hoặc giảm 50% Website — khi chọn hạng mục tương ứng.",
      "Thuê lẻ Dolphin Care (6/12 tháng) — chỉ khi gói combo chưa gồm Care.",
      "Thanh toán trước trên 15.000.000đ: giảm thêm 10% trên tổng thanh toán (sau ưu đãi web / Care).",
      "Không dùng thử miễn phí.",
      "Phí Zalo OA, ZNS, SMTP, cổng thanh toán, Google… không gồm trong giá Dolphin.",
    ],
    notIncluded: [
      "Domain / tên miền — đăng ký & gia hạn",
      "Zalo OA — gói OA, tin lẻ, ZNS",
      "Fanpage / Meta — phí nền tảng / quảng cáo",
      "Email / SMTP",
      "Google Calendar / Workspace",
      "Phí giao dịch cổng thanh toán",
    ],
  };
}

export function defaultMaDanceQuoteState(): MaDanceQuoteState {
  return {
    comboId: "crm-base-12",
    careStandalone: null,
    intelligence: false,
    extras: {
      landing: false,
      website: true,
      tasks: false,
      "booking-room": false,
      ecom: false,
      portal: true,
      "payment-online": false,
    },
    quoteDate: new Date().toISOString().slice(0, 10),
    notes: "",
  };
}

function migrateLegacyState(data: LegacyQuoteState): MaDanceQuoteState {
  const base = defaultMaDanceQuoteState();
  const extras: ExtraSelection = { ...base.extras, ...data.extras };

  if (data.includeWebsite && !extras.website) {
    extras.website = true;
  }
  if (data.base12Support === "landing" && !extras.landing) {
    extras.landing = true;
  }
  if (data.base12Support === "website50" && !extras.website) {
    extras.website = true;
  }

  const comboId = (data.comboId as ComboId | undefined) ?? base.comboId;
  const combo = getCombo(comboId);
  let careStandalone = data.careStandalone ?? null;
  if (comboIncludesCare(combo)) careStandalone = null;

  return {
    comboId,
    careStandalone,
    intelligence: data.intelligence ?? base.intelligence,
    extras,
    quoteDate: data.quoteDate ?? base.quoteDate,
    notes: data.notes ?? base.notes,
  };
}

export function loadMaDanceQuoteState(): MaDanceQuoteState {
  if (typeof window === "undefined") return defaultMaDanceQuoteState();
  try {
    const raw = localStorage.getItem(QUOTE_STORAGE_KEY);
    if (!raw) return defaultMaDanceQuoteState();
    return migrateLegacyState(JSON.parse(raw) as LegacyQuoteState);
  } catch {
    return defaultMaDanceQuoteState();
  }
}

export function saveMaDanceQuoteState(state: MaDanceQuoteState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(state));
}

export { extraKeysSelected, type ComboId, type ExtraSelection };
