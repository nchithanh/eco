import type { Locale } from "@/lib/i18n/types";

export type AgentDolphinCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  support: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustLine: string;
  heroAgentName: string;
  heroJustNow: string;
  heroCards: [string, string, string];
  compareEyebrow: string;
  compareTitle: string;
  compareSupport: string;
  oldTitle: string;
  oldItems: string[];
  newTitle: string;
  newItems: string[];
  pillarsEyebrow: string;
  pillarsTitle: string;
  pillarsSupport: string;
  pillars: { title: string; body: string }[];
  howEyebrow: string;
  howTitle: string;
  howSupport: string;
  howSteps: { title: string; body: string }[];
  embedMock: {
    url: string;
    agentName: string;
    userMsg: string;
    agentLines: [string, string, string];
    inputPlaceholder: string;
  };
  faqEyebrow: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  closeEyebrow: string;
  closeTitle: string;
  closeSupport: string;
  closeCta: string;
};

const vi: AgentDolphinCopy = {
  metaTitle: "Dolphin Care | Support website thông minh | Dolphin Software",
  metaDescription:
    "Dolphin Care gắn trên website — hỗ trợ khách bằng LLM + context nghiệp vụ + context khách hàng, chăm sóc như nhân viên chuyên nghiệp có cảm xúc.",
  eyebrow: "Dolphin Care",
  headline: "Support website như [[nhân viên]] — không chatbot máy móc",
  support:
    "Dolphin Care đảm nhiệm chăm sóc khách trên website của bạn. Khác chatbox trả lời theo kịch bản: kết hợp mô hình LLM với context doanh nghiệp và context từng khách để tư vấn, lắng nghe và xử lý đúng ngữ cảnh.",
  ctaPrimary: "Trao đổi triển khai",
  ctaSecondary: "Xem AI Agent khác",
  trustLine: "LLM · Business context · Client context · Giọng điệu thương hiệu",
  heroAgentName: "Dolphin Care",
  heroJustNow: "bây giờ",
  heroCards: [
    "Chào anh/chị! Em kiểm tra đơn #123456 — đang đóng gói, dự kiến giao ngày mai ạ.",
    "Anh/chị muốn đổi size M navy không? Còn hàng và giữ được đến 18h hôm nay.",
    "Em đã ghi địa chỉ Quận 1. Có gì cần thêm cứ nhắn — em hỗ trợ liền.",
  ],
  compareEyebrow: "Khác biệt",
  compareTitle: "Chatbox truyền thống vs [[Dolphin Care]]",
  compareSupport:
    "Cùng nằm góc website — một bên trả lời cứng, một bên hiểu việc và cảm xúc khách.",
  oldTitle: "Chatbox / FAQ bot thông thường",
  oldItems: [
    "Trả lời theo script — câu ngoài kịch bản dễ tắc hoặc lan man",
    "Không biết sản phẩm, chính sách, tồn kho hay ưu đãi của bạn",
    "Không nhớ lịch sử khách — mỗi lần hỏi như người lạ",
    "Giọng điệu máy móc — khó tạo tin tưởng hay giữ chân",
  ],
  newTitle: "Dolphin Care",
  newItems: [
    "LLM linh hoạt trong phạm vi bạn cho phép — không chỉ nút bấm FAQ",
    "Nạp context business: giá, dịch vụ, quy trình, cách xưng hô",
    "Dùng context khách: phiên chat, hành vi, thông tin đã chia sẻ",
    "Chăm sóc gần nhân viên thật — lịch sự, đồng cảm, đúng brand",
  ],
  pillarsEyebrow: "Ba lớp ngữ cảnh",
  pillarsTitle: "Não AI + [[nghiệp vụ]] + [[khách hàng]]",
  pillarsSupport:
    "Ba nguồn thông tin chạy cùng lúc — agent trả lời đúng việc, đúng người, đúng giọng.",
  pillars: [
    {
      title: "Mô hình LLM",
      body: "Hiểu ngôn ngữ tự nhiên, hỏi lại khi thiếu thông tin, diễn đạt mượt — không copy-paste câu cứng.",
    },
    {
      title: "Context doanh nghiệp",
      body: "Kiến thức cửa hàng/studio của bạn: dịch vụ, bảng giá, chính sách, FAQ nội bộ, giọng thương hiệu.",
    },
    {
      title: "Context khách hàng",
      body: "Phiên hiện tại và dấu vết đã có (form, trang đang xem, lịch sử nếu có) để cá nhân hóa câu trả lời.",
    },
  ],
  howEyebrow: "Cách triển khai",
  howTitle: "Gắn Dolphin Care lên [[website]] của bạn",
  howSupport: "Bốn bước — từ hiểu brand đến widget live trên site.",
  howSteps: [
    {
      title: "Thu thập nghiệp vụ & giọng điệu",
      body: "Workshop ngắn: dịch vụ, ngoại lệ, cách xưng hô, câu cần escalate cho người.",
    },
    {
      title: "Nạp knowledge + guardrail",
      body: "Đưa tài liệu/FAQ/policy vào kho context; chốt phạm vi agent được tự trả lời.",
    },
    {
      title: "Gắn widget & kênh",
      body: "Nhúng lên website (và tùy chọn Zalo/CRM). Đồng bộ lead / ticket khi cần người xử lý.",
    },
    {
      title: "Theo dõi & tinh chỉnh",
      body: "Xem hội thoại thật, chỉnh prompt/context theo chỗ khách hay hỏi — agent càng dùng càng khớp.",
    },
  ],
  embedMock: {
    url: "yourstore.com",
    agentName: "Dolphin Care",
    userMsg: "Đơn #123456 giao khi nào?",
    agentLines: [
      "Đang đóng gói",
      "Giao ngày mai",
      "Giữ size M nếu cần đổi",
    ],
    inputPlaceholder: "Nhập tin nhắn…",
  },
  faqEyebrow: "FAQ",
  faqTitle: "Câu hỏi thường gặp",
  faqItems: [
    {
      q: "Dolphin Care khác chatbot có sẵn thế nào?",
      a: "Chatbot sẵn thường chạy script. Dolphin Care dùng LLM kèm knowledge và ngữ cảnh khách của bạn — trả lời linh hoạt hơn nhưng vẫn trong guardrail.",
    },
    {
      q: "Có thay hoàn toàn nhân viên support không?",
      a: "Không bắt buộc. Agent xử lý phần lặp và ngoài giờ; việc nhạy cảm hoặc ngoài scope escalate cho người — có log để kiểm soát.",
    },
    {
      q: "Cần website do Dolphin Software làm không?",
      a: "Không. Có thể gắn lên site hiện có nếu cho phép nhúng widget / API. Làm web mới với Dolphin thì gắn sẵn sẽ mượt hơn.",
    },
    {
      q: "Dữ liệu khách có an toàn không?",
      a: "Phạm vi lưu trữ và kênh gửi đi chốt rõ trong hợp đồng. Chỉ đưa vào context những gì cần để support — không mở lung tung.",
    },
  ],
  closeEyebrow: "Bắt đầu",
  closeTitle: "Để website [[tự chăm]] khách chuyên nghiệp hơn",
  closeSupport:
    "Gửi link site và mô tả loại khách bạn nhận — Dolphin Software đề xuất phạm vi Dolphin Care và cách gắn.",
  closeCta: "Nhận tư vấn Dolphin Care",
};

const en: AgentDolphinCopy = {
  metaTitle: "Dolphin Care | Smart website support | Dolphin Software",
  metaDescription:
    "Dolphin Care on your website — customer care with an LLM plus business and customer context, like a professional staff member with empathy.",
  eyebrow: "Dolphin Care",
  headline: "Website support like a [[teammate]] — not a scripted bot",
  support:
    "Dolphin Care handles customer care on your site. Unlike mechanical chatboxes, it combines an LLM with your business context and each visitor’s context to listen, advise, and respond in the right tone.",
  ctaPrimary: "Talk implementation",
  ctaSecondary: "See other AI agents",
  trustLine: "LLM · Business context · Client context · Brand voice",
  heroAgentName: "Dolphin Care",
  heroJustNow: "now",
  heroCards: [
    "Hi! I checked order #123456 — packing now, delivery expected tomorrow.",
    "Want to switch to size M navy? It’s in stock and I can hold it until 6pm.",
    "Got your District 1 address. Anything else — just message me anytime.",
  ],
  compareEyebrow: "Difference",
  compareTitle: "Traditional chatbox vs [[Dolphin Care]]",
  compareSupport:
    "Same corner of the site — one replies rigidly, the other understands the job and the customer’s mood.",
  oldTitle: "Typical FAQ / script chatbox",
  oldItems: [
    "Script-bound answers — off-script questions stall or ramble",
    "No knowledge of your products, policies, stock, or offers",
    "No memory of the visitor — every chat starts cold",
    "Robotic tone — hard to build trust or keep people engaged",
  ],
  newTitle: "Dolphin Care",
  newItems: [
    "Flexible LLM replies inside your allowed scope — not FAQ buttons only",
    "Business context: pricing, services, process, how you address guests",
    "Client context: session, behavior, what they already shared",
    "Care close to a real teammate — polite, empathetic, on-brand",
  ],
  pillarsEyebrow: "Three context layers",
  pillarsTitle: "AI model + [[business]] + [[customer]]",
  pillarsSupport:
    "Three information sources at once — the agent answers the right job, for the right person, in the right voice.",
  pillars: [
    {
      title: "LLM",
      body: "Natural language, clarifying questions when needed, fluent wording — not copy-paste scripts.",
    },
    {
      title: "Business context",
      body: "Your shop/studio knowledge: services, pricing, policies, internal FAQ, brand voice.",
    },
    {
      title: "Customer context",
      body: "Current session and known signals (forms, page viewed, history if available) for personal replies.",
    },
  ],
  howEyebrow: "How we ship it",
  howTitle: "Put Dolphin Care on [[your website]]",
  howSupport: "Four steps — from brand voice to a live site widget.",
  howSteps: [
    {
      title: "Capture ops & tone",
      body: "Short workshop: services, exceptions, how you speak, what must escalate to a human.",
    },
    {
      title: "Load knowledge + guardrails",
      body: "Docs/FAQ/policy into the context store; lock what the agent may answer alone.",
    },
    {
      title: "Embed widget & channels",
      body: "Site embed (optional Zalo/CRM). Sync leads/tickets when a human must take over.",
    },
    {
      title: "Monitor & refine",
      body: "Review real chats, tune prompts/context where guests get stuck — better with use.",
    },
  ],
  embedMock: {
    url: "yourstore.com",
    agentName: "Dolphin Care",
    userMsg: "When does order #123456 arrive?",
    agentLines: [
      "Packing now",
      "Delivery tomorrow",
      "Hold size M if you swap",
    ],
    inputPlaceholder: "Type a message…",
  },
  faqEyebrow: "FAQ",
  faqTitle: "Common questions",
  faqItems: [
    {
      q: "How is Dolphin Care different from an off-the-shelf chatbot?",
      a: "Shelf bots often run scripts. Dolphin Care uses an LLM with your knowledge and visitor context — more flexible, still inside guardrails.",
    },
    {
      q: "Does it replace support staff?",
      a: "Not required. It covers repetitive and after-hours questions; sensitive or out-of-scope cases escalate to people — with logs.",
    },
    {
      q: "Must Dolphin Software build the website?",
      a: "No. We can embed on an existing site if widgets/APIs are allowed. New sites we build ship with the agent ready.",
    },
    {
      q: "Is customer data safe?",
      a: "Storage scope and channels are fixed in the agreement. Only support-relevant context is loaded — not an open dump.",
    },
  ],
  closeEyebrow: "Get started",
  closeTitle: "Let your site [[care for guests]] more professionally",
  closeSupport:
    "Send your site URL and who you serve — we’ll propose Dolphin Care scope and how to embed it.",
  closeCta: "Get Dolphin Care advice",
};

const ja: AgentDolphinCopy = {
  metaTitle: "Dolphin Care | サイトのスマートサポート | Dolphin Software",
  metaDescription:
    "Dolphin Care はサイト上の顧客対応を担当。LLM に業務コンテキストと顧客コンテキストを組み合わせ、感情のあるプロのスタッフのようにサポートします。",
  eyebrow: "Dolphin Care",
  headline: "機械的なチャットではなく、[[スタッフ]]のようなサイトサポート",
  support:
    "Dolphin Care がサイトのカスタマーケアを担います。定型ボットと違い、LLM に御社の業務知識と来訪者の文脈を載せて、適切に聞き・案内・対応します。",
  ctaPrimary: "導入を相談",
  ctaSecondary: "他の AI Agent を見る",
  trustLine: "LLM · 業務コンテキスト · 顧客コンテキスト · ブランドトーン",
  heroAgentName: "Dolphin Care",
  heroJustNow: "たった今",
  heroCards: [
    "こんにちは！注文 #123456 を確認しました — 梱包中で、明日のお届け予定です。",
    "ネイビーのMに変更しますか？在庫あり、本日18時までお取り置きできます。",
    "1区のご住所を控えました。ほかに必要ならすぐサポートします。",
  ],
  compareEyebrow: "違い",
  compareTitle: "従来チャット vs [[Dolphin Care]]",
  compareSupport:
    "同じウィジェット位置でも、硬い返答と、仕事と気持ちを理解する対応は別物です。",
  oldTitle: "一般的な FAQ / スクリプトボット",
  oldItems: [
    "台本通り — 想定外の質問で止まりやすい",
    "商品・規約・在庫・キャンペーンを知らない",
    "来訪者の履歴なし — 毎回初対面",
    "機械的な口調 — 信頼や継続が難しい",
  ],
  newTitle: "Dolphin Care",
  newItems: [
    "許可範囲内で柔軟な LLM 応答 — FAQ ボタンだけではない",
    "業務コンテキスト：料金、サービス、手順、呼び方",
    "顧客コンテキスト：セッション、行動、共有済み情報",
    "実スタッフに近い丁寧さ・共感・ブランド声",
  ],
  pillarsEyebrow: "3層の文脈",
  pillarsTitle: "AIモデル + [[業務]] + [[顧客]]",
  pillarsSupport:
    "3つの情報源を同時に使い、正しい相手に正しい仕事・声で答えます。",
  pillars: [
    {
      title: "LLM",
      body: "自然な対話、不足時の聞き返し、滑らかな表現 — コピペ台本ではない。",
    },
    {
      title: "業務コンテキスト",
      body: "店舗/スタジオの知識：サービス、料金、ポリシー、社内FAQ、トーン。",
    },
    {
      title: "顧客コンテキスト",
      body: "現在のセッションや既知のシグナル（フォーム、閲覧ページ、履歴）で個別化。",
    },
  ],
  howEyebrow: "進め方",
  howTitle: "Dolphin Care を[[サイト]]に載せる",
  howSupport: "4ステップ — ブランド理解からライブウィジェットまで。",
  howSteps: [
    {
      title: "業務とトーンのヒアリング",
      body: "短いワークショップ：サービス、例外、話し方、人に渡す案件。",
    },
    {
      title: "ナレッジとガードレール",
      body: "資料/FAQ/規約をコンテキストへ。単独回答の範囲を確定。",
    },
    {
      title: "ウィジェット連携",
      body: "サイト埋め込み（任意で Zalo/CRM）。人対応が必要なときチケット連携。",
    },
    {
      title: "監視と改善",
      body: "実会話を見てプロンプト/知識を調整 — 使うほどフィット。",
    },
  ],
  embedMock: {
    url: "yourstore.com",
    agentName: "Dolphin Care",
    userMsg: "注文 #123456 はいつ届きますか？",
    agentLines: [
      "梱包中です",
      "明日のお届け",
      "サイズMをお取り置き可",
    ],
    inputPlaceholder: "メッセージを入力…",
  },
  faqEyebrow: "FAQ",
  faqTitle: "よくある質問",
  faqItems: [
    {
      q: "既製チャットボットとの違いは？",
      a: "既製品は台本が多いです。Dolphin Care は LLM に御社知識と来訪文脈を載せ、ガードレール内で柔軟に答えます。",
    },
    {
      q: "サポート担当を置き換えますか？",
      a: "必須ではありません。反復・時間外を担当し、機微や範囲外は人へ。ログで把握できます。",
    },
    {
      q: "サイトは Dolphin Software 製が必要？",
      a: "不要です。埋め込み可能なら既存サイトにも。新規制作なら最初から組み込みやすいです。",
    },
    {
      q: "顧客データは安全？",
      a: "保存範囲とチャネルは契約で明確化。サポートに必要な文脈だけを載せます。",
    },
  ],
  closeEyebrow: "はじめの一歩",
  closeTitle: "サイトがより[[プロらしく]]お客様をケア",
  closeSupport:
    "サイトURLと想定顧客を送ってください。Dolphin Care の範囲と埋め方をご提案します。",
  closeCta: "Dolphin Care を相談",
};



export const agentDolphinByLocale: Record<Locale, AgentDolphinCopy> = {
  vi,
  en,
  ja,
};

export function getAgentDolphinCopy(locale: Locale): AgentDolphinCopy {
  return agentDolphinByLocale[locale] ?? agentDolphinByLocale.en;
}

/** Homepage teaser (chat-style demos under Hero). */
export type AgentDolphinHomeMessage = {
  role: "user" | "assistant";
  text: string;
};

export type AgentDolphinHomeCard = {
  context: string;
  messages: AgentDolphinHomeMessage[];
};

export type AgentDolphinHomeBenefit = {
  title: string;
  body: string;
};

export type AgentDolphinHomeCopy = {
  eyebrow: string;
  title: string;
  support: string;
  cta: string;
  ctaSecondary: string;
  trustMicro: string;
  benefits: [
    AgentDolphinHomeBenefit,
    AgentDolphinHomeBenefit,
    AgentDolphinHomeBenefit,
  ];
  situationsLabel?: string;
  situations?: string[];
  industriesLabel?: string;
  industries?: string[];
  pipelineLabel?: string;
  pipeline?: string[];
  agentName: string;
  online: string;
  card: AgentDolphinHomeCard;
  inputPlaceholder: string;
};

const homeVi: AgentDolphinHomeCopy = {
  eyebrow: "Dolphin Care",
  title: "AI giảm tải vận hành và [[nâng cao]] hiệu quả",
  support:
    "Dolphin Care là giải pháp AI chat tích hợp trực tiếp lên website của bạn — trả lời đúng việc, đúng giọng điệu thương hiệu, giảm câu hỏi lặp đi lặp lại.",
  cta: "Tìm hiểu Dolphin Care",
  ctaSecondary: "Nhận báo giá",
  trustMicro: "Thêm vào website mới hoặc website bạn đang chạy",
  benefits: [
    {
      title: "Trả lời đúng ngữ cảnh",
      body: "Câu hỏi thường gặp được phản hồi ngay khi khách vừa vào trang — không cần nhân viên trực 24/7.",
    },
    {
      title: "Giảm trao đổi thủ công",
      body: "Thu thập thông tin, trả lời câu hỏi lặp và chuyển tiếp sang người khi cần thiết.",
    },
    {
      title: "Không bỏ lỡ lead ngoài giờ",
      body: "Khách vẫn nhận được phản hồi đầu tiên ngoài giờ làm việc — cơ hội không trôi qua.",
    },
  ],
  situationsLabel: "Dolphin Care xử lý được:",
  situations: [
    "Khách hỏi giá",
    "Khách hỏi còn lịch không",
    "Khách hỏi địa chỉ",
    "Khách hỏi dịch vụ",
    "Khách muốn để lại SĐT",
    "Khách muốn gặp nhân viên",
  ],
  industriesLabel: "Phù hợp cho",
  industries: [
    "Spa",
    "Phòng khám",
    "Nhà hàng",
    "Giáo dục",
    "Showroom",
    "Bất động sản",
  ],
  pipelineLabel: "Cách hoạt động (không phải chatbot cứng)",
  pipeline: [
    "Hiểu ngữ cảnh",
    "Thu thông tin",
    "Đặt lịch",
    "Gửi Zalo / CRM",
    "Thông báo nhân viên",
    "Theo dõi khách",
  ],
  agentName: "Dolphin Care",
  online: "Đang trực tuyến",
  card: {
    context: "Spa · Đặt lịch",
    messages: [
      { role: "user", text: "Mai buổi chiều còn slot massage không?" },
      {
        role: "assistant",
        text: "Còn — 3:00 và 5:30 chiều. 60 hay 90 phút ạ?",
      },
      { role: "user", text: "60 phút lúc 3:00 nhé" },
      {
        role: "assistant",
        text: "Đang giữ slot 3:00 — 60 phút. Cho mình xin tên và số điện thoại nhé.",
      },
    ],
  },
  inputPlaceholder: "Nhập tin nhắn…",
};

const homeEn: AgentDolphinHomeCopy = {
  eyebrow: "Dolphin Care",
  title: "AI that [[lightens operations]] and lifts efficiency",
  support:
    "On your website — answers that fit the job and your tone; fewer repeat questions.",
  cta: "Explore Dolphin Care",
  ctaSecondary: "Get a quote",
  trustMicro: "Add to a new site or one you already run",
  benefits: [
    {
      title: "Answers that fit the job",
      body: "Common questions get a first reply as soon as someone lands on your site.",
    },
    {
      title: "Less manual back-and-forth",
      body: "Capture details, answer repeats, and hand off when a human should step in.",
    },
    {
      title: "Fewer missed after-hours leads",
      body: "Visitors still get a first response outside business hours.",
    },
  ],
  agentName: "Dolphin Care",
  online: "Online now",
  card: {
    context: "Spa · Booking",
    messages: [
      { role: "user", text: "Any massage slots tomorrow afternoon?" },
      {
        role: "assistant",
        text: "Yes — 3:00 and 5:30 pm. 60 or 90 minutes?",
      },
      { role: "user", text: "60 minutes at 3:00 please" },
      {
        role: "assistant",
        text: "Holding 3:00 — 60 minutes. Name and phone to confirm?",
      },
      { role: "user", text: "Minh, 0901 234 567" },
      {
        role: "assistant",
        text: "Booked for Minh at 3:00 tomorrow. I’ll Zalo-remind you 2 hours before and notify staff in CRM.",
      },
      { role: "user", text: "Perfect, thanks" },
      {
        role: "assistant",
        text: "Happy to help if you need to reschedule — your team has been notified.",
      },
    ],
  },
  inputPlaceholder: "Type a message…",
};

const homeJa: AgentDolphinHomeCopy = {
  eyebrow: "Dolphin Care",
  title: "AIで[[運用を軽く]]し、効率を上げる",
  support:
    "Webサイトに載せて、用件とトーンに合う返答 — 同じ質問の繰り返しを減らします。",
  cta: "Dolphin Careを見る",
  ctaSecondary: "見積もりを依頼",
  trustMicro: "新規サイトにも、既存サイトにも追加できます",
  benefits: [
    {
      title: "用件に合う返答",
      body: "サイトに来た瞬間からよくある質問に答えます。",
    },
    {
      title: "手作業のやりとりを削減",
      body: "情報を受け取り、繰り返しに答え、必要なら人へ引き継ぎます。",
    },
    {
      title: "営業時間外の取りこぼしを減らす",
      body: "時間外でも最初の返信を届けます。",
    },
  ],
  agentName: "Dolphin Care",
  online: "オンライン",
  card: {
    context: "Spa · 予約",
    messages: [
      { role: "user", text: "明日の午後にマッサージ空いてますか？" },
      {
        role: "assistant",
        text: "15:00と17:30が空いています。60分と90分、どちらにしますか？",
      },
      { role: "user", text: "15:00の60分でお願いします" },
      {
        role: "assistant",
        text: "15:00・60分で確保しました。お名前と電話番号をいただけますか？",
      },
      { role: "user", text: "ミン、0901 234 567" },
      {
        role: "assistant",
        text: "ミン様・明日15:00で登録しました。2時間前にZaloでリマインドし、スタッフにもCRMで共有しますね。",
      },
      { role: "user", text: "ありがとうございます" },
      {
        role: "assistant",
        text: "時間変更が必要ならいつでもご連絡ください。スタッフにも通知済みです。",
      },
    ],
  },
  inputPlaceholder: "メッセージを入力…",
};



export const agentDolphinHomeByLocale: Record<Locale, AgentDolphinHomeCopy> = {
  vi: homeVi,
  en: homeEn,
  ja: homeJa,
};

export function getAgentDolphinHomeCopy(locale: Locale): AgentDolphinHomeCopy {
  return agentDolphinHomeByLocale[locale] ?? agentDolphinHomeByLocale.en;
}
