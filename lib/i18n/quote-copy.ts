import type { Locale } from "@/lib/i18n/types";
import type {
  AiFeatureId,
  DesignId,
  FeatureId,
  PagesId,
  ProjectType,
  ScaleId,
  TimelineId,
} from "@/lib/quote-estimator";

export type QuoteCopy = {
  title: string;
  disclaimer: string;
  estimateLabel: string;
  estimateUnit: string;
  estimateEmpty: string;
  close: string;
  scopeGroup: string;
  optionsGroup: string;
  projectType: string;
  projectTypes: Record<ProjectType, { label: string }>;
  scale: string;
  scales: Record<ScaleId, string>;
  pages: string;
  pagesOptions: Record<PagesId, string>;
  features: string;
  featureOptions: Record<FeatureId, string>;
  aiFeatures: string;
  aiFeatureOptions: Record<AiFeatureId, string>;
  design: string;
  designOptions: Record<DesignId, string>;
  timeline: string;
  timelineOptions: Record<TimelineId, string>;
  contactTitle: string;
  name: string;
  contact: string;
  note: string;
  notePlaceholder: string;
  submit: string;
  sent: string;
  errors: { name: string; contact: string };
  mailSubject: string;
  mailBodyName: string;
  mailBodyContact: string;
  mailBodyEstimate: string;
  mailBodyChoices: string;
  mailBodyNote: string;
};

const vi: QuoteCopy = {
  title: "Báo giá tham khảo",
  disclaimer:
    "Giá tham khảo — báo giá chính thức sau khi chốt scope, timeline và yêu cầu.",
  estimateLabel: "Ước tính",
  estimateUnit: "triệu VNĐ",
  estimateEmpty: "Chọn hạng mục để xem khoảng giá",
  close: "Đóng",
  scopeGroup: "Phạm vi",
  optionsGroup: "Tùy chọn",
  projectType: "Loại dự án",
  projectTypes: {
    web: { label: "Website" },
    ai: { label: "AI / Agent" },
    both: { label: "Website + AI" },
  },
  scale: "Quy mô",
  scales: {
    landing: "Landing / giới thiệu",
    smb: "SMB nhiều trang",
    complex: "App / hệ thống",
  },
  pages: "Số trang / màn hình",
  pagesOptions: {
    p5: "≤ 5",
    p15: "6 – 15",
    p15p: "15+",
  },
  features: "Tính năng",
  featureOptions: {
    cms: "CMS / quản trị",
    booking: "Booking / đặt lịch",
    payment: "Thanh toán online",
    i18n: "Đa ngôn ngữ",
    admin: "Admin / dashboard",
    api: "API / Zalo",
  },
  aiFeatures: "Hạng mục AI",
  aiFeatureOptions: {
    faq: "Chatbot FAQ",
    agent: "Agent theo quy trình",
    mcp: "MCP / tool calling",
    opsDash: "Dashboard vận hành AI",
  },
  design: "Thiết kế",
  designOptions: {
    template: "Chỉnh từ template",
    custom: "UI custom",
    system: "Design system",
  },
  timeline: "Timeline",
  timelineOptions: {
    normal: "Bình thường",
    rush: "Gấp (< 4 tuần)",
  },
  contactTitle: "Gửi yêu cầu báo giá",
  name: "Họ tên",
  contact: "Email hoặc Zalo",
  note: "Ghi chú",
  notePlaceholder: "Nhu cầu, deadline, ngân sách…",
  submit: "Gửi yêu cầu báo giá",
  sent: "Đã mở email — hoàn tất gửi từ hộp thư của bạn.",
  errors: {
    name: "Vui lòng nhập họ tên",
    contact: "Vui lòng nhập email hoặc Zalo",
  },
  mailSubject: "[Dolphin Software] Yêu cầu báo giá —",
  mailBodyName: "Họ tên",
  mailBodyContact: "Liên hệ",
  mailBodyEstimate: "Ước tính tham khảo",
  mailBodyChoices: "Lựa chọn",
  mailBodyNote: "Ghi chú",
};

const en: QuoteCopy = {
  title: "Reference quote",
  disclaimer:
    "Indicative only — formal quote after we align on scope, timeline, and needs.",
  estimateLabel: "Estimate",
  estimateUnit: "million VND",
  estimateEmpty: "Pick options to see a price range",
  close: "Close",
  scopeGroup: "Scope",
  optionsGroup: "Options",
  projectType: "Project type",
  projectTypes: {
    web: { label: "Website" },
    ai: { label: "AI / Agent" },
    both: { label: "Website + AI" },
  },
  scale: "Scale",
  scales: {
    landing: "Landing / brochure",
    smb: "SMB multi-page",
    complex: "Complex app / system",
  },
  pages: "Pages / screens",
  pagesOptions: {
    p5: "≤ 5",
    p15: "6 – 15",
    p15p: "15+",
  },
  features: "Features",
  featureOptions: {
    cms: "CMS / content admin",
    booking: "Booking / scheduling",
    payment: "Online payments",
    i18n: "Multi-language",
    admin: "Admin / dashboard",
    api: "API / Zalo",
  },
  aiFeatures: "AI options",
  aiFeatureOptions: {
    faq: "FAQ chatbot",
    agent: "Process agent",
    mcp: "MCP / tool calling",
    opsDash: "AI ops dashboard",
  },
  design: "Design",
  designOptions: {
    template: "Template-based",
    custom: "Custom UI",
    system: "Design system",
  },
  timeline: "Timeline",
  timelineOptions: {
    normal: "Standard",
    rush: "Rush (< 4 weeks)",
  },
  contactTitle: "Send a quote request",
  name: "Name",
  contact: "Email or Zalo",
  note: "Notes",
  notePlaceholder: "Needs, deadline, budget…",
  submit: "Send quote request",
  sent: "Email client opened — finish sending from your inbox.",
  errors: {
    name: "Please enter your name",
    contact: "Please enter email or Zalo",
  },
  mailSubject: "[Dolphin Software] Quote request —",
  mailBodyName: "Name",
  mailBodyContact: "Contact",
  mailBodyEstimate: "Reference estimate",
  mailBodyChoices: "Selections",
  mailBodyNote: "Notes",
};

const ja: QuoteCopy = {
  title: "参考見積もり",
  disclaimer:
    "参考値です。正式見積はスコープ・スケジュール・要件確認後に提示します。",
  estimateLabel: "目安",
  estimateUnit: "百万 VND",
  estimateEmpty: "項目を選ぶと金額帯が表示されます",
  close: "閉じる",
  scopeGroup: "スコープ",
  optionsGroup: "オプション",
  projectType: "プロジェクト種別",
  projectTypes: {
    web: { label: "Website" },
    ai: { label: "AI / Agent" },
    both: { label: "Website + AI" },
  },
  scale: "規模",
  scales: {
    landing: "LP / 紹介サイト",
    smb: "SMB 複数ページ",
    complex: "複雑アプリ / システム",
  },
  pages: "ページ / 画面数",
  pagesOptions: {
    p5: "≤ 5",
    p15: "6 – 15",
    p15p: "15+",
  },
  features: "機能",
  featureOptions: {
    cms: "CMS / コンテンツ管理",
    booking: "予約 / スケジュール",
    payment: "オンライン決済",
    i18n: "多言語",
    admin: "管理画面 / ダッシュボード",
    api: "API / Zalo 連携",
  },
  aiFeatures: "AI 項目",
  aiFeatureOptions: {
    faq: "FAQ チャットボット",
    agent: "業務フロー Agent",
    mcp: "MCP / ツール呼び出し",
    opsDash: "AI 運用ダッシュボード",
  },
  design: "デザイン",
  designOptions: {
    template: "テンプレート調整",
    custom: "カスタム UI",
    system: "デザインシステム",
  },
  timeline: "スケジュール",
  timelineOptions: {
    normal: "通常",
    rush: "急ぎ（4週未満）",
  },
  contactTitle: "見積依頼を送る",
  name: "お名前",
  contact: "メールまたは Zalo",
  note: "補足",
  notePlaceholder: "要件・期限・希望予算…",
  submit: "見積依頼を送信",
  sent: "メール作成画面を開きました。送信を完了してください。",
  errors: {
    name: "お名前を入力してください",
    contact: "メールまたは Zalo を入力してください",
  },
  mailSubject: "[Dolphin Software] 見積依頼 —",
  mailBodyName: "お名前",
  mailBodyContact: "連絡先",
  mailBodyEstimate: "参考見積",
  mailBodyChoices: "選択内容",
  mailBodyNote: "補足",
};



export const quoteCopy: Record<Locale, QuoteCopy> = { vi, en, ja };

export function getQuoteCopy(locale: Locale): QuoteCopy {
  return quoteCopy[locale];
}
