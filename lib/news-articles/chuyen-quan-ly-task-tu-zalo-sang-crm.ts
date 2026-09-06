import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/chuyen-quan-ly-task-tu-zalo-sang-crm.jpg";
const CHAT = "/news/chuyen-quan-ly-task-zalo-troi.jpg";
const BOARD = "/news/chuyen-quan-ly-task-crm-man-hinh.jpg";

const vi: NewsArticleCopy = {
  title: "Chuyển quản lý task từ Zalo sang CRM: khi nào nên đổi?",
  metaTitle: "Chuyển quản lý task từ Zalo sang CRM: khi nào nên đổi?",
  metaDescription:
    "Zalo không nhắc hạn, không rõ ai làm, task dễ trôi mất. Đây là lý do SME nên chuyển quản lý công việc sang phần mềm/CRM — và cách đổi dễ dàng.",
  excerpt:
    "Zalo tốt để nhắn tin, nhưng không sinh ra để giao và theo dõi việc. Khi task trôi trong group chat, phần mềm quản lý công việc — hoặc task trên CRM — gom việc về một chỗ: rõ người, rõ hạn, rõ trạng thái.",
  body: [
    {
      type: "lead",
      text: "Trả lời nhanh: Zalo tốt để nhắn tin, nhưng nó không sinh ra để giao và theo dõi công việc. Khi task trôi trong hàng chục group chat, việc gì đến hạn, ai làm, xong chưa — tất cả đều dựa vào trí nhớ. Một phần mềm quản lý công việc, hoặc tính năng quản lý task trên CRM, gom mọi việc về một chỗ: giao rõ người, rõ hạn, rõ trạng thái, và tự nhắc khi sắp trễ. Với SME đang có từ 5 nhân sự trở lên, đây thường là bước đổi đáng giá nhất.",
    },
    {
      type: "p",
      text: "Bạn đã bao giờ mở Zalo lúc 10 giờ tối, cuộn ngược lên tìm một tin nhắn giao việc từ sáng, mà cuộn mãi vẫn không thấy chưa? Hoặc sáng ra hỏi “việc hôm qua xong chưa”, nhân viên trả lời tỉnh bơ “ủa em tưởng anh giao cho bạn kia”?",
    },
    {
      type: "image",
      src: COVER,
      alt: "Chủ doanh nghiệp tối muộn ngồi cuộn điện thoại tìm tin nhắn giao việc từ sáng",
    },
    {
      type: "p",
      text: "Nếu quen, thì bài này viết cho bạn. Mình sẽ nói thẳng: Zalo mạnh ở đâu, nó gãy chỗ nào khi dùng để quản lý task, một phần mềm hay CRM giúp gì khác biệt, và khi nào bạn thật sự nên đổi.",
    },
    {
      type: "h2",
      text: "Zalo thật ra tốt ở điểm nào?",
    },
    {
      type: "p",
      text: "Công bằng mà nói, Zalo không phải công cụ tồi. Nó miễn phí, ai cũng có sẵn, mở ra là dùng được ngay. Không cần đào tạo, không cần cài đặt gì phức tạp.",
    },
    {
      type: "p",
      text: "Với một team nhỏ vài người, việc quăng một câu “em lo cái này nhé” vào group là đủ nhanh và đủ gọn. Trao đổi tức thời, gửi file, gọi điện — Zalo làm mấy việc đó rất ổn.",
    },
    {
      type: "p",
      text: "Vấn đề không nằm ở Zalo. Vấn đề là khi bạn dùng một app nhắn tin để làm việc mà nó chưa bao giờ được thiết kế: quản lý công việc cho cả một đội.",
    },
    {
      type: "h2",
      text: "Zalo gãy ở đâu khi dùng để quản lý task?",
    },
    {
      type: "p",
      text: "Khi số người tăng, số việc tăng, và mỗi ngày có hàng chục thứ cần theo dõi, Zalo bắt đầu lộ điểm yếu rất rõ.",
    },
    {
      type: "h3",
      text: "Task trôi mất trong dòng tin nhắn",
    },
    {
      type: "image",
      src: CHAT,
      alt: "Hai điện thoại trên bàn, group chat lẫn sticker, ảnh ăn trưa và tin giao việc bị đẩy xuống dưới",
    },
    {
      type: "p",
      text: "Một group Zalo hoạt động là hàng trăm tin nhắn mỗi ngày. Giao việc lúc 9 giờ sáng, đến trưa đã bị đẩy xuống dưới bởi ảnh, sticker, và mấy câu tán gẫu. Không ai cuộn ngược lại để nhớ. Việc quan trọng nằm chung một chỗ với “mọi người ăn trưa gì chưa”.",
    },
    {
      type: "h3",
      text: "Không rõ ai chịu trách nhiệm",
    },
    {
      type: "p",
      text: "“Nhờ cả nhà xử lý giúp” nghe thì thân thiện, nhưng thực tế là không ai làm — vì ai cũng tưởng người khác lo. Zalo không có chỗ ghi rõ: việc này của ai, deadline ngày nào, đang ở bước nào.",
    },
    {
      type: "h3",
      text: "Không có hạn chót và nhắc nhở",
    },
    {
      type: "p",
      text: "Zalo chỉ lưu tin nhắn, nó không tự nhắc. Deadline thứ Sáu ư? Phải có người nhớ mà hối. Quên một lần là trễ việc, quên nhiều lần thì thành thói quen — và khách hàng là người chịu.",
    },
    {
      type: "h3",
      text: "Không thấy được toàn cảnh công việc",
    },
    {
      type: "p",
      text: "Bạn muốn biết tuần này team đang làm gì, việc nào đang kẹt, việc nào sắp trễ — Zalo không trả lời được. Muốn biết thì phải đi hỏi từng người, và câu trả lời lúc có lúc không, lúc đúng lúc thiếu.",
    },
    {
      type: "h3",
      text: "Việc và trò chuyện lẫn lộn",
    },
    {
      type: "p",
      text: "Khi mọi thứ dồn vào một group, thông tin quan trọng và chuyện phiếm nằm chung. Cần tìm lại một quyết định cũ, một file hợp đồng, bạn phải bơi giữa cả nghìn tin nhắn.",
    },
    {
      type: "p",
      text: "Nói ngắn gọn: Zalo là chỗ để nói chuyện, không phải chỗ để vận hành công việc của một đội đang lớn.",
    },
    {
      type: "h2",
      text: "Tính năng quản lý task trên CRM làm khác điều gì?",
    },
    {
      type: "p",
      text: "Phần mềm quản lý công việc — hoặc phần quản lý task tích hợp trong CRM — được xây đúng cho việc theo dõi công việc từ lúc giao đến lúc xong. Đây là những khác biệt thật sự.",
    },
    {
      type: "image",
      src: BOARD,
      alt: "Laptop trên bàn sáng, danh sách việc với người phụ trách, hạn chót và trạng thái trên một màn hình",
    },
    {
      type: "h3",
      text: "Mỗi task là một đầu việc rõ ràng",
    },
    {
      type: "p",
      text: "Một task có tên việc, người phụ trách, hạn chót, mức ưu tiên và trạng thái. Không còn cảnh “tưởng người kia làm”. Nhìn vào là biết ngay ai chịu trách nhiệm.",
    },
    {
      type: "h3",
      text: "Nhắc hạn tự động",
    },
    {
      type: "p",
      text: "Hệ thống tự nhắc khi việc sắp đến hạn hoặc đã quá hạn. Bạn không phải nhớ, không phải đi hối từng người. Việc nhắc nhở chạy nền, mỗi ngày.",
    },
    {
      type: "h3",
      text: "Nhìn thấy toàn bộ công việc trên một màn hình",
    },
    {
      type: "p",
      text: "Bạn thấy ngay việc nào đang làm, việc nào bị kẹt, ai đang gánh quá tải. Quản lý công việc từ chỗ chạy theo sự vụ trở thành một bức tranh rõ ràng, kiểm soát được.",
    },
    {
      type: "h3",
      text: "Trao đổi gắn liền với từng việc",
    },
    {
      type: "p",
      text: "Mọi thảo luận, file, ghi chú đều nằm trong đúng task đó — không lẫn với chuyện phiếm. Cần xem lại lịch sử một đầu việc, bạn mở đúng một chỗ.",
    },
    {
      type: "h3",
      text: "Cả team làm việc trên cùng dữ liệu",
    },
    {
      type: "p",
      text: "Vì phần mềm cập nhật theo thời gian thực, mọi người nhìn thấy cùng một trạng thái. Không còn cảnh người này tưởng xong, người kia tưởng chưa.",
    },
    {
      type: "h2",
      text: "Khi nào bạn nên đổi từ Zalo sang phần mềm?",
    },
    {
      type: "p",
      text: "Nói thật là không phải ai cũng cần đổi ngay. Một team ba người, mỗi ngày vài đầu việc đơn giản, thì Zalo vẫn ổn.",
    },
    {
      type: "p",
      text: "Thời điểm nên cân nhắc chuyển thường là khi:",
    },
    {
      type: "p",
      text: "Team bạn có từ 5 người trở lên và công việc bắt đầu chồng chéo.",
    },
    {
      type: "p",
      text: "Bạn thường xuyên phải đi hỏi “việc đó xong chưa” mới biết tình hình.",
    },
    {
      type: "p",
      text: "Task hay bị trễ, sót, hoặc rơi vào khoảng trống không ai nhận.",
    },
    {
      type: "p",
      text: "Bạn dành quá nhiều thời gian mỗi ngày chỉ để nhắc việc và gom thông tin.",
    },
    {
      type: "p",
      text: "Đến lúc đó, cái giá của việc không đổi — việc trễ, khách phàn nàn, thời gian bạn bị bào mòn — thường lớn hơn nhiều so với công sức học một công cụ mới.",
    },
    {
      type: "h2",
      text: "Dolphin CRM hợp vào bức tranh này thế nào?",
    },
    {
      type: "p",
      text: "Nếu đọc đến đây bạn thấy “hợp lý đấy, nhưng đổi phần mềm nghe phức tạp quá”, thì đó chính là lý do Dolphin ra đời.",
    },
    {
      type: "p",
      text: "[Dolphin Ops](/dolphin-ops/) là Agent CRM có sẵn phần quản lý công việc được thiết kế cho SME Việt: giao việc rõ người, rõ hạn, tự nhắc khi sắp trễ, và cho bạn thấy toàn bộ tiến độ team trên một màn hình. Điểm hay là nó gắn liền với dữ liệu khách hàng — nên việc chăm khách, follow-up hợp đồng, xử lý đơn đều nằm chung một chỗ, thay vì rải rác giữa Zalo và mấy file rời.",
    },
    {
      type: "p",
      text: "Đây không phải công cụ phức tạp kiểu doanh nghiệp lớn. Nó được làm để một team nhỏ, không có bộ phận IT, cầm lên là dùng được. Bạn vẫn có thể giữ Zalo để nhắn tin nhanh — nhưng việc quan trọng thì nên có một nơi tử tế để theo dõi.",
    },
    {
      type: "h2",
      text: "Chuyển từ Zalo sang phần mềm: bắt đầu thế nào?",
    },
    {
      type: "p",
      text: "Đổi cách làm không nhất thiết phải xáo trộn. Vài bước đơn giản giúp mọi thứ mượt hơn:",
    },
    {
      type: "h3",
      text: "Liệt kê các loại việc lặp lại",
    },
    {
      type: "p",
      text: "Ghi ra những đầu việc bạn giao đi giao lại mỗi tuần — đó là thứ nên đưa lên phần mềm trước.",
    },
    {
      type: "h3",
      text: "Chuyển việc đang chạy trước",
    },
    {
      type: "p",
      text: "Không cần dời hết mọi thứ ngày đầu. Đưa các task hiện tại và sắp tới lên, rồi mới tính tiếp.",
    },
    {
      type: "h3",
      text: "Giữ Zalo cho trò chuyện, đưa task ra chỗ riêng",
    },
    {
      type: "p",
      text: "Tách rõ: nói chuyện ở Zalo, theo dõi việc ở phần mềm.",
    },
    {
      type: "h3",
      text: "Cho cả team vào sớm",
    },
    {
      type: "p",
      text: "Công cụ chỉ hiệu quả khi mọi người dùng đều. Giải thích họ được lợi gì — bớt bị hỏi dồn, bớt quên việc.",
    },
    {
      type: "h2",
      text: "Cái giá thật của việc bám mãi lấy Zalo",
    },
    {
      type: "p",
      text: "Việc trễ, task sót, khách chờ, nhân viên đổ lỗi cho nhau — đây không chỉ là mấy phiền toái nhỏ. Với một doanh nghiệp đang lớn, những khe hở này cộng dồn thành khách mất, uy tín giảm, và một người chủ lúc nào cũng phải chạy theo nhắc việc.",
    },
    {
      type: "p",
      text: "Zalo là chỗ để nói chuyện. Phần mềm quản lý công việc là chỗ để việc chạy đúng. Càng để lâu, khoảng cách giữa hai thứ đó càng ngốn thời gian và tiền của bạn — không phải vì một sự cố lớn, mà vì những đầu việc nhỏ rơi rụng mỗi ngày.",
    },
    {
      type: "p",
      text: "Bước tiếp theo: thử đếm xem tuần qua có bao nhiêu lần bạn phải hỏi “việc đó xong chưa”, hoặc bao nhiêu việc bị trễ vì không ai nhắc. Nếu con số đủ khiến bạn khó chịu, đã đến lúc nghĩ đến một chỗ quản lý task tử tế hơn Zalo.",
    },
    {
      type: "p",
      text: "Xem [Dolphin Ops](/dolphin-ops/) hoặc nhắn [Zalo](https://zalo.me/0779937633). Bài liên quan: [điều hành hay đi hỏi từng nhân viên](/news/ban-dang-dieu-hanh-doanh-nghiep-hay-di-hoi-tung-nhan-vien/).",
    },
  ],
  faq: [
    {
      q: "Dùng Zalo quản lý công việc có gì sai đâu?",
      a: "Không sai, nhưng Zalo được thiết kế để nhắn tin, không phải để giao và theo dõi task. Khi team lớn lên, việc trôi trong tin nhắn, không rõ ai làm, không có nhắc hạn — đó là lúc bạn cần một công cụ chuyên cho quản lý công việc.",
    },
    {
      q: "Chuyển sang phần mềm có phải bỏ hẳn Zalo không?",
      a: "Không. Bạn vẫn dùng Zalo để trao đổi nhanh và gọi điện. Chỉ là những đầu việc cần theo dõi thì nên đưa sang phần mềm, để khỏi trôi mất và có nhắc hạn tự động.",
    },
    {
      q: "Team nhỏ có cần phần mềm quản lý task không?",
      a: "Nếu chỉ vài người và ít việc, Zalo vẫn ổn. Nên cân nhắc đổi khi team từ 5 người trở lên, việc bắt đầu chồng chéo, hoặc bạn thường xuyên phải đi hỏi mới biết việc xong chưa.",
    },
    {
      q: "CRM khác gì các app quản lý task riêng lẻ?",
      a: "App quản lý task chỉ lo phần công việc. CRM gom cả công việc lẫn dữ liệu khách hàng về một chỗ — nên việc chăm khách, theo hợp đồng và giao task nội bộ không bị tách rời. Với doanh nghiệp bám sát khách, gộp chung như vậy tiện hơn nhiều.",
    },
    {
      q: "Chuyển từ Zalo sang phần mềm mất bao lâu?",
      a: "Với hầu hết SME, đưa các đầu việc đang chạy lên và cấu hình cơ bản thường theo từng bước — bắt đầu với việc hiện tại — để giảm xáo trộn cho cả team. Thời gian cụ thể phụ thuộc quy mô; Dolphin Software không hứa một SLA cố định trên bài này.",
    },
    {
      q: "Nhân viên có chịu dùng công cụ mới không?",
      a: "Đây là lo lắng chính đáng. Cách dễ nhất là cho họ thấy cái lợi ngay: bớt bị hỏi dồn, bớt quên việc, không còn cảnh đổ lỗi cho nhau. Khi công cụ giúp họ nhẹ đầu hơn, họ sẽ dùng.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Moving task management from Zalo to a CRM: when should you switch?",
  metaTitle: "When to move task tracking from Zalo into a CRM",
  metaDescription:
    "Zalo does not remind you of due dates or who owns the work. Why SMEs move task tracking into software or a CRM — and how to switch without chaos.",
  excerpt:
    "Zalo is fine for chat. It was not built to assign and track work. When tasks vanish in group threads, a work tool — or tasks inside a CRM — puts owner, due date, and status in one place.",
  body: [
    {
      type: "lead",
      text: "Short answer: Zalo is good for messages. It was not built to hand out work and follow it. When tasks live in dozens of group chats, due dates, owners, and “done yet?” all sit in someone’s memory. Work software — or task tracking inside a CRM — puts jobs in one place: a named owner, a due date, a status, and a nudge before it slips. For an SME with five or more people, that is often the switch that pays off.",
    },
    {
      type: "p",
      text: "Have you opened Zalo at 10 p.m. and scrolled for a morning assignment you still cannot find? Or asked in the morning “was yesterday’s job done?” and heard “I thought you gave it to the other person”?",
    },
    {
      type: "image",
      src: COVER,
      alt: "Business owner at night scrolling a phone to find a morning task message",
    },
    {
      type: "p",
      text: "If that sounds familiar, this piece is for you. Where Zalo is strong, where it breaks as a task tool, what software or a CRM actually changes, and when you should switch.",
    },
    {
      type: "h2",
      text: "Where Zalo is actually good",
    },
    {
      type: "p",
      text: "Fair is fair: Zalo is not a bad tool. It is free, everyone already has it, you open it and go. No training, no heavy install.",
    },
    {
      type: "p",
      text: "In a tiny team, “you take this” in a group is fast enough. Live chat, files, calls — Zalo does those well.",
    },
    {
      type: "p",
      text: "The problem is not Zalo. The problem is using a messenger for a job it was never designed for: running work for a whole team.",
    },
    {
      type: "h2",
      text: "Where Zalo breaks for task management",
    },
    {
      type: "p",
      text: "When headcount grows, the pile of jobs grows, and every day has dozens of things to watch, the cracks show.",
    },
    {
      type: "h3",
      text: "Tasks drown in the thread",
    },
    {
      type: "image",
      src: CHAT,
      alt: "Two phones on a desk; a group chat mixes stickers, lunch photos, and a buried work message",
    },
    {
      type: "p",
      text: "A busy Zalo group is hundreds of messages a day. Assign at 9 a.m.; by noon photos, stickers, and small talk have pushed it down. Nobody scrolls back. The important job sits next to “what’s for lunch”.",
    },
    {
      type: "h3",
      text: "Nobody owns it",
    },
    {
      type: "p",
      text: "“Could someone handle this?” sounds kind. In practice nobody does — everyone thinks someone else will. Zalo has no field for owner, deadline, or step.",
    },
    {
      type: "h3",
      text: "No due date, no reminder",
    },
    {
      type: "p",
      text: "Zalo stores messages. It does not nudge. Friday deadline? Someone has to remember to chase. Miss once, the job is late. Miss often, it becomes a habit — and the customer pays.",
    },
    {
      type: "h3",
      text: "No picture of the whole week",
    },
    {
      type: "p",
      text: "What is the team on this week, what is stuck, what is about to slip — Zalo cannot answer. You ask people one by one. Answers come or they don’t, complete or not.",
    },
    {
      type: "h3",
      text: "Work mixed with chatter",
    },
    {
      type: "p",
      text: "One group holds decisions, contracts, and gossip. Finding an old call means swimming through a thousand messages.",
    },
    {
      type: "p",
      text: "Short: Zalo is a place to talk. It is not a place to run work for a team that is growing.",
    },
    {
      type: "h2",
      text: "What CRM task tracking actually changes",
    },
    {
      type: "p",
      text: "Work software — or tasks inside a CRM — is built to follow a job from assign to done. The differences are real.",
    },
    {
      type: "image",
      src: BOARD,
      alt: "Laptop in morning light showing a task list with owner, due date, and status",
    },
    {
      type: "h3",
      text: "Each task is a clear job",
    },
    {
      type: "p",
      text: "A name, an owner, a due date, priority, status. No more “I thought they had it.” You can see who is on the hook.",
    },
    {
      type: "h3",
      text: "Reminders run themselves",
    },
    {
      type: "p",
      text: "The system nags when something is due or overdue. You do not have to remember, or chase each person. The reminder sits in the background, every day.",
    },
    {
      type: "h3",
      text: "The whole pile on one screen",
    },
    {
      type: "p",
      text: "You see what is in flight, what is stuck, who is overloaded. Work stops being a chase and becomes a picture you can steer.",
    },
    {
      type: "h3",
      text: "Talk lives on the job",
    },
    {
      type: "p",
      text: "Notes, files, and comments sit on that task — not in the lunch thread. History of one job: one place.",
    },
    {
      type: "h3",
      text: "The team shares one status",
    },
    {
      type: "p",
      text: "When the tool updates live, everyone sees the same state. Nobody thinks it is done while someone else thinks it is not.",
    },
    {
      type: "h2",
      text: "When should you leave Zalo for software?",
    },
    {
      type: "p",
      text: "Honestly, not everyone needs to switch tomorrow. Three people, a few simple jobs a day — Zalo is still fine.",
    },
    {
      type: "p",
      text: "The usual moment to consider a move:",
    },
    {
      type: "p",
      text: "Five or more people, and work starts overlapping.",
    },
    {
      type: "p",
      text: "You keep asking “is that done?” just to know the status.",
    },
    {
      type: "p",
      text: "Jobs run late, get dropped, or sit in a gap nobody claimed.",
    },
    {
      type: "p",
      text: "You spend too much of the day chasing and collecting updates.",
    },
    {
      type: "p",
      text: "By then the cost of not switching — late work, unhappy customers, your time eaten — is usually larger than learning a new tool.",
    },
    {
      type: "h2",
      text: "Where Dolphin CRM fits",
    },
    {
      type: "p",
      text: "If you are nodding but thinking “switching software sounds heavy,” that is why Dolphin exists.",
    },
    {
      type: "p",
      text: "[Dolphin Ops](/dolphin-ops/) is an Agent CRM with work tracking for Vietnamese SMEs: a named owner, a due date, a nudge before it slips, and the team’s progress on one screen. It sits next to customer data — so care, follow-up, and orders live with the work, not across Zalo and loose files.",
    },
    {
      type: "p",
      text: "It is not an enterprise maze. It is meant for a small team with no IT department. Keep Zalo for a quick ping. Put the jobs that matter somewhere you can actually follow.",
    },
    {
      type: "h2",
      text: "How to start the move",
    },
    {
      type: "p",
      text: "You do not have to flip the whole company in a day.",
    },
    {
      type: "h3",
      text: "List the repeating jobs",
    },
    {
      type: "p",
      text: "Write down what you assign every week. Those go into the tool first.",
    },
    {
      type: "h3",
      text: "Move live work first",
    },
    {
      type: "p",
      text: "Do not migrate history on day one. Put current and upcoming tasks up, then continue.",
    },
    {
      type: "h3",
      text: "Keep Zalo for talk, tasks elsewhere",
    },
    {
      type: "p",
      text: "Chat on Zalo. Track work in the software.",
    },
    {
      type: "h3",
      text: "Bring the team in early",
    },
    {
      type: "p",
      text: "A tool only works if people use it. Tell them what they get: fewer pings, fewer forgotten jobs.",
    },
    {
      type: "h2",
      text: "The real cost of clinging to Zalo",
    },
    {
      type: "p",
      text: "Late jobs, dropped tasks, waiting customers, staff blaming each other — not small annoyances. In a growing firm they add up to lost customers, weaker trust, and an owner who only chases reminders.",
    },
    {
      type: "p",
      text: "Zalo is for talk. Work software is for work that has to land. The longer you wait, the more time and money that gap eats — not from one crash, but from small jobs falling through every day.",
    },
    {
      type: "p",
      text: "Next: count how many times last week you asked “is that done?” or how many jobs slipped because nobody was reminded. If the number bothers you, it is time for a place that tracks tasks better than Zalo.",
    },
    {
      type: "p",
      text: "See [Dolphin Ops](/dolphin-ops/) or [Zalo](https://zalo.me/0779937633). Related: [running the business vs asking staff](/news/ban-dang-dieu-hanh-doanh-nghiep-hay-di-hoi-tung-nhan-vien/).",
    },
  ],
  faq: [
    {
      q: "Is using Zalo for work actually wrong?",
      a: "Not wrong — but Zalo is a messenger, not a task tracker. As the team grows, jobs vanish in chat, ownership is fuzzy, and nothing reminds you of due dates. That is when you want a tool built for work.",
    },
    {
      q: "Do we have to quit Zalo entirely?",
      a: "No. Keep Zalo for a quick ping and calls. Put jobs you need to follow into software so they do not drown and so reminders can run.",
    },
    {
      q: "Does a small team need task software?",
      a: "A few people and little work: Zalo is fine. Think about switching at five or more people, overlapping jobs, or when you only know status by asking.",
    },
    {
      q: "How is a CRM different from a standalone task app?",
      a: "A task app only tracks jobs. A CRM keeps jobs and customer records together — care, contracts, and internal tasks stay in one place. If you live close to customers, that bundle is easier.",
    },
    {
      q: "How long does the switch take?",
      a: "Most SMEs move live work in steps, starting with current jobs, to keep disruption low. Exact time depends on size; this article does not promise a Dolphin SLA.",
    },
    {
      q: "Will staff actually use a new tool?",
      a: "Fair worry. Show the gain first: fewer pings, fewer forgotten jobs, less blame. When it lightens their day, they use it.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title: "タスク管理をZaloからCRMへ：いつ移すべきか",
  metaTitle: "Zaloのタスク管理をCRMに移すタイミング",
  metaDescription:
    "Zaloは期限も担当も残さない。中小が仕事の追跡をソフト／CRMへ移す理由と、混乱を抑えた始め方。",
  excerpt:
    "Zaloはチャット向き。仕事の割り当てと追跡用ではない。グループに埋もれたタスクは、担当・期限・状態を一箇所に置くツールかCRMのタスクへ。",
  body: [
    {
      type: "lead",
      text: "短い答え：Zaloはメッセージ向き。仕事を渡して追うためのものではない。グループが何十もあると、期限・担当・「終わったか」は記憶頼みになる。仕事ソフト、またはCRMのタスクは、担当・期限・状態を一箇所に置き、遅れそうなときに知らせる。社員5人以上のSMEでは、移す価値が出やすい。",
    },
    {
      type: "p",
      text: "夜10時にZaloを開き、朝の指示を遡っても見つからない、ということはないか。朝「昨日の件は終わった？」と聞いて「他の人に渡したと思ってた」と返ってくる、ということは。",
    },
    {
      type: "image",
      src: COVER,
      alt: "夜、朝の仕事の指示を探すためにスマートフォンをスクロールする経営者",
    },
    {
      type: "p",
      text: "心当たりがあるなら、この記事向け。Zaloが強い点、タスクとして折れる点、ソフトやCRMが変えること、移すべき時。",
    },
    {
      type: "h2",
      text: "Zaloが本当に良いところ",
    },
    {
      type: "p",
      text: "公平に言えば、Zaloは悪い道具ではない。無料で、誰でも持っていて、開けば使える。研修も重い導入もない。",
    },
    {
      type: "p",
      text: "数人なら「これお願い」で足りる。会話、ファイル、通話はZaloが強い。",
    },
    {
      type: "p",
      text: "問題はZaloそのものではない。メッセンジャーを、チームの仕事管理という設計されていない用途に使うこと。",
    },
    {
      type: "h2",
      text: "タスク管理としてZaloが折れるところ",
    },
    {
      type: "p",
      text: "人数と仕事が増え、毎日何十件も追うようになると、弱点がはっきりする。",
    },
    {
      type: "h3",
      text: "タスクがスレッドに埋もれる",
    },
    {
      type: "image",
      src: CHAT,
      alt: "机の上の2台のスマホ。グループにスタンプ、昼食の写真、埋もれた仕事の指示",
    },
    {
      type: "p",
      text: "活気あるグループは1日何百通。朝9時の指示は、写真とスタンプと雑談で昼には下へ。誰も遡らない。大事な仕事が「昼ごはん何？」の隣にある。",
    },
    {
      type: "h3",
      text: "担当がいない",
    },
    {
      type: "p",
      text: "「誰かお願い」は優しいが、誰も動かない。他の人がやると思うから。Zaloには担当・期限・段階の欄がない。",
    },
    {
      type: "h3",
      text: "期限もリマインドもない",
    },
    {
      type: "p",
      text: "Zaloはメッセージを残すだけ。金曜の期限は、誰かが思い出して催促する。一度忘れると遅れ、何度も忘れると癖になり、客が損をする。",
    },
    {
      type: "h3",
      text: "全体が見えない",
    },
    {
      type: "p",
      text: "今週何をしているか、どこが止まっているか、遅れそうなものは何か。Zaloは答えられない。一人ずつ聞くしかなく、返事はまちまち。",
    },
    {
      type: "h3",
      text: "仕事と雑談が混ざる",
    },
    {
      type: "p",
      text: "一つのグループに決定も契約も雑談もある。古い判断を探すのは、何千通の中を泳ぐこと。",
    },
    {
      type: "p",
      text: "短く：Zaloは話す場所。伸びているチームの仕事を回す場所ではない。",
    },
    {
      type: "h2",
      text: "CRMのタスク管理が変えること",
    },
    {
      type: "p",
      text: "仕事ソフト、またはCRM内のタスクは、渡してから完了まで追うために作られている。違いは本物。",
    },
    {
      type: "image",
      src: BOARD,
      alt: "朝の光のノートPC。担当・期限・状態の付いたタスク一覧",
    },
    {
      type: "h3",
      text: "一件ずつ、仕事がはっきりする",
    },
    {
      type: "p",
      text: "名前、担当、期限、優先度、状態。「向こうがやると思った」がなくなる。誰の責任か一目でわかる。",
    },
    {
      type: "h3",
      text: "期限の知らせが自動",
    },
    {
      type: "p",
      text: "近づく・過ぎたときにシステムが知らせる。覚えなくても、一人ずつ催促しなくてもよい。毎日、裏側で動く。",
    },
    {
      type: "h3",
      text: "仕事の全体が一つの画面",
    },
    {
      type: "p",
      text: "進行中、詰まり、負荷の偏りが見える。追いかけて回る仕事が、舵を取れる絵になる。",
    },
    {
      type: "h3",
      text: "会話はその仕事に付く",
    },
    {
      type: "p",
      text: "メモ、ファイル、コメントはそのタスクに残る。雑談と混ざらない。一件の履歴は一箇所。",
    },
    {
      type: "h3",
      text: "チームが同じ状態を見る",
    },
    {
      type: "p",
      text: "リアルタイムなら、全員が同じ状態を見る。終わったつもりと、まだだと思い込みがすれ違わない。",
    },
    {
      type: "h2",
      text: "いつZaloからソフトへ移すか",
    },
    {
      type: "p",
      text: "正直、全員が明日移す必要はない。3人で、1日数件の簡単な仕事なら、Zaloで足りる。",
    },
    {
      type: "p",
      text: "移し時の目安：",
    },
    {
      type: "p",
      text: "5人以上で、仕事が重なり始めた。",
    },
    {
      type: "p",
      text: "「終わった？」と聞かなければ状況がわからない。",
    },
    {
      type: "p",
      text: "遅れ、漏れ、誰も取らない隙間が出る。",
    },
    {
      type: "p",
      text: "1日の多くを催促と情報集めに使っている。",
    },
    {
      type: "p",
      text: "その頃には、遅れ・客の不満・削られる時間の方が、新しい道具を覚える手間より大きくなりやすい。",
    },
    {
      type: "h2",
      text: "Dolphin CRMの位置",
    },
    {
      type: "p",
      text: "「筋は通るが、ソフトを変えるのは重い」と思うなら、それがDolphinの理由。",
    },
    {
      type: "p",
      text: "[Dolphin Ops](/dolphin-ops/) はベトナムのSME向け Agent CRM。担当・期限・遅れそうなときの知らせ、チームの進捗を一つの画面に。顧客データと隣り合うので、ケア、フォロー、注文がZaloとバラバラのファイルに散らない。",
    },
    {
      type: "p",
      text: "大企業向けの迷路ではない。IT部門のない小さなチーム向け。速い連絡はZaloのままでよい。追うべき仕事は、追える場所へ。",
    },
    {
      type: "h2",
      text: "移し方の始め",
    },
    {
      type: "p",
      text: "会社を一日でひっくり返す必要はない。",
    },
    {
      type: "h3",
      text: "繰り返す仕事を書き出す",
    },
    {
      type: "p",
      text: "毎週渡している仕事。それを先にソフトへ。",
    },
    {
      type: "h3",
      text: "今走っている仕事から",
    },
    {
      type: "p",
      text: "初日に履歴を全部移さなくてよい。今とこれからを載せてから続ける。",
    },
    {
      type: "h3",
      text: "会話はZalo、タスクは別",
    },
    {
      type: "p",
      text: "話すのはZalo。追うのはソフト。",
    },
    {
      type: "h3",
      text: "チームを早く入れる",
    },
    {
      type: "p",
      text: "使われなければ効かない。得を伝える。催促が減る、忘れが減る。",
    },
    {
      type: "h2",
      text: "Zaloに固執する本当のコスト",
    },
    {
      type: "p",
      text: "遅れ、漏れ、待つ客、互いの責任転嫁。小さな不便ではない。伸びる会社では、失客、信頼の低下、催促ばかりの経営者になる。",
    },
    {
      type: "p",
      text: "Zaloは話す場所。仕事ソフトは仕事を着地させる場所。放っておくほど、その隙間が時間と金を食う。大きな事故ではなく、毎日落ちる小さな仕事のせい。",
    },
    {
      type: "p",
      text: "次：先週「終わった？」と何回聞いたか、誰も催促せず遅れた仕事はいくつか。その数が気になるなら、Zaloよりタスクを追える場所を考える時。",
    },
    {
      type: "p",
      text: "[Dolphin Ops](/dolphin-ops/) か [Zalo](https://zalo.me/0779937633)。関連：[経営しているのか、社員に聞いているのか](/news/ban-dang-dieu-hanh-doanh-nghiep-hay-di-hoi-tung-nhan-vien/)。",
    },
  ],
  faq: [
    {
      q: "Zaloで仕事を回すのは間違いか",
      a: "間違いではない。だがZaloはメッセンジャーで、タスク追跡ではない。チームが大きくなると仕事が埋もれ、担当が曖昧で、期限の知らせもない。その時は仕事用の道具が要る。",
    },
    {
      q: "Zaloを完全にやめる必要があるか",
      a: "ない。速い連絡と通話はZaloでよい。追う仕事はソフトへ。埋もれず、リマインドが走る。",
    },
    {
      q: "少人数でもタスクソフトは要るか",
      a: "数人と少ない仕事ならZaloで足りる。5人以上、仕事が重なる、聞かなければ状況がわからない、なら検討。",
    },
    {
      q: "CRMと単体のタスクアプリの違いは",
      a: "タスクアプリは仕事だけ。CRMは仕事と顧客データを一緒に置く。ケア、契約、社内タスクが分かれない。客に近い事業には、まとまっていた方が楽。",
    },
    {
      q: "移行にどれくらいかかるか",
      a: "多くのSMEは、今走っている仕事から段階的に載せる。期間は規模次第。この記事はDolphinのSLAを約束しない。",
    },
    {
      q: "社員は新しい道具を使うか",
      a: "妥当な心配。得を先に見せる。催促が減る、忘れが減る、責任のなすり合いが減る。楽になれば使う。",
    },
  ],
};

export const chuyenQuanLyTaskTuZaloSangCrmCopy = { vi, en, ja };
