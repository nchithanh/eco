import type { Locale } from "@/lib/i18n/types";

export type AiTransformCopy = {
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

const vi: AiTransformCopy = {
  metaTitle: "Chuyển đổi AI doanh nghiệp | KU THANH",
  metaDescription:
    "Rà soát quy trình, gắn AI vào đúng khâu đang đốt người và tiền — lộ trình đo được, không phát tài khoản ChatGPT rồi hy vọng.",
  eyebrow: "Chuyển đổi AI doanh nghiệp",
  headline: "Gắn AI vào [[lõi vận hành]] — không phát tài khoản rồi chờ phép màu",
  support:
    "Dolphin rà soát quy trình thật, chọn khâu đang ngốn người/tiền, rồi gắn agent có kiểm soát. Lộ trình theo milestone — bắt đầu nhỏ, nhân rộng khi đã chứng minh.",
  ctaPrimary: "Nhận lộ trình sơ bộ",
  ctaSecondary: "Xem AI Agent theo yêu cầu",
  trustLine: "Quy trình trước tool · Đo bằng số · Human-in-the-loop",
  compareEyebrow: "Sự thật vận hành",
  compareTitle: "Phát tài khoản AI khác [[chuyển đổi AI]] thế nào?",
  compareSupport:
    "Mua ChatGPT/Gemini cho từng phòng ban không phải chuyển đổi. Chuyển đổi là ráp AI vào dây chuyền nghiệp vụ đang chạy.",
  offShelfTitle: "Phát tài khoản / tool rời",
  offShelfItems: [
    "Mỗi người xài một kiểu — không chuẩn hóa, khó đo giờ tiết kiệm",
    "AI không thấy CRM, tồn kho, quy trình — chỉ trả lời trong hộp chat",
    "Chi phí cố định tăng; khối lượng/ chất lượng việc thường y nguyên",
    "Dễ ỷ lại hoặc dùng sai — lỗi chỉ lộ khi đã tới tay khách",
  ],
  customTitle: "Chuyển đổi AI theo KU",
  customItems: [
    "Vẽ lại quy trình: bước nào người, bước nào máy",
    "Gắn AI/agent vào đúng khâu lặp — nối hệ thống đang dùng",
    "Pilot một luồng, đo lead/giờ công/sai sót trước khi mở rộng",
    "Người duyệt khâu nhạy cảm; có log, bàn giao và tinh chỉnh",
  ],
  whenEyebrow: "Khi nào nên làm",
  whenTitle: "Ba chỗ hay [[gãy]] khi “có AI” mà chưa chuyển đổi",
  whenSupport:
    "Nếu đang thấy một trong các dấu hiệu dưới — đáng soi lộ trình trước khi đổ thêm tiền tool.",
  whenItems: [
    {
      title: "Tool rời, dữ liệu không nối",
      body: "Chatbot một nơi, CRM một nẻo, Excel một góc — mỗi lần ghép là một người chép tay.",
    },
    {
      title: "Có AI mà việc vẫn ứ",
      body: "Tài khoản đã mua, training đã làm — nhưng lead vẫn rơi, lịch vẫn hỏi tay, báo cáo vẫn cuối tháng.",
    },
    {
      title: "Không đo được ROI",
      body: "Không biết tiết kiệm bao nhiêu giờ, giảm bao nhiêu sai sót — chỉ thấy hóa đơn AI tăng.",
    },
  ],
  processEyebrow: "Cách KU làm",
  processTitle: "Lộ trình [[đo được]] — không nhảy cóc",
  processSupport:
    "Năm bước giống kỷ luật làm agent: rõ đầu ra từng giai đoạn, mở rộng khi đã chứng minh.",
  processSteps: [
    {
      title: "Soi toàn cảnh vận hành",
      body: "Map luồng khách/đơn hàng/nội bộ — chỉ ra khâu đốt người và chỗ dữ liệu đứt đoạn.",
    },
    {
      title: "Chọn 1–2 khâu ưu tiên",
      body: "Không tự động hóa sự mù mờ. Ưu tiên khâu lặp, quy tắc rõ, hoàn vốn nhanh.",
    },
    {
      title: "Thiết kế người–máy + nối hệ thống",
      body: "Ai duyệt gì; agent/tool nối CRM, Zalo, lịch, thanh toán trong scope đã chốt.",
    },
    {
      title: "Pilot trên việc thật",
      body: "Chạy dữ liệu thật, đo số, sửa quy trình mới nghiêm túc trước khi nhân bản.",
    },
    {
      title: "Nhân rộng có kiểm soát",
      body: "Lặp vòng cho khâu kế tiếp; bàn giao vận hành, quyền hạn và checklist mở rộng.",
    },
  ],
  industriesEyebrow: "Phạm vi",
  industriesTitle: "Thường bắt đầu từ [[khâu nào]]?",
  industriesSupport:
    "Không cần “AI hết công ty” ngày đầu. Các điểm vào phổ biến với SME:",
  industries: [
    {
      name: "Bán hàng & lead",
      body: "Thu–phân loại lead, nhắc deal, chuẩn hóa trả lời đa kênh.",
    },
    {
      name: "Chăm sóc & lịch",
      body: "FAQ, đặt lịch, nhắc lịch gắn slot/thực tế vận hành.",
    },
    {
      name: "Nội dung & web ops",
      body: "Chuỗi cập nhật nội dung/SEO có duyệt — giảm việc lặp của đội.",
    },
    {
      name: "Báo cáo & điều hành",
      body: "Gom tín hiệu từ tool rời thành một vòng Collect → Govern.",
    },
    {
      name: "HR / vận hành nội bộ",
      body: "Sàng hồ sơ, nhắc việc, checklist — khi quy tắc đã rõ.",
    },
    {
      name: "Kết hợp agent theo yêu cầu",
      body: "Một khâu có thể là custom agent; cả lộ trình là chuyển đổi AI doanh nghiệp.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Hỏi nhanh về [[chuyển đổi AI]]",
  faqItems: [
    {
      q: "Khác mua tài khoản ChatGPT thế nào?",
      a: "Tài khoản là công cụ cá nhân. Chuyển đổi AI là gắn máy vào quy trình và hệ thống đang chạy, có người duyệt và chỉ số đo được.",
    },
    {
      q: "Có phải làm hết công ty cùng lúc?",
      a: "Không. Dolphin ưu tiên 1–2 khâu đau nhất, pilot đo số, rồi nhân rộng — tránh dự án đồ sộ không kiểm soát.",
    },
    {
      q: "Liên quan AI Agent theo yêu cầu ra sao?",
      a: "Custom agent thường là một “viên gạch” trong lộ trình. Chuyển đổi AI là bức tranh quy trình + thứ tự ưu tiên + nối hệ thống.",
    },
    {
      q: "SME nhỏ có làm được không?",
      a: "Có — miễn có quy trình đủ rõ và một khâu lặp đang đốt người. Scope sẽ khớp quy mô, không bán platform ảo.",
    },
  ],
  closeEyebrow: "Bắt đầu",
  closeTitle: "Mang [[một luồng việc thật]] tới buổi trao đổi",
  closeSupport:
    "Dolphin soi chỗ đứt đoạn và đề xuất lộ trình sơ bộ: khâu nào làm trước, đo gì, milestone nào. Không cam kết phép màu trên slide.",
  closeCta: "Liên hệ KU THANH",
};

const en: AiTransformCopy = {
  metaTitle: "Enterprise AI transformation | KU THANH",
  metaDescription:
    "Map real workflows and attach AI where people and money burn — measurable roadmap, not ChatGPT seats and hope.",
  eyebrow: "Enterprise AI transformation",
  headline: "Put AI in the [[operating core]] — not seat licenses and wishful thinking",
  support:
    "Dolphin reviews your real processes, picks jobs that burn people and cash, then attaches controlled agents. Milestone roadmap — start small, scale after proof.",
  ctaPrimary: "Get a rough roadmap",
  ctaSecondary: "See custom AI agents",
  trustLine: "Process before tools · Measure in numbers · Human-in-the-loop",
  compareEyebrow: "Operating reality",
  compareTitle: "AI seats vs [[real transformation]]",
  compareSupport:
    "Buying ChatGPT/Gemini for every team is not transformation. Transformation wires AI into running business workflows.",
  offShelfTitle: "Seats / scattered tools",
  offShelfItems: [
    "Everyone uses AI differently — hard to standardize or measure hours saved",
    "AI never sees CRM, stock, or process — it only lives in a chat box",
    "Fixed cost rises; throughput and quality often stay flat",
    "Easy to over-trust or misuse — errors show up after the customer sees them",
  ],
  customTitle: "KU-style AI transformation",
  customItems: [
    "Redraw the process: which steps stay human, which go to machines",
    "Attach AI/agents to repetitive jobs — connect systems you already run",
    "Pilot one flow; measure leads/hours/errors before expanding",
    "Humans approve sensitive steps; logs, handover, and tuning included",
  ],
  whenEyebrow: "When it matters",
  whenTitle: "Three places “we have AI” still [[breaks]]",
  whenSupport:
    "If you recognize these, map a roadmap before pouring more money into tools.",
  whenItems: [
    {
      title: "Tools don’t connect",
      body: "Bot here, CRM there, Excel elsewhere — every join is manual copy-paste.",
    },
    {
      title: "AI bought, work still stuck",
      body: "Seats and training done — leads still drop, booking still by hand, reports still monthly fire drills.",
    },
    {
      title: "No measurable ROI",
      body: "You can’t name hours saved or errors cut — only a rising AI bill.",
    },
  ],
  processEyebrow: "How KU works",
  processTitle: "A [[measurable]] roadmap — no leap of faith",
  processSupport:
    "Five steps with clear outputs each stage; expand only after proof.",
  processSteps: [
    {
      title: "See the operating picture",
      body: "Map customer/order/internal flows — spot people-burn and data breaks.",
    },
    {
      title: "Pick 1–2 priority jobs",
      body: "Don’t automate fog. Prefer repetitive, rule-clear jobs with fast payback.",
    },
    {
      title: "Design human–machine + integrations",
      body: "Who approves what; agents/tools wired to CRM, chat, calendar, payments in scope.",
    },
    {
      title: "Pilot on live work",
      body: "Real data, real numbers, fix the new process seriously before cloning it.",
    },
    {
      title: "Scale with control",
      body: "Repeat for the next job; handover ops, access, and an expansion checklist.",
    },
  ],
  industriesEyebrow: "Scope",
  industriesTitle: "Where teams usually [[start]]",
  industriesSupport:
    "You don’t need “AI everywhere” on day one. Common entry points for SMEs:",
  industries: [
    {
      name: "Sales & leads",
      body: "Capture–qualify leads, deal nudges, consistent multi-channel replies.",
    },
    {
      name: "Care & scheduling",
      body: "FAQ, booking, reminders tied to real availability.",
    },
    {
      name: "Content & web ops",
      body: "Repeatable content/SEO updates with approval — less busywork.",
    },
    {
      name: "Reporting & ops",
      body: "Pull scattered signals into a Collect → Govern loop.",
    },
    {
      name: "HR / internal ops",
      body: "Screening, reminders, checklists — when rules are clear.",
    },
    {
      name: "With custom agents",
      body: "One job can be a custom agent; the roadmap is enterprise AI transformation.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Quick answers on [[AI transformation]]",
  faqItems: [
    {
      q: "Different from buying ChatGPT seats?",
      a: "Seats are personal tools. Transformation attaches machines to process and systems, with approvals and metrics.",
    },
    {
      q: "Do we transform the whole company at once?",
      a: "No. Dolphin prioritizes 1–2 painful jobs, pilots with numbers, then expands — no uncontrolled mega-project.",
    },
    {
      q: "How does this relate to custom agents?",
      a: "A custom agent is often one building block. Transformation is process, priority order, and system wiring.",
    },
    {
      q: "Can a small SME start?",
      a: "Yes — if the process is clear enough and one repetitive job burns people. Scope matches size; no fake platform.",
    },
  ],
  closeEyebrow: "Start",
  closeTitle: "Bring [[one real workflow]] to the conversation",
  closeSupport:
    "Dolphin spots breaks and drafts a rough roadmap: what first, what to measure, which milestones. No magic on slides.",
  closeCta: "Contact KU THANH",
};

const de: AiTransformCopy = {
  metaTitle: "KI-Transformation für Unternehmen | Dolphin Kick",
  metaDescription:
    "Echte Workflows analysieren und KI dort anbinden, wo Menschen und Geld verbrennen — messbare Roadmap statt ChatGPT-Lizenzen und Hoffnung.",
  eyebrow: "KI-Transformation",
  headline: "KI in den [[Betriebskern]] — keine Sitzlizenzen und Hoffnung",
  support:
    "Dolphin prüft echte Prozesse, findet Aufgaben, die Menschen und Budget verbrennen, und bindet kontrollierte Agents an. Meilenstein-Roadmap — klein starten, nach Beweis skalieren.",
  ctaPrimary: "Grobe Roadmap anfragen",
  ctaSecondary: "Custom AI Agents ansehen",
  trustLine: "Prozess vor Tool · Messen in Zahlen · Human-in-the-Loop",
  compareEyebrow: "Betriebliche Realität",
  compareTitle: "KI-Lizenzen vs [[echte Transformation]]",
  compareSupport:
    "ChatGPT/Gemini für jedes Team zu kaufen ist keine Transformation. Transformation verdrahtet KI mit laufenden Geschäftsprozessen.",
  offShelfTitle: "Sitzlizenzen / verstreute Tools",
  offShelfItems: [
    "Jeder nutzt KI anders — schwer zu standardisieren oder eingesparte Stunden zu messen",
    "KI sieht weder CRM, Lagerbestand noch Prozess — lebt nur in der Chatbox",
    "Fixkosten steigen; Durchsatz und Qualität bleiben oft gleich",
    "Leicht zu vertrauen oder falsch zu nutzen — Fehler zeigen sich erst beim Kunden",
  ],
  customTitle: "KI-Transformation à la Dolphin Kick",
  customItems: [
    "Prozess neu zeichnen: welche Schritte menschlich, welche maschinell",
    "KI/Agents an repetitive Aufgaben anbinden — bestehende Systeme verbinden",
    "Einen Flow pilotieren; Leads/Stunden/Fehler messen, bevor erweitert wird",
    "Menschen genehmigen sensible Schritte; Logs, Übergabe und Tuning inklusive",
  ],
  whenEyebrow: "Wann es zählt",
  whenTitle: "Drei Stellen, an denen \"wir haben KI\" noch [[bricht]]",
  whenSupport:
    "Wenn Sie diese Punkte wiedererkennen, erstellen Sie eine Roadmap bevor Sie mehr Geld in Tools stecken.",
  whenItems: [
    {
      title: "Tools sind nicht verbunden",
      body: "Bot hier, CRM dort, Excel woanders — jede Verbindung ist manuelles Copy-Paste.",
    },
    {
      title: "KI gekauft, Arbeit steckt fest",
      body: "Lizenzen und Schulungen erledigt — Leads fallen trotzdem durch, Buchung weiterhin manuell, Reports immer noch monatliche Feuerwehrübung.",
    },
    {
      title: "Kein messbarer ROI",
      body: "Sie können weder eingesparte Stunden noch reduzierte Fehler benennen — nur eine steigende KI-Rechnung.",
    },
  ],
  processEyebrow: "So arbeitet Dolphin Kick",
  processTitle: "Eine [[messbare]] Roadmap — kein Sprung ins Ungewisse",
  processSupport:
    "Fünf Schritte mit klaren Ergebnissen pro Phase; Erweiterung erst nach Beweis.",
  processSteps: [
    {
      title: "Betriebsbild erfassen",
      body: "Kunden-/Auftrags-/interne Flows abbilden — Personalverbrauch und Datenbrüche erkennen.",
    },
    {
      title: "1–2 Prioritätsaufgaben wählen",
      body: "Keinen Nebel automatisieren. Repetitive, regelklare Aufgaben mit schneller Amortisation bevorzugen.",
    },
    {
      title: "Mensch–Maschine-Design + Integrationen",
      body: "Wer genehmigt was; Agents/Tools mit CRM, Chat, Kalender, Zahlung im Scope verdrahtet.",
    },
    {
      title: "Pilot mit echter Arbeit",
      body: "Echte Daten, echte Zahlen, den neuen Prozess ernsthaft korrigieren, bevor er repliziert wird.",
    },
    {
      title: "Kontrolliert skalieren",
      body: "Für die nächste Aufgabe wiederholen; Betrieb, Zugang und eine Erweiterungs-Checkliste übergeben.",
    },
  ],
  industriesEyebrow: "Scope",
  industriesTitle: "Wo Teams normalerweise [[starten]]",
  industriesSupport:
    "Am ersten Tag brauchen Sie kein \"KI überall\". Übliche Einstiegspunkte für KMU:",
  industries: [
    {
      name: "Vertrieb & Leads",
      body: "Leads erfassen und qualifizieren, Deal-Erinnerungen, konsistente Mehrkanalantworten.",
    },
    {
      name: "Betreuung & Terminplanung",
      body: "FAQ, Buchung, Erinnerungen gebunden an reale Verfügbarkeit.",
    },
    {
      name: "Content & Web-Ops",
      body: "Wiederholbare Content-/SEO-Updates mit Freigabe — weniger Routinearbeit.",
    },
    {
      name: "Reporting & Betrieb",
      body: "Verstreute Signale in einen Collect → Govern Loop bündeln.",
    },
    {
      name: "HR / interne Ops",
      body: "Screening, Erinnerungen, Checklisten — wenn Regeln klar sind.",
    },
    {
      name: "Mit Custom Agents",
      body: "Eine Aufgabe kann ein Custom Agent sein; die Roadmap ist unternehmensweite KI-Transformation.",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Schnelle Antworten zur [[KI-Transformation]]",
  faqItems: [
    {
      q: "Unterschied zum Kauf von ChatGPT-Lizenzen?",
      a: "Lizenzen sind persönliche Werkzeuge. Transformation verbindet Maschinen mit Prozess und Systemen, mit Freigaben und Kennzahlen.",
    },
    {
      q: "Müssen wir das ganze Unternehmen auf einmal transformieren?",
      a: "Nein. Dolphin priorisiert 1–2 schmerzhafte Aufgaben, pilotiert mit Zahlen, dann erweitern — kein unkontrolliertes Megaprojekt.",
    },
    {
      q: "Wie hängt das mit Custom Agents zusammen?",
      a: "Ein Custom Agent ist oft ein Baustein. Transformation umfasst Prozess, Prioritätsreihenfolge und Systemverdrahtung.",
    },
    {
      q: "Kann ein kleines KMU starten?",
      a: "Ja — wenn der Prozess klar genug ist und eine repetitive Aufgabe Menschen verbrennt. Der Scope passt zur Größe; keine Fake-Plattform.",
    },
  ],
  closeEyebrow: "Starten",
  closeTitle: "Bringen Sie [[einen echten Workflow]] ins Gespräch",
  closeSupport:
    "Dolphin findet Bruchstellen und entwirft eine grobe Roadmap: was zuerst, was messen, welche Meilensteine. Keine Magie auf Folien.",
  closeCta: "Dolphin Kick kontaktieren",
};

const ja: AiTransformCopy = {
  metaTitle: "企業の AI 変革 | Dolphin Kick",
  metaDescription:
    "実際のワークフローを分析し、人件費・コストが燃えている箇所に AI を接続 — 測定可能なロードマップ。ChatGPT アカウント配布と祈りではありません。",
  eyebrow: "企業の AI 変革",
  headline: "AI を[[業務の中核]]へ — アカウント配布で終わらせない",
  support:
    "Dolphin が実際のプロセスを精査し、人とコストを消耗する業務を特定、制御された Agent を接続します。マイルストーン型ロードマップ — 小さく始め、実証後に拡大。",
  ctaPrimary: "概略ロードマップを相談",
  ctaSecondary: "カスタム AI Agent を見る",
  trustLine: "プロセス優先 · 数値で測定 · Human-in-the-Loop",
  compareEyebrow: "運営の現実",
  compareTitle: "AI ライセンス vs [[本当の変革]]",
  compareSupport:
    "全チームに ChatGPT/Gemini を買うのは変革ではありません。変革とは AI を稼働中の業務プロセスに組み込むことです。",
  offShelfTitle: "ライセンス / バラバラのツール",
  offShelfItems: [
    "各自が AI を別々に使用 — 標準化や工数削減の測定が困難",
    "AI は CRM も在庫もプロセスも見えない — チャットボックスの中だけ",
    "固定費は上がるが、処理量と品質は据え置きのことが多い",
    "過信や誤用が起きやすい — エラーは顧客に届いてから発覚",
  ],
  customTitle: "Dolphin Kick 式 AI 変革",
  customItems: [
    "プロセスを再設計：どのステップが人、どのステップが機械",
    "AI/Agent を反復業務に接続 — 既存システムを活用",
    "1フローをパイロット；リード数/工数/ミス率を計測してから拡大",
    "機密ステップは人が承認；ログ・引き渡し・チューニング込み",
  ],
  whenEyebrow: "いつ必要か",
  whenTitle: "「AI あります」でもまだ[[壊れる]]3つの場所",
  whenSupport:
    "これらに心当たりがあるなら、ツールに追加投資する前にロードマップを作りましょう。",
  whenItems: [
    {
      title: "ツールが連携していない",
      body: "ボットはここ、CRM はあちら、Excel は別のところ — 接続は毎回手作業のコピペ。",
    },
    {
      title: "AI を導入したのに業務が詰まる",
      body: "ライセンスも研修も済み — でもリードは落ち、予約は手動、レポートは月末の消火活動のまま。",
    },
    {
      title: "ROI が測れない",
      body: "削減した工数もミスも数値化できない — 見えるのは増え続ける AI の請求書だけ。",
    },
  ],
  processEyebrow: "Dolphin Kick の進め方",
  processTitle: "[[測定可能な]]ロードマップ — 飛躍的な賭けではなく",
  processSupport:
    "5つのステップ、各段階で明確な成果物；実証後にのみ拡大。",
  processSteps: [
    {
      title: "運営の全体像を把握",
      body: "顧客・受注・社内フローを可視化 — 人の消耗とデータの断絶を特定。",
    },
    {
      title: "1〜2 の優先業務を選定",
      body: "曖昧さを自動化しない。反復的でルール明確、回収の早い業務を優先。",
    },
    {
      title: "人と機械の設計 + システム連携",
      body: "誰が何を承認するか；Agent/ツールを CRM・チャット・カレンダー・決済にスコープ内で接続。",
    },
    {
      title: "実業務でパイロット",
      body: "実データ・実数値で新プロセスを真剣に修正してから複製。",
    },
    {
      title: "制御しながら拡大",
      body: "次の業務で繰り返し；運用・アクセス権限・拡張チェックリストを引き渡し。",
    },
  ],
  industriesEyebrow: "スコープ",
  industriesTitle: "チームが通常[[どこから始めるか]]",
  industriesSupport:
    "初日から「全社 AI」は不要です。中小企業でよくある起点：",
  industries: [
    {
      name: "営業 & リード",
      body: "リード獲得・選別、ディールナッジ、マルチチャネルの一貫した応答。",
    },
    {
      name: "カスタマーケア & スケジューリング",
      body: "FAQ、予約、実際の空き状況に連動したリマインダー。",
    },
    {
      name: "コンテンツ & ウェブ運用",
      body: "承認付きの定型コンテンツ/SEO 更新 — ルーティンワーク削減。",
    },
    {
      name: "レポーティング & 運営",
      body: "散在するシグナルを Collect → Govern ループに集約。",
    },
    {
      name: "HR / 社内オペレーション",
      body: "スクリーニング、リマインダー、チェックリスト — ルールが明確な場合。",
    },
    {
      name: "カスタム Agent と組み合わせ",
      body: "1つの業務はカスタム Agent に；ロードマップ全体が企業の AI 変革です。",
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "[[AI 変革]]に関するよくある質問",
  faqItems: [
    {
      q: "ChatGPT ライセンス購入との違いは？",
      a: "ライセンスは個人ツールです。変革はプロセスとシステムに機械を接続し、承認と指標を伴います。",
    },
    {
      q: "全社を一度に変革する必要がある？",
      a: "いいえ。Dolphin が1〜2の最も課題のある業務を優先し、数値でパイロットしてから拡大 — 制御不能な巨大プロジェクトにはしません。",
    },
    {
      q: "カスタム Agent との関係は？",
      a: "カスタム Agent は多くの場合1つのビルディングブロック。変革はプロセス全体・優先順位・システム連携を含みます。",
    },
    {
      q: "小規模な中小企業でも始められる？",
      a: "はい — プロセスが十分明確で、反復業務が人を消耗させているなら。スコープは規模に合わせます；架空のプラットフォームは売りません。",
    },
  ],
  closeEyebrow: "始める",
  closeTitle: "[[1つの実際のワークフロー]]を会話に持ってきてください",
  closeSupport:
    "Dolphin が断絶を見つけ、概略ロードマップを作成：何から、何を測定し、どのマイルストーンか。スライドの魔法ではありません。",
  closeCta: "Dolphin Kick に連絡",
};

const zh: AiTransformCopy = {
  ...en,
  metaTitle: "企业 AI 转型 | Dolphin Kick",
  eyebrow: "企业 AI 转型",
  headline: "把 AI 接到[[运营核心]] — 不是发账号碰运气",
  support:
    "Dolphin 梳理真实流程，锁定耗人耗钱的环节，再接入可控 Agent。按里程碑推进 — 小步验证，再扩大。",
  trustLine: "流程先于工具 · 用数据衡量 · Human-in-the-loop",
  ctaPrimary: "获取初步路线图",
  ctaSecondary: "查看按需 AI Agent",
  closeCta: "联系 Dolphin Kick",
};

export const aiTransformCopy: Record<Locale, AiTransformCopy> = {
  vi,
  en,
  de,
  ja,
  zh,
};

export function getAiTransformCopy(locale: Locale): AiTransformCopy {
  return aiTransformCopy[locale];
}
