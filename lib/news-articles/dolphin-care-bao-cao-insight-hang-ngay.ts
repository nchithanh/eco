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
      text: "Most businesses deploy a chatbot and treat it as the finish line for customer care. Response time drops from hours to seconds. Customers stop waiting. Staff pressure eases. It sounds fine.",
    },
    {
      type: "p",
      text: "But after a few weeks, a new question appears: what are all those conversations actually telling you?",
    },
    {
      type: "p",
      text: "This is where typical AI chatbots go silent. They handle interactions, then stop. No synthesis, no trend detection, no next steps. The result is a massive log nobody has time to read — and the most valuable customer insight gets ignored every day.",
    },
    {
      type: "p",
      text: "Dolphin Care — a product from Dolphin Software (dolphin-software.io.vn) — is built to solve exactly this problem. More than an auto-reply chatbot, Dolphin Care operates as an insight synthesis system, converting real conversation data into daily admin reports — clear, structured, and ready to act on.",
    },
    {
      type: "p",
      text: "This article breaks down how Dolphin Care works, what the daily report includes, and why that is the difference most typical chatbots do not have.",
    },
    {
      type: "h2",
      text: "The real problem: interaction without insight",
    },
    {
      type: "p",
      text: "Picture a small e-commerce business running a chatbot on its website. Every day, the bot handles over 200 conversations — customers asking about shipping times, return policies, product compatibility, promo codes, and dozens of other topics.",
    },
    {
      type: "p",
      text: "All that data exists. But without a system to filter and highlight what matters, it is just raw text. Ops does not know 40 customers asked the same question about a missing feature. Marketing does not know one product is attracting triple the usual questions. Content keeps guessing what topics to write about.",
    },
    {
      type: "p",
      text: "This is the real cost of a reply-only chatbot: it accumulates data without converting it into decisions. The business has more interactions — but does not understand customers any better.",
    },
    {
      type: "h2",
      text: "What admins actually need: reports that tell you the next step",
    },
    {
      type: "p",
      text: "A chatbot that answers questions is a support tool. A chatbot that answers questions and tells you what those questions reveal — that is a real operational asset.",
    },
    {
      type: "p",
      text: "Admins do not need transcripts. Admins need to know: what did customers ask most about today? Which leads need urgent follow-up? What part of the website is causing confusion? What topic should we post about next week?",
    },
    {
      type: "p",
      text: "This is the gap Dolphin Care fills. Instead of leaving conversation data idle in logs, Dolphin Care processes, classifies, and summarizes everything — then sends admins a structured report at the end of each day.",
    },
    {
      type: "h2",
      text: "How Dolphin Care works: two-layer AI system",
    },
    {
      type: "h3",
      text: "Layer 1: Real-time AI customer care",
    },
    {
      type: "p",
      text: "The first layer of Dolphin Care handles all incoming conversations on the website or integrated channels — answering FAQs, capturing lead information, guiding customers through product selection, and handing off complex conversations to the right staff member.",
    },
    {
      type: "p",
      text: "Unlike rigid decision-tree chatbots, Dolphin Care uses natural-language understanding to recognize customer intent, even when the same question is phrased many different ways. The bot does not just match keywords — it understands context.",
    },
    {
      type: "p",
      text: "Result: customers get accurate responses 24/7, even outside business hours. No lead is missed because it is after hours. No repeat questions burn staff time.",
    },
    {
      type: "image",
      src: "/news/dolphin-care-ai-realtime-chat.jpg",
      alt: "Dolphin Care AI chat widget on a business website",
    },
    {
      type: "h3",
      text: "Layer 2: Daily insight synthesis for admins",
    },
    {
      type: "p",
      text: "This is the core difference of Dolphin Care. Alongside handling conversations, the AI system analyzes, classifies, and detects recurring patterns across all interaction data. At the end of each day, admins receive a synthesis report — not a list of raw transcripts, but structured insights ready for decision-making.",
    },
    {
      type: "p",
      text: "This is not data \"for reference.\" This is information to act on today.",
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
      type: "h3",
      text: "Top questions of the day",
    },
    {
      type: "p",
      text: "The report identifies which questions appeared most across all conversations. If 30% of customers asked about shipping time this week, that is a clear signal: the FAQ page needs updating, or the site needs proactive shipping notices to reduce similar questions.",
    },
    {
      type: "p",
      text: "This information helps ops teams distinguish normal questions from escalating issues that need immediate handling.",
    },
    {
      type: "h3",
      text: "High-intent leads to follow up",
    },
    {
      type: "p",
      text: "Not every customer who chats converts immediately. Dolphin Care flags conversations where customers showed high purchase intent but did not convert — creating a priority list for sales or customer care to follow up manually. Instead of letting leads go cold, admins know exactly who needs re-contact and why.",
    },
    {
      type: "h3",
      text: "Recurring bottlenecks and issues",
    },
    {
      type: "p",
      text: "When the same complaint or confusion point appears repeatedly across conversations, it is rarely coincidence. Dolphin Care highlights these recurring patterns so ops can address the root cause instead of treating symptoms. A confusing product page, a policy triggering complaints, a checkout flow generating many questions — all surface clearly in the report.",
    },
    {
      type: "h3",
      text: "Content and marketing suggestions from real conversations",
    },
    {
      type: "p",
      text: "This is one of the least exploited features of Dolphin Care, yet the most valuable for marketing and content teams.",
    },
    {
      type: "p",
      text: "Because the AI chatbot is listening to customers every day, the system can detect clear topics on customer minds — topics not yet answered well on the website, in emails, or on social media. Admins receive specific suggestions: write a blog post about topic X, clarify landing-page copy about Y, consider running a promo for group Z. This is not guesswork. This is direct insight from what customers actually ask.",
    },
    {
      type: "image",
      src: "/news/dolphin-care-marketing-content-insights.jpg",
      alt: "Marketing and content suggestions from Dolphin Care chat insights",
    },
    {
      type: "h2",
      text: "Real use cases: what businesses do with this data",
    },
    {
      type: "h3",
      text: "Adjust operations in real time",
    },
    {
      type: "p",
      text: "When Dolphin Care flags a repeat question about order status, ops managers can immediately check whether a fulfillment delay is causing a surge in questions — and handle it before it becomes a negative review. Customer conversation insight, in this case, acts as an early-warning system.",
    },
    {
      type: "h3",
      text: "Optimize marketing based on real data",
    },
    {
      type: "p",
      text: "A marketing team that knows which products are generating the most questions can reallocate ad budget precisely. If Dolphin Care weekly reports consistently show high interest in a specific product category, that data directly informs campaign priorities — no separate survey or deep tool analysis needed.",
    },
    {
      type: "h3",
      text: "Content ideas from real conversations",
    },
    {
      type: "p",
      text: "Content teams often struggle with what topics to write about. Dolphin Care removes that problem by converting real customer questions into content briefs. If customers keep asking \"What is the difference between product A and B?\" — that is a comparison post waiting to be written. Chatbot AI conversation data becomes a real content calendar.",
    },
    {
      type: "h3",
      text: "Improve website and product pages",
    },
    {
      type: "p",
      text: "Repeat questions often point to gaps in existing content. If customers keep asking for information that should already be on the product page, that is a direct signal for the web team. Dolphin Care daily insight reports make those gaps visible and trackable over time — so improvements are measurable, not just assumptions.",
    },
    {
      type: "h2",
      text: "Do not let customer conversations become forgotten data",
    },
    {
      type: "p",
      text: "Every conversation your business receives is a data point. In a week, that is hundreds of data points. In a month, that is a detailed map of what customers want, where they get stuck, and what will make them more likely to buy.",
    },
    {
      type: "p",
      text: "Most businesses let that map go unread. Dolphin Care turns it into a daily briefing for admins.",
    },
    {
      type: "p",
      text: "If you are using an AI chatbot to handle customer conversations, the question worth asking is: what happens to those conversations afterward? If the answer is nothing — it is time to see how Dolphin Care makes the difference.",
    },
    {
      type: "p",
      text: "Contact Dolphin Software at dolphin-software.io.vn to learn more about [Dolphin Care](/dolphin-care/) and get a free consultation for your business.",
    },
  ],
  faq: [
    {
      q: "How is Dolphin Care different from a normal AI chatbot?",
      a: "Most AI chatbots only focus on answering customer conversations. Dolphin Care combines two layers: real-time AI customer care and daily insight synthesis — converting conversation data into specific operational and marketing reports for admins. This is the core difference between typical chatbots (reply only) and Dolphin Care (reply + insight synthesis + action suggestions).",
    },
    {
      q: "How is the daily report generated?",
      a: "Dolphin Care AI analyzes all conversations of the day, classifies by topic and intent, then detects recurring patterns — top questions, repeat complaints, and high-intent leads. These findings are synthesized into a structured report sent to admins at day's end.",
    },
    {
      q: "Does it help marketing decisions?",
      a: "Yes. By tracking what customers ask most, Dolphin Care suggests specific content topics and campaigns based on actual customer behavior — not assumptions. These suggestions appear in the daily report and can directly inform social posts, blog topics, email campaigns, and ad targeting.",
    },
    {
      q: "Is it suitable for small businesses?",
      a: "Dolphin Care is designed to be useful at any scale. For small businesses with few staff, automating customer care combined with daily insight replaces the need for a separate analytics function. Daily reports let admins grasp information without spending time reviewing raw data.",
    },
    {
      q: "Who benefits most?",
      a: "Any business receiving significant inbound questions from customers — e-commerce, spas, clinics, restaurants, real estate, education, or businesses with an online presence — can benefit from Dolphin Care. The more conversations the AI chatbot handles, the richer and more accurate the daily insight becomes.",
    },
    {
      q: "Can it integrate with an existing site?",
      a: "Yes. Dolphin Care can be added to a live website or integrated with a new website project from Dolphin Software.",
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
      text: "多くの企業はチャットbotを導入し、それで顧客対応が完了したと考えます。応答時間は数時間から数秒に短縮され、顧客を待たせず、スタッフの負担も軽減されます。一見良さそうに聞こえます。",
    },
    {
      type: "p",
      text: "しかし数週間後、新たな疑問が浮かびます：これらの会話は実際に何を伝えているのでしょうか？",
    },
    {
      type: "p",
      text: "ここで大半のAIチャットbotは沈黙します。会話を処理して終わり。要約なし、トレンド検出なし、次のステップなし。結果として、誰も読む時間のない膨大なログが残り、最も価値のある顧客インサイトが毎日無視されることになります。",
    },
    {
      type: "p",
      text: "Dolphin Care — Dolphin Software（dolphin-software.io.vn）の製品 — は、まさにこの問題を解決するために構築されました。単なる自動返信チャットbotではなく、Dolphin Careはインサイト統合システムとして機能し、実際の会話データを管理者向けの日次レポートに変換します — 明確で構造化され、すぐに行動できる形で。",
    },
    {
      type: "p",
      text: "この記事では、Dolphin Careの仕組み、日次レポートの内容、そしてそれが一般的なチャットbotにはない差別化要因である理由を詳しく説明します。",
    },
    {
      type: "h2",
      text: "本当の問題：インサイトのないインタラクション",
    },
    {
      type: "p",
      text: "Webサイトでチャットbotを運用している中小規模のEコマース企業を想像してください。毎日、botは200件以上の会話を処理しています — 顧客は配送時間、返品ポリシー、商品の互換性、プロモコード、その他数十のトピックについて質問します。",
    },
    {
      type: "p",
      text: "そのデータはすべて存在します。しかし、重要なものをフィルタリングして強調表示するシステムがなければ、それは単なる生のテキストです。運用チームは、40人の顧客が欠落している機能について同じ質問をしていることを知りません。マーケティングチームは、ある商品が通常の3倍の質問を集めていることを知りません。コンテンツチームは書くべきトピックを推測し続けます。",
    },
    {
      type: "p",
      text: "これが返信のみのチャットbotの本当のコストです：データは蓄積されますが、意思決定には変換されません。ビジネスはより多くのインタラクションを持ちますが、顧客をより深く理解することはできません。",
    },
    {
      type: "h2",
      text: "管理者が本当に必要としているもの：次のステップを示すレポート",
    },
    {
      type: "p",
      text: "質問に答えるチャットbotはサポートツールです。質問に答え、その質問が何を明らかにするかを教えてくれるチャットbot — それこそが真の運用資産です。",
    },
    {
      type: "p",
      text: "管理者はトランスクリプトを必要としていません。管理者が知る必要があるのは：今日、顧客は何について最も多く質問しましたか？ どのリードが緊急のフォローアップを必要としていますか？ Webサイトのどの部分が混乱を引き起こしていますか？ 来週、どのトピックについて投稿すべきですか？",
    },
    {
      type: "p",
      text: "これがDolphin Careが埋めるギャップです。会話データをログに放置する代わりに、Dolphin Careはすべてを処理、分類、要約し、毎日の終わりに管理者に構造化されたレポートを送信します。",
    },
    {
      type: "h2",
      text: "Dolphin Careの仕組み：2層AIシステム",
    },
    {
      type: "h3",
      text: "第1層：リアルタイムAI顧客対応",
    },
    {
      type: "p",
      text: "Dolphin Careの第1層は、WebサイトまたはChatbot統合チャネルでのすべての受信会話を処理します — FAQへの回答、リード情報の取得、商品選択のガイド、複雑な会話の適切なスタッフへの引き継ぎ。",
    },
    {
      type: "p",
      text: "硬直した決定木型チャットbotとは異なり、Dolphin Careは自然言語理解を使用して顧客の意図を認識します。同じ質問が多様な方法でフレーズされても対応できます。botはキーワードをマッチングするだけでなく、コンテキストを理解します。",
    },
    {
      type: "p",
      text: "結果：顧客は営業時間外でも24時間365日正確な応答を受け取ります。営業時間外のためにリードを逃すことはありません。繰り返しの質問がスタッフの時間を消費することもありません。",
    },
    {
      type: "image",
      src: "/news/dolphin-care-ai-realtime-chat.jpg",
      alt: "企業WebサイトのDolphin Care AIチャットウィジェット",
    },
    {
      type: "h3",
      text: "第2層：管理者向け日次インサイト統合",
    },
    {
      type: "p",
      text: "これがDolphin Careの中核的な差別化要因です。会話を処理すると同時に、AIシステムはすべてのインタラクションデータ全体で分析、分類、繰り返しパターンを検出します。毎日の終わりに、管理者は統合レポートを受け取ります — 生のトランスクリプトのリストではなく、意思決定に使える構造化されたインサイトです。",
    },
    {
      type: "p",
      text: "これは「参考用」のデータではありません。今日行動するための情報です。",
    },
    {
      type: "image",
      src: "/news/dolphin-care-daily-report-dashboard.jpg",
      alt: "管理者向けDolphin Care日次インサイトダッシュボード",
    },
    {
      type: "h2",
      text: "日次レポートの内容",
    },
    {
      type: "h3",
      text: "その日の最頻出質問",
    },
    {
      type: "p",
      text: "レポートは、すべての会話で最も多く出現した質問を特定します。今週、顧客の30%が配送時間について質問した場合、それは明確なシグナルです：FAQページの更新が必要か、類似の質問を減らすために配送に関する積極的な通知がサイトに必要です。",
    },
    {
      type: "p",
      text: "この情報は、運用チームが通常の質問と即時対応が必要なエスカレーション問題を区別するのに役立ちます。",
    },
    {
      type: "h3",
      text: "フォローアップが必要な高意向リード",
    },
    {
      type: "p",
      text: "チャットをするすべての顧客がすぐに購入するわけではありません。Dolphin Careは、顧客が高い購入意向を示したが購入しなかった会話にフラグを立てます — セールスまたはカスタマーケアチームが手動でフォローアップするための優先リストを作成します。リードが冷めていくのを許す代わりに、管理者は誰に再連絡が必要で、その理由を正確に把握できます。",
    },
    {
      type: "h3",
      text: "繰り返しのボトルネックと問題",
    },
    {
      type: "p",
      text: "同じ苦情や混乱ポイントが会話全体で繰り返し出現する場合、それはめったに偶然ではありません。Dolphin Careはこれらの繰り返しパターンを強調表示し、運用チームが症状を治療する代わりに根本原因に対処できるようにします。混乱を招く商品ページ、苦情を引き起こすポリシー、多くの質問を生成するチェックアウトフロー — すべてがレポートで明確に浮上します。",
    },
    {
      type: "h3",
      text: "実際の会話からのコンテンツとマーケティング提案",
    },
    {
      type: "p",
      text: "これはDolphin Careの最も活用されていない機能の1つですが、マーケティングおよびコンテンツチームにとって最も価値があります。",
    },
    {
      type: "p",
      text: "AIチャットbotが毎日顧客の話を聞いているため、システムは顧客の心にある明確なトピックを検出できます — Webサイト、メール、ソーシャルメディアでまだ十分に回答されていないトピック。管理者は具体的な提案を受け取ります：トピックXについてのブログ投稿を書く、トピックYについてのランディングページのコピーを明確にする、グループZ向けのプロモを検討する。これは推測ではありません。顧客が実際に尋ねていることからの直接的なインサイトです。",
    },
    {
      type: "image",
      src: "/news/dolphin-care-marketing-content-insights.jpg",
      alt: "Dolphin Care会話インサイトからのマーケティングおよびコンテンツ提案",
    },
    {
      type: "h2",
      text: "実用例：企業がこのデータで何をするか",
    },
    {
      type: "h3",
      text: "リアルタイムでの運用調整",
    },
    {
      type: "p",
      text: "Dolphin Careが注文ステータスに関する繰り返しの質問にフラグを立てたとき、運用マネージャーはすぐに、フルフィルメントの遅延が質問の急増を引き起こしているかどうかを確認し、それが否定的なレビューになる前に対処できます。この場合、顧客会話インサイトは早期警告システムとして機能します。",
    },
    {
      type: "h3",
      text: "実際のデータに基づくマーケティング最適化",
    },
    {
      type: "p",
      text: "どの製品が最も多くの質問を生成しているかを知っているマーケティングチームは、広告予算を正確に再配分できます。Dolphin Careの週次レポートが特定の製品カテゴリへの高い関心を一貫して示している場合、そのデータはキャンペーンの優先順位を直接通知します — 別途の調査や深いツール分析は必要ありません。",
    },
    {
      type: "h3",
      text: "実際の会話からのコンテンツアイデア",
    },
    {
      type: "p",
      text: "コンテンツチームは、どのトピックについて書くべきかに苦労することがよくあります。Dolphin Careは、実際の顧客の質問をコンテンツブリーフに変換することで、この問題を解消します。顧客が「製品AとBの違いは何ですか？」と繰り返し尋ねる場合 — それは書かれるのを待っている比較記事です。チャットbot AIの会話データは実際のコンテンツカレンダーになります。",
    },
    {
      type: "h3",
      text: "Webサイトと製品ページの改善",
    },
    {
      type: "p",
      text: "繰り返しの質問は、既存のコンテンツのギャップを指し示すことがよくあります。顧客が製品ページに既にあるはずの情報を繰り返し尋ねる場合、それはWebチームへの直接的なシグナルです。Dolphin Careの日次インサイトレポートは、これらのギャップを可視化し、時間の経過とともに追跡可能にします — したがって、改善は測定可能であり、単なる仮定ではありません。",
    },
    {
      type: "h2",
      text: "顧客会話を忘れられたデータにしないでください",
    },
    {
      type: "p",
      text: "あなたのビジネスが受け取るすべての会話はデータポイントです。1週間で数百のデータポイント。1か月で、顧客が何を望み、どこで行き詰まり、何が購入の可能性を高めるかについての詳細なマップです。",
    },
    {
      type: "p",
      text: "ほとんどのビジネスはそのマップを読まれないままにしています。Dolphin Careはそれを管理者向けの日次ブリーフィングに変えます。",
    },
    {
      type: "p",
      text: "顧客会話を処理するためにAIチャットbotを使用している場合、尋ねる価値のある質問は：その後、それらの会話に何が起こるのか？ 答えが何もないなら — Dolphin Careがどのように違いを生むかを見る時です。",
    },
    {
      type: "p",
      text: "dolphin-software.io.vnでDolphin Softwareに連絡して、[Dolphin Care](/dolphin-care/)について詳しく学び、ビジネスに対する無料コンサルテーションを受けてください。",
    },
  ],
  faq: [
    {
      q: "通常のAIチャットbotとの違いは？",
      a: "ほとんどのAIチャットbotは顧客会話への返信のみに集中しています。Dolphin Careは2つの層を組み合わせます：リアルタイムAI顧客対応と日次インサイト統合 — 会話データを管理者向けの具体的な運用およびマーケティングレポートに変換します。これは、一般的なチャットbot（返信のみ）とDolphin Care（返信 + インサイト統合 + アクション提案）の中核的な違いです。",
    },
    {
      q: "日次レポートの仕組みは？",
      a: "Dolphin Care AIはその日のすべての会話を分析し、トピックと意図で分類した後、繰り返しパターンを検出します — 頻出質問、繰り返しの苦情、高意向リード。これらの発見は構造化されたレポートに統合され、1日の終わりに管理者に送信されます。",
    },
    {
      q: "マーケ判断に使える？",
      a: "はい。顧客が最も多く尋ねることを追跡することで、Dolphin Careは実際の顧客行動に基づいた具体的なコンテンツトピックとキャンペーンを提案します — 推測ではありません。これらの提案は日次レポートに表示され、ソーシャル投稿、ブログトピック、メールキャンペーン、広告ターゲティングを直接情報提供できます。",
    },
    {
      q: "小規模事業者向け？",
      a: "Dolphin Careはあらゆる規模で有用になるよう設計されています。少人数の小規模ビジネスにとって、顧客対応の自動化と日次インサイトの組み合わせは、別個の分析機能の必要性を置き換えます。日次レポートにより、管理者は生データを確認するのに時間を費やすことなく情報を把握できます。",
    },
    {
      q: "どの業種に効く？",
      a: "顧客からかなりの受信質問を受けているあらゆるビジネス — Eコマース、スパ、クリニック、レストラン、不動産、教育、またはオンラインプレゼンスのあるビジネス — はDolphin Careから恩恵を受けることができます。AIチャットbotが処理する会話が多いほど、日次インサイトはより豊かで正確になります。",
    },
    {
      q: "既存サイトに組み込める？",
      a: "はい。Dolphin Careは稼働中のWebサイトに追加するか、Dolphin Softwareからの新しいWebサイトプロジェクトと統合できます。",
    },
  ],
};

export const dolphinCareBaoCaoInsightHangNgayCopy = { vi, en, ja };
