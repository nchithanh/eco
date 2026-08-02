import type { Locale } from "@/lib/i18n/types";

export type AboutFaqItem = { q: string; a: string };

export type AboutBuildItem = {
  title: string;
  body: string;
  /** Optional internal link for topical SEO. */
  href?: string;
};

export type AboutCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  motto: string;
  support: string;
  ctaPrimary: string;
  ctaSecondary: string;
  mindsetEyebrow: string;
  mindsetTitle: string;
  mindsetSupport: string;
  mindset: { title: string; body: string }[];
  buildEyebrow: string;
  buildTitle: string;
  buildSupport: string;
  buildItems: AboutBuildItem[];
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
  faqEyebrow: string;
  faqTitle: string;
  faqItems: AboutFaqItem[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaSupport: string;
};

const vi: AboutCopy = {
  metaTitle:
    "Dolphin Software là gì? | Công ty thiết kế web & AI cho SMB Việt Nam",
  metaDescription:
    "Dolphin Software là studio phát triển phần mềm tại Việt Nam — thiết kế website theo yêu cầu, AI automation, bàn giao mã nguồn đầy đủ. Báo giá minh bạch, hỗ trợ sau bàn giao.",
  eyebrow: "Studio",
  title: "Dolphin Software",
  motto:
    "Studio phát triển phần mềm & [[AI automation]] cho doanh nghiệp Việt Nam",
  support:
    "Dolphin Software là studio phát triển phần mềm tại Việt Nam, chuyên xây dựng website theo yêu cầu, ứng dụng, và AI automation cho doanh nghiệp vừa và nhỏ (SMB). Dolphin Software bàn giao mã nguồn đầy đủ, hướng dẫn vận hành, và hỗ trợ sau triển khai — không khóa vendor, không phát sinh ngoài scope đã chốt. Từ mục tiêu kinh doanh đến hệ thống vận hành thực tế: Dolphin Software xác định scope rõ ràng, giao đúng mốc, và đồng hành cho đến khi đội ngũ của bạn tự vận hành được.",
  ctaPrimary: "Nhận báo giá",
  ctaSecondary: "Xem dịch vụ",
  mindsetEyebrow: "Cách tiếp cận",
  mindsetTitle: "Dolphin Software tiếp cận dự án như thế nào?",
  mindsetSupport:
    "Dolphin Software xây dựng hệ thống để chạy thực tế — không dừng lại ở demo. Mỗi dự án hướng đến một hệ thống ổn định, đo lường được, và do đội ngũ khách hàng tự vận hành sau bàn giao.",
  mindset: [
    {
      title: "Chỉ ship khi live",
      body: "Demo không phải đích đến. Mỗi dự án hướng đến hệ thống live — ổn định, đo lường được, và thuộc sở hữu của đội ngũ bạn.",
    },
    {
      title: "Quy trình chuẩn, không may rủi",
      body: "Discovery → lên kế hoạch → sprint → UAT → bàn giao — từng bước có đầu ra rõ ràng, không bỏ giai đoạn nào.",
    },
    {
      title: "Vấn đề khó vẫn có lối ra",
      body: "Scope rõ và thực thi nghiêm túc là cách Dolphin Software giải quyết bài toán phức tạp — từ legacy sang microservices, từ vận hành thủ công sang tự động hóa.",
    },
  ],
  buildEyebrow: "Năng lực",
  buildTitle: "Dolphin Software xây dựng những gì?",
  buildSupport:
    "Dolphin Software phát triển bốn nhóm năng lực cốt lõi cho SMB, được rèn giũa từ kinh nghiệm thực tế trên các sản phẩm edtech và SaaS đã vận hành production với tải thực.",
  buildItems: [
    {
      title: "01 · Web & App",
      body: "Website, portal, mini app — giao diện gọn, tương thích mobile, scope được khóa trước khi viết code.",
      href: "/services/web/",
    },
    {
      title: "02 · Backend & Hệ thống",
      body: "API, admin, tích hợp (Zalo, thanh toán, CRM…) — thiết kế để mở rộng và bảo trì lâu dài.",
      href: "/services/backend/",
    },
    {
      title: "03 · AI & Automation",
      body: "Agent, workflow, ops loop — giảm thao tác thủ công, tăng khả năng quan sát cho người vận hành.",
      href: "/custom-agent/",
    },
    {
      title: "04 · Bàn giao & Vận hành",
      body: "Mã nguồn, tài liệu, hướng dẫn, bảo hành — quyền sở hữu rõ ràng, không phụ thuộc vendor. Xem thêm Dolphin Care cho chăm sóc khách trên website.",
      href: "/dolphin-care/",
    },
  ],
  proofEyebrow: "Kinh nghiệm",
  proofTitle: "Kinh nghiệm production thực tế của Dolphin Software",
  proofSupport:
    "Dolphin Software mang kinh nghiệm từ hệ thống production thực tế — không phải checklist marketing — vào từng dự án cho SMB.",
  proofs: [
    {
      title: "Độ tin cậy production",
      body: "Xử lý sự cố, phục hồi dữ liệu, observability với Prometheus và Grafana — duy trì hệ thống ổn định dưới peak traffic.",
    },
    {
      title: "Thiết kế hệ thống đã qua thực chiến",
      body: "Monolith → microservices (Golang, NestJS), messaging (Kafka, RabbitMQ), load test với K6 trước các khung giờ cao điểm.",
    },
    {
      title: "Làm việc sát stakeholder",
      body: "Phân tích luồng cùng PO/BA, kiểm tra tính khả thi, dẫn dắt team đa dự án — giao tiếp thẳng thắn, scope luôn rõ ràng.",
    },
    {
      title: "Tích hợp đã ship thực tế",
      body: "ClassIn, Zalo ZNS, HubSpot, Mailgun, Mini App đa nền tảng — tích hợp production thực sự, không dừng ở PoC.",
    },
  ],
  founderEyebrow: "Đội ngũ",
  founderTitle: "Người sáng lập Dolphin Software là ai?",
  founderRole: "Founder · Product Backend / Tech Lead",
  founderName: "Nguyễn Chí Thanh",
  founderBody:
    "Nguyễn Chí Thanh có hơn 7 năm kinh nghiệm backend trên các sản phẩm live: Marathon, Myspa, và Splus. Anh đảm nhiệm vai trò team lead, xử lý sự cố production, và thiết kế hệ thống — tư duy production được áp dụng trực tiếp vào mọi dự án tại Dolphin Software.",
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
  faqEyebrow: "FAQ",
  faqTitle: "Câu hỏi thường gặp về Dolphin Software",
  faqItems: [
    {
      q: "Dolphin Software là công ty gì?",
      a: "Dolphin Software là studio phát triển phần mềm tại Việt Nam, chuyên xây dựng website theo yêu cầu, ứng dụng di động, hệ thống backend, và AI automation cho doanh nghiệp vừa và nhỏ. Dolphin Software bàn giao mã nguồn đầy đủ và hỗ trợ vận hành sau khi go-live.",
    },
    {
      q: "Doanh nghiệp không có đội kỹ thuật có làm việc với Dolphin Software được không?",
      a: "Được. Phần lớn khách hàng của Dolphin Software không có background kỹ thuật. Chỉ cần mô tả mục tiêu kinh doanh — Dolphin Software sẽ xác định scope bằng ngôn ngữ vận hành, thực thi end-to-end, và bàn giao kèm hướng dẫn để đội ngũ bạn tự vận hành được.",
    },
    {
      q: "Dolphin Software có khóa vendor sau khi bàn giao không?",
      a: "Không. Dolphin Software bàn giao toàn bộ mã nguồn, tài liệu kỹ thuật, và hướng dẫn vận hành. Bạn sở hữu hoàn toàn sản phẩm — không phụ thuộc vào Dolphin Software để duy trì hệ thống.",
    },
    {
      q: "Báo giá của Dolphin Software hoạt động như thế nào?",
      a: "Gửi brief ngắn qua form liên hệ, nút “Nhận báo giá”, hoặc Zalo. Dolphin Software phản hồi với scope ước tính và bước tiếp theo — không có phí phát sinh ngoài scope đã chốt.",
    },
    {
      q: "Dolphin Software có hỗ trợ sau khi bàn giao không?",
      a: "Có. Sau khi go-live, Dolphin Software cung cấp hướng dẫn vận hành và bảo hành lỗi kỹ thuật trong phạm vi scope đã ký kết (thường 3–6 tháng). Tính năng mới được báo giá riêng trước khi thực hiện.",
    },
    {
      q: "Dolphin Software có kinh nghiệm tích hợp Zalo và các hệ thống CRM không?",
      a: "Có. Dolphin Software đã ship tích hợp production thực tế với Zalo ZNS, HubSpot, Mailgun, và nhiều nền tảng khác — không dừng ở proof-of-concept.",
    },
  ],
  ctaEyebrow: "Bắt đầu",
  ctaTitle: "Bắt đầu dự án với [[Dolphin Software]]",
  ctaSupport:
    "Cho Dolphin Software biết mục tiêu — bán hàng, thu lead, nhận booking, hay vận hành nội bộ. Dolphin Software chốt scope và triển khai cho đến khi đội ngũ của bạn tự vận hành được.",
};

const en: AboutCopy = {
  metaTitle: "What is Dolphin Software? | Web & AI studio for SMBs",
  metaDescription:
    "Dolphin Software is a software studio in Vietnam — custom websites, AI automation, full source handover. Clear quotes and support after go-live.",
  eyebrow: "Studio",
  title: "Dolphin Software",
  motto: "From hard problems to [[systems that run]] — nothing is impossible.",
  support:
    "We turn business goals into web, apps, and AI workflows you can operate. Clear scope, on-time milestones, source + walkthrough — so your team can run it.",
  ctaPrimary: "Get a quote",
  ctaSecondary: "View services",
  mindsetEyebrow: "Mindset",
  mindsetTitle: "How this studio shows up",
  mindsetSupport:
    "Dolphin Software builds systems meant to run — not stop at demos. Every project aims at a stable, measurable system your team can operate after handover.",
  mindset: [
    {
      title: "Obsessed with shipping live",
      body: "Demos are not the finish line. Every project aims at a live system — stable, measurable, owned by your team.",
    },
    {
      title: "Train like a pro",
      body: "Rhythm over luck. Discovery → plan → sprint → UAT → handover with a real standard.",
    },
    {
      title: "Nothing is impossible",
      body: "Hard problems need clear scope and relentless execution. Legacy to microservices, manual ops to automation — we find the path and ship.",
    },
  ],
  buildEyebrow: "Capabilities",
  buildTitle: "What Dolphin Software builds",
  buildSupport:
    "Strength forged on real edtech & SaaS products — production, incidents, scale — then applied to how we ship for SMBs.",
  buildItems: [
    {
      title: "Web & App",
      body: "Sites, portals, mini apps — clean UI, mobile-ready, scope locked before code.",
      href: "/services/web/",
    },
    {
      title: "Backend & systems",
      body: "APIs, admin, integrations (Zalo, payments, CRM…) — designed to scale and maintain.",
      href: "/services/backend/",
    },
    {
      title: "AI & automation",
      body: "Agents, workflows, ops loops — less manual work, more visibility for operators.",
      href: "/custom-agent/",
    },
    {
      title: "Handover & ops",
      body: "Source, docs, walkthrough, warranty — clear ownership, no vendor lock-in. See Dolphin Care for on-site customer care.",
      href: "/dolphin-care/",
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
  founderRole: "Founder · Product Backend / Tech Lead",
  founderName: "Nguyen Chi Thanh",
  founderBody:
    "7+ years backend on live products (Marathon, Myspa, Splus). Team lead, incident response, system design — production thinking in every Dolphin Software project.",
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
  faqEyebrow: "FAQ",
  faqTitle: "Common questions about Dolphin Software",
  faqItems: [
    {
      q: "What kind of company is Dolphin Software?",
      a: "Dolphin Software is a software studio in Vietnam building custom websites, mobile apps, backends, and AI automation for SMBs — with full source handover and post-launch support.",
    },
    {
      q: "Can non-technical teams work with Dolphin Software?",
      a: "Yes. Most clients are not engineers. Describe the business goal — Dolphin Software scopes in operating language, ships end-to-end, and hands over walkthroughs so your team can run it.",
    },
    {
      q: "Do you lock customers into a vendor after handover?",
      a: "No. You get full source, technical docs, and ops guidance. You own the product — you are not dependent on Dolphin Software to keep it running.",
    },
    {
      q: "How does pricing work?",
      a: "Send a short brief via the contact form, Get a quote, or Zalo. Dolphin Software replies with estimated scope and next steps — no fees outside the agreed scope.",
    },
    {
      q: "Is there support after go-live?",
      a: "Yes. After go-live you get ops guidance and warranty for technical defects in the signed scope (typically 3–6 months). New features are quoted separately first.",
    },
    {
      q: "Do you integrate Zalo and CRM systems?",
      a: "Yes. Dolphin Software has shipped production integrations with Zalo ZNS, HubSpot, Mailgun, and more — not just proofs of concept.",
    },
  ],
  ctaEyebrow: "Start",
  ctaTitle: "Ready to turn the problem into a system?",
  ctaSupport:
    "Tell us the goal — sell, capture leads, take bookings, or run internal ops. Dolphin Software locks scope and ships until your team can run it.",
};

const ja: AboutCopy = {
  metaTitle: "Dolphin Softwareとは？ | SMB向けWeb・AIスタジオ",
  metaDescription:
    "Dolphin Softwareはベトナムのソフトウェアスタジオ — オーダーメイドWeb、AI自動化、ソース一式納品。見積もり明確、本番後サポートあり。",
  eyebrow: "Studio",
  title: "Dolphin Software",
  motto: "難しい課題から[[動くシステム]]へ — 不可能はない。",
  support:
    "ビジネス目標を、運用できる Web・アプリ・AI ワークフローに変えます。スコープ明確、マイルストーン、ソース＋ガイド付き。",
  ctaPrimary: "見積もりを依頼",
  ctaSecondary: "サービスを見る",
  mindsetEyebrow: "マインドセット",
  mindsetTitle: "このスタジオのスタンス",
  mindsetSupport:
    "Dolphin Software はデモで終わらず、本番で動くシステムを作ります。安定・計測可能・引継ぎ後に自社チームで運用できることを目指します。",
  mindset: [
    {
      title: "本番リリースへのこだわり",
      body: "デモで満足しません。すべてのプロジェクトで、安定して測定可能、自社チームで運用できる本番システムを目指します。",
    },
    {
      title: "プロとしての規律",
      body: "運に頼らずリズムを維持。Discovery → Plan → Sprint → UAT → 引継ぎまで標準化。",
    },
    {
      title: "不可能はない",
      body: "複雑な課題も明確なスコープと執念があれば解決できます。レガシーからマイクロサービス、手作業から自動化まで最適な道を切り開きます。",
    },
  ],
  buildEyebrow: "できること",
  buildTitle: "Dolphin Software がつくるもの",
  buildSupport:
    "EdTech や SaaS のリアルな本番・障害・スケール経験で鍛え抜かれた開発力を、SMB 向けの納品に活かします。",
  buildItems: [
    {
      title: "Web & アプリ",
      body: "サイト、ポータル、ミニアプリ — クリーンな UI、モバイル対応、実装前にスコープを確定。",
      href: "/services/web/",
    },
    {
      title: "バックエンド & システム",
      body: "API、管理画面、連携（Zalo、決済、CRMなど） — スケールと保守性を考慮した設計。",
      href: "/services/backend/",
    },
    {
      title: "AI & 自動化",
      body: "エージェント、ワークフロー、運用ループ — 手作業を減らし、運用チームの可視性を向上。",
      href: "/custom-agent/",
    },
    {
      title: "納品 & 運用",
      body: "ソースコード、ドキュメント、レクチャー、保証 — 所有権を明確にし、ベンダーロックインを回避。",
      href: "/dolphin-care/",
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
  founderRole: "Founder · Product Backend / Tech Lead",
  founderName: "Nguyen Chi Thanh",
  founderBody:
    "ライブプロダクトで7年以上のバックエンド（Marathon, Myspa, Splus）。チームリード、インシデント、設計 — 本番視点を各プロジェクトへ。",
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
  faqEyebrow: "FAQ",
  faqTitle: "Dolphin Software についてよくある質問",
  faqItems: [
    {
      q: "Dolphin Software はどんな会社ですか？",
      a: "ベトナムのソフトウェアスタジオで、SMB向けにオーダーメイドWeb、モバイル、バックエンド、AI自動化を提供し、ソース一式納品と本番後サポートを行います。",
    },
    {
      q: "技術チームがなくても依頼できますか？",
      a: "はい。多くのお客様はエンジニアではありません。ビジネス目標を伝えていただければ、運用の言葉でスコープを固め、エンドツーエンドで納品し、自走できるまでガイドします。",
    },
    {
      q: "納品後にベンダーロックインはありますか？",
      a: "ありません。ソース、技術ドキュメント、運用ガイドをすべてお渡しします。製品はお客様の所有です。",
    },
    {
      q: "見積もりはどのように進みますか？",
      a: "お問い合わせフォーム、「見積もりを依頼」、または Zalo で短いブリーフを送ってください。合意スコープ外の費用は発生しません。",
    },
    {
      q: "本番後のサポートはありますか？",
      a: "はい。本番後は運用ガイドと、契約スコープ内の技術不具合保証（通常3〜6ヶ月）があります。新機能は先に見積もりします。",
    },
    {
      q: "Zalo や CRM 連携の実績はありますか？",
      a: "はい。Zalo ZNS、HubSpot、Mailgun など本番連携の実績があります。PoC だけではありません。",
    },
  ],
  ctaEyebrow: "スタート",
  ctaTitle: "課題をシステムに変える準備はできましたか？",
  ctaSupport:
    "ゴールを教えてください。Dolphin Software がスコープを固め、チームが自走できるまで届けます。",
};

export const aboutCopy: Record<Locale, AboutCopy> = { vi, en, ja };

export function getAboutCopy(locale: Locale): AboutCopy {
  return aboutCopy[locale];
}
