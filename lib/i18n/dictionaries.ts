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
    customAgent: "AI Agent",
    customAgentItem: "AI Agent theo yêu cầu",
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
    eyebrow: "Web & App Studio",
    aiPill: "AI tăng hiệu suất",
    headline: "Để anh chị [[bớt lo]] chuyện website",
    subhead:
      "Làm web rõ ý, dễ chạy — rồi dùng AI để tối ưu vận hành, tăng hiệu suất",
    support:
      "Anh chị nói muốn gì; mình đề xuất cách làm và báo giá rõ. Website là nền; AI giúp bớt việc tay, chạy việc nhanh hơn.",
    trustLine: "Dễ hiểu · Báo giá rõ · AI để vận hành nhẹ hơn",
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
      {
        id: "custom-agent",
        category: "Agents",
        title: "AI Agent theo yêu cầu",
        body: "Nạp nghiệp vụ thật + nối hệ thống đang chạy — agent gánh một khâu tới kết quả, không chatbot kịch bản.",
        tags: ["Custom agent", "Ops", "Zalo/CRM", "AI"],
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
    customAgent: "AI Agent",
    customAgentItem: "Custom AI agents",
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
    eyebrow: "Web & App Studio",
    aiPill: "AI for efficiency",
    headline: "So you can [[worry less]] about your website",
    subhead:
      "A clear site you can run — then use AI to streamline ops and boost efficiency",
    support:
      "Tell us what you need; we'll suggest an approach and a clear quote. The website is the foundation; AI helps cut manual work and move faster.",
    trustLine: "Plain language · Clear quotes · AI to lighten ops",
    ctaPrimary: "Get a quote",
    ctaSecondary: "See website services",
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "AI Integrate",
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
      {
        id: "custom-agent",
        category: "Agents",
        title: "Custom AI agents to order",
        body: "Load your real process + connect running systems — one agent owns one job through to outcomes, not a scripted chatbot.",
        tags: ["Custom agent", "Ops", "CRM", "AI"],
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
    eyebrow: "Engagement outputs",
    title: "Every project [[ends with clear deliverables]]",
    support:
      "Clear handover — docs, ownership, and independent ops; no vendor lock-in.",
    groupOwn: "Own — ownership & foundation",
    groupRun: "Run — operations & warranty",
    items: [
      {
        title: "Locked scope & milestones",
        body: "Quotes tied to agreed outputs — periodic demos to course-correct early.",
      },
      {
        title: "Source & operating rights",
        body: "Source / repo per agreement — you keep the right to run it onward.",
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
        title: "3–6 month bug warranty",
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

const de: Dictionary = {
  meta: {
    title: "Dolphin Software",
    description:
      "Web- & App-Studio für KMUs: Websites, Mobile, Automation und AI — leicht bedienbar und betreibbar, klarer Scope, Support nach der Übergabe.",
  },
  nav: {
    ariaMain: "Hauptnavigation",
    ariaMobile: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    services: "Leistungen",
    web: "Websites",
    serviceWeb: "Website-Design",
    serviceLanding: "Landingpage",
    serviceMobile: "Mobile App",
    serviceBackend: "Backend & Integrationen",
    serviceDesign: "UI/UX",
    process: "Ablauf",
    stack: "Technik",
    news: newsNavLabel.de,
    careers: careersNavLabel.de,
    about: "Über uns",
    customAgent: "AI Agent",
    customAgentItem: "Individuelle AI-Agents",
    agentDolphin: "Dolphin Care",
    aiTransform: "KI-Transformation",
    contact: "Kontakt",
  },
  banner: {
    aria: "Ankündigung",
    text: "Dolphin Software sucht Freelancer — Sales mit Priorität, 50% Deal-Provision. Jetzt bewerben!",
    cta: "Jetzt bewerben",
  },
  hero: {
    eyebrow: "Web & App Studio",
    aiPill: "AI für Effizienz",
    headline: "Damit Sie sich um die Website [[weniger sorgen]]",
    subhead:
      "Eine klare Website, die läuft — dann AI für schlankere Abläufe und mehr Effizienz",
    support:
      "Sagen Sie uns, was Sie brauchen; wir schlagen den Weg vor und geben ein klares Angebot. Die Website ist die Basis; AI reduziert Handarbeit und beschleunigt den Betrieb.",
    trustLine: "Verständlich · Klares Angebot · AI für leichtere Ops",
    ctaPrimary: "Angebot anfordern",
    ctaSecondary: "Website-Services ansehen",
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "AI-Integration",
    },
  },
  trust: {
    aria: "Übergabe-Ergebnisse",
    eyebrow: "Übergabe",
    title: "Was Sie bei [[Projektabschluss]] erhalten",
    support:
      "Source · Admin · Domain · Guide · Garantie — Eigentum und Betrieb, nicht nur eine Live-URL.",
    items: [
      { value: "Source", label: "Sie besitzen Quellcode / Repo laut Vereinbarung — kein Vendor-Lock-in." },
      { value: "CMS / Admin", label: "Content- oder Ops-Admin-Zugang, wenn im Scope enthalten." },
      { value: "Domain / Hosting", label: "Anleitung zu Domain/Hosting, Env-Variablen und Deploy-Checkliste." },
      { value: "Anleitung", label: "Doku / Walkthrough, damit Ihr Team selbstständig arbeiten kann." },
      { value: "Garantie 3–6 Mon.", label: "Technische Fehlergarantie im abgenommenen Scope — keine neuen Features." },
    ],
  },
  popularServices: popularServicesByLocale.de,
  uiGallery: uiGalleryByLocale.de,
  aiEdge: aiEdgeByLocale.de,
  capabilities: {
    eyebrow: "Website & App",
    title: "Klare [[Websites]], die Sie wirklich betreiben können",
    support:
      "Ein kurzes Briefing reicht zum Start. Wählen Sie die nächste Passung — wir schlagen den Weg vor und geben ein klares Angebot.",
    ctaPrimary: "Angebot anfordern",
    ctaSecondary: "Preispakete ansehen",
    learnMore: "Mehr erfahren",
    prevPage: "Vorherige Seite",
    nextPage: "Nächste Seite",
    offers: [
      {
        id: "landing",
        title: "Landingpage",
        body: "Eine fokussierte Seite mit klarer CTA — Kampagnen, Services, schnelle Leads.",
        meta: "Meist 3–5 Tage",
        href: "/services/web",
      },
      {
        id: "business",
        title: "Unternehmenswebsite",
        body: "Firmenprofil, Leistungen, langfristiges SEO — Inhalte leicht aktualisieren.",
        meta: "Meist 7–14 Tage",
        href: "/services/web",
      },
      {
        id: "shop",
        title: "Online-Shop",
        body: "Katalog, Warenkorb, Zahlungen — online verkaufen ohne Chaos.",
        meta: "Meist 3–4 Wochen",
        href: "/services/web",
      },
      {
        id: "webapp",
        title: "Web-App",
        body: "Eigene Abläufe — Buchung, Portale, Tools, die Ihr Team bedienen kann.",
        meta: "Nach Projektumfang",
        href: "/services/web",
      },
    ],
    moreServices: [
      { label: "Mobile-App", href: "/services/mobile" },
      { label: "Backend", href: "/services/backend" },
      { label: "UI/UX", href: "/services/design" },
      { label: "Zahlungsintegrationen", href: "/services/integrations" },
    ],
    items: [
      {
        id: "web",
        category: "Website",
        title: "Website-Design & Entwicklung",
        body: "Landings, Corporate oder CMS, die Besucher verstehen und handeln lassen — klare Formulare/CTAs, On-Page-SEO, responsive; erweiterbar gebaut.",
        tags: ["Next.js", "React", "CMS"],
      },
      {
        id: "mobile",
        category: "Mobile",
        title: "Mobile-App-Entwicklung",
        body: "Apps, mit denen Kunden schneller buchen / kaufen / tracken — UX und Time-to-Market im Gleichgewicht.",
        tags: ["Flutter", "React Native", "iOS/Android"],
      },
      {
        id: "backend",
        category: "Backend",
        title: "Backend & Systemintegration",
        body: "Stabile APIs, Auth und Zahlungen — Daten und Geschäftsflüsse bleiben zuverlässig beim Skalieren.",
        tags: ["Node.js", "API", "Auth"],
      },
      {
        id: "design",
        category: "UI/UX",
        title: "UI/UX & Übergabe",
        body: "Markengetreue UI + Design System + Einweisung — Ihr Team betreibt Inhalte ohne Studio-Abhängigkeit.",
        tags: ["UI/UX", "Design system", "Handover"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "Drittanbieter-Integration",
        body: "MoMo, ZaloPay, VNPay, Zalo OA in echte Flows einbinden — weniger Ops-Fehler, leichteres Tracking, sicher.",
        tags: ["MoMo", "Zalo", "VNPay", "Webhook"],
      },
      {
        id: "agents",
        category: "Agents",
        title: "Agent-Ökosystem für Business",
        body: "Agents an Geschäftsprozessen + MCP/interne Tools — Domain-Ops-Hilfe, nicht nur Marketing-Chatbot.",
        tags: ["MCP", "Agents", "Context", "AI"],
      },
      {
        id: "custom-agent",
        category: "Agents",
        title: "Individuelle AI-Agents",
        body: "Echte Abläufe laden + laufende Systeme anbinden — ein Agent, ein Job bis zum Ergebnis, kein Skript-Chatbot.",
        tags: ["Custom agent", "Ops", "CRM", "AI"],
      },
    ],
  },
  siteOutcomes: {
    eyebrow: "Betriebsergebnisse",
    title: "Nach der Übergabe [[laufen diese Aufgaben]]",
    support:
      "Nach der Übergabe — Leads, Termine, Inhalte, Zahlungen und Ops, die laufen; kein Feature-Katalog.",
    items: [
      {
        title: "Leads klar erfassen und konvertieren",
        body: "Formulare/CTAs und kurzer Kontaktpfad — Besucher handeln; Ihr Team kann Quellen nachverfolgen.",
      },
      {
        title: "Stabile Termine und Reservierungen",
        body: "Freie Slots, Bestätigung und Erinnerungen — weniger Verfügbarkeitsanrufe und Doppelbuchungen.",
      },
      {
        title: "Marke, der man vertraut und die man erinnert",
        body: "Landing oder Corporate mit klarem Fokus — responsiv, schnell erfassbar, vertrauensbildend.",
      },
      {
        title: "Ihr Team pflegt Inhalte selbst",
        body: "CMS/Admin im Scope — Beiträge, Bilder, Preise ändern ohne jedes Mal das Studio.",
      },
      {
        title: "Zahlung und Messaging in echten Flows",
        body: "MoMo / ZaloPay / VNPay / Zalo OA bei Bedarf — weniger Ops-Fehler als Ad-hoc-Anbindung.",
      },
      {
        title: "Interne Ops weniger zersplittert",
        body: "Dashboards, Business-Agents oder Collect → Govern — ein Bild statt zehn Tools.",
      },
    ],
  },
  whatYouGet: {
    eyebrow: "Engagement-Outputs",
    title: "Jedes Projekt [[endet mit klaren Deliverables]]",
    support:
      "Klare Übergabe — Docs, Eigentum, unabhängiger Betrieb; kein Vendor-Lock-in.",
    groupOwn: "Own — Eigentum & Fundament",
    groupRun: "Run — Betrieb & Garantie",
    items: [
      {
        title: "Scope & Meilensteine fest",
        body: "Angebote an vereinbarte Outputs — Demos zur frühen Kurskorrektur.",
      },
      {
        title: "Source & Betriebsrechte",
        body: "Source / Repo laut Vereinbarung — Sie behalten das Recht zum Weiterbetrieb.",
      },
      {
        title: "Struktur für Erweiterung",
        body: "Seiten, Formulare oder Features per Meilenstein — ohne Neubau von null.",
      },
      {
        title: "On-Page-SEO & Performance",
        body: "Responsiv, klare Heading/Meta, sinnvolle SMB-Speed — Basis zum Nachziehen.",
      },
      {
        title: "Ops-Walkthrough",
        body: "Docs / Walkthrough für Inhalte und eine Basis-Deploy-Checkliste.",
      },
      {
        title: "3–6 Monate Bug-Garantie",
        body: "Im abgenommenen Scope — neue Features separat, vorher angeboten.",
      },
    ],
  },
  ops: {
    eyebrow: "Ops-Automatisierung",
    title: "Ein Operating-[[Lifecycle]] — Schluss mit Tool-Hopping",
    support:
      "Signale in eine Schleife — Collect bis Improve. Gesamtbild in einem Fluss.",
    cta: "Über Automatisierung sprechen",
    before: "Vorher: Slack / Jira / Docs springen für den Stand.",
    after: "Nachher: eine Konsole, ein Operating-Loop.",
    loopHint: "Zurück zu Collect",
    steps: [
      {
        name: "Collect",
        detail: "Signale aus Slack, Jira, Docs und internen Tools holen.",
      },
      {
        name: "Normalize",
        detail: "Kontext bereinigen, Rauschen entfernen, Business-Sinn zuordnen.",
      },
      {
        name: "Run",
        detail: "Wiederkehrende Zyklen — Reports, Nudges, Eskalation zur rechten Zeit.",
      },
      {
        name: "Observe",
        detail: "Betriebssignale beobachten — Drift sehen, bevor es rutscht.",
      },
      {
        name: "Govern",
        detail: "Steuern aus einer Konsole — ohne manuelles Informationssammeln.",
      },
      {
        name: "Improve",
        detail: "Regeln und Takt aus dem Beobachteten nachschärfen.",
      },
    ],
    chips: ["Slack", "Jira", "Docs"],
  },
  works: {
    eyebrow: "Gelieferte Sites",
    title: "Personal- & [[kleine Business]]-Websites",
    support:
      "Jeder Case: Problem → Scope → messbares Ergebnis — nicht nur schöne Screenshots.",
    cta: "Ähnliche Website bauen?",
    problemLabel: "Problem",
    scopeLabel: "Scope",
    resultLabel: "Ergebnis",
    items: [
      {
        id: "billiard",
        title: "Billard-Shop-Ops",
        tag: "Website · Booking",
        problem: "Papier/Excel: freie Tische unklar; Schichtumsatz rutscht.",
        scope: "Tischkarte, Timer, Zusatzleistungen, Schichtübersicht.",
        result: "Weniger verpasste Sessions; schnelleres Onboarding; Live-Schichtblick.",
      },
      {
        id: "badminton",
        title: "Badminton-Platz-Website",
        tag: "Booking",
        problem: "Kunden rufen wegen Verfügbarkeit an; Slots kollidieren.",
        scope: "Platzvorstellung, Verfügbarkeit, klarer Buchungsflow.",
        result: "Weniger Verfügbarkeitsanrufe; mehr bestätigte Holds.",
      },
      {
        id: "tickets",
        title: "Ticket-Booking & Convert",
        tag: "Convert",
        problem: "Besucher sehen Events, brechen vor der Buchung ab.",
        scope: "Browse → wählen → zahlen/halten mit Convert-Fokus.",
        result: "Kürzerer Buchungsweg; höhere Abschlussrate.",
      },
      {
        id: "beauty",
        title: "Beauty-Booking",
        tag: "Beauty",
        problem: "Verpasste Termine, Doppelbuchungen; schwer nach Feierabend buchen.",
        scope: "Slot-Buchung für Nail/Makeup/Services mit Bestätigung.",
        result: "Weniger verpasste Termine; mehr Holds außerhalb der Bürozeit.",
      },
      {
        id: "cafe",
        title: "Cafe QR-Bestellung",
        tag: "QR · Order",
        problem: "Stoßzeit: handgeschriebene Bestellungen langsam und fehleranfällig.",
        scope: "Tisch-QR-Menü, Warenkorb, Orders an Theke/Küche.",
        result: "Schnellere Bestellung; weniger Falschorders; mehr Servicefokus.",
      },
      {
        id: "clinic",
        title: "Klinik-Termine",
        tag: "Clinic",
        problem: "Patienten rufen wegen Slots an; Doppelbuchungen und Reminder-Lücken.",
        scope: "Arzt/Slot-Kalender mit Bestätigung und Erinnerungen.",
        result: "Weniger Verfügbarkeitsanrufe; weniger Doppelbuchungen.",
      },
    ],
  },
  process: {
    eyebrow: "Methode",
    title: "5-Schritte-[[Übergabeprozess]]",
    support:
      "Von Discovery bis Übergabe — jeder Schritt mit klarem Output, keine Sprünge.",
    deliverableLabel: "Deliverable",
    steps: [
      {
        name: "Zuhören & Analyse",
        detail: "Ziele der Website/App klären plus Budget- und Zeitrahmen.",
        deliverable: "Abgestimmte Problem-/Ziel-/Rahmen-Zusammenfassung.",
      },
      {
        name: "Planung & Angebot",
        detail: "Features, Meilensteine, Kosten und Übergabe-Lieferumfang aufschlüsseln.",
        deliverable: "Scope-Vorschlag, Zeitplan und klares Angebot.",
      },
      {
        name: "Sprint-Entwicklung",
        detail: "UI, Features, Responsive, Anbindungen — Demos zur frühen Korrektur.",
        deliverable: "Sprint-Builds/Demos zur frühen Review.",
      },
      {
        name: "Tests & UAT",
        detail: "Qualitätssicherung und Abnahme mit Ihnen vor dem Go-live.",
        deliverable: "Abnahme-Checkliste und behobene Mängelliste.",
      },
      {
        name: "Übergabe & Begleitung",
        detail: "Deploy, Nutzungswalkthrough, Doku — plus Support bei Technikfehlern im Betrieb.",
        deliverable: "Source, Domain/Hosting & Env, Admin (falls vorhanden), Anleitung und Technikgarantie.",
      },
    ],
  },
  technology: {
    eyebrow: "Unsere Technologie",
    title: "Eine [[Konsole]] für Signale, die früher überall lagen",
    support:
      "Früher: Slack, Jira und Docs streuen die Wahrheit. Danach: Sammeln → Normalisieren → Ausführen → Steuern — das ganze Bild in einem klaren Fluss.",
    cta: "Mehr erfahren",
    live: "live",
    tabs: ["Übersicht", "Daten", "Insights", "Alerts"],
    widgets: {
      activity: "Aktivität",
      pulse: "Systempuls",
      nodes: "Aktive Nodes",
    },
  },
  stack: {
    eyebrow: "Technologie",
    titleLead: "Technische Stärke",
    titleHighlight: "moderne Technologie",
    support:
      "Der passende Stack für das Problem — Frontend, Backend, Infra und Data. In realen Projekten erprobt.",
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
    eyebrow: "Warum Dolphin Software",
    title: "[[Langfristige Partnerschaft]], nicht nur Code-Übergabe",
    support:
      "Klarer Zeitplan, Scope, Zusagen — und Support nach der Übergabe.",
    reasons: [
      {
        title: "Praxisnahe Erfahrung",
        body: "7 Jahre Production — Reliability, Observability, End-to-End für SMB.",
      },
      {
        title: "End-to-End-Lieferung",
        body: "Discovery bis Deploy — ein verantwortliches Team; später erweiterbar.",
      },
      {
        title: "Transparenter Prozess",
        body: "Meilensteine, Demos, klare Scope-Angebote — gemessen an Deliverables.",
      },
      {
        title: "Support nach Übergabe",
        body: "Ops-Walkthroughs, Bug-Garantie laut Vereinbarung, Optimierung im Betrieb.",
      },
    ],
  },
  cofounder: {
    eyebrow: "Team",
    role: "Founder",
    name: "Nguyễn Chí Thành",
    description:
      "7 Jahre Product & Systems — Production-Ops, Incident Response, Observability. Echte Ops-Erfahrung für SMB Web & Apps: klar, fair im Scope.",
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
    eyebrow: "Kontakt",
    title: "Bereit, ein [[Projekt]] zu starten?",
    support:
      "Zalo-Chat oder kurze E-Mail mit Brief — Scope und nächster Schritt, ohne Technikkenntnisse.",
    nextHint: "Antwort mit Vorgehen und geschätztem Scope.",
    ctaZalo: "Zalo-Chat",
    ctaEmail: "E-Mail senden",
    name: "Name",
    contact: "E-Mail oder Zalo",
    message: "Kurze Projektbeschreibung",
    submit: "Anfrage senden",
    sent: "E-Mail-App geöffnet (oder Inhalt kopieren, falls der Browser mailto blockiert).",
    mailSubject: "Dolphin Software — Anfrage von",
    mailBodyName: "Name",
    mailBodyContact: "Kontakt",
    errors: {
      name: "Bitte Namen eingeben",
      contact: "Bitte E-Mail oder Zalo eingeben",
      message: "Bitte Projekt kurz beschreiben",
    },
  },
  news: newsByLocale.de,
  careers: careersByLocale.de,
  faq: getFaqCopy("de"),
  footer: {
    disclaimer:
      "Inhalte zu Aktien dienen nur dem Community-Austausch — keine lizenzierte Anlageberatung und keine Gewinngarantie.",
    groupExplore: "Entdecken",
    groupStudio: "Studio",
    groupUpdates: "Updates",
    groupConnect: "Kontakt",
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
  contactFab: {
    open: "Schnellkontakt öffnen",
    close: "Schnellkontakt schließen",
    zalo: "Zalo-Chat",
    phone: "Anrufen",
    email: "E-Mail senden",
  },
  cookie: {
    title: "Cookies & Datenschutz",
    body: "Wir nutzen notwendige Cookies und Browser-Speicher, um Sprache, Farbschema und Ihre Cookie-Wahl zu merken — damit die Seite korrekt lädt und wir nicht bei jedem Besuch erneut fragen. Optionale Cookies (falls vorhanden) dienen nur der besseren Nutzung; wir verkaufen Ihre Daten nicht an Dritte. Sie können nicht notwendige Cookies akzeptieren oder ablehnen; bei Ablehnung bleiben die Kernfunktionen nutzbar.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
  },
  preview: {
    close: "Schließen",
    viewFull: "Vollansicht",
    loading: "Inhalt wird geladen…",
  },
  theme: {
    aria: "Farbthema",
    violet: "Violett",
    ocean: "Ozean",
    forest: "Wald",
    coral: "Koralle",
    slate: "Schiefer",
    black: "Schwarz",
  },
};

const ja: Dictionary = {
  meta: {
    title: "Dolphin Software",
    description:
      "SMB向けWeb & Appスタジオ。ウェブサイト、モバイル、業務自動化、AI連携 — 使いやすく運用しやすく、見積もり範囲が明確で、引き渡し後も伴走します。",
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
    about: "紹介",
    customAgent: "AI Agent",
    customAgentItem: "カスタム AI Agent",
    agentDolphin: "Dolphin Care",
    aiTransform: "企業の AI 変革",
    contact: "お問い合わせ",
  },
  banner: {
    aria: "お知らせ",
    text: "Dolphin Softwareはフリーランス募集中 — Salesは急募、案件手数料50%。今すぐ応募！",
    cta: "応募する",
  },
  hero: {
    eyebrow: "Web & App Studio",
    aiPill: "AIで効率アップ",
    headline: "ウェブサイトの心配を[[少し減らす]]ために",
    subhead:
      "わかりやすく回るWebを先に — その後AIで運用を最適化し、効率を上げる",
    support:
      "やりたいことを教えてください。方針と見積もりをはっきりお伝えします。Webが土台、AIは手作業を減らし、仕事を速くします。",
    trustLine: "わかりやすい · 見積もり明確 · AIで運用を軽く",
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
      {
        id: "custom-agent",
        category: "Agents",
        title: "要件対応のカスタム AI Agent",
        body: "実業務を取り込み既存システムへ接続 — 1業務を成果まで担う。シナリオ型チャットボットではない。",
        tags: ["Custom agent", "Ops", "CRM", "AI"],
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
    eyebrow: "Engagement outputs",
    title: "プロジェクトは[[明確な成果物で終わる]]",
    support:
      "明確な引き渡し — ドキュメント、所有権、自立運用。ベンダーロックなし。",
    groupOwn: "Own — 所有と基盤",
    groupRun: "Run — 運用と保証",
    items: [
      {
        title: "確定したスコープとマイルストーン",
        body: "合意した成果物に紐づく見積もり — 定期デモで早期修正。",
      },
      {
        title: "ソースと運用権",
        body: "契約どおりのソース／リポジトリ — 運用を続ける権利はあなた側。",
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
        title: "技術不具合保証 3〜6か月",
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

const zh: Dictionary = {
  meta: {
    title: "Dolphin Software",
    description:
      "面向中小企业的 Web & App 工作室：网站、移动端、自动化与 AI——易用、易运营，报价范围清晰，交接后持续陪伴。",
  },
  nav: {
    ariaMain: "主导航",
    ariaMobile: "移动导航",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    services: "服务",
    web: "做网站",
    serviceWeb: "网站设计",
    serviceLanding: "落地页",
    serviceMobile: "移动应用",
    serviceBackend: "后端与集成",
    serviceDesign: "UI/UX",
    process: "流程",
    stack: "技术",
    news: newsNavLabel.zh,
    careers: careersNavLabel.zh,
    about: "介绍",
    customAgent: "AI Agent",
    customAgentItem: "按需 AI Agent",
    agentDolphin: "Dolphin Care",
    aiTransform: "企业 AI 转型",
    contact: "联系",
  },
  banner: {
    aria: "公告",
    text: "Dolphin Software 正在招募自由职业者 — Sales 优先急招，成交抽成 50%。立即申请！",
    cta: "立即申请",
  },
  hero: {
    eyebrow: "Web & App Studio",
    aiPill: "AI 提升效率",
    headline: "让您[[少操心]]网站的事",
    subhead:
      "先做好清晰、好运营的网站 — 再用 AI 优化运营、提升效率",
    support:
      "您说想要什么；我们给出做法和清楚报价。网站是基础；AI 帮您少做手工、把事情跑得更快。",
    trustLine: "好懂 · 报价清楚 · AI 减轻运营负担",
    ctaPrimary: "获取报价",
    ctaSecondary: "查看网站服务",
    visual: {
      web: "Web & App",
      automation: "自动化",
      ai: "AI 集成",
    },
  },
  trust: {
    aria: "交接交付物",
    eyebrow: "交接",
    title: "项目完成时你[[拿到什么]]",
    support:
      "源码 · 后台 · 域名 · 指南 · 质保——所有权与运营，不只是线上 URL。",
    items: [
      { value: "Source", label: "按约定拥有源码 / 仓库——无厂商锁定。" },
      { value: "CMS / Admin", label: "范围包含时提供内容或运营后台访问。" },
      { value: "Domain / Hosting", label: "域名/主机接入指引、环境变量与部署清单。" },
      { value: "指南", label: "文档 / 演示，便于团队独立运维。" },
      { value: "质保 3–6 个月", label: "验收范围内技术故障质保——不含新功能。" },
    ],
  },
  popularServices: popularServicesByLocale.zh,
  uiGallery: uiGalleryByLocale.zh,
  aiEdge: aiEdgeByLocale.zh,
  capabilities: {
    eyebrow: "Website & App",
    title: "先做好清晰、好运营的[[网站]]",
    support:
      "简短 brief 就能开始。选最接近的方向——我们给出做法和清楚报价。",
    ctaPrimary: "获取报价",
    ctaSecondary: "查看价格套餐",
    learnMore: "了解更多",
    prevPage: "上一页",
    nextPage: "下一页",
    offers: [
      {
        id: "landing",
        title: "落地页",
        body: "一页说清 CTA——活动、服务介绍、快速获客。",
        meta: "通常 3–5 天",
        href: "/services/web",
      },
      {
        id: "business",
        title: "企业网站",
        body: "公司介绍、服务、长期 SEO——内容易更新。",
        meta: "通常 7–14 天",
        href: "/services/web",
      },
      {
        id: "shop",
        title: "电商网站",
        body: "目录、购物车、支付——线上卖得更顺。",
        meta: "通常 3–4 周",
        href: "/services/web",
      },
      {
        id: "webapp",
        title: "Web 应用",
        body: "按业务定制——预约、管理、客户门户。",
        meta: "按项目范围",
        href: "/services/web",
      },
    ],
    moreServices: [
      { label: "移动应用", href: "/services/mobile" },
      { label: "后端", href: "/services/backend" },
      { label: "UI/UX", href: "/services/design" },
      { label: "支付集成", href: "/services/integrations" },
    ],
    items: [
      {
        id: "web",
        category: "Website",
        title: "网站设计与定制开发",
        body: "落地页、企业站或 CMS，帮助访客理解并行动——清晰表单/CTA、站内 SEO、响应式；结构便于日后扩展。",
        tags: ["Next.js", "React", "CMS"],
      },
      {
        id: "mobile",
        category: "Mobile",
        title: "移动应用开发",
        body: "让客户更快预约 / 下单 / 追踪的手机应用——平衡体验与上市速度。",
        tags: ["Flutter", "React Native", "iOS/Android"],
      },
      {
        id: "backend",
        category: "Backend",
        title: "后端与系统集成",
        body: "稳固的 API、认证与支付——Web/App 扩展时数据与业务流仍可靠。",
        tags: ["Node.js", "API", "Auth"],
      },
      {
        id: "design",
        category: "UI/UX",
        title: "UI/UX 与交接",
        body: "贴合品牌的 UI + 设计系统 + 指引——团队可独立运维内容，少依赖工作室。",
        tags: ["UI/UX", "Design system", "Handover"],
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "第三方服务集成",
        body: "将 MoMo、ZaloPay、VNPay、Zalo OA 接入真实流程——少运维失误、易追踪、默认安全。",
        tags: ["MoMo", "Zalo", "VNPay", "Webhook"],
      },
      {
        id: "agents",
        category: "Agents",
        title: "面向业务的 Agent 生态",
        body: "连接业务流程 + MCP/内部工具的 Agent——服务运营，不只是营销聊天机器人。",
        tags: ["MCP", "Agents", "Context", "AI"],
      },
      {
        id: "custom-agent",
        category: "Agents",
        title: "按需定制 AI Agent",
        body: "注入真实业务并连接现有系统——一个 Agent 扛住一个环节到结果，不是话术聊天机器人。",
        tags: ["Custom agent", "Ops", "CRM", "AI"],
      },
    ],
  },
  siteOutcomes: {
    eyebrow: "运营成果",
    title: "交付后你能[[跑起来的业务]]",
    support:
      "交付后——获客、预约、内容、支付与运营能跑起来；不是功能目录。",
    items: [
      {
        title: "清楚获客与转化",
        body: "表单／CTA 与短联系路径——访客采取行动；团队能追踪来源。",
      },
      {
        title: "稳定的预约／留位",
        body: "空档、确认与提醒——减少询档电话与重复预约。",
      },
      {
        title: "品牌易信、易记",
        body: "重点突出的落地页或企业站——响应式、易扫读，建立信任。",
      },
      {
        title: "团队自行更新内容",
        body: "范围内的 CMS／后台——改文章、图片、价格，不必每次找工作室。",
      },
      {
        title: "支付与消息接入真实流程",
        body: "需要时接入 MoMo／ZaloPay／VNPay／Zalo OA——比临时拼接线更少运营差错。",
      },
      {
        title: "内部运营少分散",
        body: "仪表盘、业务 Agent，或 Collect → Govern——一张图，而不是十个工具。",
      },
    ],
  },
  whatYouGet: {
    eyebrow: "项目交付",
    title: "每个项目都以[[清晰交付物收尾]]",
    support:
      "清晰交接——文档、所有权、独立运营；无供应商锁定。",
    groupOwn: "Own — 所有权与底座",
    groupRun: "Run — 运营与质保",
    items: [
      {
        title: "范围与里程碑已锁定",
        body: "报价绑定已约定产出——定期演示便于早改。",
      },
      {
        title: "源码与运营权",
        body: "按约定交付源码／仓库——继续运营的权利在你。",
      },
      {
        title: "结构预留扩展",
        body: "按里程碑加页面、表单或功能——不必从零重做。",
      },
      {
        title: "页面 SEO 与性能",
        body: "响应式、标题／元信息清晰、合理 SMB 速度——可继续优化。",
      },
      {
        title: "运营走查",
        body: "文档／走查，让团队自行管理内容与基础部署清单。",
      },
      {
        title: "技术缺陷质保 3–6 个月",
        body: "在已验收范围内——新功能单独报价，先谈再做。",
      },
    ],
  },
  ops: {
    eyebrow: "运营自动化",
    title: "一条运营[[生命周期]]——不再跨工具追进度",
    support:
      "信号进入一个闭环——Collect 到 Improve。一条流看清全局。",
    cta: "聊聊自动化",
    before: "之前：在 Slack / Jira / 文档间跳转才知道进度。",
    after: "之后：一个控制台，一条运营闭环。",
    loopHint: "回到 Collect",
    steps: [
      {
        name: "Collect",
        detail: "从 Slack、Jira、文档与内部工具拉取信号。",
      },
      {
        name: "Normalize",
        detail: "整理上下文、去掉噪音，映射到真实业务含义。",
      },
      {
        name: "Run",
        detail: "按周期运行——报告、提醒、按时升级。",
      },
      {
        name: "Observe",
        detail: "观察运营信号——在滞后前发现偏差。",
      },
      {
        name: "Govern",
        detail: "从一个控制台指挥——无需手工拼信息。",
      },
      {
        name: "Improve",
        detail: "根据刚观察到的证据调整规则与节奏。",
      },
    ],
    chips: ["Slack", "Jira", "Docs"],
  },
  works: {
    eyebrow: "已交付案例",
    title: "个人与小企业站点[[案例]]",
    support:
      "每个案例：问题 → 范围 → 可衡量结果——不只是好看截图。",
    cta: "想做类似站点",
    problemLabel: "问题",
    scopeLabel: "范围",
    resultLabel: "结果",
    items: [
      {
        id: "billiard",
        title: "台球店管理站",
        tag: "Website · 预约",
        problem: "纸笔/Excel难判断空台，班次营收易算错。",
        scope: "台位图、计时、附加服务、班次汇总的 Web/ops。",
        result: "减少漏记；上手更快；老板随时看班次。",
      },
      {
        id: "badminton",
        title: "羽毛球场地站",
        tag: "Booking",
        problem: "客户反复电话问空场；档期易冲突。",
        scope: "场地介绍、空闲情况与清晰预约流程。",
        result: "减少问询电话；正确时段锁定增加。",
      },
      {
        id: "tickets",
        title: "票务预约与转化",
        tag: "Convert",
        problem: "浏览活动后，完成预约前流失。",
        scope: "浏览 → 选择 → 支付/占位的转化路径。",
        result: "缩短预约步骤；提高完成率。",
      },
      {
        id: "beauty",
        title: "美业预约",
        tag: "Beauty",
        problem: "漏约、重约，下班后难自助预约。",
        scope: "美甲/化妆等时段预约与确认。",
        result: "漏约减少；非工作时间锁定增加。",
      },
      {
        id: "cafe",
        title: "咖啡店 QR 点单",
        tag: "QR · Order",
        problem: "高峰手写点单慢且易错。",
        scope: "桌边 QR 菜单、购物车、推送到柜台/厨房。",
        result: "点单更快；错单减少；员工更聚焦服务。",
      },
      {
        id: "clinic",
        title: "诊所预约",
        tag: "Clinic",
        problem: "患者电话问空档；易重约、漏提醒。",
        scope: "医生/时段日历 + 确认与提醒。",
        result: "减少问空档电话；降低重约。",
      },
    ],
  },
  process: {
    eyebrow: "合作方式",
    title: "到交接的[[五步]]",
    support:
      "从调研到交接——每步有清晰交付物，不跳步。",
    deliverableLabel: "交付物",
    steps: [
      {
        name: "沟通与调研",
        detail: "弄清站点／应用目标，以及预算与时间约束。",
        deliverable: "已对齐的问题、目标与约束摘要。",
      },
      {
        name: "计划与报价",
        detail: "拆解功能、里程碑、费用与交接产出。",
        deliverable: "范围方案、时间线与清晰报价。",
      },
      {
        name: "冲刺开发",
        detail: "落地界面、功能、响应式与集成，定期演示以便尽早纠偏。",
        deliverable: "便于早期评审的冲刺构建/演示。",
      },
      {
        name: "测试与验收",
        detail: "确认质量，上线前共同验收。",
        deliverable: "验收清单与已处理缺陷列表。",
      },
      {
        name: "交接与陪跑",
        detail: "部署、使用说明、文档——上线后按约定支持技术故障。",
        deliverable: "源码、域名/主机与环境、后台（如有）、指南与约定质保。",
      },
    ],
  },
  technology: {
    eyebrow: "我们的技术",
    title: "把分散的信号收进同一个[[控制台]]",
    support:
      "以前：Slack、Jira、文档把真相打散。现在：采集 → 归一 → 运行 → 治理——整幅图景在一条清晰链路里。",
    cta: "了解更多",
    live: "live",
    tabs: ["总览", "数据", "洞察", "告警"],
    widgets: {
      activity: "活动",
      pulse: "系统脉搏",
      nodes: "活跃节点",
    },
  },
  stack: {
    eyebrow: "技术",
    titleLead: "扎实工程",
    titleHighlight: "现代技术栈",
    support:
      "按问题选型——前端、后端、基础设施与数据。经实践验证。",
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
    eyebrow: "为什么选择 Dolphin Software",
    title: "不止交付代码，[[长期陪伴]]",
    support:
      "进度、范围、承诺与交付后支持——说清楚，少黑话。",
    reasons: [
      {
        title: "实战经验",
        body: "7 年生产经验——可靠性、可观测性与 SMB 端到端交付。",
      },
      {
        title: "端到端交付",
        body: "从调研到部署——一队负责；结构便于后续扩展。",
      },
      {
        title: "流程透明",
        body: "里程碑、定期演示、清晰范围报价——用交付物衡量。",
      },
      {
        title: "交付后陪跑",
        body: "运营指南、约定缺陷质保，上线后继续优化。",
      },
    ],
  },
  cofounder: {
    eyebrow: "团队",
    role: "Founder",
    name: "Nguyễn Chí Thành",
    description:
      "7 年产品与系统——生产运维、应急响应、可观测性。把真实运维经验带入 SMB 站点与应用：直说、范围清晰。",
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
    eyebrow: "联系",
    title: "[[开始]]你的项目？",
    support:
      "用 Zalo 快速沟通，或发邮件附简要说明——范围与下一步，无需技术背景。",
    nextHint: "回复实现方向与估算范围。",
    ctaZalo: "Zalo 沟通",
    ctaEmail: "发送邮件",
    name: "姓名",
    contact: "邮箱或 Zalo",
    message: "项目概要",
    submit: "发送",
    sent: "已打开邮件应用（若浏览器拦截 mailto，请复制内容）。",
    mailSubject: "Dolphin Software — 联系",
    mailBodyName: "姓名",
    mailBodyContact: "联系方式",
    errors: {
      name: "请输入姓名",
      contact: "请输入邮箱或 Zalo",
      message: "请输入项目概要",
    },
  },
  news: newsByLocale.zh,
  careers: careersByLocale.zh,
  faq: getFaqCopy("zh"),
  footer: {
    disclaimer:
      "证券相关内容为社区分享，不是持牌投资建议，也不保证收益。",
    groupExplore: "探索",
    groupStudio: "工作室",
    groupUpdates: "动态",
    groupConnect: "联系",
  },
  loader: {
    aria: "正在启动 Agent 系统",
    status: "Agent 启动中…",
    agents: {
      scout: "Scout",
      plan: "Plan",
      build: "Build",
      ship: "Ship",
    },
  },
  contactFab: {
    open: "打开快捷联系",
    close: "关闭快捷联系",
    zalo: "用 Zalo 聊天",
    phone: "打电话",
    email: "发送邮件",
  },
  cookie: {
    title: "Cookie 与隐私",
    body: "我们使用必要 Cookie 与浏览器存储，以记住语言、主题颜色和 Cookie 选择——让页面正确加载，并避免每次访问都再次询问。可选 Cookie（如有）仅用于改善体验，我们不会向第三方出售您的数据。您可接受或拒绝非必要 Cookie；拒绝后仍可使用网站核心功能。",
    accept: "接受",
    decline: "拒绝",
  },
  preview: {
    close: "关闭",
    viewFull: "完整查看",
    loading: "加载中…",
  },
  theme: {
    aria: "颜色主题",
    violet: "紫罗兰",
    ocean: "海洋",
    forest: "森林",
    coral: "珊瑚",
    slate: "石板灰",
    black: "黑色",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { vi, en, ja, de, zh };

export function getDictionary(locale: Locale): Dictionary {
  const dict = dictionaries[locale] ?? dictionaries.vi;
  return {
    ...dict,
    banner: dict.banner ?? dictionaries.vi.banner,
  };
}
