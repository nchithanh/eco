import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/giam-that-thoat-nguyen-lieu-quan-cafe.jpg";
const POUR = "/news/giam-that-thoat-nguyen-lieu-quan-cafe-dong-tay.jpg";
const CHECK = "/news/giam-that-thoat-nguyen-lieu-quan-cafe-kiem-ton.jpg";

const vi: NewsArticleCopy = {
  title: "Giảm thất thoát nguyên liệu quán cafe: bắt đầu từ đâu?",
  metaTitle: "Giảm thất thoát nguyên liệu quán cafe | Dolphin",
  metaDescription:
    "Hạt, sữa, syrup hết giữa ca hoặc lệch sổ: chỗ thất thoát thật ở quán cafe và checklist vận hành — khi nào cần gắn bán với tồn qua phần mềm POS.",
  excerpt:
    "Nguyên liệu cafe thất thoát thường không vì “nhân viên xấu” — mà vì đong tay, bán không gắn tồn, và kiểm cuối ngày muộn. Bài này nói chỗ gãy và cách siết lại từng bước.",
  body: [
    {
      type: "lead",
      text: "Quán cafe sống bằng hạt, sữa, syrup, topping. Khi chúng “biến mất” giữa ca hoặc sổ tồn không khớp thực tế, chủ quán hay nghĩ ngay đến gian lận. Thực tế phổ biến hơn: quy trình đong–bán–ghi còn lỏng. Bài này giúp anh chị thấy chỗ thất thoát nguyên liệu quán cafe thường nằm ở đâu, siết gì trước khi mua phần mềm.",
    },
    {
      type: "p",
      text: "Ca chiều đông. Barista mở túi hạt cuối cùng. Tủ lạnh còn một hộp sữa. Khách xếp hàng — không ai kịp ghi “hết giữa ca”. Cuối ngày sổ Excel nói còn đủ cho ngày mai. Kệ thì trống.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Quầy bar cafe: túi hạt và hộp sữa sắp hết, barista lo giữa giờ cao điểm",
    },
    {
      type: "p",
      text: "Nếu cảnh này quen, anh chị không đơn độc. Giảm thất thoát không bắt đầu từ app đắt tiền — bắt đầu từ chỗ nào đang “ăn” nguyên liệu mà không để lại dấu vết.",
    },
    {
      type: "h2",
      text: "Thất thoát nguyên liệu quán cafe thường nằm ở đâu?",
    },
    {
      type: "h3",
      text: "1. Đong tay, mỗi người một kiểu",
    },
    {
      type: "image",
      src: POUR,
      alt: "Barista rót sữa và espresso không dùng cốc định lượng, nguyên liệu đổ thừa trên quầy",
    },
    {
      type: "p",
      text: "Công thức trên giấy; thực tế mỗi ca đong mắt. Thừa một chút mỗi ly — cả ngày thành vài trăm gram hạt hoặc vài hộp sữa. Không phải lỗi “thích lãng phí”: thiếu chuẩn đong và thiếu đối chiếu theo món bán.",
    },
    {
      type: "h3",
      text: "2. Bán rồi mới nhớ trừ tồn",
    },
    {
      type: "p",
      text: "Order Zalo, order quầy, order mang đi — ghi bán một chỗ, trừ kho chỗ khác (hoặc quên). Excel cập nhật cuối ngày thì lệch đã xảy ra từ buổi sáng. Càng đông kênh, càng dễ “bán không thấy tồn”.",
    },
    {
      type: "h3",
      text: "3. Nhập hàng nhanh, kiểm chậm",
    },
    {
      type: "image",
      src: CHECK,
      alt: "Chủ quán cafe đối chiếu sổ tay với kệ hạt và sữa cuối ngày",
    },
    {
      type: "p",
      text: "Túi hạt về nhiều; ghi nhận trên giấy rồi quên. Kiểm tồn cuối tuần mới phát hiện thiếu. Lúc đó khó biết mất ở ca nào, món nào. Thất thoát nguyên liệu quán cafe hay bị “phát hiện muộn” vì không có mốc mở/đóng ca gắn với tồn quan trọng.",
    },
    {
      type: "h3",
      text: "4. Pha thừa, huỷ, và “ly test” không ghi",
    },
    {
      type: "p",
      text: "Pha sai đổ đi, test máy, tặng nhân viên — bình thường nếu ghi được. Không ghi thì sổ đẹp, kệ trống: anh chị tưởng bán nhiều hơn thực tế nguyên liệu đã dùng.",
    },
    {
      type: "h2",
      text: "Checklist vận hành trước khi nghĩ đến phần mềm",
    },
    {
      type: "p",
      text: "Ba việc rẻ, làm được tuần này:",
    },
    {
      type: "p",
      text: "• Chốt recipe cho 5–10 món bán chạy (gram hạt / ml sữa / scoop topping) và dán nơi pha.\n• Mỗi ca: ghi mở–đóng tồn các SKU “đau” (hạt chính, sữa, syrup top 3) — dù chỉ một dòng sổ.\n• Cuối ngày: đối chiếu số ly bán (bill hoặc sổ order) với lượng nguyên liệu ước tính đã dùng. Lệch lớn → tìm ca, không đổ hết cho “kho mất”.",
    },
    {
      type: "p",
      text: "Nếu checklist này đã làm mà vẫn lệch mỗi ngày, hoặc hai–ba người cùng pha và anh chị không kịp soi — lúc đó mới cần chỗ ghi bán gắn với tồn rõ hơn.",
    },
    {
      type: "h2",
      text: "Khi nào phần mềm POS giúp giảm thất thoát?",
    },
    {
      type: "p",
      text: "Phần mềm POS không thay recipe hay kỷ luật pha chế. Nó giúp khi anh chị cần: mỗi đơn bán trừ (theo gói) nguyên liệu/SKU liên quan; mở/đóng ca có dấu vết; cuối ngày đối chiếu dựa trên dữ liệu chứ không đoán. Đọc thêm góc nhìn tổng: [Tại sao cửa hàng cần dùng phần mềm POS?](/news/tai-sao-can-dung-phan-mem-pos/).",
    },
    {
      type: "p",
      text: "Dolphin tách POS cửa hàng bán hàng khỏi CRM lịch dịch vụ. Với quán cafe: xem landing [POS tiệm cafe](/pos/cafe/) và [hub POS](/pos/). Runtime app vẫn theo lộ trình (TODO); bảng giá năm đã công bố để tư vấn — [chính sách giá POS](/chinh-sach-gia-dolphin-2026/#pos).",
    },
    {
      type: "h2",
      text: "Không nhầm POS với “máy tính tiền đắt”",
    },
    {
      type: "p",
      text: "Mục tiêu ở đây là siết thất thoát nguyên liệu quán cafe — không phải sắm đủ máy in bill ngay ngày đầu. Nhiều quán bắt đầu bằng quy trình + ghi bán rõ; phần cứng tùy chọn. Nếu quán còn một người, vài chục ly/ngày và sổ còn sạch — cứ làm checklist trước.",
    },
    {
      type: "h2",
      text: "Kết",
    },
    {
      type: "p",
      text: "Giảm thất thoát bắt đầu từ đong chuẩn, ghi mở–đóng tồn SKU đau, và đối chiếu bán–dùng cuối ngày. Phần mềm POS (khi cần) là chỗ gắn đơn với tồn để lệch lộ sớm hơn — không phải phép màu. Muốn xem gói theo quán cafe: [Dolphin POS cafe](/pos/cafe/). Cần mặt tiền online trước: [thiết kế website](/services/web/). Hoặc nhắn [Zalo](https://zalo.me/0779937633) kể loại quán và chỗ nguyên liệu đang lệch.",
    },
  ],
  faq: [
    {
      q: "Thất thoát nguyên liệu quán cafe thường do đâu?",
      a: "Hay gặp: đong tay không chuẩn, bán không gắn trừ tồn, nhập ghi chậm, pha thừa/huỷ không ghi — không phải lúc nào cũng gian lận.",
    },
    {
      q: "Chưa có POS vẫn giảm được thất thoát không?",
      a: "Có. Chốt recipe món chạy, ghi mở–đóng tồn SKU quan trọng mỗi ca, đối chiếu ly bán với lượng ước tính cuối ngày.",
    },
    {
      q: "POS giúp gì với hạt và sữa?",
      a: "Theo gói có quản lý tồn: gắn bán với trừ SKU/nguyên liệu, có dấu vết ca — để thấy lệch sớm hơn Excel cuối tuần.",
    },
    {
      q: "Quán nhỏ có cần POS ngay không?",
      a: "Chưa chắc. Ít ly, một người, sổ còn khớp thì làm checklist trước. Cân nhắc khi lệch mỗi ngày hoặc nhiều người cùng pha.",
    },
    {
      q: "Dolphin POS cho cafe xem ở đâu?",
      a: "Landing /pos/cafe/ và hub /pos/; bảng giá năm tại /chinh-sach-gia-dolphin-2026/#pos. Runtime app: TODO.",
    },
    {
      q: "POS cafe khác CRM spa thế nào?",
      a: "POS theo dõi đơn–thu–tồn cửa hàng bán hàng. CRM spa/salon theo dõi khách–lịch dịch vụ. Dolphin: /pos/ vs /industries/.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Cut cafe ingredient waste: where to start?",
  metaTitle: "Reduce cafe ingredient waste | Dolphin Software",
  metaDescription:
    "Beans, milk, and syrup running out mid-shift or mismatching the books: where cafe ingredient waste really happens — and when POS stock helps.",
  excerpt:
    "Cafe ingredient loss is often process, not theft: free-pouring, sales not tied to stock, late checks. Here is where it breaks and how to tighten step by step.",
  body: [
    {
      type: "lead",
      text: "A cafe runs on beans, milk, syrup, toppings. When they vanish mid-shift or the stock book lies, owners often suspect theft. More often the pour–sell–record loop is loose. This piece maps where cafe ingredient waste usually sits — and what to tighten before buying software.",
    },
    {
      type: "p",
      text: "Busy afternoon. Last bag of beans. One milk left. A queue — nobody logs “out mid-rush.” End of day, Excel says tomorrow is fine. The shelf is empty.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Cafe bar shelf with nearly empty coffee bags and milk during a rush",
    },
    {
      type: "p",
      text: "If that feels familiar, start with what eats ingredients without leaving a trail — not with the most expensive app.",
    },
    {
      type: "h2",
      text: "Where cafe ingredient waste usually sits",
    },
    {
      type: "h3",
      text: "1. Free-pour, every barista slightly different",
    },
    {
      type: "image",
      src: POUR,
      alt: "Barista pouring milk and espresso without measuring cups, spill on the counter",
    },
    {
      type: "p",
      text: "Recipes on paper; eyes on the cup. A little extra each drink becomes hundreds of grams of beans or cartons of milk by night — not malice, missing standards and sell-vs-use checks.",
    },
    {
      type: "h3",
      text: "2. Sell first, subtract stock later (or never)",
    },
    {
      type: "p",
      text: "Counter, chat, takeaway — sales in one place, stock in another. End-of-day Excel is already late. More channels means more “sold but stock still looks full.”",
    },
    {
      type: "h3",
      text: "3. Fast inbound, slow counts",
    },
    {
      type: "image",
      src: CHECK,
      alt: "Cafe owner comparing a notebook to coffee bags and milk at closing",
    },
    {
      type: "p",
      text: "Deliveries land; paper notes get forgotten. Weekly counts find gaps with no shift trail. Waste often shows up late because open/close stock on critical SKUs never happened.",
    },
    {
      type: "h3",
      text: "4. Remakes, dumps, and unlogged tests",
    },
    {
      type: "p",
      text: "Wrong pours and machine tests are normal if logged. Unlogged, the book looks fine while the shelf is empty — you think sales used less than they did.",
    },
    {
      type: "h2",
      text: "Ops checklist before software",
    },
    {
      type: "p",
      text: "Three cheap moves this week:",
    },
    {
      type: "p",
      text: "• Lock recipes for your top 5–10 drinks (grams / ml / scoops) and post them at the bar.\n• Each shift: open–close counts on painful SKUs (main beans, milk, top syrups) — even one notebook line.\n• End of day: compare drinks sold to estimated usage. Big gaps → find the shift, don’t blame “the warehouse.”",
    },
    {
      type: "p",
      text: "If you already do this and still miss every day — or two or three people pour while you cannot watch — you need sales tied to stock more clearly.",
    },
    {
      type: "h2",
      text: "When POS helps cut waste",
    },
    {
      type: "p",
      text: "POS does not replace recipes or bar discipline. It helps when each sale (by plan) decrements related SKUs, shifts leave a trail, and end-of-day reconcile uses data. Broader view: [Why stores need POS software](/news/tai-sao-can-dung-phan-mem-pos/).",
    },
    {
      type: "p",
      text: "Dolphin separates retail POS from service CRM. For cafes: [POS for cafes](/pos/cafe/) and the [POS hub](/pos/). App runtime is TODO; yearly pricing is published for quotes — [POS pricing](/chinh-sach-gia-dolphin-2026/#pos).",
    },
    {
      type: "h2",
      text: "POS is not “buy every gadget day one”",
    },
    {
      type: "p",
      text: "The goal is less cafe ingredient waste — not a full hardware kit on day one. Process + clear sales records first; printers optional. One person, modest volume, clean books — keep the checklist.",
    },
    {
      type: "h2",
      text: "Close",
    },
    {
      type: "p",
      text: "Cut waste with standard pours, open–close on painful SKUs, and sell-vs-use checks. POS (when needed) ties orders to stock so gaps show sooner — not magic. Cafe packs: [Dolphin POS cafe](/pos/cafe/). Need a web front first: [website design](/services/web/). Or [Zalo](https://zalo.me/0779937633) with your shop type and where stock drifts.",
    },
  ],
  faq: [
    {
      q: "What usually causes cafe ingredient waste?",
      a: "Free-pour variance, sales not tied to stock, slow inbound logging, unlogged remakes — not always theft.",
    },
    {
      q: "Can I cut waste without POS?",
      a: "Yes. Lock top recipes, open–close critical SKUs each shift, compare drinks sold to estimated usage daily.",
    },
    {
      q: "How does POS help with beans and milk?",
      a: "Plans with inventory tie sales to SKU decrements and leave shift trails — gaps show sooner than weekly Excel.",
    },
    {
      q: "Do small cafes need POS now?",
      a: "Not always. Few drinks and one barista can wait. Consider it when you miss every day or several people pour.",
    },
    {
      q: "Where is Dolphin POS for cafes?",
      a: "/pos/cafe/ and /pos/; yearly pricing at /chinh-sach-gia-dolphin-2026/#pos. App runtime: TODO.",
    },
    {
      q: "Cafe POS vs spa CRM?",
      a: "POS tracks orders, take, and stock for retail. Spa CRM tracks clients and appointments. Dolphin: /pos/ vs /industries/.",
    },
  ],
};

/** VI + EN only — JA UI falls back to VI in `news-details`. */
export const giamThatThoatNguyenLieuQuanCafeCopy = { vi, en };
