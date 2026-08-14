import type { Locale } from "@/lib/i18n/types";

export type AboutFaqItem = { q: string; a: string };

export type AboutBuildItem = {
  title: string;
  body: string;
  /** Optional internal link for topical SEO. */
  href?: string;
};

export type AboutTeamMember = {
  id: string;
  name: string;
  role: string;
  body: string;
  image: string;
  tags: string[];
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
  /** Section chrome — team grid on /about/ */
  founderEyebrow: string;
  founderTitle: string;
  /** @deprecated Prefer team[0] — kept for Person JSON-LD */
  founderRole: string;
  founderName: string;
  founderBody: string;
  founderStack: string[];
  team: AboutTeamMember[];
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
  mindsetEyebrow: "Approach",
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
  buildEyebrow: "Capabilities",
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
      title: "02 · Phát triển phần mềm",
      body: "API, admin, tích hợp (Zalo, thanh toán, CRM…) — thiết kế để mở rộng và bảo trì lâu dài.",
      href: "/services/software/",
    },
    {
      title: "03 · AI & Automation",
      body: "Agent, workflow, ops loop — giảm thao tác thủ công, tăng khả năng quan sát cho người vận hành.",
      href: "/ai-transform/",
    },
    {
      title: "04 · Bàn giao & Vận hành",
      body: "Mã nguồn, tài liệu, hướng dẫn, bảo hành — quyền sở hữu rõ ràng, không phụ thuộc vendor. Xem thêm Dolphin Care cho chăm sóc khách trên website.",
      href: "/dolphin-care/",
    },
  ],
  proofEyebrow: "Experience",
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
  founderEyebrow: "Team",
  founderTitle: "Đội ngũ Dolphin Software",
  founderRole: "Founder / Solution Architect",
  founderName: "Nguyễn Chí Thành",
  founderBody:
    "Nguyễn Chí Thành có hơn 7 năm kinh nghiệm backend trên các sản phẩm live: Marathon, Myspa, và Splus. Anh đảm nhiệm vai trò team lead, xử lý sự cố production, và thiết kế hệ thống — tư duy production được áp dụng trực tiếp vào mọi dự án tại Dolphin Software.",
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
  team: [
    {
      id: "thanh",
      name: "Nguyễn Chí Thành",
      role: "Founder / Solution Architect",
      body: "Nguyễn Chí Thành có hơn 7 năm kinh nghiệm backend trên các sản phẩm live: Marathon, Myspa, và Splus. Anh đảm nhiệm vai trò team lead, xử lý sự cố production, và thiết kế hệ thống — tư duy production được áp dụng trực tiếp vào mọi dự án tại Dolphin Software.",
      image: "/about/founder.png",
      tags: [
        "Golang",
        "NestJS",
        "Laravel",
        "TypeScript",
        "Docker",
        "Redis",
        "MySQL",
        "Grafana",
      ],
    },
    {
      id: "hoang",
      name: "Phạm Tấn Hoàng",
      role: "Co-founder",
      body: "Phạm Tấn Hoàng là đồng sáng lập Dolphin Software. Anh đảm nhận lead các sản phẩm outsource cho khách hàng và tham gia phát triển Dolphin Intelligence.",
      image: "/about/team-hoang.png",
      tags: [],
    },
    {
      id: "nghia",
      name: "Hồ Quốc Nghĩa",
      role: "Business Development · Japan Market",
      body: "Hồ Quốc Nghĩa phụ trách phát triển kinh doanh và thị trường Nhật Bản — sales & marketing, kết nối SMB/đối tác JP, đề xuất hướng website/phần mềm phù hợp và báo giá rõ phạm vi đến khi chốt dự án.",
      image: "/about/team-nghia.png",
      tags: ["Japan", "Sales", "Marketing", "BD", "Partnerships"],
    },
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
  ctaEyebrow: "Start",
  ctaTitle: "Bắt đầu dự án với [[Dolphin Software]]",
  ctaSupport:
    "Cho Dolphin Software biết mục tiêu — bán hàng, thu lead, nhận booking, hay vận hành nội bộ. Dolphin Software chốt scope và triển khai cho đến khi đội ngũ của bạn tự vận hành được.",
};

const en: AboutCopy = {
  metaTitle:
    "What is Dolphin Software? | Web & AI development studio for Vietnamese SMBs",
  metaDescription:
    "Dolphin Software is a software development studio in Vietnam — custom websites, AI automation, full source handover. Transparent quotes and post-handover support.",
  eyebrow: "Studio",
  title: "Dolphin Software",
  motto:
    "Software development studio & [[AI automation]] for Vietnamese businesses",
  support:
    "Dolphin Software is a software development studio in Vietnam that builds custom websites, apps, and AI automation for small and mid-size businesses (SMBs). Dolphin Software hands over full source, ops guidance, and post-launch support — no vendor lock-in, no scope overruns. From business goals to operable systems: Dolphin Software defines clear scope, delivers on time, and partners until your team can run it.",
  ctaPrimary: "Get a quote",
  ctaSecondary: "View services",
  mindsetEyebrow: "Approach",
  mindsetTitle: "How does Dolphin Software approach projects?",
  mindsetSupport:
    "Dolphin Software builds systems meant to run in production — not stop at demos. Every project aims at a stable, measurable system your team can operate after handover.",
  mindset: [
    {
      title: "Ship only when it’s live",
      body: "Demos are not the finish line. Every project aims at a live system — stable, measurable, owned by your team.",
    },
    {
      title: "Standard process, not luck",
      body: "Discovery → plan → sprint → UAT → handover — clear outputs at each step, no skipped stages.",
    },
    {
      title: "Hard problems still have a path",
      body: "Clear scope and disciplined execution is how Dolphin Software solves complexity — legacy to microservices, manual ops to automation.",
    },
  ],
  buildEyebrow: "Capabilities",
  buildTitle: "What does Dolphin Software build?",
  buildSupport:
    "Dolphin Software develops four core capability groups for SMBs, forged from real experience on edtech and SaaS products that ran under production load.",
  buildItems: [
    {
      title: "01 · Web & App",
      body: "Websites, portals, mini apps — clean UI, mobile-ready, scope locked before code.",
      href: "/services/web/",
    },
    {
      title: "02 · Custom software",
      body: "APIs, admin, integrations (Zalo, payments, CRM…) — designed to scale and maintain long-term.",
      href: "/services/software/",
    },
    {
      title: "03 · AI & Automation",
      body: "Agents, workflows, ops loops — less manual work, more visibility for operators.",
      href: "/ai-transform/",
    },
    {
      title: "04 · Handover & Ops",
      body: "Source, docs, walkthrough, warranty — clear ownership, no vendor lock-in. See Dolphin Care for on-site customer care.",
      href: "/dolphin-care/",
    },
  ],
  proofEyebrow: "Experience",
  proofTitle: "Dolphin Software’s real production experience",
  proofSupport:
    "Dolphin Software brings lessons from live production systems — not a marketing checklist — into every SMB project.",
  proofs: [
    {
      title: "Production reliability",
      body: "Incident response, data recovery, observability with Prometheus and Grafana — keep systems steady under peak traffic.",
    },
    {
      title: "Battle-tested system design",
      body: "Monolith → microservices (Golang, NestJS), messaging (Kafka, RabbitMQ), K6 load tests before high-traffic windows.",
    },
    {
      title: "Close stakeholder partnership",
      body: "Flow analysis with PO/BA, feasibility checks, multi-project team lead — straight talk, clear scope.",
    },
    {
      title: "Integrations shipped in production",
      body: "ClassIn, Zalo ZNS, HubSpot, Mailgun, multi-platform Mini Apps — production integrations, not just PoCs.",
    },
  ],
  founderEyebrow: "Team",
  founderTitle: "The Dolphin Software team",
  founderRole: "Founder / Solution Architect",
  founderName: "Nguyễn Chí Thành",
  founderBody:
    "Nguyễn Chí Thành has 7+ years of backend experience on live products: Marathon, Myspa, and Splus. He has led teams, handled production incidents, and designed systems — production thinking applied directly to every Dolphin Software project.",
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
  team: [
    {
      id: "thanh",
      name: "Nguyễn Chí Thành",
      role: "Founder / Solution Architect",
      body: "Nguyễn Chí Thành has 7+ years of backend experience on live products: Marathon, Myspa, and Splus. He has led teams, handled production incidents, and designed systems — production thinking applied directly to every Dolphin Software project.",
      image: "/about/founder.png",
      tags: [
        "Golang",
        "NestJS",
        "Laravel",
        "TypeScript",
        "Docker",
        "Redis",
        "MySQL",
        "Grafana",
      ],
    },
    {
      id: "hoang",
      name: "Phạm Tấn Hoàng",
      role: "Co-founder",
      body: "Phạm Tấn Hoàng is a co-founder of Dolphin Software. He leads outsourced product work for clients and contributes to Dolphin Intelligence.",
      image: "/about/team-hoang.png",
      tags: [],
    },
    {
      id: "nghia",
      name: "Hồ Quốc Nghĩa",
      role: "Business Development · Japan Market",
      body: "Hồ Quốc Nghĩa owns business development for the Japan market — sales & marketing, partnering with Japanese SMBs, proposing the right website/software path, and clear scoped quotes through close.",
      image: "/about/team-nghia.png",
      tags: ["Japan", "Sales", "Marketing", "BD", "Partnerships"],
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Frequently asked questions about Dolphin Software",
  faqItems: [
    {
      q: "What kind of company is Dolphin Software?",
      a: "Dolphin Software is a software studio in Vietnam building custom websites, mobile apps, backends, and AI automation for SMBs — with full source handover and post-launch support.",
    },
    {
      q: "Can non-technical businesses work with Dolphin Software?",
      a: "Yes. Most Dolphin Software clients are not engineers. Describe the business goal — Dolphin Software scopes in operating language, ships end-to-end, and hands over walkthroughs so your team can run it.",
    },
    {
      q: "Does Dolphin Software lock customers into a vendor after handover?",
      a: "No. You get full source, technical docs, and ops guidance. You own the product — you are not dependent on Dolphin Software to keep it running.",
    },
    {
      q: "How does Dolphin Software pricing work?",
      a: "Send a short brief via the contact form, Get a quote, or Zalo. Dolphin Software replies with estimated scope and next steps — no fees outside the agreed scope.",
    },
    {
      q: "Is there support after handover?",
      a: "Yes. After go-live you get ops guidance and warranty for technical defects in the signed scope (typically 3–6 months). New features are quoted separately first.",
    },
    {
      q: "Does Dolphin Software integrate Zalo and CRM systems?",
      a: "Yes. Dolphin Software has shipped production integrations with Zalo ZNS, HubSpot, Mailgun, and more — not just proofs of concept.",
    },
  ],
  ctaEyebrow: "Start",
  ctaTitle: "Start a project with [[Dolphin Software]]",
  ctaSupport:
    "Tell Dolphin Software the goal — sell, capture leads, take bookings, or run internal ops. We lock scope and ship until your team can operate it.",
};

const ja: AboutCopy = {
  metaTitle:
    "Dolphin Softwareとは？ | ベトナムSMB向けWeb・AI開発スタジオ",
  metaDescription:
    "Dolphin Softwareはベトナムのソフトウェア開発スタジオ — オーダーメイドWeb、AI自動化、ソース一式納品。見積もり明確、納品後サポートあり。",
  eyebrow: "Studio",
  title: "Dolphin Software",
  motto:
    "ベトナム企業向けソフトウェア開発スタジオ & [[AI automation]]",
  support:
    "Dolphin Softwareはベトナムのソフトウェア開発スタジオで、中小企業（SMB）向けにオーダーメイドWeb、アプリ、AI自動化を構築します。ソース一式、運用ガイド、本番後サポートまで — ベンダーロックインなし、合意スコープ外の追加費用なし。ビジネス目標から運用できるシステムへ：Dolphin Softwareはスコープを明確に定義し、期日どおりに納品し、御社チームが自走できるまで伴走します。",
  ctaPrimary: "見積もりを依頼",
  ctaSecondary: "サービスを見る",
  mindsetEyebrow: "Approach",
  mindsetTitle: "Dolphin Softwareはプロジェクトをどう進めますか？",
  mindsetSupport:
    "Dolphin Softwareはデモで終わらず、本番で動くシステムを作ります。安定・計測可能・引継ぎ後に自社チームで運用できることを目指します。",
  mindset: [
    {
      title: "本番に乗せてからがゴール",
      body: "デモはゴールではありません。すべてのプロジェクトで、安定して測定可能、自社チームが所有する本番システムを目指します。",
    },
    {
      title: "標準プロセス、運に頼らない",
      body: "Discovery → 計画 → スプリント → UAT → 納品 — 各ステップに明確な成果物があり、段階を飛ばしません。",
    },
    {
      title: "難しい課題にも道はある",
      body: "明確なスコープと規律ある実行がDolphin Softwareの解法です — レガシーからマイクロサービス、手作業から自動化まで。",
    },
  ],
  buildEyebrow: "Capabilities",
  buildTitle: "Dolphin Softwareは何を作りますか？",
  buildSupport:
    "Dolphin SoftwareはSMB向けの4つの中核能力を、本番負荷下で動いてきたEdTech・SaaSでの実経験から鍛えています。",
  buildItems: [
    {
      title: "01 · Web & アプリ",
      body: "サイト、ポータル、ミニアプリ — クリーンなUI、モバイル対応、実装前にスコープ確定。",
      href: "/services/web/",
    },
    {
      title: "02 · ソフトウェア開発 & システム",
      body: "API、管理画面、連携（Zalo、決済、CRMなど） — 長期のスケールと保守を見据えた設計。",
      href: "/services/software/",
    },
    {
      title: "03 · AI & 自動化",
      body: "エージェント、ワークフロー、運用ループ — 手作業を減らし、運用の可視性を高める。",
      href: "/ai-transform/",
    },
    {
      title: "04 · 納品 & 運用",
      body: "ソース、ドキュメント、レクチャー、保証 — 所有権明確、ベンダーロックインなし。サイト上の顧客ケアはDolphin Careもご覧ください。",
      href: "/dolphin-care/",
    },
  ],
  proofEyebrow: "Experience",
  proofTitle: "Dolphin Softwareの本番経験",
  proofSupport:
    "マーケティング用チェックリストではなく、実負荷下で動いた本番システムからの学びを、SMB案件に落とし込みます。",
  proofs: [
    {
      title: "本番環境の信頼性",
      body: "インシデント対応、データ復旧、Prometheus / Grafanaによる可視化 — ピーク時も安定運用。",
    },
    {
      title: "実戦で鍛えたシステム設計",
      body: "モノリス → マイクロサービス（Golang, NestJS）、メッセージング（Kafka, RabbitMQ）、ピーク前のK6負荷テスト。",
    },
    {
      title: "ステークホルダーとの密な連携",
      body: "PO/BAとのフロー分析、実現可能性の検証、複数プロジェクトのリード — 率直な対話と明確なスコープ。",
    },
    {
      title: "本番で出荷した連携",
      body: "ClassIn、Zalo ZNS、HubSpot、Mailgun、マルチプラットフォームMini App — PoCに留まらない本番実装。",
    },
  ],
  founderEyebrow: "Team",
  founderTitle: "Dolphin Softwareのチーム",
  founderRole: "Founder / Solution Architect",
  founderName: "Nguyễn Chí Thành",
  founderBody:
    "Nguyễn Chí Thànhはライブプロダクト（Marathon、Myspa、Splus）で7年以上のバックエンド経験を持ちます。チームリード、本番インシデント対応、システム設計 — 本番視点をDolphin Softwareの全プロジェクトに直接活かしています。",
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
  team: [
    {
      id: "thanh",
      name: "Nguyễn Chí Thành",
      role: "Founder / Solution Architect",
      body: "Nguyễn Chí Thànhはライブプロダクト（Marathon、Myspa、Splus）で7年以上のバックエンド経験を持ちます。チームリード、本番インシデント対応、システム設計 — 本番視点をDolphin Softwareの全プロジェクトに直接活かしています。",
      image: "/about/founder.png",
      tags: [
        "Golang",
        "NestJS",
        "Laravel",
        "TypeScript",
        "Docker",
        "Redis",
        "MySQL",
        "Grafana",
      ],
    },
    {
      id: "hoang",
      name: "Phạm Tấn Hoàng",
      role: "共同創業者",
      body: "Phạm Tấn HoàngはDolphin Softwareの共同創業者です。顧客向けアウトソース製品のリードを担い、Dolphin Intelligenceの開発にも参加しています。",
      image: "/about/team-hoang.png",
      tags: [],
    },
    {
      id: "nghia",
      name: "Hồ Quốc Nghĩa",
      role: "Business Development · Japan Market",
      body: "Hồ Quốc Nghĩaは日本市場の事業開発を担当 — セールス＆マーケティング、日本のSMB／パートナーとの接点、適切なWeb/ソフトウェア提案、明確な見積りで成約まで伴走します。",
      image: "/about/team-nghia.png",
      tags: ["Japan", "Sales", "Marketing", "BD", "Partnerships"],
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Dolphin Softwareについてよくある質問",
  faqItems: [
    {
      q: "Dolphin Softwareはどんな会社ですか？",
      a: "ベトナムのソフトウェアスタジオで、SMB向けにオーダーメイドWeb、モバイル、バックエンド、AI自動化を提供し、ソース一式納品と本番後サポートを行います。",
    },
    {
      q: "技術チームがなくてもDolphin Softwareに依頼できますか？",
      a: "はい。多くのお客様はエンジニアではありません。ビジネス目標を伝えていただければ、運用の言葉でスコープを固め、エンドツーエンドで納品し、自走できるまでガイドします。",
    },
    {
      q: "納品後にベンダーロックインはありますか？",
      a: "ありません。ソース、技術ドキュメント、運用ガイドをすべてお渡しします。製品はお客様の所有です — 稼働維持のためにDolphin Softwareに依存しません。",
    },
    {
      q: "Dolphin Softwareの見積もりはどう進みますか？",
      a: "お問い合わせフォーム、「見積もりを依頼」、またはZaloで短いブリーフを送ってください。合意スコープ外の費用は発生しません。",
    },
    {
      q: "納品後のサポートはありますか？",
      a: "はい。本番後は運用ガイドと、契約スコープ内の技術不具合保証（通常3〜6ヶ月）があります。新機能は先に見積もりします。",
    },
    {
      q: "ZaloやCRM連携の実績はありますか？",
      a: "はい。Zalo ZNS、HubSpot、Mailgunなど本番連携の実績があります。PoCだけではありません。",
    },
  ],
  ctaEyebrow: "Start",
  ctaTitle: "[[Dolphin Software]]でプロジェクトを始めましょう",
  ctaSupport:
    "ゴールを教えてください — 販売、リード獲得、予約受付、社内運用。スコープを固め、チームが自走できるまで届けます。",
};

export const aboutCopy: Record<Locale, AboutCopy> = { vi, en, ja };

export function getAboutCopy(locale: Locale): AboutCopy {
  return aboutCopy[locale];
}
