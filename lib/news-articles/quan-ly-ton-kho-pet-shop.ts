import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/quan-ly-ton-kho-pet-shop.jpg";

const vi: NewsArticleCopy = {
  title: "Quản lý tồn kho pet shop: khi hạt, pate và SKU bắt đầu lệch sổ",
  metaTitle: "Quản lý tồn kho pet shop | Dolphin Software",
  metaDescription:
    "Hạt, pate, đồ chơi hết giữa ngày hoặc sổ đẹp kệ trống: cách quản lý tồn kho pet shop từ quy trình thực tế — checklist trước, phần mềm POS sau.",
  excerpt:
    "Pet shop lệch tồn thường không vì “ai lấy đồ”. Hay gặp hơn: bán Zalo quên trừ, SKU quá nhiều, kiểm kho muộn. Bài này ưu tiên siết hàng hóa trước khi bàn POS.",
  body: [
    {
      type: "lead",
      text: "Chiều hôm đó khách hỏi túi hạt mèo 1,5 kg — mùi cá — mình gật vì sáng vẫn thấy trên kệ. Ra kho thì hết. Trên Zalo vẫn còn tin nhắn “còn hàng không?” từ hôm trước, mình trả lời còn. Excel cuối tuần vẫn ghi đủ. Đó là lần mình thừa nhận: quản lý tồn kho pet shop không phải chuyện cuối tháng mới làm. Nếu chỉ nhìn doanh thu ngày mà không soi từng SKU đang “chảy”, quán dễ đông mà vẫn cháy hàng đúng món khách cần.",
    },
    {
      type: "p",
      text: "Pet shop khác quán nước ở chỗ hàng nằm lâu hơn một ca, nhưng SKU lại dày: size túi, mùi, loại thú, pate theo lô. Một dòng “hạt mèo” trên sổ không đủ. Có tuần mình tưởng “kho ổn” vì tổng tiền nhập còn cao — hóa ra toàn hàng chậm, còn món chạy thì thủng. Bài này viết cho chủ tiệm ưu tiên hàng hóa tồn kho — quy trình trước, phần mềm sau.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Cover promo Dolphin: tiêu đề quản lý tồn kho pet shop và bộ hạt, pate, barcode nhìn từ trên",
    },
    {
      type: "h2",
      text: "Quản lý tồn kho pet shop thường gãy ở đâu?",
    },
    {
      type: "p",
      text: "Hay gặp nhất là bán nhiều chỗ, trừ một chỗ — hoặc không trừ. Quầy bán một túi, Zalo chốt một túi, bạn bè “lấy tạm” một túi. Cuối ngày sổ vẫn như sáng. Không phải lúc nào cũng gian lận. Thường là không có thói quen gắn mỗi lần hàng ra khỏi kệ với một dòng ghi nhận.",
    },
    {
      type: "p",
      text: "Thứ hai: SKU nhìn giống nhau. Hai túi cùng brand, khác gram hoặc mùi — nhân viên lấy nhầm, sổ gom một dòng. Khách nhận hàng “không đúng mùi”, còn kho thì lệch cả hai mã. Quản lý tồn kho pet shop mà không tách rõ mã hàng thì càng bán càng rối.",
    },
    {
      type: "h2",
      text: "Tại sao Excel cuối tuần vẫn không cứu được cháy hàng giữa ngày?",
    },
    {
      type: "p",
      text: "Vì Excel của nhiều tiệm là ảnh chụp lúc kiểm, không phải nhật ký bán. Cuối tuần ngồi đếm lại — sổ đẹp. Giữa tuần hết pate vị gà vì đơn chat không ai cập nhật. Khách không chờ đến chủ nhật để mua.",
    },
    {
      type: "p",
      text: "Sai lầm hay gặp: nghĩ “hàng khô để được lâu nên kiểm thưa”. Hàng để được lâu vẫn hết bất ngờ nếu món chạy và kênh bán tăng. Tồn kho không chỉ là chống hết hạn — còn là biết còn bán được món khách đang hỏi. Một lần khách cần cát 10 lít đúng loại cũ; mình nói còn vì tuần trước đếm còn — thực tế đã bán hết qua chat mà chưa ghi. Mất một đơn nhỏ, nhưng mất luôn cảm giác “tiệm này nhớ hàng”.",
    },
    {
      type: "h2",
      text: "Nên theo dõi SKU nào trước khi làm cả kho?",
    },
    {
      type: "p",
      text: "Đừng bắt đầu bằng cả nghìn dòng. Chọn nhóm “đau”: hạt size bán chạy, 5–10 pate/lon ướt xoay vòng nhanh, cát hoặc snack hay hết. Ghi mở–đóng theo ngày hoặc theo ca nếu có hai người trông shop. Một dòng sổ cho mỗi mã đau còn hơn một file khổng lồ không ai mở giữa giờ.",
    },
    {
      type: "p",
      text: "Khi nhập hàng: ghi ngay số về theo đúng mã — không gom “hạt về nhiều”. Khi bán hoặc xuất Zalo: trừ ngay, dù chỉ tick tay. Hai việc này nghe nhàm, nhưng là xương sống của quản lý tồn kho pet shop trước khi có phần mềm. Nếu đang mở thêm kênh (group, page, sàn), hãy coi mỗi kênh là một vòi rút kho — không có vòi nào được “miễn trừ”.",
    },
    {
      type: "h2",
      text: "Checklist thực chiến để siết tồn kho pet shop tuần này",
    },
    {
      type: "p",
      text: "Làm đủ để thấy số rõ hơn, không cần hoàn hảo:",
    },
    {
      type: "p",
      text: "Đặt tên SKU thống nhất (thú · loại · size · mùi) và dán mã ở kệ — khỏi đoán. Chốt danh sách 15–30 mã đau; mỗi ngày mở–đóng hoặc ít nhất đối chiếu cuối ngày. Mỗi đơn Zalo/quầy phải có chỗ trừ tồn trước khi giao. Cuối ngày: so số bán ước tính với lượng giảm trên kệ; lệch lớn thì hỏi ca, không đổ hết “kho mất”. Ghi riêng hàng lỗi, đổi trả, lấy tạm — kẻo sổ đẹp kệ trống.",
    },
    {
      type: "p",
      text: "Nếu làm checklist hai–ba tuần mà vẫn lệch mỗi ngày, hoặc nhiều kênh (quầy + chat + online) khiến tay không kịp — lúc đó mới đáng tính chỗ ghi bán gắn với tồn. Quy trình trước — phần mềm sau.",
    },
    {
      type: "h2",
      text: "Khi nào phần mềm POS giúp quản lý tồn kho pet shop?",
    },
    {
      type: "p",
      text: "POS không thay được việc đặt tên SKU và kỷ luật trừ hàng. Nó hữu ích khi mỗi đơn bán (theo gói) trừ đúng mã, nhập xuất có dấu vết, và anh chị không muốn cuối tuần mới biết hết hàng. Góc nhìn tổng về POS cửa hàng: [Tại sao cửa hàng cần dùng phần mềm POS?](/news/tai-sao-can-dung-phan-mem-pos/).",
    },
    {
      type: "p",
      text: "Dolphin tách POS bán hàng khỏi CRM lịch dịch vụ (spa/clinic). Pet shop bán hàng xem [POS pet shop](/pos/pet/) và [hub POS](/pos/). Runtime app vẫn TODO theo lộ trình; bảng giá năm đã công bố để tư vấn — neo [giá POS pet](/chinh-sach-gia-dolphin-2026/#pos-pet). Nếu tiệm nghiêng dịch vụ thú y/spa hơn bán hàng, xem [CRM theo ngành](/industries/) — đừng gộp một bảng giá.",
    },
    {
      type: "h2",
      text: "Kết",
    },
    {
      type: "p",
      text: "Quản lý tồn kho pet shop bắt đầu từ mã hàng rõ, trừ đúng lúc bán, và soi vài SKU đau mỗi ngày — không phải từ app đắt nhất. Phần mềm chỉ đáng bàn khi tay và Excel không còn theo kịp tốc độ kênh bán. Muốn xem gói theo pet shop: [Dolphin POS pet](/pos/pet/). Cần mặt tiền online trước: [thiết kế website](/services/web/). Hoặc nhắn [Zalo](https://zalo.me/0779937633) kể shop đang lệch ở nhóm hàng nào — hạt, pate, hay đồ chơi.",
    },
  ],
  faq: [
    {
      q: "Quản lý tồn kho pet shop có cần phần mềm ngay không?",
      a: "Chưa chắc. Ít SKU, một người bán, sổ còn khớp thì làm checklist mã hàng và trừ tồn theo đơn trước. Cân nhắc phần mềm khi lệch lặp lại hoặc nhiều kênh.",
    },
    {
      q: "Nên kiểm kho mỗi ngày hay mỗi tuần?",
      a: "Mã đau (hạt/pate chạy) nên mở–đóng theo ngày. Kiểm cả kho định kỳ vẫn hữu ích nhưng không thay mốc hàng ngày nếu hay cháy món giữa tuần.",
    },
    {
      q: "POS pet khác CRM spa thú cưng thế nào?",
      a: "POS theo dõi bán hàng và tồn SKU. CRM dịch vụ theo dõi khách–lịch. Dolphin: /pos/pet/ vs /industries/.",
    },
    {
      q: "Bán trên Zalo có cần trừ tồn không?",
      a: "Có — nếu không trừ, sổ sẽ luôn “còn hàng” trong khi kệ đã hết. Trừ ngay khi chốt đơn, trước khi giao.",
    },
    {
      q: "Nên đặt tên SKU thế nào cho khỏi nhầm?",
      a: "Thống nhất thú · loại · size · mùi (và brand nếu cần), dán mã ở kệ. Tránh gom nhiều túi khác nhau thành một dòng “hạt mèo”.",
    },
    {
      q: "Hàng lấy tạm / đổi trả ghi thế nào?",
      a: "Ghi riêng, không gộp vào “bán”. Nếu không ghi, sổ đẹp mà kệ trống — khó truy ca nào.",
    },
    {
      q: "Pet shop nhỏ bao nhiêu SKU thì nên siết tồn nghiêm?",
      a: "Không theo số tuyệt đối. Khi hay cháy món chạy, hoặc hai kênh trở lên mà quên trừ — nên siết dù SKU chưa nhiều.",
    },
    {
      q: "Có bắt buộc máy quét barcode không?",
      a: "Không bắt buộc để bắt đầu. Checklist tay + mã rõ vẫn chạy. Barcode hữu ích khi SKU và tốc độ tăng — tùy gói/triển khai sau.",
    },
    {
      q: "App POS Dolphin pet đã chạy chưa?",
      a: "Landing và bảng giá năm đã có để tư vấn. Runtime app: TODO theo lộ trình sản phẩm.",
    },
    {
      q: "Dolphin POS cho pet shop xem ở đâu?",
      a: "/pos/pet/ và /pos/; giá năm tại /chinh-sach-gia-dolphin-2026/#pos-pet. Báo giá: Zalo hoặc form liên hệ.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Pet shop inventory: when kibble, pate, and SKUs drift",
  metaTitle: "Pet shop inventory management | Dolphin Software",
  metaDescription:
    "Kibble and pate gone mid-day, pretty books and empty shelves: how to manage pet shop inventory with real ops first — checklist before POS.",
  excerpt:
    "Pet stock gaps rarely start as theft. More often: chat sales unlogged, too many lookalike SKUs, late counts. Tighten goods first — then talk software.",
  body: [
    {
      type: "lead",
      text: "That afternoon a customer asked for a 1.5 kg fish-flavor cat kibble — I nodded because I had seen it that morning. The shelf was empty. A Zalo thread from yesterday still said “in stock.” The weekly Excel looked fine. That was when I admitted pet shop inventory is not a month-end hobby. If you only watch daily sales and not the SKUs flowing out, you can stay “busy” and still burn the exact item people came for.",
    },
    {
      type: "p",
      text: "Pet shops differ from drink counters: goods sit longer than one shift, but SKUs multiply — bag size, flavor, species, pate lots. One spreadsheet line called “cat food” is not enough. This piece is for owners who prioritize inventory first — process before software.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Dolphin promo cover: pet shop inventory title with top-down kibble, pate, and barcode kit",
    },
    {
      type: "h2",
      text: "Where does pet shop inventory usually break?",
    },
    {
      type: "p",
      text: "Most often: sell in many places, decrement in one — or never. Counter, Zalo, a “quick borrow.” End of day the book matches morning. Not always theft — missing the habit of tying every unit leaving the shelf to a record.",
    },
    {
      type: "p",
      text: "Second: lookalike SKUs. Same brand, different grams or flavor — wrong bag pulled, book collapsed into one line. Customers get the wrong scent; both codes drift. Inventory without clear item codes only gets worse as you sell more.",
    },
    {
      type: "h2",
      text: "Why does weekly Excel still miss mid-week stockouts?",
    },
    {
      type: "p",
      text: "Because many shop Excels are a count snapshot, not a sales diary. Weekend recount looks tidy. Mid-week the chicken pate dies because chat orders never hit the sheet. Customers will not wait until Sunday.",
    },
    {
      type: "p",
      text: "Common mistake: “dry goods last long, so count rarely.” Long shelf life still empties suddenly when a hero SKU and more channels collide. Inventory is also knowing you can still sell what someone is asking for right now.",
    },
    {
      type: "h2",
      text: "Which SKUs should you track before the whole warehouse?",
    },
    {
      type: "p",
      text: "Do not start with a thousand rows. Pick painful groups: top kibble sizes, 5–10 fast wet foods, litter or snacks that vanish. Open–close daily — or by shift if two people cover the shop. One line per painful code beats a giant file nobody opens mid-rush.",
    },
    {
      type: "p",
      text: "On inbound: log arrivals by exact code — not “lots of food came in.” On each counter or Zalo sale: decrement before handover. Boring — and the spine of pet shop inventory before software.",
    },
    {
      type: "h2",
      text: "Field checklist to tighten pet inventory this week",
    },
    {
      type: "p",
      text: "Enough clarity, not perfection:",
    },
    {
      type: "p",
      text: "Unify SKU names (species · type · size · flavor) and label shelves. Lock 15–30 painful codes; open–close daily or at least reconcile at night. Every Zalo/counter order decrements before delivery. Compare estimated sales to shelf drop; ask the shift before blaming “missing stock.” Log damaged, returns, and borrows — or the book stays pretty while the shelf empties.",
    },
    {
      type: "p",
      text: "If two or three weeks of this still miss every day — or counter + chat + online outrun hand logs — then sales tied to stock starts to matter. Process first. Software second.",
    },
    {
      type: "h2",
      text: "When does POS help pet shop inventory?",
    },
    {
      type: "p",
      text: "POS does not replace naming SKUs or decrement discipline. It helps when each sale (by plan) hits the right code, inbound/outbound leave a trail, and you refuse to learn stockouts only on Sundays. Broader POS view: [Why stores need POS software](/news/tai-sao-can-dung-phan-mem-pos/).",
    },
    {
      type: "p",
      text: "Dolphin separates retail POS from service CRM. Pet retail: [POS for pet shops](/pos/pet/) and the [POS hub](/pos/). App runtime is TODO; yearly pricing is published — [pet POS pricing](/chinh-sach-gia-dolphin-2026/#pos-pet). If you lean clinic/spa services over retail, see [industries CRM](/industries/) — do not merge price tables.",
    },
    {
      type: "h2",
      text: "Close",
    },
    {
      type: "p",
      text: "Pet shop inventory starts with clear codes, decrement at sale time, and daily eyes on painful SKUs — not the most expensive app. Software is worth discussing when hands and Excel cannot keep up. Pet packs: [Dolphin POS pet](/pos/pet/). Need a web front first: [website design](/services/web/). Or [Zalo](https://zalo.me/0779937633) with which group drifts — kibble, pate, or toys.",
    },
  ],
  faq: [
    {
      q: "Do I need software now for pet inventory?",
      a: "Not always. Few SKUs and one seller can start with naming and decrement-by-order. Consider software when gaps repeat or channels multiply.",
    },
    {
      q: "Daily counts or weekly?",
      a: "Painful codes deserve daily open–close. Full weekly counts help but will not catch mid-week hero stockouts alone.",
    },
    {
      q: "Pet POS vs pet spa CRM?",
      a: "POS tracks sales and stock SKUs. Service CRM tracks clients and appointments. Dolphin: /pos/pet/ vs /industries/.",
    },
    {
      q: "Should Zalo sales decrement stock?",
      a: "Yes. If not, the book always says “in stock” while the shelf is empty. Decrement when the order is confirmed, before delivery.",
    },
    {
      q: "How should I name SKUs so staff do not mix bags?",
      a: "Use species · type · size · flavor (and brand if needed), label the shelf. Do not collapse different bags into one “cat food” line.",
    },
    {
      q: "How do I log borrows and returns?",
      a: "Log them separately from sales. Otherwise the book stays pretty while the shelf empties — and you cannot trace which shift drifted.",
    },
    {
      q: "How many SKUs before I should tighten inventory?",
      a: "No magic number. Tighten when hero items stock out often, or two-plus channels forget to decrement — even with a small catalog.",
    },
    {
      q: "Is a barcode scanner required?",
      a: "Not to start. Clear codes and hand decrement work. Scanners help when SKU count and speed grow — later, by plan.",
    },
    {
      q: "Is the Dolphin POS pet app live?",
      a: "Landings and yearly pricing are published for quotes. App runtime: TODO on the product roadmap.",
    },
    {
      q: "Where is Dolphin POS for pet shops?",
      a: "/pos/pet/ and /pos/; yearly pricing at /chinh-sach-gia-dolphin-2026/#pos-pet. Quotes via Zalo or the contact form.",
    },
  ],
};

/** VI + EN only — JA UI falls back to VI in `news-details`. */
export const quanLyTonKhoPetShopCopy = { vi, en };
