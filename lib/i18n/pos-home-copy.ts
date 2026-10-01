import type { Locale } from "@/lib/i18n/types";

export type PosHomeCopy = {
  eyebrow: string;
  title: string;
  support: string;
  cta: string;
  ctaSecondary: string;
  trustMicro: string;
  features: { title: string; body: string }[];
  /** Which POS industry demo powers the stage mock */
  stageSlug: "cafe";
};

const vi: PosHomeCopy = {
  eyebrow: "Dolphin POS",
  title: "Một nền tảng POS cho mọi cửa hàng bán hàng",
  support:
    "Hóa đơn, quầy, kho và kênh bán trên một bảng giá năm — tách CRM dịch vụ (spa/salon). Cafe, trà sữa, pet, fashion và HKD.",
  cta: "Xem Dolphin POS",
  ctaSecondary: "Nhận báo giá",
  trustMicro: "POS · bán hàng · 3 gói năm · runtime app TODO",
  stageSlug: "cafe",
  features: [
    {
      title: "Bán tại quầy",
      body: "Ghi đơn, size/topping hoặc SKU, thu tiền — giảm sót so với giấy và chat lúc peak.",
    },
    {
      title: "Kho & nguyên liệu",
      body: "Hạt cafe, topping, hạt mèo hay size/màu — tồn theo phạm vi gói, thấy lệch sớm hơn Excel.",
    },
    {
      title: "Kênh & gói năm",
      body: "Web cơ bản đến MXH/sàn theo gói. Cơ Bản · Chuyên nghiệp · Toàn Diện — không trial miễn phí.",
    },
  ],
};

const en: PosHomeCopy = {
  eyebrow: "Dolphin POS",
  title: "One POS platform for every retail workflow",
  support:
    "Checkout, inventory, and sales channels on yearly plans — separate from service CRM (spa/salon). Cafe, bubble tea, pet, fashion, and small retail.",
  cta: "Explore Dolphin POS",
  ctaSecondary: "Get a quote",
  trustMicro: "POS · retail · 3 yearly plans · app runtime TODO",
  stageSlug: "cafe",
  features: [
    {
      title: "Counter sales",
      body: "Take orders, variants, and payments — fewer mistakes than paper or chat at peak hours.",
    },
    {
      title: "Stock & ingredients",
      body: "Beans, toppings, pet food, or size/color — track stock by plan, spot gaps sooner than spreadsheets.",
    },
    {
      title: "Channels & yearly plans",
      body: "Basic web through social and marketplaces by plan. Basic · Pro · Full — no free trial.",
    },
  ],
};

export function getPosHomeCopy(locale: Locale): PosHomeCopy {
  if (locale === "en") return en;
  return vi;
}
