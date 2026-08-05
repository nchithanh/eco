import { applyHomepageLang } from "./homepage_lang";
import type { Dictionary, Locale } from "./types";
import { careersByLocale, careersNavLabel } from "./careers-copy";
import { getFaqCopy } from "./faq-copy";
import { newsByLocale, newsNavLabel } from "./news-copy";
import { popularServicesByLocale } from "./popular-services-copy";
import { aiEdgeByLocale } from "./ai-edge-copy";
import { uiGalleryByLocale } from "./ui-gallery-copy";

const vi: Dictionary = {
  meta: {
    title: "Dolphin Software",
    description:
      "Studio web & app cho SMB: từ bài toán kinh doanh đến hệ thống dễ vận hành — phạm vi rõ, kết quả đo được, đồng hành sau bàn giao.",
  },
  nav: {
    ariaMain: "Chính",
    ariaMobile: "Điều hướng di động",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    services: "Dịch vụ",
    web: "Làm website",
    serviceWeb: "Thiết kế website",
    serviceLanding: "Landing page",
    serviceMobile: "App mobile",
    serviceBackend: "Backend & tích hợp",
    serviceDesign: "UI/UX",
    process: "Quy trình",
    stack: "Công nghệ",
    news: newsNavLabel.vi,
    careers: careersNavLabel.vi,
    about: "Giới thiệu",
    agents: "AI",
    agentDolphin: "Dolphin Care",
    aiTransform: "Chuyển đổi AI doanh nghiệp",
    contact: "Liên hệ",
  },
  banner: {
    aria: "Thông báo",
    text: "Dolphin Software đang tuyển freelancer — Sales ưu tiên gấp, hoa hồng 50% deal. Ứng tuyển ngay!",
    cta: "Ứng tuyển",
  },
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "Đừng để công nghệ trở thành [[gánh nặng]] cho doanh nghiệp",
    subhead: "Xây website · nâng cấp hệ thống cũ · AI đúng chỗ cần",
    support:
      "Chúng tôi giúp doanh nghiệp xây dựng website, nâng cấp hệ thống cũ và ứng dụng AI vào đúng nơi cần thiết — để tiết kiệm thời gian và nâng cao hiệu quả.",
    trustLine: "Hiểu vấn đề · Báo giá rõ · Không bán thừa",
    ctaPrimary: "Nhận báo giá",
    ctaSecondary: "Xem dịch vụ website",
    visual: {
      web: "Web & App",
      automation: "Tự động hóa",
      ai: "Tích hợp AI",
    },
  },
  trust: {
    aria: "Đầu ra bàn giao",
    eyebrow: "Bàn giao",
    title: "Đầu ra bạn nhận khi [[xong dự án]]",
    support:
      "Source · admin · domain · guide · bảo hành — quyền sở hữu và vận hành, không chỉ URL live.",
    items: [
      { value: "Source", label: "Bạn sở hữu mã nguồn / repo theo thỏa thuận — không khóa vendor." },
      { value: "CMS / Admin", label: "Truy cập quản trị nội dung hoặc panel vận hành (nếu trong scope)." },
      { value: "Domain / Hosting", label: "Hướng dẫn gắn domain/hosting, env và checklist deploy." },
      { value: "Hướng dẫn", label: "Docs / walkthrough để đội bạn vận hành độc lập." },
      { value: "BH 3–6 tháng", label: "Bảo hành lỗi kỹ thuật trong phạm vi đã nghiệm thu — không gồm tính năng mới." },
    ],
  },
  popularServices: popularServicesByLocale.vi,
  uiGallery: uiGalleryByLocale.vi,
  aiEdge: aiEdgeByLocale.vi,
  capabilities: {
    eyebrow: "Website & App",
    title: "Làm [[website]] cho anh chị rõ ràng, dễ chạy",
    support:
      "Brief ngắn là đủ để bắt đầu. Chọn hướng gần nhu cầu — mình đề xuất cách làm và báo giá rõ.",
    ctaPrimary: "Nhận báo giá",
    ctaSecondary: "Xem gói giá",
    learnMore: "Tìm hiểu thêm",
    prevPage: "Trang trước",
    nextPage: "Trang sau",
    offers: [
      {
        id: "landing",
        title: "Landing Page",
        body: "Một trang rõ CTA — campaign, dịch vụ, thu lead nhanh.",
        meta: "Thường 3–5 ngày",
        href: "/services/web",
      },
      {
        id: "business",
        title: "Website doanh nghiệp",
        body: "Hồ sơ công ty, dịch vụ, SEO dài hạn — dễ cập nhật nội dung.",
        meta: "Thường 7–14 ngày",
        href: "/services/web",
      },
      {
        id: "shop",
        title: "Website bán hàng",
        body: "Catalog, giỏ hàng, thanh toán — bán online gọn hơn.",
        meta: "Thường 3–4 tuần",
        href: "/services/web",
      },
      {
        id: "webapp",
        title: "Web app",
        body: "Luồng nghiệp vụ riêng — đặt lịch, quản lý, portal khách.",
        meta: "Theo phạm vi dự án",
        href: "/services/web",
      },
    ],
    moreServices: [
      { label: "Mobile app", href: "/services/mobile" },
      { label: "Backend", href: "/services/backend" },
      { label: "UI/UX", href: "/services/design" },
      { label: "Tích hợp thanh toán", href: "/services/integrations" },
    ],
    items: [
      {
        id: "web",
        category: "Website",
        title: "Thiết kế & làm website theo yêu cầu",
        body: "Landing, corporate hay CMS giúp khách hiểu và hành động — form/CTA rõ, SEO on-page, responsive; cấu trúc sẵn để mở rộng sau.",
        tags: ["Next.js", "React", "CMS"],
      },
      {
        id: "mobile",
        category: "Mobile",
        title: "Phát triển mobile app",
        body: "App trên điện thoại giúp khách đặt / mua / theo dõi nhanh hơn — cân bằng UX và tốc độ ra mắt theo nhu cầu sản phẩm.",
        tags: ["Flutter", "React Native", "iOS/Android"],
      },
      {
        id: "backend",
        category: "Backend",
        title: "Backend & tích hợp hệ thống",
        body: "API, auth, thanh toán vững — dữ liệu và luồng nghiệp vụ chạy ổn khi web/app scale.",
        tags: ["Node.js", "API", "Auth"],
      },
      {
        id: "design",
        category: "UI/UX",
        title: "UI/UX & bàn giao",
        body: "UI đúng brand + design system + hướng dẫn — đội bạn tự vận hành nội dung, ít phụ thuộc studio.",
        tags: ["UI/UX", "Design system", "Handover"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "Tích hợp dịch vụ bên thứ ba",
        body: "Gắn MoMo, ZaloPay, VNPay, Zalo OA vào luồng thật — ít sai sót vận hành, dễ theo dõi và an toàn.",
        tags: ["MoMo", "Zalo", "VNPay", "Webhook"],
      },
      {
        id: "agents",
        category: "Agents",
        title: "Hệ sinh thái agent cho business",
        body: "Agent gắn nghiệp vụ + MCP/tool nội bộ — hỗ trợ vận hành theo domain, không chỉ chatbot marketing.",
        tags: ["MCP", "Agents", "Context", "AI"],
      },
    ],
  },
  siteOutcomes: {
    eyebrow: "Kết quả vận hành",
    title: "Sau bàn giao, bạn [[chạy được những việc này]]",
    support:
      "Sau bàn giao — lead, lịch, nội dung, thanh toán và vận hành chạy được; không phải catalog tính năng.",
    items: [
      {
        title: "Thu lead và chuyển đổi rõ",
        body: "Form/CTA và luồng liên hệ gọn — khách hiểu rồi hành động; đội bạn theo dõi được nguồn.",
      },
      {
        title: "Đặt lịch / giữ chỗ ổn định",
        body: "Slot trống, xác nhận và nhắc lịch — giảm gọi hỏi giờ và double-book.",
      },
      {
        title: "Thương hiệu dễ tin, dễ nhớ",
        body: "Landing hoặc corporate đúng trọng tâm — responsive, nội dung quét nhanh, xây dựng niềm tin.",
      },
      {
        title: "Đội bạn tự cập nhật nội dung",
        body: "CMS/admin trong phạm vi — sửa bài, ảnh, giá mà không gọi studio mỗi lần.",
      },
      {
        title: "Thanh toán và kênh nhắn tin vào luồng thật",
        body: "Gắn MoMo / ZaloPay / VNPay / Zalo OA khi cần — ít sai sót vận hành hơn so với gắn tay.",
      },
      {
        title: "Vận hành nội bộ bớt rời rạc",
        body: "Dashboard, agent nghiệp vụ hoặc vòng Collect → Govern — một bức tranh thay vì mười công cụ.",
      },
    ],
  },
  whatYouGet: {
    eyebrow: "Bàn giao dự án",
    title: "Mỗi dự án [[kết thúc bằng đầu ra rõ]]",
    support:
      "Bàn giao rõ — tài liệu, quyền sở hữu, vận hành độc lập; không khóa vendor.",
    groupOwn: "Own — sở hữu & nền tảng",
    groupRun: "Run — vận hành & bảo hành",
    items: [
      {
        title: "Phạm vi & milestone đã chốt",
        body: "Báo giá theo đầu ra — demo định kỳ để chỉnh sớm, không giờ công mơ hồ.",
      },
      {
        title: "Source & quyền vận hành",
        body: "Repo theo thỏa thuận — bạn nắm quyền chạy tiếp, không bị khóa nhà thầu.",
      },
      {
        title: "Cấu trúc sẵn mở rộng",
        body: "Thêm trang, form hay tính năng theo milestone — không dựng lại từ đầu.",
      },
      {
        title: "SEO on-page & hiệu năng",
        body: "Responsive, heading/meta rõ, tốc độ hợp lý SMB — nền để tối ưu tiếp.",
      },
      {
        title: "Hướng dẫn vận hành",
        body: "Docs / walkthrough để đội bạn tự chạy nội dung và checklist deploy.",
      },
      {
        title: "Bảo hành kỹ thuật 3–6 tháng",
        body: "Trong phạm vi đã nghiệm thu — tính năng mới là hạng mục riêng, báo giá trước.",
      },
    ],
  },
  ops: {
    eyebrow: "Tự động hóa vận hành",
    title: "Một [[lifecycle]] điều hành — thôi đuổi tin qua mười tool",
    support:
      "Tín hiệu vào một vòng — Collect → Improve. Toàn cảnh trên một luồng, không chase cập nhật.",
    cta: "Trao đổi về tự động hóa",
    before: "Trước: nhảy Slack / Jira / docs để biết đang gì.",
    after: "Sau: một console, một vòng vận hành.",
    loopHint: "Vòng lặp lại Collect",
    steps: [
      {
        name: "Collect",
        detail: "Thu tín hiệu từ Slack, Jira, docs và công cụ nội bộ.",
      },
      {
        name: "Normalize",
        detail: "Chuẩn hóa ngữ cảnh, bỏ nhiễu, gắn đúng nghiệp vụ.",
      },
      {
        name: "Run",
        detail: "Chu kỳ định kỳ — báo cáo, nhắc việc, escalate đúng lúc.",
      },
      {
        name: "Observe",
        detail: "Theo dõi tín hiệu vận hành — thấy lệch trước khi trễ.",
      },
      {
        name: "Govern",
        detail: "Điều hành từ một console — không tự đi gom tin.",
      },
      {
        name: "Improve",
        detail: "Chỉnh quy tắc và chu kỳ theo bằng chứng vừa quan sát.",
      },
    ],
    chips: ["Slack", "Jira", "Docs"],
  },
  works: {
    eyebrow: "Sites shipped",
    title: "Website personal & [[business nhỏ]] đã làm",
    support:
      "Mỗi case: bài toán → phạm vi → kết quả đo được — không chỉ ảnh đẹp.",
    cta: "Muốn làm website tương tự?",
    problemLabel: "Bài toán",
    scopeLabel: "Phạm vi",
    resultLabel: "Kết quả",
    items: [
      {
        id: "billiard",
        title: "Quản lý cửa hàng bida",
        tag: "Website · Đặt bàn",
        problem: "Sổ/Excel: khó biết bàn trống, dễ sai doanh thu ca.",
        scope: "Bản đồ bàn, timer, dịch vụ kèm, tóm tắt ca trên web/ops.",
        result: "Ít sót giờ hơn; onboard nhanh; chủ xem ca mọi lúc.",
      },
      {
        id: "badminton",
        title: "Website sân cầu lông",
        tag: "Booking",
        problem: "Khách gọi hỏi lịch trống; admin dễ chốt slot trùng.",
        scope: "Giới thiệu sân, lịch trống, luồng đặt sân rõ.",
        result: "Giảm gọi hỏi lịch; tăng giữ chỗ đúng slot.",
      },
      {
        id: "tickets",
        title: "Booking vé & convert",
        tag: "Convert",
        problem: "Khách xem sự kiện nhưng rớt trước khi đặt xong.",
        scope: "Luồng xem → chọn → thanh toán/giữ chỗ tối ưu convert.",
        result: "Ít bước đặt hơn; tăng tỷ lệ hoàn tất booking.",
      },
      {
        id: "beauty",
        title: "Booking làm đẹp",
        tag: "Beauty",
        problem: "Sót lịch, double-book; khó tự giữ chỗ ngoài giờ.",
        scope: "Đặt lịch theo slot nail/makeup/dịch vụ + xác nhận.",
        result: "Ít sót lịch; tăng giữ chỗ ngoài giờ hành chính.",
      },
      {
        id: "cafe",
        title: "Cafe đặt món QR",
        tag: "QR · Order",
        problem: "Giờ cao điểm gọi món chậm, dễ sai vì ghi tay.",
        scope: "Menu QR theo bàn, giỏ món, đẩy order tới quầy/bếp.",
        result: "Gọi món nhanh hơn; ít sai món; nhân viên ít chạy sổ.",
      },
      {
        id: "clinic",
        title: "Đặt lịch phòng khám",
        tag: "Clinic",
        problem: "Bệnh nhân gọi hỏi lịch; dễ trùng slot, quên nhắc tái khám.",
        scope: "Lịch theo bác sĩ/slot + xác nhận và nhắc lịch.",
        result: "Giảm gọi hỏi lịch; ít trùng slot hơn.",
      },
    ],
  },
  process: {
    eyebrow: "Phương pháp",
    title: "Quy trình [[bàn giao]] 5 bước",
    support:
      "Từ discovery đến handover — mỗi bước có đầu ra rõ, không nhảy cóc.",
    deliverableLabel: "Đầu ra",
    steps: [
      {
        name: "Lắng nghe & Khảo sát",
        detail: "Làm rõ mục tiêu site/app và ràng buộc ngân sách/thời gian.",
        deliverable: "Tóm tắt bài toán, mục tiêu và ràng buộc đã thống nhất.",
      },
      {
        name: "Lập kế hoạch & Báo giá",
        detail: "Bóc tách tính năng, milestone, chi phí và những gì bàn giao.",
        deliverable: "Đề xuất phạm vi, timeline và báo giá rõ ràng.",
      },
      {
        name: "Phát triển theo sprint",
        detail: "UI, tính năng, responsive và tích hợp — demo định kỳ để chỉnh sớm.",
        deliverable: "Bản build/demo theo sprint để review sớm.",
      },
      {
        name: "Kiểm thử & UAT",
        detail: "Kiểm soát chất lượng và nghiệm thu cùng bạn trước production.",
        deliverable: "Checklist nghiệm thu và danh sách lỗi đã xử lý.",
      },
      {
        name: "Bàn giao & Đồng hành",
        detail: "Deploy, hướng dẫn vận hành, tài liệu — hỗ trợ lỗi kỹ thuật khi live.",
        deliverable: "Source, domain/hosting & env, admin (nếu có), hướng dẫn và BH kỹ thuật.",
      },
    ],
  },
  technology: {
    eyebrow: "Công nghệ của chúng tôi",
    title: "Một [[console]] cho tín hiệu từng nằm rải rác",
    support:
      "Trước: Slack, Jira và docs phân tán sự thật. Sau: Thu thập → Chuẩn hóa → Chạy → Quản trị — toàn bộ bức tranh trong một luồng rõ ràng.",
    cta: "Tìm hiểu thêm",
    live: "live",
    tabs: ["Tổng quan", "Dữ liệu", "Insight", "Cảnh báo"],
    widgets: {
      activity: "Hoạt động",
      pulse: "Nhịp hệ thống",
      nodes: "Node đang chạy",
    },
  },
  stack: {
    eyebrow: "Công nghệ",
    titleLead: "Năng lực kỹ thuật",
    titleHighlight: "công nghệ hiện đại",
    support:
      "Đúng stack cho đúng bài toán — frontend, backend, infra và data. Kiểm chứng trên dự án thật.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      infra: "Infra / Ops",
      data: "Data / Tools",
    },
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
      "AWS",
      "Kubernetes",
      "Grafana",
      "Elasticsearch",
      "Redis",
      "Terraform",
    ],
  },
  why: {
    eyebrow: "Vì sao chọn Dolphin Software",
    title: "[[Đồng hành dài hạn]], không chỉ bàn giao code",
    support:
      "Timeline · scope · cam kết · hậu bàn giao — rõ ràng, không jargon.",
    reasons: [
      {
        title: "Kinh nghiệm thực chiến",
        body: "7 năm production — reliability, observability và bàn giao end-to-end cho SMB.",
      },
      {
        title: "Giao hàng end-to-end",
        body: "Discovery đến deploy — một đội chịu trách nhiệm; sẵn mở rộng sau.",
      },
      {
        title: "Quy trình minh bạch",
        body: "Milestone, demo định kỳ, báo giá rõ phạm vi — đo bằng đầu ra.",
      },
      {
        title: "Đồng hành sau bàn giao",
        body: "Hướng dẫn vận hành, BH lỗi kỹ thuật, tối ưu khi sản phẩm chạy thật.",
      },
    ],
  },
  cofounder: {
    eyebrow: "Đội ngũ",
    role: "Nhà sáng lập",
    name: "Nguyễn Chí Thành",
    description:
      "7 năm product & systems — production ops, incident response, observability. Đưa kinh nghiệm vận hành thật vào web & app SMB: thẳng thắn, phạm vi rõ.",
    stack: [
      "NestJS",
      "Golang",
      "TypeScript",
      "Docker",
      "GitLab CI/CD",
      "MySQL",
      "Redis",
    ],
  },
  contact: {
    eyebrow: "Liên hệ",
    title: "Sẵn sàng [[khởi động]] dự án?",
    support:
      "Chat Zalo nhanh hoặc gửi email brief — scope và bước tiếp theo, không cần biết kỹ thuật.",
    nextHint: "Phản hồi với hướng triển khai + phạm vi ước tính.",
    ctaZalo: "Chat Zalo",
    ctaEmail: "Gửi email",
    name: "Tên",
    contact: "Email hoặc Zalo",
    message: "Mô tả ngắn dự án",
    submit: "Gửi yêu cầu",
    sent: "Đã mở ứng dụng email của bạn (hoặc sao chép nội dung nếu trình duyệt chặn mailto).",
    mailSubject: "Dolphin Software — yêu cầu từ",
    mailBodyName: "Tên",
    mailBodyContact: "Liên hệ",
    errors: {
      name: "Vui lòng nhập tên",
      contact: "Vui lòng nhập email hoặc Zalo",
      message: "Vui lòng mô tả ngắn dự án",
    },
  },
  news: newsByLocale.vi,
  careers: careersByLocale.vi,
  faq: getFaqCopy("vi"),
  footer: {
    disclaimer:
      "Nội dung liên quan chứng khoán chỉ mang tính chia sẻ cộng đồng — không phải tư vấn đầu tư có giấy phép và không cam kết lợi nhuận.",
    groupExplore: "Explore",
    groupStudio: "Studio",
    groupUpdates: "Updates",
    groupConnect: "Connect",
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
  contactFab: {
    open: "Mở liên hệ nhanh",
    close: "Đóng liên hệ nhanh",
    zalo: "Chat Zalo",
    phone: "Gọi điện",
    email: "Gửi email",
  },
  cookie: {
    title: "Cookie & quyền riêng tư",
    body: "Chúng tôi dùng cookie và lưu trữ trình duyệt cần thiết để ghi nhớ ngôn ngữ, theme giao diện và lựa chọn cookie của bạn — giúp trang tải đúng và tránh hỏi lại mỗi lần vào. Cookie tùy chọn (nếu có) chỉ phục vụ cải thiện trải nghiệm, không bán dữ liệu cho bên thứ ba. Bạn có thể chấp nhận hoặc từ chối phần không bắt buộc; từ chối vẫn dùng được site với các chức năng cốt lõi.",
    accept: "Chấp nhận",
    decline: "Từ chối",
  },
  preview: {
    close: "Đóng",
    viewFull: "Xem full",
    loading: "Đang tải nội dung…",
  },
  theme: {
    aria: "Màu giao diện",
    violet: "Tím",
    ocean: "Ocean",
    forest: "Rêu",
    coral: "Coral",
    slate: "Slate",
    black: "Đen",
  },
};

const en: Dictionary = {
  meta: {
    title: "Dolphin Software",
    description:
      "Web & app studio for SMBs: from business problems to systems you can run — clear scope, measurable outcomes, support after handover.",
  },
  nav: {
    ariaMain: "Main",
    ariaMobile: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    services: "Services",
    web: "Websites",
    serviceWeb: "Website design",
    serviceLanding: "Landing page",
    serviceMobile: "Mobile app",
    serviceBackend: "Backend & integrations",
    serviceDesign: "UI/UX",
    process: "Process",
    stack: "Tech",
    news: newsNavLabel.en,
    careers: careersNavLabel.en,
    about: "About",
    agents: "AI",
    agentDolphin: "Dolphin Care",
    aiTransform: "Enterprise AI transformation",
    contact: "Contact",
  },
  banner: {
    aria: "Announcement",
    text: "Dolphin Software is hiring freelancers — Sales is urgent priority, 50% deal commission. Apply today!",
    cta: "Apply now",
  },
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "Don't let technology become a [[burden]] on your business",
    subhead: "Build websites · modernize legacy systems · AI where it helps",
    support:
      "We help businesses build websites, upgrade existing systems, and apply AI only where it matters — to save time and raise efficiency.",
    trustLine: "Understand first · Clear quotes · No upsell you don't need",
    ctaPrimary: "Get a quote",
    ctaSecondary: "See website services",
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "AI integration",
    },
  },
  trust: {
    aria: "Handover deliverables",
    eyebrow: "Handover",
    title: "What you receive when the [[project ships]]",
    support:
      "Source · admin · domain · guide · warranty — ownership and ops, not just a live URL.",
    items: [
      { value: "Source", label: "You own the source / repo per agreement — no vendor lock-in." },
      { value: "CMS / Admin", label: "Content or ops admin access when included in scope." },
      { value: "Domain / Hosting", label: "Guidance to attach domain/hosting, env vars, and a deploy checklist." },
      { value: "Guide", label: "Docs / walkthrough so your team can operate independently." },
      { value: "Warranty 3–6 mo", label: "Technical-bug warranty within accepted scope — not new features." },
    ],
  },
  popularServices: popularServicesByLocale.en,
  uiGallery: uiGalleryByLocale.en,
  aiEdge: aiEdgeByLocale.en,
  capabilities: {
    eyebrow: "Website & App",
    title: "Clear [[websites]] you can actually run",
    support:
      "A short brief is enough to start. Pick the closest fit — we’ll suggest an approach and a clear quote.",
    ctaPrimary: "Get a quote",
    ctaSecondary: "See pricing packages",
    learnMore: "Learn more",
    prevPage: "Previous page",
    nextPage: "Next page",
    offers: [
      {
        id: "landing",
        title: "Landing page",
        body: "One focused page with a clear CTA — campaigns, services, quick leads.",
        meta: "Usually 3–5 days",
        href: "/services/web",
      },
      {
        id: "business",
        title: "Business website",
        body: "Company profile, services, long-term SEO — easy content updates.",
        meta: "Usually 7–14 days",
        href: "/services/web",
      },
      {
        id: "shop",
        title: "Online shop",
        body: "Catalog, cart, payments — sell online without the mess.",
        meta: "Usually 3–4 weeks",
        href: "/services/web",
      },
      {
        id: "webapp",
        title: "Web app",
        body: "Custom flows — booking, portals, internal tools your team can run.",
        meta: "Scoped to the project",
        href: "/services/web",
      },
    ],
    moreServices: [
      { label: "Mobile app", href: "/services/mobile" },
      { label: "Backend", href: "/services/backend" },
      { label: "UI/UX", href: "/services/design" },
      { label: "Payment integrations", href: "/services/integrations" },
    ],
    items: [
      {
        id: "web",
        category: "Website",
        title: "Website design & development",
        body: "Landings, corporate, or CMS that help visitors understand and act — clear forms/CTAs, on-page SEO, responsive; structured to extend later.",
        tags: ["Next.js", "React", "CMS"],
      },
      {
        id: "mobile",
        category: "Mobile",
        title: "Mobile app development",
        body: "Phone apps that let customers book / buy / track faster — UX balanced with time-to-market.",
        tags: ["Flutter", "React Native", "iOS/Android"],
      },
      {
        id: "backend",
        category: "Backend",
        title: "Backend & system integration",
        body: "Solid APIs, auth, and payments — data and business flows stay reliable as web/apps scale.",
        tags: ["Node.js", "API", "Auth"],
      },
      {
        id: "design",
        category: "UI/UX",
        title: "UI/UX & handover",
        body: "Brand-true UI + design system + walkthrough — your team runs content without depending on the studio.",
        tags: ["UI/UX", "Design system", "Handover"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "Third-party service integration",
        body: "Wire MoMo, ZaloPay, VNPay, Zalo OA into real flows — fewer ops mistakes, easier tracking, secure by default.",
        tags: ["MoMo", "Zalo", "VNPay", "Webhook"],
      },
      {
        id: "agents",
        category: "Agents",
        title: "Business agent ecosystem",
        body: "Agents attached to business workflows + MCP/internal tools — domain ops help, not just a marketing chatbot.",
        tags: ["MCP", "Agents", "Context", "AI"],
      },
    ],
  },
  siteOutcomes: {
    eyebrow: "Operating outcomes",
    title: "After handover, you can [[run these jobs]]",
    support:
      "After handover — leads, bookings, content, payments, and ops you can run; not a feature catalog.",
    items: [
      {
        title: "Capture leads and convert clearly",
        body: "Forms/CTAs and a short contact path — visitors act; your team can track sources.",
      },
      {
        title: "Stable bookings and holds",
        body: "Open slots, confirmation, and reminders — fewer availability calls and double-books.",
      },
      {
        title: "A brand visitors trust and remember",
        body: "Landing or corporate pages with focused copy — responsive, easy to scan, trust-building.",
      },
      {
        title: "Your team updates content",
        body: "CMS/admin in scope — edit posts, images, prices without calling the studio every time.",
      },
      {
        title: "Payments and messaging in real flows",
        body: "Wire MoMo / ZaloPay / VNPay / Zalo OA when needed — fewer ops mistakes than ad-hoc wiring.",
      },
      {
        title: "Internal ops less scattered",
        body: "Dashboards, business agents, or a Collect → Govern loop — one picture instead of ten tools.",
      },
    ],
  },
  whatYouGet: {
    eyebrow: "Project handover",
    title: "Every project [[ends with clear deliverables]]",
    support:
      "Clear handover — docs, ownership, and independent ops; no vendor lock-in.",
    groupOwn: "Own — ownership & foundation",
    groupRun: "Run — operations & warranty",
    items: [
      {
        title: "Locked scope & milestones",
        body: "Quotes tied to agreed outputs — periodic demos to course-correct early; no vague hourly fog.",
      },
      {
        title: "Source & operating rights",
        body: "Source / repo per agreement — you keep the right to run it onward, no contractor lock-in.",
      },
      {
        title: "Structure ready to extend",
        body: "Add pages, forms, or features by milestone — without rebuilding from scratch.",
      },
      {
        title: "On-page SEO & performance",
        body: "Responsive, clear heading/meta, sensible SMB speed — a base to improve on.",
      },
      {
        title: "Ops walkthrough",
        body: "Docs / walkthrough so your team can run content and a basic deploy checklist.",
      },
      {
        title: "3–6 month technical warranty",
        body: "Within accepted scope — new features are a separate line item, quoted first.",
      },
    ],
  },
  ops: {
    eyebrow: "Ops automation",
    title: "One operating [[lifecycle]] — stop chasing updates across tools",
    support:
      "Signals into one loop — Collect through Improve. The whole picture in a single flow.",
    cta: "Talk automation",
    before: "Before: hopping Slack / Jira / docs to know what’s on.",
    after: "After: one console, one operating loop.",
    loopHint: "Loops back to Collect",
    steps: [
      {
        name: "Collect",
        detail: "Pull signals from Slack, Jira, docs, and internal tools.",
      },
      {
        name: "Normalize",
        detail: "Clean context, cut noise, map to real business meaning.",
      },
      {
        name: "Run",
        detail: "Recurring cycles — reports, nudges, escalation on time.",
      },
      {
        name: "Observe",
        detail: "Watch operating signals — spot drift before it slips.",
      },
      {
        name: "Govern",
        detail: "Steer from one console — no more manual info hunting.",
      },
      {
        name: "Improve",
        detail: "Tune rules and cadence from what you just observed.",
      },
    ],
    chips: ["Slack", "Jira", "Docs"],
  },
  works: {
    eyebrow: "Sites shipped",
    title: "Personal & [[small-business]] sites we've shipped",
    support:
      "Each case: problem → scope → measurable result — not just pretty shots.",
    cta: "Want a site like these?",
    problemLabel: "Problem",
    scopeLabel: "Scope",
    resultLabel: "Result",
    items: [
      {
        id: "billiard",
        title: "Billiard shop ops",
        tag: "Website · Booking",
        problem: "Paper/Excel: hard to see free tables; shift revenue slips.",
        scope: "Table map, timers, add-ons, shift summary on web/ops.",
        result: "Fewer missed sessions; faster onboarding; live shift view.",
      },
      {
        id: "badminton",
        title: "Badminton court site",
        tag: "Booking",
        problem: "Customers call for availability; admins clash on slots.",
        scope: "Court intro, availability, clear booking flow.",
        result: "Fewer availability calls; more holds on the right slot.",
      },
      {
        id: "tickets",
        title: "Ticket booking & convert",
        tag: "Convert",
        problem: "Visitors browse events but drop before booking completes.",
        scope: "Browse → select → pay/hold flow tuned for conversion.",
        result: "Fewer steps to book; higher completed-booking rate.",
      },
      {
        id: "beauty",
        title: "Beauty booking",
        tag: "Beauty",
        problem: "Missed appointments, double-books; hard to self-book after hours.",
        scope: "Slot booking for nail/makeup/services with confirmation.",
        result: "Fewer missed appointments; more after-hours holds.",
      },
      {
        id: "cafe",
        title: "Cafe QR ordering",
        tag: "QR · Order",
        problem: "Peak-hour orders slow and error-prone on paper tickets.",
        scope: "Per-table QR menu, cart, push orders to counter/kitchen.",
        result: "Faster ordering; fewer wrong items; staff focus on service.",
      },
      {
        id: "clinic",
        title: "Clinic appointments",
        tag: "Clinic",
        problem: "Patients call for slots; easy double-books and missed reminders.",
        scope: "Doctor/slot calendar with confirm and reminders.",
        result: "Fewer availability calls; less double-booking.",
      },
    ],
  },
  process: {
    eyebrow: "Method",
    title: "A 5-step [[delivery]] process",
    support:
      "Discovery to handover — clear output each step, no skipped stages.",
    deliverableLabel: "Deliverable",
    steps: [
      {
        name: "Listen & discover",
        detail: "Clarify site/app goals plus budget and time constraints.",
        deliverable: "Aligned problem summary, goals, and constraints.",
      },
      {
        name: "Plan & quote",
        detail: "Break down features, milestones, cost, and handover outputs.",
        deliverable: "Scoped proposal, timeline, and clear quote.",
      },
      {
        name: "Sprint development",
        detail: "Ship UI, features, responsive, integrations — demos to course-correct early.",
        deliverable: "Sprint builds/demos for early review.",
      },
      {
        name: "Testing & UAT",
        detail: "Quality checks and acceptance with you before production.",
        deliverable: "Acceptance checklist and resolved defect list.",
      },
      {
        name: "Handover & partnership",
        detail: "Deploy, ops walkthrough, docs — plus technical-fix support once live.",
        deliverable: "Source, domain/hosting & env, admin (if any), guide, and agreed warranty.",
      },
    ],
  },
  technology: {
    eyebrow: "Our Technology",
    title: "One [[console]] for signals that used to live everywhere",
    support:
      "Before: Slack, Jira, and docs scatter the truth. After: Collect → Normalize → Run → Govern — the whole picture in a single glass-clear flow.",
    cta: "Learn More",
    live: "live",
    tabs: ["Overview", "Data", "Insights", "Alerts"],
    widgets: {
      activity: "Activity",
      pulse: "System pulse",
      nodes: "Active nodes",
    },
  },
  stack: {
    eyebrow: "Technology",
    titleLead: "Engineering strength",
    titleHighlight: "modern technology",
    support:
      "The right stack for the right problem — frontend, backend, infra, and data. Proven on real projects.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      infra: "Infra / Ops",
      data: "Data / Tools",
    },
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
      "AWS",
      "Kubernetes",
      "Grafana",
      "Elasticsearch",
      "Redis",
      "Terraform",
    ],
  },
  why: {
    eyebrow: "Why Dolphin Software",
    title: "[[Long-term partnership]], not just code delivery",
    support:
      "Clear timeline, scope, commitments — and support after handover. No jargon fog.",
    reasons: [
      {
        title: "Battle-tested experience",
        body: "7 years in production — reliability, observability, end-to-end SMB delivery.",
      },
      {
        title: "End-to-end delivery",
        body: "Discovery to deploy — one accountable team; structured to extend later.",
      },
      {
        title: "Transparent process",
        body: "Milestones, regular demos, scoped quotes — measured by deliverables.",
      },
      {
        title: "Support after handover",
        body: "Ops walkthroughs, bug warranty by agreement, optimize when reality hits.",
      },
    ],
  },
  cofounder: {
    eyebrow: "Team",
    role: "Founder",
    name: "Nguyễn Chí Thành",
    description:
      "7 years in product & systems — production ops, incident response, observability. Real ops experience for SMB web & apps: straight talk, clear scope.",
    stack: [
      "NestJS",
      "Golang",
      "TypeScript",
      "Docker",
      "GitLab CI/CD",
      "MySQL",
      "Redis",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready to [[start]] a project?",
    support:
      "Chat on Zalo or email a short brief — scope and next step, no technical background needed.",
    nextHint: "You’ll get an approach and estimated scope back.",
    ctaZalo: "Chat on Zalo",
    ctaEmail: "Send email",
    name: "Name",
    contact: "Email or Zalo",
    message: "Short project description",
    submit: "Send request",
    sent: "Opened your email app (or copy the content if the browser blocked mailto).",
    mailSubject: "Dolphin Software — request from",
    mailBodyName: "Name",
    mailBodyContact: "Contact",
    errors: {
      name: "Please enter your name",
      contact: "Please enter email or Zalo",
      message: "Please describe your project briefly",
    },
  },
  news: newsByLocale.en,
  careers: careersByLocale.en,
  faq: getFaqCopy("en"),
  footer: {
    disclaimer:
      "Stock-related content is community sharing only — not licensed investment advice and no profit guarantees.",
    groupExplore: "Explore",
    groupStudio: "Studio",
    groupUpdates: "Updates",
    groupConnect: "Connect",
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
  contactFab: {
    open: "Open quick contact",
    close: "Close quick contact",
    zalo: "Chat on Zalo",
    phone: "Call",
    email: "Send email",
  },
  cookie: {
    title: "Cookies & privacy",
    body: "We use essential cookies and browser storage to remember your language, color theme, and cookie choice — so the site loads correctly and we don’t ask again on every visit. Optional cookies (if any) only help improve the experience; we don’t sell your data to third parties. You can accept or decline non-essential cookies; declining still lets you use core site features.",
    accept: "Accept",
    decline: "Decline",
  },
  preview: {
    close: "Close",
    viewFull: "View full",
    loading: "Loading content…",
  },
  theme: {
    aria: "Color theme",
    violet: "Violet",
    ocean: "Ocean",
    forest: "Forest",
    coral: "Coral",
    slate: "Slate",
    black: "Black",
  },
};


const ja: Dictionary = {
  meta: {
    title: "Dolphin Software",
    description:
      "SMB向けWeb & Appスタジオ。ビジネス課題から運用しやすいシステムまで — スコープ明確、成果を測れる、引き渡し後も伴走。",
  },
  nav: {
    ariaMain: "メイン",
    ariaMobile: "モバイルナビ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    services: "サービス",
    web: "Web制作",
    serviceWeb: "Webサイト制作",
    serviceLanding: "ランディングページ",
    serviceMobile: "モバイルアプリ",
    serviceBackend: "Backend & 連携",
    serviceDesign: "UI/UX",
    process: "プロセス",
    stack: "技術",
    news: newsNavLabel.ja,
    careers: careersNavLabel.ja,
    about: "会社紹介",
    agents: "AI",
    agentDolphin: "Dolphin Care",
    aiTransform: "企業のAI変革",
    contact: "お問い合わせ",
  },
  banner: {
    aria: "お知らせ",
    text: "Dolphin Softwareはフリーランスを募集中 — Salesを最優先で急募、成約手数料50%。今すぐ応募！",
    cta: "応募する",
  },
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "テクノロジーを企業の[[負担]]にさせない",
    subhead: "Webサイト構築 · レガシーシステム刷新 · 適切な場所へのAI",
    support:
      "ウェブサイト構築、既存システムのアップグレード、本当に必要な場所へのAI適用で、時間を節約し効率を高めます。",
    trustLine: "課題を理解 · 見積もり明確 · 不要な提案はしない",
    ctaPrimary: "見積もりを依頼",
    ctaSecondary: "Webサービスを見る",
    visual: {
      web: "Web & App",
      automation: "業務自動化",
      ai: "AI連携",
    },
  },
  trust: {
    aria: "引き渡し成果物",
    eyebrow: "引き渡し",
    title: "プロジェクト完了時に[[受け取るもの]]",
    support:
      "Source · Admin · Domain · Guide · 保証 — 所有権と運用。公開URLだけではありません。",
    items: [
      { value: "Source", label: "合意に基づきソース / リポジトリを所有 — ベンダーロックなし。" },
      { value: "CMS / Admin", label: "スコープに含まれる場合の管理画面アクセス。" },
      { value: "Domain / Hosting", label: "ドメイン/ホスティング接続、環境変数、デプロイチェックリストの案内。" },
      { value: "ガイド", label: "チームが自走できるドキュメント / ウォークスルー。" },
      { value: "保証 3–6ヶ月", label: "検収済み範囲内の技術不具合保証 — 新機能は含みません。" },
    ],
  },
  popularServices: popularServicesByLocale.ja,
  uiGallery: uiGalleryByLocale.ja,
  aiEdge: aiEdgeByLocale.ja,
  capabilities: {
    eyebrow: "Website & App",
    title: "わかりやすく回る[[Webサイト]]を先に",
    support:
      "短いブリーフで始められます。近い形を選び、方針と見積もりをはっきりお伝えします。",
    ctaPrimary: "見積もりを依頼",
    ctaSecondary: "料金パッケージを見る",
    learnMore: "詳しく見る",
    prevPage: "前のページ",
    nextPage: "次のページ",
    offers: [
      {
        id: "landing",
        title: "ランディングページ",
        body: "CTAが明確な1ページ — キャンペーン、サービス紹介、リード獲得。",
        meta: "目安 3–5日",
        href: "/services/web",
      },
      {
        id: "business",
        title: "企業サイト",
        body: "会社概要・サービス・長期SEO — コンテンツ更新しやすい構成。",
        meta: "目安 7–14日",
        href: "/services/web",
      },
      {
        id: "shop",
        title: "ECサイト",
        body: "カタログ、カート、決済 — すっきりオンライン販売。",
        meta: "目安 3–4週間",
        href: "/services/web",
      },
      {
        id: "webapp",
        title: "Webアプリ",
        body: "予約・管理・ポータルなど、業務フローに合わせた画面。",
        meta: "スコープに応じて",
        href: "/services/web",
      },
    ],
    moreServices: [
      { label: "モバイルアプリ", href: "/services/mobile" },
      { label: "バックエンド", href: "/services/backend" },
      { label: "UI/UX", href: "/services/design" },
      { label: "決済連携", href: "/services/integrations" },
    ],
    items: [
      {
        id: "web",
        category: "Website",
        title: "Webサイト制作・デザイン",
        body: "訪問者が理解し行動できるLP・コーポレート・CMS — 明確なフォーム/CTA、オンページSEO、レスポンシブ。後から拡張しやすい構造。",
        tags: ["Next.js", "React", "CMS"],
      },
      {
        id: "mobile",
        category: "Mobile",
        title: "モバイルアプリ開発",
        body: "予約・購入・追跡をスマホで速く — UXとリリース速度のバランス。",
        tags: ["Flutter", "React Native", "iOS/Android"],
      },
      {
        id: "backend",
        category: "Backend",
        title: "バックエンド & システム連携",
        body: "堅牢なAPI・認証・決済 — Web/Appが伸びてもデータと業務フローが安定。",
        tags: ["Node.js", "API", "Auth"],
      },
      {
        id: "design",
        category: "UI/UX",
        title: "UI/UX & 引き渡し",
        body: "ブランドに沿ったUI + デザインシステム + ガイド — スタジオ依存を減らし自走運用。",
        tags: ["UI/UX", "Design system", "Handover"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "外部サービス連携",
        body: "MoMo / ZaloPay / VNPay / Zalo OA を実フローへ — 運用ミスを減らし、追跡しやすく安全に。",
        tags: ["MoMo", "Zalo", "VNPay", "Webhook"],
      },
      {
        id: "agents",
        category: "Agents",
        title: "ビジネス向けエージェント生態系",
        body: "業務フロー + MCP/社内ツールに接続するエージェント — マーケ用チャットボットではなく運用支援。",
        tags: ["MCP", "Agents", "Context", "AI"],
      },
    ],
  },
  siteOutcomes: {
    eyebrow: "運用成果",
    title: "引き渡し後に[[回せる仕事]]",
    support:
      "引き渡し後 — リード・予約・コンテンツ・決済・運用が回る。機能カタログではありません。",
    items: [
      {
        title: "リード獲得と転換をはっきり",
        body: "フォーム／CTAと短い連絡導線 — 訪問者が動き、チームが流入元を追えます。",
      },
      {
        title: "安定した予約・枠押さえ",
        body: "空き枠、確認、リマインド — 空き確認の電話とダブルブッキングを減らします。",
      },
      {
        title: "信頼され、覚えられるブランド",
        body: "要点が伝わるランディング／コーポレート — レスポンシブで、信頼を積み上げます。",
      },
      {
        title: "チーム自身でコンテンツ更新",
        body: "スコープ内のCMS／管理画面 — 記事・画像・価格をスタジオなしで更新。",
      },
      {
        title: "決済・メッセージを実フローへ",
        body: "必要なら MoMo / ZaloPay / VNPay / Zalo OA を接続 — 場当たり接続より運用ミスが減ります。",
      },
      {
        title: "社内運用の散らばりを抑える",
        body: "ダッシュボード、業務エージェント、Collect → Govern — 十のツールではなく一枚の絵。",
      },
    ],
  },
  whatYouGet: {
    eyebrow: "プロジェクト引き渡し",
    title: "すべてのプロジェクトは[[明確な成果物で終わる]]",
    support:
      "明確な引き渡し — ドキュメント、所有権、自立運用。ベンダーロックなし。",
    groupOwn: "Own — 所有と基盤",
    groupRun: "Run — 運用と保証",
    items: [
      {
        title: "確定したスコープとマイルストーン",
        body: "合意した成果物に紐づく見積もり — 定期デモで早期修正。曖昧な工数ベースではありません。",
      },
      {
        title: "ソースと運用権",
        body: "契約どおりのソース／リポジトリ — 運用を続ける権利はあなた側。ベンダーロックなし。",
      },
      {
        title: "後から足せる構造",
        body: "ページ・フォーム・機能をマイルストーンで追加 — ゼロからの作り直しを避けます。",
      },
      {
        title: "オンページSEOと性能",
        body: "レスポンシブ、見出し／メタ明確、SMB向けの妥当な速度 — 改善の土台。",
      },
      {
        title: "運用ウォークスルー",
        body: "ドキュメント／ウォークスルーで、コンテンツ運用と基本デプロイを自走。",
      },
      {
        title: "技術保証 3〜6か月",
        body: "検収範囲内 — 新機能は別項目として、先に見積もります。",
      },
    ],
  },
  ops: {
    eyebrow: "業務自動化",
    title: "ひとつの運用[[ライフサイクル]] — ツール横断の追いかけをやめる",
    support:
      "シグナルを一つのループへ — Collect から Improve。全体を一望。",
    cta: "自動化について相談する",
    before: "以前: Slack / Jira / Docs を行き来して状況把握。",
    after: "以後: ひとつのコンソール、ひとつの運用ループ。",
    loopHint: "Collect へ戻る",
    steps: [
      {
        name: "Collect",
        detail: "Slack、Jira、Docs、社内ツールからシグナルを集める。",
      },
      {
        name: "Normalize",
        detail: "文脈を整え、ノイズを削り、業務の意味にマッピング。",
      },
      {
        name: "Run",
        detail: "定周期で回す — レポート、リマインド、適切なエスカレーション。",
      },
      {
        name: "Observe",
        detail: "運用シグナルを見る — 遅れる前にズレを捉える。",
      },
      {
        name: "Govern",
        detail: "ひとつのコンソールから指揮 — 手作業の情報収集は不要。",
      },
      {
        name: "Improve",
        detail: "観察した根拠でルールと周期を調整する。",
      },
    ],
    chips: ["Slack", "Jira", "Docs"],
  },
  works: {
    eyebrow: "納品実績",
    title: "個人・スモールビジネス向けサイト[[実績]]",
    support:
      "各事例は課題 → 範囲 → 測定可能な成果 — 見た目だけの紹介ではありません。",
    cta: "似たサイトを作りたい",
    problemLabel: "課題",
    scopeLabel: "範囲",
    resultLabel: "結果",
    items: [
      {
        id: "billiard",
        title: "ビリヤード店管理",
        tag: "Website · Booking",
        problem: "紙/Excelで空き卓が分かりにくく、シフト売上がズレやすい。",
        scope: "卓マップ、タイマー、付帯サービス、シフト集計のWeb/ops。",
        result: "取りこぼし減、習熟が早い、シフト状況をいつでも確認。",
      },
      {
        id: "badminton",
        title: "バドミントンコートサイト",
        tag: "Booking",
        problem: "空き確認の電話が多く、枠の取り合いが起きる。",
        scope: "コート紹介、空き状況、明確な予約フロー。",
        result: "空き確認電話が減り、正しい枠の確保が増える。",
      },
      {
        id: "tickets",
        title: "チケット予約 & コンバート",
        tag: "Convert",
        problem: "イベント閲覧後、予約完了前に離脱する。",
        scope: "閲覧 → 選択 → 支払い/確保の転換重視フロー。",
        result: "予約ステップ短縮、完了率が向上。",
      },
      {
        id: "beauty",
        title: "美容予約",
        tag: "Beauty",
        problem: "予約漏れ・ダブルブッキング、時間外の自己予約が難しい。",
        scope: "ネイル/メイク等のスロット予約と確認。",
        result: "予約漏れ減、時間外の確保が増える。",
      },
      {
        id: "cafe",
        title: "カフェ QR 注文",
        tag: "QR · Order",
        problem: "ピーク時の手書き注文が遅く誤りやすい。",
        scope: "卓QRメニュー、カート、厨房/カウンターへの送信。",
        result: "注文が速い、誤注文減、接客に集中しやすい。",
      },
      {
        id: "clinic",
        title: "クリニック予約",
        tag: "Clinic",
        problem: "空き確認の電話が多く、枠重複やリマインド漏れ。",
        scope: "医師/スロットカレンダーと確定・リマインド。",
        result: "空き確認電話が減り、ダブルブッキング抑制。",
      },
    ],
  },
  process: {
    eyebrow: "進め方",
    title: "引き渡しまでの[[5ステップ]]",
    support:
      "ディスカバリーから引き渡しまで — 各ステップに明確な成果物。飛ばしなし。",
    deliverableLabel: "成果物",
    steps: [
      {
        name: "ヒアリング & 調査",
        detail: "サイト／アプリの目的と予算・期限の制約を明確にします。",
        deliverable: "課題・目標・制約の合意サマリー。",
      },
      {
        name: "計画 & 見積もり",
        detail: "機能・マイルストーン・費用・引き渡し成果物を分解します。",
        deliverable: "スコープ提案・スケジュール・明確な見積もり。",
      },
      {
        name: "スプリント開発",
        detail: "UI・機能・レスポンシブ・連携を実装し、定期デモで早期修正。",
        deliverable: "早期レビュー用のスプリントビルド/デモ。",
      },
      {
        name: "テスト & UAT",
        detail: "本番前に品質確認とお客様検収を行います。",
        deliverable: "検収チェックリストと対応済み不具合一覧。",
      },
      {
        name: "引き渡し & 伴走",
        detail: "デプロイ、利用ガイド、ドキュメント — 稼働後の技術サポートも含む。",
        deliverable: "ソース、ドメイン/ホスティング & 環境、管理画面（あれば）、ガイド、技術保証。",
      },
    ],
  },
  technology: {
    eyebrow: "私たちの技術",
    title: "散らばっていた[[シグナル]]を、ひとつの[[コンソール]]へ",
    support:
      "以前: Slack・Jira・ドキュメントに真実が分散。今: 収集 → 正規化 → 実行 → ガバナンス — 全体像をひとつの流れで。",
    cta: "詳しく見る",
    live: "live",
    tabs: ["概要", "データ", "インサイト", "アラート"],
    widgets: {
      activity: "アクティビティ",
      pulse: "システムパルス",
      nodes: "稼働ノード",
    },
  },
  stack: {
    eyebrow: "技術",
    titleLead: "確かなエンジニアリング",
    titleHighlight: "モダンな技術",
    support:
      "課題に合うスタックを選ぶ — フロント、バックエンド、インフラ、データ。実務で検証済み。",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      infra: "Infra / Ops",
      data: "Data / Tools",
    },
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
      "AWS",
      "Kubernetes",
      "Grafana",
      "Elasticsearch",
      "Redis",
      "Terraform",
    ],
  },
  why: {
    eyebrow: "Dolphin Softwareを選ぶ理由",
    title: "コード納品だけで終わらない、[[長期伴走]]",
    support:
      "スケジュール・スコープ・コミットメント・引き渡し後サポートを明確に。",
    reasons: [
      {
        title: "実務経験",
        body: "本番7年 — 信頼性・Observability・SMB向けエンドツーエンド納品。",
      },
      {
        title: "エンドツーエンド納品",
        body: "ディスカバリーからデプロイまで — 一貫責任。後から拡張可能。",
      },
      {
        title: "透明なプロセス",
        body: "マイルストーン、定期デモ、明確な見積もり — 成果物で測る。",
      },
      {
        title: "引き渡し後の伴走",
        body: "運用ガイド、合意の不具合保証、実運用での最適化。",
      },
    ],
  },
  cofounder: {
    eyebrow: "チーム",
    role: "Founder",
    name: "Nguyễn Chí Thành",
    description:
      "7年のプロダクト＆システム — production ops、障害対応、Observability。SMB向けWeb/Appに実運用経験を：率直、スコープ明確。",
    stack: [
      "NestJS",
      "Golang",
      "TypeScript",
      "Docker",
      "GitLab CI/CD",
      "MySQL",
      "Redis",
    ],
  },
  contact: {
    eyebrow: "お問い合わせ",
    title: "[[プロジェクト]]を始めませんか？",
    support:
      "Zaloで素早く相談、または短いメールで概要を — スコープと次の一歩。技術知識は不要です。",
    nextHint: "方針と概算スコープで返信します。",
    ctaZalo: "Zaloで相談",
    ctaEmail: "メールを送る",
    name: "お名前",
    contact: "メールまたはZalo",
    message: "プロジェクトの概要",
    submit: "送信する",
    sent: "メールアプリを開きました（ブラウザがmailtoをブロックした場合は内容をコピーしてください）。",
    mailSubject: "Dolphin Software — お問い合わせ",
    mailBodyName: "お名前",
    mailBodyContact: "連絡先",
    errors: {
      name: "お名前を入力してください",
      contact: "メールまたはZaloを入力してください",
      message: "プロジェクトの概要を入力してください",
    },
  },
  news: newsByLocale.ja,
  careers: careersByLocale.ja,
  faq: getFaqCopy("ja"),
  footer: {
    disclaimer:
      "証券関連の内容はコミュニティ共有であり、認可を受けた投資助言ではなく、利益を保証するものでもありません。",
    groupExplore: "Explore",
    groupStudio: "Studio",
    groupUpdates: "Updates",
    groupConnect: "Connect",
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
  contactFab: {
    open: "クイック連絡を開く",
    close: "クイック連絡を閉じる",
    zalo: "Zaloでチャット",
    phone: "電話する",
    email: "メールを送る",
  },
  cookie: {
    title: "Cookieとプライバシー",
    body: "言語・テーマ・Cookieの選択を記憶するため、必要なCookieとブラウザ保存を使います。これによりページが正しく表示され、毎回の再確認を避けられます。任意のCookie（ある場合）は体験向上のみに使い、第三者へのデータ販売は行いません。必須以外は同意または拒否でき、拒否してもサイトの基本機能はそのまま利用できます。",
    accept: "同意する",
    decline: "拒否する",
  },
  preview: {
    close: "閉じる",
    viewFull: "フルで見る",
    loading: "読み込み中…",
  },
  theme: {
    aria: "カラーテーマ",
    violet: "バイオレット",
    ocean: "オーシャン",
    forest: "フォレスト",
    coral: "コーラル",
    slate: "スレート",
    black: "ブラック",
  },
};


export const dictionaries: Record<Locale, Dictionary> = { vi, en, ja };

export function getDictionary(locale: Locale): Dictionary {
  const dict = dictionaries[locale] ?? dictionaries.vi;
  const withBanner = {
    ...dict,
    banner: dict.banner ?? dictionaries.vi.banner,
  };
  return applyHomepageLang(locale, withBanner);
}
