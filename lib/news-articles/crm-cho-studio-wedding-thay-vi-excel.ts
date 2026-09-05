import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/crm-cho-studio-wedding-thay-vi-excel.jpg";
const CONFLICT = "/news/crm-studio-wedding-trung-lich.jpg";
const PIPELINE = "/news/crm-studio-wedding-pipeline.jpg";

const vi: NewsArticleCopy = {
  title: "Tại sao studio wedding cần CRM thay vì Excel?",
  metaTitle: "CRM cho studio wedding: vì sao nên bỏ Excel?",
  metaDescription:
    "Excel không nhắc lịch, không thấy pipeline, dễ trùng booking. Đây là lý do studio wedding nên dùng CRM thay Excel — và cách chuyển đổi dễ dàng.",
  excerpt:
    "Excel ổn khi studio còn ít khách, nhưng vỡ trận khi lượng khách tăng. CRM gom hồ sơ, nhắc lịch và cho thấy khách nào đang chờ — để không sót booking vì một dòng Excel.",
  body: [
    {
      type: "lead",
      text: "Excel dùng ổn khi studio còn ít khách, nhưng bắt đầu vỡ trận khi lượng khách tăng. Một CRM cho studio wedding gom thông tin khách về một chỗ, tự nhắc lịch và cho thấy rõ khách nào đang chờ xử lý — giúp không bỏ lỡ booking hay để khách trôi chỉ vì một dòng Excel bị sót.",
    },
    {
      type: "p",
      text: "Bạn có bao giờ rơi vào cảnh này chưa: hai cặp đôi cùng đặt lịch chụp một ngày, mà đến khi cả hai gọi xác nhận bạn mới tá hỏa? Hoặc một khách hỏi giá tuần trước, bạn định gọi lại nhưng file Excel dài quá, cuộn qua cuộn lại rồi… quên luôn. Đến khi nhớ ra thì họ đã đặt studio khác.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Bàn làm việc studio cưới với laptop mở Excel booking và sổ ghi chú rải rác",
    },
    {
      type: "p",
      text: "Với chủ studio wedding, những tình huống này không hiếm. Gốc rễ thường nằm ở chỗ: mọi thứ đang được quản lý bằng Excel. Bài này nói thẳng ba điều — Excel giỏi ở đâu, nó gãy ở đâu khi studio lớn lên, và CRM thật sự giúp gì cho công việc hằng ngày.",
    },
    {
      type: "h2",
      text: "Excel thật ra làm tốt ở điểm nào?",
    },
    {
      type: "p",
      text: "Trước khi chê, hãy công bằng với Excel. Nó miễn phí, ai cũng biết dùng, và linh hoạt. Muốn thêm cột nào, ghi chú gì cũng được, không cần học phức tạp.",
    },
    {
      type: "p",
      text: "Với studio mới mở, một mình xử lý vài khách mỗi tháng, một file Excel gọn là quá đủ. Tên khách, ngày chụp, tiền cọc, ngày trả ảnh — vài cột là sạch và dễ kiểm soát.",
    },
    {
      type: "p",
      text: "Vấn đề không nằm ở Excel. Vấn đề là chuyện gì xảy ra khi studio đông khách hơn — và điều đó thường đến nhanh hơn bạn tưởng.",
    },
    {
      type: "h2",
      text: "Excel bắt đầu vỡ trận ở đâu?",
    },
    {
      type: "p",
      text: "Khi lượng khách tăng, số nhân sự tăng, và mỗi cặp đôi kéo theo cả chuỗi công việc, Excel bắt đầu lộ điểm yếu.",
    },
    {
      type: "h3",
      text: "Dữ liệu nằm rải rác khắp các file",
    },
    {
      type: "p",
      text: "Một studio điển hình thường có: file khách tiềm năng, file booking đã chốt, file thu chi, và vài ghi chú riêng. Sau vài tháng, không file nào phản ánh đúng toàn bộ bức tranh.",
    },
    {
      type: "p",
      text: "Khách hỏi “ngày chụp của em là bao giờ, còn nợ bao nhiêu?” — bạn mở hai, ba file mới trả lời chắc. Càng nhiều file, càng dễ sai.",
    },
    {
      type: "image",
      src: CONFLICT,
      alt: "Lễ tân studio cưới: lịch tường trùng slot hai cặp và màn hình Excel dài",
    },
    {
      type: "h3",
      text: "Không có nhắc lịch tự động",
    },
    {
      type: "p",
      text: "Đây là điểm chí mạng. Excel chỉ lưu thông tin, không tự làm gì. Cọc đến hạn thứ Sáu? Phải có người nhớ mở file rồi nhắn khách. Quên một lần là cuộc gọi ngượng. Quên hai lần là mất niềm tin.",
    },
    {
      type: "p",
      text: "Với studio wedding, lịch chụp lỡ hoặc deadline trả ảnh trễ không chỉ phiền — nó ảnh hưởng trực tiếp đến ngày trọng đại của khách.",
    },
    {
      type: "h3",
      text: "Làm việc nhóm rất khó",
    },
    {
      type: "p",
      text: "Hai, ba người cùng sửa một file thì dễ ghi đè hoặc làm trên bản cũ. Studio nhiều người nhận khách gặp chuyện này gần như mỗi ngày.",
    },
    {
      type: "h3",
      text: "Không thấy được “đường đi” của khách",
    },
    {
      type: "p",
      text: "Excel liệt kê danh sách, nhưng không cho thấy mỗi người đang ở giai đoạn nào: ai cần gọi lại, ai im lặng mấy hôm, ai sắp ký. Thiếu tầm nhìn đó, khách tiềm năng rơi vì không ai biết bước tiếp theo.",
    },
    {
      type: "p",
      text: "Nói ngắn: Excel là công cụ ghi chép, không phải công cụ vận hành studio đang lớn.",
    },
    {
      type: "h2",
      text: "CRM làm khác Excel ở chỗ nào?",
    },
    {
      type: "p",
      text: "CRM (phần mềm quản lý khách hàng) theo dõi mối quan hệ từ đầu đến cuối — không chỉ lưu danh sách tĩnh. Với studio wedding, đây là khác biệt thật sự.",
    },
    {
      type: "image",
      src: PIPELINE,
      alt: "Màn hình CRM pipeline studio cưới: Hỏi, Tư vấn, Chốt booking, Chuẩn bị chụp, Sau trả ảnh",
    },
    {
      type: "h3",
      text: "Mọi thông tin khách nằm trong một hồ sơ",
    },
    {
      type: "p",
      text: "Mỗi khách một hồ sơ: lịch sử trao đổi, trạng thái hợp đồng, tiền cọc, ngày chụp, ghi chú. Cần biết gì — mở đúng một chỗ, không lục bốn file.",
    },
    {
      type: "h3",
      text: "Nhắc lịch tự chạy nền",
    },
    {
      type: "p",
      text: "CRM nhắc khi cọc quá hạn, ngày chụp gần đến, hoặc sắp hẹn trả ảnh. Bạn không phải nhớ mở file mỗi sáng.",
    },
    {
      type: "h3",
      text: "Nhìn thấy toàn bộ pipeline",
    },
    {
      type: "p",
      text: "Thấy ngay bao nhiêu khách đang tư vấn, ai ở giai đoạn nào, ai cần xử lý gấp. Quản lý khách wedding từ chạy theo sự vụ thành quy trình rõ, kiểm soát được.",
    },
    {
      type: "h3",
      text: "Cả team làm việc trên cùng một dữ liệu",
    },
    {
      type: "p",
      text: "CRM trên đám mây cập nhật theo thời gian thực — mọi người nhìn cùng thông tin. Bớt ghi đè, bản cũ, và tranh cãi ai phụ trách khách nào.",
    },
    {
      type: "h2",
      text: "CRM có hợp với mọi studio không?",
    },
    {
      type: "p",
      text: "Không hẳn. Thợ chụp một mình, khoảng mười đám một năm, thì chưa cần CRM. Công sức học hệ thống mới có thể lớn hơn lợi ích ở quy mô đó.",
    },
    {
      type: "p",
      text: "Thời điểm nên cân nhắc thường là khi: quản lý từ khoảng 15 khách đang hoạt động mỗi tháng trở lên; nhiều hơn một người nhận khách; hoặc thường quên follow-up / suýt trùng lịch.",
    },
    {
      type: "p",
      text: "Đến lúc đó, cái giá của việc không có CRM — booking mất, sai sót, thời gian nhân sự — thường lớn hơn chi phí phần mềm.",
    },
    {
      type: "h2",
      text: "Dolphin hợp vào bức tranh này thế nào?",
    },
    {
      type: "p",
      text: "Nếu đọc đến đây thấy “hợp lý, nhưng mình đâu rành công nghệ” — đó là lý do Dolphin làm CRM vận hành cho doanh nghiệp dịch vụ, kể cả studio wedding.",
    },
    {
      type: "p",
      text: "Thay vì danh bạ chung chung, CRM nên xếp hồ sơ theo giai đoạn studio thật sự đi qua: khách hỏi → tư vấn → chốt booking → chuẩn bị buổi chụp → chăm sóc sau trả ảnh. Nhắc mốc thanh toán, theo dõi trạng thái trên một màn hình, phân quyền nhân sự — để team nhỏ không cần bộ phận IT vẫn dùng được.",
    },
    {
      type: "p",
      text: "Bạn vẫn có thể áp dụng mọi điều trong bài mà không cần một phần mềm cụ thể. Nếu muốn làm gọn một lần, xem hướng [Dolphin Ops](/dolphin-ops/) (Agent CRM vận hành) và bài [website xem váy online cho studio cưới](/news/studio-cuoi-website-xem-vay-online/) — website và CRM thường đi cùng nhau khi studio số hóa.",
    },
    {
      type: "h2",
      text: "Chuyển từ Excel sang CRM: bắt đầu thế nào?",
    },
    {
      type: "p",
      text: "Đổi công cụ không nhất thiết xáo trộn. Vài bước giúp mượt hơn:",
    },
    {
      type: "p",
      text: "Dọn dữ liệu trước. Xuất danh sách khách hiện có về dạng gọn, thống nhất trước khi nhập hệ thống mới.",
    },
    {
      type: "p",
      text: "Chuyển khách đang hoạt động trước. Không cần đưa hết dữ liệu cũ ngày đầu. Tập trung booking hiện tại và sắp tới, rồi mới làm ngược về sau.",
    },
    {
      type: "p",
      text: "Vẽ quy trình trước khi cấu hình. Viết các giai đoạn từ hỏi đến trả ảnh. CRM nên phản ánh cách studio bạn làm việc, chứ không bắt bạn uốn theo nó.",
    },
    {
      type: "p",
      text: "Cho cả team tham gia sớm. CRM chỉ hiệu quả khi mọi người dùng. Giải thích vì sao đổi và họ được lợi gì trong việc hằng ngày.",
    },
    {
      type: "h2",
      text: "Cái giá thật của việc bám mãi lấy Excel",
    },
    {
      type: "p",
      text: "Lỡ follow-up, trùng lịch, mất khách tiềm năng, nhầm hạn thanh toán — không chỉ là phiền nhỏ. Studio wedding sống nhờ giới thiệu và uy tín; một trải nghiệm tệ lan xa hơn nhiều chiến dịch marketing bù lại.",
    },
    {
      type: "p",
      text: "Excel sắp xếp dữ liệu. CRM quản lý mối quan hệ. Càng để lâu, cơ hội trôi lặng lẽ — không phải vì một sự cố lớn, mà vì những khe hở nhỏ cộng dồn.",
    },
    {
      type: "p",
      text: "Bước tiếp theo: thử liệt kê tuần qua bạn đã lỡ bao nhiêu lần nhắc khách, hay mất bao lâu để trả lời một câu hỏi đơn giản về khách. Nếu con số đủ khó chịu — [nhắn Zalo](https://zalo.me/0779937633) kể đang vướng chỗ nào. Không cần biết tên phần mềm trước.",
    },
  ],
  faq: [
    {
      q: "CRM có quá phức tạp với một studio nhỏ không?",
      a: "Không nhất thiết. CRM hiện đại cho team nhỏ thường chỉ cần nhập khách đang hoạt động và cấu hình vài giai đoạn — thường xong trong vài giờ, không cần nền tảng kỹ thuật sâu.",
    },
    {
      q: "CRM khác gì các công cụ như Trello hay Notion?",
      a: "Trello hay Notion quản lý công việc. CRM quản lý mối quan hệ khách: lịch sử trao đổi, thanh toán, giai đoạn booking và lịch nhắc trong một chỗ. Với studio wedding bám sát khách, khác biệt này quan trọng.",
    },
    {
      q: "Studio wedding nên tìm gì ở một CRM?",
      a: "Pipeline theo giai đoạn khách, nhắc tự động cho mốc thanh toán và ngày chụp, hồ sơ tập trung kèm ghi chú, phân quyền team. Dễ dùng quan trọng hơn nhiều tính năng.",
    },
    {
      q: "Chuyển từ Excel sang CRM mất bao lâu?",
      a: "Với hầu hết studio nhỏ, nhập khách đang hoạt động và cấu hình quy trình cơ bản khoảng một đến ba ngày. Bắt đầu với khách hiện tại sẽ giảm xáo trộn.",
    },
    {
      q: "Dùng CRM rồi có phải bỏ hết phần mềm khác không?",
      a: "Không. CRM lo khách hàng và quy trình. Studio vẫn dùng công cụ riêng để chỉnh ảnh, giao file hay kế toán. Mục tiêu là CRM thành trung tâm thông tin khách.",
    },
    {
      q: "CRM có thật sự phù hợp cho doanh nghiệp nhỏ như studio không?",
      a: "Rất phù hợp khi có nhiều khách và nhiều mốc thời gian. CRM cho SMB ngày nay đơn giản hơn trước — thay Excel gọn khi follow-up và lịch bắt đầu sót.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Why a wedding studio needs a CRM instead of Excel",
  metaTitle: "Wedding studio CRM: why leave Excel behind?",
  metaDescription:
    "Excel won’t remind you, won’t show a pipeline, and double-bookings slip through. Why wedding studios switch to CRM — and how to migrate gently.",
  excerpt:
    "Excel is fine with few clients. It breaks as volume grows. A CRM keeps every couple in one place, reminds deadlines, and shows who is waiting — so bookings don’t vanish in a missed spreadsheet row.",
  body: [
    {
      type: "lead",
      text: "Excel works when a wedding studio still has few clients. It starts to break when volume rises. A CRM brings every couple into one place, reminds you of deadlines, and shows who is waiting — so you don’t lose a booking because one spreadsheet row was missed.",
    },
    {
      type: "p",
      text: "Have you lived this: two couples booked the same shoot day, and you only panic when both call to confirm? Or a lead asked for pricing last week, you meant to call back, scrolled a long Excel file… and forgot. When you remember, they already booked another studio.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Wedding studio desk with a laptop open on a messy Excel booking sheet and scattered notes",
    },
    {
      type: "p",
      text: "For wedding studio owners, these moments are common. The root is often the same: everything lives in Excel. This piece covers three things — where Excel still shines, where it fails as you grow, and what a CRM actually changes day to day.",
    },
    {
      type: "h2",
      text: "Where Excel still does well",
    },
    {
      type: "p",
      text: "Be fair first. Excel is free, familiar, and flexible. Add columns, add notes — no heavy training.",
    },
    {
      type: "p",
      text: "A new studio handling a handful of clients a month can run on one tidy file: name, shoot date, deposit, delivery date. Clean and controllable.",
    },
    {
      type: "p",
      text: "The problem is not Excel itself. It is what happens when the studio gets busier — usually sooner than expected.",
    },
    {
      type: "h2",
      text: "Where Excel starts to break",
    },
    {
      type: "p",
      text: "More clients, more staff, and a longer chain of work per couple — Excel’s weak spots show.",
    },
    {
      type: "h3",
      text: "Data scattered across files",
    },
    {
      type: "p",
      text: "A typical studio ends up with a leads sheet, a booked sheet, a cash sheet, and side notes. After a few months, no single file tells the full story.",
    },
    {
      type: "p",
      text: "When a couple asks “when is our shoot, and how much do we still owe?”, you open two or three files to answer with confidence. More files mean more mistakes.",
    },
    {
      type: "image",
      src: CONFLICT,
      alt: "Wedding studio front desk with a double-booked wall calendar and a long Excel sheet on screen",
    },
    {
      type: "h3",
      text: "No automatic reminders",
    },
    {
      type: "p",
      text: "This is the killer. Excel only stores data. Deposit due Friday? Someone must remember to open the file and message the couple. Miss once — awkward call. Miss twice — trust drops.",
    },
    {
      type: "p",
      text: "A missed shoot slot or late photo delivery is not a small ops slip for a wedding studio. It touches the couple’s big day.",
    },
    {
      type: "h3",
      text: "Hard to work as a team",
    },
    {
      type: "p",
      text: "Two or three people editing one file means overwrites or stale copies. Studios with several people taking inquiries feel this almost daily.",
    },
    {
      type: "h3",
      text: "No clear path for each couple",
    },
    {
      type: "p",
      text: "Excel lists people. It rarely shows stage: who needs a callback, who went quiet, who is ready to sign. Without that view, leads drop because nobody owns the next step.",
    },
    {
      type: "p",
      text: "Short version: Excel is a notebook, not an operating system for a growing studio.",
    },
    {
      type: "h2",
      text: "How a CRM differs from Excel",
    },
    {
      type: "p",
      text: "A CRM tracks the relationship from first inquiry to aftercare — not only a static list. For wedding studios, that difference is practical.",
    },
    {
      type: "image",
      src: PIPELINE,
      alt: "CRM pipeline screen for a wedding studio with stages from inquiry to after delivery",
    },
    {
      type: "h3",
      text: "One profile per couple",
    },
    {
      type: "p",
      text: "Messages, contract status, deposits, shoot date, notes — one place. No hunting across four files.",
    },
    {
      type: "h3",
      text: "Reminders in the background",
    },
    {
      type: "p",
      text: "Overdue deposits, upcoming shoots, delivery dates — the system nudges you. You do not rebuild memory every morning.",
    },
    {
      type: "h3",
      text: "A visible pipeline",
    },
    {
      type: "p",
      text: "See how many couples are in consult, who is stuck, who needs action today. Wedding client work becomes a process, not firefighting.",
    },
    {
      type: "h3",
      text: "One shared source of truth",
    },
    {
      type: "p",
      text: "Cloud CRM updates in near real time. The team sees the same data — fewer overwrites and fewer “who owns this couple?” debates.",
    },
    {
      type: "h2",
      text: "Is CRM right for every studio?",
    },
    {
      type: "p",
      text: "Not always. A solo shooter with about ten weddings a year may not need one yet. Learning cost can outweigh benefit at that scale.",
    },
    {
      type: "p",
      text: "Consider switching when you run roughly 15+ active clients a month, more than one person takes inquiries, or you keep missing follow-ups and nearly double-book.",
    },
    {
      type: "p",
      text: "At that point, lost bookings and staff time usually cost more than the software.",
    },
    {
      type: "h2",
      text: "Where Dolphin fits",
    },
    {
      type: "p",
      text: "If this sounds right but you are not “tech people” — that is why Dolphin builds operations CRM for service businesses, including wedding studios.",
    },
    {
      type: "p",
      text: "Stages should match how you actually work: inquiry → consult → booked → shoot prep → after delivery. Payment reminders, one-screen status, staff permissions — built for small teams without an IT department.",
    },
    {
      type: "p",
      text: "You can apply this article without buying anything. If you want a cleaner stack once, see [Dolphin Ops](/dolphin-ops/) and our piece on [online dress catalogs for wedding studios](/news/studio-cuoi-website-xem-vay-online/) — site and CRM often land together when studios digitize.",
    },
    {
      type: "h2",
      text: "How to move from Excel to CRM",
    },
    {
      type: "p",
      text: "Migration does not have to be chaos.",
    },
    {
      type: "p",
      text: "Clean data first. Export a consistent client list before import.",
    },
    {
      type: "p",
      text: "Move active bookings first. Skip the full archive on day one.",
    },
    {
      type: "p",
      text: "Map your stages before you configure. CRM should mirror your studio, not force a foreign workflow.",
    },
    {
      type: "p",
      text: "Bring the team in early. CRM only works when everyone uses it — explain the daily win for them.",
    },
    {
      type: "h2",
      text: "The real cost of clinging to Excel",
    },
    {
      type: "p",
      text: "Missed follow-ups, double bookings, lost leads, wrong payment dates — not small annoyances. Wedding studios live on referrals; one bad experience travels farther than ads can fix.",
    },
    {
      type: "p",
      text: "Excel organizes data. CRM manages relationships. Leave it too long and opportunities leak quietly — from many small gaps, not one big crash.",
    },
    {
      type: "p",
      text: "Next step: count how many reminders you missed last week, or how long a simple client question takes. If that number stings — [message on Zalo](https://zalo.me/0779937633). You do not need a product name first.",
    },
  ],
  faq: [
    {
      q: "Is CRM too complex for a small studio?",
      a: "Not necessarily. Modern SMB CRMs usually mean importing active clients and a few stages — often done in a few hours without deep technical skill.",
    },
    {
      q: "How is CRM different from Trello or Notion?",
      a: "Those tools manage tasks. CRM manages customer relationships: history, payments, booking stages, and reminders in one place. That matters when work is couple-centric.",
    },
    {
      q: "What should a wedding studio look for?",
      a: "Stage pipeline, reminders for deposits and shoot dates, centralized profiles with notes, and team permissions. Ease of use beats feature count.",
    },
    {
      q: "How long does Excel → CRM take?",
      a: "For most small studios, active clients plus a basic process take about one to three days. Start with current bookings to reduce disruption.",
    },
    {
      q: "Do we drop every other tool?",
      a: "No. CRM owns clients and process. Keep editing, delivery, and accounting tools. Goal: CRM as the client information hub.",
    },
    {
      q: "Is CRM really for small businesses like studios?",
      a: "Yes when you juggle many clients and deadlines. Today’s SMB CRM is simpler than the old enterprise stacks — a clean Excel replacement when follow-ups start slipping.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title: "ウェディングスタジオがExcelではなくCRMを使う理由",
  metaTitle: "ウェディングスタジオのCRM：Excelをやめる理由",
  metaDescription:
    "Excelはリマインドもパイプラインも弱く、ダブルブッキングが起きやすい。スタジオがCRMに替える理由と、やさしい移行の進め方。",
  excerpt:
    "顧客が少ないうちはExcelで足ります。増えると崩れます。CRMは顧客を一箇所にまとめ、期限を知らせ、待ち状態を見せます — 表の一行漏れで予約を逃さないためです。",
  body: [
    {
      type: "lead",
      text: "顧客が少ないうちはExcelで足ります。増えると崩れ始めます。ウェディングスタジオ向けCRMは情報を一箇所に集め、予定をリマインドし、誰が待ちかを見せます — 表の一行漏れで予約を逃さないためです。",
    },
    {
      type: "p",
      text: "同じ日に二組の撮影予約があり、確認電話が来てから慌てたことはありませんか。先週見積もりを聞いたお客様に折り返すつもりが、長いExcelをスクロールしているうちに忘れ、気づいたら他店に決まっていた、という話もよく聞きます。",
    },
    {
      type: "image",
      src: COVER,
      alt: "ウェディングスタジオの机。Excelの予約表が開いたノートPCと散らばったメモ",
    },
    {
      type: "p",
      text: "スタジオ経営者には珍しくありません。多くの場合、すべてがExcelにあることが根です。本稿では三つ — Excelが得意なこと、成長で折れる点、CRMが日常で何を変えるか — をはっきり書きます。",
    },
    {
      type: "h2",
      text: "Excelが本当に得意なこと",
    },
    {
      type: "p",
      text: "批判の前に公平に。無料で、誰でも使え、柔軟です。列もメモもすぐ足せます。",
    },
    {
      type: "p",
      text: "開業直後、月に数組なら、名前・撮影日・内金・納品日の一枚で十分きれいです。",
    },
    {
      type: "p",
      text: "問題はExcelそのものではありません。忙しくなったあとに何が起きるかです — 想像より早いことが多い。",
    },
    {
      type: "h2",
      text: "Excelが崩れ始めるところ",
    },
    {
      type: "p",
      text: "顧客と人数が増え、一組ごとの作業が長くなると、弱点が出ます。",
    },
    {
      type: "h3",
      text: "ファイルが散らかる",
    },
    {
      type: "p",
      text: "見込み、成約、収支、別メモ…数か月で、全体を表す一枚がなくなります。",
    },
    {
      type: "p",
      text: "「撮影日と残金は？」と聞かれたら、二・三枚開かないと自信を持って答えられません。ファイルが多いほどミスが増えます。",
    },
    {
      type: "image",
      src: CONFLICT,
      alt: "スタジオ受付。同じ枠に二組が入った壁カレンダーと長いExcel画面",
    },
    {
      type: "h3",
      text: "自動リマインドがない",
    },
    {
      type: "p",
      text: "致命的です。Excelは保存するだけ。金曜の内金期限も、人が思い出して連絡します。一度忘れれば気まずい電話。二度で信頼が落ちます。",
    },
    {
      type: "p",
      text: "撮影ミスや納品遅れは、ウェディングでは小さな事務ミスではありません。お客様の大事な日に直結します。",
    },
    {
      type: "h3",
      text: "チーム作業が難しい",
    },
    {
      type: "p",
      text: "二人・三人で同じファイルを直すと、上書きや古い版が起きます。受付が複数いるとほぼ毎日です。",
    },
    {
      type: "h3",
      text: "顧客の「道筋」が見えない",
    },
    {
      type: "p",
      text: "一覧はできますが、段階 — 折り返しが要る、沈黙、契約直前 — は見えにくい。次の一手が誰の仕事か分からず、見込みが落ちます。",
    },
    {
      type: "p",
      text: "短く言うと、Excelは記録用具であり、成長中スタジオの運用用具ではありません。",
    },
    {
      type: "h2",
      text: "CRMがExcelと違う点",
    },
    {
      type: "p",
      text: "CRMは関係を最初から最後まで追います。静的な名簿だけではありません。スタジオでは実務の差になります。",
    },
    {
      type: "image",
      src: PIPELINE,
      alt: "ウェディングスタジオのCRMパイプライン画面。問い合わせから納品後まで",
    },
    {
      type: "h3",
      text: "顧客ごとに一つのプロフィール",
    },
    {
      type: "p",
      text: "やり取り、契約、内金、撮影日、メモが一箇所。四つのファイルを探さなくてよい。",
    },
    {
      type: "h3",
      text: "リマインドが裏側で動く",
    },
    {
      type: "p",
      text: "内金超過、撮影間近、納品予定を知らせます。毎朝ファイルを思い出す必要が減ります。",
    },
    {
      type: "h3",
      text: "パイプラインが見える",
    },
    {
      type: "p",
      text: "相談中が何組か、誰が止まっているか、今日動くべきかが分かります。場当たりから、見える流れへ。",
    },
    {
      type: "h3",
      text: "チームが同じデータを見る",
    },
    {
      type: "p",
      text: "クラウドならほぼ同時更新。上書きや「誰の担当？」の議論が減ります。",
    },
    {
      type: "h2",
      text: "すべてのスタジオに合うか",
    },
    {
      type: "p",
      text: "いいえ。一人で年十組前後なら、まだ要らないこともあります。学習コストが利益を上回ることがあります。",
    },
    {
      type: "p",
      text: "目安は、月におよそ15組以上の進行中、問い合わせ担当が複数、フォロー漏れやダブルブッキング寸前が続くとき。",
    },
    {
      type: "p",
      text: "その段階では、失注と人件のロスがソフト代より大きくなりがちです。",
    },
    {
      type: "h2",
      text: "Dolphinの位置づけ",
    },
    {
      type: "p",
      text: "「納得はしたが、ITは得意ではない」なら — Dolphinはサービス業の運用CRMを作り、ウェディングスタジオも含めます。",
    },
    {
      type: "p",
      text: "段階は現場どおりに：問い合わせ → 相談 → 成約 → 撮影準備 → 納品後。支払いリマインド、一画面の状態、権限。小さなチーム向けです。",
    },
    {
      type: "p",
      text: "この記事の考え方は、特定ソフトなしでも使えます。一度きれいにしたいなら [Dolphin Ops](/dolphin-ops/) と [スタジオのドレス一覧サイト](/news/studio-cuoi-website-xem-vay-online/) も。サイトとCRMは数字化でセットになることが多いです。",
    },
    {
      type: "h2",
      text: "ExcelからCRMへ：始め方",
    },
    {
      type: "p",
      text: "移行は大混乱でなくてよい。",
    },
    {
      type: "p",
      text: "先にデータを整える。取り込み前に名簿を揃える。",
    },
    {
      type: "p",
      text: "進行中の予約から。初日に全履歴は要らない。",
    },
    {
      type: "p",
      text: "段階を書いてから設定。CRMが現場に合わせる。逆ではない。",
    },
    {
      type: "p",
      text: "チームを早く巻き込む。使われて初めて効く。日常の得を説明する。",
    },
    {
      type: "h2",
      text: "Excelに固執する本当のコスト",
    },
    {
      type: "p",
      text: "フォロー漏れ、ダブルブッキング、見込み失注、支払日の誤り — 小さな不便ではありません。紹介と信頼で生きる業種では、一つの悪い体験が広告より遠くまで行きます。",
    },
    {
      type: "p",
      text: "Excelはデータを並べる。CRMは関係を守る。放置するほど、大きな事故ではなく小さな隙間の積み重ねで機会が静かに落ちます。",
    },
    {
      type: "p",
      text: "次の一歩：先週リマインドを何回逃したか、簡単な顧客質問に何分かかったか。数字が気になるなら [Zalo](https://zalo.me/0779937633) で困りどころを。ソフト名は先に要りません。",
    },
  ],
  faq: [
    {
      q: "小さなスタジオにCRMは難しすぎますか？",
      a: "必ずしも。進行中の顧客と数段階の設定で数時間、深い技術は要らないことが多いです。",
    },
    {
      q: "TrelloやNotionと何が違いますか？",
      a: "それらはタスク管理。CRMは顧客関係 — 履歴、支払い、予約段階、リマインドを一箇所。顧客密着のスタジオでは差が大きいです。",
    },
    {
      q: "ウェディングスタジオがCRMに求めるものは？",
      a: "段階パイプライン、内金・撮影日のリマインド、メモ付きの集中プロフィール、権限。機能数より使いやすさ。",
    },
    {
      q: "移行にどのくらい？",
      a: "小規模なら進行中の取り込みと基本フローでだいたい1〜3日。現在の予約から始めると混乱が減ります。",
    },
    {
      q: "他のソフトは全部やめますか？",
      a: "いいえ。CRMは顧客と流れ。編集・納品・会計は別ツールでよい。顧客情報の中心にするのが目的です。",
    },
    {
      q: "小規模に本当に合いますか？",
      a: "顧客と期限が多いなら合います。今のSMB向けCRMは昔の大企業向けより単純で、フォロー漏れが出始めたExcelの代わりになります。",
    },
  ],
};

export const crmChoStudioWeddingThayViExcelCopy = { vi, en, ja };
