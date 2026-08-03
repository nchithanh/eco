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
  metaTitle: "Dolphin Care — AI chăm sóc khách hàng trên website",
  metaDescription:
    "Dolphin Care là giải pháp AI chăm sóc khách hàng trên website cho SMB Việt Nam — kết hợp LLM, nghiệp vụ doanh nghiệp và ngữ cảnh khách hàng để trả lời đúng việc, đúng giọng thương hiệu. Tích hợp được vào website hiện có.",
  eyebrow: "Dolphin Care",
  headline:
    "AI chăm sóc khách hàng trên [[website]], hoạt động như một thành viên nhóm",
  support:
    "Dolphin Care là công cụ AI chăm sóc khách hàng trên website do Dolphin Software phát triển. Không phải chatbot theo kịch bản — Dolphin Care kết hợp mô hình ngôn ngữ lớn (LLM) với nghiệp vụ doanh nghiệp và ngữ cảnh từng khách truy cập để lắng nghe, tư vấn và phản hồi đúng giọng điệu thương hiệu. Phù hợp SMB Việt Nam muốn nâng hỗ trợ trên website mà không mở rộng đội ngũ; tích hợp được vào website đang chạy hoặc mới — không bắt buộc do Dolphin Software xây.",
  ctaPrimary: "Trao đổi về tích hợp",
  ctaSecondary: "Xem lộ trình AI",
  trustLine:
    "LLM · Nghiệp vụ doanh nghiệp · Ngữ cảnh khách hàng · Giọng thương hiệu",
  heroAgentName: "Dolphin Care",
  heroJustNow: "bây giờ",
  heroCards: [
    "Chào anh/chị! Em kiểm tra đơn #123456 — đang đóng gói, dự kiến giao ngày mai ạ.",
    "Anh/chị muốn đổi size M navy không? Còn hàng và giữ được đến 18h hôm nay.",
    "Em đã ghi địa chỉ Quận 1. Có gì cần thêm cứ nhắn — em hỗ trợ liền.",
  ],
  compareEyebrow: "Khác biệt",
  compareTitle:
    "Chatbot AI cho doanh nghiệp: Dolphin Care khác [[chatbot]] thông thường ở điểm nào?",
  compareSupport:
    "Dolphin Care khác chatbot thông thường vì không chạy theo kịch bản cố định. Thay vào đó, nó kết hợp LLM với dữ liệu nghiệp vụ thực tế và ngữ cảnh từng phiên truy cập để trả lời linh hoạt, đúng việc, đúng người. Cùng một góc nhỏ trên website — nhưng một bên trả lời cứng nhắc, bên kia hiểu được công việc và tâm lý khách hàng.",
  oldTitle: "Chatbot FAQ / kịch bản thông thường",
  oldItems: [
    "Câu trả lời bị giới hạn bởi script — câu hỏi ngoài kịch bản thì tắc hoặc lan man",
    "Không biết gì về sản phẩm, chính sách, tồn kho hay ưu đãi của bạn",
    "Không nhớ khách truy cập — mỗi cuộc chat đều bắt đầu từ đầu",
    "Giọng điệu máy móc — khó xây dựng niềm tin hay giữ chân khách",
  ],
  newTitle: "Dolphin Care — AI chăm sóc khách hàng trên website",
  newItems: [
    "Phản hồi linh hoạt bằng LLM trong phạm vi được phép — không chỉ là nút FAQ",
    "Business context: giá dịch vụ, quy trình, chính sách, cách doanh nghiệp xưng hô với khách",
    "Client context: phiên truy cập hiện tại, hành vi, thông tin khách đã chia sẻ trước đó",
    "Chăm sóc gần với một thành viên thực sự — lịch sự, đồng cảm, đúng thương hiệu",
  ],
  pillarsEyebrow: "Ba lớp thông tin",
  pillarsTitle: "Cơ chế hoạt động của [[Dolphin Care]]",
  pillarsSupport:
    "Dolphin Care hoạt động dựa trên ba nguồn thông tin đồng thời — giúp agent trả lời đúng nghiệp vụ, đúng đối tượng, đúng giọng điệu.",
  pillars: [
    {
      title: "01 — LLM (Mô hình ngôn ngữ lớn)",
      body: "Ngôn ngữ tự nhiên, đặt câu hỏi làm rõ khi cần, diễn đạt trôi chảy — không phải copy-paste kịch bản.",
    },
    {
      title: "02 — Business context (Nghiệp vụ doanh nghiệp)",
      body: "Kiến thức của shop/studio bạn: dịch vụ, báo giá, chính sách, FAQ nội bộ, giọng điệu thương hiệu.",
    },
    {
      title: "03 — Customer context (Ngữ cảnh khách hàng)",
      body: "Phiên truy cập hiện tại và các tín hiệu đã biết (form điền, trang đã xem, lịch sử nếu có) để trả lời cá nhân hóa.",
    },
  ],
  howEyebrow: "Tích hợp AI cho website",
  howTitle: "Quy trình triển khai [[Dolphin Care]]",
  howSupport:
    "Bốn bước từ lúc xác định giọng thương hiệu đến khi widget lên sóng trên website thực tế.",
  howSteps: [
    {
      title: "Bước 1 — Thu thập nghiệp vụ và giọng điệu",
      body: "Workshop ngắn: các dịch vụ, trường hợp ngoại lệ, cách xưng hô với khách, những gì cần leo thang lên người thật.",
    },
    {
      title: "Bước 2 — Nạp knowledge base và thiết lập guardrails",
      body: "Tài liệu, FAQ, chính sách được nạp vào context store; xác định phạm vi những gì agent được phép tự trả lời.",
    },
    {
      title: "Bước 3 — Nhúng widget và kết nối kênh",
      body: "Nhúng vào website (tùy chọn tích hợp Zalo/CRM). Đồng bộ lead/ticket khi cần chuyển sang người thật.",
    },
    {
      title: "Bước 4 — Theo dõi và tinh chỉnh",
      body: "Xem lại chat thực tế, điều chỉnh prompt/context ở những điểm khách bị tắc — càng dùng càng tốt hơn.",
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
  faqTitle: "Câu hỏi thường gặp về Dolphin Care",
  faqItems: [
    {
      q: "Dolphin Care là gì và khác chatbot thông thường thế nào?",
      a: "Dolphin Care là giải pháp AI chăm sóc khách hàng trên website do Dolphin Software phát triển, dành cho SMB Việt Nam. Khác với chatbot chạy script, Dolphin Care dùng LLM kết hợp với nghiệp vụ doanh nghiệp và ngữ cảnh khách truy cập — trả lời linh hoạt hơn, nhưng vẫn trong phạm vi kiểm soát. Cần agent gắn sâu quy trình nội bộ? Xem lộ trình AI tại /ai-transform/.",
    },
    {
      q: "Dolphin Care có thay thế nhân viên hỗ trợ không?",
      a: "Không bắt buộc. Dolphin Care xử lý các câu hỏi lặp lại và hỗ trợ ngoài giờ làm việc. Các trường hợp nhạy cảm hoặc ngoài phạm vi sẽ được chuyển tiếp cho người thật — kèm log đầy đủ.",
    },
    {
      q: "Website có cần do Dolphin Software xây dựng mới tích hợp được không?",
      a: "Không. Dolphin Care có thể nhúng vào website đang chạy nếu cho phép widget/API. Các website mới do Dolphin Software xây dựng sẽ được tích hợp agent sẵn khi bàn giao. Xem dịch vụ web tại /services/web/.",
    },
    {
      q: "Dữ liệu khách hàng có được bảo mật không?",
      a: "Có. Phạm vi lưu trữ và kênh dữ liệu được xác định cụ thể trong hợp đồng. Chỉ context liên quan đến hỗ trợ mới được nạp vào — không phải toàn bộ dữ liệu kinh doanh.",
    },
    {
      q: "Dolphin Care có hỗ trợ tích hợp Zalo không?",
      a: "Có. Dolphin Care hỗ trợ tích hợp tùy chọn với Zalo và CRM, giúp đồng bộ lead và ticket khi cần chuyển tiếp sang nhân viên hỗ trợ thực tế.",
    },
    {
      q: "Chi phí triển khai Dolphin Care như thế nào?",
      a: "Dolphin Software báo giá minh bạch theo phạm vi dự án — không phát sinh phí ẩn, không bán thêm dịch vụ không cần thiết. Gửi URL website và mô tả đối tượng khách hàng để nhận đề xuất phù hợp.",
    },
  ],
  closeEyebrow: "Bắt đầu",
  closeTitle: "Để website chăm sóc khách hàng [[chuyên nghiệp]] hơn",
  closeSupport:
    "Gửi URL website và đối tượng bạn phục vụ — Dolphin Software sẽ đề xuất phạm vi Dolphin Care và cách tích hợp phù hợp nhất.",
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
  ctaSecondary: "See AI roadmap",
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
      a: "Shelf bots often run scripts. Dolphin Care uses an LLM with your knowledge and visitor context — more flexible, still inside guardrails. Need an agent deeply tied to internal processes? See the AI roadmap at /ai-transform/.",
    },
    {
      q: "Does it replace support staff?",
      a: "Not required. It covers repetitive and after-hours questions; sensitive or out-of-scope cases escalate to people — with logs.",
    },
    {
      q: "Must Dolphin Software build the website?",
      a: "No. We can embed on an existing site if widgets/APIs are allowed. New sites we build ship with the agent ready. See web services at /services/web/.",
    },
    {
      q: "Is customer data safe?",
      a: "Storage scope and channels are fixed in the agreement. Only support-relevant context is loaded — not an open dump.",
    },
    {
      q: "Does Dolphin Care support Zalo integration?",
      a: "Yes. Dolphin Care supports optional integration with Zalo and CRM, syncing leads and tickets when escalating to real support staff.",
    },
    {
      q: "How does Dolphin Care pricing work?",
      a: "Dolphin Software quotes transparently by project scope — no hidden fees, no unnecessary upsells. Send your website URL and customer profile for a fitting proposal.",
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
  ctaSecondary: "AIロードマップを見る",
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
      a: "既製品は台本が多いです。Dolphin Care は LLM に御社知識と来訪文脈を載せ、ガードレール内で柔軟に答えます。社内プロセスと深く連携するエージェントが必要なら /ai-transform/ のAIロードマップをご覧ください。",
    },
    {
      q: "サポート担当を置き換えますか？",
      a: "必須ではありません。反復・時間外を担当し、機微や範囲外は人へ。ログで把握できます。",
    },
    {
      q: "サイトは Dolphin Software 製が必要？",
      a: "不要です。埋め込み可能なら既存サイトにも。新規制作なら最初から組み込みやすいです。Webサービスは /services/web/ をご覧ください。",
    },
    {
      q: "顧客データは安全？",
      a: "保存範囲とチャネルは契約で明確化。サポートに必要な文脈だけを載せます。",
    },
    {
      q: "Dolphin Care は Zalo 連携に対応していますか？",
      a: "はい。Dolphin Care はオプションで Zalo や CRM と連携し、人へのエスカレーション時にリードやチケットを同期します。",
    },
    {
      q: "Dolphin Care の料金体系は？",
      a: "Dolphin Software はプロジェクトスコープに応じて明確に見積もります。隠れた費用や不要なアップセルはありません。サイトURLと想定顧客像をお送りください。",
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
      { role: "user", text: "Lan, 0901 234 567" },
      {
        role: "assistant",
        text: "Đã ghi nhận chị Lan — 15:00 mai, massage 60 phút. Em gửi xác nhận Zalo và báo nhân viên trên CRM ngay ạ.",
      },
      { role: "user", text: "Ok cảm ơn" },
      {
        role: "assistant",
        text: "Đã gửi Zalo rồi. Trước giờ hẹn 2 tiếng em nhắc lại — cần đổi lịch cứ nhắn nhé.",
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
  situationsLabel: "Dolphin Care handles:",
  situations: [
    "Pricing questions",
    "Availability checks",
    "Address requests",
    "Service inquiries",
    "Phone capture",
    "Staff escalation",
  ],
  industriesLabel: "Fits",
  industries: [
    "Spas",
    "Clinics",
    "Restaurants",
    "Education",
    "Showrooms",
    "Real estate",
  ],
  pipelineLabel: "How it works (not a rigid chatbot)",
  pipeline: [
    "Understand context",
    "Gather info",
    "Book appointment",
    "Send Zalo / CRM",
    "Notify staff",
    "Follow up",
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
  situationsLabel: "Dolphin Care が対応できる内容：",
  situations: [
    "料金の質問",
    "空き状況の確認",
    "住所の問い合わせ",
    "サービス内容の質問",
    "電話番号の取得",
    "スタッフへのエスカレーション",
  ],
  industriesLabel: "適した業種",
  industries: [
    "スパ",
    "クリニック",
    "レストラン",
    "教育",
    "ショールーム",
    "不動産",
  ],
  pipelineLabel: "動作の流れ（硬いチャットボットではない）",
  pipeline: [
    "文脈を理解",
    "情報を収集",
    "予約",
    "Zalo / CRM送信",
    "スタッフに通知",
    "フォローアップ",
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
