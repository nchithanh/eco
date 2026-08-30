/**
 * Homepage copy — Vietnamese SEO/AEO/GEO SoT (locale `vi`).
 * Synced from public/schema/homepage/overview.json (rewriter part1+part2).
 */
import type { Dictionary } from "./types";

export type HomepageLang = {
  hero?: Dictionary["hero"];
  problems?: NonNullable<Dictionary["problems"]>;
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
    headline: "Giải quyết vấn đề doanh nghiệp bằng [[AI & Công nghệ]]",
    subhead: "Hiểu doanh nghiệp trước, xác định chỗ công nghệ tạo giá trị thật, rồi chỉ xây những gì anh chị thực sự cần.",
    support: "Dolphin giúp doanh nghiệp xác định những điểm nghẽn trong vận hành và xây dựng giải pháp phù hợp — từ website, AI Agent, CRM, automation đến phần mềm riêng.",
    trustLine: "We don't start with technology. We start with your problem.",
    ctaPrimary: "Nói về doanh nghiệp của bạn",
    ctaSecondary: "Xem giải pháp",
    tags: ["Vấn đề trước", "AI & công nghệ", "Website là một giải pháp"],
    metrics: [
      { value: "6+", label: "Case trên site" },
      { value: "Pain", label: "Bắt đầu từ vấn đề" },
    ],
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "Tích hợp AI"
    }
  },
  problems: {
    eyebrow: "What is slowing you down?",
    title: "Điều gì đang [[làm chậm]] doanh nghiệp của anh chị?",
    support: "Không mở bằng catalog. Mở bằng việc đang nghẽn — rồi mới chọn công cụ.",
    items: [
      {
        title: "Quá nhiều việc làm tay",
        body: "Team mất giờ cho việc lặp lại mỗi ngày.",
        href: "/ai-transform/",
        solution: "Tự động hóa",
      },
      {
        title: "Khách bị bỏ sót",
        body: "Lead, follow-up và tin nhắn nằm rải, rồi trôi. CRM gom khách; Care chăm trên website.",
        href: "/dolphin-ops/",
        solution: "CRM / AI chăm khách",
      },
      {
        title: "Website không giúp tiệm lớn lên",
        body: "Có trang, nhưng khách vào rồi không gọi, không để lại thông tin.",
        href: "/services/web/",
        solution: "Website",
      },
      {
        title: "Công cụ không nói chuyện với nhau",
        body: "Khách, bán hàng, vận hành nằm ở nhiều hệ thống.",
        href: "/services/integrations/",
        solution: "Tích hợp",
      },
      {
        title: "Doanh nghiệp phụ thuộc quá nhiều vào người",
        body: "Quy trình và dữ liệu khách nằm trong đầu nhân viên.",
        href: "/services/software/",
        solution: "Hệ thống / CRM",
      },
      {
        title: "Muốn dùng AI, chưa biết bắt đầu đâu",
        body: "Biết AI quan trọng, chưa rõ use case nào ra giá trị.",
        href: "/ai-transform/",
        solution: "Giải pháp AI",
      },
    ],
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
    title: "Chúng tôi không bán một [[đống tính năng]]",
    support: "Phần lớn doanh nghiệp không cần hệ thống phức tạp hàng trăm nút. Họ cần cách gỡ đúng chỗ đang làm chậm. Dolphin bắt đầu từ doanh nghiệp — không từ sản phẩm.",
    promise: "We don't start with technology. We start with your problem.",
    reasons: [
      {
        title: "Hiểu",
        body: "Nghe cách anh chị đang bán, chăm khách, và vận hành — bằng ngôn ngữ kinh doanh."
      },
      {
        title: "Xác định nghẽn",
        body: "Chỉ ra chỗ đang mất thời gian, mất lead, hoặc phụ thuộc một người."
      },
      {
        title: "Xây đúng thứ",
        body: "Website, AI, CRM, tích hợp hoặc phần mềm riêng — chỉ những gì khớp pain."
      },
      {
        title: "Đo và cải thiện",
        body: "Bàn giao để anh chị tự chạy; chỉnh khi thực tế phát sinh — không bỏ xó."
      }
    ]
  },
  capabilities: {
    eyebrow: "Solutions",
    title: "Giải pháp xoay quanh cách doanh nghiệp [[đang chạy]]",
    support: "Đây không phải bảy dịch vụ rời. Đây là các công cụ Dolphin dùng để gỡ một vấn đề vận hành.",
    ctaPrimary: "Nói về doanh nghiệp của bạn",
    ctaSecondary: "Nói về doanh nghiệp của bạn",
    ctaSecondaryHref: "#contact",
    learnMore: "Tìm hiểu thêm",
    prevPage: "Trang trước",
    nextPage: "Trang sau",
    pauseCarousel: "Tạm dừng carousel",
    playCarousel: "Phát carousel",
    offers: [
      {
        id: "website",
        title: "Website",
        body: "Website và web app theo mục tiêu kinh doanh — khách tìm ra, hiểu, và liên hệ được.",
        meta: "Tìm thấy & chuyển đổi",
        href: "/services/web/"
      },
      {
        id: "ai",
        title: "Giải pháp AI",
        body: "Use case AI thực tế: việc lặp, phân loại, hỗ trợ đội ngũ — khi đã rõ pain.",
        meta: "Đúng chỗ cần",
        href: "/ai-transform/"
      },
      {
        id: "agents",
        title: "AI Agent",
        body: "Dolphin Care — chăm khách trên website, ghi lead, hỗ trợ ngoài giờ trong phạm vi kiến thức.",
        meta: "Trên website",
        href: "/dolphin-care/"
      },
      {
        id: "crm",
        title: "CRM & khách",
        body: "Dolphin Ops — gom khách, lịch, follow-up; không để lead nằm rải tin nhắn.",
        meta: "Vận hành nội bộ",
        href: "/dolphin-ops/"
      },
      {
        id: "automation",
        title: "Tự động hóa",
        body: "Giảm việc tay cho bước lặp: nhắc lịch, báo cáo, nhập liệu — khi quy trình đã rõ.",
        meta: "Việc lặp",
        href: "/ai-transform/"
      },
      {
        id: "integrations",
        title: "Tích hợp",
        body: "Nối thanh toán, Zalo, CRM và hệ thống đang chạy để thông tin chảy một mạch.",
        meta: "Hệ thống sẵn",
        href: "/services/integrations/"
      },
      {
        id: "custom",
        title: "Phần mềm riêng & legacy",
        body: "Xây hệ thống nội bộ khi phần mềm có sẵn không khớp — hoặc nâng cấp cái đang chạy, không mặc định làm lại.",
        meta: "Theo nghiệp vụ",
        href: "/services/software/"
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
        id: "website",
        category: "Website",
        title: "Website",
        body: "Website và web app theo mục tiêu kinh doanh — khách tìm ra, hiểu, và liên hệ được.",
        tags: ["Tìm thấy & chuyển đổi"]
      },
      {
        id: "ai",
        category: "AI",
        title: "Giải pháp AI",
        body: "Use case AI thực tế: việc lặp, phân loại, hỗ trợ đội ngũ — khi đã rõ pain.",
        tags: ["Đúng chỗ cần"]
      },
      {
        id: "agents",
        category: "AI Agent",
        title: "AI Agent",
        body: "Dolphin Care — chăm khách trên website, ghi lead, hỗ trợ ngoài giờ trong phạm vi kiến thức.",
        tags: ["Trên website"]
      },
      {
        id: "crm",
        category: "CRM",
        title: "CRM & khách",
        body: "Dolphin Ops — gom khách, lịch, follow-up; không để lead nằm rải tin nhắn.",
        tags: ["Vận hành nội bộ"]
      },
      {
        id: "automation",
        category: "Automation",
        title: "Tự động hóa",
        body: "Giảm việc tay cho bước lặp: nhắc lịch, báo cáo, nhập liệu — khi quy trình đã rõ.",
        tags: ["Việc lặp"]
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "Tích hợp",
        body: "Nối thanh toán, Zalo, CRM và hệ thống đang chạy để thông tin chảy một mạch.",
        tags: ["Hệ thống sẵn"]
      },
      {
        id: "custom",
        category: "Custom",
        title: "Phần mềm riêng & legacy",
        body: "Xây hệ thống nội bộ khi phần mềm có sẵn không khớp — hoặc nâng cấp cái đang chạy, không mặc định làm lại.",
        tags: ["Theo nghiệp vụ"]
      }
    ]
  },
  works: {
    eyebrow: "Projects",
    title: "Bài toán thực tế đã gỡ — [[không chỉ]] ảnh đẹp",
    support: "Mỗi case: vấn đề đang nghẽn → phạm vi làm → kết quả sau bàn giao. Stack kỹ thuật nằm dưới.",
    cta: "Nói về bài toán của anh chị",
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
    eyebrow: "Dolphin Intelligence",
    badge: "AI Workflow",
    title: "Biến quy trình lặp lại thành [[AI workflow]] chạy tự động",
    support:
      "Dolphin Intelligence kết hợp AI agent, action thực tế, logic điều kiện và human checkpoint — chuỗi bước liên kết, không phải chatbot trả lời từng câu.",
    items: [
      {
        id: "agent",
        tag: "Agent",
        title: "AI Agent theo vai trò",
        body: "Research, Content, SEO, Review… mỗi agent có ngữ cảnh, hướng dẫn và schema — tư duy nhất quán trong workflow.",
      },
      {
        id: "action",
        tag: "Action · Logic",
        title: "Action & logic điều phối",
        body: "Gọi API, CMS, email, publish; cron, nhánh và vòng lặp — agent quyết định, action thực thi đúng lúc.",
      },
      {
        id: "human",
        tag: "Human",
        title: "Human Checkpoint đúng chỗ",
        body: "Con người duyệt topic, SEO hay publish trước khi tiếp tục — kiểm soát được, không phải hộp đen.",
      },
    ],
    ctaPrimary: "Xem Dolphin Intelligence",
    ctaSecondary: "Lộ trình chuyển đổi AI",
    learnMore: "Tìm hiểu thêm",
  },
  process: {
    eyebrow: "Process",
    title: "Quy trình 5 bước [[bàn giao rõ ràng]]",
    support: "Từ discovery đến bàn giao — đầu ra rõ ràng ở mỗi bước, không bỏ qua giai đoạn nào.",
    deliverableLabel: "Đầu ra",
    steps: [
      {
        name: "Lắng nghe & Khám phá",
        detail: "Làm rõ bài toán vận hành, mục tiêu và ràng buộc thời gian — chưa chọn tool.",
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
    eyebrow: "Website packages",
    title: "Gói website khi vấn đề là [[tìm thấy]] và chuyển đổi",
    support: "Bốn gói khi pain là Google / landing / shop — không phải toàn bộ catalog Dolphin. Chọn gói rồi yêu cầu báo giá hoặc chat Zalo."
  },
  faq: {
    eyebrow: "FAQ",
    title: "Câu hỏi [[thường gặp]]",
    support: "Timeline · báo giá · bảo hành · bảo mật — trả lời trước khi bắt đầu.",
    items: [
      {
        q: "Dolphin Software làm gì?",
        a: "Dolphin Software là công ty giải pháp AI và công nghệ cho doanh nghiệp. Chúng tôi bắt đầu từ vấn đề vận hành — rồi mới chọn website, AI Agent, CRM, automation, tích hợp hoặc phần mềm theo yêu cầu. Không chắc cần công nghệ gì vẫn bắt đầu được: kể chỗ đang nghẽn."
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
        a: "Kể vấn đề đang nghẽn qua form Contact hoặc Zalo. Không cần biết sẵn 'cần website hay AI' — Dolphin đề xuất phạm vi khớp pain."
      }
    ]
  },
  contactChrome: {
    eyebrow: "Next step",
    title: "Nói về [[doanh nghiệp]] của anh chị",
    support: "Không chắc cần công nghệ gì — kể chỗ đang nghẽn. Dolphin phản hồi hướng tiếp cận và phạm vi phù hợp, không ép gói.",
    nextHint: "Thường phản hồi trong ngày làm việc.",
    afterSubmitTitle: "Sau khi bạn gửi brief, bạn sẽ nhận được:",
    afterSubmitItems: [
      "Hướng tiếp cận ban đầu cho bài toán của bạn",
      "Gợi ý phạm vi khớp pain: website · AI · CRM · tích hợp · phần mềm riêng",
      "Mốc thời gian và khoảng chi phí ước tính"
    ]
  },
  seo: {
    title: "Dolphin Software – Giải Pháp AI & Công Nghệ Cho Doanh Nghiệp",
    description: "Dolphin Software giúp doanh nghiệp xác định nghẽn vận hành và xây giải pháp phù hợp — website, AI Agent, CRM, automation, tích hợp và phần mềm theo yêu cầu. Bắt đầu từ vấn đề, không từ sản phẩm.",
    og_title: "Dolphin Software – Giải Pháp AI & Công Nghệ Cho Doanh Nghiệp",
    og_description: "Không bắt đầu từ công nghệ. Bắt đầu từ vấn đề. Website, AI, CRM, automation và phần mềm riêng — chỉ những gì doanh nghiệp thực sự cần.",
    canonical: "https://dolphin-software.io.vn/",
    keywords: [
      "giải pháp AI và công nghệ cho doanh nghiệp",
      "thiết kế website theo yêu cầu",
      "CRM cho doanh nghiệp vừa và nhỏ",
      "tự động hóa quy trình doanh nghiệp",
      "phần mềm quản lý theo yêu cầu",
      "Dolphin Software",
      "Dolphin Care",
      "Dolphin Ops"
    ]
  }
};
