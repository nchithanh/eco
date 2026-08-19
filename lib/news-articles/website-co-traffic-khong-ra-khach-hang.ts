import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/website-co-traffic-khong-ra-khach-hang.jpg";
const CTA = "/news/website-co-traffic-cta-zalo.jpg";
const CALL = "/news/website-co-traffic-goi-lai.jpg";

const vi: NewsArticleCopy = {
  title: "10 lỗi khiến website có traffic nhưng không ra khách hàng",
  metaTitle:
    "Website có traffic nhưng không ra khách hàng: 10 lỗi thường gặp",
  metaDescription:
    "Ads có click, GA4 có session — nhưng inbox vẫn trống. Đây là 10 lỗi thực tế khiến website không ra khách hàng, dù traffic vẫn chạy đều mỗi ngày.",
  excerpt:
    "Ads báo có click, Google Analytics ghi nhận người vào — nhưng không ai nhắn, không ai gọi. Bài này chỉ ra 10 lỗi cụ thể khiến website không ra khách hàng dù traffic vẫn chạy, kèm cách tự chẩn đoán trong 15 phút.",
  body: [
    {
      type: "lead",
      text: "Website có traffic nhưng không ra khách hàng thường do 10 nhóm lỗi: sai tệp người xem, trang đích thiếu hành động rõ, CTA mơ hồ, form lỗi, nội dung thiếu thông tin thuyết phục, thiếu bằng chứng tin tưởng, đo sai chỉ số, copy viết cho máy, site im ngoài giờ, và không có quy trình follow-up lead.",
    },
    {
      type: "p",
      text: "Ads Manager báo hôm qua có 80 click. GA4 — Google Analytics 4, công cụ đo lượt vào site — ghi nhận 60 session, tức 60 lượt truy cập. Nhưng inbox Zalo trống. Form không có email nào mới. Điện thoại không đổ chuông.",
    },
    {
      type: "p",
      text: "Cảm giác đó rất quen với nhiều chủ spa, phòng khám, quán, shop, hay xưởng đang chạy quảng cáo.",
    },
    {
      type: "p",
      text: "Bài này không phải bài “cách tăng traffic.” Traffic anh chị đã có. Vấn đề nằm ở chỗ khác — cụ thể là 10 lỗi khiến người vào site nhưng không trở thành khách hàng. Đọc xong, anh chị sẽ biết mình đang vướng lỗi nào và vá thế nào mà không cần làm lại từ đầu.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Chủ tiệm spa nhìn inbox Zalo trống dù đang chạy quảng cáo",
    },
    {
      type: "h2",
      text: "Website có traffic và có khách hàng là hai chuyện khác nhau",
    },
    {
      type: "p",
      text: "Người ta hay dùng lẫn hai khái niệm này. Thực ra chúng khác nhau hoàn toàn.",
    },
    {
      type: "p",
      text: "Người xem — vào site, nhìn qua, thoát ra. Không để lại dấu vết gì.",
    },
    {
      type: "p",
      text: "Người hỏi — thấy gì đó thú vị, nhắn một câu hoặc điền form. Chưa chốt, nhưng đang cân nhắc.",
    },
    {
      type: "p",
      text: "Người chốt — để lại số điện thoại hoặc nhắn vào kênh anh chị thật sự trả lời. Đây mới là khách hàng tiềm năng thực sự.",
    },
    {
      type: "p",
      text: "Ads có thể mua người tò mò. Google có thể đưa đến người đang tìm hiểu. Nhưng không công cụ nào tự biến người xem thành người chốt — đó là việc của trang đích, nội dung, và quy trình tiếp nhận.",
    },
    {
      type: "p",
      text: "Nếu anh chị chỉ theo dõi session và click mà không đếm bao nhiêu người nhắn hoặc gọi lại trong tuần — thì đang đo nhầm thứ.",
    },
    {
      type: "h2",
      text: "10 lỗi khiến website không ra khách hàng dù traffic vẫn chạy",
    },
    {
      type: "h3",
      text: "Lỗi 1 — Kéo đúng người xem, sai người đang cần",
    },
    {
      type: "p",
      text: "Website không ra khách hàng thường bắt đầu từ đây: quảng cáo target rộng, hoặc từ khóa Google quá chung, kéo về toàn người đang “tìm hiểu cho biết” — không phải người đang cần đặt lịch hoặc hỏi giá tuần này. Click có, session có, nhưng không ai đủ cấp thiết để liên hệ.",
    },
    {
      type: "p",
      text: "Nhận ra: Mở Google Analytics, xem trang nào người vào rồi thoát ngay mà không làm gì. Nếu trang dịch vụ chính gần như không ai đi tiếp, đúng là đang kéo sai người.",
    },
    {
      type: "p",
      text: "Vá: Dùng từ khóa hoặc mô tả ads cụ thể hơn — ví dụ “điều trị mụn lưng tại [quận]” thay vì “chăm sóc da.” Thêm điều kiện giá, khu vực, hoặc đối tượng vào dòng mô tả để lọc người tò mò ra trước.",
    },
    {
      type: "h3",
      text: "Lỗi 2 — Đổ traffic vào trang chủ hoặc tường bài, không có một hành động rõ",
    },
    {
      type: "p",
      text: "Người dùng từ ads click vào — và đáp xuống trang chủ, nơi có đủ mọi thứ: giới thiệu, dịch vụ, tin tức, banner khuyến mãi. Họ không biết phải làm gì tiếp theo.",
    },
    {
      type: "p",
      text: "Nhiều anh chị còn đổ ads thẳng vào fanpage. Điều đó có thể phù hợp trong một số trường hợp, nhưng nếu mục tiêu là thu lead để xử lý sau, website vẫn cần đóng vai trò riêng. Xem [Website hay Facebook: doanh nghiệp nhỏ nên đầu tư vào đâu?](/news/website-hay-facebook-doanh-nghiep-nho/).",
    },
    {
      type: "p",
      text: "Nhận ra: Thử click vào chính quảng cáo của mình bằng điện thoại. Trang đáp xuống có một câu kêu gọi hành động rõ không — hay phải kéo xuống mới thấy số điện thoại?",
    },
    {
      type: "p",
      text: "Vá: Mỗi chiến dịch ads cần một trang đích riêng — landing page — với một mục tiêu duy nhất: nhắn Zalo, hoặc điền form, hoặc gọi ngay. Không phải cả ba cùng lúc.",
    },
    {
      type: "h3",
      text: "Lỗi 3 — CTA mơ hồ hoặc quá nhiều CTA cùng lúc",
    },
    {
      type: "p",
      text: "CTA là “call to action” — câu hoặc nút kêu gọi hành động, ví dụ “Đặt lịch ngay” hay “Nhắn Zalo tư vấn.” Nhiều site có CTA kiểu “Liên hệ với chúng tôi” hoặc “Tìm hiểu thêm” — không nói rõ làm gì, nhận được gì.",
    },
    {
      type: "p",
      text: "Hoặc ngược lại: có bốn nút cùng lúc — Zalo, form, hotline, và Messenger — người dùng không biết chọn cái nào.",
    },
    {
      type: "image",
      src: CTA,
      alt: "Trang dịch vụ hiển thị rõ CTA nhắn Zalo trên điện thoại",
    },
    {
      type: "p",
      text: "Nhận ra: Đếm số nút hành động trên trang dịch vụ chính. Nếu nhiều hơn hai, hoặc nút chính không nói rõ bước tiếp theo, đây là lỗi.",
    },
    {
      type: "p",
      text: "Vá: Chọn một kênh liên hệ chính cho từng trang. Đặt tên nút theo hành động cụ thể — “Nhắn Zalo để hỏi giá” rõ hơn “Liên hệ ngay” rất nhiều.",
    },
    {
      type: "h3",
      text: "Lỗi 4 — Form rối, lỗi, hoặc gửi vào khoảng trống",
    },
    {
      type: "p",
      text: "Form trên site bị lỗi kỹ thuật — điền xong bấm gửi nhưng không có gì xảy ra. Hoặc form gửi về một email không ai check. Hoặc hỏi quá nhiều trường — họ tên, số điện thoại, địa chỉ, nhu cầu, ngân sách — người dùng bỏ ngang.",
    },
    {
      type: "p",
      text: "Nhận ra: Tự điền thử form bằng điện thoại. Gửi xong, anh chị có nhận được gì không — email thông báo, hay tin nhắn Zalo? Nếu không có gì, form đang gửi vào khoảng trống.",
    },
    {
      type: "p",
      text: "Vá: Rút form còn tối đa 3 trường — họ tên, số điện thoại, và một câu hỏi ngắn về nhu cầu. Kết nối form với Zalo OA hoặc email đang dùng hàng ngày. Test lại mỗi tháng.",
    },
    {
      type: "h3",
      text: "Lỗi 5 — Thông tin dịch vụ không đọc được trước khi nhắn",
    },
    {
      type: "p",
      text: "Khách vào site, muốn biết giá, quy trình, thời gian, địa điểm — nhưng không tìm thấy. Họ phải nhắn hỏi trước khi biết mình có phù hợp không. Nhiều người không nhắn vì ngại, hoặc không có thời gian chờ.",
    },
    {
      type: "p",
      text: "Nhận ra: Vào trang dịch vụ của mình. Trong 30 giây, anh chị có đọc được giá tham khảo, khu vực phục vụ, và quy trình cơ bản không?",
    },
    {
      type: "p",
      text: "Vá: Thêm một mục “Thông tin cần biết trước khi đặt lịch” hoặc “Câu hỏi thường gặp” ngay trên trang dịch vụ. Không cần viết dài — 5 câu hỏi ngắn là đủ để người dùng tự lọc và quyết định liên hệ.",
    },
    {
      type: "h3",
      text: "Lỗi 6 — Không đủ bằng chứng để khách tin và chốt",
    },
    {
      type: "p",
      text: "Người dùng đã vào site, đọc dịch vụ, quan tâm — nhưng chưa đủ tin để nhắn. Không có đánh giá thật, không có ảnh thật, không có bằng chứng cụ thể nào cho thấy anh chị đã làm được điều này cho người khác.",
    },
    {
      type: "p",
      text: "Nhận ra: Hỏi khách hàng thật đã từng dùng dịch vụ: “Anh/chị quyết định liên hệ sau khi xem gì trên site?” Câu trả lời thường tiết lộ họ cần thấy gì mà hiện tại đang thiếu.",
    },
    {
      type: "p",
      text: "Vá: Thêm 3–5 đánh giá thật với tên và ảnh thật (xin phép khách trước). Thêm ảnh quy trình làm việc thực tế — không cần studio, ảnh điện thoại chụp tại chỗ thường thuyết phục hơn ảnh dựng.",
    },
    {
      type: "h3",
      text: "Lỗi 7 — Đo session, không đo việc ra khách",
    },
    {
      type: "p",
      text: "Session — số lượt truy cập — là chỉ số dễ nhìn nhất. Nên nhiều anh chị mở GA4 chỉ để xem con số này. Nhưng session không nói lên bao nhiêu người thật sự liên hệ.",
    },
    {
      type: "p",
      text: "Nhận ra: Tuần trước có bao nhiêu người nhắn Zalo hoặc gọi vào số trên site? Nếu anh chị không biết con số đó, đang đo nhầm thứ.",
    },
    {
      type: "p",
      text: "Vá: Thiết lập sự kiện chuyển đổi trong GA4 — hoặc đơn giản hơn, mỗi tuần đếm thủ công số lead từ Zalo, form, và điện thoại. Đó mới là chỉ số cần theo dõi. Xem thêm [checklist website doanh nghiệp 2026](/news/website-doanh-nghiep-can-co-nhung-gi-checklist-2026/) để biết mình đang thiếu hạng mục nào trên site.",
    },
    {
      type: "h3",
      text: "Lỗi 8 — Copy viết cho Google, không viết cho người sắp liên hệ",
    },
    {
      type: "p",
      text: "Copy là toàn bộ nội dung chữ trên site. Nhiều trang dịch vụ viết đầy từ khóa — “dịch vụ chăm sóc da chuyên nghiệp tại TP.HCM uy tín giá tốt” — nhưng không trả lời được câu hỏi thật của khách: “Liệu trình này có phù hợp với da mình không? Bao lâu thì thấy hiệu quả?”",
    },
    {
      type: "p",
      text: "Nhận ra: Đọc to trang dịch vụ chính. Nếu nghe cứng và lạ, khách cũng cảm thấy vậy.",
    },
    {
      type: "p",
      text: "Vá: Viết lại một đoạn theo cách anh chị vẫn nói với khách trực tiếp. “Da mụn lưng thường cần 4–6 buổi để thấy rõ. Buổi đầu mình sẽ đánh giá da trước khi làm.” Câu đó thuyết phục hơn bất kỳ đoạn nhồi từ khóa nào.",
    },
    {
      type: "h3",
      text: "Lỗi 9 — Có traffic ngoài giờ nhưng site im lặng hoàn toàn",
    },
    {
      type: "p",
      text: "Người dùng hay tìm kiếm và vào site buổi tối hoặc cuối tuần. Lúc đó không có ai trực. Zalo không có người phản hồi. Site không có gì để họ tương tác. Họ thoát ra và tìm chỗ khác.",
    },
    {
      type: "p",
      text: "Nhận ra: Xem trong GA4 giờ nào trong ngày có nhiều lượt vào nhất. Nếu đỉnh lúc 21h–23h mà anh chị không có ai trực giờ đó — đây là lỗi đang mất khách thầm lặng.",
    },
    {
      type: "p",
      text: "Vá: Thiết lập tin nhắn tự động trên Zalo OA để xác nhận đã nhận yêu cầu và hẹn giờ phản hồi cụ thể. Nếu sau này cần hỗ trợ ngoài giờ ngay trên site — trả lời câu hỏi cơ bản và ghi lại thông tin khách — đó là lớp thêm, xem [Dolphin Care](/dolphin-care/). Không bắt buộc khi mới vá traffic rỗng.",
    },
    {
      type: "h3",
      text: "Lỗi 10 — Lead về rồi nhưng không có ai — hoặc không có quy trình — follow-up",
    },
    {
      type: "p",
      text: "Lead — thông tin khách hàng tiềm năng đã để lại — đã về. Nhưng không ai gọi lại trong 24 giờ. Hoặc gọi rồi nhưng không biết nói gì. Hoặc không ai chịu trách nhiệm nhận lead từ kênh đó.",
    },
    {
      type: "p",
      text: "Đây là lỗi tốn tiền nhất — vì ads đã chạy, người đã vào, họ đã để lại thông tin — rồi mất ở bước cuối cùng.",
    },
    {
      type: "image",
      src: CALL,
      alt: "Chủ shop gọi lại khách hàng từ lead để lại qua website",
    },
    {
      type: "p",
      text: "Nhận ra: Lần cuối cùng có người điền form hoặc nhắn vào site, ai là người gọi lại? Gọi trong bao lâu?",
    },
    {
      type: "p",
      text: "Vá: Đặt quy tắc đơn giản: lead về phải được phản hồi trong vòng 2 tiếng trong giờ làm việc, bởi một người được giao cụ thể. Nếu có nhiều kênh (Zalo, form, điện thoại), phân công ai nhận kênh nào trước khi chạy ads.",
    },
    {
      type: "h2",
      text: "Tự chẩn đoán trong 15 phút: site đang rò rỉ ở bước nào?",
    },
    {
      type: "p",
      text: "Không phải lúc nào website không ra khách hàng cũng phải làm lại từ đầu. Thường chỉ cần vá đúng điểm đang rò rỉ.",
    },
    {
      type: "p",
      text: "Bước 1 — Mở site như khách từ ads. Dùng điện thoại, click vào chính quảng cáo đang chạy. Trang đáp xuống có một hành động rõ ràng không? Nếu phải kéo xuống quá 2 lần mới thấy nút liên hệ — đây là vấn đề.",
    },
    {
      type: "p",
      text: "Bước 2 — Thử form và Zalo. Tự điền form hoặc nhắn thử vào Zalo OA. Anh chị nhận được phản hồi không? Trong bao lâu?",
    },
    {
      type: "p",
      text: "Bước 3 — Hỏi thật. Tuần này có bao nhiêu người nhắn hoặc gọi vào từ site? Nếu không có con số cụ thể — lỗi 7 đang xảy ra.",
    },
    {
      type: "p",
      text: "Lỗi 1–3: trang đích và CTA — vá trước. Lỗi 4–6: form, nội dung, độ tin — vá tiếp. Lỗi 7–10: đo lường và quy trình tiếp nhận — vá để không lãng phí lead đã về.",
    },
    {
      type: "p",
      text: "Xem thêm [5 dấu hiệu website đang làm mất khách](/news/5-dau-hieu-website-lam-mat-khach/) — bài đó nói khách bỏ đi vì trải nghiệm kém; bài này tập trung vào người đã vào nhưng không thành khách hàng.",
    },
    {
      type: "h2",
      text: "Website tốt không phải website đẹp — là website ra khách",
    },
    {
      type: "p",
      text: "Traffic là điểm khởi đầu, không phải đích đến. Khi anh chị đã có người vào site mà inbox vẫn trống, câu hỏi không phải “làm sao tăng thêm traffic” — mà là “người vào đang bị rò rỉ ở bước nào.”",
    },
    {
      type: "p",
      text: "Mười lỗi ở trên không phải lý thuyết. Chúng hay xuất hiện khi chủ SMB nói với Dolphin Software: site có người vào nhưng không ra khách hàng.",
    },
    {
      type: "p",
      text: "Câu hỏi thật để tự kiểm: Tuần này site có người vào — anh chị gọi lại được bao nhiêu người?",
    },
    {
      type: "p",
      text: "Nếu con số đó thấp hơn kỳ vọng, anh chị biết bắt đầu từ đâu rồi. Muốn rà lại site đang có — [nhắn Zalo](https://zalo.me/0779937633) để tư vấn phạm vi, hoặc xem [dịch vụ thiết kế website](/services/web/) nếu đang cân nhắc làm mới.",
    },
  ],
  faq: [
    {
      q: "Website có traffic cao nhưng không có khách hàng thì nguyên nhân chính là gì?",
      a: "Nguyên nhân phổ biến nhất là trang đích không có một hành động rõ ràng, CTA mơ hồ, hoặc form lỗi không gửi về đúng nơi. Traffic chỉ là người vào — để họ trở thành khách hàng, trang phải dẫn họ đến một bước tiếp theo cụ thể và dễ thực hiện.",
    },
    {
      q: "Có cần làm lại website từ đầu nếu site không ra khách không?",
      a: "Thường là không. Đa số trường hợp chỉ cần vá 2–3 điểm: chỉnh lại trang đích ads, sửa CTA, và kiểm tra lại form hoặc kênh tiếp nhận lead. Làm lại từ đầu chỉ nên cân nhắc khi cấu trúc site quá cũ hoặc không còn phù hợp với định hướng dịch vụ hiện tại.",
    },
    {
      q: "Làm sao biết khách vào site từ kênh nào — Google hay Facebook?",
      a: "GA4 phân tách nguồn traffic theo từng kênh (Source/Medium). Vào GA4, chọn Reports → Acquisition → Traffic Acquisition. Nếu chưa cài GA4 hoặc chưa kết nối ads, cần làm bước này trước khi phân tích thêm chỉ số khác.",
    },
    {
      q: "Tôi có Zalo OA nhưng không ai nhắn vào — lỗi ở đâu?",
      a: "Có thể nút Zalo trên site không hiện rõ trên điện thoại, hoặc CTA không chỉ rõ “nhắn Zalo để làm gì.” Thử mở site bằng Android và iPhone, bấm thử nút Zalo xem có mở đúng OA không. Nếu nút không chạy hoặc mở sai trang — sửa kỹ thuật trước.",
    },
    {
      q: "Thiết kế website để chuyển đổi tốt thì chi phí như thế nào?",
      a: "Chi phí tùy phạm vi — trang đích đơn giản và site nhiều dịch vụ khác nhau. Xem [bảng giá website 2026](/news/thiet-ke-website-gia-bao-nhieu-bang-gia-2026/) và [dịch vụ thiết kế website](/services/web/).",
    },
    {
      q: "Ngoài giờ làm việc, có cách nào để site vẫn thu lead không?",
      a: "Cách đơn giản nhất là tin nhắn tự động trên Zalo OA: xác nhận đã nhận và hẹn giờ phản hồi. Cách xa hơn là hỗ trợ ngoài giờ trên chính site — xem /dolphin-care/. Không bắt buộc khi mới vá form và CTA.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "10 reasons a website gets traffic but no customers",
  metaTitle: "Traffic but no customers: 10 common website mistakes",
  metaDescription:
    "Ads show clicks, GA4 shows sessions — the inbox is still empty. Ten practical mistakes that keep a website from turning traffic into customers.",
  excerpt:
    "Ads report clicks, Analytics records visits — and nobody messages or calls. Ten specific leaks, plus a 15-minute self-check.",
  body: [
    {
      type: "lead",
      text: "Traffic without customers usually comes from ten groups of mistakes: the wrong viewers, a destination with no clear action, fuzzy CTAs, broken forms, thin service facts, weak proof, measuring the wrong number, copy written for Google, silence after hours, and no follow-up.",
    },
    {
      type: "p",
      text: "Ads Manager says 80 clicks yesterday. GA4 recorded 60 sessions. The Zalo inbox is empty. The form has no new rows. The phone does not ring.",
    },
    {
      type: "p",
      text: "Spa, clinic, cafe, shop, workshop owners running ads know that feeling.",
    },
    {
      type: "p",
      text: "This is not a “get more traffic” piece. You already have traffic. These are ten reasons visitors never become customers — and how to patch without rebuilding.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Spa owner looking at an empty chat inbox while ads are running",
    },
    {
      type: "h2",
      text: "Traffic and customers are not the same thing",
    },
    {
      type: "p",
      text: "Viewers look and leave. Askers send one message or a form. Closers leave a number on a channel you actually answer. Ads can buy curiosity. Google can send researchers. Neither turns a viewer into a closer — that is the landing page, the copy, and who picks up the lead.",
    },
    {
      type: "p",
      text: "If you watch sessions and clicks but cannot say how many people messaged or got a call-back this week, you are measuring the wrong thing.",
    },
    {
      type: "h2",
      text: "Ten mistakes that leave traffic without customers",
    },
    {
      type: "h3",
      text: "Mistake 1 — The right viewers, the wrong people who need you now",
    },
    {
      type: "p",
      text: "Broad ads or vague keywords bring people “just looking.” Clicks and sessions appear; nobody needs a booking this week.",
    },
    {
      type: "p",
      text: "Check: which service page do people leave without doing anything? Tighten the ad or keyword — a district and a specific service, not “skincare.”",
    },
    {
      type: "h3",
      text: "Mistake 2 — Dumping traffic on the homepage or a Page wall",
    },
    {
      type: "p",
      text: "The ad lands on a homepage with everything, or a fanpage. If the goal is a lead you can handle later, the site still has its own job. See [Website or Facebook](/news/website-hay-facebook-doanh-nghiep-nho/).",
    },
    {
      type: "p",
      text: "Fix: one landing page per campaign, one action — Zalo, form, or call. Not all three.",
    },
    {
      type: "h3",
      text: "Mistake 3 — Vague CTAs or too many at once",
    },
    {
      type: "image",
      src: CTA,
      alt: "A service page on a phone with a clear message-on-Zalo button",
    },
    {
      type: "p",
      text: "“Contact us” and “Learn more” do not say what happens next. Four buttons at once freeze people. Name one primary action: “Message Zalo for a price.”",
    },
    {
      type: "h3",
      text: "Mistake 4 — Forms that break or go nowhere",
    },
    {
      type: "p",
      text: "Submit does nothing, or mail lands in an inbox nobody opens, or the form asks for too much. Test it on a phone. Keep three fields. Point it at the Zalo OA or the email you actually use.",
    },
    {
      type: "h3",
      text: "Mistake 5 — Service facts are missing before they message",
    },
    {
      type: "p",
      text: "Price band, process, area, hours — if they must ask first, many will not. Put a short FAQ on the service page.",
    },
    {
      type: "h3",
      text: "Mistake 6 — Not enough proof to trust and close",
    },
    {
      type: "p",
      text: "Ask a real customer what they needed to see. Add a few real reviews (with permission) and photos of actual work, not a studio set.",
    },
    {
      type: "h3",
      text: "Mistake 7 — Measuring sessions, not customers",
    },
    {
      type: "p",
      text: "Sessions are easy to watch and do not say who contacted you. Count Zalo, form, and calls each week. See the [2026 business-website checklist](/news/website-doanh-nghiep-can-co-nhung-gi-checklist-2026/).",
    },
    {
      type: "h3",
      text: "Mistake 8 — Copy written for Google, not for someone about to contact you",
    },
    {
      type: "p",
      text: "Read the service page out loud. If it sounds stiff, rewrite it the way you talk to a guest in the shop.",
    },
    {
      type: "h3",
      text: "Mistake 9 — Traffic after hours, a silent site",
    },
    {
      type: "p",
      text: "If GA4 peaks at 21:00–23:00 and nobody is there, leads die quietly. An OA auto-reply that names when you will answer is enough to start. After-hours help on the site itself is optional — [Dolphin Care](/dolphin-care/).",
    },
    {
      type: "h3",
      text: "Mistake 10 — Leads arrive; nobody follows up",
    },
    {
      type: "image",
      src: CALL,
      alt: "Shop owner calling a customer back from a website lead",
    },
    {
      type: "p",
      text: "Ads spent, the form filled — then silence for a day. Assign one person and a two-hour rule in business hours before you spend more on ads.",
    },
    {
      type: "h2",
      text: "A 15-minute self-check",
    },
    {
      type: "p",
      text: "Open the live ad on a phone. Try the form and Zalo. Ask how many people messaged or called this week. Patch 1–3 first (destination and CTA), then 4–6 (form and trust), then 7–10 (measurement and follow-up).",
    },
    {
      type: "p",
      text: "[Five signs a site loses customers](/news/5-dau-hieu-website-lam-mat-khach/) is about bounce from poor UX. This piece is about people who arrived and never became customers.",
    },
    {
      type: "h2",
      text: "A good site is one that produces customers",
    },
    {
      type: "p",
      text: "Traffic is the start. If the inbox is empty, the question is where visitors leak — not how to buy more clicks.",
    },
    {
      type: "p",
      text: "[Message Zalo](https://zalo.me/0779937633) to scope a review, or see [website design](/services/web/).",
    },
  ],
  faq: [
    {
      q: "What is the main reason a busy site still has no customers?",
      a: "Usually a destination with no clear next step, a vague CTA, or a form that does not arrive. Traffic is only arrivals.",
    },
    {
      q: "Do we have to rebuild if the site does not convert?",
      a: "Usually no. Patch the ads landing page, the CTA, and the lead channel first. Rebuild when the structure no longer matches the offer.",
    },
    {
      q: "How do we see Google vs Facebook traffic?",
      a: "GA4 → Reports → Acquisition → Traffic Acquisition (Source/Medium). Install GA4 before you analyse anything else.",
    },
    {
      q: "We have a Zalo OA but nobody messages. Where is the leak?",
      a: "The button may be hard to see on a phone, or it does not say why to message. Tap it on Android and iPhone and check it opens the right OA.",
    },
    {
      q: "What does a conversion-focused site cost?",
      a: "It depends on scope. See [2026 website prices](/news/thiet-ke-website-gia-bao-nhieu-bang-gia-2026/) and [/services/web/](/services/web/).",
    },
    {
      q: "Can the site still take leads after hours?",
      a: "Start with an OA auto-reply that names when you will answer. On-site after-hours help is optional: /dolphin-care/.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title: "アクセスはあるのに客が来ないサイト、よくある10の漏れ",
  metaTitle: "アクセスはあるのに客が来ない：10のよくある失敗",
  metaDescription:
    "広告にクリック、GA4にセッション。受信箱は空。トラフィックが客にならない10の実務的な漏れです。",
  excerpt:
    "広告はクリックを報告し、Analyticsは訪問を記録する。メッセージも電話もない。15分の自己診断つき、10の具体的な漏れです。",
  body: [
    {
      type: "lead",
      text: "アクセスがあっても客が来ないのは、だいたい10グループです。見る人が違う、着地に行動がない、CTAが曖昧、フォームが壊れている、サービスの事実が足りない、証拠が弱い、測る数字を間違える、検索向けの文、時間外に沈黙、フォローがない。",
    },
    {
      type: "p",
      text: "昨日、広告マネージャはクリック80。GA4はセッション60。Zaloの受信箱は空。フォームに新しい行はない。電話は鳴らない。",
    },
    {
      type: "p",
      text: "広告を出しているスパ、クリニック、店、工場の店主には、その感覚があります。",
    },
    {
      type: "p",
      text: "「もっとトラフィックを」の話ではありません。もうある。入った人が客にならない10の理由と、作り直さずに直す話です。",
    },
    {
      type: "image",
      src: COVER,
      alt: "広告を出しているのにチャットの受信箱が空のスパ店主",
    },
    {
      type: "h2",
      text: "アクセスと客は別物です",
    },
    {
      type: "p",
      text: "見る人は見て去る。聞く人は一言かフォーム。決める人は、実際に返信するチャネルに番号を残す。広告は好奇心を買える。Googleは調べている人を連れて来られる。見る人を決める人にするのは着地ページと文と、リードを取る人です。",
    },
    {
      type: "h2",
      text: "アクセスが客にならない10の失敗",
    },
    {
      type: "h3",
      text: "失敗1 — 見る人は来る。今必要な人ではない",
    },
    {
      type: "p",
      text: "広い広告や曖昧なキーワードは「一応見ておく」人を連れて来ます。区と具体的なサービスに絞る。",
    },
    {
      type: "h3",
      text: "失敗2 — トップや投稿の壁に流す",
    },
    {
      type: "p",
      text: "あとで処理するリードが目的なら、サイトの役割は残ります。[サイトかFacebookか](/news/website-hay-facebook-doanh-nghiep-nho/)。キャンペーンごとに着地は1枚、行動は一つ。",
    },
    {
      type: "h3",
      text: "失敗3 — CTAが曖昧、または多すぎる",
    },
    {
      type: "image",
      src: CTA,
      alt: "スマホのサービスページ。Zaloで相談するボタンがはっきり見える",
    },
    {
      type: "p",
      text: "「お問い合わせ」は次が分かりません。主アクションは一つ。",
    },
    {
      type: "h3",
      text: "失敗4 — フォームが壊れている、またはどこにも届かない",
    },
    {
      type: "p",
      text: "スマホで自分で送る。項目は最大3。毎日見るメールかOAへ。",
    },
    {
      type: "h3",
      text: "失敗5 — メッセージ前にサービスの事実が読めない",
    },
    {
      type: "p",
      text: "価格帯、流れ、エリア。先に聞かないと分からないなら、多くは書きません。短いFAQをサービスページへ。",
    },
    {
      type: "h3",
      text: "失敗6 — 信じて決める証拠が足りない",
    },
    {
      type: "p",
      text: "本物の口コミ（許可つき）と、現場の写真。スタジオセットより強いことが多いです。",
    },
    {
      type: "h3",
      text: "失敗7 — セッションを測り、客を測らない",
    },
    {
      type: "p",
      text: "週にZalo、フォーム、電話を数える。[2026年企業サイトのチェックリスト](/news/website-doanh-nghiep-can-co-nhung-gi-checklist-2026/)。",
    },
    {
      type: "h3",
      text: "失敗8 — 検索向けの文で、今連絡しそうな人向けではない",
    },
    {
      type: "p",
      text: "サービスページを声に出す。硬ければ、店で客に話す言葉に書き直す。",
    },
    {
      type: "h3",
      text: "失敗9 — 時間外のアクセスに、サイトが黙る",
    },
    {
      type: "p",
      text: "21–23時が山で誰もいなければ、静かに失います。OAの自動返信で返信時刻を書く。サイト上の時間外支援は任意 — [Dolphin Care](/dolphin-care/)。",
    },
    {
      type: "h3",
      text: "失敗10 — リードは来た。フォローする人がいない",
    },
    {
      type: "image",
      src: CALL,
      alt: "サイトのリードから客に折り返し電話する店主",
    },
    {
      type: "p",
      text: "営業時間内2時間、担当を一人決めてから広告を足す。",
    },
    {
      type: "h2",
      text: "15分の自己診断",
    },
    {
      type: "p",
      text: "広告をスマホで開く。フォームとZaloを試す。今週何人に折り返したか。1–3を先に直す。UXで離脱する話は[客を失う5つの兆候](/news/5-dau-hieu-website-lam-mat-khach/)。",
    },
    {
      type: "h2",
      text: "良いサイトは、きれいさではなく客が出ること",
    },
    {
      type: "p",
      text: "[Zalo](https://zalo.me/0779937633) で範囲の相談、または [サイト制作](/services/web/)。",
    },
  ],
  faq: [
    {
      q: "アクセスはあるのに客が来ない主因は？",
      a: "着地に次の一歩がない、CTAが曖昧、フォームが届かない。アクセスは到着数に過ぎません。",
    },
    {
      q: "作り直しが必要？",
      a: "たいてい不要。着地、CTA、リードの受け先を先に直す。",
    },
    {
      q: "GoogleとFacebookの流入はどう見る？",
      a: "GA4の Traffic Acquisition（Source/Medium）。分析の前にGA4を入れる。",
    },
    {
      q: "OAがあるのに誰も書いてこない。",
      a: "ボタンが見えない、または「何のために書くか」がない。AndroidとiPhoneで正しいOAが開くか試す。",
    },
    {
      q: "コンバージョン向けサイトの費用は？",
      a: "範囲次第。[2026年の料金](/news/thiet-ke-website-gia-bao-nhieu-bang-gia-2026/) と /services/web/。",
    },
    {
      q: "時間外でもリードを取れる？",
      a: "まずOAの自動返信で時刻を伝える。サイト上の時間外は任意で /dolphin-care/。",
    },
  ],
};

export const websiteCoTrafficKhongRaKhachHangCopy = { vi, en, ja };
