import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/quan-ly-dong-tien-cua-hang.jpg";
const PAYOUT = "/news/quan-ly-dong-tien-cua-hang-chi.jpg";
const FUNDS = "/news/quan-ly-dong-tien-cua-hang-quy.jpg";

const vi: NewsArticleCopy = {
  title: "Quản lý dòng tiền cửa hàng khi doanh thu và két không khớp",
  metaTitle: "Quản lý dòng tiền cửa hàng khi két lệch doanh thu | Dolphin",
  metaDescription:
    "Doanh thu cuối ngày ổn mà két thì thiếu. Tách tiền đã bán, tiền đã vào quỹ, và tiền còn nợ — rồi đối chiếu ca bằng sổ, không bằng trí nhớ.",
  excerpt:
    "Doanh thu là tiền đã bán. Dòng tiền là tiền đã vào két, vào tài khoản, hoặc còn nằm ở công nợ. Cộng hai số đó vào một chỗ là két cuối ngày không khớp.",
  body: [
    {
      type: "lead",
      text: "Quản lý dòng tiền cửa hàng không bắt đầu từ một biểu đồ đẹp. Nó bắt đầu lúc đóng cửa: máy báo bán khá, mở két ra thì không đủ. Bài này tách hai số hay bị cộng nhầm — tiền đã bán, và tiền đã nằm trong quỹ.",
    },
    {
      type: "p",
      text: "Ca tối. Thu ngân khóa quầy, chủ cửa hàng mở két, rồi mở tin nhắn hỏi “ca này chuyển khoản bao nhiêu?”. Có người nhớ. Có người đoán. Khách nợ từ trưa vẫn nằm trên giấy, phiếu nhập hàng trả tiền mặt thì kẹp dưới két.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Bìa Dolphin: quản lý dòng tiền cửa hàng, két tiền và sổ trắng nhìn từ trên",
    },
    {
      type: "p",
      text: "Nếu cảnh này quen — cafe, trà sữa, pet shop, thời trang, quán ăn — bài viết dành cho anh chị. Không cần chuỗi nhiều chi nhánh. Một quầy, vài người bán, là đủ để doanh thu và két lệch.",
    },
    {
      type: "h2",
      text: "Doanh thu không phải tiền trong két",
    },
    {
      type: "p",
      text: "Doanh thu ghi những gì đã bán trong ca. Dòng tiền ghi tiền đã đi vào hoặc đi ra. Hai sổ phục vụ hai câu hỏi khác nhau. Câu thứ nhất: hôm nay bán được bao nhiêu? Câu thứ hai: tiền đang nằm ở đâu?",
    },
    {
      type: "p",
      text: "Bán một ly, một túi hạt, một áo — đó là doanh thu, dù khách trả ngay hay hẹn trả sau. Chỉ phần khách trả ngay mới vào két hoặc tài khoản. Phần hẹn trả sau là công nợ. Nếu cộng cả hai vào “tiền trong két”, cuối ngày sẽ thiếu đúng khoản khách chưa trả.",
    },
    {
      type: "h2",
      text: "Ba chỗ cửa hàng hay lệch",
    },
    {
      type: "h3",
      text: "Khách còn nợ",
    },
    {
      type: "p",
      text: "Khách quen lấy hàng, ghi sổ, hẹn cuối tuần. Doanh thu đã có. Két thì chưa. Đến lúc thu, đó là tiền vào — không phải một lần bán mới. Nếu không ghi riêng, ca sau sẽ tưởng bán ít hơn thực tế, hoặc tưởng két thất thoát.",
    },
    {
      type: "h3",
      text: "Nhập hàng trả ngay",
    },
    {
      type: "image",
      src: PAYOUT,
      alt: "Quầy cuối ca: két mở cạnh phiếu bán và sổ tay, không thấy chữ đọc được",
    },
    {
      type: "p",
      text: "Shipper để thùng sữa, chủ trả tiền mặt tại chỗ. Hàng vào kho. Tiền ra khỏi két. Nếu chỉ nhìn doanh thu, ca vẫn “đẹp” trong khi két vơi. Phiếu chi cần một dòng: trả nhà cung cấp, đúng ngày, đúng quỹ.",
    },
    {
      type: "h3",
      text: "Chuyển từ quỹ này sang quỹ khác",
    },
    {
      type: "p",
      text: "Cuối ngày gom tiền mặt, nộp sang tài khoản. Két giảm. Tài khoản tăng. Cửa hàng không bán thêm đồng nào. Ghi nhầm thành doanh thu thì số bán phình lên. Ghi nhầm thành chi phí thì lời bị kéo xuống. Chuyển quỹ chỉ đổi chỗ để tiền.",
    },
    {
      type: "h2",
      text: "Quản lý dòng tiền cửa hàng bắt đầu từ ba câu",
    },
    {
      type: "p",
      text: "Mỗi ca chỉ cần trả lời được ba câu, viết ra, không nhớ miệng. Tiền vào từ đâu? Tiền ra việc gì? Còn nằm ở quỹ nào?",
    },
    {
      type: "image",
      src: FUNDS,
      alt: "Ba khay trên quầy: tiền mặt, máy thanh toán không logo, và tờ giấy ghi nợ gấp kín",
    },
    {
      type: "p",
      text: "Quỹ ở đây là chỗ chứa: tiền mặt, chuyển khoản, ví QR. Không cần tên ngân hàng thật mới tách được. Cần mỗi lần thu hoặc chi chỉ vào một quỹ, để cuối ngày cộng lại ra đúng số đang cầm.",
    },
    {
      type: "h2",
      text: "Ghi sổ thế nào cho khỏi cộng nhầm",
    },
    {
      type: "p",
      text: "Bán thu ngay thì cộng vào đúng quỹ: tiền mặt vào két, chuyển khoản vào sổ chuyển khoản, QR vào sổ ví. Đó là tiền vào gắn với doanh thu của ca.",
    },
    {
      type: "p",
      text: "Bán nợ thì ghi doanh thu và ghi công nợ, chưa cộng quỹ. Khi khách trả — đủ hoặc một phần — lúc đó mới có phiếu thu. Công nợ khách (họ nợ mình) và công nợ nhà cung cấp (mình nợ họ) là hai danh sách, không gộp một số.",
    },
    {
      type: "p",
      text: "Nhập hàng trả ngay thì phiếu chi, trừ đúng quỹ đã rút tiền. Nhập ghi nợ nhà cung cấp thì chưa trừ quỹ, đến lúc trả mới chi.",
    },
    {
      type: "p",
      text: "Chuyển giữa các quỹ: trừ quỹ nguồn, cộng quỹ đích, không đụng doanh thu, không đụng chi phí, không đụng lời. Cuối ca đối chiếu két và sổ từng quỹ. Lệch thì tìm phiếu thiếu, không sửa số cho “đẹp”.",
    },
    {
      type: "p",
      text: "Demo Dolphin POS giữ sổ này trên máy trình duyệt. Bán tiền mặt, chuyển khoản hoặc QR cộng đúng quỹ mẫu. Bán nợ chưa cộng cho đến khi thu. Chuyển quỹ không tính thành doanh thu. Sổ chạy local, chưa nối ngân hàng thật. Mở thử tại https://nchithanh.github.io/pos/ — chọn lĩnh vực, vào phần Tài chính. Báo giá gói năm nằm ở [bảng giá POS](/chinh-sach-gia-dolphin-2026/#pos) và [hub POS](/pos/).",
    },
    {
      type: "h2",
      text: "Khi nào nên tách dòng tiền khỏi doanh thu",
    },
    {
      type: "p",
      text: "Một người, ít đơn, khách trả ngay, không nhập hàng giữa ca — sổ bán và két thường còn đi cùng nhau. Nên tách khi có nợ, có nhập trả tiền mặt, hoặc có hơn một chỗ chứa tiền. Đó là lúc “doanh thu cao” không còn nghĩa là “két đủ”.",
    },
    {
      type: "h2",
      text: "Kết",
    },
    {
      type: "p",
      text: "Quản lý dòng tiền cửa hàng là biết tiền vào từ đâu, tiền ra việc gì, và còn nằm ở quỹ nào. Doanh thu trả lời câu bán được bao nhiêu. Đừng cộng hai câu đó thành một số rồi trách két.",
    },
    {
      type: "p",
      text: "Góc nhìn rộng hơn về phần mềm bán hàng: [Tại sao cửa hàng cần dùng phần mềm POS?](/news/tai-sao-can-dung-phan-mem-pos/). Muốn xem ngành mình trên site: [Dolphin POS](/pos/). Nhắn [Zalo](https://zalo.me/0779937633) nếu cần đối chiếu ca thật của cửa hàng.",
    },
  ],
  faq: [
    {
      q: "Quản lý dòng tiền cửa hàng khác theo dõi doanh thu thế nào?",
      a: "Doanh thu là hàng đã bán. Dòng tiền là tiền đã vào hoặc đã ra khỏi từng quỹ. Khách nợ làm doanh thu tăng nhưng quỹ chưa tăng.",
    },
    {
      q: "Doanh thu cao mà két ít tiền có bình thường không?",
      a: "Có, nếu một phần bán là nợ, hoặc trong ca có chi tiền mặt (nhập hàng) hay chuyển tiền mặt sang tài khoản.",
    },
    {
      q: "Bán nợ có được cộng vào quỹ ngay không?",
      a: "Không. Ghi doanh thu và công nợ. Chỉ cộng quỹ khi thu tiền, đủ hoặc một phần.",
    },
    {
      q: "Chuyển tiền mặt sang tài khoản có tính là doanh thu không?",
      a: "Không. Đó là chuyển quỹ: két giảm, tài khoản tăng, cửa hàng không bán thêm.",
    },
    {
      q: "Nhập hàng trả ngay ghi vào đâu?",
      a: "Phiếu chi, trừ đúng quỹ đã rút tiền. Nếu ghi nợ nhà cung cấp thì chưa trừ quỹ cho đến lúc trả.",
    },
    {
      q: "Cuối ca nên đối chiếu những gì?",
      a: "Két và từng quỹ với sổ thu, sổ chi, các lần chuyển quỹ. Lệch thì tìm phiếu thiếu, không sửa số cho khớp miệng.",
    },
    {
      q: "Không nối ngân hàng thì có quản lý dòng tiền được không?",
      a: "Được với sổ trên máy: mỗi lần thu chi gắn một quỹ. Nối ngân hàng giúp đối soát sao kê, không thay việc ghi đúng phiếu.",
    },
    {
      q: "Demo Dolphin POS ghi sổ ra sao?",
      a: "Sổ local trên trình duyệt. Bán tiền mặt, chuyển khoản hoặc QR cộng quỹ mẫu. Bán nợ chưa cộng đến khi thu. Chuyển quỹ không thành doanh thu. Chưa nối ngân hàng thật. Xem https://nchithanh.github.io/pos/.",
    },
    {
      q: "Công nợ khách và công nợ nhà cung cấp có gộp một số không?",
      a: "Không. Khách nợ mình là phải thu. Mình nợ nhà cung cấp là phải trả. Hai danh sách.",
    },
    {
      q: "Đọc thêm về POS cửa hàng ở đâu?",
      a: "Bài tổng: /news/tai-sao-can-dung-phan-mem-pos/. Hub ngành: /pos/. Bảng giá năm: /chinh-sach-gia-dolphin-2026/#pos.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Store cash flow when sales and the drawer do not match",
  metaTitle: "Store cash flow when the drawer misses sales | Dolphin",
  metaDescription:
    "The till report looks fine and the drawer is short. Split money sold, money in each fund, and money still owed — then reconcile the shift from the book.",
  excerpt:
    "Sales are what you sold. Cash flow is what entered the drawer, the account, or stayed as debt. Add those into one number and the drawer will not match.",
  body: [
    {
      type: "lead",
      text: "Store cash flow does not start with a pretty chart. It starts at close: the register says the day went well, then you open the drawer and the cash is short. This piece splits two numbers that get added by mistake — money sold, and money sitting in a fund.",
    },
    {
      type: "p",
      text: "Evening shift. The cashier locks the counter. The owner opens the drawer, then a chat: “how much did we transfer?” Someone remembers. Someone guesses. A lunchtime tab is still on paper. A cash supplier receipt is stuck under the drawer.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Dolphin cover: store cash flow, top-down cash drawer and a blank notebook",
    },
    {
      type: "p",
      text: "If that sounds familiar — cafe, milk tea, pet shop, fashion, a small restaurant — this is for you. You do not need many branches. One counter and a few people selling is enough for sales and the drawer to diverge.",
    },
    {
      type: "h2",
      text: "Sales are not the cash in the drawer",
    },
    {
      type: "p",
      text: "Sales record what left the shelf this shift. Cash flow records money that moved in or out. They answer different questions. How much did we sell? Where is the money now?",
    },
    {
      type: "p",
      text: "A drink, a bag of food, a shirt — that is a sale whether the customer pays now or later. Only the paid-now part enters a fund. The rest is debt. Add both into “cash in the drawer” and the close will be short by exactly what customers still owe.",
    },
    {
      type: "h2",
      text: "Three places a store usually slips",
    },
    {
      type: "h3",
      text: "The customer still owes you",
    },
    {
      type: "p",
      text: "A regular takes goods and pays at the weekend. The sale exists. The drawer does not. When they pay, that is money in — not a new sale. Skip the split and the next shift looks like a weak sales day, or like missing cash.",
    },
    {
      type: "h3",
      text: "Stock paid in cash on the spot",
    },
    {
      type: "image",
      src: PAYOUT,
      alt: "Closing counter: open drawer beside a till slip and a notebook, no readable text",
    },
    {
      type: "p",
      text: "A delivery lands and you pay cash. Stock goes up. The drawer goes down. Sales can still look healthy. A payout note needs one line: paid the supplier, that day, from that fund.",
    },
    {
      type: "h3",
      text: "Moving money between funds",
    },
    {
      type: "p",
      text: "End of day you lift cash into a bank account. The drawer drops. The account rises. Nothing new was sold. Book it as sales and revenue inflates. Book it as an expense and profit drops. A transfer only changes where the money sits.",
    },
    {
      type: "h2",
      text: "Store cash flow starts with three questions",
    },
    {
      type: "p",
      text: "Each shift should answer three questions on paper, not from memory. Where did money come in? What did money go out for? Which fund still holds it?",
    },
    {
      type: "image",
      src: FUNDS,
      alt: "Three trays on a counter: cash, an unbranded card terminal, and a folded IOU",
    },
    {
      type: "p",
      text: "A fund is a place money sits: cash, transfer, QR wallet. You do not need a live bank connection to separate them. You need each receipt and each payout to name one fund, so the close adds up to what you are holding.",
    },
    {
      type: "h2",
      text: "How to book it so the numbers stay apart",
    },
    {
      type: "p",
      text: "A paid sale lands in the fund that received it: cash in the drawer, transfer on the transfer book, QR on the wallet book. That inflow belongs with the shift’s sales.",
    },
    {
      type: "p",
      text: "A sale on credit is sales plus a receivable. The fund does not move until you collect, in full or in part. Customer debt (they owe you) and supplier debt (you owe them) are two lists.",
    },
    {
      type: "p",
      text: "Stock paid now is a payout from the fund you used. Stock taken on supplier credit does not touch the fund until you pay.",
    },
    {
      type: "p",
      text: "Moving between funds subtracts the source and adds the destination. It does not touch sales, expenses, or profit. At close, match the drawer and each fund to the book. If it is short, find the missing slip. Do not edit the number so the story sounds tidy.",
    },
    {
      type: "p",
      text: "The Dolphin POS demo keeps this book in the browser. Cash, transfer, and QR sales add the sample fund. Credit sales wait until collection. Transfers are not sales. The ledger is local and not connected to a real bank. Try https://nchithanh.github.io/pos/ — pick a trade, open Finance. Yearly plans: [POS pricing](/chinh-sach-gia-dolphin-2026/#pos) and the [POS hub](/pos/).",
    },
    {
      type: "h2",
      text: "When to split cash flow from sales",
    },
    {
      type: "p",
      text: "One person, few tickets, everyone pays now, no mid-shift stock buys — sales and the drawer often still move together. Split them when you carry debt, pay suppliers in cash, or keep money in more than one place. That is when “strong sales” stops meaning “enough cash”.",
    },
    {
      type: "h2",
      text: "Close",
    },
    {
      type: "p",
      text: "Store cash flow is knowing where money came in, what it left for, and which fund still holds it. Sales answer how much you sold. Do not merge those answers and then blame the drawer.",
    },
    {
      type: "p",
      text: "Wider view: [Why a store needs POS software](/news/tai-sao-can-dung-phan-mem-pos/). Trade pages: [Dolphin POS](/pos/). [Zalo](https://zalo.me/0779937633) if you want to walk a real shift.",
    },
  ],
  faq: [
    {
      q: "How is store cash flow different from tracking sales?",
      a: "Sales are goods sold. Cash flow is money in or out of each fund. A customer tab raises sales before any fund moves.",
    },
    {
      q: "Can sales look strong while the drawer is short?",
      a: "Yes, if part of the day was sold on credit, or cash left for stock, or cash was moved to an account.",
    },
    {
      q: "Does a credit sale hit the fund immediately?",
      a: "No. Record the sale and the receivable. Add the fund only when you collect, in full or in part.",
    },
    {
      q: "Is moving cash to an account a sale?",
      a: "No. It is a transfer: the drawer drops, the account rises, nothing new was sold.",
    },
    {
      q: "Where do I book stock paid in cash?",
      a: "As a payout from the fund you used. Supplier credit does not reduce the fund until you pay.",
    },
    {
      q: "What should a shift close check?",
      a: "The drawer and each fund against receipts, payouts, and transfers. If it is short, find the missing slip.",
    },
    {
      q: "Can I track cash flow without a bank connection?",
      a: "Yes, with a book that ties each movement to a fund. A bank feed helps match statements. It does not replace the slip.",
    },
    {
      q: "What does the Dolphin POS demo actually record?",
      a: "A local browser ledger. Cash, transfer, and QR sales add a sample fund. Credit sales wait until collection. Transfers are not sales. No live bank. See https://nchithanh.github.io/pos/.",
    },
    {
      q: "Are customer debt and supplier debt one balance?",
      a: "No. Customers owe you. You owe suppliers. Two lists.",
    },
    {
      q: "Where do I read more about store POS?",
      a: "Overview: /news/tai-sao-can-dung-phan-mem-pos/. Hub: /pos/. Yearly plans: /chinh-sach-gia-dolphin-2026/#pos.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title: "店舗の入出金：売上とレジが合わないとき",
  metaTitle: "店舗の入出金管理。レジが売上とずれるとき | Dolphin",
  metaDescription:
    "売上は足りているのにレジが足りない。売った金額、入ったお金、未回収を分け、締めは記憶ではなく帳簿で合わせる。",
  excerpt:
    "売上は売った金額。入出金はレジや口座に入ったお金、まだ債権のままの分。一つに足すと締めが合いません。",
  body: [
    {
      type: "lead",
      text: "店舗の入出金は、きれいなグラフから始まりません。閉店時に始まります。レジ画面は好調なのに、引き出しを開けると現金が足りない。この記事は混ぜがちな二つの数字を分けます。売った金額と、いま手元にあるお金です。",
    },
    {
      type: "p",
      text: "夜のシフト。レジを閉め、引き出しを開け、チャットで「振込はいくら？」と聞く。覚えている人と、推測する人がいる。昼のつけは紙のまま。仕入れの現金領収は引き出しの下です。",
    },
    {
      type: "image",
      src: COVER,
      alt: "Dolphinのカバー。店舗の入出金、上から見たレジ金庫と無地のノート",
    },
    {
      type: "p",
      text: "カフェ、タピオカ、ペットショップ、アパレル、小さな食堂。この場面に覚えがあるなら、この記事はそのためです。多店舗は要りません。カウンター一つと数人の販売で、売上とレジはずれます。",
    },
    {
      type: "h2",
      text: "売上はレジの中身ではない",
    },
    {
      type: "p",
      text: "売上はそのシフトで売れたものです。入出金は入ったお金と出たお金です。問いが違います。いくら売ったか。お金は今どこにあるか。",
    },
    {
      type: "p",
      text: "一杯、一袋、一枚の服。今払っても後払でも売上です。今払った分だけがレジや口座に入ります。後払いは債権です。両方を「レジの現金」に足すと、締めは未回収の分だけ足りなくなります。",
    },
    {
      type: "h2",
      text: "ずれやすい三つの場面",
    },
    {
      type: "h3",
      text: "お客の未回収",
    },
    {
      type: "p",
      text: "常連が商品を持ち、週末に払う。売上はある。レジにはない。入金は新しい売上ではありません。分けないと、次のシフトは売れなかったように見えるか、現金が消えたように見えます。",
    },
    {
      type: "h3",
      text: "その場で現金払いの仕入れ",
    },
    {
      type: "image",
      src: PAYOUT,
      alt: "閉店後のカウンター。開いたレジ、伝票、ノート。文字は読めない",
    },
    {
      type: "p",
      text: "納品が来て現金で払う。在庫は増える。レジは減る。売上だけ見るとまだ好調です。出金は一行で足ります。仕入先へ、その日、その財布から。",
    },
    {
      type: "h3",
      text: "財布から財布への移動",
    },
    {
      type: "p",
      text: "閉店後に現金を口座へ移す。レジは減り、口座は増える。新しい売上はありません。売上にすると数字が膨らみます。経費にすると利益が下がります。移動は置き場所が変わるだけです。",
    },
    {
      type: "h2",
      text: "店舗の入出金は三つの問いから",
    },
    {
      type: "p",
      text: "各シフトで三つを紙に残します。お金はどこから入ったか。何のために出たか。今どの財布にあるか。記憶では残しません。",
    },
    {
      type: "image",
      src: FUNDS,
      alt: "カウンターの三つのトレイ。現金、ロゴのない端末、折ったメモ",
    },
    {
      type: "p",
      text: "財布とは置き場所です。現金、振込、QR。銀行とつながっていなくても分けられます。必要なのは、入金と出金が一つの財布を名指しすることです。",
    },
    {
      type: "h2",
      text: "混ぜずに記帳する",
    },
    {
      type: "p",
      text: "その場払いの売上は、受け取った財布へ入れます。現金はレジ、振込は振込帳、QRはウォレット帳。これはそのシフトの売上に紐づく入金です。",
    },
    {
      type: "p",
      text: "つけ売りは売上と債権です。財布は、全額または一部を回収したときに動きます。お客の未回収と、仕入先への未払いは、別の一覧です。",
    },
    {
      type: "p",
      text: "現金仕入れはその財布からの出金です。掛け仕入れは、支払うまで財布を動かしません。",
    },
    {
      type: "p",
      text: "財布の間の移動は、出どころを減らし、行き先を増やすだけです。売上にも経費にも利益にも触れません。締めはレジと各財布を帳簿と合わせます。足りなければ伝票を探します。話がきれいになるように数字は直しません。",
    },
    {
      type: "p",
      text: "Dolphin POSのデモはこの帳簿をブラウザに置きます。現金・振込・QRの売上は見本の財布に入ります。つけは回収まで入りません。移動は売上になりません。データは端末内で、実在の銀行とはつながっていません。https://nchithanh.github.io/pos/ で業種を選び、財務を開いてください。年額プランは [POSの価格](/chinh-sach-gia-dolphin-2026/#pos) と [POSハブ](/pos/) にあります。",
    },
    {
      type: "h2",
      text: "売上と入出金を分けるタイミング",
    },
    {
      type: "p",
      text: "一人で、件数が少なく、その場払いだけで、シフト中に仕入れないなら、売上とレジはまだ一緒に動くことが多いです。債権がある、現金で仕入れる、お金の置き場所が複数ある。そのとき「売上は良い」は「現金は足りる」を意味しなくなります。",
    },
    {
      type: "h2",
      text: "結び",
    },
    {
      type: "p",
      text: "店舗の入出金とは、入った場所、出た理由、残っている財布を把握することです。売上はいくら売ったかの答えです。二つの答えを一つに足して、レジを責めないでください。",
    },
    {
      type: "p",
      text: "販売ソフトの全体像: [店舗にPOSソフトが必要な理由](/news/tai-sao-can-dung-phan-mem-pos/)。業種ページ: [Dolphin POS](/pos/)。実際の締めを一緒に見るなら [Zalo](https://zalo.me/0779937633)。",
    },
  ],
  faq: [
    {
      q: "店舗の入出金と売上管理は何が違いますか？",
      a: "売上は売れた商品です。入出金は各財布に入った・出たお金です。つけは、財布が動く前に売上だけ増えます。",
    },
    {
      q: "売上が良くてもレジが足りないことはありますか？",
      a: "あります。つけがある、現金で仕入れた、現金を口座へ移した、のいずれかです。",
    },
    {
      q: "つけ売りはその場で財布に入りますか？",
      a: "入りません。売上と債権を記帳し、全額または一部を回収したときに財布へ入れます。",
    },
    {
      q: "現金を口座へ移すのは売上ですか？",
      a: "違います。財布の移動です。レジは減り、口座は増え、新しい売上はありません。",
    },
    {
      q: "現金で払った仕入れはどこに記帳しますか？",
      a: "使った財布からの出金です。掛け仕入れは、支払うまで財布を減らしません。",
    },
    {
      q: "シフトの締めでは何を合わせますか？",
      a: "レジと各財布を、入金・出金・移動と合わせます。足りなければ伝票を探します。",
    },
    {
      q: "銀行とつながなくても入出金は管理できますか？",
      a: "できます。各動きを一つの財布に紐づけた帳簿があれば足ります。銀行連携は明細合わせに役立ち、伝票の代わりにはなりません。",
    },
    {
      q: "Dolphin POSのデモは何を記録しますか？",
      a: "ブラウザ内の帳簿です。現金・振込・QRは見本の財布に入り、つけは回収まで入らず、移動は売上になりません。実在の銀行とは未接続です。https://nchithanh.github.io/pos/",
    },
    {
      q: "お客の未回収と仕入先への未払いは一つの残高ですか？",
      a: "違います。お客がこちらに借りている分と、こちらが仕入先に借りている分は別の一覧です。",
    },
    {
      q: "店舗POSの続きはどこで読めますか？",
      a: "概要は /news/tai-sao-can-dung-phan-mem-pos/ 。ハブは /pos/ 。年額は /chinh-sach-gia-dolphin-2026/#pos 。",
    },
  ],
};

export const quanLyDongTienCuaHangCopy = { vi, en, ja };
