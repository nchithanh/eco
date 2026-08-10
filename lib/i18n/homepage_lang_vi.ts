/**
 * Homepage copy — Vietnamese SEO/AEO/GEO SoT (locale `vi`).
 * Synced from public/schema/homepage/overview.json (rewriter part1+part2).
 */
import type { Dictionary } from "./types";

export type HomepageLang = {
  hero?: Dictionary["hero"];
  capabilities?: Dictionary["capabilities"];
  siteOutcomes?: Dictionary["siteOutcomes"];
  why?: Dictionary["why"];
  technology?: Dictionary["technology"];
  aiEdge?: Dictionary["aiEdge"];
  process?: Dictionary["process"];
  works?: Dictionary["works"];
  fit?: NonNullable<Dictionary["fit"]>;
  faq?: Dictionary["faq"];
  popularServicesChrome?: Pick<
    Dictionary["popularServices"],
    "eyebrow" | "title" | "support"
  >;
  contactChrome?: Pick<
    Dictionary["contact"],
    "eyebrow" | "title" | "support" | "nextHint" | "afterSubmitTitle" | "afterSubmitItems"
  >;
  seo?: {
    title: string;
    description: string;
    og_title?: string;
    og_description?: string;
    canonical?: string;
    keywords?: string[];
  };
};

export const homepageLangVi: HomepageLang = {
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "Đừng để công nghệ trở thành [[gánh nặng]] cho doanh nghiệp",
    subhead: "Xây website · Nâng cấp hệ thống cũ · Tích hợp AI đúng chỗ",
    support: "Dolphin Software giúp doanh nghiệp vừa và nhỏ thiết kế website theo yêu cầu, nâng cấp hệ thống cũ và ứng dụng AI automation — để tiết kiệm thời gian và nâng cao hiệu quả vận hành thực sự.",
    trustLine: "Hiểu trước · Báo giá rõ ràng · Không đẩy dịch vụ không cần thiết",
    ctaPrimary: "Nhận báo giá",
    ctaSecondary: "Xem dịch vụ website",
    tags: ["Automation", "Web & App", "AI đúng chỗ"],
    metrics: [
      { value: "6+", label: "Case trên site" },
      { value: "Build", label: "Ưu tiên SMB cold" },
    ],
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "Tích hợp AI"
    }
  },
  siteOutcomes: {
    eyebrow: "Outcomes",
    title: "Sau bàn giao, doanh nghiệp bạn có thể [[tự chạy]] các việc này",
    support:
      "Không phải danh sách tính năng — đây là kết quả thực tế sau khi bàn giao: khách hàng tiềm năng, đặt lịch, nội dung, thanh toán và vận hành đều nằm trong tầm kiểm soát của bạn.",
    painLead: "Kết quả vận hành",
    ctaPrimary: "Nhận báo giá",
    ctaSecondary: "Xem dịch vụ website",
    ctaSecondaryHref: "#capabilities",
    learnMore: "Tìm hiểu thêm",
    items: [
      {
        title: "Thu hút và chuyển đổi khách hàng tiềm năng",
        body: "Form/CTA và hành trình liên hệ ngắn gọn — khách truy cập hành động; đội nhóm của bạn theo dõi được nguồn.",
        bullets: [
          "Form và CTA rõ ràng trên trang",
          "Hành trình liên hệ ngắn — khách hành động ngay",
          "Đội bạn theo dõi được nguồn lead",
        ],
        href: "/services/landing/",
      },
      {
        title: "Đặt lịch ổn định, không nhầm chỗ",
        body: "Hiển thị slot trống, xác nhận và nhắc lịch tự động — giảm cuộc gọi hỏi chỗ trống và đặt trùng.",
        bullets: [
          "Hiển thị slot trống theo thời gian thực",
          "Xác nhận và nhắc lịch tự động",
          "Giảm gọi hỏi chỗ trống và đặt trùng",
        ],
        href: "/services/web/",
      },
      {
        title: "Thương hiệu được khách tin tưởng và nhớ đến",
        body: "Trang landing hoặc website doanh nghiệp với nội dung tập trung — responsive, dễ đọc, xây dựng niềm tin.",
        bullets: [
          "Landing hoặc website doanh nghiệp tập trung",
          "Responsive, dễ đọc trên mọi thiết bị",
          "Nội dung xây dựng niềm tin nhanh",
        ],
        href: "/services/landing/",
      },
      {
        title: "Đội nhóm tự cập nhật nội dung",
        body: "CMS/admin đưa vào phạm vi — chỉnh bài viết, hình ảnh, giá mà không cần gọi lại studio.",
        bullets: [
          "CMS/admin nằm trong phạm vi bàn giao",
          "Sửa bài, ảnh, giá không cần gọi studio",
          "Đội bạn tự vận hành nội dung hàng ngày",
        ],
        href: "/services/web/",
      },
      {
        title: "Thanh toán và nhắn tin trong quy trình thực",
        body: "Tích hợp MoMo / ZaloPay / VNPay / Zalo OA khi cần — ít sai sót vận hành hơn so với kết nối thủ công.",
        bullets: [
          "MoMo / ZaloPay / VNPay khi cần",
          "Zalo OA gắn vào luồng liên hệ",
          "Ít sai sót hơn gắn tay thủ công",
        ],
        href: "/services/integrations/",
      },
      {
        title: "Vận hành nội bộ gọn gàng hơn",
        body: "Dashboard, business agent hoặc vòng lặp Thu thập → Quản trị — một bức tranh thay vì mười công cụ rời rạc.",
        bullets: [
          "Dashboard hoặc agent nghiệp vụ",
          "Vòng Thu thập → Quản trị gọn",
          "Một bức tranh thay vì mười tool",
        ],
        href: "/dolphin-care/",
      },
    ],
  },
  why: {
    eyebrow: "Why Dolphin",
    title: "Đối tác dài hạn, [[không chỉ]] giao code",
    support: "Timeline rõ ràng, phạm vi cam kết và hỗ trợ sau bàn giao — không có sương mù kỹ thuật.",
    promise: "Hiểu trước · Báo giá rõ · Bàn giao đúng phạm vi",
    reasons: [
      {
        title: "Kinh nghiệm thực chiến",
        body: "7 năm vận hành thực tế — đáng tin cậy, có khả năng quan sát, bàn giao end-to-end cho doanh nghiệp SMB."
      },
      {
        title: "Bàn giao end-to-end",
        body: "Từ discovery đến deploy — một đội chịu trách nhiệm; cấu trúc để mở rộng về sau."
      },
      {
        title: "Quy trình minh bạch",
        body: "Milestone, demo định kỳ, báo giá theo phạm vi — đo lường bằng sản phẩm bàn giao thực tế."
      },
      {
        title: "Hỗ trợ sau bàn giao",
        body: "Hướng dẫn vận hành, bảo hành lỗi theo thỏa thuận, tối ưu khi thực tế phát sinh."
      }
    ]
  },
  capabilities: {
    eyebrow: "How we help",
    title: "Website rõ ràng, doanh nghiệp [[thực sự]] vận hành được",
    support: "Một brief ngắn là đủ để bắt đầu. Chọn outcome gần nhất — Dolphin Software sẽ đề xuất hướng tiếp cận và báo giá cụ thể.",
    ctaPrimary: "Nhận báo giá",
    ctaSecondary: "Xem gói dịch vụ",
    ctaSecondaryHref: "#popular-services",
    learnMore: "Tìm hiểu thêm",
    prevPage: "Trang trước",
    nextPage: "Trang sau",
    pauseCarousel: "Tạm dừng carousel",
    playCarousel: "Phát carousel",
    offers: [
      {
        id: "build",
        title: "Build",
        body: "Xây website và phần mềm theo nhu cầu — để bán hàng và vận hành, không chỉ giới thiệu.",
        meta: "Ưu tiên SMB",
        href: "/services/web/"
      },
      {
        id: "modernize",
        title: "Modernize",
        body: "Nâng cấp, mở rộng, tối ưu hệ thống hiện có trước khi nghĩ tới làm mới toàn bộ.",
        meta: "Hệ thống đang chạy",
        href: "/services/software/"
      },
      {
        id: "automate",
        title: "Automate",
        body: "AI hóa việc lặp lại khi có giá trị thật — không thay người, giảm tay chân.",
        meta: "Quy trình lặp",
        href: "/ai-transform/"
      },
      {
        id: "care",
        title: "Care",
        body: "Dolphin Care — chăm sóc khách trên website, ghi nhận lead, hỗ trợ ngoài giờ trong phạm vi kiến thức.",
        meta: "Trên website",
        href: "/dolphin-care/"
      }
    ],
    moreServices: [
      {
        label: "Landing Page",
        href: "/services/landing/"
      },
      {
        label: "Mobile App",
        href: "/services/mobile/"
      },
      {
        label: "UI/UX",
        href: "/services/design/"
      },
      {
        label: "Tích hợp thanh toán",
        href: "/services/integrations/"
      }
    ],
    items: [
      {
        id: "build",
        category: "Build",
        title: "Build",
        body: "Xây website và phần mềm theo nhu cầu — để bán hàng và vận hành, không chỉ giới thiệu.",
        tags: [
          "Ưu tiên SMB"
        ]
      },
      {
        id: "modernize",
        category: "Modernize",
        title: "Modernize",
        body: "Nâng cấp, mở rộng, tối ưu hệ thống hiện có trước khi nghĩ tới làm mới toàn bộ.",
        tags: [
          "Hệ thống đang chạy"
        ]
      },
      {
        id: "automate",
        category: "Automate",
        title: "Automate",
        body: "AI hóa việc lặp lại khi có giá trị thật — không thay người, giảm tay chân.",
        tags: [
          "Quy trình lặp"
        ]
      },
      {
        id: "care",
        category: "Care",
        title: "Care",
        body: "Dolphin Care — chăm sóc khách trên website, ghi nhận lead, hỗ trợ ngoài giờ trong phạm vi kiến thức.",
        tags: [
          "Trên website"
        ]
      }
    ]
  },
  works: {
    eyebrow: "Projects",
    title: "Các website thực tế đã triển khai",
    support: "Mỗi dự án dưới đây: vấn đề → phạm vi → kết quả đo được.",
    cta: "Muốn một website như thế này?",
    ctaHint: "Trao đổi với chúng tôi — cùng phân tích trước khi đề xuất giải pháp.",
    industries: [
      "Spa",
      "Nhà hàng",
      "Giáo dục",
      "Y tế",
      "Bán lẻ",
      "Sự kiện"
    ],
    problemLabel: "Bài toán",
    scopeLabel: "Phạm vi",
    resultLabel: "Kết quả",
    beforeLabel: "Before",
    afterLabel: "After",
    items: [
      {
        id: "billiard",
        title: "Ops quản lý bida",
        tag: "Website · Booking",
        problem: "Giấy/Excel: khó thấy bàn trống; doanh thu ca làm bị thất thoát.",
        scope: "Bản đồ bàn, đồng hồ đếm giờ, add-on, tổng kết ca trên web/ops.",
        result: "Giảm ca bị bỏ sót, onboarding nhanh hơn, xem ca trực tiếp.",
        before: "",
        after: ""
      },
      {
        id: "badminton",
        title: "Website sân cầu lông",
        tag: "Booking",
        problem: "Khách gọi hỏi chỗ; admin đụng slot nhau.",
        scope: "Giới thiệu sân, lịch trống, quy trình đặt chỗ rõ ràng.",
        result: "Ít cuộc gọi hỏi lịch trống hơn, đặt chỗ đúng khung giờ tăng.",
        before: "",
        after: ""
      },
      {
        id: "tickets",
        title: "Đặt vé & tối ưu chuyển đổi",
        tag: "Booking · Convert",
        problem: "Khách xem sự kiện nhưng bỏ dở trước khi hoàn tất đặt vé.",
        scope: "Quy trình Duyệt → Chọn → Thanh toán/Giữ chỗ tối ưu cho chuyển đổi.",
        result: "Ít bước để đặt vé, tỷ lệ hoàn thành booking tăng.",
        before: "",
        after: ""
      },
      {
        id: "beauty",
        title: "Đặt lịch beauty",
        tag: "Beauty",
        problem: "Sót lịch, double-book; khó tự giữ chỗ ngoài giờ.",
        scope: "Đặt lịch theo slot nail/makeup/dịch vụ + xác nhận.",
        result: "Giảm lịch bị bỏ, tăng đặt hẹn ngoài giờ làm việc.",
        before: "",
        after: ""
      },
      {
        id: "cafe",
        title: "Đặt món QR cho quán cafe",
        tag: "QR · Order",
        problem: "Giờ cao điểm gọi món chậm, dễ sai vì ghi tay.",
        scope: "Menu QR theo bàn, giỏ món, đẩy order tới quầy/bếp.",
        result: "Gọi đồ nhanh hơn, ít sai món hơn, nhân viên tập trung phục vụ.",
        before: "",
        after: ""
      },
      {
        id: "clinic",
        title: "Đặt lịch khám phòng khám",
        tag: "Clinic",
        problem: "Bệnh nhân gọi hỏi lịch; dễ trùng slot, quên nhắc tái khám.",
        scope: "Lịch theo bác sĩ/slot + xác nhận và nhắc lịch.",
        result: "Giảm cuộc gọi hỏi lịch, hạn chế đặt trùng.",
        before: "",
        after: ""
      }
    ]
  },
  technology: {
    eyebrow: "Ops AI",
    title: "Giải pháp AI [[cho vận hành]]",
    roadmap: "Lộ trình AI có kiểm soát: audit → pilot → nhân rộng",
    support:
      "Dolphin không bán AI viển vông. Chúng tôi rà soát quy trình thực tế của bạn, chọn 1–2 việc đáng làm nhất, chạy pilot có số đo — rồi mới nhân rộng.",
    items: [
      {
        id: "agents",
        tag: "Agents",
        title: "AI Agents — tự động hóa đúng việc",
        body: "Agent tùy chỉnh cho từng workflow và vai trò cụ thể, xử lý phần lặp đi lặp lại đang đốt thời gian của team.",
      },
      {
        id: "automation",
        tag: "Automation",
        title: "AI Automation — bớt thao tác thủ công",
        body: "Tự động hóa các bước lặp trong vận hành: capture lead, nhắc follow-up, tổng hợp báo cáo.",
      },
      {
        id: "integration",
        tag: "Integration",
        title: "AI Integration — kết nối hệ thống đang chạy",
        body: "Gắn AI vào CRM, chat, lịch và các công cụ hiện có — không cần thay toàn bộ hệ thống cũ.",
      },
    ],
    note: "Dolphin dùng chính AI agent workflow trong nội bộ — từ điều phối công việc, sản xuất nội dung, thiết kế đến phát triển software.",
    ctaPrimary: "Xem lộ trình chuyển đổi AI",
    ctaSecondary: "Khám phá use case theo phòng ban (Sales, Support, Operations)",
  },
  aiEdge: {
    eyebrow: "Ops AI",
    badge: "Automate",
    title: "Website làm nền — [[AI]] là lớp thông minh bên trên",
    support: "Web & app là cốt lõi của Dolphin Software. Khi thực sự có ích, chúng tôi thêm chat, automation và process agent — thực tế, không phải khoa học viễn tưởng.",
    items: [
      {
        id: "chat",
        tag: "On-site",
        title: "AI chat & FAQ trên website của bạn",
        body: "Trả lời câu hỏi thường gặp và thu lead ngay trên website đang chạy."
      },
      {
        id: "workflow",
        tag: "Automation",
        title: "Quy trình thông minh & form tự động",
        body: "Tự động hóa đặt lịch, báo giá và phân luồng lead — giảm bước thủ công."
      },
      {
        id: "agent",
        tag: "Integration",
        title: "Agent kết nối CRM / Zalo",
        body: "Business agent gắn vào quy trình thực, kết nối hệ thống live — kết quả đo được."
      }
    ],
    ctaTransform: "Chuyển đổi AI doanh nghiệp",
    ctaAgent: "Xem Dolphin Care"
  },
  process: {
    eyebrow: "Process",
    title: "Quy trình 5 bước [[bàn giao rõ ràng]]",
    support: "Từ discovery đến bàn giao — đầu ra rõ ràng ở mỗi bước, không bỏ qua giai đoạn nào.",
    deliverableLabel: "Đầu ra",
    steps: [
      {
        name: "Lắng nghe & Khám phá",
        detail: "Làm rõ mục tiêu website/app cùng ngân sách và ràng buộc thời gian.",
        deliverable: "Tóm tắt vấn đề, mục tiêu và ràng buộc đã được căn chỉnh."
      },
      {
        name: "Lên kế hoạch & Báo giá",
        detail: "Phân tách tính năng, milestone, chi phí và đầu ra bàn giao.",
        deliverable: "Đề xuất có phạm vi, timeline và báo giá rõ ràng."
      },
      {
        name: "Phát triển theo sprint",
        detail: "Bàn giao UI, tính năng, responsive, tích hợp — demo để điều chỉnh sớm.",
        deliverable: "Sprint build/demo để review sớm."
      },
      {
        name: "Kiểm thử & UAT",
        detail: "Kiểm tra chất lượng và nghiệm thu cùng bạn trước khi lên production.",
        deliverable: "Checklist nghiệm thu và danh sách lỗi đã xử lý."
      },
      {
        name: "Bàn giao & Đối tác",
        detail: "Deploy, hướng dẫn vận hành, tài liệu — cộng với hỗ trợ kỹ thuật sau khi live.",
        deliverable: "Source code, domain/hosting & env, admin (nếu có), hướng dẫn và bảo hành theo thỏa thuận."
      }
    ]
  },
  fit: {
    eyebrow: "Fit",
    title: "Dolphin Software [[phù hợp]] nhất với ai?",
    support: "Dolphin Software phù hợp nhất với doanh nghiệp vừa và nhỏ (SMB) tại Việt Nam đang cần: thiết kế website theo yêu cầu từ đầu, nâng cấp hệ thống cũ đang gây khó khăn vận hành, hoặc tích hợp AI automation vào quy trình thực tế. Nếu bạn không rành kỹ thuật — không sao; đội ngũ làm việc bằng ngôn ngữ kinh doanh và bàn giao đến khi vận hành được.",
    matrix: [
      {
        profile: "Doanh nghiệp cần website có thể tự vận hành",
        recommended: "Business Website hoặc Web App",
        note: "Bao gồm CMS, hướng dẫn vận hành và bảo hành kỹ thuật."
      },
      {
        profile: "Startup cần ra mắt nhanh với ngân sách kiểm soát",
        recommended: "Landing Page hoặc MVP theo giai đoạn",
        note: "Bàn giao MVP trước, mở rộng theo milestone — kiểm soát ngân sách và xác thực sớm."
      },
      {
        profile: "Doanh nghiệp muốn tự động hóa booking / lead / thanh toán",
        recommended: "Web App + Tích hợp thanh toán + Dolphin Care",
        note: "Phù hợp khi quy trình hiện tại dựa trên cuộc gọi thủ công hoặc Excel."
      },
      {
        profile: "Doanh nghiệp muốn nâng cấp hệ thống cũ hoặc thêm AI vào hạ tầng hiện có",
        recommended: "Nâng cấp hệ thống + lộ trình AI",
        note: "Dolphin Software phân tích hệ thống hiện tại trước khi báo giá — không đẩy thêm tính năng không cần."
      }
    ]
  },
  popularServicesChrome: {
    eyebrow: "Solutions",
    title: "Dịch vụ [[phổ biến]]",
    support: "So sánh bốn gói chủ lực — chọn gói phù hợp, sau đó yêu cầu báo giá hoặc chat Zalo. Cần phạm vi tùy chỉnh, tích hợp hệ thống cũ hoặc SEO ngành đặc thù? Dolphin Software phân tích chi tiết từng hạng mục trước khi báo giá."
  },
  faq: {
    eyebrow: "FAQ",
    title: "Câu hỏi [[thường gặp]]",
    support: "Timeline · báo giá · bảo hành · bảo mật — trả lời trước khi bắt đầu.",
    items: [
      {
        q: "Dolphin Software làm gì?",
        a: "Dolphin Software giúp doanh nghiệp vừa và nhỏ (SMB) đi từ vấn đề kinh doanh đến hệ thống có thể vận hành — website, mobile, automation và AI. Bạn chỉ cần nêu mục tiêu; Dolphin Software đề xuất phạm vi phù hợp."
      },
      {
        q: "Doanh nghiệp không rành kỹ thuật có làm việc được không?",
        a: "Được. Hầu hết khách hàng của Dolphin Software không biết lập trình. Bạn chỉ cần chia sẻ ý tưởng hoặc brief ngắn — đội ngũ xác định phạm vi bằng ngôn ngữ kinh doanh, bàn giao end-to-end và hướng dẫn vận hành sau khi xong."
      },
      {
        q: "Quy trình làm việc diễn ra như thế nào?",
        a: "Làm rõ mục tiêu → Khóa phạm vi & dự toán → Sprint có sản phẩm bàn giao → Nghiệm thu → Bàn giao & Hỗ trợ. Bạn luôn biết bước tiếp theo là gì."
      },
      {
        q: "Báo giá hoạt động như thế nào? Có phí ẩn không?",
        a: "Gửi brief ngắn qua Contact, 'Nhận báo giá' hoặc Zalo. Dolphin Software phản hồi với phạm vi dự kiến và bước tiếp theo — không có phí ngoài phạm vi đã thỏa thuận."
      },
      {
        q: "Timeline điển hình là bao lâu?",
        a: "Landing page: ~3–5 ngày. Website doanh nghiệp: ~7–14 ngày. Shop / e-commerce: ~3–4 tuần. App / workflow: theo phạm vi. Ngày cụ thể có trong báo giá sau khi khóa phạm vi."
      },
      {
        q: "Có bao gồm SEO và mobile không?",
        a: "Responsive theo mặc định với heading/meta rõ ràng và SEO on-page nền tảng. SEO nội dung dài hạn hoặc chiến dịch quảng cáo lớn có thể thêm vào phạm vi riêng."
      },
      {
        q: "Có làm việc từ xa được không?",
        a: "Được — chat/call, demo định kỳ và tài liệu bàn giao rõ ràng. Khách hàng toàn quốc đều hợp tác được."
      },
      {
        q: "Bảo trì sau bàn giao khác gì tính năng mới?",
        a: "Sau bàn giao: hướng dẫn vận hành cộng với bảo hành lỗi kỹ thuật (thường 3–6 tháng) trong phạm vi đã nghiệm thu. Tính năng mới là riêng — báo giá trước, không nằm trong bảo hành."
      },
      {
        q: "Bảo mật và dữ liệu được xử lý như thế nào?",
        a: "HTTPS, kiểm soát truy cập, biến môi trường, không commit secret. Dữ liệu của bạn là của bạn. Audit / SSO / compliance có thể thêm vào phạm vi."
      },
      {
        q: "Phạm vi có bị phình to giữa chừng không?",
        a: "Phạm vi được khóa ở bước báo giá. Yêu cầu ngoài phạm vi sẽ được ghi nhận, ước lượng lại và chỉ thực hiện khi bạn đồng ý."
      },
      {
        q: "Có làm MVP theo giai đoạn không?",
        a: "Có. Dolphin Software ưu tiên MVP đủ để chạy, rồi mở rộng theo milestone — xác thực sớm và kiểm soát ngân sách."
      },
      {
        q: "AI agent khác chatbot marketing thế nào?",
        a: "Chatbot marketing trả lời FAQ theo kịch bản. Agent của Dolphin Software gắn với quy trình nghiệp vụ, công cụ và ngữ cảnh nội bộ — hỗ trợ vận hành, không chỉ chat bán hàng."
      },
      {
        q: "Làm sao để bắt đầu?",
        a: "Nhấn 'Nhận báo giá', chat Zalo, hoặc gửi form Contact với mục tiêu, deadline và ngân sách ước lượng nếu có."
      }
    ]
  },
  contactChrome: {
    eyebrow: "Next step",
    title: "Sẵn sàng làm website hoặc [[tự động hóa]] quy trình?",
    support: "Gửi brief ngắn — Dolphin Software phản hồi hướng tiếp cận và phạm vi phù hợp, không ép gói.",
    nextHint: "Thường phản hồi trong ngày làm việc.",
    afterSubmitTitle: "Sau khi bạn gửi brief, bạn sẽ nhận được:",
    afterSubmitItems: [
      "Hướng tiếp cận ban đầu cho bài toán của bạn",
      "Gợi ý phạm vi: website · nâng cấp · AI automation · Dolphin Care",
      "Mốc thời gian và khoảng chi phí ước tính"
    ]
  },
  seo: {
    title: "Dolphin Software – Thiết Kế Website & AI Cho Doanh Nghiệp Vừa Và Nhỏ",
    description: "Dolphin Software xây dựng website theo yêu cầu, nâng cấp hệ thống cũ và tích hợp AI automation cho doanh nghiệp vừa và nhỏ tại Việt Nam. Báo giá minh bạch, bàn giao đúng hạn.",
    og_title: "Dolphin Software – Thiết Kế Website · Nâng Cấp Hệ Thống · AI Automation",
    og_description: "Chúng tôi giúp doanh nghiệp SMB xây website vận hành được, nâng cấp hệ thống cũ và ứng dụng AI đúng chỗ — tiết kiệm thời gian, tăng hiệu quả hoạt động.",
    canonical: "https://dolphin-software.io.vn/",
    keywords: [
      "thiết kế website theo yêu cầu",
      "nâng cấp hệ thống cũ",
      "AI automation cho doanh nghiệp",
      "thiết kế web cho doanh nghiệp vừa và nhỏ",
      "Dolphin Software",
      "Dolphin Care",
      "tích hợp AI cho website",
      "công ty thiết kế web Việt Nam"
    ]
  }
};
