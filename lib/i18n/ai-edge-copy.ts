import type { Dictionary, Locale } from "./types";

type AiEdge = Dictionary["aiEdge"];

const vi: AiEdge = {
  eyebrow: "Dolphin Intelligence",
  badge: "AI Workflow",
  title: "Biến quy trình lặp lại thành [[AI workflow]] chạy tự động",
  support:
    "Dolphin Intelligence kết hợp AI agent, action thực tế, logic điều kiện và human checkpoint — chuỗi bước liên kết, không phải chatbot trả lời từng câu.",
  items: [
    {
      id: "agent",
      tag: "Agent",
      title: "AI Agent theo vai trò",
      body: "Research, Content, SEO, Review… mỗi agent có ngữ cảnh, hướng dẫn và schema — tư duy nhất quán trong workflow.",
    },
    {
      id: "action",
      tag: "Action · Logic",
      title: "Action & logic điều phối",
      body: "Gọi API, CMS, email, publish; cron, nhánh và vòng lặp — agent quyết định, action thực thi đúng lúc.",
    },
    {
      id: "human",
      tag: "Human",
      title: "Human Checkpoint đúng chỗ",
      body: "Con người duyệt topic, SEO hay publish trước khi tiếp tục — kiểm soát được, không phải hộp đen.",
    },
  ],
  ctaPrimary: "Xem Dolphin Intelligence",
  ctaSecondary: "Lộ trình chuyển đổi AI",
  learnMore: "Tìm hiểu thêm",
};

const en: AiEdge = {
  eyebrow: "Dolphin Intelligence",
  badge: "AI Workflow",
  title: "Turn repeatable processes into [[automated AI workflows]]",
  support:
    "Dolphin Intelligence combines role-based AI agents, real-world actions, conditional logic, and human checkpoints — linked steps, not a one-shot chatbot.",
  items: [
    {
      id: "agent",
      tag: "Agent",
      title: "Role-based AI agents",
      body: "Research, Content, SEO, Review… each with context, instructions, and schema — consistent thinking inside the flow.",
    },
    {
      id: "action",
      tag: "Action · Logic",
      title: "Actions & orchestration logic",
      body: "APIs, CMS, email, publish; cron, branches, and loops — agents decide, actions execute on time.",
    },
    {
      id: "human",
      tag: "Human",
      title: "Human checkpoints where it matters",
      body: "People approve topics, SEO, or publish before the flow continues — control without a black box.",
    },
  ],
  ctaPrimary: "See Dolphin Intelligence",
  ctaSecondary: "AI transformation path",
  learnMore: "Learn more",
};

const ja: AiEdge = {
  eyebrow: "Dolphin Intelligence",
  badge: "AI Workflow",
  title: "繰り返し業務を[[自動AIワークフロー]]へ",
  support:
    "Dolphin Intelligence は役割別 AI エージェント、実世界アクション、条件ロジック、ヒューマンチェックポイントを組み合わせます — 単発チャットボットではありません。",
  items: [
    {
      id: "agent",
      tag: "Agent",
      title: "役割別 AI エージェント",
      body: "Research / Content / SEO / Review… コンテキスト・指示・スキーマで一貫した判断。",
    },
    {
      id: "action",
      tag: "Action · Logic",
      title: "アクションとオーケストレーション",
      body: "API・CMS・メール・公開；cron・分岐・ループ — エージェントが決め、アクションが実行。",
    },
    {
      id: "human",
      tag: "Human",
      title: "必要な地点のヒューマンチェック",
      body: "トピック・SEO・公開前に人が承認 — ブラックボックスにせず統制を保つ。",
    },
  ],
  ctaPrimary: "Dolphin Intelligence を見る",
  ctaSecondary: "AI変革のロードマップ",
  learnMore: "詳しく見る",
};

export const aiEdgeByLocale: Record<Locale, AiEdge> = {
  vi,
  en,
  ja,
};
