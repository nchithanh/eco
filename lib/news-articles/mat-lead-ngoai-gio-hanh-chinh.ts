import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/mat-lead-ngoai-gio-cover.jpg";
const CHANNELS = "/news/mat-lead-ngoai-gio-ba-kenh.jpg";
const MORNING = "/news/mat-lead-ngoai-gio-sang-hom-sau.jpg";

const vi: NewsArticleCopy = {
  title: "Mất lead ngoài giờ hành chính: khi không ai trả lời khách",
  metaTitle: "Mất lead ngoài giờ hành chính — không ai trả lời khách",
  metaDescription:
    "Khách nhắn Zalo, Messenger hay form website ngoài giờ — sáng hôm sau đã đi chỗ khác. Vì sao mất lead ngoài giờ hành chính, và làm gì trước khi nghĩ tới AI hỗ trợ khách trên website.",
  excerpt:
    "Tin nhắn 22h. Form lúc 1h sáng. Sáng ra hộp thư đầy — nhưng khách đã chốt chỗ khác. Bài này nói về mất lead ngoài giờ hành chính khi không ai trả lời, và những bước thực tế trước khi nghĩ tới chatbot.",
  body: [
    {
      type: "lead",
      text: "Mất lead ngoài giờ hành chính thường xảy ra khi khách nhắn Zalo, Messenger hoặc gửi form website lúc shop đã đóng — mà không ai trả lời. Sáng hôm sau anh chị mở máy thì thấy tin nhắn, nhưng người đó đã đặt lịch hoặc hỏi giá chỗ khác.",
    },
    {
      type: "p",
      text: "Hình quen thuộc: tiệm spa, phòng khám, trung tâm dạy học, shop — tắt đèn lúc 18h–19h. Điện thoại vẫn nằm trên bàn. Zalo vẫn sáng. Quảng cáo Facebook vẫn chạy.",
    },
    {
      type: "p",
      text: "Khách thì không chờ theo giờ hành chính. Họ xem ads lúc 21h, so sánh giá lúc nửa đêm, nhắn “còn chỗ không anh chị?” rồi… đợi.",
    },
    {
      type: "p",
      text: "Không ai trả lời trong vài giờ. Họ mở tab khác. Đối thủ trả lời nhanh hơn. Lead biến mất — không ồn ào, không báo lỗi. Chỉ là một cuộc hội thoại không bao giờ bắt đầu.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Chủ shop ngồi bàn tối muộn, điện thoại hiện tin nhắn Zalo chưa đọc lúc 22 giờ, cửa tiệm đã tắt đèn",
    },
    {
      type: "h2",
      text: "Vì sao ngoài giờ lại “đắt” lead hơn ban ngày",
    },
    {
      type: "p",
      text: "Ban ngày anh chị còn kịp nhấc máy. Ngoài giờ, tốc độ phản hồi gần như bằng không — trừ khi có người trực hoặc một lớp hỗ trợ sẵn.",
    },
    {
      type: "p",
      text: "Khách ngoài giờ thường đang ở chế độ quyết định: vừa xem ads, vừa so 2–3 chỗ, vừa hỏi “còn lịch không”. Câu trả lời đầu tiên thường thắng — không phải chỗ đẹp nhất, mà chỗ trả lời trước.",
    },
    {
      type: "p",
      text: "Thêm nữa: quảng cáo không tắt theo giờ shop. Ngân sách vẫn đốt về đêm. Traffic về. Form gửi. Inbox đầy. Nhưng không có quy trình đón — thì tiền ads đang mua tin nhắn… rồi bỏ đó.",
    },
    {
      type: "h2",
      text: "Ba chỗ hay sót lead ngoài giờ",
    },
    {
      type: "image",
      src: CHANNELS,
      alt: "Ba kênh hay sót lead ngoài giờ: Zalo chưa đọc, Messenger inbox, form website không ai trả lời",
    },
    {
      type: "h3",
      text: "Zalo — kênh gần nhất, cũng dễ im nhất",
    },
    {
      type: "p",
      text: "Nhiều SMB Việt Nam sống trên Zalo. Khách quen nhắn “alo còn mở không”, gửi ảnh, hỏi giá. Ngoài giờ, tin nằm trong chat cá nhân của chủ hoặc nhân viên đã tắt máy.",
    },
    {
      type: "p",
      text: "Sáng ra thấy 4–5 tin. Trả lời lần lượt. Một nửa đã “cảm ơn anh chị, em đặt chỗ khác rồi.”",
    },
    {
      type: "h3",
      text: "Messenger — ads đổ về, người thì offline",
    },
    {
      type: "p",
      text: "Chạy ads Messenger rất tiện: khách click là chat luôn. Nhưng nếu không có người trực hoặc auto-reply có ích, tin nhắn chỉ xếp hàng. Fanpage “đang hoạt động” trên giấy — thực tế im từ 19h.",
    },
    {
      type: "h3",
      text: "Form website — khách đã chủ động, site vẫn im",
    },
    {
      type: "p",
      text: "Đây là chỗ đau nhất. Người đã vào site, đọc dịch vụ, điền tên và số điện thoại — tức là họ sẵn sàng nói chuyện. Form gửi về email lúc 1h sáng. Không ai gọi lại đến 9h sáng. Nhiều lead nguội ngay trong khoảng đó.",
    },
    {
      type: "p",
      text: "Nếu site có traffic mà vẫn không ra khách, bài [Website có traffic nhưng không ra khách hàng](/news/website-co-traffic-khong-ra-khach-hang/) điểm thêm các lỗi khác — trong đó có chuyện site im ngoài giờ.",
    },
    {
      type: "h2",
      text: "Làm gì trước khi nghĩ tới chatbot",
    },
    {
      type: "p",
      text: "Không phải ai cũng cần AI ngay. Có vài bước rẻ và rõ trước.",
    },
    {
      type: "p",
      text: "Một: ghi rõ giờ làm việc trên Zalo, fanpage và website. Khách biết khi nào có người thật — đỡ ảo tưởng “sẽ được trả lời trong 5 phút”.",
    },
    {
      type: "p",
      text: "Hai: có một số hotline hoặc Zalo OA chỉ dùng cho khách — không trộn với chat bạn bè. Ai trực thì mở kênh đó.",
    },
    {
      type: "p",
      text: "Ba: quy ước SLA nội bộ. Ví dụ: tin nhắn ngoài giờ được xem chậm nhất 8h sáng hôm sau; ưu tiên tin hỏi giá / đặt lịch trước. Viết ra, không chỉ “cố gắng”.",
    },
    {
      type: "p",
      text: "Bốn: nếu đang chạy ads đêm, cân nhắc giảm ngân sách khung giờ shop đóng — hoặc chỉ giữ kênh nào anh chị thật sự đón được lead.",
    },
    {
      type: "image",
      src: MORNING,
      alt: "Sáng hôm sau chủ tiệm mở điện thoại thấy tin nhắn đêm qua chưa trả lời, lịch đã đầy chỗ khách khác",
    },
    {
      type: "h2",
      text: "Khi nào cần AI hỗ trợ khách trên website",
    },
    {
      type: "p",
      text: "Khi anh chị đã có website rõ, có lead về đều, và vẫn mất tin ngoài giờ — lúc đó lớp chăm sóc trên site mới đáng bàn.",
    },
    {
      type: "p",
      text: "AI hỗ trợ khách trên website không thay cả đội sales. Nó làm được việc thực tế: trả lời câu hỏi lặp (giá, địa chỉ, giờ mở, dịch vụ có gì), ghi nhận lead, dẫn khách để lại số hoặc đặt lịch trong phạm vi kiến thức anh chị nạp vào.",
    },
    {
      type: "p",
      text: "Ở Dolphin, lớp đó là [Dolphin Care](/dolphin-care/) — chatbot AI trên website (có thể gắn thêm Zalo / Messenger khi phù hợp). Không phải chatbot kịch bản cứng. Và không phải thứ mở đầu mọi cuộc tư vấn “làm website”.",
    },
    {
      type: "p",
      text: "Nếu site còn chưa rõ CTA, form rối, hoặc chưa có chỗ để khách biết anh chị là ai — hãy sửa [website](/services/web/) trước. Care gắn lên nền tảng đã rõ sẽ hữu ích hơn Care gắn lên trang im lặng.",
    },
    {
      type: "h2",
      text: "Một checklist ngắn cho tuần này",
    },
    {
      type: "p",
      text: "Đếm tin nhắn / form ngoài 18h–8h trong 7 ngày gần nhất. Bao nhiêu được trả lời trong vòng 1 giờ? Bao nhiêu khách nói đã chọn chỗ khác?",
    },
    {
      type: "p",
      text: "Xem ads có đang đẩy về Messenger / form vào khung giờ không ai trực không.",
    },
    {
      type: "p",
      text: "Nếu số lead ngoài giờ đáng kể mà vẫn im — đó không còn là “chuyện nhỏ”. Đó là lỗ trên đường ống bán hàng.",
    },
    {
      type: "p",
      text: "Muốn kể nhanh chỗ đang nghẽn — website im, Zalo trôi, hay cần Care ngoài giờ — nhắn [Zalo Dolphin](https://zalo.me/0779937633) hoặc xem [Dolphin Care](/dolphin-care/).",
    },
  ],
  faq: [
    {
      q: "Mất lead ngoài giờ hành chính là gì?",
      a: "Là khi khách nhắn hoặc gửi form ngoài giờ làm việc mà không ai trả lời kịp — sáng hôm sau họ đã chọn đối thủ hoặc bỏ cuộc. Thường gặp trên Zalo, Messenger và form website.",
    },
    {
      q: "Có nhất thiết phải dùng chatbot không?",
      a: "Không. Nhiều shop chỉ cần giờ làm việc rõ, kênh liên hệ riêng, và SLA trả lời sáng hôm sau. Chatbot / AI hỗ trợ khách trên website hữu ích khi lead ngoài giờ nhiều và đội ngũ không trực được.",
    },
    {
      q: "Dolphin Care giúp gì với lead ngoài giờ?",
      a: "Dolphin Care là AI chăm sóc khách trên website — trả lời trong phạm vi kiến thức, ghi lead, hỗ trợ ngoài giờ. Không thay cả đội sales. Xem /dolphin-care/.",
    },
    {
      q: "Website chưa có thì nên làm gì trước?",
      a: "Nên có website hoặc landing rõ thông tin + CTA trước, rồi mới gắn Care. Xem /services/web/ hoặc nhận báo giá qua Zalo.",
    },
    {
      q: "Ads chạy đêm có nên tắt hết không?",
      a: "Không bắt buộc tắt. Nhưng nếu không đón được lead ngoài giờ, nên giảm ngân sách khung đó hoặc chỉ giữ kênh có người / hệ thống trả lời được.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Losing leads after hours: when nobody answers customers",
  metaTitle: "Losing leads after hours — nobody answers",
  metaDescription:
    "Customers message on Zalo, Messenger, or a website form after hours — by morning they booked elsewhere. Why after-hours leads go cold, and what to do before AI on your website.",
  excerpt:
    "A 10pm message. A 1am form. In the morning the inbox is full — but the customer already chose someone else. How after-hours silence loses leads, and what to fix before a chatbot.",
  body: [
    {
      type: "lead",
      text: "After-hours lead loss happens when customers message on Zalo, Messenger, or a website form after the shop closes — and nobody replies. By morning you see the thread, but they already booked or priced elsewhere.",
    },
    {
      type: "p",
      text: "Familiar scene: spa, clinic, tutoring center, shop — lights off by 6–7pm. The phone stays on the desk. Zalo stays on. Facebook ads keep spending.",
    },
    {
      type: "p",
      text: "Customers do not wait for business hours. They see an ad at 9pm, compare prices at midnight, ask “any slots left?” — then wait.",
    },
    {
      type: "p",
      text: "No reply for a few hours. They open another tab. A competitor answers first. The lead disappears quietly — no error alert, just a conversation that never started.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Shop owner at a late-night desk, phone showing unread Zalo messages at 10pm, store lights already off",
    },
    {
      type: "h2",
      text: "Why after hours costs more than daytime",
    },
    {
      type: "p",
      text: "In the day you can still pick up. After hours, response speed drops to near zero — unless someone is on duty or you have a support layer ready.",
    },
    {
      type: "p",
      text: "After-hours buyers are often in decision mode: comparing two or three places, asking about price and availability. The first clear reply often wins — not the prettiest shop, the fastest one.",
    },
    {
      type: "p",
      text: "Ads do not clock out with you. Budget still burns at night. Traffic arrives. Forms submit. Inboxes fill. Without a intake process, ad spend buys messages that sit cold.",
    },
    {
      type: "h2",
      text: "Three places after-hours leads leak",
    },
    {
      type: "image",
      src: CHANNELS,
      alt: "Three after-hours leak channels: unread Zalo, Messenger inbox, website form with no reply",
    },
    {
      type: "h3",
      text: "Zalo — closest channel, easiest to go silent",
    },
    {
      type: "p",
      text: "Many Vietnamese SMBs live on Zalo. Guests message casually, send photos, ask prices. After hours those chats sit on a personal phone that is already off.",
    },
    {
      type: "p",
      text: "Morning: four or five threads. Reply one by one. Half say they already booked elsewhere.",
    },
    {
      type: "h3",
      text: "Messenger — ads land, people are offline",
    },
    {
      type: "p",
      text: "Messenger ads feel convenient: click, chat. Without staffing or a useful auto-reply, messages only queue. The Page looks “active” — in practice silent after 7pm.",
    },
    {
      type: "h3",
      text: "Website forms — they already raised a hand",
    },
    {
      type: "p",
      text: "This hurts most. Someone read the site, filled name and phone — they want a conversation. The form hits email at 1am. Nobody calls until 9am. Many leads cool in that gap.",
    },
    {
      type: "p",
      text: "If you have traffic but few customers, see [Website traffic without customers](/news/website-co-traffic-khong-ra-khach-hang/) — including after-hours silence.",
    },
    {
      type: "h2",
      text: "What to do before a chatbot",
    },
    {
      type: "p",
      text: "Not everyone needs AI first. Start with cheap, clear steps.",
    },
    {
      type: "p",
      text: "One: publish hours on Zalo, the Page, and the website. Customers know when a human is available.",
    },
    {
      type: "p",
      text: "Two: a dedicated hotline or Zalo OA for customers — not mixed with personal chats.",
    },
    {
      type: "p",
      text: "Three: an internal SLA. Example: after-hours messages reviewed by 8am next day; price and booking threads first. Write it down.",
    },
    {
      type: "p",
      text: "Four: if ads run at night, cut spend in closed hours — or keep only channels you can actually answer.",
    },
    {
      type: "image",
      src: MORNING,
      alt: "Morning: owner opens the phone to unread night messages while the calendar is already full elsewhere",
    },
    {
      type: "h2",
      text: "When AI support on the website makes sense",
    },
    {
      type: "p",
      text: "When the site is clear, leads arrive regularly, and you still lose after-hours threads — then on-site care is worth discussing.",
    },
    {
      type: "p",
      text: "AI on the website does not replace sales. It handles repeat questions (price, address, hours, services), captures leads, and guides booking within the knowledge you provide.",
    },
    {
      type: "p",
      text: "At Dolphin that layer is [Dolphin Care](/dolphin-care/) — an AI chatbot on the website (Zalo / Messenger when it fits). Not a rigid script bot. And not the cold opener for every “build a website” talk.",
    },
    {
      type: "p",
      text: "If CTAs are unclear or the form is messy, fix the [website](/services/web/) first. Care on a clear foundation beats Care on a silent page.",
    },
    {
      type: "h2",
      text: "A short checklist for this week",
    },
    {
      type: "p",
      text: "Count messages and forms between 6pm–8am over the last 7 days. How many got a reply within an hour? How many said they chose someone else?",
    },
    {
      type: "p",
      text: "Check whether ads push to Messenger or forms during hours with no coverage.",
    },
    {
      type: "p",
      text: "If after-hours volume matters and the inbox stays quiet — that is a hole in the sales pipe, not a small annoyance.",
    },
    {
      type: "p",
      text: "Tell us where it sticks — silent site, drifting Zalo, or after-hours Care — on [Zalo](https://zalo.me/0779937633) or see [Dolphin Care](/dolphin-care/).",
    },
  ],
  faq: [
    {
      q: "What does losing leads after hours mean?",
      a: "Customers message or submit a form outside business hours and nobody replies in time — by morning they booked a competitor or gave up. Common on Zalo, Messenger, and website forms.",
    },
    {
      q: "Do I need a chatbot?",
      a: "Not always. Clear hours, a dedicated channel, and a morning SLA may be enough. AI on the website helps when after-hours volume is high and nobody can staff it.",
    },
    {
      q: "How does Dolphin Care help?",
      a: "Dolphin Care is AI customer care on the website — answers within your knowledge, captures leads, supports after hours. It does not replace your whole sales team. See /dolphin-care/.",
    },
    {
      q: "No website yet — what first?",
      a: "Get a clear website or landing with CTA first, then add Care. See /services/web/ or quote via Zalo.",
    },
    {
      q: "Should night ads be turned off?",
      a: "Not always. If you cannot catch after-hours leads, cut that budget window or keep only answerable channels.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title: "営業時間外のリード損失：誰も客に返信しないとき",
  metaTitle: "営業時間外のリード損失 — 返信がないと消える",
  metaDescription:
    "Zalo・Messenger・サイトのフォームに営業時間外で届く問い合わせ。翌朝には他店へ。なぜ消えるのか、サイト上のAIサポートを考える前に何をするか。",
  excerpt:
    "22時のメッセージ。深夜1時のフォーム。朝、受信箱は満杯でも客は他を選んでいる。営業時間外の無応答でリードが消える話と、チャットボット前に直すこと。",
  body: [
    {
      type: "lead",
      text: "営業時間外のリード損失は、店が閉まったあとにZalo・Messenger・サイトフォームへ届く問い合わせに、誰も返信しないときに起きます。翌朝スレッドを見ても、すでに他店で予約や見積もりが進んでいることが多いです。",
    },
    {
      type: "p",
      text: "よくある景色：スパ、クリニック、塾、店舗 — 18〜19時に消灯。スマホは机の上。Zaloはオンのまま。Facebook広告も止まらない。",
    },
    {
      type: "p",
      text: "客は営業時間を待ちません。21時に広告を見て、真夜中に比較し、「空きはありますか？」と送って待つ。",
    },
    {
      type: "p",
      text: "数時間返信なし。別タブを開く。競合が先に返す。リードは静かに消える — エラー通知もなく、始まらなかった会話だけが残る。",
    },
    {
      type: "image",
      src: COVER,
      alt: "夜のデスクで店主がスマホを見る。22時の未読Zalo、店の照明は消えている",
    },
    {
      type: "h2",
      text: "なぜ営業時間外のほうが高くつくのか",
    },
    {
      type: "p",
      text: "昼間はまだ電話を取れます。夜は、当番か支援の仕組みがなければ応答速度はほぼゼロです。",
    },
    {
      type: "p",
      text: "時間外の客は決断モードであることが多い。2〜3店を比較し、価格と空きを聞く。最初の明確な返信が勝ちやすい — 一番きれいな店ではなく、一番早い店です。",
    },
    {
      type: "p",
      text: "広告は閉店と同時に止まりません。夜間も予算が燃える。流入はある。フォームは届く。受信は埋まる。受け皿がなければ、広告費は冷えたメッセージを買っているだけです。",
    },
    {
      type: "h2",
      text: "時間外で漏れやすい3つの場所",
    },
    {
      type: "image",
      src: CHANNELS,
      alt: "時間外に漏れやすい3チャネル：未読Zalo、Messenger受信箱、返信のないサイトフォーム",
    },
    {
      type: "h3",
      text: "Zalo — いちばん近いが、いちばん黙りやすい",
    },
    {
      type: "p",
      text: "ベトナムのSMBの多くはZaloで生きています。気軽な質問、写真、見積もり。時間外はすでに電源オフの個人端末に残ります。",
    },
    {
      type: "p",
      text: "朝、4〜5件。順に返す。半分は「他で予約しました」になる。",
    },
    {
      type: "h3",
      text: "Messenger — 広告は着地、人はオフライン",
    },
    {
      type: "p",
      text: "Messenger広告は便利：クリック即チャット。当番や有用な自動返信がなければ、メッセージは並ぶだけ。ページは「稼働中」に見えて、19時以降は実質沈黙です。",
    },
    {
      type: "h3",
      text: "サイトフォーム — 客はすでに手を挙げている",
    },
    {
      type: "p",
      text: "ここがいちばん痛い。サービスを読み、名前と電話を入れた人は話したい人です。フォームは深夜1時にメールへ。9時まで誰もかけない。その隙間で冷えます。",
    },
    {
      type: "p",
      text: "流入はあるのに客が少ない場合は、[トラフィックがあるのに客が出ないサイト](/news/website-co-traffic-khong-ra-khach-hang/)も参照 — 時間外の沈黙を含む。",
    },
    {
      type: "h2",
      text: "チャットボットの前にやること",
    },
    {
      type: "p",
      text: "最初からAIが必要とは限りません。安くて明確な一歩から。",
    },
    {
      type: "p",
      text: "1. Zalo・ページ・サイトに営業時間を明記する。",
    },
    {
      type: "p",
      text: "2. 客専用のホットラインやZalo OAを分ける。",
    },
    {
      type: "p",
      text: "3. 社内SLAを書く。例：時間外は翌朝8時までに確認、価格・予約を優先。",
    },
    {
      type: "p",
      text: "4. 夜間広告なら、閉店枠の予算を落とすか、本当に答えられるチャネルだけ残す。",
    },
    {
      type: "image",
      src: MORNING,
      alt: "翌朝、未読の夜メッセージを開く店主。カレンダーはすでに他で埋まっている",
    },
    {
      type: "h2",
      text: "サイト上のAIサポートが合うとき",
    },
    {
      type: "p",
      text: "サイトは明確で、リードは定常的に来るのに、時間外スレッドが消える — そのときオンサイトのCareを検討する価値があります。",
    },
    {
      type: "p",
      text: "サイト上のAIは営業チームの代替ではありません。繰り返しの質問（価格、住所、時間、サービス）に答え、リードを残し、知識の範囲で予約へ導きます。",
    },
    {
      type: "p",
      text: "Dolphinではそれが [Dolphin Care](/dolphin-care/) — サイト上のAIチャットボット（必要ならZalo / Messengerも）。硬いスクリプトボットではなく、「まずWebを」の会話の冒頭でもありません。",
    },
    {
      type: "p",
      text: "CTAが曖昧なら先に[ウェブサイト](/services/web/)を直す。静かなページにCareを載せるより、土台がはっきりしてからのほうが効きます。",
    },
    {
      type: "h2",
      text: "今週の短いチェック",
    },
    {
      type: "p",
      text: "直近7日の18時〜翌朝8時のメッセージ／フォームを数える。1時間以内に返した件数は？ 他店を選んだ、と言った件数は？",
    },
    {
      type: "p",
      text: "広告が当番のいない時間にMessengerやフォームへ流していないか確認する。",
    },
    {
      type: "p",
      text: "時間外の量が無視できず受信が静かなままなら — それは小さな不便ではなく、販売のパイプの穴です。",
    },
    {
      type: "p",
      text: "詰まりを話すなら [Zalo](https://zalo.me/0779937633) か [Dolphin Care](/dolphin-care/) へ。",
    },
  ],
  faq: [
    {
      q: "営業時間外のリード損失とは？",
      a: "営業時間外のメッセージやフォームにすぐ返信できず、翌朝までに競合へ流れる／諦めること。Zalo、Messenger、サイトフォームでよく起きます。",
    },
    {
      q: "チャットボットは必須ですか？",
      a: "いいえ。営業時間の明示、専用チャネル、翌朝SLAだけで足りる場合もあります。時間外が多く当番が難しいときにサイト上のAIが役立ちます。",
    },
    {
      q: "Dolphin Careは何をしますか？",
      a: "サイト上のAI顧客ケア — 知識の範囲で回答、リード記録、時間外サポート。営業チーム全体の代替ではありません。/dolphin-care/ を参照。",
    },
    {
      q: "サイトがまだない場合は？",
      a: "先に明確なWeb/ランディングとCTAを用意し、その後Careを。/services/web/ またはZaloで見積もり。",
    },
    {
      q: "夜間広告は全部止めるべき？",
      a: "必須ではありません。時間外リードを取れないなら、その時間帯の予算を落とすか、答えられるチャネルだけ残します。",
    },
  ],
};

export const matLeadNgoaiGioHanhChinhCopy = { vi, en, ja };
