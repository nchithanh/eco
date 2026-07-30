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
    "Xin chào! Em là Dolphin Assist của Dolphin Software. Anh/chị đang cần tư vấn website, app, AI Agent, hay chuyển đổi AI cho doanh nghiệp?",
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
        "Anh/chị bấm nút Zalo bên cạnh để chat trực tiếp với Dolphin, hoặc gọi 0779 937 633. Em cũng có thể ghi nhận nhu cầu trước nếu anh/chị mô tả ngắn tại đây.",
    },
    {
      keywords: ["báo giá", "quote", "giá", "chi phí", "ngân sách"],
      reply:
        "Để báo giá sát, Dolphin cần mục tiêu, deadline và phạm vi sơ bộ. Anh/chị mô tả ngắn ở đây, hoặc mở form “Nhận báo giá” trên trang — hoặc chat Zalo để trao đổi nhanh.",
    },
    {
      keywords: ["agent", "chatbot", "ai agent", "theo yêu cầu"],
      reply:
        "AI Agent theo yêu cầu gắn nghiệp vụ thật (CRM, Zalo, lịch…) — không chatbot kịch bản bán sẵn. Xem trang /custom-agent/ hoặc nói em biết khâu anh/chị muốn tự động hóa.",
    },
    {
      keywords: ["chuyển đổi", "transform", "doanh nghiệp", "lộ trình"],
      reply:
        "Chuyển đổi AI là gắn AI vào lõi vận hành, không chỉ phát tài khoản ChatGPT. Xem /ai-transform/ hoặc mô tả quy trình đang ngốn người/tiền — em gợi ý hướng tiếp theo.",
    },
    {
      keywords: ["web", "website", "app", "mobile", "dự án"],
      reply:
        "Dolphin làm web/app theo bài toán kinh doanh: rõ phạm vi, bàn giao dễ vận hành. Nói em biết sản phẩm anh/chị cần (landing, booking, nội bộ…) để định hướng bước đầu.",
    },
    {
      keywords: ["xin chào", "hello", "hi", "chào"],
      reply:
        "Chào anh/chị! Em sẵn sàng. Cứ nói nhu cầu — báo giá, AI Agent, chuyển đổi AI, hay liên hệ Zalo.",
    },
  ],
  fallback:
    "Em đã nhận tin. Để trả lời sát hơn, anh/chị nói rõ: website/app, AI Agent, chuyển đổi AI, hay muốn gặp người Dolphin qua Zalo?",
  escalateHint: "Cần người thật? Bấm nút Zalo bên cạnh widget.",
};

const en: AiChatCopy = {
  agentName: "Dolphin Assist",
  online: "Online",
  justNow: "just now",
  open: "Open Dolphin Assist chat",
  close: "Close Dolphin Assist chat",
  closePanel: "Close",
  zalo: "Chat on Zalo",
  messenger: "Chat on Messenger",
  toastWelcome: "Hi! I’m Dolphin Assist — here when you need a hand.",
  toastContinue:
    "Looking for web, a custom AI agent, or enterprise AI transformation? Message me here or on Zalo.",
  dismissToasts: "Dismiss tips",
  placeholder: "Type a message…",
  send: "Send",
  greeting:
    "Hello! I’m Dolphin Assist from Dolphin Software. Need help with a website/app, a custom AI agent, or enterprise AI transformation?",
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
        "Tap the Zalo button beside this widget to chat with Dolphin directly, or call 0779 937 633. You can also leave a short brief here first.",
    },
    {
      keywords: ["quote", "price", "cost", "budget", "pricing"],
      reply:
        "For a solid quote we need goals, timing, and rough scope. Share a short note here, use “Get a quote” on the site, or hop on Zalo.",
    },
    {
      keywords: ["agent", "chatbot", "custom"],
      reply:
        "Custom AI agents attach to real workflows (CRM, chat, calendar) — not off-the-shelf script bots. See /custom-agent/ or tell me which job you want automated.",
    },
    {
      keywords: ["transform", "transformation", "enterprise", "roadmap"],
      reply:
        "AI transformation means wiring AI into operations — not handing out ChatGPT seats. See /ai-transform/ or describe the process burning time/money.",
    },
    {
      keywords: ["web", "website", "app", "mobile", "project"],
      reply:
        "Dolphin builds web/apps around business outcomes with clear scope and operable handover. Tell me what you need (landing, booking, internal tool…) to start.",
    },
    {
      keywords: ["hello", "hi", "hey"],
      reply:
        "Hi! I’m ready — ask about quotes, AI agents, transformation, or Zalo contact.",
    },
  ],
  fallback:
    "Got it. To help better, tell me if you need website/app, an AI agent, AI transformation, or a human on Zalo.",
  escalateHint: "Need a human? Tap the Zalo button next to this widget.",
};

const de: AiChatCopy = {
  ...en,
  online: "Online",
  justNow: "gerade eben",
  open: "Dolphin Assist Chat öffnen",
  close: "Dolphin Assist Chat schließen",
  closePanel: "Schließen",
  zalo: "Zalo-Chat",
  messenger: "Messenger-Chat",
  toastWelcome:
    "Hallo! Ich bin Dolphin Assist — melde dich, wenn du Hilfe brauchst.",
  toastContinue:
    "Web, Custom AI Agent oder KI-Transformation? Schreib mir hier oder auf Zalo.",
  dismissToasts: "Hinweise ausblenden",
  placeholder: "Nachricht eingeben…",
  send: "Senden",
  greeting:
    "Hallo! Ich bin Dolphin Assist von Dolphin Software. Brauchst du Website/App, einen Custom AI Agent oder KI-Transformation?",
  suggestions: [
    "Projektangebot",
    "Custom AI Agent",
    "KI-Transformation",
    "Mensch auf Zalo",
  ],
  escalateHint: "Mensch nötig? Tippe auf den Zalo-Button neben dem Widget.",
};

const ja: AiChatCopy = {
  ...en,
  online: "オンライン",
  justNow: "たった今",
  open: "Dolphin Assist チャットを開く",
  close: "Dolphin Assist チャットを閉じる",
  closePanel: "閉じる",
  zalo: "Zaloでチャット",
  messenger: "Messengerでチャット",
  toastWelcome:
    "こんにちは！Dolphin Assist です。必要なときすぐサポートします。",
  toastContinue:
    "Web・カスタム AI Agent・企業の AI 変革のご相談は、こちらか Zalo へ。",
  dismissToasts: "ヒントを閉じる",
  placeholder: "メッセージを入力…",
  send: "送信",
  greeting:
    "こんにちは！Dolphin Software の Dolphin Assist です。Web/アプリ、カスタム AI Agent、企業の AI 変革のどれをご相談ですか？",
  suggestions: [
    "見積もり",
    "カスタム AI Agent",
    "AI 変革",
    "Zaloで人と話す",
  ],
  escalateHint: "人と話したい場合は、横の Zalo ボタンを押してください。",
};

const zh: AiChatCopy = {
  ...en,
  online: "在线",
  justNow: "刚刚",
  open: "打开 Dolphin Assist 对话",
  close: "关闭 Dolphin Assist 对话",
  closePanel: "关闭",
  zalo: "用 Zalo 聊天",
  messenger: "用 Messenger 聊天",
  toastWelcome: "你好！我是 Dolphin Assist — 需要时随时找我。",
  toastContinue: "网站、按需 AI Agent 或企业 AI 转型？在这里留言，或通过 Zalo。",
  dismissToasts: "关闭提示",
  placeholder: "输入消息…",
  send: "发送",
  greeting:
    "你好！我是 Dolphin Software 的 Dolphin Assist。你想咨询网站/应用、按需 AI Agent，还是企业 AI 转型？",
  suggestions: ["项目报价", "按需 AI Agent", "AI 转型", "用 Zalo 找人工"],
  escalateHint: "需要人工？点按旁边的 Zalo 按钮。",
};

export const aiChatCopy: Record<Locale, AiChatCopy> = {
  vi,
  en,
  de,
  ja,
  zh,
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
