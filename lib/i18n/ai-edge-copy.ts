import type { Dictionary, Locale } from "./types";

type AiEdge = Dictionary["aiEdge"];

const vi: AiEdge = {
  eyebrow: "Ops AI",
  badge: "AI capability",
  title: "Website là nền — [[AI]] là lớp tăng tốc",
  support:
    "Chúng tôi làm web & app là chính. Khi cần, gắn thêm chat, automation và agent theo quy trình thật — thực dụng, không sci-fi.",
  items: [
    {
      id: "chat",
      tag: "On-site",
      title: "AI chat & FAQ trên site",
      body: "Trả lời câu hỏi thường gặp, thu lead — gắn vào website đã có.",
    },
    {
      id: "workflow",
      tag: "Automation",
      title: "Workflow & form thông minh",
      body: "Tự động hóa booking, báo giá, routing lead — ít thao tác tay.",
    },
    {
      id: "agent",
      tag: "Integration",
      title: "Agent nối CRM / Zalo",
      body: "Agent theo nghiệp vụ, nối hệ thống đang chạy — đo kết quả được.",
    },
  ],
  ctaTransform: "Chuyển đổi AI doanh nghiệp",
  ctaAgent: "Xem Dolphin Care",
};

const en: AiEdge = {
  eyebrow: "Ops AI",
  badge: "Automate",
  title: "Website as foundation — [[AI]] is the smart layer on top",
  support:
    "Web & app are Dolphin Software's core. When genuinely useful, we add chat, automation, and process agents — real-world, not science fiction.",
  items: [
    {
      id: "chat",
      tag: "On-site",
      title: "AI chat & FAQ on your website",
      body: "Answer common questions and capture leads right on your live website.",
    },
    {
      id: "workflow",
      tag: "Automation",
      title: "Smart workflow & auto-forms",
      body: "Automate booking, quotes, and lead routing — reduce manual steps.",
    },
    {
      id: "agent",
      tag: "Integration",
      title: "Agent connecting CRM / Zalo",
      body: "Business agent tied into real workflow, connects live systems — measurable results.",
    },
  ],
  ctaTransform: "Enterprise AI transformation",
  ctaAgent: "See Dolphin Care",
};

const ja: AiEdge = {
  eyebrow: "Ops AI",
  badge: "Automate",
  title: "Webサイトが基盤 — [[AI]]はその上のスマートレイヤー",
  support:
    "Web & アプリがDolphin Softwareの核心です。実際に有益な場合、チャット、自動化、プロセスエージェントを追加します — 現実的で、SF小説ではありません。",
  items: [
    {
      id: "chat",
      tag: "On-site",
      title: "御社のWebサイト上のAIチャット & FAQ",
      body: "よくある質問に回答し、稼働中のWebサイトで直接リードを獲得。",
    },
    {
      id: "workflow",
      tag: "Automation",
      title: "スマートワークフロー & 自動フォーム",
      body: "予約、見積り、リード振り分けを自動化 — 手動ステップを削減。",
    },
    {
      id: "agent",
      tag: "Integration",
      title: "CRM / Zalo連携エージェント",
      body: "ビジネスエージェントが実際のワークフローと統合、ライブシステムに接続 — 測定可能な結果。",
    },
  ],
  ctaTransform: "企業AI変革",
  ctaAgent: "Dolphin Careを見る",
};



export const aiEdgeByLocale: Record<Locale, AiEdge> = {
  vi,
  en,
  ja,
};
