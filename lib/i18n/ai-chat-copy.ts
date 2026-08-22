import type { Locale } from "@/lib/i18n/types";

export type AiChatRule = {
  keywords: string[];
  reply: string;
};

export type AiChatSuggestionCard = {
  title: string;
  body: string;
  prompt: string;
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
  ask: string;
  greeting: string;
  suggestions: string[];
  /** Cloudflare-style empty state */
  helloMorning: string;
  helloAfternoon: string;
  helloEvening: string;
  welcomeSub: string;
  helpBanner: string;
  helpSupport: string;
  newChat: string;
  chatRecorded: string;
  suggestionCards: AiChatSuggestionCard[];
  rules: AiChatRule[];
  fallback: string;
  /** Follow-up “cho ví dụ” when recent context is Dolphin Care */
  exampleCare: string;
  /** Follow-up example when recent context is Dolphin Ops / Agent CRM */
  exampleOps: string;
  /** First explain of Ops — never mention Care */
  explainOps: string;
  /** Follow-up: “là CRM?” while talking Ops */
  explainOpsCrm: string;
  /** Follow-up: “chi tiết hơn” while talking Ops */
  explainOpsDetail: string;
  /** Only when user explicitly asks Ops vs Care */
  explainOpsVsCare: string;
  /** Follow-up example when recent context is Dolphin Intelligence / workflow */
  exampleIntelligence: string;
  /** Follow-up example when recent context is website / Build */
  exampleWeb: string;
  /** Follow-up example when topic unclear */
  exampleGeneric: string;
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
  placeholder: "Nhập tin nhắn hoặc hỏi Dolphin…",
  send: "Gửi",
  ask: "Ask",
  greeting:
    "Xin chào! 👋 Em là **Dolphin Assist** của Dolphin Software. Anh/chị đang cần tư vấn **website**, **Dolphin Care**, **Dolphin Ops** (vận hành nội bộ), hay lộ trình AI?",
  suggestions: [
    "Báo giá dự án",
    "Dolphin Ops",
    "Dolphin Care",
    "Chat Zalo với người thật",
  ],
  helloMorning: "Chào buổi sáng.",
  helloAfternoon: "Chào buổi chiều.",
  helloEvening: "Chào buổi tối.",
  welcomeSub: "Hôm nay anh/chị cần gì?",
  helpBanner: "Cần hỗ trợ thêm?",
  helpSupport: "Liên hệ",
  newChat: "Hội thoại mới",
  chatRecorded:
    "Hội thoại có thể được ghi nhận để cải thiện dịch vụ. Không gửi thông tin nhạy cảm.",
  suggestionCards: [
    {
      title: "Báo giá dự án",
      body: "Phạm vi, timeline và bước tiếp theo",
      prompt: "Tôi muốn nhận báo giá dự án website/app",
    },
    {
      title: "Thiết kế website",
      body: "Landing, website doanh nghiệp, e-com",
      prompt: "Tôi cần tư vấn thiết kế website cho doanh nghiệp",
    },
    {
      title: "Dolphin Care",
      body: "AI chăm sóc khách trên website",
      prompt: "Giới thiệu Dolphin Care và cách tích hợp",
    },
    {
      title: "Dolphin Ops",
      body: "Agent CRM · nói việc, mở đúng màn",
      prompt: "Giải thích Dolphin Ops",
    },
  ],
  rules: [
    {
      keywords: ["zalo", "người thật", "gọi", "phone", "điện thoại"],
      reply:
        "Anh/chị bấm nút **liên hệ** góc dưới để chat **Zalo**, hoặc gọi **0779 937 633** 🤝 Em cũng có thể ghi nhận nhu cầu trước nếu anh/chị mô tả ngắn tại đây.",
    },
    {
      keywords: ["báo giá", "quote", "giá", "chi phí", "ngân sách"],
      reply:
        "Để **báo giá** sát, Dolphin cần mục tiêu, deadline và phạm vi sơ bộ 💡 Anh/chị mô tả ngắn ở đây, mở form “Nhận báo giá” trên trang — hoặc chat **Zalo** để trao đổi nhanh.",
    },
    {
      keywords: [
        "dolphin ops",
        "agent crm",
        "crm 2.0",
        "vận hành doanh nghiệp",
        "van hanh",
      ],
      reply:
        "**Dolphin Ops** là **Agent CRM** (SaaS): anh chị nói việc cần làm, hệ thống chọn tool và mở đúng màn — lịch, khách, báo cáo ✅ Chat là cửa vào, không phải cả sản phẩm. Xem /dolphin-ops/ hoặc nói em đang vướng khâu nào.",
    },
    {
      keywords: [
        "intelligence",
        "ai workflow",
        "workflow",
        "human checkpoint",
        "human check",
        "daily content",
      ],
      reply:
        "**Dolphin Intelligence** là nền tảng **AI workflow** — nhiều **agent** + **action** + **logic** + **human checkpoint**, không phải chatbot đơn lẻ ✅ Khác **Dolphin Care** (chăm khách trên website). Xem /dolphin-intelligence/ hoặc mô tả quy trình anh/chị muốn tự động hóa.",
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
        "Chào anh/chị! 👋 Em sẵn sàng. Cứ nói nhu cầu — **báo giá**, **website**, **Dolphin Care**, **Dolphin Ops**, hay liên hệ **Zalo**.",
    },
  ],
  fallback:
    "Em đã nhận tin 👍 Để trả lời sát hơn, anh/chị nói rõ: **website**/app, **Dolphin Care**, **Dolphin Ops** (vận hành nội bộ), chuyển đổi AI, hay muốn gặp người Dolphin qua **Zalo**?",
  exampleCare:
    "Ví dụ nhanh 💡 Spa / phòng khám: khách vào web ngoài giờ hỏi “còn lịch chiều mai?”, **Dolphin Care** trả lời theo giờ mở cửa + gợi ý để lại SĐT — sáng staff thấy lead trong báo cáo insight, khỏi trả lời cùng một câu hỏi hàng trăm lần. Shop: hỏi phí ship / size → Care trả theo bảng giá đã nạp, escalate Zalo khi phức tạp. Xem /dolphin-care/ hoặc nhắn **Zalo** để gắn vào site anh/chị.",
  exampleOps:
    "Ví dụ nhanh 💡 Spa: nhân viên nói “Đặt lịch cho Lan thứ Bảy” — **Dolphin Ops** mở **Booking form**, không đi menu CRM. Hỏi “lịch sử Hương” → **Customer 360**. “Doanh thu hôm nay?” → chart. Admin có thể nói “thêm ghi chú bắt buộc” trong tool đã bật. Xem /dolphin-ops/ hoặc nói em đang vướng khâu nào.",
  explainOps:
    "**Dolphin Ops** là **Agent CRM** (SaaS) cho vận hành nội bộ: anh chị nói việc cần làm, hệ thống chọn tool và mở đúng màn — lịch, khách, báo cáo ✅ Chat là cửa vào, không phải cả sản phẩm. Xem /dolphin-ops/ hoặc nói em đang vướng khâu nào.",
  explainOpsCrm:
    "Đúng — **Agent CRM**, không phải CRM học menu rồi Save 👍 Anh chị nói việc; hệ thống mở form, Customer 360 hoặc chart. Admin chỉnh tool đã bật bằng chat. Việc nhạy thì người duyệt. Chi tiết /dolphin-ops/.",
  explainOpsDetail:
    "Mô hình **Dolphin Ops**: ý định → Agent → Business Tool → đúng UI → người xác nhận ở bước nhạy → action 💡 Signature: AI không thay giao diện, nó chọn đúng giao diện. Admin có thể nói để thêm trường, công thức report, quy tắc duyệt trong tool đã bật. Ưu tiên spa, salon, clinic, shop dịch vụ. Xem /dolphin-ops/.",
  explainOpsVsCare:
    "Hai sản phẩm khác nhau, không dùng lẫn. **Dolphin Ops** = Agent CRM cho đội ngũ chạy việc nội bộ. Chi tiết /dolphin-ops/.",
  exampleIntelligence:
    "Ví dụ nhanh 💡 **Daily Content Engine** trên **Dolphin Intelligence**: cron sáng → Research Agent → Content Agent → **Human Check** topic → Jasper/SEO/Review → publish hoặc landing → Media → overview report → lặp ngày hôm sau. Nhiều bước nối nhau, có chỗ người duyệt — không phải chatbot trả lời từng câu. Xem /dolphin-intelligence/ hoặc mô tả quy trình anh/chị muốn tự động hóa.",
  exampleWeb:
    "Ví dụ nhanh 💡 Studio cưới cần khách xem váy online trước khi đến: làm **website** catalog + form tư vấn (thường gói business / shop tùy scope). Campaign ra mắt dịch vụ mới: **landing** 3–5 ngày, CTA + form lead. Anh/chị đang nghiêng website giới thiệu, bán hàng, hay landing?",
  exampleGeneric:
    "Ví dụ em có thể kể: (1) **Dolphin Care** — chatbot site 24/7 + insight; (2) **Dolphin Ops** — nói việc, mở đúng màn vận hành; (3) **website** SMB. Anh/chị muốn ví dụ theo hướng nào?",
  escalateHint: "Cần người thật? Bấm nút liên hệ góc dưới (Zalo / gọi / email).",
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
  placeholder: "Type a message or ask Dolphin…",
  send: "Send",
  ask: "Ask",
  greeting:
    "Hello! 👋 I’m **Dolphin Assist** from Dolphin Software. Need help with a **website**, **Dolphin Care**, **Dolphin Ops** (internal ops), or an AI path?",
  suggestions: [
    "Project quote",
    "Dolphin Ops",
    "Dolphin Care",
    "Talk to a human on Zalo",
  ],
  helloMorning: "Good morning.",
  helloAfternoon: "Good afternoon.",
  helloEvening: "Good evening.",
  welcomeSub: "What are we doing today?",
  helpBanner: "Need more help?",
  helpSupport: "Contact",
  newChat: "New conversation",
  chatRecorded:
    "Chats may be recorded to improve the service. Don’t share sensitive data.",
  suggestionCards: [
    {
      title: "Project quote",
      body: "Scope, timeline, and next steps",
      prompt: "I want a quote for a website/app project",
    },
    {
      title: "Website design",
      body: "Landing, company site, e-commerce",
      prompt: "I need advice on a business website",
    },
    {
      title: "Dolphin Care",
      body: "AI customer care on your website",
      prompt: "Tell me about Dolphin Care and how to embed it",
    },
    {
      title: "Dolphin Ops",
      body: "Agent CRM · say the job, open the screen",
      prompt: "Explain Dolphin Ops",
    },
  ],
  rules: [
    {
      keywords: ["zalo", "human", "call", "phone", "person"],
      reply:
        "Use the **contact** button at the bottom-right for **Zalo**, or call **0779 937 633** 🤝 You can also leave a short brief here first.",
    },
    {
      keywords: ["quote", "price", "cost", "budget", "pricing"],
      reply:
        "For a solid **quote** we need goals, timing, and rough scope 💡 Share a short note here, use “Get a quote” on the site, or hop on **Zalo**.",
    },
    {
      keywords: [
        "dolphin ops",
        "agent crm",
        "crm 2.0",
        "business operations",
        "internal ops",
      ],
      reply:
        "**Dolphin Ops** is an **Agent CRM** (SaaS): you say the job, it picks the tool and opens the right screen — bookings, guests, reports ✅ Chat is the entry, not the whole product. See /dolphin-ops/ or tell me where work gets stuck.",
    },
    {
      keywords: [
        "intelligence",
        "ai workflow",
        "workflow",
        "human checkpoint",
        "human check",
        "daily content",
      ],
      reply:
        "**Dolphin Intelligence** is an **AI workflow** platform — **agents**, **actions**, **logic**, and **human checkpoints** — not a single chatbot ✅ Different from **Dolphin Care** (on-site customer care). See /dolphin-intelligence/ or describe the multi-step process you want to automate.",
    },
    {
      keywords: ["agent", "chatbot", "custom", "dolphin care", "care"],
      reply:
        "**Dolphin Care** / custom AI agents attach to real workflows (CRM, chat, calendar) as part of the AI transformation roadmap — not off-the-shelf script bots ✅ See /dolphin-care/ or /ai-transform/, or tell me which job you want automated.",
    },
    {
      keywords: ["transform", "transformation", "enterprise", "roadmap"],
      reply:
        "**AI transformation** means wiring AI into operations — not handing out ChatGPT seats 💡 See /ai-transform/ or describe the process burning time/money. For a multi-step workflow product, see **Dolphin Intelligence** at /dolphin-intelligence/.",
    },
    {
      keywords: ["web", "website", "app", "mobile", "project"],
      reply:
        "Dolphin builds **websites**/apps around business outcomes with clear scope and operable handover 👍 Tell me what you need (landing, booking, internal tool…) to start.",
    },
    {
      keywords: ["hello", "hi", "hey"],
      reply:
        "Hi! 👋 I’m ready — ask about **quotes**, **website**, **Dolphin Care**, **Dolphin Ops**, or **Zalo**.",
    },
  ],
  fallback:
    "Got it 👍 To help better, tell me if you need **website**/app, **Dolphin Care**, **Dolphin Ops** (internal ops), AI transformation, or a human on **Zalo**.",
  exampleCare:
    "Quick example 💡 Spa / clinic: a visitor asks after hours “any slots tomorrow afternoon?” — **Dolphin Care** answers from your hours + offers a callback number; next morning staff see the lead in the daily insight report instead of repeating the same FAQ. Shop: shipping / size questions → Care answers from your loaded price sheet, escalates to Zalo when needed. See /dolphin-care/ or ping **Zalo** to embed on your site.",
  exampleOps:
    "Quick example 💡 Spa staff say “Book Lan for Saturday” — **Dolphin Ops** opens the **booking form**, not a CRM menu. “Huong’s history” → **Customer 360**. “Revenue today?” → a chart. An admin can ask for a required notes field inside an enabled tool. See /dolphin-ops/ or tell me where work gets stuck.",
  explainOps:
    "**Dolphin Ops** is an **Agent CRM** (SaaS) for internal ops: you say the job, it picks the tool and opens the right screen — bookings, guests, reports ✅ Chat is the entry, not the whole product. See /dolphin-ops/ or tell me where work gets stuck.",
  explainOpsCrm:
    "Yes — **Agent CRM**, not a menu CRM you learn then hit Save 👍 You say the job; it opens a form, Customer 360, or a chart. Admins change enabled tools in chat. Sensitive steps wait for a person. More at /dolphin-ops/.",
  explainOpsDetail:
    "**Dolphin Ops** model: intent → Agent → Business Tool → the right UI → a person confirms sensitive steps → action 💡 AI does not replace the interface; it picks the right one. Admins can ask for a field, a report formula, or an approval rule inside enabled tools. We start with spa, salon, clinic, service shop. See /dolphin-ops/.",
  explainOpsVsCare:
    "Two separate products. **Dolphin Ops** is Agent CRM for the team running internal work. Details at /dolphin-ops/.",
  exampleIntelligence:
    "Quick example 💡 **Daily Content Engine** on **Dolphin Intelligence**: morning cron → Research Agent → Content Agent → **Human Check** → Jasper/SEO/Review → publish or landing → Media → overview report → next day. Linked steps with human oversight — not a one-shot chatbot. See /dolphin-intelligence/ or describe your process.",
  exampleWeb:
    "Quick example 💡 Wedding studio wants clients to browse dresses before visiting → **business / shop** site with catalog + consult form. New service launch → **landing** in ~3–5 days with CTA + lead form. Are you closer to a company site, e-commerce, or a landing?",
  exampleGeneric:
    "I can give an example for: (1) **Dolphin Care** — 24/7 site answers + insight; (2) **Dolphin Ops** — say the job, open the right ops screen; (3) **website**. Which direction?",
  escalateHint: "Need a human? Use the contact button (Zalo / call / email).",
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
  ask: "Ask",
  greeting:
    "こんにちは！👋 Dolphin Software の **Dolphin Assist** です。**Web**、**Dolphin Care**、**Dolphin Ops**（社内運用）、または AI の進め方について、どのようなご相談でしょうか？",
  suggestions: [
    "見積もり依頼",
    "Dolphin Ops",
    "Dolphin Care",
    "Zaloで担当者と話す",
  ],
  helloMorning: "おはようございます。",
  helloAfternoon: "こんにちは。",
  helloEvening: "こんばんは。",
  welcomeSub: "今日は何をお手伝いしますか？",
  helpBanner: "さらにサポートが必要ですか？",
  helpSupport: "お問い合わせ",
  newChat: "新しい会話",
  chatRecorded:
    "サービス改善のため会話が記録される場合があります。機密情報は送信しないでください。",
  suggestionCards: [
    {
      title: "見積もり依頼",
      body: "範囲・スケジュール・次の一歩",
      prompt: "Web/アプリの見積もりを相談したい",
    },
    {
      title: "Webサイト制作",
      body: "LP・コーポレート・EC",
      prompt: "企業向けWebサイトの相談をしたい",
    },
    {
      title: "Dolphin Care",
      body: "サイト上のAIカスタマーケア",
      prompt: "Dolphin Care の概要と導入方法を教えて",
    },
    {
      title: "Dolphin Ops",
      body: "Agent CRM · 用件を言えば画面が開く",
      prompt: "Dolphin Ops を説明して",
    },
  ],
  rules: [
    {
      keywords: ["zalo", "人", "電話", "担当", "連絡"],
      reply:
        "右下の**連絡**ボタンから **Zalo** へ、または **0779 937 633** までお電話ください 🤝 こちらで簡単にご要件を伺うことも可能です。",
    },
    {
      keywords: ["見積", "料金", "価格", "費用", "予算"],
      reply:
        "正確な**見積もり**には、目的・期限・概要が必要です 💡 こちらで簡単にご説明いただくか、サイトの「見積もり依頼」フォームをご利用ください。または **Zalo** で直接ご相談も可能です。",
    },
    {
      keywords: [
        "dolphin ops",
        "agent crm",
        "crm 2.0",
        "事業運用",
        "社内運用",
      ],
      reply:
        "**Dolphin Ops** は **Agent CRM**（SaaS）です。用件を伝えると、ツールを選び予約・顧客・レポートの画面を開きます ✅ チャットは入口であり、製品の全部ではありません。詳しくは /dolphin-ops/、または詰まっている業務をお聞かせください。",
    },
    {
      keywords: [
        "intelligence",
        "ai workflow",
        "workflow",
        "ワークフロー",
        "human checkpoint",
        "human check",
      ],
      reply:
        "**Dolphin Intelligence** は **AIワークフロー**基盤です — **エージェント**・**アクション**・**ロジック**・**ヒューマンチェックポイント**。単発チャットボットではありません ✅ **Dolphin Care**（サイト上の顧客対応）とは別です。詳しくは /dolphin-intelligence/、または自動化したい多段プロセスをお聞かせください。",
    },
    {
      keywords: ["agent", "エージェント", "チャットボット", "カスタム", "dolphin care", "care"],
      reply:
        "**Dolphin Care** / 業務に組み込むカスタム AI Agent（CRM・Zalo・カレンダーなど）は AI 変革ロードマップの一部です ✅ /dolphin-care/ または /ai-transform/ をご覧いただくか、自動化したい業務をお聞かせください。",
    },
    {
      keywords: ["変革", "transformation", "企業", "ロードマップ"],
      reply:
        "**AI 変革**とは、ChatGPT のアカウントを配るだけではなく、AI を運用の中核に組み込むことです 💡 /ai-transform/ をご覧ください。多段ワークフロー製品は **Dolphin Intelligence**（/dolphin-intelligence/）です。",
    },
    {
      keywords: ["web", "website", "サイト", "アプリ", "app", "プロジェクト"],
      reply:
        "Dolphin はビジネス成果に沿って **Web**/アプリを構築します 👍 明確な範囲と運用しやすい引き渡しを重視しています。必要なもの（LP・予約・社内ツールなど）をお聞かせください。",
    },
    {
      keywords: ["こんにちは", "hello", "hi", "はじめまして"],
      reply:
        "こんにちは！👋 ご用件をお聞かせください — **見積もり**、**Web**、**Dolphin Care**、**Dolphin Ops**、または **Zalo**。",
    },
  ],
  fallback:
    "承知いたしました 👍 **Web**/アプリ、**Dolphin Care**、**Dolphin Ops**（社内運用）、AI 変革、または **Zalo** での担当者連絡のうち、どれに近いかお聞かせいただけますか？",
  exampleCare:
    "例 💡 スパ／クリニック：営業時間外に「明日の午後は空いていますか？」→ **Dolphin Care** が営業時間に沿って回答し電話番号も案内。翌朝スタッフは insight レポートでリードを確認し、同じFAQを何度も返さずに済みます。ショップ：送料／サイズ質問は登録済みの料金表で回答し、複雑な場合は Zalo へ。詳しくは /dolphin-care/ または **Zalo** へ。",
  exampleOps:
    "例 💡 スパのスタッフが「土曜、Lanさんを予約」と言うと、**Dolphin Ops** が **予約フォーム**を開きます。CRMメニューは辿りません。「Hươngさんの履歴」→ **Customer 360**。「今日の売上？」→チャート。管理者は有効なツールの範囲で「必須のメモ欄を足して」と話せます。詳しくは /dolphin-ops/ へ。",
  explainOps:
    "**Dolphin Ops** は社内運用向けの **Agent CRM**（SaaS）です。用件を伝えると、ツールを選び予約・顧客・レポートの画面を開きます ✅ チャットは入口であり、製品の全部ではありません。詳しくは /dolphin-ops/ へ。",
  explainOpsCrm:
    "はい。**Agent CRM** です。メニューを覚えて保存する従来CRMではありません 👍 用件を言えばフォーム、Customer 360、チャートが開きます。有効なツールは管理者がチャットで直せます。機微な操作は人の確認。詳しくは /dolphin-ops/。",
  explainOpsDetail:
    "**Dolphin Ops** の流れ：用件 → Agent → 業務ツール → 正しい画面 → 機微な操作は人の確認 → 実行 💡 AIは画面を置き換えず、正しい画面を選びます。管理者は有効なツールの範囲で欄・計算式・承認ルールを話せます。スパ、サロン、クリニック、サービス店から。詳しくは /dolphin-ops/。",
  explainOpsVsCare:
    "別製品です。**Dolphin Ops** は社内運用の Agent CRM。詳しくは /dolphin-ops/。",
  exampleIntelligence:
    "例 💡 **Dolphin Intelligence** の **Daily Content Engine**：朝の cron → Research Agent → Content Agent → **Human Check** → Jasper/SEO/Review → 公開または LP → Media → 概要レポート → 翌日へ。多段連携＋人の確認で、単発チャットボットではありません。詳しくは /dolphin-intelligence/ へ。",
  exampleWeb:
    "例 💡 衣装スタジオが来店前にドレスを見せたい → カタログ＋相談フォームの **企業／ECサイト**。新サービス告知 → CTA＋リードフォームの **LP**（目安3–5日）。企業サイト、EC、LPのどれに近いですか？",
  exampleGeneric:
    "例として：(1) **Dolphin Care** — サイトで24/7回答＋insight、(2) **Dolphin Ops** — 用件を言えば運用画面が開く、(3) **Web**。どれが近いですか？",
  escalateHint: "担当者と直接お話しされたい場合は、右下の連絡ボタン（Zalo / 電話 / メール）をご利用ください。",
};

export const aiChatCopy: Record<Locale, AiChatCopy> = {
  vi,
  en,
  ja,
};

export function getAiChatCopy(locale: Locale): AiChatCopy {
  return aiChatCopy[locale];
}

const OPS_TOPIC =
  /dolphin ops|\bops\b|agent crm|crm 2\.0|vận hành doanh nghiệp|van hanh|社内運用|事業運用/;

function asksOpsVsCare(q: string): boolean {
  return /khác (dolphin )?care|khac (dolphin )?care|vs care|different from care|careとの違い|とcare/.test(
    q,
  );
}

function asksOpsCrm(q: string): boolean {
  return /\bcrm\b|agent crm|crm 2/.test(q);
}

function asksOpsDetail(q: string): boolean {
  return /chi tiết|chi tiet|rõ hơn|ro hon|giải thích chi tiết|detail|more detail|詳しく|詳しく説明/.test(
    q,
  );
}

export function matchAiChatReply(
  input: string,
  copy: AiChatCopy,
  opts?: { recentTranscript?: string },
): string {
  const q = input.trim().toLowerCase();
  if (!q) return copy.fallback;

  const recent = (opts?.recentTranscript ?? "").toLowerCase();
  const opsRecent = OPS_TOPIC.test(recent);
  const opsInQuery = OPS_TOPIC.test(q);

  if (asksOpsVsCare(q) && (opsRecent || opsInQuery)) {
    return copy.explainOpsVsCare;
  }

  const asksExample =
    q.includes("ví dụ") ||
    q.includes("vi du") ||
    q.includes("cho vd") ||
    q.includes("example") ||
    q.includes("たとえば") ||
    q.includes("例") ||
    /(^|\s)vd(\s|$|[?.!])/i.test(q);

  if (asksExample) {
    const intelligenceCtx =
      /dolphin intelligence|ai workflow|workflow|human checkpoint|human check|daily content/.test(
        recent,
      ) ||
      /dolphin intelligence|ai workflow|workflow|human check/.test(q);
    const opsCtx = opsRecent || opsInQuery;
    const careCtx =
      /dolphin care|\bcare\b|chăm sóc|cham soc|chatbot|insight|24\/7/.test(
        recent,
      ) || /dolphin care|\bcare\b|chăm sóc/.test(q);
    const webCtx =
      /website|\bweb\b|landing|bán hàng|e-?com|shop|giá|báo giá|quote/.test(
        recent,
      ) || /website|\bweb\b|landing/.test(q);

    if (intelligenceCtx) return copy.exampleIntelligence;
    if (opsCtx) return copy.exampleOps;
    if (careCtx) return copy.exampleCare;
    if (webCtx) return copy.exampleWeb;
    return copy.exampleGeneric;
  }

  if (opsRecent || opsInQuery) {
    if (asksOpsCrm(q)) return copy.explainOpsCrm;
    if (opsRecent && asksOpsDetail(q)) return copy.explainOpsDetail;
    if (asksOpsDetail(q)) return copy.explainOpsDetail;
    if (opsRecent && !opsInQuery) return copy.explainOpsDetail;
    return copy.explainOps;
  }

  if (asksOpsCrm(q)) return copy.explainOpsCrm;

  for (const rule of copy.rules) {
    if (rule.keywords.some((k) => q.includes(k.toLowerCase()))) {
      return rule.reply;
    }
  }
  return copy.fallback;
}

export function dayPartHello(copy: AiChatCopy, hour = new Date().getHours()): string {
  if (hour < 12) return copy.helloMorning;
  if (hour < 18) return copy.helloAfternoon;
  return copy.helloEvening;
}
