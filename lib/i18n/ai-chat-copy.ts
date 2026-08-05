import type { Locale } from "@/lib/i18n/types";

export type AiChatRule = {
  keywords: string[];
  reply: string;
};

export type AiChatCopy = {
  agentName: string;
  online: string;
  justNow: string;
  open: string;
  close: string;
  closePanel: string;
  dismissWidget: string;
  zalo: string;
  messenger: string;
  toastWelcome: string;
  toastContinue: string;
  dismissToasts: string;
  placeholder: string;
  send: string;
  greeting: string;
  suggestions: string[];
  rules: AiChatRule[];
  fallback: string;
  escalateHint: string;
};

const vi: AiChatCopy = {
  agentName: "Dolphin Assist",
  online: "Đang online",
  justNow: "bây giờ",
  open: "Mở chat Dolphin Assist",
  close: "Đóng chat Dolphin Assist",
  closePanel: "Đóng",
  dismissWidget: "Ẩn trợ lý chat",
  zalo: "Chat Zalo",
  messenger: "Chat Messenger",
  toastWelcome:
    "Chào anh/chị! Em là Dolphin Assist — sẵn sàng hỗ trợ khi anh/chị cần.",
  toastContinue:
    "Cần tư vấn web, AI Agent hay chuyển đổi AI doanh nghiệp? Nhắn em tại đây hoặc qua Zalo.",
  dismissToasts: "Ẩn gợi ý",
  placeholder: "Nhập tin nhắn…",
  send: "Gửi",
  greeting:
    "Xin chào! 👋 Em là **Dolphin Assist** của Dolphin Software. Anh/chị đang cần tư vấn **website**, app, **Dolphin Care**, hay chuyển đổi AI cho doanh nghiệp?",
  suggestions: [
    "Báo giá dự án",
    "AI Agent theo yêu cầu",
    "Chuyển đổi AI",
    "Chat Zalo với người thật",
  ],
  rules: [
    {
      keywords: ["zalo", "người thật", "gọi", "phone", "điện thoại"],
      reply:
        "Anh/chị bấm nút **Zalo** bên cạnh để chat trực tiếp với Dolphin, hoặc gọi **0779 937 633** 🤝 Em cũng có thể ghi nhận nhu cầu trước nếu anh/chị mô tả ngắn tại đây.",
    },
    {
      keywords: ["báo giá", "quote", "giá", "chi phí", "ngân sách"],
      reply:
        "Để **báo giá** sát, Dolphin cần mục tiêu, deadline và phạm vi sơ bộ 💡 Anh/chị mô tả ngắn ở đây, mở form “Nhận báo giá” trên trang — hoặc chat **Zalo** để trao đổi nhanh.",
    },
    {
      keywords: ["agent", "chatbot", "ai agent", "theo yêu cầu", "dolphin care", "care"],
      reply:
        "**Dolphin Care** / AI agent gắn nghiệp vụ thật (CRM, Zalo, lịch…) nằm trong lộ trình chuyển đổi AI — không chatbot kịch bản bán sẵn ✅ Xem /dolphin-care/ hoặc /ai-transform/, hoặc nói em biết khâu anh/chị muốn tự động hóa.",
    },
    {
      keywords: ["chuyển đổi", "transform", "doanh nghiệp", "lộ trình"],
      reply:
        "**Chuyển đổi AI** là gắn AI vào lõi vận hành, không chỉ phát tài khoản ChatGPT 💡 Xem /ai-transform/ hoặc mô tả quy trình đang ngốn người/tiền — em gợi ý hướng tiếp theo.",
    },
    {
      keywords: ["web", "website", "app", "mobile", "dự án"],
      reply:
        "Dolphin làm **website**/app theo bài toán kinh doanh: rõ phạm vi, bàn giao dễ vận hành 👍 Nói em biết sản phẩm anh/chị cần (landing, booking, nội bộ…) để định hướng bước đầu.",
    },
    {
      keywords: ["xin chào", "hello", "hi", "chào"],
      reply:
        "Chào anh/chị! 👋 Em sẵn sàng. Cứ nói nhu cầu — **báo giá**, AI Agent, chuyển đổi AI, hay liên hệ **Zalo**.",
    },
  ],
  fallback:
    "Em đã nhận tin 👍 Để trả lời sát hơn, anh/chị nói rõ: **website**/app, AI Agent, chuyển đổi AI, hay muốn gặp người Dolphin qua **Zalo**?",
  escalateHint: "Cần người thật? Bấm nút **Zalo** bên cạnh widget.",
};

const en: AiChatCopy = {
  agentName: "Dolphin Assist",
  online: "Online",
  justNow: "just now",
  open: "Open Dolphin Assist chat",
  close: "Close Dolphin Assist chat",
  closePanel: "Close",
  dismissWidget: "Dismiss chat assistant",
  zalo: "Chat on Zalo",
  messenger: "Chat on Messenger",
  toastWelcome: "Hi! I’m Dolphin Assist — here when you need a hand.",
  toastContinue:
    "Looking for web, a custom AI agent, or enterprise AI transformation? Message me here or on Zalo.",
  dismissToasts: "Dismiss tips",
  placeholder: "Type a message…",
  send: "Send",
  greeting:
    "Hello! 👋 I’m **Dolphin Assist** from Dolphin Software. Need help with a **website**/app, **Dolphin Care**, or enterprise AI transformation?",
  suggestions: [
    "Project quote",
    "Custom AI agent",
    "AI transformation",
    "Talk to a human on Zalo",
  ],
  rules: [
    {
      keywords: ["zalo", "human", "call", "phone", "person"],
      reply:
        "Tap the **Zalo** button beside this widget to chat with Dolphin directly, or call **0779 937 633** 🤝 You can also leave a short brief here first.",
    },
    {
      keywords: ["quote", "price", "cost", "budget", "pricing"],
      reply:
        "For a solid **quote** we need goals, timing, and rough scope 💡 Share a short note here, use “Get a quote” on the site, or hop on **Zalo**.",
    },
    {
      keywords: ["agent", "chatbot", "custom", "dolphin care", "care"],
      reply:
        "**Dolphin Care** / custom AI agents attach to real workflows (CRM, chat, calendar) as part of the AI transformation roadmap — not off-the-shelf script bots ✅ See /dolphin-care/ or /ai-transform/, or tell me which job you want automated.",
    },
    {
      keywords: ["transform", "transformation", "enterprise", "roadmap"],
      reply:
        "**AI transformation** means wiring AI into operations — not handing out ChatGPT seats 💡 See /ai-transform/ or describe the process burning time/money.",
    },
    {
      keywords: ["web", "website", "app", "mobile", "project"],
      reply:
        "Dolphin builds **websites**/apps around business outcomes with clear scope and operable handover 👍 Tell me what you need (landing, booking, internal tool…) to start.",
    },
    {
      keywords: ["hello", "hi", "hey"],
      reply:
        "Hi! 👋 I’m ready — ask about **quotes**, AI agents, transformation, or **Zalo** contact.",
    },
  ],
  fallback:
    "Got it 👍 To help better, tell me if you need **website**/app, an AI agent, AI transformation, or a human on **Zalo**.",
  escalateHint: "Need a human? Tap the **Zalo** button next to this widget.",
};


const ja: AiChatCopy = {
  agentName: "Dolphin Assist",
  online: "オンライン",
  justNow: "たった今",
  open: "Dolphin Assist チャットを開く",
  close: "Dolphin Assist チャットを閉じる",
  closePanel: "閉じる",
  dismissWidget: "チャットアシスタントを非表示",
  zalo: "Zaloでチャット",
  messenger: "Messengerでチャット",
  toastWelcome:
    "こんにちは！Dolphin Assist です。必要なときすぐサポートいたします。",
  toastContinue:
    "Web・カスタム AI Agent・企業の AI 変革のご相談は、こちらまたは Zalo へどうぞ。",
  dismissToasts: "ヒントを閉じる",
  placeholder: "メッセージを入力…",
  send: "送信",
  greeting:
    "こんにちは！👋 Dolphin Software の **Dolphin Assist** です。**Web**/アプリ、**Dolphin Care**、または企業の AI 変革について、どのようなご相談でしょうか？",
  suggestions: [
    "見積もり依頼",
    "カスタム AI Agent",
    "AI 変革",
    "Zaloで担当者と話す",
  ],
  rules: [
    {
      keywords: ["zalo", "人", "電話", "担当", "連絡"],
      reply:
        "ウィジェット横の **Zalo** ボタンから Dolphin へ直接チャットいただくか、**0779 937 633** までお電話ください 🤝 こちらで簡単にご要件を伺うことも可能です。",
    },
    {
      keywords: ["見積", "料金", "価格", "費用", "予算"],
      reply:
        "正確な**見積もり**には、目的・期限・概要が必要です 💡 こちらで簡単にご説明いただくか、サイトの「見積もり依頼」フォームをご利用ください。または **Zalo** で直接ご相談も可能です。",
    },
    {
      keywords: ["agent", "エージェント", "チャットボット", "カスタム", "dolphin care", "care"],
      reply:
        "**Dolphin Care** / 業務に組み込むカスタム AI Agent（CRM・Zalo・カレンダーなど）は AI 変革ロードマップの一部です ✅ /dolphin-care/ または /ai-transform/ をご覧いただくか、自動化したい業務をお聞かせください。",
    },
    {
      keywords: ["変革", "transformation", "企業", "ロードマップ"],
      reply:
        "**AI 変革**とは、ChatGPT のアカウントを配るだけではなく、AI を運用の中核に組み込むことです 💡 /ai-transform/ をご覧いただくか、時間やコストがかかっている業務をお聞かせください。",
    },
    {
      keywords: ["web", "website", "サイト", "アプリ", "app", "プロジェクト"],
      reply:
        "Dolphin はビジネス成果に沿って **Web**/アプリを構築します 👍 明確な範囲と運用しやすい引き渡しを重視しています。必要なもの（LP・予約・社内ツールなど）をお聞かせください。",
    },
    {
      keywords: ["こんにちは", "hello", "hi", "はじめまして"],
      reply:
        "こんにちは！👋 ご用件をお聞かせください — **見積もり**、AI Agent、変革ロードマップ、または **Zalo** での担当者連絡など。",
    },
  ],
  fallback:
    "承知いたしました 👍 より適切にご案内するため、**Web**/アプリ、AI Agent、AI 変革、または **Zalo** での担当者連絡のうち、どれに近いかお聞かせいただけますか？",
  escalateHint: "担当者と直接お話しされたい場合は、ウィジェット横の **Zalo** ボタンをご利用ください。",
};


export const aiChatCopy: Record<Locale, AiChatCopy> = {
  vi,
  en,
  ja,
};

export function getAiChatCopy(locale: Locale): AiChatCopy {
  return aiChatCopy[locale];
}

export function matchAiChatReply(input: string, copy: AiChatCopy): string {
  const q = input.trim().toLowerCase();
  if (!q) return copy.fallback;
  for (const rule of copy.rules) {
    if (rule.keywords.some((k) => q.includes(k.toLowerCase()))) {
      return rule.reply;
    }
  }
  return copy.fallback;
}
