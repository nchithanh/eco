/**
 * Homepage copy — Vietnamese only (source of truth for locale `vi`).
 * Other locales: add `homepage_lang_en.ts` / `ja` / … and register in `homepage_lang.ts`.
 * Until then, non-VI keeps strings from `dictionaries.ts`.
 */
import type { Dictionary } from "./types";

/** Full section replacements when present. */
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
    "eyebrow" | "title" | "support" | "nextHint"
  > &
    Pick<Dictionary["contact"], "afterSubmitTitle" | "afterSubmitItems">;
};

export const homepageLangVi: HomepageLang = {
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "Đừng để công nghệ trở thành [[gánh nặng]] cho doanh nghiệp",
    subhead: "Xây website · nâng cấp hệ thống cũ · AI đúng chỗ cần",
    support:
      "Không phải lúc nào cũng cần làm lại từ đầu. Chúng tôi giúp bạn chọn đúng phần cần xây, cần nâng cấp hay cần tự động hóa — để website và hệ thống thật sự hỗ trợ bán hàng, vận hành và chăm sóc khách.",
    trustLine: "Hiểu vấn đề · Báo giá rõ · Không bán thừa",
    ctaPrimary: "Nhận báo giá",
    ctaSecondary: "Xem dịch vụ website",
    visual: {
      web: "Web & App",
      automation: "Tự động hóa",
      ai: "Tích hợp AI",
    },
  },

  siteOutcomes: {
    eyebrow: "Outcomes",
    title: "Doanh nghiệp chọn Dolphin để [[chạy được việc thật]]",
    support:
      "Chúng tôi không đo bằng số lượng website đã làm. Điều quan trọng là sau khi bàn giao, hệ thống có thật sự giúp doanh nghiệp vận hành tốt hơn không.",
    painLead: "Đây là những thay đổi doanh nghiệp thường muốn đạt được.",
    items: [
      {
        title: "Thu lead và chuyển đổi rõ",
        body: "Khách biết cần làm gì tiếp theo, để lại thông tin nhanh hơn và bạn không bỏ lỡ cơ hội.",
      },
      {
        title: "Đặt lịch và xử lý yêu cầu tự động",
        body: "Từ đặt lịch, xác nhận đến nhắc hẹn — giảm thao tác tay và hạn chế bỏ sót.",
      },
      {
        title: "Website tạo niềm tin ngay lần đầu",
        body: "Giao diện rõ, tốc độ nhanh, nội dung đúng trọng tâm để khách yên tâm liên hệ.",
      },
      {
        title: "Tự chủ khi cần sửa website",
        body: "Đổi nội dung, hình ảnh hay bảng giá ngay khi cần, không phải chờ lập trình viên.",
      },
      {
        title: "Kết nối công cụ bạn đang dùng",
        body: "Tích hợp MoMo, VNPay, Zalo OA, CRM hay hệ thống nội bộ để dữ liệu không rời rạc.",
      },
      {
        title: "Không đứng lại khi một người nghỉ",
        body: "AI và quy trình giúp trả lời khách, xử lý yêu cầu và lưu thông tin nhất quán.",
      },
    ],
  },

  capabilities: {
    eyebrow: "How we help",
    title: "Chúng tôi giúp doanh nghiệp [[như thế nào]]",
    support:
      "Không phải doanh nghiệp nào cũng cần website mới hay AI ngay. Chúng tôi bắt đầu bằng bài toán, rồi mới chọn giải pháp.",
    ctaPrimary: "Nhận tư vấn miễn phí",
    ctaSecondary: "Xem cách chúng tôi làm việc",
    ctaSecondaryHref: "#process",
    learnMore: "Xem thêm",
    prevPage: "Trang trước",
    nextPage: "Trang sau",
    offers: [
      {
        id: "build",
        title: "Build",
        body: "Website và phần mềm được thiết kế để hỗ trợ bán hàng, vận hành và chăm sóc khách — nhiều hơn một brochure online.",
        meta: "Khi cần xây mới",
        href: "/services/web",
      },
      {
        id: "modernize",
        title: "Modernize",
        body: "Không phải hệ thống cũ nào cũng cần thay. Phân tích trước, nâng cấp khi thật sự cần.",
        meta: "Khi hệ thống cũ vẫn còn giá trị",
        href: "/services/web",
      },
      {
        id: "automate",
        title: "Automate",
        body: "Để AI trả lời khách, xử lý yêu cầu, nhập liệu và hỗ trợ nhân viên, giúp đội tập trung vào việc quan trọng.",
        meta: "Khi đội mất quá nhiều giờ cho việc lặp",
        href: "/ai-transform",
      },
      {
        id: "care",
        title: "Care",
        body: "Dolphin Care trả lời câu hỏi phổ biến, thu thông tin và hỗ trợ khách kể cả khi bạn đã đóng cửa.",
        meta: "Khi muốn chăm khách cả ngoài giờ",
        href: "/dolphin-care",
      },
    ],
    moreServices: [
      { label: "Spa", href: "#works" },
      { label: "Nhà hàng", href: "#works" },
      { label: "Phòng khám", href: "#works" },
      { label: "Giáo dục", href: "#works" },
      { label: "Bất động sản", href: "#works" },
      { label: "SME", href: "#works" },
    ],
    items: [
      {
        id: "web",
        category: "Build",
        title: "Khi cần xây mới",
        body: "Website và phần mềm hỗ trợ bán hàng, vận hành và chăm sóc khách.",
        tags: ["Bán hàng", "Vận hành", "Chăm khách"],
      },
      {
        id: "modernize",
        category: "Modernize",
        title: "Khi hệ thống cũ vẫn còn giá trị",
        body: "Phân tích trước, nâng cấp khi thật sự cần.",
        tags: ["Nâng cấp", "Giữ vốn", "Ổn định"],
      },
      {
        id: "automate",
        category: "Automate",
        title: "Khi đội mất giờ cho việc lặp",
        body: "AI trả lời khách, xử lý yêu cầu, nhập liệu — đội tập trung việc quan trọng.",
        tags: ["Trả lời", "Nhập liệu", "Đỡ tay"],
      },
      {
        id: "care",
        category: "Care",
        title: "Khi muốn chăm khách ngoài giờ",
        body: "Trả lời FAQ, thu thông tin — kể cả khi đã đóng cửa.",
        tags: ["Ngoài giờ", "Lead", "Website"],
      },
    ],
  },

  why: {
    eyebrow: "Why Dolphin",
    title: "Nguyên tắc chúng tôi [[luôn giữ]]",
    support:
      "Chúng tôi bắt đầu bằng việc hiểu vấn đề, rồi mới đề xuất giải pháp phù hợp — không phải giải pháp đắt nhất.",
    reasons: [
      {
        title: "Không vội viết code",
        body: "Có bài toán chỉ cần đổi một quy trình nhỏ, thay vì xây lại toàn bộ.",
      },
      {
        title: "Đơn giản trước",
        body: "Không phải dự án nào cũng cần làm mới. Quan trọng là cách giải hiệu quả nhất.",
      },
      {
        title: "Modernize trước khi rebuild",
        body: "Tận dụng phần đang chạy tốt, chỉ nâng cấp phần thật sự cần.",
      },
      {
        title: "Làm đúng điều đã thống nhất",
        body: "Phạm vi rõ, tiến độ minh bạch, bàn giao đầy đủ để bạn chủ động vận hành.",
      },
      {
        title: "AI / Care đúng chỗ",
        body: "Chỉ dùng AI khi giảm được việc lặp hoặc cải thiện trải nghiệm khách — không chạy theo xu hướng.",
      },
      {
        title: "Đồng hành sau bàn giao",
        body: "Bàn giao không phải điểm kết. Doanh nghiệp lớn lên, hệ thống cũng cần lớn theo.",
      },
    ],
  },

  popularServicesChrome: {
    eyebrow: "Solutions",
    title: "Gói giải pháp [[bắt đầu nhanh]]",
    support:
      "Đây là mốc giá tham khảo để bắt đầu, không phải sản phẩm đóng hộp. Website là nền; Care / AI thêm khi cần. Scope cuối cùng chốt qua báo giá sau khi hiểu bài toán của bạn.",
  },

  works: {
    eyebrow: "Projects",
    title: "Những bài toán [[đã giải quyết]]",
    support:
      "Chúng tôi không bắt đầu bằng công nghệ, mà bằng việc tìm hiểu doanh nghiệp đang cần cải thiện điều gì.",
    cta: "Doanh nghiệp của bạn đang gặp bài toán tương tự?",
    ctaHint:
      "Trao đổi với chúng tôi — cùng phân tích trước khi đề xuất giải pháp.",
    industries: [
      "Spa",
      "Nhà hàng",
      "Giáo dục",
      "Y tế",
      "Bán lẻ",
      "Sự kiện",
    ],
    problemLabel: "Bài toán",
    scopeLabel: "Phạm vi",
    resultLabel: "Kết quả",
    beforeLabel: "Before",
    afterLabel: "After",
    items: [
      {
        id: "billiard",
        title: "Giúp cửa hàng bida quản lý bàn và ca làm dễ hơn",
        tag: "Bida · Vận hành",
        problem:
          "Chủ quán theo dõi bàn và doanh thu bằng sổ hoặc Excel, dễ nhầm ca và khó biết bàn nào đang trống.",
        scope:
          "Website và hệ thống quản lý bàn, theo dõi giờ chơi, dịch vụ đi kèm và tổng kết ca.",
        result:
          "✓ Biết ngay bàn nào đang sử dụng.\n✓ Giảm nhầm giờ tính tiền.\n✓ Nhân viên mới quen việc nhanh hơn.",
        before: "Sổ / Excel",
        after: "Bản đồ bàn + ca trên web",
      },
      {
        id: "badminton",
        title: "Giúp sân cầu lông nhận đặt sân trực tuyến",
        tag: "Thể thao · Đặt sân",
        problem:
          "Khách phải gọi hỏi sân trống, nhân viên mất thời gian kiểm tra và xác nhận.",
        scope:
          "Website giới thiệu sân, lịch trống và luồng đặt sân rõ để khách tự giữ chỗ.",
        result:
          "✓ Khách tự xem lịch và đặt sân trong vài bước.\n✓ Giảm rõ số cuộc gọi xác nhận mỗi ngày.",
        before: "Khách phải gọi hỏi",
        after: "Khách tự xem lịch và đặt sân",
      },
      {
        id: "tickets",
        title: "Giúp đơn vị sự kiện bán vé gọn hơn",
        tag: "Sự kiện · Đặt vé",
        problem:
          "Khách xem chương trình nhưng bỏ giữa chừng trước khi hoàn tất đặt vé.",
        scope:
          "Thiết kế lại luồng đặt vé từ chọn sự kiện đến thanh toán, cắt các bước thừa.",
        result:
          "✓ Nhiều khách hoàn tất đặt vé hơn.\n✓ Ít người rời bỏ giữa quá trình thanh toán.",
        before: "Nhiều bước, dễ bỏ giữa chừng",
        after: "Luồng đặt vé gọn hơn",
      },
      {
        id: "beauty",
        title: "Giúp spa nhận đặt lịch cả ngoài giờ hành chính",
        tag: "Spa · Làm đẹp",
        problem:
          "Dễ sót lịch, trùng lịch; khách ngoài giờ khó tự giữ chỗ.",
        scope:
          "Đặt lịch theo slot dịch vụ, xác nhận và nhắc lịch trên website.",
        result:
          "✓ Ít sót lịch hơn.\n✓ Khách vẫn giữ được chỗ khi quán đã đóng cửa.",
        before: "Gọi / nhắn để xin lịch",
        after: "Tự chọn slot trên website",
      },
      {
        id: "cafe",
        title: "Giúp quán cafe nhận gọi món bằng QR theo bàn",
        tag: "Nhà hàng · Cafe",
        problem: "Giờ cao điểm gọi món chậm, dễ sai vì ghi tay.",
        scope: "Menu QR theo bàn, giỏ món và đẩy order tới quầy / bếp.",
        result:
          "✓ Gọi món nhanh hơn.\n✓ Ít sai món; nhân viên bớt chạy sổ.",
        before: "Ghi tay / gọi phục vụ",
        after: "QR menu + order vào quầy",
      },
      {
        id: "clinic",
        title: "Giúp phòng khám nhận đặt lịch theo bác sĩ",
        tag: "Y tế · Phòng khám",
        problem:
          "Bệnh nhân gọi hỏi lịch; dễ trùng slot và quên nhắc tái khám.",
        scope: "Lịch theo bác sĩ / slot kèm xác nhận và nhắc lịch.",
        result: "✓ Giảm cuộc gọi hỏi lịch.\n✓ Ít trùng slot hơn.",
        before: "Gọi hỏi lịch trống",
        after: "Tự đặt theo bác sĩ / slot",
      },
    ],
  },

  technology: {
    eyebrow: "AI Philosophy",
    title: "Chúng tôi nghĩ gì về [[AI cho doanh nghiệp]]",
    support:
      "AI không thay người, và không phải doanh nghiệp nào cũng cần AI. Chúng tôi chỉ đề xuất khi nó thật sự giảm việc lặp hoặc cải thiện trải nghiệm khách — website và hệ thống vẫn là nền.",
    cta: "Tìm hiểu AI Transformation",
    live: "live",
    tabs: ["Tổng quan", "Dữ liệu", "Insight", "Cảnh báo"],
    widgets: {
      activity: "Hoạt động",
      pulse: "Nhịp hệ thống",
      nodes: "Node đang chạy",
    },
    principles: [
      {
        title: "Có bài toán trước, có AI sau",
        body: "Chúng tôi bắt đầu từ việc doanh nghiệp đang mất thời gian ở đâu, không từ công nghệ.",
      },
      {
        title: "Thực dụng, không sci-fi",
        body: "Không hứa “thay cả business”, không cam kết doanh thu. Chỉ làm phần đo được kết quả.",
      },
      {
        title: "Gắn vào cái đang chạy",
        body: "AI nối vào website, CRM và quy trình hiện có, thay vì bắt bạn làm lại từ đầu.",
      },
    ],
  },

  aiEdge: {
    eyebrow: "Ops AI",
    badge: "Automate",
    title: "AI cho [[quy trình vận hành]]",
    support:
      "Đây là những nơi AI mang lại giá trị rõ nhất cho SMB — gắn vào website và hệ thống bạn đã có.",
    items: [
      {
        id: "chat",
        tag: "On-site",
        title: "AI chat & FAQ trên site",
        body: "Trả lời câu hỏi thường gặp và thu lead, gắn thẳng vào website hiện tại.",
      },
      {
        id: "workflow",
        tag: "Automation",
        title: "Workflow & form thông minh",
        body: "Tự động hóa đặt lịch, báo giá và phân luồng lead, giảm thao tác tay.",
      },
      {
        id: "agent",
        tag: "Integration",
        title: "Agent nối CRM / Zalo",
        body: "Agent theo nghiệp vụ, nối hệ thống đang chạy và đo được kết quả.",
      },
    ],
    ctaTransform: "Chuyển đổi AI doanh nghiệp",
    ctaAgent: "AI Agent theo yêu cầu",
  },

  process: {
    eyebrow: "Process",
    title: "Cách chúng tôi [[làm việc]]",
    support:
      "Từ lúc nghe bài toán đến khi bàn giao, mỗi bước đều có đầu ra rõ — bạn luôn biết mình đang ở đâu và điều gì tới tiếp theo.",
    deliverableLabel: "Đầu ra",
    steps: [
      {
        name: "Lắng nghe & hiểu vấn đề",
        detail:
          "Chúng tôi muốn hiểu doanh nghiệp bạn trước khi bàn giải pháp. Làm rõ mục tiêu và ràng buộc ngân sách / thời gian.",
        deliverable: "Tóm tắt bài toán, mục tiêu và ràng buộc đã thống nhất.",
      },
      {
        name: "Đề xuất & báo giá rõ",
        detail:
          "Chọn Build / Modernize / Automate / Care phù hợp, kèm phạm vi và mốc rõ ràng.",
        deliverable: "Đề xuất phạm vi, timeline và báo giá.",
      },
      {
        name: "Thiết kế & xây theo sprint",
        detail:
          "UI, tính năng và tích hợp, có demo định kỳ để bạn góp ý sớm thay vì chờ đến cuối.",
        deliverable: "Bản build / demo theo sprint để review.",
      },
      {
        name: "Kiểm thử & nghiệm thu",
        detail:
          "Kiểm soát chất lượng và nghiệm thu cùng bạn trước khi lên production.",
        deliverable: "Checklist nghiệm thu và danh sách lỗi đã xử lý.",
      },
      {
        name: "Bàn giao & đồng hành",
        detail:
          "Deploy, hướng dẫn vận hành và hỗ trợ khi hệ thống chạy thật. Chúng tôi vẫn ở đây sau go-live.",
        deliverable:
          "Source, domain/hosting & env, admin (nếu có), hướng dẫn và bảo hành kỹ thuật.",
      },
    ],
  },

  fit: {
    eyebrow: "Fit",
    title: "Dolphin có [[phù hợp]] với bạn?",
    support:
      "Chúng tôi làm tốt nhất với doanh nghiệp có bài toán vận hành cụ thể. Vài trường hợp dưới đây giúp bạn tự cân nhắc trước khi liên hệ.",
    noTitle: "Có thể chưa phải lúc, nếu…",
    noItems: [
      "Bạn chỉ cần một landing page đẹp trong vài ngày và chưa quan tâm chuyển đổi hay vận hành sau đó.",
      "Bạn muốn “làm AI” theo xu hướng nhưng chưa có quy trình hay dữ liệu để gắn vào.",
      "Bạn cần agency quy mô lớn với nhiều vòng pitch trước khi bắt tay làm.",
      "Bạn muốn thay toàn bộ hệ thống chỉ vì thích công nghệ mới, dù cái cũ vẫn chạy ổn.",
    ],
    yesTitle: "Rất hợp, nếu…",
    yesItems: [
      "Bạn có bài toán rõ: lead, đặt lịch, vận hành, hoặc hệ thống cũ đang cản việc.",
      "Bạn muốn bắt đầu đúng chỗ — Build / Modernize / Automate / Care — không mua thừa.",
      "Bạn cần đối tác nói thẳng phạm vi, báo giá và bàn giao để bạn tự vận hành được.",
      "Bạn sẵn sàng đồng hành sau go-live khi doanh nghiệp phát triển thêm.",
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Câu hỏi [[thường gặp]]",
    support:
      "Timeline · báo giá · bảo hành · bảo mật — những điều bạn cần biết trước khi bắt đầu.",
    items: [
      {
        q: "Studio làm những gì?",
        a: "Dolphin Software giúp SMB đi từ bài toán kinh doanh đến hệ thống dễ vận hành — website, phần mềm, tự động hóa và AI. Bạn nói mục tiêu, chúng tôi đề xuất phạm vi phù hợp.",
      },
      {
        q: "Không biết kỹ thuật có làm được không?",
        a: "Được. Đa số khách không code. Bạn gửi ý tưởng hoặc mô tả ngắn, chúng tôi tư vấn bằng ngôn ngữ kinh doanh, làm trọn gói và bàn giao kèm hướng dẫn vận hành.",
      },
      {
        q: "Quy trình làm việc thế nào?",
        a: "Làm rõ mục tiêu → chốt phạm vi & báo giá → sprint có đầu ra → nghiệm thu → bàn giao & hỗ trợ. Bạn luôn biết bước tiếp theo.",
      },
      {
        q: "Nhận báo giá ra sao?",
        a: "Gửi mô tả qua Contact, nút “Nhận báo giá” hoặc Zalo. Chúng tôi phản hồi phạm vi ước tính và bước tiếp theo — không phí ẩn ngoài scope đã thống nhất.",
      },
      {
        q: "Timeline thường bao lâu?",
        a: "Landing: ~3–5 ngày. Business website: ~7–14 ngày. Shop / e-commerce: ~3–4 tuần. App / workflow: theo scope. Ngày cụ thể được gắn trong báo giá sau khi chốt.",
      },
      {
        q: "Website có tối ưu SEO / mobile không?",
        a: "Mặc định responsive, heading / meta rõ và SEO on-page cơ bản. SEO nội dung dài hạn hoặc Ads quy mô lớn có thể thỏa thuận thêm.",
      },
      {
        q: "Làm remote được không?",
        a: "Được — chat / call, demo định kỳ và tài liệu bàn giao rõ. Chúng tôi phục vụ khách toàn quốc.",
      },
      {
        q: "Bảo trì sau bàn giao khác gì tính năng mới?",
        a: "Sau bàn giao: hướng dẫn vận hành và bảo hành lỗi kỹ thuật (thường 3–6 tháng) trong phạm vi đã nghiệm thu. Tính năng mới là hạng mục riêng, báo giá trước.",
      },
      {
        q: "Bảo mật và dữ liệu thế nào?",
        a: "HTTPS, phân quyền, env vars, không commit secret. Dữ liệu thuộc về bạn. Audit / SSO / compliance nâng cao thỏa thuận thêm trong scope.",
      },
      {
        q: "Có làm MVP theo giai đoạn không?",
        a: "Có. Chúng tôi ưu tiên MVP đủ chạy rồi mở rộng theo milestone — kiểm chứng sớm và kiểm soát ngân sách.",
      },
      {
        q: "AI agent khác chatbot marketing thế nào?",
        a: "Chatbot marketing trả lời FAQ theo kịch bản. Agent gắn với quy trình nghiệp vụ, tool và ngữ cảnh nội bộ — hỗ trợ vận hành, không chỉ chat bán hàng.",
      },
      {
        q: "Phạm vi có bị phình giữa chừng không?",
        a: "Scope được chốt ở bước báo giá. Yêu cầu ngoài phạm vi sẽ được ghi nhận, ước lượng lại và chỉ làm khi bạn đồng ý.",
      },
      {
        q: "Làm sao để bắt đầu?",
        a: "Nhấn “Nhận báo giá”, chat Zalo hoặc gửi form Contact với mục tiêu, deadline và ngân sách ước lượng nếu có.",
      },
    ],
  },

  contactChrome: {
    eyebrow: "Next step",
    title: "Có [[bài toán]] cần giải?",
    support:
      "Mô tả ngắn vấn đề bạn đang gặp. Chúng tôi phản hồi hướng tiếp cận và phạm vi phù hợp, không ép gói.",
    nextHint: "Thường phản hồi trong ngày làm việc.",
    afterSubmitTitle: "Sau khi bạn gửi form, bạn sẽ nhận được:",
    afterSubmitItems: [
      "Hướng tiếp cận ban đầu cho bài toán của bạn.",
      "Gợi ý phạm vi: Build / Modernize / Automate / Care.",
      "Mốc thời gian và khoảng chi phí ước tính.",
    ],
  },
};
