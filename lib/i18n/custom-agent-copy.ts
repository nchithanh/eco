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
  metaTitle: "AI Agent theo yêu cầu | Dolphin Kick",
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
  processEyebrow: "Cách Dolphin Kick làm",
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
  closeCta: "Liên hệ Dolphin Kick",
};

const en: CustomAgentCopy = {
  metaTitle: "Custom AI agents | Dolphin Kick",
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
  processEyebrow: "How Dolphin Kick works",
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
  closeCta: "Contact Dolphin Kick",
};

const de: CustomAgentCopy = {
  metaTitle: "Individuelle AI-Agents | Dolphin Kick",
  metaDescription:
    "Beauftragen Sie einen AI-Agent, der an Ihren echten Prozess gebunden ist — CRM, Messaging, Kalender — eine Aufgabe bis zu messbaren Ergebnissen. Kein Chatbot von der Stange.",
  eyebrow: "Individuelle AI-Agents",
  headline: "Ein Agent für [[Ihren Betrieb]] — kein generischer Bot",
  support:
    "Kein Chatbot von der Stange, der nur zum Schein antwortet. Dolphin lädt Ihren Prozess, Ihre Preise und Richtlinien, verbindet laufende Systeme — der Agent übernimmt Arbeit und liefert messbare Ergebnisse.",
  ctaPrimary: "Scope besprechen",
  ctaSecondary: "Andere Leistungen",
  trustLine: "Human-in-the-Loop · Klare Logs · Betriebsfertige Übergabe",
  compareEyebrow: "Klarer Unterschied",
  compareTitle: "Individuelle Agents vs [[Chatbots von der Stange]]",
  compareSupport:
    "Gleiches Label \"AI\" — einer wartet auf Eingaben, der andere hängt sich an einen Betriebsprozess.",
  offShelfTitle: "Chatbot / Tool von der Stange",
  offShelfItems: [
    "Starre Skripte — ungewöhnliche Fragen blockieren oft",
    "Kennt weder Ihren Prozess noch Preise oder Ausnahmen",
    "Antwortet und stoppt — kein Lead-Capture, keine Weiterleitung",
    "Jeder nutzt es anders — schwer zu messen",
  ],
  customTitle: "Individueller Agent nach Auftrag",
  customItems: [
    "Echte Geschäftsregeln: Prozess, Preise, Tonalität, Ausnahmen",
    "Anbindung an CRM / Chat / Kalender / Zahlung, die Sie schon nutzen",
    "Übernimmt eine Aufgabe bis zum Ergebnis: Leads, Buchungen, Angebote…",
    "Menschen genehmigen sensible Schritte; Logs zur Kontrolle und Optimierung",
  ],
  whenEyebrow: "Wann es sich lohnt",
  whenTitle: "Drei Anzeichen, dass eine Aufgabe [[Menschen verbrennt]]",
  whenSupport:
    "Lohnt sich, wenn ein echter Prozess besteht, den Tools nicht abbilden — und ein täglicher Routinejob Stunden frisst.",
  whenItems: [
    {
      title: "Dieselben Fragen den ganzen Tag",
      body: "Preis, Verfügbarkeit, Lagerstand — Mitarbeiter antworten hundertfach von Hand; außerhalb der Geschäftszeiten gehen Kunden verloren.",
    },
    {
      title: "Copy-Paste zwischen Tools",
      body: "Chat → Tabelle → CRM → Bericht. Jedes Kopieren birgt Fehlerrisiko und verschwendet Arbeit, die Maschinen erledigen können.",
    },
    {
      title: "Klare Regeln, hoher Personaleinsatz, wenig Variation",
      body: "Lead-Triage, Erinnerungen, Vorlagen-Dokumente — wo ein individueller Agent sich am schnellsten amortisiert.",
    },
  ],
  processEyebrow: "So arbeitet Dolphin Kick",
  processTitle: "Ausgehend von [[echter Arbeit]], kein Bot aufs Geratewohl",
  processSupport: "Fünf Schritte — jeder mit klarem Ergebnis, bevor Sie skalieren.",
  processSteps: [
    {
      title: "Ablauf analysieren",
      body: "Kunden- oder Auftragspfad nachzeichnen; den sich am meisten wiederholenden, kostspieligsten Schritt zuerst wählen.",
    },
    {
      title: "Ihre Regeln laden",
      body: "Prozess, Preise, Richtlinien, Tonalität — was den Agent zu Ihrem macht statt einem Standardtool.",
    },
    {
      title: "Laufende Systeme anbinden",
      body: "CRM, Messaging, Kalender, Zahlung im vereinbarten Scope — Ihren Stack behalten, einen digitalen Teamkollegen hinzufügen.",
    },
    {
      title: "Eine Aufgabe pilotieren, messen",
      body: "Echte Fälle: Auto-Antworten, erfasste Leads, gesparte Stunden — dann erweitern.",
    },
    {
      title: "Übergabe und Feintuning",
      body: "Kurze Doku, Zugänge, Checkliste. Bei Regeländerungen — Anpassung im Rahmen der Garantie oder als eigenes Paket.",
    },
  ],
  industriesEyebrow: "Nach Branche",
  industriesTitle: "Gleiche Bauweise, [[anderes Playbook]]",
  industriesSupport:
    "Wenn Regeln klar sind und sich Arbeit täglich wiederholt, können wir es umsetzen. Typische Aufgaben:",
  industries: [
    {
      name: "Spa & Beauty",
      body: "Behandlungsberatung, Echtzeit-Slot-Buchung, Wiederbesuchserinnerungen.",
    },
    {
      name: "Bildung / Akademien",
      body: "Kurspassung, echte Bedarfsermittlung, feinfühlige Gebührenerinnerungen.",
    },
    {
      name: "Gastro / Restaurants",
      body: "Tischreservierung, Gruppenvorschläge, Feedback nach dem Essen.",
    },
    {
      name: "Immobilien",
      body: "Budget-/Gebiets-Triage, passende Angebote, Besichtigungstermine.",
    },
    {
      name: "Praxen / Dienstleistungen",
      body: "Termine, Erinnerungen, FAQ innerhalb und außerhalb der Öffnungszeiten nach Richtlinie.",
    },
    {
      name: "Ihre Branche",
      body: "Nennen Sie die Aufgabe, die am meisten Menschen verbrennt — wir sagen offen, was im Scope passt.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Schnelle Antworten zu [[individuellen Agents]]",
  faqItems: [
    {
      q: "Unterschied zu einem Standard-Chatbot?",
      a: "Skript-Bots blockieren außerhalb des Skripts und kennen Ihr Unternehmen nicht. Ein individueller Agent lädt Ihren Prozess, verbindet Systeme und liefert Ergebnisse im vereinbarten Scope.",
    },
    {
      q: "Kann ein kleines Unternehmen starten?",
      a: "Ja — zuerst der schmerzhafteste Job, messen, dann erweitern. Kein riesiges System am ersten Tag.",
    },
    {
      q: "Wie lange bis zum ersten Agent?",
      a: "Hängt von Komplexität und Integrationen ab — wir bevorzugen eine kompakte Aufgabe, damit Sie schnell echte Ergebnisse sehen.",
    },
    {
      q: "Braucht man danach noch Menschen?",
      a: "Ja, bei sensiblen Schritten. Dolphin übergibt ein Betriebshandbuch; Regeländerungen werden im Rahmen der Garantie oder als Folgepaket angepasst.",
    },
  ],
  closeEyebrow: "Starten",
  closeTitle: "Die Aufgabe, die Menschen verbrennt — lassen Sie einen Agent [[es versuchen]]",
  closeSupport:
    "Bringen Sie genau diese Aufgabe zum Gespräch. Dolphin analysiert den Ablauf, sagt was im Scope passt, und legt messbare Meilensteine fest.",
  closeCta: "Dolphin Kick kontaktieren",
};

const ja: CustomAgentCopy = {
  metaTitle: "要件対応 AI Agent | Dolphin Kick",
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
  processEyebrow: "Dolphin Kick の進め方",
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
  closeCta: "Dolphin Kick に連絡",
};

const zh: CustomAgentCopy = {
  metaTitle: "按需定制 AI Agent | Dolphin Kick",
  metaDescription:
    "打造绑定真实业务流程的 AI Agent — 对接 CRM、聊天、日历，一项任务做到可衡量的结果。不是现成脚本聊天机器人。",
  eyebrow: "按需定制 AI Agent",
  headline: "为你的[[业务]]定制 Agent — 不是通用机器人",
  support:
    "不是现成话术聊天机器人。Dolphin 注入流程、价格与政策，连接现有系统——Agent 接单并做到可衡量的结果。",
  ctaPrimary: "讨论范围",
  ctaSecondary: "查看其他服务",
  trustLine: "人类参与审批 · 清晰日志 · 可运营交付",
  compareEyebrow: "明确区别",
  compareTitle: "定制 Agent 与[[现成聊天机器人]]的区别",
  compareSupport:
    "同样标着\"AI\"——一个等人提问，另一个嵌入运营环节。",
  offShelfTitle: "现成聊天机器人 / 工具",
  offShelfItems: [
    "固定脚本——超出范围的问题经常卡住",
    "不了解你的流程、价格或例外情况",
    "回答完就结束——不抓线索、不转交",
    "每个人用法不同——难以衡量效果",
  ],
  customTitle: "按需定制 Agent",
  customItems: [
    "真实业务规则：流程、定价、语气、例外",
    "对接你正在使用的 CRM / 聊天 / 日历 / 支付",
    "承担任务直到出结果：线索、预约、报价……",
    "敏感步骤由人审批；日志可控可调",
  ],
  whenEyebrow: "何时该做",
  whenTitle: "一项工作正在[[消耗人力]]的三个信号",
  whenSupport:
    "当你有现成工具无法匹配的独有流程，且一项日常重复工作正在吞噬时间时，就值得投入。",
  whenItems: [
    {
      title: "一整天都是同样的问题",
      body: "价格、空位、库存——员工手动回答数百次；下班后就流失客户。",
    },
    {
      title: "工具之间复制粘贴",
      body: "聊天 → 表格 → CRM → 报告。每次复制都有出错风险和人力浪费。",
    },
    {
      title: "规则清晰、人力多、变化少",
      body: "线索筛选、提醒、模板文档——定制 Agent 回本最快的领域。",
    },
  ],
  processEyebrow: "Dolphin Kick 的做法",
  processTitle: "从[[真实工作]]出发，不是随便装个机器人",
  processSupport: "五个步骤——每步有明确产出，验证后再扩展。",
  processSteps: [
    {
      title: "梳理业务流程",
      body: "追踪客户或订单路径，优先选择重复最多、成本最高的环节。",
    },
    {
      title: "导入你的规则",
      body: "流程、定价、政策、语气——让 Agent 成为「你的」而非通用工具。",
    },
    {
      title: "对接运行中的系统",
      body: "在约定范围内对接 CRM、聊天、日历、支付——保留现有技术栈，增加一位数字队友。",
    },
    {
      title: "试点一项任务，衡量效果",
      body: "真实案例：自动回复数、获取线索数、节省工时——验证后再扩展。",
    },
    {
      title: "交付与调优",
      body: "简要文档、访问权限、检查清单。规则变更时在保修期内或作为独立项目进行调整。",
    },
  ],
  industriesEyebrow: "按行业",
  industriesTitle: "同一套构建方法，[[替换业务手册]]",
  industriesSupport:
    "只要规则清晰且工作每天重复，就可以构建。常见对象任务：",
  industries: [
    {
      name: "美容 & SPA",
      body: "疗程建议、实时档期预约、复诊提醒。",
    },
    {
      name: "教育 / 培训中心",
      body: "课程匹配、真实需求筛选、学费提醒。",
    },
    {
      name: "餐饮 / 餐厅",
      body: "订位、宴会建议、餐后反馈收集。",
    },
    {
      name: "房地产",
      body: "按预算/区域筛选、匹配房源、安排看房。",
    },
    {
      name: "诊所 / 服务业",
      body: "预约、提醒、按政策在营业时间内外回答常见问题。",
    },
    {
      name: "你的行业",
      body: "告诉我们最消耗人力的工作——我们会坦诚说明范围内能做什么。",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "关于[[定制 Agent]]的常见问题",
  faqItems: [
    {
      q: "和现成聊天机器人有什么不同？",
      a: "脚本机器人在脚本外就卡住，也不了解你的业务。定制 Agent 导入你的流程、对接系统，在约定范围内产出结果。",
    },
    {
      q: "小企业能做吗？",
      a: "可以——先从最痛的一项工作开始，衡量后再扩展。第一天不需要庞大系统。",
    },
    {
      q: "第一个 Agent 要多久？",
      a: "取决于复杂度和对接数量——我们倾向于先做一个紧凑的任务，让你尽快看到实际效果。",
    },
    {
      q: "交付后还需要人吗？",
      a: "敏感步骤需要。Dolphin 会交付运营指南；规则变更时在保修期内或作为后续项目进行调整。",
    },
  ],
  closeEyebrow: "开始",
  closeTitle: "最消耗人力的工作——让 Agent [[试试看]]",
  closeSupport:
    "把那项工作带到沟通中。Dolphin 分析流程，坦诚说明范围内能做什么，然后锁定可衡量的里程碑。",
  closeCta: "联系 Dolphin Kick",
};

export const customAgentCopy: Record<Locale, CustomAgentCopy> = {
  vi,
  en,
  de,
  ja,
  zh,
};

export function getCustomAgentCopy(locale: Locale): CustomAgentCopy {
  return customAgentCopy[locale];
}
