import type { Dictionary, Locale } from "./types";

type CareersCopy = Dictionary["careers"];

const vi: CareersCopy = {
  meta: {
    title: "Dolphin Kick — Tuyển dụng freelancer",
    description:
      "Cộng tác freelance với Dolphin Kick — web, mobile, backend, UI/UX. ~1000 USD/tháng tương đương, linh hoạt theo giờ.",
  },
  hero: {
    eyebrow: "Careers",
    headline: "Freelance cùng Dolphin Kick",
    support:
      "Cần đồng đội linh hoạt theo dự án — không phải full-time. Mức ~1000 USD/tháng tương đương full capacity, thanh toán theo giờ thỏa thuận.",
  },
  roles: {
    eyebrow: "Open roles",
    title: "Vị trí đang mở",
    support:
      "Năm hướng khớp dịch vụ và go-to-market của studio. Remote-friendly.",
  },
  engagement: "Freelance",
  comp: "~$1,000/tháng tương đương · linh hoạt theo giờ",
  applyCta: "Ứng tuyển",
  hiring: {
    closed: "Đã đóng",
    expired: "Hết hạn ứng tuyển",
    countdown: "Còn lại",
    days: "ngày",
    hours: "giờ",
    minutes: "phút",
    seconds: "giây",
  },
  jobs: [
    {
      id: "sales",
      title: "Sales / Business Development",
      summary:
        "Tìm và chốt deal web/app cho Dolphin Kick — freelance, hoa hồng theo deal.",
      bullets: [
        "Tự săn lead / network khách hàng SME & startup",
        "Hiểu dịch vụ web, app, backend đủ để tư vấn sơ bộ",
        "Hoa hồng 50% trên mỗi deal đóng thành công",
        "Không lương cứng — thu nhập theo kết quả",
      ],
      tags: ["Sales", "BD", "Commission"],
      comp: "Hoa hồng 50% deal · không lương cứng",
      priority: "Ưu tiên · Gấp",
    },
    {
      id: "frontend",
      title: "Frontend Developer (Next.js / React)",
      summary: "Landing, corporate site và sản phẩm web với Next.js & React.",
      bullets: [
        "Thành thạo React / Next.js / TypeScript",
        "Biết Tailwind và UI component patterns",
        "Giao tiếp rõ ràng, demo theo sprint",
        "Có portfolio web thực tế",
      ],
      tags: ["Next.js", "React", "TypeScript"],
    },
    {
      id: "mobile",
      title: "Mobile Developer (Flutter / React Native)",
      summary: "App iOS/Android hoặc cross-platform theo nhu cầu sản phẩm.",
      bullets: [
        "Flutter và/hoặc React Native",
        "Hiểu lifecycle, navigation, API integration",
        "Ưu tiên UX và ổn định release",
        "Có app đã ship hoặc demo rõ",
      ],
      tags: ["Flutter", "React Native", "Mobile"],
    },
    {
      id: "backend",
      title: "Backend Developer (Node.js / API)",
      summary: "API, auth, thanh toán và tích hợp dịch vụ bên thứ ba.",
      bullets: [
        "Node.js (NestJS / Express) và REST hoặc tương đương",
        "Auth, validation, error handling vững",
        "PostgreSQL hoặc DB tương đương là lợi thế",
        "Viết tài liệu API ngắn gọn",
      ],
      tags: ["Node.js", "API", "PostgreSQL"],
    },
    {
      id: "design",
      title: "UI/UX Designer",
      summary: "Thiết kế giao diện, design system và bàn giao cho engineering.",
      bullets: [
        "Figma thành thạo; biết design system",
        "Tư duy product / UX rõ ràng",
        "Handover sạch cho dev",
        "Portfolio UI web hoặc app",
      ],
      tags: ["UI/UX", "Figma", "Design system"],
    },
  ],
  apply: {
    eyebrow: "Apply",
    title: "Gửi hồ sơ freelance",
    support: "Điền form — Dolphin Kick sẽ mở email để bạn gửi kèm portfolio.",
    name: "Tên",
    contact: "Email hoặc Zalo",
    portfolio: "Link portfolio / GitHub",
    role: "Vị trí",
    message: "Giới thiệu ngắn + availability",
    submit: "Gửi ứng tuyển",
    sent: "Đã mở ứng dụng email của bạn (hoặc sao chép nội dung nếu trình duyệt chặn mailto).",
    mailSubject: "Dolphin Kick Careers —",
    mailBodyName: "Tên",
    mailBodyContact: "Liên hệ",
    mailBodyPortfolio: "Portfolio",
    mailBodyRole: "Vị trí",
    errors: {
      name: "Vui lòng nhập tên",
      contact: "Vui lòng nhập email hoặc Zalo",
      portfolio: "Vui lòng nhập link portfolio",
      role: "Vui lòng chọn vị trí",
      message: "Vui lòng giới thiệu ngắn",
    },
  },
};

const en: CareersCopy = {
  meta: {
    title: "Dolphin Kick — Freelance careers",
    description:
      "Freelance with Dolphin Kick — web, mobile, backend, UI/UX. ~USD 1,000/mo equivalent, hourly flexible.",
  },
  hero: {
    eyebrow: "Careers",
    headline: "Freelance with Dolphin Kick",
    support:
      "We need flexible teammates per project — not full-time. About USD 1,000/mo full-capacity equivalent, paid hourly by agreement.",
  },
  roles: {
    eyebrow: "Open roles",
    title: "Open positions",
    support:
      "Five tracks matching our studio services and go-to-market. Remote-friendly.",
  },
  engagement: "Freelance",
  comp: "~$1,000/mo equivalent · hourly flexible",
  applyCta: "Apply",
  hiring: {
    closed: "Closed",
    expired: "Application period ended",
    countdown: "Time left",
    days: "d",
    hours: "h",
    minutes: "m",
    seconds: "s",
  },
  jobs: [
    {
      id: "sales",
      title: "Sales / Business Development",
      summary:
        "Source and close web/app deals for Dolphin Kick — freelance, commission per deal.",
      bullets: [
        "Hunt leads / network with SME & startup clients",
        "Enough product literacy to pitch web, app, backend",
        "50% commission on every closed deal",
        "No base salary — earnings are performance-based",
      ],
      tags: ["Sales", "BD", "Commission"],
      comp: "50% deal commission · no base salary",
      priority: "Priority · Urgent",
    },
    {
      id: "frontend",
      title: "Frontend Developer (Next.js / React)",
      summary: "Landings, corporate sites, and web products with Next.js & React.",
      bullets: [
        "Strong React / Next.js / TypeScript",
        "Comfortable with Tailwind and UI component patterns",
        "Clear communication and sprint demos",
        "Real web portfolio",
      ],
      tags: ["Next.js", "React", "TypeScript"],
    },
    {
      id: "mobile",
      title: "Mobile Developer (Flutter / React Native)",
      summary: "iOS/Android or cross-platform apps for product needs.",
      bullets: [
        "Flutter and/or React Native",
        "Solid lifecycle, navigation, API integration",
        "Prioritize UX and stable releases",
        "Shipped app or clear demo",
      ],
      tags: ["Flutter", "React Native", "Mobile"],
    },
    {
      id: "backend",
      title: "Backend Developer (Node.js / API)",
      summary: "APIs, auth, payments, and third-party integrations.",
      bullets: [
        "Node.js (NestJS / Express) and REST or equivalent",
        "Solid auth, validation, error handling",
        "PostgreSQL or similar is a plus",
        "Concise API documentation",
      ],
      tags: ["Node.js", "API", "PostgreSQL"],
    },
    {
      id: "design",
      title: "UI/UX Designer",
      summary: "Interface design, design systems, and engineering handover.",
      bullets: [
        "Strong Figma; design-system literacy",
        "Clear product / UX thinking",
        "Clean handover for developers",
        "Web or app UI portfolio",
      ],
      tags: ["UI/UX", "Figma", "Design system"],
    },
  ],
  apply: {
    eyebrow: "Apply",
    title: "Send your freelance profile",
    support: "Fill the form — Dolphin Kick will open email so you can send your portfolio.",
    name: "Name",
    contact: "Email or Zalo",
    portfolio: "Portfolio / GitHub link",
    role: "Role",
    message: "Short intro + availability",
    submit: "Submit application",
    sent: "Opened your email app (or copy the content if the browser blocked mailto).",
    mailSubject: "Dolphin Kick Careers —",
    mailBodyName: "Name",
    mailBodyContact: "Contact",
    mailBodyPortfolio: "Portfolio",
    mailBodyRole: "Role",
    errors: {
      name: "Please enter your name",
      contact: "Please enter email or Zalo",
      portfolio: "Please enter a portfolio link",
      role: "Please select a role",
      message: "Please add a short intro",
    },
  },
};

const ja: CareersCopy = {
  meta: {
    title: "Dolphin Kick — フリーランス採用",
    description:
      "Dolphin Kickとのフリーランス協業 — Web、モバイル、バックエンド、UI/UX。約1,000 USD/月相当、時間単価で柔軟。",
  },
  hero: {
    eyebrow: "Careers",
    headline: "Dolphin Kickとフリーランスで働く",
    support:
      "プロジェクト単位で柔軟に動ける仲間を募集 — 正社員ではありません。フル稼働換算で約1,000 USD/月、時間単価で合意します。",
  },
  roles: {
    eyebrow: "Open roles",
    title: "募集中のポジション",
    support:
      "スタジオのサービスと営業に沿った5領域。リモート歓迎。",
  },
  engagement: "Freelance",
  comp: "約1,000 USD/月相当 · 時間単価で柔軟",
  applyCta: "応募する",
  hiring: {
    closed: "募集終了",
    expired: "応募期間終了",
    countdown: "残り",
    days: "日",
    hours: "時間",
    minutes: "分",
    seconds: "秒",
  },
  jobs: [
    {
      id: "sales",
      title: "Sales / Business Development",
      summary:
        "Dolphin KickのWeb/App案件を開拓・成約 — フリーランス、案件ごとのコミッション。",
      bullets: [
        "SME・スタートアップ向けリード獲得 / ネットワーク",
        "Web・App・バックエンドを説明できる程度の理解",
        "成約案件ごとに手数料50%",
        "基本給なし — 成果報酬",
      ],
      tags: ["Sales", "BD", "Commission"],
      comp: "案件手数料50% · 基本給なし",
      priority: "優先 · 急募",
    },
    {
      id: "frontend",
      title: "Frontend Developer (Next.js / React)",
      summary: "Next.js & React によるランディング、コーポレート、Webプロダクト。",
      bullets: [
        "React / Next.js / TypeScript に強い",
        "Tailwind と UI コンポーネントパターンに慣れている",
        "明確なコミュニケーションとスプリントデモ",
        "実務のWebポートフォリオ",
      ],
      tags: ["Next.js", "React", "TypeScript"],
    },
    {
      id: "mobile",
      title: "Mobile Developer (Flutter / React Native)",
      summary: "iOS/Android またはクロスプラットフォームアプリ。",
      bullets: [
        "Flutter および/または React Native",
        "ライフサイクル、ナビ、API連携の理解",
        "UXと安定リリースを優先",
        "リリース済みアプリまたは明確なデモ",
      ],
      tags: ["Flutter", "React Native", "Mobile"],
    },
    {
      id: "backend",
      title: "Backend Developer (Node.js / API)",
      summary: "API、認証、決済、外部サービス連携。",
      bullets: [
        "Node.js（NestJS / Express）と REST 等",
        "認証・バリデーション・エラーハンドリングが堅実",
        "PostgreSQL 等があると尚可",
        "簡潔な API ドキュメント",
      ],
      tags: ["Node.js", "API", "PostgreSQL"],
    },
    {
      id: "design",
      title: "UI/UX Designer",
      summary: "UI設計、デザインシステム、エンジニアへの引き渡し。",
      bullets: [
        "Figma に強く、デザインシステムを理解",
        "プロダクト / UX 思考が明確",
        "開発向けのきれいなハンドオーバー",
        "Web またはアプリ UI のポートフォリオ",
      ],
      tags: ["UI/UX", "Figma", "Design system"],
    },
  ],
  apply: {
    eyebrow: "Apply",
    title: "フリーランス応募を送る",
    support: "フォーム記入後、メールアプリが開きポートフォリオを送れます。",
    name: "お名前",
    contact: "メールまたはZalo",
    portfolio: "ポートフォリオ / GitHub リンク",
    role: "ポジション",
    message: "短い自己紹介 + 稼働可能時間",
    submit: "応募を送信",
    sent: "メールアプリを開きました（ブラウザがmailtoをブロックした場合は内容をコピーしてください）。",
    mailSubject: "Dolphin Kick Careers —",
    mailBodyName: "お名前",
    mailBodyContact: "連絡先",
    mailBodyPortfolio: "ポートフォリオ",
    mailBodyRole: "ポジション",
    errors: {
      name: "お名前を入力してください",
      contact: "メールまたはZaloを入力してください",
      portfolio: "ポートフォリオのリンクを入力してください",
      role: "ポジションを選択してください",
      message: "短い自己紹介を入力してください",
    },
  },
};

const de: CareersCopy = {
  meta: {
    title: "Dolphin Kick — Freelance Karriere",
    description:
      "Freelance mit Dolphin Kick — Web, Mobile, Backend, UI/UX. ~1.000 USD/Monat Äquivalent, stundenweise flexibel.",
  },
  hero: {
    eyebrow: "Careers",
    headline: "Freelance mit Dolphin Kick",
    support:
      "Wir suchen flexible Mitstreiter pro Projekt — kein Fulltime. Etwa 1.000 USD/Monat Vollzeit-Äquivalent, stundenweise nach Vereinbarung.",
  },
  roles: {
    eyebrow: "Open roles",
    title: "Offene Positionen",
    support:
      "Fünf Bereiche passend zu Studio-Leistungen und Go-to-Market. Remote-freundlich.",
  },
  engagement: "Freelance",
  comp: "~1.000 USD/Monat Äquivalent · stundenweise flexibel",
  applyCta: "Bewerben",
  hiring: {
    closed: "Geschlossen",
    expired: "Bewerbungsfrist abgelaufen",
    countdown: "Verbleibend",
    days: "T",
    hours: "Std",
    minutes: "Min",
    seconds: "Sek",
  },
  jobs: [
    {
      id: "sales",
      title: "Sales / Business Development",
      summary:
        "Web-/App-Deals für Dolphin Kick akquirieren und abschließen — Freelance, Provision pro Deal.",
      bullets: [
        "Leads jagen / Netzwerk zu SME- & Startup-Kunden",
        "Genug Produktverständnis für Web, App, Backend",
        "50% Provision auf jeden geschlossenen Deal",
        "Kein Fixgehalt — einkommensabhängig vom Ergebnis",
      ],
      tags: ["Sales", "BD", "Commission"],
      comp: "50% Deal-Provision · kein Fixgehalt",
      priority: "Priorität · Dringend",
    },
    {
      id: "frontend",
      title: "Frontend Developer (Next.js / React)",
      summary: "Landings, Corporate Sites und Webprodukte mit Next.js & React.",
      bullets: [
        "Stark in React / Next.js / TypeScript",
        "Sicher mit Tailwind und UI-Komponentenmustern",
        "Klare Kommunikation und Sprint-Demos",
        "Echtes Web-Portfolio",
      ],
      tags: ["Next.js", "React", "TypeScript"],
    },
    {
      id: "mobile",
      title: "Mobile Developer (Flutter / React Native)",
      summary: "iOS/Android- oder Cross-Platform-Apps je nach Produktbedarf.",
      bullets: [
        "Flutter und/oder React Native",
        "Solides Lifecycle-, Navigations- und API-Wissen",
        "UX und stabile Releases priorisieren",
        "Ausgelieferte App oder klares Demo",
      ],
      tags: ["Flutter", "React Native", "Mobile"],
    },
    {
      id: "backend",
      title: "Backend Developer (Node.js / API)",
      summary: "APIs, Auth, Zahlungen und Drittanbieter-Integrationen.",
      bullets: [
        "Node.js (NestJS / Express) und REST o. Ä.",
        "Solide Auth, Validierung, Fehlerbehandlung",
        "PostgreSQL o. Ä. von Vorteil",
        "Knappe API-Dokumentation",
      ],
      tags: ["Node.js", "API", "PostgreSQL"],
    },
    {
      id: "design",
      title: "UI/UX Designer",
      summary: "Interface-Design, Design Systems und Übergabe an Engineering.",
      bullets: [
        "Starkes Figma; Design-System-Kenntnisse",
        "Klares Product-/UX-Denken",
        "Saubere Handover für Entwickler",
        "Web- oder App-UI-Portfolio",
      ],
      tags: ["UI/UX", "Figma", "Design system"],
    },
  ],
  apply: {
    eyebrow: "Apply",
    title: "Freelance-Profil senden",
    support: "Formular ausfüllen — Dolphin Kick öffnet die E-Mail, damit Sie Ihr Portfolio mitschicken.",
    name: "Name",
    contact: "E-Mail oder Zalo",
    portfolio: "Portfolio- / GitHub-Link",
    role: "Position",
    message: "Kurze Vorstellung + Verfügbarkeit",
    submit: "Bewerbung senden",
    sent: "E-Mail-App geöffnet (oder Inhalt kopieren, falls der Browser mailto blockiert).",
    mailSubject: "Dolphin Kick Careers —",
    mailBodyName: "Name",
    mailBodyContact: "Kontakt",
    mailBodyPortfolio: "Portfolio",
    mailBodyRole: "Position",
    errors: {
      name: "Bitte Namen eingeben",
      contact: "Bitte E-Mail oder Zalo eingeben",
      portfolio: "Bitte Portfolio-Link eingeben",
      role: "Bitte Position wählen",
      message: "Bitte kurze Vorstellung eingeben",
    },
  },
};

const zh: CareersCopy = {
  meta: {
    title: "Dolphin Kick — 自由职业招聘",
    description:
      "与 Dolphin Kick 自由协作 — Web、移动、后端、UI/UX。约 1000 美元/月等价，按小时灵活结算。",
  },
  hero: {
    eyebrow: "Careers",
    headline: "与 Dolphin Kick 自由协作",
    support:
      "按项目寻找灵活搭档 — 非全职。全量约合 1000 美元/月，按协商小时结算。",
  },
  roles: {
    eyebrow: "Open roles",
    title: "开放职位",
    support: "五个方向对齐工作室服务与市场拓展。欢迎远程。",
  },
  engagement: "Freelance",
  comp: "约 $1,000/月等价 · 按小时灵活",
  applyCta: "申请",
  hiring: {
    closed: "已关闭",
    expired: "申请已截止",
    countdown: "剩余",
    days: "天",
    hours: "时",
    minutes: "分",
    seconds: "秒",
  },
  jobs: [
    {
      id: "sales",
      title: "Sales / Business Development",
      summary: "为 Dolphin Kick 开拓并成交 Web/App 项目 — 自由协作，按单抽成。",
      bullets: [
        "自主获客 / 连接中小企业与创业客户网络",
        "具备足够的 Web、App、后端理解以便初步顾问",
        "每成交一单抽成 50%",
        "无底薪 — 按结果计酬",
      ],
      tags: ["Sales", "BD", "Commission"],
      comp: "成交抽成 50% · 无底薪",
      priority: "优先 · 急招",
    },
    {
      id: "frontend",
      title: "Frontend Developer (Next.js / React)",
      summary: "使用 Next.js & React 交付落地页、企业站与 Web 产品。",
      bullets: [
        "擅长 React / Next.js / TypeScript",
        "熟悉 Tailwind 与 UI 组件模式",
        "沟通清晰，参与冲刺演示",
        "真实 Web 作品集",
      ],
      tags: ["Next.js", "React", "TypeScript"],
    },
    {
      id: "mobile",
      title: "Mobile Developer (Flutter / React Native)",
      summary: "按产品需求交付 iOS/Android 或跨平台应用。",
      bullets: [
        "Flutter 和/或 React Native",
        "扎实的生命周期、导航与 API 经验",
        "优先 UX 与稳定发布",
        "已上线应用或清晰演示",
      ],
      tags: ["Flutter", "React Native", "Mobile"],
    },
    {
      id: "backend",
      title: "Backend Developer (Node.js / API)",
      summary: "API、认证、支付与第三方服务集成。",
      bullets: [
        "Node.js（NestJS / Express）与 REST 等",
        "认证、校验与错误处理扎实",
        "有 PostgreSQL 等经验更佳",
        "简洁的 API 文档",
      ],
      tags: ["Node.js", "API", "PostgreSQL"],
    },
    {
      id: "design",
      title: "UI/UX Designer",
      summary: "界面设计、设计系统，并向工程交接。",
      bullets: [
        "精通 Figma，理解设计系统",
        "清晰的产品 / UX 思维",
        "面向开发的干净交接",
        "Web 或 App UI 作品集",
      ],
      tags: ["UI/UX", "Figma", "Design system"],
    },
  ],
  apply: {
    eyebrow: "Apply",
    title: "提交自由职业申请",
    support: "填写表单后将打开邮件应用，便于发送作品集。",
    name: "姓名",
    contact: "邮箱或 Zalo",
    portfolio: "作品集 / GitHub 链接",
    role: "职位",
    message: "简短自我介绍 + 可工作时间",
    submit: "发送申请",
    sent: "已打开邮件应用（若浏览器拦截 mailto，请复制内容）。",
    mailSubject: "Dolphin Kick Careers —",
    mailBodyName: "姓名",
    mailBodyContact: "联系方式",
    mailBodyPortfolio: "作品集",
    mailBodyRole: "职位",
    errors: {
      name: "请输入姓名",
      contact: "请输入邮箱或 Zalo",
      portfolio: "请输入作品集链接",
      role: "请选择职位",
      message: "请填写简短自我介绍",
    },
  },
};

export const careersByLocale: Record<Locale, CareersCopy> = {
  vi,
  en,
  ja,
  de,
  zh,
};

export const careersNavLabel: Record<Locale, string> = {
  vi: "Tuyển dụng",
  en: "Careers",
  ja: "採用",
  de: "Karriere",
  zh: "招聘",
};
