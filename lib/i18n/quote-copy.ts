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
  projectType: string;
  projectTypes: Record<ProjectType, { label: string; hint: string }>;
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
    "Khoảng giá chỉ mang tính tham khảo. Báo giá chính thức sau khi trao đổi phạm vi, timeline và ràng buộc kỹ thuật.",
  estimateLabel: "Ước tính",
  estimateUnit: "triệu VNĐ",
  estimateEmpty: "Chọn hạng mục để xem khoảng giá",
  close: "Đóng",
  projectType: "Loại dự án",
  projectTypes: {
    web: { label: "Website", hint: "Tham khảo ~2–10 triệu" },
    ai: { label: "AI / Agent", hint: "Tham khảo ~10–30 triệu" },
    both: { label: "Website + AI", hint: "Kết hợp cả hai" },
  },
  scale: "Quy mô",
  scales: {
    landing: "Landing / giới thiệu",
    smb: "SMB nhiều trang",
    complex: "App / hệ thống phức tạp",
  },
  pages: "Số trang / màn hình",
  pagesOptions: {
    p5: "≤ 5",
    p15: "6 – 15",
    p15p: "15+",
  },
  features: "Tính năng (chọn nhiều)",
  featureOptions: {
    cms: "CMS / quản trị nội dung",
    booking: "Booking / đặt lịch",
    payment: "Thanh toán online",
    i18n: "Đa ngôn ngữ",
    admin: "Admin / dashboard",
    api: "Tích hợp API / Zalo",
  },
  aiFeatures: "Hạng mục AI (nếu có)",
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
  note: "Ghi chú thêm",
  notePlaceholder: "Mô tả ngắn nhu cầu, deadline, ngân sách mong muốn…",
  submit: "Gửi yêu cầu báo giá",
  sent: "Đã mở email — hoàn tất gửi từ hộp thư của bạn.",
  errors: {
    name: "Vui lòng nhập họ tên",
    contact: "Vui lòng nhập email hoặc Zalo",
  },
  mailSubject: "[Dolphin Kick] Yêu cầu báo giá —",
  mailBodyName: "Họ tên",
  mailBodyContact: "Liên hệ",
  mailBodyEstimate: "Ước tính tham khảo",
  mailBodyChoices: "Lựa chọn",
  mailBodyNote: "Ghi chú",
};

const en: QuoteCopy = {
  title: "Reference quote",
  disclaimer:
    "This range is indicative only. A formal quote follows after we align on scope, timeline, and technical constraints.",
  estimateLabel: "Estimate",
  estimateUnit: "million VND",
  estimateEmpty: "Pick options to see a price range",
  close: "Close",
  projectType: "Project type",
  projectTypes: {
    web: { label: "Website", hint: "Reference ~2–10M VND" },
    ai: { label: "AI / Agent", hint: "Reference ~10–30M VND" },
    both: { label: "Website + AI", hint: "Combined scope" },
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
  features: "Features (multi-select)",
  featureOptions: {
    cms: "CMS / content admin",
    booking: "Booking / scheduling",
    payment: "Online payments",
    i18n: "Multi-language",
    admin: "Admin / dashboard",
    api: "API / Zalo integrations",
  },
  aiFeatures: "AI options (if applicable)",
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
  notePlaceholder: "Short needs, deadline, target budget…",
  submit: "Send quote request",
  sent: "Email client opened — finish sending from your inbox.",
  errors: {
    name: "Please enter your name",
    contact: "Please enter email or Zalo",
  },
  mailSubject: "[Dolphin Kick] Quote request —",
  mailBodyName: "Name",
  mailBodyContact: "Contact",
  mailBodyEstimate: "Reference estimate",
  mailBodyChoices: "Selections",
  mailBodyNote: "Notes",
};

const ja: QuoteCopy = {
  title: "参考見積もり",
  disclaimer:
    "表示金額は参考値です。正式見積はスコープ・スケジュール・技術要件の確認後に提示します。",
  estimateLabel: "目安",
  estimateUnit: "百万 VND",
  estimateEmpty: "項目を選ぶと金額帯が表示されます",
  close: "閉じる",
  projectType: "プロジェクト種別",
  projectTypes: {
    web: { label: "Website", hint: "目安 ~200万〜1,000万 VND" },
    ai: { label: "AI / Agent", hint: "目安 ~1,000万〜3,000万 VND" },
    both: { label: "Website + AI", hint: "両方を含む" },
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
  features: "機能（複数選択可）",
  featureOptions: {
    cms: "CMS / コンテンツ管理",
    booking: "予約 / スケジュール",
    payment: "オンライン決済",
    i18n: "多言語",
    admin: "管理画面 / ダッシュボード",
    api: "API / Zalo 連携",
  },
  aiFeatures: "AI 項目（該当時）",
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
  notePlaceholder: "要件・期限・希望予算など…",
  submit: "見積依頼を送信",
  sent: "メール作成画面を開きました。送信を完了してください。",
  errors: {
    name: "お名前を入力してください",
    contact: "メールまたは Zalo を入力してください",
  },
  mailSubject: "[Dolphin Kick] 見積依頼 —",
  mailBodyName: "お名前",
  mailBodyContact: "連絡先",
  mailBodyEstimate: "参考見積",
  mailBodyChoices: "選択内容",
  mailBodyNote: "補足",
};

const de: QuoteCopy = {
  title: "Orientierungsangebot",
  disclaimer:
    "Der Betrag ist nur eine Orientierung. Ein verbindliches Angebot folgt nach Abstimmung von Scope, Zeitplan und Technik.",
  estimateLabel: "Schätzung",
  estimateUnit: "Mio. VND",
  estimateEmpty: "Optionen wählen, um eine Spanne zu sehen",
  close: "Schließen",
  projectType: "Projekttyp",
  projectTypes: {
    web: { label: "Website", hint: "Richtwert ~2–10 Mio. VND" },
    ai: { label: "AI / Agent", hint: "Richtwert ~10–30 Mio. VND" },
    both: { label: "Website + AI", hint: "Kombinierter Scope" },
  },
  scale: "Umfang",
  scales: {
    landing: "Landing / Broschüre",
    smb: "SMB Mehrseiten",
    complex: "Komplexe App / System",
  },
  pages: "Seiten / Screens",
  pagesOptions: {
    p5: "≤ 5",
    p15: "6 – 15",
    p15p: "15+",
  },
  features: "Funktionen (Mehrfachauswahl)",
  featureOptions: {
    cms: "CMS / Content-Admin",
    booking: "Booking / Termine",
    payment: "Online-Zahlung",
    i18n: "Mehrsprachig",
    admin: "Admin / Dashboard",
    api: "API / Zalo-Integration",
  },
  aiFeatures: "AI-Optionen (falls zutreffend)",
  aiFeatureOptions: {
    faq: "FAQ-Chatbot",
    agent: "Prozess-Agent",
    mcp: "MCP / Tool Calling",
    opsDash: "AI-Ops-Dashboard",
  },
  design: "Design",
  designOptions: {
    template: "Template-basiert",
    custom: "Custom UI",
    system: "Design System",
  },
  timeline: "Zeitplan",
  timelineOptions: {
    normal: "Standard",
    rush: "Eilig (< 4 Wochen)",
  },
  contactTitle: "Angebotsanfrage senden",
  name: "Name",
  contact: "E-Mail oder Zalo",
  note: "Notizen",
  notePlaceholder: "Bedarf, Deadline, Wunschbudget…",
  submit: "Anfrage senden",
  sent: "E-Mail-Programm geöffnet — bitte Absenden abschließen.",
  errors: {
    name: "Bitte Namen eingeben",
    contact: "Bitte E-Mail oder Zalo eingeben",
  },
  mailSubject: "[Dolphin Kick] Angebotsanfrage —",
  mailBodyName: "Name",
  mailBodyContact: "Kontakt",
  mailBodyEstimate: "Orientierungsschätzung",
  mailBodyChoices: "Auswahl",
  mailBodyNote: "Notizen",
};

const zh: QuoteCopy = {
  title: "参考报价",
  disclaimer:
    "金额区间仅供参考。正式报价将在对齐范围、时间表与技术约束后给出。",
  estimateLabel: "估算",
  estimateUnit: "百万越南盾",
  estimateEmpty: "选择选项以查看价格区间",
  close: "关闭",
  projectType: "项目类型",
  projectTypes: {
    web: { label: "网站", hint: "参考约 2–10 百万越南盾" },
    ai: { label: "AI / Agent", hint: "参考约 10–30 百万越南盾" },
    both: { label: "网站 + AI", hint: "合并范围" },
  },
  scale: "规模",
  scales: {
    landing: "落地页 / 介绍站",
    smb: "中小企业多页站",
    complex: "复杂应用 / 系统",
  },
  pages: "页面 / 屏幕数",
  pagesOptions: {
    p5: "≤ 5",
    p15: "6 – 15",
    p15p: "15+",
  },
  features: "功能（可多选）",
  featureOptions: {
    cms: "CMS / 内容管理",
    booking: "预约 / 排期",
    payment: "在线支付",
    i18n: "多语言",
    admin: "后台 / 仪表盘",
    api: "API / Zalo 集成",
  },
  aiFeatures: "AI 选项（如适用）",
  aiFeatureOptions: {
    faq: "FAQ 聊天机器人",
    agent: "流程 Agent",
    mcp: "MCP / 工具调用",
    opsDash: "AI 运营仪表盘",
  },
  design: "设计",
  designOptions: {
    template: "基于模板调整",
    custom: "定制 UI",
    system: "设计系统",
  },
  timeline: "时间表",
  timelineOptions: {
    normal: "常规",
    rush: "加急（< 4 周）",
  },
  contactTitle: "发送报价请求",
  name: "姓名",
  contact: "邮箱或 Zalo",
  note: "备注",
  notePlaceholder: "简要需求、截止日期、目标预算…",
  submit: "发送报价请求",
  sent: "已打开邮件客户端——请在收件箱完成发送。",
  errors: {
    name: "请输入姓名",
    contact: "请输入邮箱或 Zalo",
  },
  mailSubject: "[Dolphin Kick] 报价请求 —",
  mailBodyName: "姓名",
  mailBodyContact: "联系方式",
  mailBodyEstimate: "参考估算",
  mailBodyChoices: "选项",
  mailBodyNote: "备注",
};

export const quoteCopy: Record<Locale, QuoteCopy> = { vi, en, ja, de, zh };

export function getQuoteCopy(locale: Locale): QuoteCopy {
  return quoteCopy[locale];
}
