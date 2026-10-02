import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/giam-that-thoat-nguyen-lieu-quan-cafe.jpg";
const POUR = "/news/giam-that-thoat-nguyen-lieu-quan-cafe-dong-tay.jpg";
const CHECK = "/news/giam-that-thoat-nguyen-lieu-quan-cafe-kiem-ton.jpg";

const vi: NewsArticleCopy = {
  title: "Giảm thất thoát nguyên liệu quán cafe: bắt đầu từ đâu?",
  metaTitle: "Giảm thất thoát nguyên liệu quán cafe | Dolphin",
  metaDescription:
    "Hạt sữa hết giữa ca, sổ tồn lệch kệ: cách giảm thất thoát nguyên liệu quán cafe từ quy trình thực tế — checklist vận hành trước, phần mềm sau.",
  excerpt:
    "Thất thoát nguyên liệu quán cafe ít khi bắt đầu từ “ai lấy đồ”. Thường là đong tay, quên trừ tồn, kiểm muộn. Bài này kể chuyện vận hành và cách siết lại từng bước.",
  body: [
    {
      type: "lead",
      text: "Tối hôm đó đóng cửa muộn hơn thường lệ. Quầy còn mấy ly bẩn, máy xay nóng bỏng tay. Tôi mở tủ lạnh lấy sữa cho ca sáng hôm sau thì thấy hai hộp còn lại — trong khi sổ ghi còn bốn. Không ai thừa nhận đổ, không ai nhớ đã pha thừa bao nhiêu ly “test máy”. Chỉ biết sáng mai sẽ phải chạy đi mua gấp, và một phần tiền trong tháng đã bay theo những chỗ không ai ghi lại. Đó là lần tôi chịu ngồi lại nghĩ thật: giảm thất thoát nguyên liệu quán cafe không phải chuyện bắt lỗi người, mà là chuyện nhìn ra lỗ hổng trong cách mình đang chạy quán.",
    },
    {
      type: "p",
      text: "Nếu anh chị từng đứng giữa giờ cao điểm mà hết hạt, hết topping, hoặc cuối tuần đối chiếu tồn mà “sổ đẹp — kệ trống”, bài này viết cho anh chị. Không phải bài giảng công nghệ. Là những thứ tôi (và nhiều chủ tiệm tôi từng ngồi nói chuyện) hay mắc, rồi phải sửa bằng quy trình trước khi nghĩ tới phần mềm.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Cover promo Dolphin: tiêu đề giảm thất thoát nguyên liệu cafe và bộ mise-en-place nhìn từ trên",
    },
    {
      type: "h2",
      text: "Thất thoát nguyên liệu quán cafe thường đến từ đâu?",
    },
    {
      type: "p",
      text: "Nhiều người nhảy ngay vào nghi ngờ nhân viên. Thỉnh thoảng đúng — nhưng theo quan sát thực tế, tỷ lệ lớn hơn nằm ở chỗ “không có dấu vết”. Một ly latte đong sữa bằng mắt. Một scoop topping “cỡ vừa” tùy người. Một đơn mang đi ghi trên giấy, quên trừ kho. Cuối ngày Excel vẫn xanh vì mọi người chỉ nhập những gì nhớ được.",
    },
    {
      type: "p",
      text: "Thất thoát kiểu này âm ỉ. Không ầm ĩ như két tiền lệch vài trăm. Nó ăn dần biên lợi nhuận: hạt rang, sữa tươi, syrup, bột, topping — những thứ mua theo thùng, mất theo muỗng. Khi anh chị chỉ nhìn doanh thu ngày mà không soi lượng nguyên liệu đi kèm, cảm giác quán “đông mà không dư” rất dễ xuất hiện mà không giải thích được.",
    },
    {
      type: "h2",
      text: "Tại sao sổ tay và Excel vẫn lệch dù đã ghi chép?",
    },
    {
      type: "p",
      text: "Vì ghi chép thường xảy ra sau khi bán, không gắn với lúc bán. Ca chiều đông: hai người pha, một người thu tiền, điện thoại kêu đơn mang đi. Không ai dừng lại mở file. Tối về nhà mới nhớ “hôm nay dùng hết bao nhiêu sữa?” — lúc đó trí nhớ đã méo.",
    },
    {
      type: "p",
      text: "Excel cũng không xấu. Nó chỉ không chịu nổi tốc độ quầy. Tôi từng thấy quán ghi tồn cuối tuần rất chỉn chu, rồi giữa tuần vẫn hết topping giữa ca vì không ai cập nhật theo đơn. Sổ đẹp là sổ của buổi kiểm, không phải sổ của từng ly đã bán.",
    },
    {
      type: "image",
      src: POUR,
      alt: "Barista rót sữa và espresso không dùng cốc định lượng, nguyên liệu đổ thừa trên quầy",
    },
    {
      type: "h2",
      text: "Đong tay có làm mất nguyên liệu nhiều không?",
    },
    {
      type: "p",
      text: "Có — và thường bị xem nhẹ vì “chỉ hơn một chút”. Một chút mỗi ly, nhân với cả trăm ly, thành vài hộp sữa hoặc vài trăm gram hạt. Không phải ai cũng cố ý. Người mới sợ khách bảo nhạt nên thêm. Người cũ quen tay, mỗi người một “chuẩn riêng”. Recipe dán tường thì có, nhưng giờ cao điểm ít ai nhìn.",
    },
    {
      type: "p",
      text: "Sai lầm hay gặp: nghĩ mua cân định lượng là xong. Cân không dùng thì chỉ là đồ trang trí. Thứ quan trọng hơn là thói quen — ai pha cũng phải qua cùng một mốc (ml, gram, scoop), và có người soi định kỳ, dù chỉ năm phút đầu ca.",
    },
    {
      type: "h2",
      text: "Làm sao phát hiện thất thoát sớm hơn cuối tháng?",
    },
    {
      type: "p",
      text: "Đừng chờ báo cáo tháng. Chờ tháng là đã mất cả chu kỳ nhập hàng. Cách thực tế hơn: chọn vài SKU “đau” — hạt chính, sữa chính, ba syrup bán chạy — và ghi mở–đóng theo ca. Không cần cả kho. Chỉ cần những thứ hay hết giữa giờ và hay lệch sổ.",
    },
    {
      type: "image",
      src: CHECK,
      alt: "Chủ quán cafe đối chiếu sổ tay với kệ hạt và sữa cuối ngày",
    },
    {
      type: "p",
      text: "Cuối ngày, lấy số ly bán được (bill, sổ order, hoặc tổng đơn) rồi ước lượng nguyên liệu lý thuyết theo recipe. Lệch nhẹ thì bình thường. Lệch to và lặp lại cùng một ca — đó là tín hiệu. Tôi từng thấy ca tối lệch sữa liên tục; hóa ra máy steam xả và pha test không ghi, không phải “kho bị lấy”.",
    },
    {
      type: "h2",
      text: "Checklist thực chiến để giảm thất thoát nguyên liệu quán cafe",
    },
    {
      type: "p",
      text: "Không cần làm hết một lúc. Làm đủ để thấy số rõ hơn tuần này:",
    },
    {
      type: "p",
      text: "Chốt recipe cho 5–10 món chạy nhất — ghi gram hạt, ml sữa, scoop topping — dán chỗ pha, không dán trong file ít ai mở. Thống nhất dụng cụ đong; bỏ kiểu “ước mắt” với sữa và topping đắt. Mỗi ca ghi mở–đóng tồn vài SKU đau (một dòng sổ cũng được). Cuối ngày đối chiếu ly bán với lượng ước tính; lệch lớn thì hỏi ca, không đổ hết cho “kho mất”. Ghi riêng pha sai, test máy, huỷ — dù chỉ tick nhanh — kẻo sổ đẹp mà kệ trống.",
    },
    {
      type: "p",
      text: "Nếu anh chị làm checklist này được hai–ba tuần mà vẫn lệch mỗi ngày, hoặc hai ba người cùng pha mà không ai kịp soi, lúc đó mới nên nghĩ tới chỗ ghi bán gắn với tồn rõ hơn. Quy trình trước — phần mềm sau.",
    },
    {
      type: "h2",
      text: "Khi nào cần phần mềm POS để siết tồn?",
    },
    {
      type: "p",
      text: "Phần mềm không thay được recipe hay kỷ luật pha chế. Nó hữu ích khi anh chị cần mỗi đơn bán có dấu vết trừ nguyên liệu/SKU (theo phạm vi gói), mở–đóng ca không phụ thuộc trí nhớ, và cuối ngày đối chiếu dựa trên dữ liệu thay vì đoán. Đọc thêm góc nhìn tổng về POS cửa hàng: [Tại sao cửa hàng cần dùng phần mềm POS?](/news/tai-sao-can-dung-phan-mem-pos/).",
    },
    {
      type: "p",
      text: "Với Dolphin, dòng POS dành cửa hàng bán hàng tách khỏi CRM lịch dịch vụ. Quán cafe xem [POS tiệm cafe](/pos/cafe/) hoặc [hub POS](/pos/). Runtime app vẫn theo lộ trình sản phẩm (TODO); bảng giá năm đã công bố để tư vấn rõ — [chính sách giá POS](/chinh-sach-gia-dolphin-2026/#pos). Không cần sắm đủ máy in bill ngày đầu nếu mục tiêu trước mắt chỉ là siết thất thoát nguyên liệu quán cafe.",
    },
    {
      type: "h2",
      text: "Kết",
    },
    {
      type: "p",
      text: "Giảm thất thoát nguyên liệu quán cafe bắt đầu từ những việc hơi nhàm: đong chuẩn, ghi mở–đóng vài SKU đau, đối chiếu bán–dùng trước khi ngủ. Phần mềm chỉ đáng bàn khi quy trình tay đã làm mà vẫn không theo kịp tốc độ quán. Nếu anh chị muốn xem gói theo ngành cafe, ghé [Dolphin POS cafe](/pos/cafe/). Cần mặt tiền online trước thì xem [thiết kế website](/services/web/). Hoặc nhắn [Zalo](https://zalo.me/0779937633) kể quán đang lệch ở đâu — hạt, sữa, hay đa kênh — để nói chuyện cụ thể, không cần “biết IT”.",
    },
  ],
  faq: [
    {
      q: "Thất thoát nguyên liệu quán cafe có phải lúc nào cũng do nhân viên lấy không?",
      a: "Không hẳn. Hay gặp hơn là đong tay lệch, bán không gắn trừ tồn, pha test/huỷ không ghi, kiểm tồn muộn. Nghi ngờ gian lận nên là bước sau khi đã có dấu vết rõ.",
    },
    {
      q: "Chưa có phần mềm POS thì giảm thất thoát được không?",
      a: "Được. Nhiều quán siết bằng recipe, đong chuẩn và sổ mở–đóng SKU đau theo ca. Phần mềm giúp khi tốc độ và số người pha vượt sức ghi tay.",
    },
    {
      q: "Nên kiểm tồn mỗi ngày hay mỗi tuần?",
      a: "SKU đau (hạt chính, sữa, syrup top) nên mở–đóng theo ca hoặc ít nhất cuối ngày. Kiểm cả kho mỗi tuần vẫn hữu ích, nhưng không thay được mốc theo ca nếu hay hết giữa giờ.",
    },
    {
      q: "POS giúp gì với hạt và sữa cụ thể?",
      a: "Ở các gói có quản lý tồn: gắn bán với trừ SKU/nguyên liệu và để lại dấu vết ca — lệch lộ sớm hơn Excel cuối tuần. Không thay được việc chốt recipe và kỷ luật đong.",
    },
    {
      q: "Quán nhỏ một người có cần mua POS ngay không?",
      a: "Chưa chắc. Ít ly, sổ còn khớp thì làm checklist trước. Cân nhắc khi lệch lặp lại mỗi ngày hoặc thêm người cùng pha/bán.",
    },
    {
      q: "Dolphin POS cho cafe xem thông tin ở đâu?",
      a: "Landing /pos/cafe/ và hub /pos/; bảng giá năm tại /chinh-sach-gia-dolphin-2026/#pos. Runtime app: TODO theo lộ trình.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Cut cafe ingredient waste: where do you actually start?",
  metaTitle: "Reduce cafe ingredient waste | Dolphin Software",
  metaDescription:
    "Beans and milk gone mid-shift, books that do not match the shelf: how to cut cafe ingredient waste with real ops first — checklist before software.",
  excerpt:
    "Cafe ingredient waste rarely starts with “someone stole stock.” It is free-pouring, late counts, sales not tied to usage. A practical ops story — then when software helps.",
  body: [
    {
      type: "lead",
      text: "We closed late that night. The bar was sticky, the grinder still hot. I opened the fridge for tomorrow’s milk and found two cartons — the book said four. Nobody remembered how many “machine tests” got poured out. Next morning we rushed a buy-run, and part of the month’s margin had already left through unlogged gaps. That was when I stopped treating cafe ingredient waste as a blame game and started treating it as a process problem.",
    },
    {
      type: "p",
      text: "If you have run out mid-rush or closed a week with a pretty spreadsheet and an empty shelf, this is for you. Not a tech lecture — the mistakes shop operators actually make, and what to tighten before buying software.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Dolphin promo cover: cafe ingredient-waste title with top-down mise-en-place product kit",
    },
    {
      type: "h2",
      text: "Where does cafe ingredient waste usually come from?",
    },
    {
      type: "p",
      text: "Suspicion jumps to staff. Sometimes that is fair. More often there is simply no trail: milk poured by eye, toppings “about a scoop,” a takeaway slip that never hit the stock sheet. End-of-day Excel looks fine because people only enter what they remember.",
    },
    {
      type: "p",
      text: "This kind of loss is quiet. It nibbles beans, fresh milk, syrups, powders — bought by the case, lost by the spoon. Revenue can look busy while contribution quietly thins, and nobody can explain why.",
    },
    {
      type: "h2",
      text: "Why do notebooks and Excel still drift?",
    },
    {
      type: "p",
      text: "Because logging usually happens after the sale, not with it. Rush hour: two on bar, one on till, phones buzzing. Nobody opens the file. At night someone guesses milk usage — memory already bent.",
    },
    {
      type: "p",
      text: "Excel is not the villain. It cannot match bar speed. Weekly counts can look tidy while mid-week toppings still die mid-shift because nothing followed each order. A clean weekly book is not a per-drink book.",
    },
    {
      type: "image",
      src: POUR,
      alt: "Barista pouring milk and espresso without measuring cups, spill on the counter",
    },
    {
      type: "h2",
      text: "Does free-pouring really waste that much?",
    },
    {
      type: "p",
      text: "Yes — and it gets dismissed as “just a little.” A little per cup across a hundred drinks becomes cartons of milk or hundreds of grams of beans. New staff pour heavy so drinks do not taste weak. Veterans each have a private “standard.” Recipes on the wall get ignored in the rush.",
    },
    {
      type: "p",
      text: "Common mistake: buying a scale and never using it. Habit beats hardware. Same ml / gram / scoop for everyone, and a quick check at the start of a shift — even five minutes.",
    },
    {
      type: "h2",
      text: "How do you spot waste before month-end?",
    },
    {
      type: "p",
      text: "Do not wait for a monthly report. Pick a few painful SKUs — main beans, main milk, top syrups — and open–close them by shift. Not the whole warehouse. Just what runs out mid-rush and drifts on paper.",
    },
    {
      type: "image",
      src: CHECK,
      alt: "Cafe owner comparing a notebook to coffee bags and milk at closing",
    },
    {
      type: "p",
      text: "At close, take drinks sold and estimate theoretical usage from recipes. Small gaps happen. Big gaps on the same shift are a signal. I once chased “missing milk” for a week; it was unlogged steam dumps and test pours, not theft.",
    },
    {
      type: "h2",
      text: "Field checklist to cut cafe ingredient waste",
    },
    {
      type: "p",
      text: "You do not need everything at once. Enough to see clearer numbers this week:",
    },
    {
      type: "p",
      text: "Lock recipes for your top 5–10 drinks and post them where people pour. Standardize measuring tools; stop eye-balling expensive milk and toppings. Open–close a few painful SKUs each shift — one notebook line is fine. Compare drinks sold to estimated usage at night; ask the shift before blaming “the warehouse.” Log remakes, machine tests, and dumps somehow — or the book stays pretty while the shelf empties.",
    },
    {
      type: "p",
      text: "If you run this for two or three weeks and still miss every day — or several people pour while nobody can watch — then sales tied to stock starts to matter. Process first. Software second.",
    },
    {
      type: "h2",
      text: "When does POS software help with stock?",
    },
    {
      type: "p",
      text: "Software does not replace recipes or bar discipline. It helps when each sale should leave a trail against SKUs (by plan), shifts should not depend on memory, and end-of-day reconcile should use data. Broader view: [Why stores need POS software](/news/tai-sao-can-dung-phan-mem-pos/).",
    },
    {
      type: "p",
      text: "Dolphin keeps retail POS separate from service CRM. Cafes: [POS for cafes](/pos/cafe/) or the [POS hub](/pos/). App runtime is TODO; yearly pricing is published for clear quotes — [POS pricing](/chinh-sach-gia-dolphin-2026/#pos). You do not need a full hardware kit on day one if the goal is cutting cafe ingredient waste.",
    },
    {
      type: "h2",
      text: "Close",
    },
    {
      type: "p",
      text: "Cutting cafe ingredient waste starts with slightly boring work: standard pours, open–close on painful SKUs, sell-vs-use before you sleep. Software is worth discussing when hand process cannot keep up. Cafe packs: [Dolphin POS cafe](/pos/cafe/). Need a web front first: [website design](/services/web/). Or [Zalo](https://zalo.me/0779937633) with where you drift — beans, milk, or channels — no “IT speak” required.",
    },
  ],
  faq: [
    {
      q: "Is cafe ingredient waste always theft?",
      a: "Not usually. Free-pour drift, sales not tied to stock, unlogged tests/dumps, and late counts show up more often. Treat theft as a later question once you have a trail.",
    },
    {
      q: "Can I cut waste without POS?",
      a: "Yes. Many shops tighten with recipes, measuring standards, and shift open–close on painful SKUs. Software helps when speed and headcount outgrow hand logs.",
    },
    {
      q: "Daily counts or weekly?",
      a: "Painful SKUs deserve shift or at least end-of-day open–close. Full weekly counts still help but will not catch mid-rush gaps alone.",
    },
    {
      q: "What does POS do for beans and milk?",
      a: "Inventory-capable plans tie sales to SKU decrements and leave shift trails — gaps show sooner than weekly Excel. Recipes and pour discipline still matter.",
    },
    {
      q: "Does a one-person cafe need POS now?",
      a: "Not always. Low volume and clean books can wait. Consider it when the same gap repeats daily or more people pour and sell together.",
    },
    {
      q: "Where is Dolphin POS for cafes?",
      a: "/pos/cafe/ and /pos/; yearly pricing at /chinh-sach-gia-dolphin-2026/#pos. App runtime: TODO.",
    },
  ],
};

/** VI + EN only — JA UI falls back to VI in `news-details`. */
export const giamThatThoatNguyenLieuQuanCafeCopy = { vi, en };
