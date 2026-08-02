import type { Locale } from "@/lib/i18n/types";

export type CustomAgentCopy = {
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
  offShelfTitle: string;
  offShelfItems: string[];
  customTitle: string;
  customItems: string[];
  whenEyebrow: string;
  whenTitle: string;
  whenSupport: string;
  whenItems: { title: string; body: string }[];
  processEyebrow: string;
  processTitle: string;
  processSupport: string;
  processSteps: { title: string; body: string }[];
  industriesEyebrow: string;
  industriesTitle: string;
  industriesSupport: string;
  industries: { name: string; body: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  closeEyebrow: string;
  closeTitle: string;
  closeSupport: string;
  closeCta: string;
};

const vi: CustomAgentCopy = {
  metaTitle: "AI Agent theo yêu cầu | Dolphin Software",
  metaDescription:
    "Đặt AI Agent gắn nghiệp vụ thật — nối CRM, Zalo, lịch — gánh một khâu tới kết quả đo được. Không chatbot kịch bản bán sẵn.",
  eyebrow: "AI Agent theo yêu cầu",
  headline: "Đặt riêng agent gánh đúng [[nghiệp vụ]] của bạn",
  support:
    "Không phải chatbot bán sẵn trả lời cho có. Dolphin nạp quy trình, bảng giá và chính sách của bạn, nối hệ thống đang chạy — agent tự nhận việc và làm tới kết quả đo được.",
  ctaPrimary: "Trao đổi phạm vi",
  ctaSecondary: "Xem dịch vụ khác",
  trustLine: "Human-in-the-loop · Log rõ · Bàn giao vận hành được",
  compareEyebrow: "Phân biệt rõ",
  compareTitle: "Agent theo yêu cầu khác [[chatbot bán sẵn]] thế nào?",
  compareSupport:
    "Cùng chữ “AI”, hai cách làm khác hẳn — một cái chờ người hỏi, một cái gắn vào khâu vận hành.",
  offShelfTitle: "Chatbot / tool bán sẵn",
  offShelfItems: [
    "Chạy kịch bản cứng — câu ngoài script thường tắc",
    "Không biết quy trình, giá, tồn kho hay ngoại lệ của bạn",
    "Trả lời xong là hết — không ghi lead, không chuyển việc",
    "Mỗi người xài một kiểu — kết quả khó đo, khó chuẩn hóa",
  ],
  customTitle: "AI Agent viết theo yêu cầu",
  customItems: [
    "Nạp nghiệp vụ thật: quy trình, giá, cách xưng hô, ngoại lệ",
    "Nối CRM / Zalo / lịch / thanh toán đang dùng — không bắt đổi cả bộ",
    "Tự nhận việc và làm tới kết quả: lead, lịch, báo giá… trong scope",
    "Người duyệt khâu nhạy cảm; có log để kiểm soát và tinh chỉnh",
  ],
  whenEyebrow: "Khi nào nên làm",
  whenTitle: "Ba dấu hiệu khâu đang [[đốt người]]",
  whenSupport:
    "Đáng đầu tư khi có quy trình riêng mà tool sẵn không khớp, và một khâu lặp mỗi ngày đang ngốn giờ.",
  whenItems: [
    {
      title: "Khách hỏi cùng một kiểu suốt ngày",
      body: "Giá, lịch trống, còn hàng không — nhân viên trả lời tay hàng trăm lượt; ngoài giờ thì rớt khách.",
    },
    {
      title: "Copy dữ liệu qua lại giữa phần mềm",
      body: "Tin nhắn → Excel → CRM → báo cáo. Mỗi lần chép là một lần sai và một người bị đốt vào việc máy làm được.",
    },
    {
      title: "Một khâu lặp, quy tắc rõ, ngốn nhiều người",
      body: "Sàng lead, nhắc lịch, soạn giấy theo mẫu — đúng chỗ agent theo yêu cầu hoàn vốn nhanh nhất.",
    },
  ],
  processEyebrow: "Cách Dolphin Software làm",
  processTitle: "Đi từ [[việc thật]], không gắn đại một con bot",
  processSupport: "Năm bước — mỗi bước có đầu ra rõ, đo được trước khi mở rộng.",
  processSteps: [
    {
      title: "Soi luồng việc",
      body: "Vẽ đường đi khách/đơn hàng, chọn khâu lặp và đốt người nhất trước — không làm tràn lan.",
    },
    {
      title: "Nạp nghiệp vụ riêng",
      body: "Quy trình, bảng giá, chính sách, cách xưng hô — phần làm agent “của bạn”, khác tool generic.",
    },
    {
      title: "Nối hệ thống đang chạy",
      body: "CRM, Zalo, lịch, thanh toán trong phạm vi đã chốt — giữ máy cũ, thêm một nhân sự số biết xài chúng.",
    },
    {
      title: "Chạy thử một khâu, đo số",
      body: "Pilot trên việc thật: tin tự trả lời, lead gom được, giờ công tiết kiệm — rồi mới mở rộng.",
    },
    {
      title: "Bàn giao và tinh chỉnh",
      body: "Docs ngắn, quyền truy cập, checklist. Khi quy trình/giá đổi — chỉnh theo bảo hành hoặc hạng mục riêng.",
    },
  ],
  industriesEyebrow: "Theo ngành",
  industriesTitle: "Cùng cách dựng, [[đổi nghiệp vụ]] theo ngành",
  industriesSupport:
    "Ngành nào có quy tắc rõ và việc lặp mỗi ngày là viết được. Ví dụ khâu agent thường gánh:",
  industries: [
    {
      name: "Spa & thẩm mỹ",
      body: "Tư vấn liệu trình, đặt lịch vào slot thật, nhắc tái khám theo chu kỳ.",
    },
    {
      name: "Giáo dục / trung tâm",
      body: "Tư vấn khóa đúng trình độ, sàng nhu cầu thật, nhắc học phí khéo.",
    },
    {
      name: "F&B / nhà hàng",
      body: "Nhận đặt bàn, gợi ý theo số khách, gom feedback sau bữa.",
    },
    {
      name: "Bất động sản",
      body: "Sàng theo ngân sách & khu vực, gửi giỏ phù hợp, đặt lịch xem.",
    },
    {
      name: "Phòng khám / dịch vụ",
      body: "Đặt lịch, nhắc khám, trả lời FAQ trong giờ và ngoài giờ theo quy tắc.",
    },
    {
      name: "Ngành của bạn",
      body: "Kể khâu đang đốt người nhất — Dolphin nói thẳng viết được hay không trong scope.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Hỏi nhanh về [[AI Agent theo yêu cầu]]",
  faqItems: [
    {
      q: "Khác chatbot bán sẵn ra sao?",
      a: "Chatbot kịch bản tắc ngoài script và không biết doanh nghiệp bạn. Agent theo yêu cầu được nạp nghiệp vụ, nối hệ thống và làm tới kết quả trong phạm vi đã chốt.",
    },
    {
      q: "Doanh nghiệp nhỏ có làm được không?",
      a: "Có — bắt đầu một khâu đau nhất, đo bằng số, rồi mở rộng. Không vẽ hệ thống đồ sộ ngày đầu.",
    },
    {
      q: "Mất bao lâu cho agent đầu tiên?",
      a: "Tuỳ độ phức tạp và số hệ thống cần nối — ưu tiên một khâu gọn để thấy kết quả sớm trên việc thật.",
    },
    {
      q: "Có cần người trông sau bàn giao?",
      a: "Có cho bước nhạy cảm. Dolphin bàn giao hướng dẫn vận hành; tinh chỉnh khi quy trình đổi theo thỏa thuận.",
    },
  ],
  closeEyebrow: "Bắt đầu",
  closeTitle: "Khâu đang đốt người nhất — để agent [[gánh thử]]",
  closeSupport:
    "Mang đúng việc đó tới buổi trao đổi. Dolphin soi luồng, nói thẳng làm được gì trong scope, rồi chốt milestone đo được.",
  closeCta: "Liên hệ Dolphin Software",
};

const en: CustomAgentCopy = {
  metaTitle: "Custom AI agents | Dolphin Software",
  metaDescription:
    "Commission an AI agent tied to your real process — CRM, messaging, calendar — one job through to measurable outcomes. Not an off-the-shelf scripted chatbot.",
  eyebrow: "Custom AI agents",
  headline: "An agent built for [[your operations]] — not a generic bot",
  support:
    "Not a store-bought chatbot that answers for show. Dolphin loads your process, pricing, and policies, connects systems you already run — the agent takes work and finishes measurable outcomes.",
  ctaPrimary: "Discuss scope",
  ctaSecondary: "See other services",
  trustLine: "Human-in-the-loop · Clear logs · Operable handover",
  compareEyebrow: "Clear difference",
  compareTitle: "Custom agents vs [[off-the-shelf chatbots]]",
  compareSupport:
    "Same “AI” label — one waits for prompts, the other attaches to an operating job.",
  offShelfTitle: "Off-the-shelf chatbot / seats",
  offShelfItems: [
    "Hard scripts — odd questions often stall",
    "No knowledge of your process, pricing, or exceptions",
    "Answers and stops — no lead capture or handoff",
    "Each person uses it differently — hard to measure",
  ],
  customTitle: "Custom agent to order",
  customItems: [
    "Real business rules: process, pricing, tone, exceptions",
    "Connect CRM / chat / calendar / payments you already use",
    "Owns a job through to outcomes: leads, bookings, quotes…",
    "Humans approve sensitive steps; logs for control and tuning",
  ],
  whenEyebrow: "When it pays",
  whenTitle: "Three signs a job is [[burning people]]",
  whenSupport:
    "Worth it when you have a real process tools don’t fit — and a daily repetitive job eating hours.",
  whenItems: [
    {
      title: "The same questions all day",
      body: "Price, slots, stock — staff answer by hand hundreds of times; after hours you lose customers.",
    },
    {
      title: "Copy-paste between tools",
      body: "Chat → sheet → CRM → report. Every copy is an error risk and wasted labor machines can do.",
    },
    {
      title: "Clear rules, high headcount, low variety",
      body: "Lead triage, reminders, template docs — where a custom agent pays back fastest.",
    },
  ],
  processEyebrow: "How Dolphin Software works",
  processTitle: "Start from [[real work]], not a random bot",
  processSupport: "Five steps — each with a clear output before you expand.",
  processSteps: [
    {
      title: "Map the flow",
      body: "Trace a customer or order path; pick the most repetitive, costly step first.",
    },
    {
      title: "Load your rules",
      body: "Process, pricing, policies, tone — what makes the agent yours vs a generic tool.",
    },
    {
      title: "Connect running systems",
      body: "CRM, messaging, calendar, payments in agreed scope — keep your stack, add a digital teammate.",
    },
    {
      title: "Pilot one job, measure",
      body: "Live cases: auto-replies, captured leads, hours saved — then expand.",
    },
    {
      title: "Handover and tune",
      body: "Short docs, access, checklist. When rules change — tune under warranty or a scoped follow-up.",
    },
  ],
  industriesEyebrow: "By industry",
  industriesTitle: "Same build method, [[swap the playbook]]",
  industriesSupport:
    "If rules are clear and work repeats daily, we can write it. Common jobs:",
  industries: [
    {
      name: "Spa & beauty",
      body: "Treatment advice, real-slot booking, revisit reminders.",
    },
    {
      name: "Education / centers",
      body: "Course fit, real-intent screening, fee reminders done carefully.",
    },
    {
      name: "F&B / restaurants",
      body: "Table booking, party suggestions, post-meal feedback.",
    },
    {
      name: "Real estate",
      body: "Budget/area triage, matching listings, viewing schedules.",
    },
    {
      name: "Clinics / services",
      body: "Appointments, reminders, FAQ on- and off-hours by policy.",
    },
    {
      name: "Your industry",
      body: "Tell us the job burning people — we say plainly what fits in scope.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Quick answers on [[custom agents]]",
  faqItems: [
    {
      q: "Different from a store chatbot?",
      a: "Scripted bots stall outside the script and don’t know your business. A custom agent loads your process, connects systems, and finishes outcomes in agreed scope.",
    },
    {
      q: "Can a small business start?",
      a: "Yes — one painful job first, measure, then expand. No giant platform on day one.",
    },
    {
      q: "How long to the first agent?",
      a: "Depends on complexity and integrations — we prefer a tight job so you see live results early.",
    },
    {
      q: "Do humans still watch it?",
      a: "Yes on sensitive steps. Dolphin hands over an ops guide; rule changes are tuned under warranty or follow-up scope.",
    },
  ],
  closeEyebrow: "Start",
  closeTitle: "The job burning people — let an agent [[try it]]",
  closeSupport:
    "Bring that exact job to the call. Dolphin maps the flow, says what fits in scope, then locks measurable milestones.",
  closeCta: "Contact Dolphin Software",
};


const ja: CustomAgentCopy = {
  metaTitle: "要件対応 AI Agent | Dolphin Software",
  metaDescription:
    "実際の業務プロセスに結び付いた AI Agent を構築 — CRM・チャット・カレンダー連携で、測定可能な成果まで完遂。既製のスクリプト型チャットボットとは別物です。",
  eyebrow: "要件対応の AI Agent",
  headline: "御社の[[業務]]に合わせた Agent — 汎用ボットではない",
  support:
    "既製品のチャットボットではありません。Dolphin が御社の手順・価格・方針を取り込み、既存システムへ接続。Agent が作業を受け、測定可能な成果まで進めます。",
  ctaPrimary: "範囲を相談",
  ctaSecondary: "他のサービス",
  trustLine: "Human-in-the-Loop · 明確なログ · 運用引き渡し可能",
  compareEyebrow: "明確な違い",
  compareTitle: "カスタム Agent と[[既製チャットボット]]の違い",
  compareSupport:
    "同じ「AI」でも、片方は質問待ち、もう片方は業務に組み込まれます。",
  offShelfTitle: "既製チャットボット / ツール",
  offShelfItems: [
    "固定スクリプト — 想定外の質問で止まりがち",
    "御社のプロセス・価格・例外を知らない",
    "回答して終わり — リード獲得も引き継ぎもなし",
    "使い方がバラバラ — 効果測定が困難",
  ],
  customTitle: "オーダーメイドの Agent",
  customItems: [
    "実際の業務ルール：手順・価格・トーン・例外を反映",
    "既存の CRM / チャット / カレンダー / 決済に接続",
    "タスクを最後まで担当：リード・予約・見積もり…",
    "機密ステップは人が承認；ログで管理・調整",
  ],
  whenEyebrow: "導入すべきタイミング",
  whenTitle: "ある業務が[[人を消耗させている]]3つのサイン",
  whenSupport:
    "既存ツールでは合わない独自プロセスがあり、毎日繰り返す作業が時間を食っているなら導入の価値があります。",
  whenItems: [
    {
      title: "同じ質問が一日中",
      body: "価格・空き状況・在庫 — スタッフが手作業で何百回も回答。営業時間外は顧客を逃します。",
    },
    {
      title: "ツール間のコピペ作業",
      body: "チャット → シート → CRM → レポート。コピーのたびにミスリスクと無駄な工数が発生します。",
    },
    {
      title: "ルール明確・人手多い・バリエーション少ない",
      body: "リード振り分け、リマインダー、テンプレート書類 — カスタム Agent が最速で投資回収できる領域です。",
    },
  ],
  processEyebrow: "Dolphin Software の進め方",
  processTitle: "[[実際の業務]]から始める — 闇雲にボットを入れない",
  processSupport: "5つのステップ — 拡張前に各ステップで明確な成果物を出します。",
  processSteps: [
    {
      title: "業務フローを可視化",
      body: "顧客・受注の流れをたどり、最も繰り返しが多くコストのかかるステップを最初に選びます。",
    },
    {
      title: "御社のルールを読み込み",
      body: "手順・価格・ポリシー・トーン — Agent を「御社専用」にする部分です。",
    },
    {
      title: "稼働中のシステムに接続",
      body: "合意範囲内で CRM・チャット・カレンダー・決済を接続 — 既存スタックを活かし、デジタルチームメイトを追加。",
    },
    {
      title: "1業務でパイロット・計測",
      body: "実案件で稼働：自動応答数・獲得リード数・削減工数を計測してから拡大。",
    },
    {
      title: "引き渡しとチューニング",
      body: "簡易ドキュメント・アクセス権限・チェックリスト。ルール変更時は保証期間内または追加スコープで調整。",
    },
  ],
  industriesEyebrow: "業種別",
  industriesTitle: "同じ構築手法で、[[プレイブックを入れ替え]]",
  industriesSupport:
    "ルールが明確で毎日繰り返す業務があれば構築可能です。よくある対象業務：",
  industries: [
    {
      name: "スパ・美容",
      body: "施術アドバイス、リアルタイム予約、再来院リマインダー。",
    },
    {
      name: "教育 / スクール",
      body: "コース適合判定、ニーズのスクリーニング、丁寧な受講料リマインダー。",
    },
    {
      name: "飲食 / レストラン",
      body: "テーブル予約、パーティー提案、食後フィードバック収集。",
    },
    {
      name: "不動産",
      body: "予算・エリアによる振り分け、物件マッチング、内覧スケジュール。",
    },
    {
      name: "クリニック / サービス業",
      body: "予約・リマインダー・FAQ を営業時間内外でポリシーに沿って対応。",
    },
    {
      name: "御社の業種",
      body: "最も人を消耗させている業務をお聞かせください — スコープ内で対応可能か率直にお伝えします。",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "[[カスタム Agent]]に関するよくある質問",
  faqItems: [
    {
      q: "市販チャットボットとの違いは？",
      a: "スクリプト型ボットはスクリプト外で止まり、御社の業務を知りません。カスタム Agent は御社のプロセスを読み込み、システムに接続し、合意範囲内で成果を出します。",
    },
    {
      q: "小規模事業でも始められる？",
      a: "はい — まず最も課題のある1業務から始め、計測し、それから拡大。初日から巨大なプラットフォームは不要です。",
    },
    {
      q: "最初の Agent 完成までどのくらい？",
      a: "複雑さと連携数次第です — 早期に実稼働の成果が見えるよう、まずコンパクトな業務を優先します。",
    },
    {
      q: "運用後も人の関与は必要？",
      a: "機密ステップでは必要です。Dolphin が運用ガイドを引き渡し、ルール変更は保証期間内または追加スコープで調整します。",
    },
  ],
  closeEyebrow: "始める",
  closeTitle: "人を消耗させている業務 — Agent に[[試させてみる]]",
  closeSupport:
    "その業務をお打ち合わせにお持ちください。Dolphin がフローを分析し、スコープ内で何が可能かを伝え、測定可能なマイルストーンを設定します。",
  closeCta: "Dolphin Software に連絡",
};


export const customAgentCopy: Record<Locale, CustomAgentCopy> = {
  vi,
  en,
  ja,
};

export function getCustomAgentCopy(locale: Locale): CustomAgentCopy {
  return customAgentCopy[locale];
}
