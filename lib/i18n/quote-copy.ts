import type { Locale } from "@/lib/i18n/types";
import type { ExtraKey } from "@/lib/quotes/ma-dance-pricing";

/** Public quote modal extras (general visitor — not MA-specific). */
export const QUOTE_PUBLIC_EXTRA_KEYS = [
  "landing",
  "website",
  "payment-online",
] as const satisfies readonly ExtraKey[];

export type QuotePublicExtraKey = (typeof QUOTE_PUBLIC_EXTRA_KEYS)[number];

export type QuoteCopy = {
  title: string;
  disclaimer: string;
  estimateLabel: string;
  estimateListLabel: string;
  volumeDiscountHint: string;
  close: string;
  comboGroup: string;
  comboHint: string;
  monthsLabel: string;
  giftTitle: string;
  careGroup: string;
  careHint: string;
  careNone: string;
  careTermLabel: (months: 6 | 12) => string;
  extrasGroup: string;
  extrasHint: string;
  extraLabels: Record<QuotePublicExtraKey, { title: string; scope: string }>;
  intelligenceGroup: string;
  intelligenceHint: string;
  intelligenceLabel: string;
  perMonth: string;
  contactTitle: string;
  name: string;
  contact: string;
  note: string;
  notePlaceholder: string;
  submit: string;
  sent: string;
  sendError: string;
  errors: { name: string; contact: string };
  policyLinkLabel: string;
};

const vi: QuoteCopy = {
  title: "Báo giá CRM · AI · Web",
  disclaimer:
    "Theo chính sách giá Dolphin 2026 — tham khảo; báo giá chính thức sau khi chốt ngành dịch vụ và phạm vi.",
  estimateLabel: "Tạm tính thanh toán trước",
  estimateListLabel: "Niêm yết trước ưu đãi",
  volumeDiscountHint: "Đã gồm giảm khối lượng nếu đủ điều kiện",
  close: "Đóng",
  comboGroup: "Gói combo",
  comboHint:
    "Chọn một gói. CRM đơn lẻ chỉ 12 tháng; gói 6 tháng chỉ khi kèm Care hoặc Ops. Không dùng thử miễn phí.",
  monthsLabel: "tháng",
  giftTitle: "Quyền lợi web của gói",
  careGroup: "Dolphin Care thuê lẻ (tuỳ chọn)",
  careHint:
    "Chatbot AI trên website / Zalo / Messenger. Chỉ khi combo chưa gồm Care — không tặng Website.",
  careNone: "Không thêm",
  careTermLabel: (months) => `${months} tháng`,
  extrasGroup: "Website / Landing & tích hợp",
  extrasHint:
    "Tick hạng mục cần triển khai. Giá tặng / giảm theo gói combo đã chọn (như phiếu báo giá CRM).",
  extraLabels: {
    landing: {
      title: "Landing Page",
      scope: "Một trang giới thiệu — one-time",
    },
    website: {
      title: "Website doanh nghiệp",
      scope: "Website giới thiệu DN — one-time",
    },
    "payment-online": {
      title: "Tích hợp thanh toán online",
      scope: "Cổng thanh toán (phí giao dịch — khách trả NCC)",
    },
  },
  intelligenceGroup: "Add-on",
  intelligenceHint: "Chỉ khi đã có gói có CRM — theo kỳ hạn gói đã chọn.",
  intelligenceLabel: "Dolphin Intelligence",
  perMonth: "/tháng",
  contactTitle: "Gửi yêu cầu báo giá",
  name: "Họ tên",
  contact: "Email hoặc Zalo",
  note: "Ghi chú",
  notePlaceholder: "Ngành dịch vụ, chỗ nghẽn, deadline…",
  submit: "Gửi yêu cầu báo giá",
  sent: "Đã nhận yêu cầu — mình sẽ liên hệ sớm.",
  sendError: "Gửi chưa thành công. Thử lại hoặc Zalo trực tiếp.",
  errors: {
    name: "Vui lòng nhập họ tên",
    contact: "Vui lòng nhập email hoặc Zalo",
  },
  policyLinkLabel: "Xem chính sách giá 2026",
};

const en: QuoteCopy = {
  title: "CRM · AI · Web quote",
  disclaimer:
    "Per Dolphin 2026 pricing — indicative; formal quote after we align on vertical and scope.",
  estimateLabel: "Prepaid estimate",
  estimateListLabel: "List before discounts",
  volumeDiscountHint: "Includes volume discount when applicable",
  close: "Close",
  comboGroup: "Combo packages",
  comboHint:
    "Pick one package. CRM alone is 12 months only; 6-month terms require Care or Ops. No free trial.",
  monthsLabel: "months",
  giftTitle: "Web rights with this package",
  careGroup: "Standalone Dolphin Care (optional)",
  careHint:
    "AI chatbot on website / Zalo / Messenger. Only when the combo has no Care — no website gift.",
  careNone: "None",
  careTermLabel: (months) => `${months} months`,
  extrasGroup: "Website / Landing & integrations",
  extrasHint:
    "Tick what you want to deploy. Gift / discount follows the selected combo (same rules as CRM quotes).",
  extraLabels: {
    landing: {
      title: "Landing Page",
      scope: "Single intro page — one-time",
    },
    website: {
      title: "Business website",
      scope: "Company brochure site — one-time",
    },
    "payment-online": {
      title: "Online payment integration",
      scope: "Payment gateway (transaction fees paid to provider)",
    },
  },
  intelligenceGroup: "Add-on",
  intelligenceHint: "Only with a CRM package — billed for the selected term.",
  intelligenceLabel: "Dolphin Intelligence",
  perMonth: "/mo",
  contactTitle: "Send a quote request",
  name: "Name",
  contact: "Email or Zalo",
  note: "Notes",
  notePlaceholder: "Service vertical, bottleneck, deadline…",
  submit: "Send quote request",
  sent: "Request received — we’ll get back to you soon.",
  sendError: "Couldn’t send. Try again or message us on Zalo.",
  errors: {
    name: "Please enter your name",
    contact: "Please enter email or Zalo",
  },
  policyLinkLabel: "View 2026 pricing policy",
};

const ja: QuoteCopy = {
  title: "CRM · AI · Web 見積",
  disclaimer:
    "Dolphin 2026料金ポリシー準拠の参考値です。業種・範囲確定後に正式見積をご提示します。",
  estimateLabel: "前払い目安",
  estimateListLabel: "割引前の定価",
  volumeDiscountHint: "条件を満たす場合のボリューム割引を含む",
  close: "閉じる",
  comboGroup: "コンボパッケージ",
  comboHint:
    "1つ選んでください。CRM単体は12ヶ月のみ。6ヶ月はCareまたはOps同梱時のみ。無料トライアルなし。",
  monthsLabel: "ヶ月",
  giftTitle: "本パッケージのWeb特典",
  careGroup: "Dolphin Care単体（任意）",
  careHint:
    "Web / Zalo / MessengerのAIチャット。コンボにCareがない場合のみ — Webサイト贈呈なし。",
  careNone: "追加しない",
  careTermLabel: (months) => `${months}ヶ月`,
  extrasGroup: "Website / Landing・連携",
  extrasHint:
    "導入したい項目にチェック。贈呈 / 割引は選択中のコンボに従います（CRM見積と同じルール）。",
  extraLabels: {
    landing: {
      title: "Landing Page",
      scope: "1ページ紹介 — 一回払い",
    },
    website: {
      title: "企業サイト",
      scope: "会社紹介サイト — 一回払い",
    },
    "payment-online": {
      title: "オンライン決済連携",
      scope: "決済ゲートウェイ（手数料は事業者へ直接）",
    },
  },
  intelligenceGroup: "アドオン",
  intelligenceHint: "CRM付きパッケージがある場合のみ — 選択期間で課金。",
  intelligenceLabel: "Dolphin Intelligence",
  perMonth: "/月",
  contactTitle: "見積依頼を送る",
  name: "お名前",
  contact: "メールまたは Zalo",
  note: "補足",
  notePlaceholder: "業種・ボトルネック・希望期限…",
  submit: "見積依頼を送信",
  sent: "受け付けました。折り返しご連絡します。",
  sendError: "送信に失敗しました。再試行するか Zalo でご連絡ください。",
  errors: {
    name: "お名前を入力してください",
    contact: "メールまたは Zalo を入力してください",
  },
  policyLinkLabel: "2026料金ポリシーを見る",
};

export const quoteCopy: Record<Locale, QuoteCopy> = { vi, en, ja };

export function getQuoteCopy(locale: Locale): QuoteCopy {
  return quoteCopy[locale];
}
