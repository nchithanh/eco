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
    "Dolphin Software là gì? | Giải pháp AI & công nghệ cho doanh nghiệp",
  metaDescription:
    "Dolphin Software là công ty giải pháp AI và công nghệ cho doanh nghiệp — bắt đầu từ vấn đề vận hành, rồi mới chọn website, AI Agent, CRM, automation hoặc phần mềm theo yêu cầu.",
  eyebrow: "Studio",
  title: "Dolphin Software",
  motto:
    "Công ty [[giải pháp AI & công nghệ]] — bắt đầu từ vấn đề, không từ sản phẩm",
  support:
    "Dolphin Software giúp doanh nghiệp xác định nghẽn vận hành và xây đúng thứ cần: website, AI Agent, CRM, automation, tích hợp, hoặc phần mềm theo yêu cầu. Bàn giao mã nguồn, hướng dẫn vận hành, hỗ trợ sau triển khai — không khóa vendor. Không chắc cần công nghệ gì vẫn bắt đầu được: kể chỗ đang nghẽn.",
  ctaPrimary: "Nói về doanh nghiệp của bạn",
  ctaSecondary: "Xem giải pháp",
  mindsetEyebrow: "Approach",
  mindsetTitle: "Dolphin Software tiếp cận dự án như thế nào?",
  mindsetSupport:
    "Bắt đầu từ doanh nghiệp, không từ sản phẩm. Bốn bước: hiểu → xác định nghẽn → xây đúng thứ → đo và cải thiện.",
  mindset: [
    {
      title: "Hiểu",
      body: "Nghe cách anh chị đang bán, chăm khách, và vận hành — bằng ngôn ngữ kinh doanh, chưa mở catalog.",
    },
    {
      title: "Xác định nghẽn",
      body: "Chỉ ra chỗ đang mất thời gian, mất lead, hoặc phụ thuộc một người.",
    },
    {
      title: "Xây đúng thứ",
      body: "Website, AI, CRM, tích hợp hoặc phần mềm riêng — chỉ những gì khớp pain. Không bán đống tính năng.",
    },
    {
      title: "Đo và cải thiện",
      body: "Bàn giao để đội anh chị tự chạy; chỉnh khi thực tế phát sinh — không bỏ xó.",
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
      a: "Dolphin Software là công ty giải pháp AI và công nghệ cho doanh nghiệp. Chúng tôi bắt đầu từ vấn đề vận hành — rồi mới chọn website, AI Agent, CRM, automation, tích hợp hoặc phần mềm theo yêu cầu.",
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
  ctaTitle: "Nói về doanh nghiệp với [[Dolphin Software]]",
  ctaSupport:
    "Kể chỗ đang nghẽn — bán hàng, lead trôi, làm tay, hay site không ra khách. Dolphin đề xuất phạm vi khớp pain, không ép gói.",
};

const en: AboutCopy = {
  metaTitle:
    "What is Dolphin Software? | AI & technology solutions for business",
  metaDescription:
    "Dolphin Software is an AI and technology solutions company — we start from the operational problem, then choose a website, AI agent, CRM, automation, or custom software.",
  eyebrow: "Studio",
  title: "Dolphin Software",
  motto:
    "[[AI & technology solutions]] — we start with the problem, not the product",
  support:
    "Dolphin Software helps businesses spot operational bottlenecks and build the right fix: website, AI agent, CRM, automation, integrations, or custom software. Full source handover, ops guidance, post-launch support — no vendor lock-in. Not sure which technology you need? Start by describing the bottleneck.",
  ctaPrimary: "Talk about your business",
  ctaSecondary: "See solutions",
  mindsetEyebrow: "Approach",
  mindsetTitle: "How does Dolphin Software approach projects?",
  mindsetSupport:
    "Start with the business, not the product. Four steps: understand → identify the bottleneck → build the right thing → measure and improve.",
  mindset: [
    {
      title: "Understand",
      body: "Hear how you sell, care for customers, and run the shop — in business language, before opening a catalog.",
    },
    {
      title: "Identify the bottleneck",
      body: "Point to where time, leads, or a single person is the choke point.",
    },
    {
      title: "Build the right thing",
      body: "Website, AI, CRM, integrations, or custom software — only what matches the pain. We don't sell a pile of features.",
    },
    {
      title: "Measure and improve",
      body: "Handover so your team can run it; adjust when reality shows up — not a dump-and-leave.",
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
      a: "Dolphin Software is an AI and technology solutions company. We start from the operational problem — then choose a website, AI agent, CRM, automation, integration, or custom software.",
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
  ctaTitle: "Talk about your business with [[Dolphin Software]]",
  ctaSupport:
    "Describe the bottleneck — sales, leaking leads, manual work, or a site that doesn't convert. Dolphin proposes scope that matches the pain, no package pushing.",
};

const ja: AboutCopy = {
  metaTitle:
    "Dolphin Softwareとは？ | 企業向けAI・テクノロジーソリューション",
  metaDescription:
    "Dolphin Softwareは企業向けのAI・テクノロジーソリューション会社です。運用の課題から始め、Webサイト、AIエージェント、CRM、自動化、専用ソフトを選びます。",
  eyebrow: "Studio",
  title: "Dolphin Software",
  motto:
    "[[AI・テクノロジーソリューション]] — 技術からではなく、課題から始める",
  support:
    "Dolphinは運用の詰まりを特定し、Webサイト、AIエージェント、CRM、自動化、連携、専用ソフトで解消します。ソース一式、運用ガイド、本番後サポート — ベンダーロックなし。どの技術が必要か分からなくても、詰まっている箇所から始められます。",
  ctaPrimary: "事業について話す",
  ctaSecondary: "ソリューションを見る",
  mindsetEyebrow: "Approach",
  mindsetTitle: "Dolphin Softwareはプロジェクトをどう進めますか？",
  mindsetSupport:
    "製品ではなく事業から。4ステップ：理解する → 詰まりを特定する → 必要なものだけ作る → 測って改善する。",
  mindset: [
    {
      title: "理解する",
      body: "販売、顧客対応、運用の実態を、ビジネスの言葉で聞く。カタログは後。",
    },
    {
      title: "詰まりを特定する",
      body: "時間、リード、または特定の人に依存している箇所を示す。",
    },
    {
      title: "必要なものだけ作る",
      body: "Web、AI、CRM、連携、または専用ソフト — 痛みに合うものだけ。機能の山は売らない。",
    },
    {
      title: "測って改善する",
      body: "自走できる形で納品し、現場が出たら直す — 置いて終わりにしない。",
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
      a: "企業向けのAI・テクノロジーソリューション会社です。運用の課題から始め、Webサイト、AIエージェント、CRM、自動化、連携、専用ソフトを選びます。",
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
  ctaTitle: "[[Dolphin Software]]に事業の話をする",
  ctaSupport:
    "詰まっている箇所を教えてください — 販売、リード漏れ、手作業、効かないサイト。Dolphinが痛みに合う範囲を提案します。パッケージの押し付けはありません。",
};

export const aboutCopy: Record<Locale, AboutCopy> = { vi, en, ja };

export function getAboutCopy(locale: Locale): AboutCopy {
  return aboutCopy[locale];
}
