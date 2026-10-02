import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/tai-sao-can-dung-phan-mem-pos.jpg";
const SHIFT = "/news/tai-sao-can-dung-phan-mem-pos-ca-quy.jpg";
const STOCK = "/news/tai-sao-can-dung-phan-mem-pos-ton-kho.jpg";

const vi: NewsArticleCopy = {
  title: "Tại sao cửa hàng cần dùng phần mềm POS?",
  metaTitle: "Tại sao cửa hàng cần dùng phần mềm POS? | Dolphin",
  metaDescription:
    "Sổ tay, Excel và Zalo bắt đầu gãy khi bán thật: lệch ca, lệch tồn, đơn trùng. Phần mềm POS gom quầy, kho và kênh — khi nào nên đổi và bắt đầu thế nào.",
  excerpt:
    "Khi đơn tăng, sổ tay và Excel không còn theo kịp ca, tồn và kênh bán. Phần mềm POS giúp cửa hàng ghi bán rõ, đối chiếu cuối ngày — và biết khi nào thật sự cần đổi.",
  body: [
    {
      type: "lead",
      text: "Phần mềm POS không phải “mốt công nghệ”. Nó là chỗ ghi bán, thu tiền và (theo gói) theo dõi tồn — để cuối ngày anh chị không phải đoán số từ giấy và tin nhắn. Bài này nói thẳng: sổ tay/Excel/Zalo gãy ở đâu, POS giúp gì, và khi nào cửa hàng nên chuyển.",
    },
    {
      type: "p",
      text: "Giờ đóng cửa. Anh chị đứng quầy, một tay cầm xấp giấy order, một tay mở Zalo hỏi nhân viên “ca chiều thu bao nhiêu?”. Có người nhớ, có người đoán. Hạt cafe hoặc túi hàng trên kệ — không ai chắc còn bao nhiêu.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Cover promo Dolphin: tiêu đề tại sao cần phần mềm POS và bộ thiết bị bán hàng nhìn từ trên",
    },
    {
      type: "p",
      text: "Nếu cảnh này quen, bài viết dành cho anh chị: cafe, trà sữa, pet shop, thời trang, tạp hóa — bất kỳ chỗ nào bán hàng thật, không phải chỉ “nhận lịch dịch vụ”.",
    },
    {
      type: "h2",
      text: "Sổ tay, Excel và Zalo làm tốt đến đâu?",
    },
    {
      type: "p",
      text: "Công bằng mà nói: lúc mới mở, vài đơn mỗi ngày, sổ tay hoặc một file Excel là đủ. Rẻ, quen tay, không cần học thêm.",
    },
    {
      type: "p",
      text: "Zalo thì ai cũng có — nhắn “bán giúp 2 ly sữa đá” nhanh hơn ghi form. Vấn đề không phải công cụ xấu. Vấn đề là khi số đơn, số người và số kênh tăng, những công cụ đó không còn sinh ra để vận hành bán hàng.",
    },
    {
      type: "h2",
      text: "Ba chỗ cửa hàng hay gãy khi chưa có phần mềm POS",
    },
    {
      type: "h3",
      text: "1. Ca và quỹ lệch",
    },
    {
      type: "image",
      src: SHIFT,
      alt: "Giao ca cửa hàng: két tiền và hóa đơn giấy không khớp số",
    },
    {
      type: "p",
      text: "Giao ca miệng hoặc ghi tạm trên giấy dễ lệch vài chục đến vài trăm nghìn — rồi không ai truy được vì thiếu dấu vết. Phần mềm POS (ở các gói có quản lý ca) ghi nhận mở/đóng ca và dòng thu, để đối chiếu dựa trên dữ liệu chứ không dựa trí nhớ.",
    },
    {
      type: "h3",
      text: "2. Tồn và nguyên liệu “hết giữa ca mới biết”",
    },
    {
      type: "image",
      src: STOCK,
      alt: "Kệ nguyên liệu cafe: túi hạt và hộp sữa sắp hết, ghi chú tồn tay",
    },
    {
      type: "p",
      text: "Cafe hết hạt, trà sữa hết topping, pet shop hết túi hạt mèo — khách đang xếp hàng mới phát hiện. Excel nhập xuất tay thường chậm hơn thực tế. POS gắn bán với tồn theo phạm vi gói giúp thấy lệch sớm hơn.",
    },
    {
      type: "h3",
      text: "3. Đa kênh: quầy + chat + online",
    },
    {
      type: "p",
      text: "Một đơn trên Zalo, một đơn tại quầy, một đơn web — dễ bán trùng hoặc quên trừ tồn. Phần mềm POS không giải hết mọi kênh trong một đêm, nhưng nó là chỗ “sổ bán” để sau này gắn web, MXH hay sàn theo đúng gói.",
    },
    {
      type: "h2",
      text: "Phần mềm POS giúp gì khác sổ tay?",
    },
    {
      type: "p",
      text: "Nói ngắn: POS là phần mềm bán hàng tại điểm bán (và thường mở rộng kho/kênh). Khác CRM dịch vụ — CRM theo dõi khách và lịch (spa, salon); POS theo dõi đơn, thu và tồn của cửa hàng bán hàng.",
    },
    {
      type: "p",
      text: "Với Dolphin, hai dòng tách rõ trên site: [Dolphin POS theo ngành](/pos/) và [CRM theo ngành dịch vụ](/industries/). Đừng gộp hai nhu cầu vào một bảng giá.",
    },
    {
      type: "h2",
      text: "Khi nào nên dùng phần mềm POS?",
    },
    {
      type: "p",
      text: "Không phải cửa hàng nào cũng cần đổi ngay. Nên cân nhắc khi xuất hiện một trong các dấu hiệu sau:",
    },
    {
      type: "p",
      text: "• Cuối ngày đối chiếu tiền mất hơn 15–20 phút và hay cãi nhau về số.\n• Có từ hai nhân viên trở lên cùng bán, giao ca hay lệch.\n• Bán kèm tồn quan trọng (hạt, topping, SKU size/màu) mà Excel không theo kịp.\n• Đã bán trên nhiều kênh (quầy + chat + online) và bắt đầu sót đơn.",
    },
    {
      type: "p",
      text: "Nếu vẫn một người, vài đơn/ngày, sổ tay còn sạch — có thể chưa cần vội. Đổi khi đau thật, không đổi vì sợ “lạc hậu”.",
    },
    {
      type: "h2",
      text: "Bắt đầu với Dolphin POS thế nào?",
    },
    {
      type: "p",
      text: "Dolphin công bố [bảng giá POS theo năm](/chinh-sach-gia-dolphin-2026/#pos) — Cơ Bản · Chuyên nghiệp · Toàn Diện — và landing theo ngành (cafe, trà sữa, pet, fashion…). Runtime app POS vẫn theo lộ trình sản phẩm (TODO); hiện dùng để tư vấn và báo giá rõ ràng.",
    },
    {
      type: "p",
      text: "Anh chị chọn ngành gần nhất trên [hub POS](/pos/), xem feature theo gói, rồi nói chuyện qua form báo giá hoặc [Zalo](https://zalo.me/0779937633). Kể loại cửa hàng, số quầy và chỗ đang nghẽn — không cần “biết IT”.",
    },
    {
      type: "h2",
      text: "Kết",
    },
    {
      type: "p",
      text: "Phần mềm POS cần thiết khi bán hàng thật đã vượt sức sổ tay và Excel: ca lệch, tồn mù, kênh rối. Nó không thay website hay CRM dịch vụ — mỗi thứ một việc. Cửa hàng bán hàng: bắt đầu từ POS. Doanh nghiệp lịch/khách: xem CRM.",
    },
    {
      type: "p",
      text: "Muốn xem ngành của mình: [Dolphin POS](/pos/). Cần mặt tiền online trước: [thiết kế website](/services/web/).",
    },
  ],
  faq: [
    {
      q: "Phần mềm POS là gì?",
      a: "Phần mềm hỗ trợ bán tại điểm bán: ghi đơn, thu tiền, và thường kèm tồn/kho theo gói. Khác CRM quản lý khách–lịch của ngành dịch vụ.",
    },
    {
      q: "Cửa hàng nhỏ có cần POS ngay không?",
      a: "Chưa chắc. Ít đơn, một người bán, sổ tay còn rõ thì có thể chờ. Nên cân nhắc khi lệch ca, lệch tồn hoặc đa kênh bắt đầu rối.",
    },
    {
      q: "POS khác CRM spa/salon thế nào?",
      a: "POS cho cửa hàng bán hàng. CRM spa/salon cho lịch và khách dịch vụ. Trên Dolphin: /pos/ vs /industries/.",
    },
    {
      q: "Giá Dolphin POS khoảng bao nhiêu?",
      a: "Ba gói năm đã công bố: 1.920.000đ · 2.520.000đ · 8.400.000đ — xem /chinh-sach-gia-dolphin-2026/#pos. Không dùng thử miễn phí.",
    },
    {
      q: "Có bắt buộc mua máy POS không?",
      a: "Không bắt buộc máy chuyên dụng. Hướng web/app trên thiết bị thường; in bill tuỳ quán.",
    },
    {
      q: "App POS Dolphin đã chạy chưa?",
      a: "Landing và bảng giá đã có để báo giá. Runtime app: TODO theo lộ trình sản phẩm.",
    },
    {
      q: "Cafe / pet / fashion dùng chung một POS?",
      a: "Cùng dòng sản phẩm và bảng giá năm; landing và copy nghiệp vụ theo ngành trên /pos/.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Why does a store need POS software?",
  metaTitle: "Why stores need POS software | Dolphin Software",
  metaDescription:
    "Paper, Excel, and chat break when sales get real: shift cash mismatches, stock gaps, duplicate orders. When to move to POS — without invented KPIs.",
  excerpt:
    "When orders grow, notebooks and Excel stop keeping up with shifts, stock, and channels. POS software makes daily sales clearer — and helps you know when to switch.",
  body: [
    {
      type: "lead",
      text: "POS software is not a tech fad. It is where you record sales, take payment, and (by plan) track stock — so end-of-day numbers are not a guess from paper and chat. Here is where notebooks break, what POS changes, and when to switch.",
    },
    {
      type: "p",
      text: "Closing time. One hand holds paper slips; the other opens chat: “How much did the afternoon shift take?” Someone remembers. Someone guesses. Nobody is sure what is left on the shelf.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Dolphin promo cover: why stores need POS title with top-down tablet POS and cash drawer kit",
    },
    {
      type: "p",
      text: "If that feels familiar — cafe, bubble tea, pet shop, fashion, grocery — this piece is for retail sellers, not appointment-only service businesses.",
    },
    {
      type: "h2",
      text: "How far can notebooks, Excel, and chat go?",
    },
    {
      type: "p",
      text: "Early on, a few orders a day, a notebook or spreadsheet is fine. Cheap, familiar, no training.",
    },
    {
      type: "p",
      text: "Chat is fast for “sell two iced milks.” The problem is scale: more people, more SKUs, more channels — tools that were never built to run a store.",
    },
    {
      type: "h2",
      text: "Three places stores break without POS",
    },
    {
      type: "h3",
      text: "1. Shift cash mismatches",
    },
    {
      type: "image",
      src: SHIFT,
      alt: "Shift handover with cash drawer and mismatched paper receipts",
    },
    {
      type: "p",
      text: "Verbal handovers leave gaps you cannot audit. POS with shift features records open/close and takings so you reconcile data, not memory.",
    },
    {
      type: "h3",
      text: "2. Stock that runs out mid-rush",
    },
    {
      type: "image",
      src: STOCK,
      alt: "Cafe stock shelf with coffee bags and milk nearly empty",
    },
    {
      type: "p",
      text: "Beans, toppings, pet food bags — customers are waiting when you notice. POS that ties sales to stock (by plan) surfaces gaps sooner than slow Excel.",
    },
    {
      type: "h3",
      text: "3. Multi-channel chaos",
    },
    {
      type: "p",
      text: "Counter + chat + web means duplicate sells or forgotten stock. POS becomes the sales ledger you can grow into web and marketplaces later.",
    },
    {
      type: "h2",
      text: "What POS does that a notebook cannot",
    },
    {
      type: "p",
      text: "Short version: POS is point-of-sale software — orders, payment, often inventory. It is not service CRM (spa calendars and clients). On Dolphin: [POS by industry](/pos/) vs [service industries](/industries/).",
    },
    {
      type: "h2",
      text: "When should you adopt POS?",
    },
    {
      type: "p",
      text: "Not every shop needs it tomorrow. Consider it when end-of-day cash takes forever, two+ staff sell together, stock matters and Excel lags, or multi-channel orders start colliding.",
    },
    {
      type: "h2",
      text: "Starting with Dolphin POS",
    },
    {
      type: "p",
      text: "See the [yearly POS pricing](/chinh-sach-gia-dolphin-2026/#pos) and industry pages on [the POS hub](/pos/). App runtime is still TODO — landings support clear quotes. Talk via quote form or [Zalo](https://zalo.me/0779937633).",
    },
    {
      type: "h2",
      text: "Bottom line",
    },
    {
      type: "p",
      text: "You need POS when real selling outgrows paper: messy shifts, blind stock, tangled channels. It does not replace a website or service CRM. Retail → POS. Appointments → CRM. Explore [Dolphin POS](/pos/) or [website services](/services/web/).",
    },
  ],
  faq: [
    {
      q: "What is POS software?",
      a: "Software for selling at the point of sale: orders, payment, and often stock by plan — not the same as service CRM.",
    },
    {
      q: "Do tiny shops need POS now?",
      a: "Not always. Few orders and one seller can wait. Move when shifts, stock, or channels hurt.",
    },
    {
      q: "Dolphin POS prices?",
      a: "Three yearly packs published at /chinh-sach-gia-dolphin-2026/#pos — no free trial.",
    },
    {
      q: "Is specialized POS hardware required?",
      a: "No. Web/app on common devices; receipt printers optional.",
    },
    {
      q: "Is the Dolphin POS app live?",
      a: "Pricing and landings are live for quotes. App runtime: TODO.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title: "店舗にPOSソフトが必要な理由",
  metaTitle: "なぜ店舗にPOSソフトが必要か | Dolphin Software",
  metaDescription:
    "ノート・Excel・チャットは売上増で破綻する。レジずれ、在庫切れ、チャネル重複。POSへ移るタイミングを事実ベースで整理。",
  excerpt:
    "注文が増えるとノートやExcelはシフト・在庫・チャネルに追いつかない。POSは日々の販売を見える化し、移行の判断を助ける。",
  body: [
    {
      type: "lead",
      text: "POSソフトは流行りではありません。販売・会計・（プランにより）在庫を記録する場所です。ノートが壊れる点、POSが変える点、移行のタイミングを整理します。",
    },
    {
      type: "p",
      text: "閉店時。伝票を片手にチャットで「午後の売上は？」と聞く。覚えている人と推測する人が分かれ、棚の残量も曖昧。",
    },
    {
      type: "image",
      src: COVER,
      alt: "Dolphinのプロモカバー。POSソフトの必要性タイトルと俯瞰のPOS機器セット",
    },
    {
      type: "h2",
      text: "ノートやExcelが通用する範囲",
    },
    {
      type: "p",
      text: "開店直後、一日数件なら十分。安い・慣れている。問題は規模が上がったときです。",
    },
    {
      type: "h2",
      text: "POSがないと壊れやすい三点",
    },
    {
      type: "h3",
      text: "1. シフトとレジずれ",
    },
    {
      type: "image",
      src: SHIFT,
      alt: "交代時のレジと紙のレシートが合わない場面",
    },
    {
      type: "p",
      text: "口頭の引き継ぎは追跡できない。シフト機能付きPOSなら開閉と売上の記録で照合できる。",
    },
    {
      type: "h3",
      text: "2. ピーク中の在庫切れ",
    },
    {
      type: "image",
      src: STOCK,
      alt: "カフェの原材料棚。豆と牛乳が残り少ない",
    },
    {
      type: "p",
      text: "豆・トッピング・ペットフードなど。販売と在庫を結ぶPOS（プラン範囲）はExcelより早くズレに気づける。",
    },
    {
      type: "h3",
      text: "3. 多チャネルの混乱",
    },
    {
      type: "p",
      text: "店頭＋チャット＋Webで重複販売や在庫忘れが起きる。POSは後からチャネルを足す台帳になる。",
    },
    {
      type: "h2",
      text: "POSとサービス業CRMは別",
    },
    {
      type: "p",
      text: "POSは物販の販売。スパ等の予約CRMとは別。Dolphinでは [POS](/pos/) と [業種CRM](/industries/) を分けています。",
    },
    {
      type: "h2",
      text: "いつ導入するか",
    },
    {
      type: "p",
      text: "毎日の照合が長い、複数スタッフでレジずれ、在庫が重要でExcelが遅い、多チャネルで注文が衝突し始めたとき。",
    },
    {
      type: "h2",
      text: "Dolphin POSの始め方",
    },
    {
      type: "p",
      text: "[年額料金](/chinh-sach-gia-dolphin-2026/#pos) と [POSハブ](/pos/) を確認。アプ実行はTODO。見積はフォームか [Zalo](https://zalo.me/0779937633)。",
    },
    {
      type: "p",
      text: "物販はPOS、予約業はCRM。サイトが先なら [Web制作](/services/web/)。",
    },
  ],
  faq: [
    {
      q: "POSソフトとは？",
      a: "店頭販売の記録・会計、プランにより在庫。サービス業CRMとは別です。",
    },
    {
      q: "小さい店でも今すぐ必要？",
      a: "必ずしも。件数が少なく一人なら待てます。ずれが出てからでよい。",
    },
    {
      q: "専用端末は必須？",
      a: "必須ではありません。一般的な端末のWeb/アプリ想定。",
    },
    {
      q: "アプリは稼働済み？",
      a: "料金とLPは公開済み。ランタイムはTODO。",
    },
  ],
};

export const taiSaoCanDungPhanMemPosCopy = { vi, en, ja };
