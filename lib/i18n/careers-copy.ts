import type { Dictionary, Locale } from "./types";

type CareersCopy = Dictionary["careers"];

const vi: CareersCopy = {
  meta: {
    title: "Dolphin Software — Tuyển dụng freelancer",
    description:
      "Cộng tác freelance với Dolphin Software — web, backend, AI, marketing. ~1000 USD/tháng tương đương, linh hoạt theo giờ.",
  },
  hero: {
    eyebrow: "Careers",
    headline: "Freelance cùng Dolphin Software",
    support:
      "Cần đồng đội linh hoạt theo dự án — không phải full-time. Mức ~1000 USD/tháng tương đương full capacity, thanh toán theo giờ thỏa thuận.",
  },
  roles: {
    eyebrow: "Open roles",
    title: "Vị trí đang mở",
    support:
      "Nhiều hướng khớp dịch vụ, AI và quality của studio. Remote-friendly.",
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
        "Tìm và chốt deal web/app cho Dolphin Software — freelance, hoa hồng theo deal.",
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
      id: "marketing",
      title: "Marketing / Growth",
      summary:
        "Tăng traffic & lead cho Dolphin Software — content SEO, social (FB/Zalo), đo được kết quả.",
      bullets: [
        "Viết / biên tập bài ngắn (/news/) theo keyword web-first",
        "SEO cơ bản và theo dõi Search Console",
        "Đăng & nurture FB/Zalo (hoặc ads nhẹ) đúng ICP làm website",
        "Báo cáo tuần gọn: traffic → lead",
      ],
      tags: ["Marketing", "SEO", "Growth"],
      comp: "Freelance · theo deliverable / giờ",
      priority: "Ưu tiên",
    },
    {
      id: "ai-engineer",
      title: "AI Engineer",
      summary:
        "Xây AI agent, pipeline LLM và tooling cho sản phẩm Dolphin Software — freelance, remote-friendly.",
      bullets: [
        "Kinh nghiệm LLM APIs, RAG và agent workflow",
        "Node.js/Python và tích hợp API vững",
        "Tư duy sản phẩm — ship feature đo được",
        "Portfolio hoặc repo AI thực tế",
      ],
      tags: ["LLM", "AI Agent", "RAG"],
    },
    {
      id: "intern-fullstack",
      title: "Intern Fullstack",
      summary:
        "Thực tập fullstack trên hệ thống AI content & Vibe Coding của Dolphin Software.",
      bullets: [
        "React/Next.js hoặc Node.js cơ bản, ham học và chủ động",
        "Làm task thật trên nền tảng AI content nội bộ",
        "Mentor sát, review code thường xuyên",
        "Ưu tiên sinh viên năm cuối / mới ra trường",
      ],
      tags: ["Intern", "Next.js", "Vibe Coding"],
      comp: "Intern · có mentor",
    },
    {
      id: "fresher-tester",
      title: "Fresher Tester (Manual + Automation)",
      summary:
        "Kiểm thử web/app — manual có hệ thống, học automation từ đầu.",
      bullets: [
        "Viết test case, report bug rõ ràng, có tái hiện bước",
        "Manual testing web/mobile trong sprint thật",
        "Học Playwright/Cypress hoặc tương đương",
        "Tỉ mỉ, chủ động, giao tiếp tốt với dev",
      ],
      tags: ["QA", "Manual", "Automation"],
      comp: "Fresher · manual + automation",
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
    support: "Điền form — Dolphin Software sẽ mở email để bạn gửi kèm portfolio.",
    name: "Tên",
    contact: "Email hoặc Zalo",
    portfolio: "Link portfolio / GitHub",
    role: "Vị trí",
    message: "Giới thiệu ngắn + availability",
    submit: "Gửi ứng tuyển",
    sent: "Đã mở ứng dụng email của bạn (hoặc sao chép nội dung nếu trình duyệt chặn mailto).",
    mailSubject: "Dolphin Software Careers —",
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
    title: "Dolphin Software — Freelance careers",
    description:
      "Freelance with Dolphin Software — web, backend, AI, marketing. ~USD 1,000/mo equivalent, hourly flexible.",
  },
  hero: {
    eyebrow: "Careers",
    headline: "Freelance with Dolphin Software",
    support:
      "We need flexible teammates per project — not full-time. About USD 1,000/mo full-capacity equivalent, paid hourly by agreement.",
  },
  roles: {
    eyebrow: "Open roles",
    title: "Open positions",
    support:
      "Multiple tracks across services, AI, and quality. Remote-friendly.",
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
        "Source and close web/app deals for Dolphin Software — freelance, commission per deal.",
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
      id: "marketing",
      title: "Marketing / Growth",
      summary:
        "Grow traffic and leads for Dolphin Software — SEO content, social (FB/Zalo), measurable results.",
      bullets: [
        "Write / edit short /news/ posts aligned to web-first keywords",
        "Basic SEO and Search Console follow-up",
        "Post and nurture on FB/Zalo (or light ads) for website ICP",
        "Weekly report: traffic → leads, kept short",
      ],
      tags: ["Marketing", "SEO", "Growth"],
      comp: "Freelance · by deliverable / hour",
      priority: "Priority",
    },
    {
      id: "ai-engineer",
      title: "AI Engineer",
      summary:
        "Build AI agents, LLM pipelines, and tooling for Dolphin Software products — freelance, remote-friendly.",
      bullets: [
        "Hands-on with LLM APIs, RAG, and agent workflows",
        "Solid Node.js/Python and API integration",
        "Product mindset — ship measurable features",
        "Real AI portfolio or public repos",
      ],
      tags: ["LLM", "AI Agent", "RAG"],
    },
    {
      id: "intern-fullstack",
      title: "Intern Fullstack",
      summary:
        "Fullstack internship on Dolphin Software's AI content system and Vibe Coding platform.",
      bullets: [
        "Basic React/Next.js or Node.js; eager to learn",
        "Real tasks on the in-house AI content platform",
        "Close mentorship and regular code review",
        "Final-year students or recent grads preferred",
      ],
      tags: ["Intern", "Next.js", "Vibe Coding"],
      comp: "Intern · mentored",
    },
    {
      id: "fresher-tester",
      title: "Fresher Tester (Manual + Automation)",
      summary:
        "Test web/app products — structured manual QA, learning automation from day one.",
      bullets: [
        "Write test cases and clear bug reports with repro steps",
        "Manual web/mobile testing in real sprints",
        "Learn Playwright/Cypress or equivalent",
        "Detail-oriented, proactive, good dev communication",
      ],
      tags: ["QA", "Manual", "Automation"],
      comp: "Fresher · manual + automation",
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
    support: "Fill the form — Dolphin Software will open email so you can send your portfolio.",
    name: "Name",
    contact: "Email or Zalo",
    portfolio: "Portfolio / GitHub link",
    role: "Role",
    message: "Short intro + availability",
    submit: "Submit application",
    sent: "Opened your email app (or copy the content if the browser blocked mailto).",
    mailSubject: "Dolphin Software Careers —",
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
    title: "Dolphin Software — フリーランス採用",
    description:
      "Dolphin Softwareとのフリーランス協業 — Web、モバイル、バックエンド、UI/UX。約1,000 USD/月相当、時間単価で柔軟。",
  },
  hero: {
    eyebrow: "Careers",
    headline: "Dolphin Softwareとフリーランスで働く",
    support:
      "プロジェクト単位で柔軟に動ける仲間を募集 — 正社員ではありません。フル稼働換算で約1,000 USD/月、時間単価で合意します。",
  },
  roles: {
    eyebrow: "Open roles",
    title: "募集中のポジション",
    support:
      "スタジオのサービス、AI、品質に沿った複数ポジション。リモート歓迎。",
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
        "Dolphin SoftwareのWeb/App案件を開拓・成約 — フリーランス、案件ごとのコミッション。",
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
      id: "marketing",
      title: "Marketing / Growth",
      summary:
        "Dolphin Software のトラフィックとリードを伸ばす — SEOコンテンツ、SNS（FB/Zalo）、成果を測る。",
      bullets: [
        "Webファーストのキーワードに沿った /news/ 短文の執筆・編集",
        "基本SEOと Search Console のフォロー",
        "ウェブサイトICP向けに FB/Zalo（または軽めの広告）で発信・育成",
        "週次レポート：トラフィック → リードを簡潔に",
      ],
      tags: ["Marketing", "SEO", "Growth"],
      comp: "フリーランス · 成果物 / 時間単価",
      priority: "優先",
    },
    {
      id: "ai-engineer",
      title: "AI Engineer",
      summary:
        "Dolphin Software 製品向けの AI Agent、LLM パイプライン、ツーリングを構築 — フリーランス、リモート可。",
      bullets: [
        "LLM API、RAG、Agent ワークフローの実務経験",
        "Node.js/Python と API 連携が堅実",
        "プロダクト思考 — 測定可能な機能を出荷",
        "実務の AI ポートフォリオまたは公開リポ",
      ],
      tags: ["LLM", "AI Agent", "RAG"],
    },
    {
      id: "intern-fullstack",
      title: "Intern Fullstack",
      summary:
        "Dolphin Software の AI コンテンツ基盤と Vibe Coding 上でのフルスタックインターン。",
      bullets: [
        "React/Next.js または Node.js の基礎、学習意欲",
        "社内 AI コンテンツ基盤の実タスク",
        "メンター付き、定期的なコードレビュー",
        "大学4年生または新卒歓迎",
      ],
      tags: ["Intern", "Next.js", "Vibe Coding"],
      comp: "インターン · メンター付き",
    },
    {
      id: "fresher-tester",
      title: "Fresher Tester (Manual + Automation)",
      summary:
        "Web/App のテスト — 体系的な手動 QA と、初日からの自動化学習。",
      bullets: [
        "テストケース作成と再現手順付きバグ報告",
        "実スプリントでの Web/モバイル手動テスト",
        "Playwright/Cypress 等を学習",
        "丁寧さ、主体性、開発とのコミュニケーション",
      ],
      tags: ["QA", "Manual", "Automation"],
      comp: "フレッシャー · 手動 + 自動化",
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
    mailSubject: "Dolphin Software Careers —",
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



export const careersByLocale: Record<Locale, CareersCopy> = {
  vi,
  en,
  ja,
};

export const careersNavLabel: Record<Locale, string> = {
  vi: "Tuyển dụng",
  en: "Careers",
  ja: "採用",
};
