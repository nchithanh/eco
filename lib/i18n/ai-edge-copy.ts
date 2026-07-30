import type { Dictionary, Locale } from "./types";

type AiEdge = Dictionary["aiEdge"];

const vi: AiEdge = {
  eyebrow: "Lợi thế cộng thêm",
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
  ctaAgent: "AI Agent theo yêu cầu",
};

const en: AiEdge = {
  eyebrow: "Added edge",
  badge: "AI capability",
  title: "Websites first — [[AI]] as the smart layer",
  support:
    "Web & apps are our core. When it helps, we add chat, automation, and process agents — practical, not sci-fi.",
  items: [
    {
      id: "chat",
      tag: "On-site",
      title: "AI chat & FAQ on your site",
      body: "Answer common questions and capture leads on the site you already run.",
    },
    {
      id: "workflow",
      tag: "Automation",
      title: "Smart workflows & forms",
      body: "Automate booking, quotes, and lead routing — fewer manual steps.",
    },
    {
      id: "agent",
      tag: "Integration",
      title: "Agents wired to CRM / Zalo",
      body: "Business agents on real process, connected to live systems — measurable outcomes.",
    },
  ],
  ctaTransform: "Enterprise AI transformation",
  ctaAgent: "Custom AI agents",
};

const ja: AiEdge = {
  eyebrow: "差別化ポイント",
  badge: "AI capability",
  title: "Websiteが本体 — [[AI]]は加速レイヤー",
  support:
    "Web・アプリが中心です。必要ならチャット、自動化、業務エージェントを実務向けに追加 — 派手な演出ではなく運用に効く形で。",
  items: [
    {
      id: "chat",
      tag: "On-site",
      title: "サイト内AIチャット / FAQ",
      body: "よくある質問への回答とリード獲得を、既存サイトに組み込み。",
    },
    {
      id: "workflow",
      tag: "Automation",
      title: "スマートワークフロー",
      body: "予約・見積・リード振り分けを自動化 — 手作業を削減。",
    },
    {
      id: "agent",
      tag: "Integration",
      title: "CRM / Zalo連携エージェント",
      body: "実プロセスに沿ったエージェントを既存システムと接続 — 成果を測定。",
    },
  ],
  ctaTransform: "企業のAI変革",
  ctaAgent: "カスタムAI Agent",
};

const de: AiEdge = {
  eyebrow: "Zusatzvorteil",
  badge: "AI capability",
  title: "Website zuerst — [[AI]] als smarte Schicht",
  support:
    "Web & Apps sind unser Kern. Bei Bedarf Chat, Automation und Prozess-Agents — praxisnah, nicht Sci-Fi.",
  items: [
    {
      id: "chat",
      tag: "On-site",
      title: "AI-Chat & FAQ auf der Site",
      body: "Häufige Fragen beantworten und Leads auf der bestehenden Website sammeln.",
    },
    {
      id: "workflow",
      tag: "Automation",
      title: "Smarte Workflows & Formulare",
      body: "Booking, Angebote, Lead-Routing automatisieren — weniger Handarbeit.",
    },
    {
      id: "agent",
      tag: "Integration",
      title: "Agents an CRM / Zalo",
      body: "Business-Agents auf echten Prozessen, angebunden an laufende Systeme.",
    },
  ],
  ctaTransform: "Unternehmens-AI-Transformation",
  ctaAgent: "Individuelle AI-Agents",
};

const zh: AiEdge = {
  eyebrow: "附加优势",
  badge: "AI capability",
  title: "网站为本 — [[AI]] 为加速层",
  support:
    "我们以网站与应用为核心。需要时叠加聊天、自动化与业务 Agent — 务实可落地，而非科幻展示。",
  items: [
    {
      id: "chat",
      tag: "On-site",
      title: "站内 AI 聊天 / FAQ",
      body: "在现有网站上回答常见问题并获取线索。",
    },
    {
      id: "workflow",
      tag: "Automation",
      title: "智能流程与表单",
      body: "自动化预约、报价与线索分配 — 减少手工操作。",
    },
    {
      id: "agent",
      tag: "Integration",
      title: "对接 CRM / Zalo 的 Agent",
      body: "按真实业务流程连接现有系统 — 成果可衡量。",
    },
  ],
  ctaTransform: "企业 AI 转型",
  ctaAgent: "定制 AI Agent",
};

export const aiEdgeByLocale: Record<Locale, AiEdge> = {
  vi,
  en,
  ja,
  de,
  zh,
};
