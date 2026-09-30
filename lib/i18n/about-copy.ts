import type {Locale, LocaleMap} from "@/lib/i18n/types";

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
  /** Section chrome — team quote cards on /about/ */
  founderEyebrow: string;
  founderTitle: string;
  /** Caption under the group banner photo */
  teamBannerCaption: string;
  /** Alt for the group banner */
  teamBannerAlt: string;
  /** CTA on each team quote card → quote modal */
  teamCta: string;
  /** Closing line under the team cards */
  teamClosing: string;
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
    "Dolphin Software là gì? | CRM và AI cho doanh nghiệp dịch vụ",
  metaDescription:
    "Dolphin Software cho thuê phần mềm CRM và AI (SaaS) cho doanh nghiệp dịch vụ. Combo CRM kèm Care hoặc Ops từ 6 tháng tặng website khi triển khai.",
  eyebrow: "SaaS",
  title: "Dolphin Software",
  motto:
    "Thuê [[CRM và AI]] — bắt đầu từ vấn đề, không từ sản phẩm",
  support:
    "Dolphin Software cho thuê CRM (nền vận hành) và AI Care · Ops · Intelligence (tăng trưởng) cho spa, nail, salon, giáo dục, clinic. Website tặng hoặc giảm theo combo. SaaS là quyền dùng theo kỳ. Source bàn giao với gói outsource.",
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
  teamBannerCaption: "Đội ngũ sáng lập Dolphin Software",
  teamBannerAlt:
    "Đội ngũ sáng lập Dolphin Software ngồi cạnh nhau — founder khoác tay qua vai hai thành viên bên cạnh",
  teamCta: "Nói chuyện",
  teamClosing:
    "Cùng các thành viên khác, Dolphin sẽ luôn mang đến giá trị thật sự cho doanh nghiệp.",
  founderRole: "Founder / Solution Architect",
  founderName: "Nguyễn Chí Thành",
  founderBody:
    "Với nhiều năm kinh nghiệm phát triển phần mềm, Thành hiểu rõ nhu cầu và tầm quan trọng của việc thúc đẩy doanh nghiệp phát triển. Anh định hướng Dolphin chỉ cung cấp những giải pháp thật sự phù hợp — và phải giúp doanh nghiệp tăng trưởng doanh thu rõ ràng.",
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
      body: "Với nhiều năm kinh nghiệm phát triển phần mềm, Thành hiểu rõ nhu cầu và tầm quan trọng của việc thúc đẩy doanh nghiệp phát triển. Anh định hướng Dolphin chỉ cung cấp những giải pháp thật sự phù hợp — và phải giúp doanh nghiệp tăng trưởng doanh thu rõ ràng.",
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
      role: "Technical Leader",
      body: "Phạm Tấn Hoàng giám sát và triển khai các tính năng mới của Dolphin. Anh luôn giúp khách hàng bắt kịp xu hướng công nghệ toàn cầu — thúc đẩy vận hành gọn hơn và tăng trưởng doanh thu.",
      image: "/about/team-hoang.png",
      tags: ["Technical Leader", "Product", "Features"],
    },
    {
      id: "nghia",
      name: "Hồ Quốc Nghĩa",
      role: "Business Development · Japan Market",
      body: "Hồ Quốc Nghĩa phụ trách phát triển kinh doanh và thị trường Nhật Bản — sales & marketing, kết nối SMB/đối tác JP, đề xuất hướng website/phần mềm phù hợp và báo giá rõ phạm vi đến khi chốt dự án.",
      image: "/about/team-nghia.png",
      tags: ["Japan", "Sales", "Marketing", "BD", "Partnerships"],
    },
    {
      id: "hau",
      name: "Tô Văn Hậu",
      role: "System Admin — Agent SaaS 24/7",
      body: "Tô Văn Hậu theo dõi, giám sát hơn 5 server và gần 10 agent đang chạy — giữ vận hành ổn định nhất cho khách hàng, hạn chế downtime. Với Dolphin, mọi sự cố đều cần được xử lý ngay lập tức.",
      image: "/about/team-hau.png",
      tags: ["DevOps", "SaaS", "Linux", "Monitoring", "24/7"],
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Câu hỏi thường gặp về Dolphin Software",
  faqItems: [
    {
      q: "Dolphin Software là công ty gì?",
      a: "Dolphin Software cho thuê phần mềm CRM và AI (SaaS) cho doanh nghiệp dịch vụ. CRM là nền vận hành. Care, Ops và Intelligence là lớp tăng trưởng. Website được tặng hoặc giảm khi triển khai combo CRM.",
    },
    {
      q: "Doanh nghiệp không có đội kỹ thuật có làm việc với Dolphin Software được không?",
      a: "Được. Phần lớn khách hàng của Dolphin Software không có background kỹ thuật. Chỉ cần mô tả mục tiêu kinh doanh — Dolphin Software sẽ xác định scope bằng ngôn ngữ vận hành, thực thi end-to-end, và bàn giao kèm hướng dẫn để đội ngũ bạn tự vận hành được.",
    },
    {
      q: "Dolphin Software có khóa vendor sau khi bàn giao không?",
      a: "SaaS CRM, Care và Ops là quyền sử dụng theo kỳ đã thanh toán — không bàn giao source nền tảng. Gói may đo / outsourcing bàn giao source code và tài liệu. Website one-time bàn giao trong phạm vi đã nghiệm thu.",
    },
    {
      q: "Báo giá của Dolphin Software hoạt động như thế nào?",
      a: "Gửi brief ngắn qua form liên hệ, nút “Nhận báo giá”, hoặc Zalo. Dolphin Software phản hồi với scope ước tính và bước tiếp theo — không có phí phát sinh ngoài scope đã chốt.",
    },
    {
      q: "Dolphin Software có hỗ trợ sau khi bàn giao không?",
      a: "Website: bảo hành kỹ thuật 36 tháng. CRM và AI (SaaS): trong hạn gói đã thanh toán. Outsource / may đo: 3 tháng sau nghiệm thu. Tính năng mới ngoài phạm vi được báo giá riêng.",
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
    "What is Dolphin Software? | CRM and AI for service businesses",
  metaDescription:
    "Dolphin Software rents CRM and AI software (SaaS) for service businesses. A CRM plan with Care or Ops from 6 months includes a website when you deploy.",
  eyebrow: "SaaS",
  title: "Dolphin Software",
  motto:
    "Rent [[CRM and AI]] — we start with the problem, not the product",
  support:
    "Dolphin Software rents CRM (the operating base) and AI Care · Ops · Intelligence (growth) for spas, nail studios, salons, education, and clinics. A website is included or discounted with a combo. SaaS is a term license. Source handover is for outsource work.",
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
  teamBannerCaption: "The Dolphin Software founding team",
  teamBannerAlt:
    "Dolphin Software founding team seated together — founder with an arm over the teammates beside him",
  teamCta: "Talk to us",
  teamClosing:
    "Together with every teammate, Dolphin will keep delivering real value for businesses.",
  founderRole: "Founder / Solution Architect",
  founderName: "Nguyễn Chí Thành",
  founderBody:
    "With many years in software development, Thành understands what growing businesses need — and why the right push matters. He steers Dolphin to ship only solutions that truly fit, and that must help companies grow real revenue.",
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
      body: "With many years in software development, Thành understands what growing businesses need — and why the right push matters. He steers Dolphin to ship only solutions that truly fit, and that must help companies grow real revenue.",
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
      role: "Technical Leader",
      body: "Phạm Tấn Hoàng oversees and ships new Dolphin features. He helps customers stay in step with global technology trends — tighter operations and revenue growth.",
      image: "/about/team-hoang.png",
      tags: ["Technical Leader", "Product", "Features"],
    },
    {
      id: "nghia",
      name: "Hồ Quốc Nghĩa",
      role: "Business Development · Japan Market",
      body: "Hồ Quốc Nghĩa owns business development for the Japan market — sales & marketing, partnering with Japanese SMBs, proposing the right website/software path, and clear scoped quotes through close.",
      image: "/about/team-nghia.png",
      tags: ["Japan", "Sales", "Marketing", "BD", "Partnerships"],
    },
    {
      id: "hau",
      name: "Tô Văn Hậu",
      role: "System Admin — Agent SaaS 24/7",
      body: "Tô Văn Hậu monitors and watches over more than 5 servers and nearly 10 live agents — keeping operations as steady as possible for customers and preventing downtime. At Dolphin, any incident must be handled immediately.",
      image: "/about/team-hau.png",
      tags: ["DevOps", "SaaS", "Linux", "Monitoring", "24/7"],
    },
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Frequently asked questions about Dolphin Software",
  faqItems: [
    {
      q: "What kind of company is Dolphin Software?",
      a: "Dolphin Software rents CRM and AI software (SaaS) for service businesses. CRM is the operating base. Care, Ops, and Intelligence are the growth layer. A website is included or discounted when you deploy a CRM combo.",
    },
    {
      q: "Can non-technical businesses work with Dolphin Software?",
      a: "Yes. Most Dolphin Software clients are not engineers. Describe the business goal — Dolphin Software scopes in operating language, ships end-to-end, and hands over walkthroughs so your team can run it.",
    },
    {
      q: "Does Dolphin Software lock customers into a vendor after handover?",
      a: "CRM, Care, and Ops SaaS are a license for the prepaid term — platform source is not handed over. Custom outsource includes source and docs. A one-time website is handed over within the accepted scope.",
    },
    {
      q: "How does Dolphin Software pricing work?",
      a: "Send a short brief via the contact form, Get a quote, or Zalo. Dolphin Software replies with estimated scope and next steps — no fees outside the agreed scope.",
    },
    {
      q: "Is there support after handover?",
      a: "Website: 36 months of technical warranty. CRM and AI (SaaS): for the prepaid term. Custom outsource: 3 months after acceptance. New features outside scope are quoted separately.",
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
  teamBannerCaption: "Dolphin Softwareの創業チーム",
  teamBannerAlt:
    "Dolphin Softwareの創業チームが並んで座る様子 — ファウンダーが隣のメンバーの肩に腕を回している",
  teamCta: "話してみる",
  teamClosing:
    "メンバー一人ひとりとともに、Dolphinはこれからも企業に本当の価値を届け続けます。",
  founderRole: "Founder / Solution Architect",
  founderName: "Nguyễn Chí Thành",
  founderBody:
    "ソフトウェア開発で長年の経験を持つThànhは、成長企業のニーズと、事業を前へ進める重要性をよく理解しています。Dolphinを、本当に合う解決策だけを届け、売上の実質成長につながる方向へ導きます。",
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
      body: "ソフトウェア開発で長年の経験を持つThànhは、成長企業のニーズと、事業を前へ進める重要性をよく理解しています。Dolphinを、本当に合う解決策だけを届け、売上の実質成長につながる方向へ導きます。",
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
      role: "Technical Leader",
      body: "Phạm Tấn HoàngはDolphinの新機能の監督と実装を担います。顧客が世界の技術トレンドに追いつけるよう支え、運用をより滑らかにし、売上成長を後押しします。",
      image: "/about/team-hoang.png",
      tags: ["Technical Leader", "Product", "Features"],
    },
    {
      id: "nghia",
      name: "Hồ Quốc Nghĩa",
      role: "Business Development · Japan Market",
      body: "Hồ Quốc Nghĩaは日本市場の事業開発を担当 — セールス＆マーケティング、日本のSMB／パートナーとの接点、適切なWeb/ソフトウェア提案、明確な見積りで成約まで伴走します。",
      image: "/about/team-nghia.png",
      tags: ["Japan", "Sales", "Marketing", "BD", "Partnerships"],
    },
    {
      id: "hau",
      name: "Tô Văn Hậu",
      role: "System Admin — Agent SaaS 24/7",
      body: "Tô Văn Hậuは5台以上のサーバーと稼働中の約10のエージェントを監視・見守ります。顧客向けに最も安定した運用を保ち、ダウンタイムを防ぎます。Dolphinでは、どんな障害も即座に対応する必要があります。",
      image: "/about/team-hau.png",
      tags: ["DevOps", "SaaS", "Linux", "Monitoring", "24/7"],
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

export const aboutCopy: LocaleMap<AboutCopy> = { vi, en, ja };

export function getAboutCopy(locale: Locale): AboutCopy {
  return aboutCopy[locale];
}
