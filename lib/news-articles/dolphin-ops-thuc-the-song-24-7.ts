import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/dolphin-ops-thuc-the-song-24-7.jpg";
const MONITOR = "/news/dolphin-ops-thuc-the-song-monitor.jpg";
const APPROVE = "/news/dolphin-ops-thuc-the-song-approve.jpg";

const vi: NewsArticleCopy = {
  title:
    "Dolphin Ops — Thực thể sống 24/7: giám sát bất thường, gợi ý xử lý, chờ anh chị duyệt",
  metaTitle: "Dolphin Ops — Giám sát vận hành spa & salon 24/7",
  metaDescription:
    "Dolphin Ops phát hiện lịch lệch, hủy sát giờ, tin Zalo treo — gợi ý xử lý cụ thể, chờ admin duyệt rồi mới chạy. Không bắt học menu. Không cần ngồi canh màn hình.",
  excerpt:
    "Dolphin Ops là Agent CRM giám sát vận hành spa, salon và shop dịch vụ liên tục — phát hiện lịch lệch, hủy sát giờ, tin Zalo chưa xử lý — rồi gợi ý cách giải quyết cụ thể. Anh chị duyệt, hệ thống thực hiện.",
  body: [
    {
      type: "lead",
      text: "Dolphin Ops là Agent CRM giám sát vận hành spa, salon và shop dịch vụ liên tục — phát hiện lịch lệch, hủy sát giờ, tin Zalo chưa xử lý — rồi gợi ý cách giải quyết cụ thể. Anh chị duyệt, hệ thống thực hiện. Không bắt học menu. Không chạy khi chưa có người xác nhận.",
    },
    {
      type: "p",
      text: "11 giờ đêm. Chủ spa vừa về đến nhà, điện thoại vẫn sáng màn hình. Lễ tân nhắn: “Chị ơi, sáng mai khách Lan 9 giờ hủy rồi, mà KTV Mai cũng báo nghỉ đột xuất. Giờ em xử lý sao?”",
    },
    {
      type: "p",
      text: "Trong khi đó, có một tin nhắn Zalo từ chiều — khách muốn đổi lịch — vẫn chưa ai phản hồi. Và lịch 10 giờ sáng mai đang thiếu phòng, chưa ai hay.",
    },
    {
      type: "p",
      text: "Không phải lễ tân tắc trách. Không phải chủ spa bỏ bê. Đơn giản là một ngày vận hành có quá nhiều thứ xảy ra cùng lúc — mà không phải lúc nào cũng có người ngồi canh.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Chủ spa buổi tối ở nhà nhìn điện thoại với tin nhắn từ lễ tân về lịch ngày mai",
    },
    {
      type: "p",
      text: "Đây là bài toán [AI vận hành doanh nghiệp](/dolphin-ops/) được thiết kế để giải quyết. Và Dolphin Ops được xây dựng đúng cho kịch bản này.",
    },
    {
      type: "h2",
      text: "Dolphin Ops là gì?",
    },
    {
      type: "p",
      text: "Dolphin Ops là Agent CRM — hay CRM 2.0 — dành cho chủ và nhân viên vận hành nội bộ tại spa, salon, phòng khám và shop dịch vụ.",
    },
    {
      type: "p",
      text: "Điểm khác biệt cốt lõi: anh chị không cần học menu. Không cần nhớ đường dẫn nào để đặt lịch, đường nào để xem báo cáo. Anh chị nói việc — “Đặt lịch cho Lan thứ Bảy” — Ops đọc ý định, chọn đúng công cụ, mở đúng giao diện.",
    },
    {
      type: "p",
      text: "AI không thay giao diện. Nó chọn đúng giao diện.",
    },
    {
      type: "h2",
      text: "Dolphin Ops khác Dolphin Care ở chỗ nào?",
    },
    {
      type: "p",
      text: "Nhiều anh chị nghe “AI chat” là nghĩ ngay đến bot trả lời tự động trên website hay fanpage — khách hỏi, bot đáp. Dolphin Ops không phải vậy.",
    },
    {
      type: "p",
      text: "[Dolphin Care](/dolphin-care/) là chatbot phục vụ khách hàng bên ngoài — trả lời câu hỏi, hỗ trợ đặt lịch từ phía khách trên website.",
    },
    {
      type: "p",
      text: "Dolphin Ops là công cụ nội bộ — dành riêng cho chủ và nhân viên điều hành bên trong cơ sở.",
    },
    {
      type: "h3",
      text: "Dolphin Care",
    },
    {
      type: "p",
      text: "Phục vụ khách hàng bên ngoài. Chạy trên website / fanpage. Tư vấn và nhận lịch từ phía khách.",
    },
    {
      type: "h3",
      text: "Dolphin Ops",
    },
    {
      type: "p",
      text: "Phục vụ chủ và nhân viên nội bộ. Chạy trong hệ thống vận hành. Giám sát, cảnh báo, gợi ý xử lý — chờ duyệt trước khi làm việc nhạy.",
    },
    {
      type: "p",
      text: "Ops không thay thế lễ tân. Ops đứng sau lễ tân — nhắc khi có lệch, gợi ý khi có vấn đề, và chờ duyệt trước khi xử lý việc nhạy cảm.",
    },
    {
      type: "image",
      src: MONITOR,
      alt: "Màn hình vận hành spa với thẻ cảnh báo lịch lệch trên bàn lễ tân",
    },
    {
      type: "h2",
      text: "Cách Dolphin Ops giám sát và xử lý bất thường",
    },
    {
      type: "p",
      text: "Quy trình của Ops đi theo 4 bước rõ ràng:",
    },
    {
      type: "h3",
      text: "1. Giám sát liên tục",
    },
    {
      type: "p",
      text: "Ops theo dõi lịch hẹn, trạng thái nhân viên, phòng/giường và tin nhắn chưa xử lý suốt ca làm việc, kể cả khi không có ai ngồi màn hình.",
    },
    {
      type: "h3",
      text: "2. Cảnh báo kịp thời",
    },
    {
      type: "p",
      text: "Khi phát hiện bất thường — trùng lịch, thiếu KTV, tin Zalo treo — Ops gửi cảnh báo rõ: ai, lịch gì, lệch ở đâu.",
    },
    {
      type: "h3",
      text: "3. Gợi ý giải pháp cụ thể",
    },
    {
      type: "p",
      text: "Không chỉ báo lỗi. Ops đưa ra 2–3 phương án hành động để anh chị chọn.",
    },
    {
      type: "h3",
      text: "4. Admin chọn — hệ thống thực hiện",
    },
    {
      type: "p",
      text: "Với việc thông thường, chọn xong là Ops cập nhật. Với việc nhạy (hủy hàng loạt, gửi thông báo diện rộng, hoàn tiền), Ops dừng lại chờ xác nhận rõ ràng trước khi chạy.",
    },
    {
      type: "image",
      src: APPROVE,
      alt: "Quản lý spa chọn một trong ba phương án xử lý trên máy tính bảng rồi duyệt",
    },
    {
      type: "p",
      text: "Đây là cách AI vận hành doanh nghiệp hoạt động đúng nghĩa — không phải “AI tự quyết định tất cả”, mà là “AI xử lý phần phức tạp, người giữ phần quyết định.”",
    },
    {
      type: "h2",
      text: "Những tình huống thực tế Ops xử lý",
    },
    {
      type: "h3",
      text: "Lịch thiếu KTV hoặc phòng",
    },
    {
      type: "p",
      text: "Sáng sớm, lịch 10 giờ chưa gán KTV và phòng đang bị block. Ops phát hiện trước khi ca bắt đầu — gợi ý gán KTV còn trống, chuyển phòng, hoặc dời slot. Admin chọn, hệ thống cập nhật và khóa slot.",
    },
    {
      type: "h3",
      text: "Đặt trùng lịch cùng khung giờ",
    },
    {
      type: "p",
      text: "Hai khách cùng đặt một khung với cùng KTV. Ops cảnh báo xung đột, gợi ý giữ lịch đặt trước, chuyển khách còn lại sang slot trống, hoặc liên hệ xác nhận. Admin chọn — Ops mở đúng form hoặc inbox.",
    },
    {
      type: "h3",
      text: "Tin Zalo treo — khách đổi lịch chưa ai phản hồi",
    },
    {
      type: "p",
      text: "Khách nhắn đổi lịch từ chiều; lễ tân đang phục vụ trong phòng. Ops cảnh báo, soạn sẵn 2–3 phương án trả lời kèm slot thay. Admin chọn bản — Ops gửi và tạo lịch mới.",
    },
    {
      type: "h3",
      text: "Hủy sát giờ — có bước duyệt trước khi chạy",
    },
    {
      type: "p",
      text: "Khách hủy lịch sáng hôm sau lúc tối muộn. Ops cảnh báo, gợi ý duyệt hủy và giải phóng slot, giữ chỗ và liên hệ, hoặc đề nghị đổi giờ. Việc nhạy — Ops không chạy cho đến khi admin xác nhận.",
    },
    {
      type: "h3",
      text: "Chưa gửi nhắc hẹn ngày mai",
    },
    {
      type: "p",
      text: "Có khách lịch ngày mai chưa được nhắc. Ops phát hiện, soạn sẵn nội dung kèm danh sách. Admin xem, chỉnh nếu cần, duyệt — Ops gửi.",
    },
    {
      type: "h2",
      text: "Dolphin Ops phù hợp với ai?",
    },
    {
      type: "p",
      text: "Nếu anh chị đang vận hành spa, salon, phòng khám hoặc shop dịch vụ có lịch hẹn lặp lại mỗi ngày — và quen với nhân viên hỏi “xử lý sao chị?”, khách phàn nàn chưa được nhắc, hoặc chủ phải online liên tục mới yên tâm — thì Ops được thiết kế đúng cho bài toán đó.",
    },
    {
      type: "p",
      text: "Dolphin Ops không hứa “không bao giờ sót”. Không hệ thống nào làm được điều đó. Nhưng Ops giúp giảm số lần bị bất ngờ, giảm quyết định lúc 11 giờ đêm, và giữ vận hành chạy ngay cả khi không có ai canh màn hình.",
    },
    {
      type: "p",
      text: "Đây là AI vận hành doanh nghiệp ứng dụng thực tế — không phải demo đẹp trên slide, mà là xử lý lịch lệch và tin nhắn treo tại cơ sở dịch vụ.",
    },
    {
      type: "h2",
      text: "Xem Dolphin Ops hoạt động thực tế",
    },
    {
      type: "p",
      text: "Anh chị tò mò Ops có phù hợp với cơ sở mình không? Xem chi tiết tại [/dolphin-ops/](/dolphin-ops/) — hoặc [nhắn Zalo](https://zalo.me/0779937633) kể tình huống đang gặp. Không cần chuẩn bị gì; cứ kể chỗ đang tắc.",
    },
    {
      type: "p",
      text: "Chưa có mặt tiền để khách tìm thấy? Xem thêm [làm website](/services/web/).",
    },
  ],
  faq: [
    {
      q: "Dolphin Ops có tự làm mọi thứ mà không cần người không?",
      a: "Không. Ops giám sát và gợi ý. Việc nhạy — hủy quan trọng, gửi thông báo hàng loạt, hoàn tiền — dừng chờ admin xác nhận trước khi thực hiện. Người vẫn giữ quyết định cuối.",
    },
    {
      q: "Dolphin Ops có thay thế lễ tân không?",
      a: "Không thay thế. Ops hỗ trợ lễ tân xử lý nhanh hơn và giúp chủ nắm bất thường kể cả khi không có mặt tại cơ sở.",
    },
    {
      q: "Tôi có cần học phần mềm mới không?",
      a: "Không cần học menu. Anh chị nói việc bằng câu thông thường; Ops chọn đúng công cụ và mở đúng giao diện.",
    },
    {
      q: "Dolphin Ops dành cho loại hình nào?",
      a: "Spa, salon, phòng khám và shop dịch vụ — nơi có lịch hẹn lặp lại và cần theo dõi nhân viên, phòng, thông báo khách mỗi ngày.",
    },
    {
      q: "Dolphin Ops khác Dolphin Care ở điểm nào?",
      a: "Dolphin Care là chatbot phục vụ khách trên website. Dolphin Ops là công cụ nội bộ cho chủ và nhân viên vận hành — hai sản phẩm khác nhau. Xem /dolphin-ops/ và /dolphin-care/.",
    },
    {
      q: "Triển khai có phức tạp không?",
      a: "Dolphin Software tư vấn theo quy trình thực tế của từng cơ sở trước khi đề xuất Ops phù hợp ở phần nào. Không áp dụng theo mẫu chung. Nhắn Zalo để kể tình huống đang gặp.",
    },
  ],
};

const en: NewsArticleCopy = {
  title:
    "Dolphin Ops — a living system 24/7: watch anomalies, suggest fixes, wait for your approval",
  metaTitle: "Dolphin Ops — 24/7 ops watch for spa & salon",
  metaDescription:
    "Dolphin Ops flags schedule gaps, last-minute cancels, and stalled Zalo threads — with concrete options. You approve; then it runs. No menu maze. No need to babysit the screen.",
  excerpt:
    "Dolphin Ops is an Agent CRM that watches spa, salon, and service-shop operations — flags gaps, cancels, and open messages — then suggests clear fixes. You approve; the system acts.",
  body: [
    {
      type: "lead",
      text: "Dolphin Ops is an Agent CRM that watches spa, salon, and service-shop operations — schedule gaps, last-minute cancels, open Zalo threads — then suggests concrete fixes. You approve; it runs. No menu training. Nothing sensitive runs without a person.",
    },
    {
      type: "p",
      text: "11 p.m. The spa owner just got home. The phone lights up. Front desk: “Tomorrow’s 9 a.m. with Lan cancelled — and Mai called in sick. What should I do?”",
    },
    {
      type: "p",
      text: "Meanwhile a Zalo message from the afternoon — a guest wants to reschedule — still sits unanswered. And the 10 a.m. booking is missing a room. Nobody noticed.",
    },
    {
      type: "p",
      text: "It is not that staff do not care. A service day simply stacks too many events — and you cannot watch every screen all day.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Spa owner at home at night reading a staff message about tomorrow’s bookings",
    },
    {
      type: "p",
      text: "That is the [AI for business operations](/dolphin-ops/) problem Dolphin Ops is built for.",
    },
    {
      type: "h2",
      text: "What is Dolphin Ops?",
    },
    {
      type: "p",
      text: "Dolphin Ops is an Agent CRM — CRM 2.0 — for owners and staff inside spas, salons, clinics, and service shops.",
    },
    {
      type: "p",
      text: "Core difference: you do not learn menus. You state the job — “Book Lan on Saturday” — Ops reads intent, picks the tool, opens the right UI.",
    },
    {
      type: "p",
      text: "AI does not replace the UI. It chooses the right UI.",
    },
    {
      type: "h2",
      text: "How is Ops different from Dolphin Care?",
    },
    {
      type: "p",
      text: "“AI chat” often means a public bot on a website. Ops is not that.",
    },
    {
      type: "p",
      text: "[Dolphin Care](/dolphin-care/) serves guests — answers and booking help on your site.",
    },
    {
      type: "p",
      text: "Dolphin Ops is internal — for owners and staff running the shop.",
    },
    {
      type: "h3",
      text: "Dolphin Care",
    },
    {
      type: "p",
      text: "External guests. Website / page. Advice and inbound booking.",
    },
    {
      type: "h3",
      text: "Dolphin Ops",
    },
    {
      type: "p",
      text: "Owners and staff. Internal ops. Watch, alert, suggest — wait for approval on sensitive work.",
    },
    {
      type: "p",
      text: "Ops does not replace the front desk. It stands behind them — flags gaps, suggests options, waits before sensitive actions.",
    },
    {
      type: "image",
      src: MONITOR,
      alt: "Spa desk laptop showing calm ops alerts about schedule conflicts",
    },
    {
      type: "h2",
      text: "How Ops watches and handles anomalies",
    },
    {
      type: "p",
      text: "Four clear steps:",
    },
    {
      type: "h3",
      text: "1. Continuous watch",
    },
    {
      type: "p",
      text: "Bookings, staff, rooms/beds, and open messages — even when nobody is at the screen.",
    },
    {
      type: "h3",
      text: "2. Timely alerts",
    },
    {
      type: "p",
      text: "Double books, missing technician, stalled Zalo — who, which booking, what is off.",
    },
    {
      type: "h3",
      text: "3. Concrete options",
    },
    {
      type: "p",
      text: "Not just an error. Two or three actions you can pick.",
    },
    {
      type: "h3",
      text: "4. You choose — the system runs",
    },
    {
      type: "p",
      text: "Routine picks update immediately. Sensitive work (bulk cancel, mass notify, refunds) pauses for a clear confirm.",
    },
    {
      type: "image",
      src: APPROVE,
      alt: "Spa manager choosing one of three fix options on a tablet before approving",
    },
    {
      type: "p",
      text: "That is AI for business operations done right — not “AI decides everything,” but “AI handles complexity; people keep the decision.”",
    },
    {
      type: "h2",
      text: "Situations Ops handles",
    },
    {
      type: "h3",
      text: "Booking missing staff or room",
    },
    {
      type: "p",
      text: "Ops flags incomplete bookings before the shift — assign free staff, switch room, or move the slot. You pick; it updates and blocks the slot.",
    },
    {
      type: "h3",
      text: "Double booking",
    },
    {
      type: "p",
      text: "Conflict alert with options: keep the earlier guest, move the other, or confirm by chat. Ops opens the right form or inbox.",
    },
    {
      type: "h3",
      text: "Stalled Zalo reschedule",
    },
    {
      type: "p",
      text: "Ops drafts reply options with alternate slots. You pick a version — Ops sends and creates the new booking.",
    },
    {
      type: "h3",
      text: "Last-minute cancel — approval first",
    },
    {
      type: "p",
      text: "Suggest cancel and free the slot, hold and call, or offer a time change. Sensitive — Ops waits for your confirm.",
    },
    {
      type: "h3",
      text: "Tomorrow’s reminders not sent",
    },
    {
      type: "p",
      text: "Ops prepares copy and the guest list. You review, edit if needed, approve — then it sends.",
    },
    {
      type: "h2",
      text: "Who is Ops for?",
    },
    {
      type: "p",
      text: "Spas, salons, clinics, and service shops with daily bookings — and nights spent answering “what should we do?”",
    },
    {
      type: "p",
      text: "Ops does not promise “never miss anything.” No system can. It aims to cut late surprises and keep ops moving when nobody is watching the screen.",
    },
    {
      type: "h2",
      text: "See Dolphin Ops",
    },
    {
      type: "p",
      text: "Curious if it fits your shop? Read [/dolphin-ops/](/dolphin-ops/) or [message on Zalo](https://zalo.me/0779937633). Just describe the bottleneck.",
    },
    {
      type: "p",
      text: "Still need a public face for guests? See [website services](/services/web/).",
    },
  ],
  faq: [
    {
      q: "Does Ops run everything without people?",
      a: "No. It watches and suggests. Sensitive work waits for admin confirmation. People keep the final call.",
    },
    {
      q: "Does it replace the front desk?",
      a: "No. It helps staff move faster and keeps owners aware of anomalies even when off-site.",
    },
    {
      q: "Do I need to learn a new CRM menu?",
      a: "No. Speak the job in plain language; Ops opens the right tool UI.",
    },
    {
      q: "Which businesses?",
      a: "Spas, salons, clinics, and service shops with recurring appointments and daily staff/room coordination.",
    },
    {
      q: "Ops vs Care?",
      a: "Care is guest-facing chat on the website. Ops is internal operations for owners and staff. See /dolphin-ops/ and /dolphin-care/.",
    },
    {
      q: "Is rollout heavy?",
      a: "Dolphin Software maps your real workflow before proposing where Ops fits. Message Zalo with the situation you are stuck on.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title:
    "Dolphin Ops — 24/7の「動く運用」：異常を見守り、対処案を出し、承認を待つ",
  metaTitle: "Dolphin Ops — スパ／サロン運用を24/7見守る",
  metaDescription:
    "予定のズレ、直前キャンセル、未対応のZaloを検知し、具体案を提示。管理者が承認してから実行。メニュー学習は不要。画面を張り付かなくてもよい。",
  excerpt:
    "Dolphin Opsはスパ・サロン・サービス店の運用を見守るAgent CRM。ズレや未対応を検知し、具体的な対処案を出します。承認後に実行。メニュー学習は不要です。",
  body: [
    {
      type: "lead",
      text: "Dolphin Opsはスパ・サロン・サービス店向けのAgent CRM。予定のズレ、直前キャンセル、未対応のZaloを検知し、具体案を提示します。承認後に実行。メニュー学習は不要。人の確認なしに機微な処理は走りません。",
    },
    {
      type: "p",
      text: "夜11時。店主が帰宅するとスマホが光る。受付から「明日9時のLan様がキャンセル、Maiも急に休みです。どうしますか？」",
    },
    {
      type: "p",
      text: "午後からの予約変更のZaloは未返信。翌朝10時の予約は部屋未割当のまま。誰も気づいていない。",
    },
    {
      type: "p",
      text: "怠慢ではない。一日の出来事が重なり、常に画面を見守れるわけではないだけだ。",
    },
    {
      type: "image",
      src: COVER,
      alt: "夜、自宅で受付からの明日の予定メッセージを見るスパ店主",
    },
    {
      type: "p",
      text: "それが[業務運用のAI](/dolphin-ops/)の課題であり、Dolphin Opsの想定シーンです。",
    },
    {
      type: "h2",
      text: "Dolphin Opsとは",
    },
    {
      type: "p",
      text: "店主とスタッフ向けのAgent CRM（CRM 2.0）。スパ、サロン、クリニック、サービス店の内部運用向けです。",
    },
    {
      type: "p",
      text: "メニューを覚えなくてよい。「土曜にLanの予約」と伝えれば、意図を読み、適切なツールと画面を開きます。",
    },
    {
      type: "p",
      text: "AIはUIを置き換えません。正しいUIを選びます。",
    },
    {
      type: "h2",
      text: "Dolphin Careとの違い",
    },
    {
      type: "p",
      text: "「AIチャット」＝サイト上の顧客向けボット、と思われがちですが、Opsは違います。",
    },
    {
      type: "p",
      text: "[Dolphin Care](/dolphin-care/)は顧客向け。サイト上で案内や予約支援。",
    },
    {
      type: "p",
      text: "Dolphin Opsは内部向け。店主とスタッフの運用。",
    },
    {
      type: "h3",
      text: "Dolphin Care",
    },
    {
      type: "p",
      text: "外部の顧客。サイト／ページ。案内と受付。",
    },
    {
      type: "h3",
      text: "Dolphin Ops",
    },
    {
      type: "p",
      text: "店主とスタッフ。内部運用。監視・警告・提案。機微な処理は承認待ち。",
    },
    {
      type: "p",
      text: "受付の代わりではなく、後ろで支える存在です。",
    },
    {
      type: "image",
      src: MONITOR,
      alt: "受付デスクのノートPCに予定の異常アラートが表示されている様子",
    },
    {
      type: "h2",
      text: "異常を見守り、処理する流れ",
    },
    {
      type: "h3",
      text: "1. 継続ウォッチ",
    },
    {
      type: "p",
      text: "予約、スタッフ、部屋／ベッド、未対応メッセージを、画面に人がいなくても見守ります。",
    },
    {
      type: "h3",
      text: "2. タイムリーな警告",
    },
    {
      type: "p",
      text: "ダブルブッキング、担当不足、放置Zaloなど、誰・どの予約・何がズレているかを示します。",
    },
    {
      type: "h3",
      text: "3. 具体案",
    },
    {
      type: "p",
      text: "エラー表示だけで終わらず、2〜3の行動案を出します。",
    },
    {
      type: "h3",
      text: "4. 選択後に実行",
    },
    {
      type: "p",
      text: "通常処理は選択後すぐ更新。一括キャンセルや一斉通知、返金などは明確な承認後に実行します。",
    },
    {
      type: "image",
      src: APPROVE,
      alt: "タブレットで3つの対処案から1つを選び承認する店長",
    },
    {
      type: "p",
      text: "「AIが全部決める」ではなく、「複雑な部分をAIが整え、決定は人が持つ」運用AIです。",
    },
    {
      type: "h2",
      text: "よくある場面",
    },
    {
      type: "h3",
      text: "担当や部屋が足りない予約",
    },
    {
      type: "p",
      text: "シフト前に検知し、空きスタッフ割当・部屋変更・時間移動を提案。選択後に更新しスロットを確保します。",
    },
    {
      type: "h3",
      text: "ダブルブッキング",
    },
    {
      type: "p",
      text: "先約を残す／他枠へ移す／確認連絡、などの案。適切なフォームや受信箱を開きます。",
    },
    {
      type: "h3",
      text: "放置された予約変更Zalo",
    },
    {
      type: "p",
      text: "返信案と代替枠を用意。選んだ文面で送信し、新予約を作成します。",
    },
    {
      type: "h3",
      text: "直前キャンセル（承認必須）",
    },
    {
      type: "p",
      text: "キャンセル確定、保留して連絡、時間変更の提案。機微な処理は承認まで実行しません。",
    },
    {
      type: "h3",
      text: "翌日リマインド未送信",
    },
    {
      type: "p",
      text: "文面とリストを用意。確認・編集のうえ承認後に送信します。",
    },
    {
      type: "h2",
      text: "向いているお店",
    },
    {
      type: "p",
      text: "毎日予約が回り、「どうしますか？」が夜まで続くスパ・サロン・クリニック・サービス店向けです。",
    },
    {
      type: "p",
      text: "「絶対に見逃さない」とは言いません。想定外を減らし、画面を見ていなくても運用が止まらないことを目指します。",
    },
    {
      type: "h2",
      text: "実際の動きを見る",
    },
    {
      type: "p",
      text: "[/dolphin-ops/](/dolphin-ops/) を見るか、[Zalo](https://zalo.me/0779937633)で困っている点をそのまま伝えてください。",
    },
    {
      type: "p",
      text: "まだ顧客向けの顔（サイト）がなければ [Web制作](/services/web/) もご覧ください。",
    },
  ],
  faq: [
    {
      q: "人がいなくても全部自動？",
      a: "いいえ。監視と提案が中心です。機微な処理は管理者の承認後。最終判断は人です。",
    },
    {
      q: "受付の代わりになりますか？",
      a: "なりません。受付を速くし、店主が不在でも異常を把握しやすくします。",
    },
    {
      q: "新しいCRMのメニュー学習は必要？",
      a: "不要です。普通の言い方で仕事を伝え、適切な画面を開きます。",
    },
    {
      q: "どんな業種？",
      a: "予約が繰り返され、スタッフと部屋／ベッドの調整が日常のスパ、サロン、クリニック、サービス店。",
    },
    {
      q: "Careとの違いは？",
      a: "Careはサイト上の顧客向け。Opsは店主・スタッフの内部運用。/dolphin-ops/ と /dolphin-care/ を参照。",
    },
    {
      q: "導入は重い？",
      a: "実際の流れを聞いたうえで、どこにOpsが合うかを提案します。Zaloで状況を送ってください。",
    },
  ],
};

export const dolphinOpsThucTheSong247Copy = { vi, en, ja };
