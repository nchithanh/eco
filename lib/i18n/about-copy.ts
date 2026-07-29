import type { Locale } from "@/lib/i18n/types";

export type AboutCopy = {
  eyebrow: string;
  title: string;
  motto: string;
  support: string;
  ctaPrimary: string;
  ctaSecondary: string;
  mindsetEyebrow: string;
  mindsetTitle: string;
  mindset: { title: string; body: string }[];
  buildEyebrow: string;
  buildTitle: string;
  buildSupport: string;
  buildItems: { title: string; body: string }[];
  proofEyebrow: string;
  proofTitle: string;
  proofSupport: string;
  proofs: { title: string; body: string }[];
  founderEyebrow: string;
  founderTitle: string;
  founderRole: string;
  founderName: string;
  founderBody: string;
  founderStack: string[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaSupport: string;
};

const vi: AboutCopy = {
  eyebrow: "Studio",
  title: "Dolphin Kich",
  motto: "Từ bài toán khó đến [[hệ thống chạy thật]] — không gì là không thể.",
  support:
    "Chúng tôi biến mục tiêu kinh doanh thành web, app và workflow AI có thể vận hành. Scope rõ, milestone đúng hạn, bàn giao source + hướng dẫn — đội bạn tự chạy được.",
  ctaPrimary: "Nhận báo giá",
  ctaSecondary: "Xem dịch vụ",
  mindsetEyebrow: "Mindset",
  mindsetTitle: "Tinh thần studio chúng tôi mang theo",
  mindset: [
    {
      title: "Đam mê ship thật",
      body: "Không dừng ở demo. Mỗi dự án hướng tới hệ thống live — ổn định, đo được, đội khách tự vận hành.",
    },
    {
      title: "Kỷ luật như tập luyện",
      body: "Như tinh thần Cristiano Ronaldo: làm việc có nhịp, không dựa may mắn. Discovery → plan → sprint → UAT → handover đều có chuẩn.",
    },
    {
      title: "Không gì là không thể",
      body: "Bài toán phức tạp chỉ cần scope đủ rõ và đội đủ quyết tâm. Từ legacy đến microservices, từ ops thủ công đến automation — chúng tôi tìm đường ship.",
    },
  ],
  buildEyebrow: "Năng lực",
  buildTitle: "Dolphin Kich làm gì",
  buildSupport:
    "Năng lực được tôi luyện từ sản phẩm edtech & SaaS thật — production, incident, scale — rồi đưa vào cách studio ship cho SMB.",
  buildItems: [
    {
      title: "Web & App",
      body: "Site, portal, mini app — UI sạch, mobile-ready, scope chốt trước khi code.",
    },
    {
      title: "Backend & hệ thống",
      body: "API, admin, tích hợp (Zalo, thanh toán, CRM…) — thiết kế để scale và maintain.",
    },
    {
      title: "AI & automation",
      body: "Agent, workflow, ops loop — giảm việc thủ công, tăng visibility cho đội vận hành.",
    },
    {
      title: "Bàn giao & vận hành",
      body: "Source, docs, walkthrough, bảo hành — quyền sở hữu rõ, không khóa vendor.",
    },
  ],
  proofEyebrow: "Cách làm",
  proofTitle: "Kinh nghiệm production đưa vào studio",
  proofSupport:
    "Không phải checklist marketing — đây là bài học từ hệ thống live đã chạy dưới tải thật.",
  proofs: [
    {
      title: "Production reliability",
      body: "Incident response, data recovery, observability (Prometheus, Grafana, logging) — giữ hệ thống ổn khi traffic cao.",
    },
    {
      title: "System design thực chiến",
      body: "Monolith → microservices (Golang, NestJS), messaging (Kafka, RabbitMQ), load test K6 trước đợt cao điểm.",
    },
    {
      title: "Làm việc với stakeholder",
      body: "Phân tích flow với PO/BA, chốt feasibility, lead team đa dự án — giao tiếp thẳng, phạm vi rõ.",
    },
    {
      title: "Integrations đã ship",
      body: "ClassIn, Zalo ZNS, HubSpot, Mailgun, Mini App đa nền tảng — tích hợp production, không chỉ PoC.",
    },
  ],
  founderEyebrow: "Đội ngũ",
  founderTitle: "Người đứng sau studio",
  founderRole: "Co-founder · Product Backend / Tech Lead",
  founderName: "Nguyễn Chí Thành",
  founderBody:
    "5+ năm backend trên sản phẩm live (Marathon, Myspa, Splus). Dẫn team, xử lý incident, thiết kế hệ thống — mang tư duy production vào từng dự án Dolphin Kich.",
  founderStack: [
    "Golang",
    "NestJS",
    "Laravel",
    "TypeScript",
    "Docker",
    "Redis",
    "MySQL",
    "Grafana",
  ],
  ctaEyebrow: "Bắt đầu",
  ctaTitle: "Sẵn sàng biến bài toán thành hệ thống?",
  ctaSupport:
    "Nói mục tiêu — bán hàng, lead, đặt lịch hay ops nội bộ. Dolphin Kich chốt scope và ship đến khi đội bạn tự chạy.",
};

const en: AboutCopy = {
  eyebrow: "Studio",
  title: "Dolphin Kich",
  motto: "From hard problems to [[systems that run]] — nothing is impossible.",
  support:
    "We turn business goals into web, apps, and AI workflows you can operate. Clear scope, on-time milestones, source + walkthrough — so your team can run it.",
  ctaPrimary: "Get a quote",
  ctaSecondary: "View services",
  mindsetEyebrow: "Mindset",
  mindsetTitle: "How this studio shows up",
  mindset: [
    {
      title: "Obsessed with shipping live",
      body: "Demos are not the finish line. Every project aims at a live system — stable, measurable, owned by your team.",
    },
    {
      title: "Train like a pro",
      body: "Cristiano Ronaldo energy: rhythm over luck. Discovery → plan → sprint → UAT → handover with a real standard.",
    },
    {
      title: "Nothing is impossible",
      body: "Hard problems need clear scope and relentless execution. Legacy to microservices, manual ops to automation — we find the path and ship.",
    },
  ],
  buildEyebrow: "Capabilities",
  buildTitle: "What Dolphin Kich builds",
  buildSupport:
    "Strength forged on real edtech & SaaS products — production, incidents, scale — then applied to how we ship for SMBs.",
  buildItems: [
    {
      title: "Web & App",
      body: "Sites, portals, mini apps — clean UI, mobile-ready, scope locked before code.",
    },
    {
      title: "Backend & systems",
      body: "APIs, admin, integrations (Zalo, payments, CRM…) — designed to scale and maintain.",
    },
    {
      title: "AI & automation",
      body: "Agents, workflows, ops loops — less manual work, more visibility for operators.",
    },
    {
      title: "Handover & ops",
      body: "Source, docs, walkthrough, warranty — clear ownership, no vendor lock-in.",
    },
  ],
  proofEyebrow: "How we work",
  proofTitle: "Production experience inside the studio",
  proofSupport:
    "Not a marketing checklist — lessons from live systems that already ran under real load.",
  proofs: [
    {
      title: "Production reliability",
      body: "Incident response, data recovery, observability (Prometheus, Grafana, logging) — keep systems steady under peak traffic.",
    },
    {
      title: "Battle-tested system design",
      body: "Monolith → microservices (Golang, NestJS), messaging (Kafka, RabbitMQ), K6 load tests before high-traffic windows.",
    },
    {
      title: "Stakeholder partnership",
      body: "Flow analysis with PO/BA, feasibility checks, multi-project team lead — straight talk, clear scope.",
    },
    {
      title: "Integrations shipped",
      body: "ClassIn, Zalo ZNS, HubSpot, Mailgun, multi-platform Mini Apps — production integrations, not just PoCs.",
    },
  ],
  founderEyebrow: "Team",
  founderTitle: "Behind the studio",
  founderRole: "Co-founder · Product Backend / Tech Lead",
  founderName: "Nguyen Chi Thanh",
  founderBody:
    "5+ years backend on live products (Marathon, Myspa, Splus). Team lead, incident response, system design — production thinking in every Dolphin Kich project.",
  founderStack: [
    "Golang",
    "NestJS",
    "Laravel",
    "TypeScript",
    "Docker",
    "Redis",
    "MySQL",
    "Grafana",
  ],
  ctaEyebrow: "Start",
  ctaTitle: "Ready to turn the problem into a system?",
  ctaSupport:
    "Tell us the goal — sell, capture leads, take bookings, or run internal ops. Dolphin Kich locks scope and ships until your team can run it.",
};

const de: AboutCopy = {
  eyebrow: "Studio",
  title: "Dolphin Kich",
  motto: "Von harten Problemen zu [[laufenden Systemen]] — nichts ist unmöglich.",
  support:
    "Wir machen aus Geschäftszielen Web, Apps und KI-Workflows, die Sie betreiben können. Klarer Scope, Meilensteine, Source + Einweisung.",
  ctaPrimary: "Angebot anfordern",
  ctaSecondary: "Leistungen ansehen",
  mindsetEyebrow: "Mindset",
  mindsetTitle: "So arbeitet dieses Studio",
  mindset: [
    {
      title: "Leidenschaft fürs Ship-Live",
      body: "Nicht bei Demos aufhören. Jedes Projekt zielt auf ein Live-System ab — stabil, messbar, vom eigenen Team betrieben.",
    },
    {
      title: "Disziplin wie im Training",
      body: "Cristiano-Ronaldo-Mentalität: Rhythmus statt Glück. Discovery → Plan → Sprint → UAT → Übergabe nach klarem Standard.",
    },
    {
      title: "Nichts ist unmöglich",
      body: "Komplexe Probleme brauchen nur klaren Scope und Entschlossenheit. Von Legacy zu Microservices, von manuellen Ops zu Automation — wir finden den Weg.",
    },
  ],
  buildEyebrow: "Fähigkeiten",
  buildTitle: "Was Dolphin Kich baut",
  buildSupport:
    "Stärke aus echten EdTech- & SaaS-Produkten — Production, Incidents, Skalierung — angewendet auf Studio-Deliveries für KMUs.",
  buildItems: [
    {
      title: "Web & App",
      body: "Websites, Portale, Mini-Apps — sauberes UI, mobile-ready, Scope vor dem Coden fixiert.",
    },
    {
      title: "Backend & Systeme",
      body: "APIs, Admin, Integrationen (Zalo, Zahlungen, CRM…) — gebaut für Skalierung und Wartung.",
    },
    {
      title: "KI & Automation",
      body: "Agenten, Workflows, Ops-Loops — weniger manuelle Arbeit, mehr Übersicht für Operatoren.",
    },
    {
      title: "Übergabe & Betrieb",
      body: "Source, Doku, Einweisung, Garantie — klare Eigentumsrechte, kein Vendor Lock-in.",
    },
  ],
  proofEyebrow: "Arbeitsweise",
  proofTitle: "Production-Erfahrung im Studio",
  proofSupport:
    "Keine Marketing-Checkliste — Lektionen aus Live-Systemen unter realer Last.",
  proofs: [
    {
      title: "Production Reliability",
      body: "Incident Response, Datenwiederherstellung, Observability (Prometheus, Grafana, Logging) — stabil bei Traffic-Spitzen.",
    },
    {
      title: "Praxiserprobtes Systemdesign",
      body: "Monolith → Microservices (Golang, NestJS), Messaging (Kafka, RabbitMQ), K6-Lasttests vor Peak-Phasen.",
    },
    {
      title: "Stakeholder-Partnerschaft",
      body: "Ablaufanalyse mit PO/BA, Machbarkeits-Checks, Multi-Projekt-Leitung — direkte Kommunikation, klarer Scope.",
    },
    {
      title: "Ausgelieferte Integrationen",
      body: "ClassIn, Zalo ZNS, HubSpot, Mailgun, plattformübergreifende Mini-Apps — Production-Integrationen statt nur PoCs.",
    },
  ],
  founderEyebrow: "Team",
  founderTitle: "Hinter dem Studio",
  founderRole: "Co-founder · Product Backend / Tech Lead",
  founderName: "Nguyen Chi Thanh",
  founderBody:
    "5+ Jahre Backend auf Live-Produkten (Marathon, Myspa, Splus). Team Lead, Incidents, Systemdesign — Production-Denken in jedem Dolphin-Kich-Projekt.",
  founderStack: [
    "Golang",
    "NestJS",
    "Laravel",
    "TypeScript",
    "Docker",
    "Redis",
    "MySQL",
    "Grafana",
  ],
  ctaEyebrow: "Start",
  ctaTitle: "Bereit, das Problem zum System zu machen?",
  ctaSupport:
    "Nennen Sie das Ziel — verkaufen, Leads, Buchungen oder interne Ops. Dolphin Kich fixiert Scope und liefert, bis Ihr Team selbst fahren kann.",
};

const ja: AboutCopy = {
  eyebrow: "Studio",
  title: "Dolphin Kich",
  motto: "難しい課題から[[動くシステム]]へ — 不可能はない。",
  support:
    "ビジネス目標を、運用できる Web・アプリ・AI ワークフローに変えます。スコープ明確、マイルストーン、ソース＋ガイド付き。",
  ctaPrimary: "見積もりを依頼",
  ctaSecondary: "サービスを見る",
  mindsetEyebrow: "マインドセット",
  mindsetTitle: "このスタジオのスタンス",
  mindset: [
    {
      title: "本番リリースへのこだわり",
      body: "デモで満足しません。すべてのプロジェクトで、安定して測定可能、自社チームで運用できる本番システムを目指します。",
    },
    {
      title: "プロとしての規律",
      body: "クリスティアーノ・ロナウドのような精神：運に頼らずリズムを維持。Discovery → Plan → Sprint → UAT → 引継ぎまで標準化。",
    },
    {
      title: "不可能はない",
      body: "複雑な課題も明確なスコープと執念があれば解決できます。レガシーからマイクロサービス、手作業から自動化まで最適な道を切り開きます。",
    },
  ],
  buildEyebrow: "できること",
  buildTitle: "Dolphin Kich がつくるもの",
  buildSupport:
    "EdTech や SaaS のリアルな本番・障害・スケール経験で鍛え抜かれた開発力を、SMB 向けの納品に活かします。",
  buildItems: [
    {
      title: "Web & アプリ",
      body: "サイト、ポータル、ミニアプリ — クリーンな UI、モバイル対応、実装前にスコープを確定。",
    },
    {
      title: "バックエンド & システム",
      body: "API、管理画面、連携（Zalo、決済、CRMなど） — スケールと保守性を考慮した設計。",
    },
    {
      title: "AI & 自動化",
      body: "エージェント、ワークフロー、運用ループ — 手作業を減らし、運用チームの可視性を向上。",
    },
    {
      title: "納品 & 運用",
      body: "ソースコード、ドキュメント、レクチャー、保証 — 所有権を明確にし、ベンダーロックインを回避。",
    },
  ],
  proofEyebrow: "進め方",
  proofTitle: "本番経験をスタジオに落とし込む",
  proofSupport:
    "マーケティング用のチェックリストではなく、実際の高負荷下で稼働したシステムからの学びです。",
  proofs: [
    {
      title: "本番環境の信頼性",
      body: "インシデント対応、データ復旧、可視化（Prometheus, Grafana, ログ） — 高トラフィック時も安定運用。",
    },
    {
      title: "実践的なシステム設計",
      body: "モノリスからマイクロサービス（Golang, NestJS）、メッセージング（Kafka, RabbitMQ）、ピーク前の K6 負荷テスト。",
    },
    {
      title: "ステークホルダーとの連携",
      body: "PO/BA とのフロー分析、実現可能性の検証、複数プロジェクトのリード — 迅速なコミュニケーションと明確なスコープ。",
    },
    {
      title: "豊富な連携実績",
      body: "ClassIn, Zalo ZNS, HubSpot, Mailgun, マルチプラットフォームミニアプリ — PoC に留まらない本番実装。",
    },
  ],
  founderEyebrow: "チーム",
  founderTitle: "スタジオの裏側",
  founderRole: "Co-founder · Product Backend / Tech Lead",
  founderName: "Nguyen Chi Thanh",
  founderBody:
    "ライブプロダクトで5年以上のバックエンド（Marathon, Myspa, Splus）。チームリード、インシデント、設計 — 本番視点を各プロジェクトへ。",
  founderStack: [
    "Golang",
    "NestJS",
    "Laravel",
    "TypeScript",
    "Docker",
    "Redis",
    "MySQL",
    "Grafana",
  ],
  ctaEyebrow: "スタート",
  ctaTitle: "課題をシステムに変える準備はできましたか？",
  ctaSupport:
    "ゴールを教えてください。Dolphin Kich がスコープを固め、チームが自走できるまで届けます。",
};

const zh: AboutCopy = {
  eyebrow: "Studio",
  title: "Dolphin Kich",
  motto: "从难题到[[可运行的系统]] — 没有什么不可能。",
  support:
    "我们把业务目标变成可运营的网站、应用与 AI 工作流。范围清晰、里程碑准时、源码 + 指引——让团队能自跑。",
  ctaPrimary: "获取报价",
  ctaSecondary: "查看服务",
  mindsetEyebrow: "心态",
  mindsetTitle: "工作室如何做事",
  mindset: [
    {
      title: "执着于上线交付",
      body: "绝不止于 Demo。每个项目都以上线系统为目标——稳定、可衡量、由客户团队自行运营。",
    },
    {
      title: "如训练般自律",
      body: "C罗般的职业精神：靠节奏而非运气。Discovery → plan → sprint → UAT → handover 均有标准流程。",
    },
    {
      title: "没有什么不可能",
      body: "复杂问题只需要清晰的范围和坚定的执行力。从旧系统到微服务，从手动运维到自动化——我们寻找路径并成功交付。",
    },
  ],
  buildEyebrow: "能力",
  buildTitle: "Dolphin Kich 做什么",
  buildSupport:
    "能力经过真实 EdTech 与 SaaS 产品（生产环境、事故响应、高并发扩容）的淬炼，再运用于 SMB 交付。",
  buildItems: [
    {
      title: "Web & 应用",
      body: "网站、门户、小程序 — 界面简洁、支持移动端，编码前明确并锁定范围。",
    },
    {
      title: "后端 & 系统",
      body: "API、管理后台、集成（Zalo、支付、CRM等） — 为扩展性和可维护性而设计。",
    },
    {
      title: "AI & 自动化",
      body: "Agent、工作流、运维闭环 — 减少人工，提升运营团队的可视化能力。",
    },
    {
      title: "交付 & 运营",
      body: "源码、文档、培训讲解、质保 — 产权清晰，绝不绑定供应商。",
    },
  ],
  proofEyebrow: "方法",
  proofTitle: "把生产经验带进工作室",
  proofSupport:
    "不是营销清单——这是来自在真实高负载下运行过的线上系统的实战经验。",
  proofs: [
    {
      title: "生产环境可靠性",
      body: "事故响应、数据恢复、可观测性（Prometheus, Grafana, 日志） — 在高峰流量下保持系统稳定。",
    },
    {
      title: "实战系统设计",
      body: "单体 → 微服务（Golang, NestJS），消息队列（Kafka, RabbitMQ），高流量活动前使用 K6 进行压测。",
    },
    {
      title: "干系人高效协作",
      body: "与 PO/BA 分析流程、确认可行性、带领多项目团队 — 沟通直接，范围明确。",
    },
    {
      title: "已交付的集成方案",
      body: "ClassIn, Zalo ZNS, HubSpot, Mailgun, 多平台小程序 — 生产级集成，绝非单纯的概念验证（PoC）。",
    },
  ],
  founderEyebrow: "团队",
  founderTitle: "工作室背后",
  founderRole: "Co-founder · Product Backend / Tech Lead",
  founderName: "Nguyen Chi Thanh",
  founderBody:
    "5+ 年线上产品后端（Marathon、Myspa、Splus）。带队、事故响应、系统设计——把生产思维带进每个 Dolphin Kich 项目。",
  founderStack: [
    "Golang",
    "NestJS",
    "Laravel",
    "TypeScript",
    "Docker",
    "Redis",
    "MySQL",
    "Grafana",
  ],
  ctaEyebrow: "开始",
  ctaTitle: "准备好把问题变成系统了吗？",
  ctaSupport:
    "告诉我们目标——获客、销售、预约或内部运营。Dolphin Kich 锁定范围并交付，直到团队能自跑。",
};

export const aboutCopy: Record<Locale, AboutCopy> = { vi, en, de, ja, zh };

export function getAboutCopy(locale: Locale): AboutCopy {
  return aboutCopy[locale];
}