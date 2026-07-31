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
  faqEyebrow: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  closeEyebrow: string;
  closeTitle: string;
  closeSupport: string;
  closeCta: string;
};

const vi: AgentDolphinCopy = {
  metaTitle: "Agent Dolphin | Support website thông minh | Dolphin Software",
  metaDescription:
    "Agent Dolphin gắn trên website — hỗ trợ khách bằng LLM + context nghiệp vụ + context khách hàng, chăm sóc như nhân viên chuyên nghiệp có cảm xúc.",
  eyebrow: "Agent Dolphin",
  headline: "Support website như [[nhân viên]] — không chatbot máy móc",
  support:
    "Agent Dolphin đảm nhiệm chăm sóc khách trên website của bạn. Khác chatbox trả lời theo kịch bản: kết hợp mô hình LLM với context doanh nghiệp và context từng khách để tư vấn, lắng nghe và xử lý đúng ngữ cảnh.",
  ctaPrimary: "Trao đổi triển khai",
  ctaSecondary: "Xem AI Agent khác",
  trustLine: "LLM · Business context · Client context · Giọng điệu thương hiệu",
  compareEyebrow: "Khác biệt",
  compareTitle: "Chatbox truyền thống vs [[Agent Dolphin]]",
  compareSupport:
    "Cùng nằm góc website — một bên trả lời cứng, một bên hiểu việc và cảm xúc khách.",
  oldTitle: "Chatbox / FAQ bot thông thường",
  oldItems: [
    "Trả lời theo script — câu ngoài kịch bản dễ tắc hoặc lan man",
    "Không biết sản phẩm, chính sách, tồn kho hay ưu đãi của bạn",
    "Không nhớ lịch sử khách — mỗi lần hỏi như người lạ",
    "Giọng điệu máy móc — khó tạo tin tưởng hay giữ chân",
  ],
  newTitle: "Agent Dolphin",
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
  howTitle: "Gắn Agent Dolphin lên [[website]] của bạn",
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
  faqEyebrow: "FAQ",
  faqTitle: "Câu hỏi thường gặp",
  faqItems: [
    {
      q: "Agent Dolphin khác chatbot có sẵn thế nào?",
      a: "Chatbot sẵn thường chạy script. Agent Dolphin dùng LLM kèm knowledge và ngữ cảnh khách của bạn — trả lời linh hoạt hơn nhưng vẫn trong guardrail.",
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
    "Gửi link site và mô tả loại khách bạn nhận — Dolphin Software đề xuất phạm vi Agent Dolphin và cách gắn.",
  closeCta: "Nhận tư vấn Agent Dolphin",
};

const en: AgentDolphinCopy = {
  metaTitle: "Agent Dolphin | Smart website support | Dolphin Software",
  metaDescription:
    "Agent Dolphin on your website — customer care with an LLM plus business and customer context, like a professional staff member with empathy.",
  eyebrow: "Agent Dolphin",
  headline: "Website support like a [[teammate]] — not a scripted bot",
  support:
    "Agent Dolphin handles customer care on your site. Unlike mechanical chatboxes, it combines an LLM with your business context and each visitor’s context to listen, advise, and respond in the right tone.",
  ctaPrimary: "Talk implementation",
  ctaSecondary: "See other AI agents",
  trustLine: "LLM · Business context · Client context · Brand voice",
  compareEyebrow: "Difference",
  compareTitle: "Traditional chatbox vs [[Agent Dolphin]]",
  compareSupport:
    "Same corner of the site — one replies rigidly, the other understands the job and the customer’s mood.",
  oldTitle: "Typical FAQ / script chatbox",
  oldItems: [
    "Script-bound answers — off-script questions stall or ramble",
    "No knowledge of your products, policies, stock, or offers",
    "No memory of the visitor — every chat starts cold",
    "Robotic tone — hard to build trust or keep people engaged",
  ],
  newTitle: "Agent Dolphin",
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
  howTitle: "Put Agent Dolphin on [[your website]]",
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
  faqEyebrow: "FAQ",
  faqTitle: "Common questions",
  faqItems: [
    {
      q: "How is Agent Dolphin different from an off-the-shelf chatbot?",
      a: "Shelf bots often run scripts. Agent Dolphin uses an LLM with your knowledge and visitor context — more flexible, still inside guardrails.",
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
    "Send your site URL and who you serve — we’ll propose Agent Dolphin scope and how to embed it.",
  closeCta: "Get Agent Dolphin advice",
};

const ja: AgentDolphinCopy = {
  metaTitle: "Agent Dolphin | サイトのスマートサポート | Dolphin Software",
  metaDescription:
    "Agent Dolphin はサイト上の顧客対応を担当。LLM に業務コンテキストと顧客コンテキストを組み合わせ、感情のあるプロのスタッフのようにサポートします。",
  eyebrow: "Agent Dolphin",
  headline: "機械的なチャットではなく、[[スタッフ]]のようなサイトサポート",
  support:
    "Agent Dolphin がサイトのカスタマーケアを担います。定型ボットと違い、LLM に御社の業務知識と来訪者の文脈を載せて、適切に聞き・案内・対応します。",
  ctaPrimary: "導入を相談",
  ctaSecondary: "他の AI Agent を見る",
  trustLine: "LLM · 業務コンテキスト · 顧客コンテキスト · ブランドトーン",
  compareEyebrow: "違い",
  compareTitle: "従来チャット vs [[Agent Dolphin]]",
  compareSupport:
    "同じウィジェット位置でも、硬い返答と、仕事と気持ちを理解する対応は別物です。",
  oldTitle: "一般的な FAQ / スクリプトボット",
  oldItems: [
    "台本通り — 想定外の質問で止まりやすい",
    "商品・規約・在庫・キャンペーンを知らない",
    "来訪者の履歴なし — 毎回初対面",
    "機械的な口調 — 信頼や継続が難しい",
  ],
  newTitle: "Agent Dolphin",
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
  howTitle: "Agent Dolphin を[[サイト]]に載せる",
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
  faqEyebrow: "FAQ",
  faqTitle: "よくある質問",
  faqItems: [
    {
      q: "既製チャットボットとの違いは？",
      a: "既製品は台本が多いです。Agent Dolphin は LLM に御社知識と来訪文脈を載せ、ガードレール内で柔軟に答えます。",
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
    "サイトURLと想定顧客を送ってください。Agent Dolphin の範囲と埋め方をご提案します。",
  closeCta: "Agent Dolphin を相談",
};

const de: AgentDolphinCopy = {
  metaTitle: "Agent Dolphin | Cleverer Website-Support | Dolphin Software",
  metaDescription:
    "Agent Dolphin auf Ihrer Website — Kundenservice mit LLM plus Business- und Kundenkontext, wie ein empathischer Mitarbeiter.",
  eyebrow: "Agent Dolphin",
  headline: "Website-Support wie ein [[Teammitglied]] — kein Skript-Bot",
  support:
    "Agent Dolphin übernimmt die Kundenbetreuung auf Ihrer Site. Anders als starre Chatboxen kombiniert er ein LLM mit Ihrem Business-Kontext und dem Kontext jedes Besuchers.",
  ctaPrimary: "Umsetzung besprechen",
  ctaSecondary: "Andere AI Agents",
  trustLine: "LLM · Business-Kontext · Kundenkontext · Markenstimme",
  compareEyebrow: "Unterschied",
  compareTitle: "Klassische Chatbox vs [[Agent Dolphin]]",
  compareSupport:
    "Gleiche Ecke der Website — eine antwortet starr, die andere versteht Aufgabe und Stimmung.",
  oldTitle: "Typische FAQ-/Skript-Chatbox",
  oldItems: [
    "Skriptgebunden — Off-Script-Fragen stocken",
    "Kennt Preise, Policies, Bestand nicht",
    "Kein Besuchergedächtnis — jedes Chat kalt",
    "Roboter-Ton — wenig Vertrauen",
  ],
  newTitle: "Agent Dolphin",
  newItems: [
    "Flexibles LLM im erlaubten Scope — nicht nur FAQ-Buttons",
    "Business-Kontext: Preise, Services, Prozess, Ansprache",
    "Kundenkontext: Session, Verhalten, geteilte Infos",
    "Nahe am echten Mitarbeitenden — höflich, empathisch, on-brand",
  ],
  pillarsEyebrow: "Drei Kontextebenen",
  pillarsTitle: "KI-Modell + [[Business]] + [[Kunde]]",
  pillarsSupport:
    "Drei Quellen gleichzeitig — richtige Aufgabe, Person und Stimme.",
  pillars: [
    {
      title: "LLM",
      body: "Natürliche Sprache, Rückfragen, flüssige Formulierung — kein Copy-Paste-Skript.",
    },
    {
      title: "Business-Kontext",
      body: "Ihr Shop-/Studio-Wissen: Services, Preise, Policies, interne FAQ, Tonalität.",
    },
    {
      title: "Kundenkontext",
      body: "Aktuelle Session und bekannte Signale (Formulare, Seite, Historie) für persönliche Antworten.",
    },
  ],
  howEyebrow: "Ablauf",
  howTitle: "Agent Dolphin auf [[Ihrer Website]]",
  howSupport: "Vier Schritte — von der Markenstimme zum Live-Widget.",
  howSteps: [
    {
      title: "Ops & Ton erfassen",
      body: "Kurzer Workshop: Services, Ausnahmen, Ansprache, Eskalation an Menschen.",
    },
    {
      title: "Wissen + Guardrails",
      body: "Docs/FAQ/Policy in den Kontext; Scope für Solo-Antworten festlegen.",
    },
    {
      title: "Widget & Kanäle",
      body: "Website-Embed (optional Zalo/CRM). Tickets wenn Menschen übernehmen.",
    },
    {
      title: "Monitor & Feinschliff",
      body: "Echte Chats prüfen, Prompts/Kontext nachschärfen.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Häufige Fragen",
  faqItems: [
    {
      q: "Unterschied zu Fertig-Chatbots?",
      a: "Fertige Bots oft skriptbasiert. Agent Dolphin nutzt LLM mit Ihrem Wissen und Besucherkontext — flexibel, aber mit Guardrails.",
    },
    {
      q: "Ersetzt es Support-Personal?",
      a: "Nicht zwingend. Es deckt Wiederholung und außerhalb der Zeiten ab; Sensibles eskaliert — mit Logs.",
    },
    {
      q: "Muss die Website von Dolphin Software sein?",
      a: "Nein. Embed auf bestehender Site möglich. Neue Sites liefern wir agent-ready.",
    },
    {
      q: "Sind Kundendaten sicher?",
      a: "Speicherumfang und Kanäle vertraglich klar. Nur support-relevanter Kontext.",
    },
  ],
  closeEyebrow: "Start",
  closeTitle: "Lassen Sie die Site [[professioneller]] betreuen",
  closeSupport:
    "Senden Sie URL und Zielkunden — wir schlagen Scope und Embed für Agent Dolphin vor.",
  closeCta: "Agent Dolphin beraten lassen",
};

const zh: AgentDolphinCopy = {
  metaTitle: "Agent Dolphin | 智能网站客服 | Dolphin Software",
  metaDescription:
    "Agent Dolphin 部署在您的网站 — 用 LLM + 业务上下文 + 客户上下文提供有温度的专业客服，而非机械话术机器人。",
  eyebrow: "Agent Dolphin",
  headline: "像[[同事]]一样做客服 — 不是机械聊天框",
  support:
    "Agent Dolphin 负责网站上的客户关怀。不同于按剧本回答的聊天框：结合大模型、您的业务知识与每位访客的上下文，倾听、建议并以合适语气回应。",
  ctaPrimary: "咨询落地",
  ctaSecondary: "查看其他 AI Agent",
  trustLine: "LLM · 业务上下文 · 客户上下文 · 品牌语气",
  compareEyebrow: "区别",
  compareTitle: "传统聊天框 vs [[Agent Dolphin]]",
  compareSupport: "同在网站一角 — 一边生硬回复，一边理解业务与情绪。",
  oldTitle: "常见 FAQ / 脚本机器人",
  oldItems: [
    "按剧本回答 — 超纲问题容易卡住",
    "不了解您的产品、政策、库存或活动",
    "不记得访客 — 每次都像陌生人",
    "机械语气 — 难建立信任",
  ],
  newTitle: "Agent Dolphin",
  newItems: [
    "在允许范围内灵活用 LLM — 不只是 FAQ 按钮",
    "业务上下文：价格、服务、流程、称呼方式",
    "客户上下文：会话、行为、已提供的信息",
    "接近真人同事 — 礼貌、共情、符合品牌",
  ],
  pillarsEyebrow: "三层上下文",
  pillarsTitle: "模型 + [[业务]] + [[客户]]",
  pillarsSupport: "三路信息同时运转 — 答对事、对人、对语气。",
  pillars: [
    {
      title: "大模型 LLM",
      body: "自然语言、必要时追问、表达流畅 — 不是复制粘贴话术。",
    },
    {
      title: "业务上下文",
      body: "您的门店/工作室知识：服务、价格、政策、内部 FAQ、品牌声音。",
    },
    {
      title: "客户上下文",
      body: "当前会话与已知信号（表单、浏览页、历史）做个性化回复。",
    },
  ],
  howEyebrow: "如何上线",
  howTitle: "把 Agent Dolphin 接到[[您的网站]]",
  howSupport: "四步 — 从品牌语气到线上小组件。",
  howSteps: [
    {
      title: "梳理业务与语气",
      body: "短工作坊：服务、例外、称呼、必须转人工的事项。",
    },
    {
      title: "装载知识与护栏",
      body: "文档/FAQ/政策进入知识库；划定可独自回答的范围。",
    },
    {
      title: "嵌入组件与渠道",
      body: "网站嵌入（可选 Zalo/CRM）。需人工时同步线索/工单。",
    },
    {
      title: "监测与调优",
      body: "看真实对话，按卡点调整提示词/知识 — 越用越贴。",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "常见问题",
  faqItems: [
    {
      q: "和成品聊天机器人有何不同？",
      a: "成品多靠脚本。Agent Dolphin 用 LLM 加载您的知识与访客上下文 — 更灵活，仍有护栏。",
    },
    {
      q: "会完全取代客服人员吗？",
      a: "不必。它覆盖重复与非工作时间；敏感或超范围转人工 — 有日志。",
    },
    {
      q: "网站必须由 Dolphin Software 制作吗？",
      a: "不必。现有站可嵌入。我们新做的站可直接预装。",
    },
    {
      q: "客户数据安全吗？",
      a: "存储范围与通道在合同中明确。只加载客服所需上下文。",
    },
  ],
  closeEyebrow: "开始",
  closeTitle: "让网站更[[专业地]]照顾访客",
  closeSupport:
    "发来网站链接与客群说明 — 我们给出 Agent Dolphin 范围与嵌入方式。",
  closeCta: "咨询 Agent Dolphin",
};

export const agentDolphinByLocale: Record<Locale, AgentDolphinCopy> = {
  vi,
  en,
  ja,
  de,
  zh,
};

export function getAgentDolphinCopy(locale: Locale): AgentDolphinCopy {
  return agentDolphinByLocale[locale] ?? agentDolphinByLocale.en;
}
