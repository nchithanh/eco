import type { NewsArticleCopy } from "@/lib/news-details";

const vi: NewsArticleCopy = {
  title:
    "Dolphin Care: Không Chỉ Chatbot AI — Còn Báo Cáo Insight Hằng Ngày Cho Admin",
  metaTitle: "Dolphin Care: Chatbot AI + Báo Cáo Insight Hằng Ngày",
  excerpt:
    "Dolphin Care không chỉ chăm sóc khách hàng 24/7 mà còn tổng hợp báo cáo hằng ngày với câu hỏi phổ biến, lead và gợi ý marketing cho admin.",
  body: [
    {
      type: "lead",
      text: "Dolphin Care xử lý hội thoại khách hàng 24/7 bằng AI, sau đó tổng hợp toàn bộ tương tác thành báo cáo hằng ngày — nêu rõ câu hỏi phổ biến, lead tiềm năng, điểm nghẽn lặp lại và gợi ý nội dung — giúp admin ra quyết định vận hành và marketing mà không cần đọc từng đoạn hội thoại.",
    },
    {
      type: "p",
      text: "Nhiều doanh nghiệp triển khai chatbot và xem đó là bước hoàn thiện quy trình chăm sóc khách hàng. Thời gian phản hồi rút ngắn từ vài giờ xuống vài giây. Khách hàng không còn phải chờ. Đội ngũ nhân sự bớt áp lực. Nghe có vẻ ổn.",
    },
    {
      type: "p",
      text: "Nhưng sau vài tuần, một câu hỏi khác bắt đầu xuất hiện: Tất cả những hội thoại đó đang nói lên điều gì?",
    },
    {
      type: "p",
      text: "Đây chính là lúc hầu hết các chatbot AI rơi vào im lặng. Chúng xử lý tương tác, rồi dừng lại. Không tổng hợp. Không nhận diện xu hướng. Không đề xuất bước tiếp theo. Kết quả là một kho log dữ liệu khổng lồ mà không ai có thời gian đọc — và những insight có giá trị nhất về khách hàng tiếp tục bị bỏ qua mỗi ngày.",
    },
    {
      type: "p",
      text: "Dolphin Care — sản phẩm của Dolphin Software (dolphin-software.io.vn) — được xây dựng để giải quyết chính xác vấn đề này. Không chỉ là chatbot trả lời tự động, Dolphin Care còn hoạt động như một hệ thống tổng hợp insight, chuyển dữ liệu hội thoại thực tế thành báo cáo hằng ngày cho admin — rõ ràng, có cấu trúc, và sẵn sàng hành động.",
    },
    {
      type: "p",
      text: "Bài viết này phân tích toàn bộ cách Dolphin Care hoạt động, báo cáo hằng ngày bao gồm những gì, và tại sao đó là sự khác biệt mà hầu hết các chatbot thông thường không có.",
    },
    {
      type: "h2",
      text: "Vấn Đề Thực Sự: Tương Tác Mà Không Có Insight",
    },
    {
      type: "p",
      text: "Hãy thử hình dung một doanh nghiệp thương mại điện tử vừa và nhỏ đang chạy chatbot trên website. Mỗi ngày, chatbot xử lý hơn 200 hội thoại — khách hỏi về thời gian giao hàng, chính sách đổi trả, tính tương thích sản phẩm, mã giảm giá, và hàng chục chủ đề khác.",
    },
    {
      type: "p",
      text: "Tất cả dữ liệu đó đều tồn tại. Nhưng nếu không có hệ thống lọc và nổi bật hóa những gì quan trọng, chúng chỉ là một đống văn bản thô. Đội vận hành không biết rằng 40 khách hàng đã hỏi cùng một câu về một tính năng còn thiếu. Đội marketing không biết có một sản phẩm đang thu hút lượng hỏi gấp ba lần bình thường. Đội nội dung tiếp tục đoán mò chủ đề để viết.",
    },
    {
      type: "p",
      text: "Đây là chi phí thực sự của một chatbot chỉ biết trả lời: nó tích lũy dữ liệu mà không chuyển hóa chúng thành quyết định. Doanh nghiệp có nhiều tương tác hơn, nhưng không hiểu khách hàng rõ hơn.",
    },
    {
      type: "h2",
      text: "Admin Thực Sự Cần Gì: Báo Cáo Cho Biết Bước Tiếp Theo",
    },
    {
      type: "p",
      text: "Một chatbot trả lời câu hỏi là công cụ hỗ trợ. Một chatbot trả lời câu hỏi và cho bạn biết những câu hỏi đó tiết lộ điều gì — đó mới là tài sản vận hành thực sự.",
    },
    {
      type: "p",
      text: "Admin không cần đọc transcript. Admin cần biết: Hôm nay khách hỏi nhiều nhất về vấn đề gì? Lead nào cần follow-up gấp? Điểm nào trên website đang gây nhầm lẫn? Nên đăng bài về chủ đề nào tuần tới?",
    },
    {
      type: "p",
      text: "Đây chính là khoảng cách mà Dolphin Care lấp đầy. Thay vì để dữ liệu hội thoại nằm yên trong log, Dolphin Care xử lý, phân loại và tóm tắt toàn bộ — rồi gửi cho admin một báo cáo có cấu trúc vào cuối mỗi ngày.",
    },
    {
      type: "h2",
      text: "Dolphin Care Hoạt Động Như Thế Nào: Hệ Thống Hai Lớp AI",
    },
    {
      type: "h3",
      text: "Lớp 1: Chăm sóc khách hàng bằng AI theo thời gian thực",
    },
    {
      type: "p",
      text: "Lớp đầu tiên của Dolphin Care xử lý toàn bộ hội thoại đầu vào trên website hoặc các kênh tích hợp — trả lời câu hỏi thường gặp, thu thập thông tin lead, hướng dẫn khách hàng qua quy trình chọn sản phẩm, và chuyển giao các hội thoại phức tạp cho nhân viên phụ trách.",
    },
    {
      type: "p",
      text: "Khác với chatbot dạng cây quyết định cứng nhắc, Dolphin Care sử dụng khả năng hiểu ngôn ngữ tự nhiên để nhận diện ý định của khách hàng, dù cùng một câu hỏi được diễn đạt theo nhiều cách khác nhau. Điều này có nghĩa là bot không chỉ khớp từ khóa — nó hiểu ngữ cảnh.",
    },
    {
      type: "p",
      text: "Kết quả: khách hàng nhận được phản hồi chính xác 24/7, kể cả ngoài giờ làm việc. Không có lead nào bị bỏ sót vì ngoài giờ. Không có câu hỏi lặp đi lặp lại tiêu tốn thời gian nhân sự.",
    },
    {
      type: "image",
      src: "/news/dolphin-care-ai-realtime-chat.jpg",
      alt: "Giao diện chat AI Dolphin Care trên website doanh nghiệp, hỗ trợ khách hàng theo thời gian thực",
    },
    {
      type: "h3",
      text: "Lớp 2: Tổng hợp insight hằng ngày cho admin",
    },
    {
      type: "p",
      text: "Đây là điểm khác biệt cốt lõi của Dolphin Care. Song song với việc xử lý hội thoại, hệ thống AI phân tích, phân loại và nhận diện các mẫu lặp lại trong toàn bộ dữ liệu tương tác. Cuối mỗi ngày, admin nhận được một báo cáo tổng hợp — không phải danh sách transcript thô, mà là những insight đã được cấu trúc, sẵn sàng để ra quyết định.",
    },
    {
      type: "p",
      text: "Đây không phải dữ liệu để \"tham khảo thêm.\" Đây là thông tin để hành động ngay hôm nay.",
    },
    {
      type: "image",
      src: "/news/dolphin-care-daily-report-dashboard.jpg",
      alt: "Bảng điều khiển báo cáo insight hằng ngày của Dolphin Care cho admin",
    },
    {
      type: "h2",
      text: "Báo Cáo Hằng Ngày Của Dolphin Care Bao Gồm Những Gì?",
    },
    {
      type: "h3",
      text: "Câu hỏi phổ biến nhất trong ngày",
    },
    {
      type: "p",
      text: "Báo cáo xác định những câu hỏi xuất hiện nhiều nhất trong tất cả hội thoại. Nếu 30% khách hàng hỏi về thời gian giao hàng trong tuần này, đó là tín hiệu rõ ràng: trang FAQ cần cập nhật, hoặc cần thêm thông báo chủ động về vận chuyển để giảm tải câu hỏi tương tự.",
    },
    {
      type: "p",
      text: "Thông tin này giúp đội vận hành phân biệt đâu là câu hỏi bình thường, đâu là vấn đề đang leo thang cần xử lý ngay.",
    },
    {
      type: "h3",
      text: "Lead tiềm năng cần follow-up",
    },
    {
      type: "p",
      text: "Không phải mọi khách hàng trò chuyện đều mua ngay. Dolphin Care gắn cờ những hội thoại mà khách hàng thể hiện ý định mua cao nhưng chưa chuyển đổi — tạo ra danh sách ưu tiên cho đội sales hoặc chăm sóc khách hàng theo dõi thủ công. Thay vì để lead nguội dần, admin biết chính xác ai cần được liên hệ lại và lý do tại sao.",
    },
    {
      type: "h3",
      text: "Điểm nghẽn và vấn đề lặp lại",
    },
    {
      type: "p",
      text: "Khi cùng một phàn nàn hoặc điểm nhầm lẫn xuất hiện liên tục qua nhiều hội thoại, đó hiếm khi là trùng hợp. Dolphin Care nổi bật hóa những mẫu lặp lại này để đội vận hành có thể giải quyết nguyên nhân gốc rễ thay vì chữa triệu chứng. Một trang sản phẩm gây nhầm lẫn, một chính sách kích hoạt phàn nàn, một luồng thanh toán tạo ra nhiều câu hỏi — tất cả đều hiện lên rõ ràng trong báo cáo.",
    },
    {
      type: "h3",
      text: "Gợi ý nội dung và marketing từ hội thoại thực tế",
    },
    {
      type: "p",
      text: "Đây là một trong những tính năng ít được khai thác nhất của Dolphin Care, nhưng lại có giá trị cao nhất cho đội marketing và nội dung.",
    },
    {
      type: "p",
      text: "Vì chatbot AI đang lắng nghe khách hàng mỗi ngày, hệ thống có thể nhận diện những chủ đề rõ ràng đang nằm trong tâm trí khách hàng — những chủ đề chưa được trả lời tốt trên website, trong email, hay trên mạng xã hội. Admin nhận được gợi ý cụ thể: viết bài blog về chủ đề X, làm rõ copy trên landing page về Y, cân nhắc chạy khuyến mãi cho nhóm Z. Đây không phải phỏng đoán. Đây là insight trực tiếp từ những gì khách hàng thực sự hỏi.",
    },
    {
      type: "image",
      src: "/news/dolphin-care-marketing-content-insights.jpg",
      alt: "Gợi ý nội dung và marketing từ insight hội thoại khách hàng trong báo cáo Dolphin Care",
    },
    {
      type: "h2",
      text: "Ứng Dụng Thực Tế: Doanh Nghiệp Làm Gì Với Dữ Liệu Này?",
    },
    {
      type: "h3",
      text: "Điều chỉnh vận hành kịp thời",
    },
    {
      type: "p",
      text: "Khi Dolphin Care gắn cờ một câu hỏi lặp lại về tình trạng đơn hàng, người quản lý vận hành có thể kiểm tra ngay xem liệu một sự chậm trễ trong fulfillment có đang gây ra đột biến câu hỏi hay không — và xử lý trước khi nó trở thành review tiêu cực. Insight hội thoại khách hàng, trong trường hợp này, hoạt động như hệ thống cảnh báo sớm.",
    },
    {
      type: "h3",
      text: "Tối ưu hóa marketing dựa trên dữ liệu thực",
    },
    {
      type: "p",
      text: "Một đội marketing biết sản phẩm nào đang tạo ra nhiều hỏi han nhất có thể phân bổ lại ngân sách quảng cáo một cách chính xác. Nếu báo cáo tuần của Dolphin Care liên tục cho thấy sự quan tâm cao với một danh mục sản phẩm cụ thể, dữ liệu đó trực tiếp định hướng ưu tiên chiến dịch — không cần khảo sát riêng hay phân tích sâu từ công cụ ngoài.",
    },
    {
      type: "h3",
      text: "Ý tưởng bài đăng và nội dung từ hội thoại thực tế",
    },
    {
      type: "p",
      text: "Đội nội dung thường vật lộn với câu hỏi viết về chủ đề gì. Dolphin Care xóa bỏ vấn đề đó bằng cách chuyển câu hỏi thực của khách hàng thành brief nội dung. Nếu khách hàng liên tục hỏi \"Sự khác biệt giữa sản phẩm A và B là gì?\" — đó là bài viết so sánh đang chờ được tạo ra. Dữ liệu hội thoại từ chatbot AI trở thành lịch nội dung thực tế.",
    },
    {
      type: "h3",
      text: "Cải thiện website và trang sản phẩm",
    },
    {
      type: "p",
      text: "Câu hỏi lặp lại thường chỉ ra khoảng trống trong nội dung hiện có. Nếu khách hàng liên tục hỏi thông tin mà lẽ ra đã có trên trang sản phẩm, đó là tín hiệu trực tiếp cho đội web. Báo cáo insight hằng ngày của Dolphin Care làm cho những khoảng trống này trở nên rõ ràng và có thể theo dõi theo thời gian — vì vậy cải tiến là có thể đo lường, không chỉ là giả định.",
    },
    {
      type: "h2",
      text: "Đừng Để Hội Thoại Khách Hàng Trở Thành Dữ Liệu Bị Lãng Quên",
    },
    {
      type: "p",
      text: "Mỗi cuộc trò chuyện mà doanh nghiệp của bạn nhận được là một điểm dữ liệu. Trong một tuần, đó là hàng trăm điểm dữ liệu. Trong một tháng, đó là bản đồ chi tiết về những gì khách hàng muốn, nơi họ gặp khó khăn, và điều gì sẽ khiến họ có nhiều khả năng mua hơn.",
    },
    {
      type: "p",
      text: "Hầu hết doanh nghiệp để bản đồ đó không được đọc. Dolphin Care biến nó thành bản tin hằng ngày cho admin.",
    },
    {
      type: "p",
      text: "Nếu bạn đang dùng chatbot AI để xử lý hội thoại khách hàng, câu hỏi đáng đặt ra là: điều gì xảy ra với những hội thoại đó sau đó? Nếu câu trả lời là không có gì — đã đến lúc tìm hiểu Dolphin Care làm khác biệt như thế nào.",
    },
    {
      type: "p",
      text: "Liên hệ Dolphin Software tại dolphin-software.io.vn để tìm hiểu thêm về [Dolphin Care](/dolphin-care/) và nhận tư vấn miễn phí cho doanh nghiệp của bạn.",
    },
  ],
  faq: [
    {
      q: "Dolphin Care khác gì so với chatbot AI thông thường?",
      a: "Hầu hết chatbot AI chỉ tập trung vào việc trả lời hội thoại của khách hàng. Dolphin Care kết hợp hai lớp: lớp chăm sóc khách hàng theo thời gian thực bằng AI và lớp tổng hợp insight hằng ngày — chuyển dữ liệu hội thoại thành báo cáo vận hành và marketing cụ thể cho admin. Đây là điểm khác biệt cốt lõi giữa chatbot thông thường (chỉ trả lời) và Dolphin Care (trả lời + tổng hợp insight + gợi ý hành động).",
    },
    {
      q: "Báo cáo hằng ngày của Dolphin Care được tạo ra như thế nào?",
      a: "AI của Dolphin Care phân tích toàn bộ hội thoại trong ngày, phân loại theo chủ đề và ý định, sau đó nhận diện các mẫu lặp — câu hỏi phổ biến, phàn nàn lặp lại, và lead có ý định mua cao. Những phát hiện này được tổng hợp thành báo cáo có cấu trúc gửi đến admin vào cuối ngày.",
    },
    {
      q: "Dolphin Care có hỗ trợ quyết định marketing không?",
      a: "Có. Bằng cách theo dõi những gì khách hàng hỏi nhiều nhất, Dolphin Care gợi ý các chủ đề nội dung và chiến dịch cụ thể dựa trên hành vi thực tế của khách hàng — không phải giả định. Những gợi ý này xuất hiện trong báo cáo hằng ngày và có thể định hướng trực tiếp bài đăng mạng xã hội, chủ đề blog, chiến dịch email và nhắm mục tiêu quảng cáo.",
    },
    {
      q: "Dolphin Care có phù hợp với doanh nghiệp nhỏ không?",
      a: "Dolphin Care được thiết kế để có ích ở mọi quy mô. Với doanh nghiệp nhỏ có ít nhân sự, việc tự động hóa chăm sóc khách hàng kết hợp với insight hằng ngày thay thế nhu cầu về một bộ phận phân tích riêng. Báo cáo hằng ngày giúp admin nắm bắt thông tin mà không cần dành thời gian xem xét dữ liệu thô.",
    },
    {
      q: "Loại hình doanh nghiệp nào hưởng lợi nhiều nhất từ Dolphin Care?",
      a: "Bất kỳ doanh nghiệp nào nhận được lượng hỏi han đáng kể từ khách hàng — thương mại điện tử, spa, phòng khám, nhà hàng, bất động sản, cơ sở giáo dục hoặc doanh nghiệp có hiện diện trực tuyến — đều có thể hưởng lợi từ Dolphin Care. Chatbot AI xử lý càng nhiều hội thoại, insight hằng ngày càng phong phú và chính xác hơn.",
    },
    {
      q: "Dolphin Care có thể tích hợp vào website hiện có không?",
      a: "Có. Dolphin Care có thể được thêm vào website đang hoạt động hoặc tích hợp cùng một dự án website mới với Dolphin Software.",
    },
  ],
};

const en: NewsArticleCopy = {
  title:
    "Dolphin Care: Not just an AI chatbot — daily insight reports for admins",
  metaTitle: "Dolphin Care: AI chatbot + daily insight reports",
  excerpt:
    "Dolphin Care handles customer chats 24/7 and delivers a daily report with top questions, leads, and marketing ideas for admins.",
  body: [
    {
      type: "lead",
      text: "Dolphin Care runs customer conversations with AI around the clock, then rolls every interaction into a daily report — top questions, warm leads, recurring friction, and content ideas — so admins can act without reading every transcript.",
    },
    {
      type: "p",
      text: "Most businesses deploy a chatbot and treat it as the finish line for customer care. Response time drops from hours to seconds. Staff pressure eases. It sounds fine — until a new question appears: what are all those conversations actually telling you?",
    },
    {
      type: "p",
      text: "Typical AI chatbots stop there: they handle chats, then silence. No synthesis, no trends, no next steps — just logs nobody has time to read. Dolphin Care from Dolphin Software closes that gap with a second layer: structured daily insight for operators and marketers.",
    },
    {
      type: "h2",
      text: "Two AI layers: real-time care + daily insight",
    },
    {
      type: "p",
      text: "Layer 1 answers FAQs, captures leads, guides product choice, and escalates complex chats — with natural-language intent, not rigid keyword trees. Layer 2 classifies every conversation and surfaces patterns into an end-of-day report admins can act on today.",
    },
    {
      type: "image",
      src: "/news/dolphin-care-ai-realtime-chat.jpg",
      alt: "Dolphin Care AI chat widget on a business website",
    },
    {
      type: "image",
      src: "/news/dolphin-care-daily-report-dashboard.jpg",
      alt: "Dolphin Care daily insight dashboard for admins",
    },
    {
      type: "h2",
      text: "What the daily report includes",
    },
    {
      type: "p",
      text: "Top questions of the day, high-intent leads to follow up, recurring bottlenecks, and content/marketing suggestions drawn from real customer language — not guesswork.",
    },
    {
      type: "image",
      src: "/news/dolphin-care-marketing-content-insights.jpg",
      alt: "Marketing and content suggestions from Dolphin Care chat insights",
    },
    {
      type: "h2",
      text: "How teams use it",
    },
    {
      type: "p",
      text: "Ops spots fulfillment issues early. Marketing reallocates budget toward products with rising questions. Content teams get briefs from actual customer asks. Web teams fix gaps on product pages when the same question repeats.",
    },
    {
      type: "p",
      text: "See [Dolphin Care](/dolphin-care/) or [contact us](/#contact) for a free consult.",
    },
  ],
  faq: [
    {
      q: "How is Dolphin Care different from a normal AI chatbot?",
      a: "Most bots only reply. Dolphin Care adds daily insight synthesis — operational and marketing reports for admins.",
    },
    {
      q: "How is the daily report generated?",
      a: "AI classifies the day's chats by topic and intent, detects repeats and high-intent leads, and delivers a structured summary.",
    },
    {
      q: "Does it help marketing decisions?",
      a: "Yes — content topics, landing copy gaps, and campaign ideas from what customers actually ask.",
    },
    {
      q: "Is it suitable for small businesses?",
      a: "Yes — automation plus daily insight replaces a separate analytics function for lean teams.",
    },
    {
      q: "Who benefits most?",
      a: "E-commerce, clinics, spas, restaurants, real estate, education — any business with meaningful inbound questions online.",
    },
    {
      q: "Can it integrate with an existing site?",
      a: "Yes — add to a live website or bundle with a new build from Dolphin Software.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title:
    "Dolphin Care：チャットbotだけではない — 管理者向け日次インサイトレポート",
  metaTitle: "Dolphin Care：AIチャット + 日次インサイト",
  excerpt:
    "Dolphin Careは24時間顧客対応に加え、よくある質問・リード・マーケ提案を日次レポートで管理者に届けます。",
  body: [
    {
      type: "lead",
      text: "Dolphin CareはAIで顧客対話を24時間処理し、全インタラクションを日次レポートに集約 — 頻出質問、ホットリード、繰り返しの障害、コンテンツ案 — 管理者が全文を読まずに意思決定できます。",
    },
    {
      type: "p",
      text: "多くの企業はチャットbot導入で顧客対応を完了とみなします。しかし「会話データが何を示すか」は見えません。Dolphin Careは2層AIでその空白を埋めます。",
    },
    {
      type: "h2",
      text: "2層のAI：リアルタイム対応 + 日次インサイト",
    },
    {
      type: "p",
      text: "第1層はFAQ・リード獲得・商品案内・エスカレーション。第2層は分類とパターン検出で、構造化レポートを毎日配信。",
    },
    {
      type: "image",
      src: "/news/dolphin-care-ai-realtime-chat.jpg",
      alt: "Dolphin CareのAIチャットウィジェット",
    },
    {
      type: "image",
      src: "/news/dolphin-care-daily-report-dashboard.jpg",
      alt: "Dolphin Care日次インサイトダッシュボード",
    },
    {
      type: "h2",
      text: "日次レポートの内容",
    },
    {
      type: "p",
      text: "頻出質問、フォローアップリード、繰り返し障害、実際の会話からのコンテンツ・マーケ提案。",
    },
    {
      type: "image",
      src: "/news/dolphin-care-marketing-content-insights.jpg",
      alt: "会話インサイトからのマーケ・コンテンツ提案",
    },
    {
      type: "p",
      text: "[Dolphin Care](/dolphin-care/) または [お問い合わせ](/#contact)",
    },
  ],
  faq: [
    {
      q: "通常のAIチャットbotとの違いは？",
      a: "返答に加え、日次インサイトレポートで運用・マーケ判断を支援。",
    },
    {
      q: "日次レポートの仕組みは？",
      a: "当日の会話を分類し、パターンと高意向リードを構造化して配信。",
    },
    {
      q: "マーケ判断に使える？",
      a: "はい。顧客の実際の質問からコンテンツ・キャンペーン案を提示。",
    },
    {
      q: "小規模事業者向け？",
      a: "はい。少人数でも分析部門なしで日次把握が可能。",
    },
    {
      q: "どの業種に効く？",
      a: "EC、クリニック、飲食、不動産、教育などオンライン問い合わせが多い業種。",
    },
    {
      q: "既存サイトに組み込める？",
      a: "はい。稼働中サイトまたは新規構築プロジェクトに追加可能。",
    },
  ],
};

export const dolphinCareBaoCaoInsightHangNgayCopy = { vi, en, ja };
