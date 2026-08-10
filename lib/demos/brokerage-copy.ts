/** Demo marketing homepage for brokerage clients — fictional brand. */

export const brokerageDemoBrand = "Nguyễn Văn A Invest";

export const brokerageDemoCopy = {
  metaTitle: "Nguyễn Văn A Invest — Demo website môi giới chứng khoán | Dolphin Software",
  metaDescription:
    "Demo landing page marketing cho công ty môi giới chứng khoán: uy tín, sản phẩm, nền tảng, nghiên cứu, phí minh bạch và mở tài khoản. Thiết kế bởi Dolphin Software.",
  demoBadge: "Demo website bởi Dolphin Software",
  demoNote:
    "Thương hiệu minh họa · tông màu & lợi ích tham chiếu CTCK đầu ngành (vd. SSI) — không phải website chính thức của SSI.",
  nav: {
    products: "Sản phẩm",
    platform: "Nền tảng",
    research: "Nghiên cứu",
    fees: "Biểu phí",
    security: "Bảo mật",
    open: "Mở tài khoản",
  },
  hero: {
    eyebrow: "Môi giới chứng khoán",
    title: "Thị trường trong tầm tay. Uy tín trong từng quyết định.",
    support:
      "Nguyễn Văn A Invest giúp nhà đầu tư tiếp cận thị trường trong nước và quốc tế với nền tảng hiện đại, nghiên cứu chuyên sâu và quy trình bảo mật được thiết kế có chủ đích.",
    ctaPrimary: "Mở tài khoản",
    ctaSecondary: "Khám phá nền tảng",
  },
  trust: {
    eyebrow: "Uy tín",
    title: "Niềm tin được xây bằng minh chứng",
    support: "Các chỉ số dưới đây là data demo hardcode — thay khi làm cho khách thật.",
    items: [
      { value: "15 năm", label: "Kinh nghiệm môi giới*" },
      { value: "128.400", label: "Tài khoản active*" },
      { value: "42", label: "Thị trường / sàn*" },
      { value: "99.95%", label: "Uptime nền tảng*" },
    ],
    footnote: "* Demo data — không phải số liệu vận hành thật.",
  },
  /** Hardcoded UI fixtures for hero + platform mockups */
  demoData: {
    label: "Demo data",
    portfolio: {
      name: "Danh mục mẫu — Growth VN",
      value: "2,48 tỷ ₫",
      dayPnl: "+18,2 triệu ₫",
      dayPct: "+0,74%",
      monthPct: "+4,2%",
      ytdPct: "+12,8%",
      winRate: "58%",
      winLabel: "Tỉ lệ lệnh lời (YTD)*",
      lossRate: "42%",
      lossLabel: "Tỉ lệ lệnh lỗ (YTD)*",
    },
    holdings: [
      { symbol: "FPT", name: "FPT Corp", pnl: "+6,4%", tone: "up" as const },
      { symbol: "VNM", name: "Vinamilk", pnl: "−1,2%", tone: "down" as const },
      { symbol: "MWG", name: "Mobile World", pnl: "+3,1%", tone: "up" as const },
      { symbol: "SSI", name: "SSI Securities", pnl: "+0,8%", tone: "up" as const },
    ],
    schedule: [
      {
        time: "09:30",
        title: "Brief thị trường sáng",
        meta: "Research desk · Online",
      },
      {
        time: "14:30",
        title: "Tư vấn danh mục — Anh Minh",
        meta: "Deal lịch · 30 phút",
      },
      {
        time: "16:00",
        title: "Review lệnh phái sinh",
        meta: "Risk check · Desk",
      },
    ],
    watchlist: [
      { symbol: "VNINDEX", last: "1.268,4", chg: "+0,42%", tone: "up" as const },
      { symbol: "HPG", last: "28.150", chg: "−0,88%", tone: "down" as const },
      { symbol: "TCB", last: "24.900", chg: "+1,15%", tone: "up" as const },
    ],
    alerts: [
      { text: "FPT chạm target +6%", tone: "up" as const },
      { text: "HPG dưới hỗ trợ ngắn hạn", tone: "down" as const },
      { text: "Lịch trả cổ tức VNM — 28/08*", tone: "neutral" as const },
    ],
    monthlyPnl: [
      { month: "T1", pct: 1.4 },
      { month: "T2", pct: -0.9 },
      { month: "T3", pct: 2.1 },
      { month: "T4", pct: 0.6 },
      { month: "T5", pct: -1.3 },
      { month: "T6", pct: 3.2 },
      { month: "T7", pct: 1.8 },
      { month: "T8", pct: -0.4 },
      { month: "T9", pct: 2.6 },
      { month: "T10", pct: 1.1 },
      { month: "T11", pct: -0.7 },
      { month: "T12", pct: 2.9 },
    ],
  },
  performance: {
    eyebrow: "Hiệu suất",
    title: "Lợi nhuận theo tháng — danh mục mẫu",
    support:
      "Biểu đồ minh họa P&L tháng của danh mục Growth VN. Số liệu hardcode cho demo landing — không phải kết quả đầu tư thật.",
    best: "+3,2%",
    bestLabel: "Tháng tốt nhất",
    worst: "−1,3%",
    worstLabel: "Tháng yếu nhất",
    avg: "+1,03%",
    avgLabel: "Trung bình / tháng",
  },
  products: {
    eyebrow: "Sản phẩm & dịch vụ",
    title: "Đầu tư đa lớp — một quan hệ đối tác",
    support: "Từ cổ phiếu nội địa đến sản phẩm toàn cầu, rõ ràng về phạm vi và giá trị.",
    items: [
      {
        title: "Cổ phiếu",
        body: "Niêm yết trong nước và chọn lọc quốc tế — thực thi ổn định, hỗ trợ rõ quy trình.",
      },
      {
        title: "ETF & Quỹ",
        body: "Đa dạng hóa có kiểm soát với danh mục và quỹ phù hợp khẩu vị rủi ro.",
      },
      {
        title: "Trái phiếu",
        body: "Công cụ thu nhập cố định cho nhà đầu tư dài hạn và quản lý dòng tiền.",
      },
      {
        title: "Phái sinh",
        body: "Công cụ phòng vệ và chiến lược nâng cao — kèm cảnh báo rủi ro minh bạch.",
      },
      {
        title: "Thị trường toàn cầu",
        body: "Tiếp cận đa thị trường qua một tài khoản và quy trình hỗ trợ thống nhất.",
      },
      {
        title: "Quản lý danh mục",
        body: "Theo dõi phân bổ, hiệu suất và mục tiêu — không biến trang này thành sàn giao dịch.",
      },
    ],
    learnMore: "Tìm hiểu thêm",
  },
  experience: {
    eyebrow: "Hành trình đầu tư",
    title: "Từ ý tưởng đến danh mục — trải nghiệm có chủ đích",
    steps: [
      { title: "Khám phá", body: "Cơ hội và chủ đề thị trường được chọn lọc." },
      { title: "Nghiên cứu", body: "Báo cáo, dữ liệu và góc nhìn phân tích." },
      { title: "Phân tích", body: "So sánh, theo dõi và làm rõ giả định." },
      { title: "Xây danh mục", body: "Phân bổ phù hợp mục tiêu và rủi ro." },
      { title: "Theo dõi", body: "Hiệu suất và cảnh báo có ngữ cảnh." },
      { title: "Thực thi", body: "Lệnh trên nền tảng — minh bạch, kiểm soát được." },
    ],
  },
  platform: {
    eyebrow: "Công nghệ",
    title: "Nền tảng premium — chứng minh năng lực",
    support:
      "Mock UI với data hardcode: P&L danh mục, lịch tư vấn, watchlist và cảnh báo — nhìn như sản phẩm thật, không phải live market feed.",
    panels: [
      {
        id: "desktop",
        title: "Desktop — Portfolio",
        body: "Tổng tài sản, P&L ngày / YTD và tỉ lệ lời–lỗ.",
      },
      {
        id: "mobile",
        title: "Mobile — Lịch & deal",
        body: "Lịch tư vấn và brief thị trường trong ngày.",
      },
      {
        id: "analytics",
        title: "Analytics — Holdings",
        body: "Mã trong danh mục kèm % lời/lỗ.",
      },
      {
        id: "alerts",
        title: "Watchlist & alerts",
        body: "Theo dõi chỉ số và cảnh báo giá.",
      },
    ],
  },
  research: {
    eyebrow: "Nghiên cứu & trí tuệ thị trường",
    title: "Góc nhìn của tổ chức — dễ đọc như tạp chí tài chính",
    items: [
      {
        tag: "Phân tích",
        title: "Insight tuần — VN-Index 1.268*",
        body: "Demo: dòng tiền bluechip ổn định; ưu tiên quan sát ngân hàng & công nghệ.",
      },
      {
        tag: "Doanh nghiệp",
        title: "Góc nhìn FPT — tăng trưởng dịch vụ*",
        body: "Khung phân tích mẫu: doanh thu hợp đồng, biên lợi nhuận, rủi ro FX.",
      },
      {
        tag: "Giáo dục",
        title: "Hướng dẫn quản lý rủi ro danh mục*",
        body: "Position sizing, stop logic và kỷ luật tái cân bằng — nội dung giáo dục.",
      },
    ],
  },
  why: {
    eyebrow: "Lợi ích nổi bật",
    title: "Giá trị kiểu CTCK đầu ngành — cho demo của bạn",
    support:
      "Các điểm dưới đây tham chiếu lợi ích phổ biến của CTCK lớn tại Việt Nam (vd. SSI): hệ sinh thái sản phẩm, nghiên cứu, nền tảng và hỗ trợ đa kênh.",
    items: [
      {
        title: "Vị thế & kinh nghiệm thị trường",
        body: "Lịch sử dài năm, quy mô khách hàng và uy tín tổ chức — minh họa bằng số liệu demo trên trang.",
      },
      {
        title: "Hệ sinh thái sản phẩm đầy đủ",
        body: "Cổ phiếu, trái phiếu, phái sinh, chứng quyền (CW), chứng chỉ quỹ — một quan hệ đối tác, nhiều lớp sản phẩm.",
      },
      {
        title: "Nghiên cứu & tư vấn chuyên sâu",
        body: "Báo cáo thị trường, góc nhìn doanh nghiệp và khung phân tích có cấu trúc — dễ đọc, có ngữ cảnh.",
      },
      {
        title: "Nền tảng giao dịch đa kênh",
        body: "Web trading, app mobile, theo dõi danh mục và cảnh báo — trải nghiệm thống nhất desktop ↔ mobile.",
      },
      {
        title: "Quản lý tài sản & quỹ",
        body: "Tiếp cận quỹ / giải pháp quản lý tài sản trong cùng hệ sinh thái — phù hợp khẩu vị rủi ro khác nhau.",
      },
      {
        title: "Hỗ trợ khách hàng đa kênh",
        body: "Zalo OA, hotline, livestream và tư vấn viên — liên hệ đúng kênh khi cần người thật.",
      },
    ],
    footnote:
      "* Demo — tham chiếu mô hình lợi ích CTCK đầu ngành (vd. SSI). Không phải trang hoặc cam kết chính thức của SSI.",
  },
  social: {
    eyebrow: "Kênh kết nối",
    title: "Zalo · TikTok · Livestream · Facebook",
    support:
      "Strip kênh social minh họa cho LP môi giới — thay bằng URL / handle thật khi go-live.",
    channels: [
      {
        id: "zalo",
        label: "Zalo OA",
        meta: "Chat tư vấn nhanh",
        href: "#open",
      },
      {
        id: "tiktok",
        label: "TikTok",
        meta: "@nva.invest · short video",
        href: "#open",
      },
      {
        id: "live",
        label: "Livestream",
        meta: "T3–T5 · 20:00",
        href: "#performance",
      },
      {
        id: "facebook",
        label: "Facebook",
        meta: "Fanpage & community",
        href: "#open",
      },
    ],
    footnote: "* Link demo nội trang — gắn Zalo/TikTok/Live thật khi triển khai.",
  },
  security: {
    eyebrow: "Bảo mật & tuân thủ",
    title: "Niềm tin được thiết kế vào nền tảng",
    support:
      "Quy định, bảo vệ khách hàng, bảo mật dữ liệu và kiểm soát rủi ro — trình bày như hệ thống kỹ thuật tinh tế, không phải icon khiên chung chung.",
    pillars: [
      { title: "Tuân thủ", body: "Khung vận hành và giám sát nội bộ." },
      { title: "Bảo vệ tài khoản", body: "Xác thực, phiên đăng nhập và kiểm soát truy cập." },
      { title: "Dữ liệu", body: "Mã hóa và chính sách xử lý thông tin rõ ràng." },
      { title: "Rủi ro", body: "Cảnh báo và kiểm soát phù hợp sản phẩm." },
    ],
  },
  fees: {
    eyebrow: "Biểu phí minh bạch",
    title: "Biết trước — trước khi giao dịch",
    support: "Bảng phí demo hardcode — thay bằng biểu phí chính thức khi go-live.",
    rows: [
      { item: "Phí giao dịch cổ phiếu HOSE/HNX (online)", value: "0,15% / lệnh*" },
      { item: "Phí giao dịch từ 500 triệu₫ / ngày", value: "0,12% / lệnh*" },
      { item: "Phí lưu ký tháng", value: "0,01% NAV · tối thiểu 20.000₫*" },
      { item: "Phí rút tiền về ngân hàng", value: "Miễn phí 3 lần/tháng*" },
      { item: "Thị trường quốc tế (cổ phiếu Mỹ)", value: "0,08 USD / cổ phiếu*" },
    ],
    footnote: "* Demo data — không áp dụng giao dịch thật.",
  },
  stories: {
    eyebrow: "Câu chuyện khách hàng",
    title: "Trải nghiệm được kể như biên tập",
    items: [
      {
        quote:
          "Sau 9 tháng, danh mục mẫu của tôi +11,4% YTD* — quan trọng hơn là tôi hiểu rõ từng lệnh lời và lỗ.",
        name: "Chị H., TP.HCM*",
        role: "Nhà đầu tư dài hạn · Demo",
      },
      {
        quote:
          "Lịch tư vấn 14:30 trên app giúp tôi không bỏ lỡ deal review — nền tảng nhìn nghiêm túc, không như app game.",
        name: "Anh T., Hà Nội*",
        role: "Nhà đầu tư chủ động · Demo",
      },
    ],
  },
  education: {
    eyebrow: "Tài nguyên",
    title: "Nguồn tri thức đáng tin",
    items: [
      { title: "Hướng dẫn mở tài khoản", body: "Quy trình từng bước, rõ ràng." },
      { title: "Hiểu rủi ro thị trường", body: "Giáo dục trước khi mở rộng sản phẩm." },
      { title: "Webinar & tin thị trường", body: "Cập nhật có chọn lọc — không spam tín hiệu." },
    ],
  },
  ai: {
    eyebrow: "Hỗ trợ số thông minh",
    title: "Trợ lý trong hệ sinh thái — không phải chatbot generic",
    support:
      "Tìm kiếm thông minh, gợi ý nghiên cứu và hỗ trợ thông tin tài khoản — gắn vào trải nghiệm Nguyễn Văn A Invest.",
    points: [
      "Tìm kiếm nghiên cứu và tài liệu",
      "Gợi ý danh mục mang tính thông tin",
      "Hỗ trợ khách hàng có ngữ cảnh",
    ],
  },
  account: {
    eyebrow: "Mở tài khoản",
    title: "Bốn bước — rõ ràng, trang trọng",
    steps: [
      { title: "Tạo tài khoản", body: "Thông tin cơ bản." },
      { title: "Xác minh danh tính", body: "Theo quy định." },
      { title: "Nạp tiền", body: "Hướng dẫn kênh hợp lệ." },
      { title: "Bắt đầu đầu tư", body: "Trong phạm vi sản phẩm đã mở." },
    ],
    ctaPrimary: "Mở tài khoản",
    ctaSecondary: "Nói chuyện với tư vấn",
  },
  final: {
    title: "Tự tin. Minh bạch. Kiểm soát.",
    support:
      "Nguyễn Văn A Invest — nơi niềm tin là nền tảng, công nghệ là bằng chứng, nhà đầu tư là trung tâm.",
    cta: "Mở tài khoản",
  },
  disclaimer:
    "Trang này là demo marketing do Dolphin Software thiết kế. Không phải lời mời chào đầu tư, không phải tư vấn đầu tư có giấy phép và không cam kết lợi nhuận. Rủi ro thị trường thuộc về nhà đầu tư.",
  footer: {
    rights: "© Demo — Nguyễn Văn A Invest",
    by: "Thiết kế demo bởi Dolphin Software",
  },
} as const;
