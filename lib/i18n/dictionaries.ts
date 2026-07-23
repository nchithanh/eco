import type { Dictionary, Locale } from "./types";
import { careersByLocale, careersNavLabel } from "./careers-copy";

const vi: Dictionary = {
  meta: {
    title: "KU THANH — Studio web & app",
    description:
      "KU THANH là studio làm website & mobile app — từ landing đơn giản đến hệ thống phức tạp.",
  },
  nav: {
    ariaMain: "Chính",
    ariaMobile: "Điều hướng di động",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    services: "Dịch vụ",
    process: "Quy trình",
    stack: "Công nghệ",
    careers: careersNavLabel.vi,
    contact: "Liên hệ",
  },
  banner: {
    aria: "Thông báo",
    text: "KU THANH đang tuyển freelancer — Sales ưu tiên gấp, hoa hồng 50% deal. Ứng tuyển ngay!",
    cta: "Ứng tuyển",
  },
  hero: {
    eyebrow: "Studio",
    headline: "Xây web & app, tự động hóa quy trình, tích hợp AI",
    support:
      "Chúng tôi từng đứng phía làm sản phẩm và outsource cho startup, nên biết áp lực tiến độ, ngân sách và kỳ vọng của khách. KU THANH mang đội ngũ chuyên nghiệp, giao tiếp thẳng và báo giá hợp lý — không “phóng” phạm vi.",
    ctaPrimary: "Nhận báo giá",
    ctaSecondary: "Xem dịch vụ",
    visual: {
      web: "Web & App",
      automation: "Tự động hóa",
      ai: "Tích hợp AI",
    },
  },
  capabilities: {
    eyebrow: "Dịch vụ",
    title: "Giải pháp tổng thể",
    support:
      "Không chỉ nhận code — chúng tôi tư duy theo góc nhìn founder/product: ưu tiên đúng việc, cắt thừa, giao hàng đúng milestone với mức đầu tư hợp lý.",
    filterAll: "Tất cả",
    learnMore: "Tìm hiểu thêm",
    items: [
      {
        id: "web",
        category: "Website",
        title: "Phát triển website theo yêu cầu",
        body: "Landing, corporate, CMS và hệ thống nội dung — từ trang giới thiệu đến sản phẩm số hoàn chỉnh.",
        tags: ["Next.js", "React", "CMS"],
      },
      {
        id: "mobile",
        category: "Mobile",
        title: "Phát triển mobile app",
        body: "iOS / Android hoặc cross-platform theo nhu cầu sản phẩm, tối ưu trải nghiệm và tốc độ ra mắt.",
        tags: ["Flutter", "React Native", "iOS/Android"],
      },
      {
        id: "backend",
        category: "Backend",
        title: "Backend & tích hợp hệ thống",
        body: "API, auth, thanh toán và kết nối dịch vụ bên thứ ba — nền tảng vững cho web/app scale.",
        tags: ["Node.js", "API", "Auth"],
      },
      {
        id: "design",
        category: "UI/UX",
        title: "UI/UX & bàn giao",
        body: "Thiết kế giao diện, design system, tài liệu và đào tạo để đội ngũ của bạn vận hành độc lập.",
        tags: ["UI/UX", "Design system", "Handover"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "Tích hợp dịch vụ bên thứ ba",
        body: "Gắn MoMo, ZaloPay, VNPay, Zalo OA và các API khác vào hệ thống hiện có — rõ luồng, an toàn, dễ vận hành.",
        tags: ["MoMo", "Zalo", "VNPay", "Webhook"],
      },
      {
        id: "agents",
        category: "Agents",
        title: "Hệ sinh thái agent cho business",
        body: "Xây context theo nghiệp vụ, tích hợp MCP và tool nội bộ — giúp vibe coding / AI workflow đúng domain hơn.",
        tags: ["MCP", "Agents", "Context", "AI"],
      },
    ],
  },
  process: {
    eyebrow: "Phương pháp",
    title: "Quy trình bàn giao 5 bước",
    support:
      "Minh bạch từ khảo sát đầu tiên đến đồng hành sau khi ra mắt — gắn kỹ thuật với mục tiêu kinh doanh của bạn.",
    steps: [
      {
        name: "Lắng nghe & Khảo sát",
        detail: "Hiểu rõ bài toán, mục tiêu và ràng buộc trước khi bắt đầu.",
      },
      {
        name: "Lập kế hoạch & Báo giá",
        detail: "Đề xuất phạm vi, kiến trúc sơ bộ, milestone và báo giá rõ ràng.",
      },
      {
        name: "Phát triển theo sprint",
        detail: "Xây dựng theo vòng lặp ngắn, demo định kỳ, cập nhật liên tục.",
      },
      {
        name: "Kiểm thử & UAT",
        detail: "Kiểm soát chất lượng, nghiệm thu với bạn trước khi lên production.",
      },
      {
        name: "Bàn giao & Đồng hành",
        detail: "Deploy, tài liệu, đào tạo — và hỗ trợ khi hệ thống đi vào vận hành.",
      },
    ],
  },
  stack: {
    eyebrow: "Công nghệ",
    titleLead: "Năng lực kỹ thuật với",
    titleHighlight: "công nghệ hiện đại",
    support:
      "Chọn đúng stack cho từng bài toán — frontend, mobile, backend đến hạ tầng vận hành. Bộ công cụ đã được kiểm chứng qua dự án thực tế.",
    logos: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Flutter",
      "React Native",
      "PostgreSQL",
      "Docker",
      "NestJS",
      "Express",
      "Strapi",
    ],
  },
  why: {
    eyebrow: "Vì sao chọn KU THANH",
    title: "Đồng hành dài hạn, không chỉ bàn giao code",
    support:
      "Kết hợp năng lực kỹ thuật với cam kết rõ ràng về tiến độ, chất lượng và hỗ trợ sau khi ra mắt.",
    reasons: [
      {
        title: "Kinh nghiệm thực chiến",
        body: "Đội ngũ 7+ năm xây sản phẩm web & app cho doanh nghiệp và startup.",
      },
      {
        title: "Giao hàng end-to-end",
        body: "Từ discovery đến deploy — một đội chịu trách nhiệm xuyên suốt.",
      },
      {
        title: "Quy trình minh bạch",
        body: "Milestone, demo định kỳ và báo giá rõ — ít bất ngờ giữa chừng.",
      },
      {
        title: "Đồng hành sau bàn giao",
        body: "Hỗ trợ vận hành, tối ưu và mở rộng khi sản phẩm đi vào thực tế.",
      },
    ],
  },
  cofounder: {
    eyebrow: "Đội ngũ",
    role: "Co-founder",
    name: "Thanh NC",
    description:
      "Developer 7+ năm kinh nghiệm product & outsource, từng đồng hành nhiều startup — hiểu rõ áp lực tiến độ, ngân sách và kỳ vọng của khách. KU THANH với đội ngũ chuyên nghiệp, giao tiếp thẳng và mức giá phù hợp để bạn đi từ ý tưởng đến sản phẩm thật.",
  },
  secondary: {
    eyebrow: "Mở rộng",
    title: "Thêm từ KU THANH",
    support: "Phụ trợ khi bạn đã tin đội ngũ — không phải dịch vụ chính.",
    architectureTitle: "Kiến trúc & hỗ trợ hệ thống",
    architectureBody:
      "Audit, giải pháp khắc phục, hỗ trợ remote khi hệ thống đang gặp vấn đề.",
    stockTitle: "Cộng đồng đầu tư CK",
    stockBody:
      "Hỗ trợ gắn ID; miễn phí theo điều kiện. Không phải tư vấn đầu tư có giấy phép và không cam kết lợi nhuận.",
    learnMore: "Tìm hiểu thêm",
  },
  contact: {
    eyebrow: "Liên hệ",
    title: "Sẵn sàng khởi động dự án?",
    support:
      "Chia sẻ bài toán của bạn — KU THANH sẽ đề xuất hướng triển khai và báo giá phù hợp.",
    name: "Tên",
    contact: "Email hoặc Zalo",
    message: "Mô tả ngắn dự án",
    submit: "Gửi yêu cầu",
    sent: "Đã mở ứng dụng email của bạn (hoặc sao chép nội dung nếu trình duyệt chặn mailto).",
    mailSubject: "KU THANH — yêu cầu từ",
    mailBodyName: "Tên",
    mailBodyContact: "Liên hệ",
    errors: {
      name: "Vui lòng nhập tên",
      contact: "Vui lòng nhập email hoặc Zalo",
      message: "Vui lòng mô tả ngắn dự án",
    },
  },
  careers: careersByLocale.vi,
  footer: {
    disclaimer:
      "Nội dung liên quan chứng khoán chỉ mang tính chia sẻ cộng đồng — không phải tư vấn đầu tư có giấy phép và không cam kết lợi nhuận.",
  },
  loader: {
    aria: "Đang khởi động hệ thống agent",
    status: "Đang khởi động agent…",
    agents: {
      scout: "Scout",
      plan: "Plan",
      build: "Build",
      ship: "Ship",
    },
  },
};

const en: Dictionary = {
  meta: {
    title: "KU THANH — Web & app studio",
    description:
      "KU THANH is a studio building websites & mobile apps — from simple landings to complex systems.",
  },
  nav: {
    ariaMain: "Main",
    ariaMobile: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    services: "Services",
    process: "Process",
    stack: "Tech",
    careers: careersNavLabel.en,
    contact: "Contact",
  },
  banner: {
    aria: "Announcement",
    text: "KU THANH is hiring freelancers — Sales is urgent priority, 50% deal commission. Apply today!",
    cta: "Apply now",
  },
  hero: {
    eyebrow: "Studio",
    headline: "Build web & apps, automate workflows, integrate AI",
    support:
      "We've stood on both the product and startup-outsourcing sides, so we know the pressure of timelines, budgets, and expectations. KU THANH brings a professional team, straight talk, and fair quotes — without inflating scope.",
    ctaPrimary: "Get a quote",
    ctaSecondary: "View services",
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "AI Integrate",
    },
  },
  capabilities: {
    eyebrow: "Services",
    title: "Full-stack solutions",
    support:
      "We don't just take tickets — we think like founders/product: prioritize what matters, cut waste, and ship on milestones at a sensible investment.",
    filterAll: "All",
    learnMore: "Learn more",
    items: [
      {
        id: "web",
        category: "Website",
        title: "Custom website development",
        body: "Landings, corporate sites, CMS and content systems — from intro pages to complete digital products.",
        tags: ["Next.js", "React", "CMS"],
      },
      {
        id: "mobile",
        category: "Mobile",
        title: "Mobile app development",
        body: "iOS / Android or cross-platform for your product needs — balancing UX and time-to-market.",
        tags: ["Flutter", "React Native", "iOS/Android"],
      },
      {
        id: "backend",
        category: "Backend",
        title: "Backend & system integration",
        body: "APIs, auth, payments and third-party connections — a solid foundation for web/app scale.",
        tags: ["Node.js", "API", "Auth"],
      },
      {
        id: "design",
        category: "UI/UX",
        title: "UI/UX & handover",
        body: "Interface design, design systems, docs and training so your team can run independently.",
        tags: ["UI/UX", "Design system", "Handover"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "Third-party service integration",
        body: "Connect MoMo, ZaloPay, VNPay, Zalo OA, and other APIs into your existing system — secure flows, operable runbooks.",
        tags: ["MoMo", "Zalo", "VNPay", "Webhook"],
      },
      {
        id: "agents",
        category: "Agents",
        title: "Business agent ecosystem",
        body: "Business-aware context, MCP connectors, and internal tools — so vibe coding and AI workflows stay on-domain.",
        tags: ["MCP", "Agents", "Context", "AI"],
      },
    ],
  },
  process: {
    eyebrow: "Method",
    title: "A 5-step delivery process",
    support:
      "Transparent from the first discovery call to post-launch support — tying engineering to your business goals.",
    steps: [
      {
        name: "Listen & discover",
        detail: "Understand the problem, goals, and constraints before we start.",
      },
      {
        name: "Plan & quote",
        detail: "Clear scope, initial architecture, milestones, and pricing.",
      },
      {
        name: "Sprint development",
        detail: "Short iterations, regular demos, continuous updates.",
      },
      {
        name: "Testing & UAT",
        detail: "Quality checks and acceptance with you before production.",
      },
      {
        name: "Handover & partnership",
        detail: "Deploy, docs, training — and support once you're live.",
      },
    ],
  },
  stack: {
    eyebrow: "Technology",
    titleLead: "Engineering strength with",
    titleHighlight: "modern technology",
    support:
      "The right stack for each problem — frontend, mobile, backend, and ops. Tooling proven on real projects.",
    logos: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Flutter",
      "React Native",
      "PostgreSQL",
      "Docker",
      "NestJS",
      "Express",
      "Strapi",
    ],
  },
  why: {
    eyebrow: "Why KU THANH",
    title: "Long-term partnership, not just code delivery",
    support:
      "Technical depth plus clear commitments on timeline, quality, and post-launch support.",
    reasons: [
      {
        title: "Battle-tested experience",
        body: "A team with 7+ years building web & app products for businesses and startups.",
      },
      {
        title: "End-to-end delivery",
        body: "From discovery to deploy — one team accountable throughout.",
      },
      {
        title: "Transparent process",
        body: "Milestones, regular demos, and clear quotes — fewer mid-project surprises.",
      },
      {
        title: "Support after handover",
        body: "Ops help, optimization, and growth when the product hits reality.",
      },
    ],
  },
  cofounder: {
    eyebrow: "Team",
    role: "Co-founder",
    name: "Thanh NC",
    description:
      "Developer with 7+ years in product & outsourcing, partnering with many startups — knows the pressure of timelines, budgets, and client expectations. KU THANH with a professional team, straight communication, and fair pricing to take you from idea to a real product.",
  },
  secondary: {
    eyebrow: "More",
    title: "Also from KU THANH",
    support: "Extras once you trust the team — not the core offering.",
    architectureTitle: "Architecture & system support",
    architectureBody:
      "Audits, remediation plans, remote support when systems are under pressure.",
    stockTitle: "Stock investing community",
    stockBody:
      "ID linking support; free under conditions. Not licensed investment advice and no profit guarantees.",
    learnMore: "Learn more",
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready to start a project?",
    support:
      "Share your problem — KU THANH will propose an approach and a fitting quote.",
    name: "Name",
    contact: "Email or Zalo",
    message: "Short project description",
    submit: "Send request",
    sent: "Opened your email app (or copy the content if the browser blocked mailto).",
    mailSubject: "KU THANH — request from",
    mailBodyName: "Name",
    mailBodyContact: "Contact",
    errors: {
      name: "Please enter your name",
      contact: "Please enter email or Zalo",
      message: "Please describe your project briefly",
    },
  },
  careers: careersByLocale.en,
  footer: {
    disclaimer:
      "Stock-related content is community sharing only — not licensed investment advice and no profit guarantees.",
  },
  loader: {
    aria: "Booting agent system",
    status: "Booting agents…",
    agents: {
      scout: "Scout",
      plan: "Plan",
      build: "Build",
      ship: "Ship",
    },
  },
};

const de: Dictionary = {
  meta: {
    title: "KU THANH — Web- & App-Studio",
    description:
      "KU THANH ist ein Studio für Websites & Mobile-Apps — von einfachen Landings bis zu komplexen Systemen.",
  },
  nav: {
    ariaMain: "Hauptnavigation",
    ariaMobile: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    services: "Leistungen",
    process: "Ablauf",
    stack: "Technik",
    careers: careersNavLabel.de,
    contact: "Kontakt",
  },
  banner: {
    aria: "Ankündigung",
    text: "KU THANH sucht Freelancer — Sales mit Priorität, 50% Deal-Provision. Jetzt bewerben!",
    cta: "Jetzt bewerben",
  },
  hero: {
    eyebrow: "Studio",
    headline: "Web & Apps bauen, Prozesse automatisieren, AI integrieren",
    support:
      "Wir kennen beide Seiten — Produktentwicklung und Outsourcing für Startups — und damit den Druck von Terminen, Budget und Erwartungen. KU THANH bringt ein professionelles Team, klare Kommunikation und faire Angebote — ohne aufgeblähten Scope.",
    ctaPrimary: "Angebot anfordern",
    ctaSecondary: "Leistungen ansehen",
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "AI-Integration",
    },
  },
  capabilities: {
    eyebrow: "Leistungen",
    title: "Ganzheitliche Lösungen",
    support:
      "Nicht nur Code übernehmen — wir denken wie Founder/Product: Prioritäten setzen, Überflüssiges streichen und Meilensteine mit sinnvoller Investition liefern.",
    filterAll: "Alle",
    learnMore: "Mehr erfahren",
    items: [
      {
        id: "web",
        category: "Website",
        title: "Individuelle Website-Entwicklung",
        body: "Landings, Corporate Sites, CMS und Content-Systeme — von der Infoseite bis zum fertigen Digitalprodukt.",
        tags: ["Next.js", "React", "CMS"],
      },
      {
        id: "mobile",
        category: "Mobile",
        title: "Mobile-App-Entwicklung",
        body: "iOS / Android oder Cross-Platform — UX und Time-to-Market im Gleichgewicht.",
        tags: ["Flutter", "React Native", "iOS/Android"],
      },
      {
        id: "backend",
        category: "Backend",
        title: "Backend & Systemintegration",
        body: "APIs, Auth, Zahlungen und Drittanbieter-Anbindungen — stabile Basis für skalierbare Web/Apps.",
        tags: ["Node.js", "API", "Auth"],
      },
      {
        id: "design",
        category: "UI/UX",
        title: "UI/UX & Übergabe",
        body: "Interface-Design, Design System, Dokumentation und Training — damit Ihr Team selbstständig weiterarbeiten kann.",
        tags: ["UI/UX", "Design system", "Handover"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "Drittanbieter-Integration",
        body: "MoMo, ZaloPay, VNPay, Zalo OA und weitere APIs sicher in Ihr System einbinden — klare Flows, betreibbare Runbooks.",
        tags: ["MoMo", "Zalo", "VNPay", "Webhook"],
      },
      {
        id: "agents",
        category: "Agents",
        title: "Agent-Ökosystem für Business",
        body: "Business-Context, MCP und interne Tools — damit vibe coding und AI-Workflows domain-treu bleiben.",
        tags: ["MCP", "Agents", "Context", "AI"],
      },
    ],
  },
  process: {
    eyebrow: "Methode",
    title: "5-Schritte-Übergabeprozess",
    support:
      "Transparent vom ersten Gespräch bis zur Begleitung nach dem Launch — Technik an Ihre Geschäftsziele gekoppelt.",
    steps: [
      {
        name: "Zuhören & Analyse",
        detail: "Problem, Ziele und Rahmenbedingungen verstehen, bevor wir starten.",
      },
      {
        name: "Planung & Angebot",
        detail: "Klarer Scope, erste Architektur, Meilensteine und transparentes Angebot.",
      },
      {
        name: "Sprint-Entwicklung",
        detail: "Kurze Iterationen, regelmäßige Demos, kontinuierliche Updates.",
      },
      {
        name: "Tests & UAT",
        detail: "Qualitätssicherung und Abnahme mit Ihnen vor dem Go-live.",
      },
      {
        name: "Übergabe & Begleitung",
        detail: "Deploy, Doku, Schulung — und Support im laufenden Betrieb.",
      },
    ],
  },
  stack: {
    eyebrow: "Technologie",
    titleLead: "Technische Stärke mit",
    titleHighlight: "moderner Technologie",
    support:
      "Der passende Stack für jedes Problem — Frontend, Mobile, Backend und Betrieb. In realen Projekten erprobt.",
    logos: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Flutter",
      "React Native",
      "PostgreSQL",
      "Docker",
      "NestJS",
      "Express",
      "Strapi",
    ],
  },
  why: {
    eyebrow: "Warum KU THANH",
    title: "Langfristige Partnerschaft, nicht nur Code-Übergabe",
    support:
      "Technische Kompetenz plus klare Zusagen zu Zeitplan, Qualität und Support nach dem Launch.",
    reasons: [
      {
        title: "Praxisnahe Erfahrung",
        body: "Ein Team mit über 7 Jahren Erfahrung beim Bau von Web- & App-Produkten für Unternehmen und Startups.",
      },
      {
        title: "End-to-End-Lieferung",
        body: "Von Discovery bis Deploy — ein Team trägt die Verantwortung durchgehend.",
      },
      {
        title: "Transparenter Prozess",
        body: "Meilensteine, regelmäßige Demos und klare Angebote — weniger Überraschungen unterwegs.",
      },
      {
        title: "Begleitung nach der Übergabe",
        body: "Betrieb, Optimierung und Erweiterung, wenn das Produkt im Alltag läuft.",
      },
    ],
  },
  cofounder: {
    eyebrow: "Team",
    role: "Co-founder",
    name: "Thanh NC",
    description:
      "Developer mit über 7 Jahren Erfahrung in Produkt & Outsourcing, Begleiter vieler Startups — kennt den Druck von Terminen, Budget und Kundenerwartungen. KU THANH mit professionellem Team, klarer Kommunikation und fairen Preisen — von der Idee zum echten Produkt.",
  },
  secondary: {
    eyebrow: "Erweiterung",
    title: "Weitere Angebote von KU THANH",
    support: "Zusatzleistungen, wenn Sie dem Team vertrauen — nicht das Kerngeschäft.",
    architectureTitle: "Architektur & Systemsupport",
    architectureBody:
      "Audits, Lösungswege und Remote-Support, wenn Systeme Probleme machen.",
    stockTitle: "Aktien-Investment-Community",
    stockBody:
      "Unterstützung bei der ID-Verknüpfung; unter Bedingungen kostenlos. Keine lizenzierte Anlageberatung und keine Gewinngarantie.",
    learnMore: "Mehr erfahren",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Bereit, ein Projekt zu starten?",
    support:
      "Schildern Sie Ihr Vorhaben — KU THANH schlägt Vorgehen und passendes Angebot vor.",
    name: "Name",
    contact: "E-Mail oder Zalo",
    message: "Kurze Projektbeschreibung",
    submit: "Anfrage senden",
    sent: "E-Mail-App geöffnet (oder Inhalt kopieren, falls der Browser mailto blockiert).",
    mailSubject: "KU THANH — Anfrage von",
    mailBodyName: "Name",
    mailBodyContact: "Kontakt",
    errors: {
      name: "Bitte Namen eingeben",
      contact: "Bitte E-Mail oder Zalo eingeben",
      message: "Bitte Projekt kurz beschreiben",
    },
  },
  careers: careersByLocale.de,
  footer: {
    disclaimer:
      "Inhalte zu Aktien dienen nur dem Community-Austausch — keine lizenzierte Anlageberatung und keine Gewinngarantie.",
  },
  loader: {
    aria: "Agent-System wird gestartet",
    status: "Agents starten…",
    agents: {
      scout: "Scout",
      plan: "Plan",
      build: "Build",
      ship: "Ship",
    },
  },
};

const ja: Dictionary = {
  meta: {
    title: "KU THANH — Web & Appスタジオ",
    description:
      "KU THANHは、シンプルなランディングから複雑なシステムまで、Webサイトとモバイルアプリを制作するスタジオです。",
  },
  nav: {
    ariaMain: "メイン",
    ariaMobile: "モバイルナビ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    services: "サービス",
    process: "プロセス",
    stack: "技術",
    careers: careersNavLabel.ja,
    contact: "お問い合わせ",
  },
  banner: {
    aria: "お知らせ",
    text: "KU THANHはフリーランス募集中 — Salesは急募、案件手数料50%。今すぐ応募！",
    cta: "応募する",
  },
  hero: {
    eyebrow: "Studio",
    headline: "Web & App構築、業務自動化、AI連携",
    support:
      "私たちはプロダクト開発とスタートアップ向けアウトソースの現場に立ってきたため、納期・予算・期待値のプレッシャーを理解しています。KU THANHはプロのチーム、率直なコミュニケーション、妥当な見積もりで進めます — スコープを水増ししません。",
    ctaPrimary: "見積もりを依頼",
    ctaSecondary: "サービスを見る",
    visual: {
      web: "Web & App",
      automation: "業務自動化",
      ai: "AI連携",
    },
  },
  capabilities: {
    eyebrow: "サービス",
    title: "トータルソリューション",
    support:
      "コード受託だけではありません。創業者／プロダクト視点で本当に必要なことに優先順位をつけ、無駄を削り、妥当な投資額でマイルストーン通りに届けます。",
    filterAll: "すべて",
    learnMore: "詳しく見る",
    items: [
      {
        id: "web",
        category: "Website",
        title: "オーダーメイドWebサイト開発",
        body: "ランディング、コーポレート、CMS、コンテンツ基盤まで — 紹介ページから本格的なデジタルプロダクトへ。",
        tags: ["Next.js", "React", "CMS"],
      },
      {
        id: "mobile",
        category: "Mobile",
        title: "モバイルアプリ開発",
        body: "iOS / Android、またはクロスプラットフォーム。体験とリリース速度を両立します。",
        tags: ["Flutter", "React Native", "iOS/Android"],
      },
      {
        id: "backend",
        category: "Backend",
        title: "バックエンド & システム連携",
        body: "API、認証、決済、外部サービス連携 — スケール可能なWeb/Appの基盤を構築します。",
        tags: ["Node.js", "API", "Auth"],
      },
      {
        id: "design",
        category: "UI/UX",
        title: "UI/UX & 引き渡し",
        body: "UI設計、デザインシステム、ドキュメント、トレーニングで、自走できる体制へ。",
        tags: ["UI/UX", "Design system", "Handover"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "外部サービス連携",
        body: "MoMo / ZaloPay / VNPay、Zalo OA などを既存システムへ安全に接続 — 明確なフローと運用しやすい実装。",
        tags: ["MoMo", "Zalo", "VNPay", "Webhook"],
      },
      {
        id: "agents",
        category: "Agents",
        title: "ビジネス向けエージェント生態系",
        body: "業務コンテキスト、MCP、社内ツールを整備 — vibe coding / AIワークフローをドメインに沿って加速。",
        tags: ["MCP", "Agents", "Context", "AI"],
      },
    ],
  },
  process: {
    eyebrow: "進め方",
    title: "引き渡しまでの5ステップ",
    support:
      "初回ヒアリングからリリース後の伴走まで透明に進め、技術をビジネス目標に結びつけます。",
    steps: [
      {
        name: "ヒアリング & 調査",
        detail: "課題・目標・制約を理解してから着手します。",
      },
      {
        name: "計画 & 見積もり",
        detail: "範囲、初期アーキテクチャ、マイルストーン、見積もりを明確に提示します。",
      },
      {
        name: "スプリント開発",
        detail: "短い反復で開発し、定期デモで進捗を共有します。",
      },
      {
        name: "テスト & UAT",
        detail: "品質を確認し、本番前に一緒に受け入れを行います。",
      },
      {
        name: "引き渡し & 伴走",
        detail: "デプロイ、ドキュメント、研修 — 運用開始後もサポートします。",
      },
    ],
  },
  stack: {
    eyebrow: "技術",
    titleLead: "確かなエンジニアリングを支える",
    titleHighlight: "モダンな技術",
    support:
      "課題に合わせて最適なスタックを選定 — フロント、モバイル、バックエンド、インフラまで。実務で検証されたツール群です。",
    logos: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Flutter",
      "React Native",
      "PostgreSQL",
      "Docker",
      "NestJS",
      "Express",
      "Strapi",
    ],
  },
  why: {
    eyebrow: "KU THANHを選ぶ理由",
    title: "コード納品だけで終わらない、長期伴走",
    support:
      "技術力に加え、スケジュール・品質・リリース後サポートへの明確なコミットメントを提供します。",
    reasons: [
      {
        title: "実務経験",
        body: "企業・スタートアップ向けWeb/Appを7年以上手がけたチームです。",
      },
      {
        title: "エンドツーエンド納品",
        body: "ディスカバリーからデプロイまで、一貫して責任を持つ体制です。",
      },
      {
        title: "透明なプロセス",
        body: "マイルストーン、定期デモ、明確な見積もりで途中のサプライズを減らします。",
      },
      {
        title: "引き渡し後の伴走",
        body: "運用・最適化・拡張まで、本番後も継続支援します。",
      },
    ],
  },
  cofounder: {
    eyebrow: "チーム",
    role: "Co-founder",
    name: "Thanh NC",
    description:
      "プロダクト開発とアウトソースで7年以上。多くのスタートアップに伴走してきたため、納期・予算・期待値のプレッシャーを理解しています。プロのチーム、率直なコミュニケーション、妥当な価格で、アイデアから本番プロダクトまで届けます。",
  },
  secondary: {
    eyebrow: "拡張",
    title: "KU THANHの追加サービス",
    support: "チームを信頼いただいた後の補助サービス — コアではありません。",
    architectureTitle: "アーキテクチャ & システム支援",
    architectureBody:
      "監査、改善策、リモート支援 — システムに課題があるときのサポート。",
    stockTitle: "証券投資コミュニティ",
    stockBody:
      "ID紐付け支援。条件付きで無料。金融商品取引法に基づく投資助言ではなく、利益を保証するものでもありません。",
    learnMore: "詳しく見る",
  },
  contact: {
    eyebrow: "お問い合わせ",
    title: "プロジェクトを始めませんか？",
    support:
      "課題を共有ください。KU THANHが実装方針と見積もりをご提案します。",
    name: "お名前",
    contact: "メールまたはZalo",
    message: "プロジェクトの概要",
    submit: "送信する",
    sent: "メールアプリを開きました（ブラウザがmailtoをブロックした場合は内容をコピーしてください）。",
    mailSubject: "KU THANH — お問い合わせ",
    mailBodyName: "お名前",
    mailBodyContact: "連絡先",
    errors: {
      name: "お名前を入力してください",
      contact: "メールまたはZaloを入力してください",
      message: "プロジェクトの概要を入力してください",
    },
  },
  careers: careersByLocale.ja,
  footer: {
    disclaimer:
      "証券関連の内容はコミュニティ共有であり、認可を受けた投資助言ではなく、利益を保証するものでもありません。",
  },
  loader: {
    aria: "エージェントシステムを起動中",
    status: "エージェント起動中…",
    agents: {
      scout: "Scout",
      plan: "Plan",
      build: "Build",
      ship: "Ship",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { vi, en, ja, de };

export function getDictionary(locale: Locale): Dictionary {
  const dict = dictionaries[locale] ?? dictionaries.vi;
  return {
    ...dict,
    banner: dict.banner ?? dictionaries.vi.banner,
  };
}
