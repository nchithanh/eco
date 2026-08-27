import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/mai-gv-nghi-nhan-zalo-sua-excel.jpg";
const GROUPS = "/news/mai-gv-nghi-nhan-zalo-nhom.jpg";
const LIST = "/news/mai-gv-nghi-mot-danh-sach.jpg";

const vi: NewsArticleCopy = {
  title:
    "Mai GV nghỉ — phải nhắn từng nhóm Zalo, rồi ngồi sửa Excel xem ai còn buổi",
  metaTitle: "GV nghỉ: nhắn Zalo rồi sửa Excel — quản lý học viên trung tâm",
  metaDescription:
    "Tối GV báo nghỉ, phải nhắn từng nhóm Zalo rồi ngồi sửa Excel xem ai còn buổi. Chuyện quen ở trung tâm khóa học — và khi nào nên gom khóa, buổi, học viên vào một chỗ.",
  excerpt:
    "Tối GV báo nghỉ. Phải nhắn từng nhóm Zalo, rồi ngồi sửa Excel xem ai còn buổi. Bài này kể chuyện đó ở trung tâm khóa học — không phải checklist phần mềm.",
  body: [
    {
      type: "lead",
      text: "Tối hôm qua giáo viên nhắn: mai nghỉ. Việc tiếp theo không nằm trên một màn hình. Phải vào từng nhóm Zalo, rồi mở Excel xem ai còn buổi. Đó là quản lý học viên trung tâm đang diễn ra ở nhiều nơi — chưa cần nói tới phần mềm.",
    },
    {
      type: "p",
      text: "Không phải lễ tân tắc trách. Cũng không phải chủ trung tâm bỏ bê.",
    },
    {
      type: "p",
      text: "Một khóa có nhiều học viên. Một học viên có thể học hơn một khóa. Buổi mai lại không diễn ra. Thông tin nằm rải: nhóm Zalo lớp Hip-hop, nhóm phụ huynh lớp trẻ, file Excel sĩ số, lịch Google của giáo viên.",
    },
    {
      type: "p",
      text: "Người đang cầm điện thoại phải nối các mảnh đó lại — trong đêm.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Quản lý trung tâm tối muộn, vừa nhắn Zalo vừa mở Excel trên laptop",
    },
    {
      type: "h2",
      text: "Tối hôm đó, việc không nằm ở một chỗ",
    },
    {
      type: "p",
      text: "Hủy một buổi nghe đơn giản. Làm tay thì thành chuỗi.",
    },
    {
      type: "p",
      text: "Nhắn nhóm lớp A. Nhắn nhóm lớp B nếu cùng giáo viên. Gọi giáo viên dạy thay — nếu có người. Sửa ô trên Excel: buổi đó hủy, ai được học bù, ai đã đóng đủ, ai vào giữa khóa nên còn ít buổi hơn người học từ đầu.",
    },
    {
      type: "image",
      src: GROUPS,
      alt: "Phòng tập trống buổi tối, điện thoại ở quầy còn mở nhiều nhóm chat",
    },
    {
      type: "p",
      text: "Sáng hôm sau phụ huynh hỏi: tuần này con học buổi nào?",
    },
    {
      type: "p",
      text: "Câu trả lời đúng nằm giữa tin nhắn đã gửi, file chưa lưu, và lịch giáo viên chưa kịp đổi. Ba nơi đó không tự nói chuyện với nhau.",
    },
    {
      type: "h2",
      text: "Học viên vào giữa khóa thì cột Excel dễ lệch",
    },
    {
      type: "p",
      text: "Excel chạy tốt khi mọi người vào từ buổi đầu, học đủ, ít ai nghỉ.",
    },
    {
      type: "p",
      text: "Thực tế hay khác. Có người vào tuần thứ ba. Có buổi hủy vì lễ. Có giáo viên đổi ca một buổi. Có em xin bảo lưu — quy tắc chưa viết ra, làm tùy lúc.",
    },
    {
      type: "p",
      text: "Cột “còn mấy buổi” lúc đó không còn là phép trừ đơn giản. Người sửa file nhớ context. Người không sửa thì nhìn số cũ.",
    },
    {
      type: "p",
      text: "Dữ liệu nằm ở nhiều nơi. Quy trình phụ thuộc người đang cầm máy. Hai nỗi này gặp nhau mỗi lần lớp không diễn ra như lịch tuần.",
    },
    {
      type: "h2",
      text: "Phần mềm đặt lịch một người một giờ không khớp trung tâm khóa học",
    },
    {
      type: "p",
      text: "Nhiều trung tâm từng thử phần mềm đặt lịch — kiểu spa, salon: một khách, một khung giờ, một giường.",
    },
    {
      type: "p",
      text: "Trung tâm khóa học không chạy như vậy. Một khóa mở cửa sổ ghi danh. Nhiều học viên cùng một lịch tuần. Mỗi buổi là một lần gặp của cả lớp, không phải một slot cho một người.",
    },
    {
      type: "p",
      text: "Khi giáo viên nghỉ, câu hỏi không phải “đổi giờ cho chị Lan”. Câu hỏi là: mười tám người trong roster buổi mai xử lý ra sao — hủy, dời, học bù, hay giữ nguyên ngày kết thúc khóa.",
    },
    {
      type: "p",
      text: "Nhét chuyện đó vào lịch hẹn 1-1 thì nhân viên lại quay ra Excel. Không phải vì lười dùng phần mềm. Vì phần mềm đang hỏi sai câu.",
    },
    {
      type: "h2",
      text: "Quản lý học viên trung tâm cần thấy khóa, buổi, danh sách trên một màn",
    },
    {
      type: "p",
      text: "Chưa cần dashboard đẹp. Chưa cần AI.",
    },
    {
      type: "p",
      text: "Cần một chỗ trả lời được: khóa này còn nhận học viên không. Buổi mai còn diễn ra không. Ai nằm trong danh sách. Giáo viên và phòng là ai. Học viên Hương đang học khóa nào.",
    },
    {
      type: "image",
      src: LIST,
      alt: "Hai người ở quầy lễ tân cùng nhìn một danh sách buổi học trên laptop",
    },
    {
      type: "p",
      text: "Dolphin Edu làm đúng vòng đó: khóa học, buổi học sinh từ lịch tuần, học viên gắn vào khóa — không phải đặt lịch từng người như spa. Lát đầu đang là studio nhảy; mô hình thì là một khóa, nhiều học viên, nhiều buổi.",
    },
    {
      type: "p",
      text: "Học phí, điểm danh QR, bảo lưu — trung tâm hay hỏi, và nên hỏi. Những phần đó chưa phải thứ Dolphin Edu nhận là đã chạy đủ trên sản phẩm. Đừng mua vì slide. Mua vì khóa–buổi–danh sách đang lệch nhau mỗi lần GV nghỉ.",
    },
    {
      type: "h2",
      text: "Nếu đang tắc đúng chỗ này",
    },
    {
      type: "p",
      text: "Excel chưa chắc đã sai. Sai là khi một buổi hủy mà phải mở bốn nơi để trả lời một phụ huynh.",
    },
    {
      type: "p",
      text: "Anh chị đang kẹt đúng cảnh tối nhắn Zalo rồi sửa file — [nhắn Zalo](https://zalo.me/0779937633) kể đang làm tay những bước nào. Không cần biết tên phần mềm.",
    },
    {
      type: "p",
      text: "Nếu bài toán đang là thiếu học viên mới, chưa phải vận hành lớp: xem [landing page cho giáo viên tiếng Anh](/news/landing-page-giao-vien-tieng-anh/) — mặt tiền khác với sổ lớp.",
    },
    {
      type: "p",
      text: "Nếu còn phân vân website và phần mềm thuê theo tháng: [SaaS là gì](/news/saas-la-gi-giai-thich-cho-chu-doanh-nghiep/). Website cho khách tìm ra. Công cụ nội bộ cho người trong trung tâm biết mai lớp nào còn học.",
    },
  ],
  faq: [
    {
      q: "Excel có đủ để quản lý học viên trung tâm không?",
      a: "Đủ khi lớp ít, mọi người vào từ buổi đầu, ít hủy buổi. Khi có vào giữa khóa, hủy buổi, đổi giáo viên — file và nhóm Zalo dễ lệch nhau. Lúc đó cần một chỗ nhìn khóa, buổi, danh sách cùng lúc.",
    },
    {
      q: "Phần mềm đặt lịch spa dùng cho trung tâm dạy học được không?",
      a: "Thường không khớp. Spa là một khách một khung giờ. Trung tâm khóa học là một khóa, nhiều học viên, nhiều buổi. Hủy buổi ảnh hưởng cả roster, không phải đổi slot cho một người.",
    },
    {
      q: "Dolphin Edu là gì?",
      a: "Dolphin Edu là CRM nội bộ cho chủ và nhân viên trung tâm khóa học — khóa, buổi, học viên, giáo viên, phòng. Lát đầu làm trên studio nhảy. Không phải cổng học viên công khai, không phải chatbot cho phụ huynh trên website.",
    },
    {
      q: "Có cần AI để chạy trung tâm không?",
      a: "Không. Nhiều trung tâm cần một sổ lớp đúng hơn là AI. Dolphin Edu có lớp chat để mở đúng màn hình công việc — không phải lý do mở đầu. Nếu đang tắc khóa–buổi–danh sách, hãy nói chuyện đó trước.",
    },
    {
      q: "Dolphin Edu đã thu học phí và điểm danh QR chưa?",
      a: "Chưa nhận là đã chạy đủ trên sản phẩm. Form khảo sát có hỏi học phí, QR, bảo lưu để thiết kế đúng sau. Hiện tại vòng đang làm là khóa, buổi, roster. Giá và SLA: hỏi trực tiếp, không ghi số trên bài này.",
    },
    {
      q: "Trung tâm chưa có website thì nên làm gì trước?",
      a: "Nếu khách mới không tìm ra: làm mặt tiền trước — xem /services/web/ hoặc bài landing giáo viên. Nếu đã có học viên nhưng tối nào GV nghỉ cũng loạn Zalo và Excel: đó là bài vận hành nội bộ, khác bài website.",
    },
  ],
};

const en: NewsArticleCopy = {
  title:
    "Teacher calls in sick — then you ping every Zalo group and fix Excel to see who still has sessions",
  metaTitle: "Teacher off: Zalo then Excel — student ops at a course center",
  metaDescription:
    "A teacher texts that tomorrow is off. You message each Zalo group, then edit Excel to see remaining sessions. Familiar at course-based studios — and when to put courses, classes, and the roster in one place.",
  excerpt:
    "A teacher texts: tomorrow is off. You ping each Zalo group, then sit with Excel to see who still has sessions. This is that night at a course center — not a software checklist.",
  body: [
    {
      type: "lead",
      text: "Last night the teacher texted: tomorrow is off. The next work is not on one screen. You open each Zalo group, then Excel, to see who still has sessions. That is how many course centers run student ops — before anyone mentions software.",
    },
    {
      type: "p",
      text: "Front desk is not lazy. The owner is not checked out.",
    },
    {
      type: "p",
      text: "One course has many students. One student may be on more than one course. Tomorrow’s class will not happen. The facts sit in pieces: the Hip-hop Zalo group, the kids’ parent group, the headcount sheet, the teacher’s Google Calendar.",
    },
    {
      type: "p",
      text: "Whoever holds the phone has to join those pieces — at night.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Studio manager at night, messaging on a phone while an Excel sheet is open on a laptop",
    },
    {
      type: "h2",
      text: "That night, the work is not in one place",
    },
    {
      type: "p",
      text: "Cancelling a class sounds simple. Doing it by hand becomes a chain.",
    },
    {
      type: "p",
      text: "Message class A. Message class B if they share the teacher. Call a substitute — if there is one. Edit Excel: that session is off, who gets a makeup, who has paid, who joined mid-course and has fewer remaining sessions than people who started on day one.",
    },
    {
      type: "image",
      src: GROUPS,
      alt: "Empty dance studio at night; a phone on the reception desk still shows several chat threads",
    },
    {
      type: "p",
      text: "In the morning a parent asks: which session does my child have this week?",
    },
    {
      type: "p",
      text: "The right answer sits between a sent message, a file not saved, and a teacher calendar not updated. Those three places do not talk to each other.",
    },
    {
      type: "h2",
      text: "When students join mid-course, the Excel column drifts",
    },
    {
      type: "p",
      text: "Excel is fine when everyone starts on day one, attends, and rarely cancels.",
    },
    {
      type: "p",
      text: "Real weeks look different. Someone joins in week three. A holiday wipes a session. A teacher swaps one class. Someone asks to freeze the remaining sessions — the rule is not written down; you decide case by case.",
    },
    {
      type: "p",
      text: "“Sessions left” is no longer simple subtraction. The person who edited the file remembers why. Everyone else sees last week’s number.",
    },
    {
      type: "p",
      text: "Data lives in too many places. The process lives in whoever is holding the phone. Those two pains meet every time a class does not run as the weekly grid promised.",
    },
    {
      type: "h2",
      text: "A one-person-one-slot booking tool does not match a course center",
    },
    {
      type: "p",
      text: "Many centers tried booking software — spa or salon style: one guest, one hour, one bed.",
    },
    {
      type: "p",
      text: "A course center does not run that way. A course has an enroll window. Many students share a weekly timetable. Each class is the whole roster in a room, not a slot for one person.",
    },
    {
      type: "p",
      text: "When a teacher is off, the question is not “move Lan to another hour.” It is: what happens to the eighteen people on tomorrow’s roster — cancel, shift, makeup, or keep the course end date.",
    },
    {
      type: "p",
      text: "Force that into 1:1 booking and staff go back to Excel. Not because they refuse software. Because the software asked the wrong question.",
    },
    {
      type: "h2",
      text: "Student ops at a course center need course, class, and roster on one screen",
    },
    {
      type: "p",
      text: "You do not need a pretty dashboard first. You do not need AI first.",
    },
    {
      type: "p",
      text: "You need one place that can answer: is this course still taking students. Is tomorrow’s class still on. Who is on the list. Which teacher and room. Which courses Hương is on.",
    },
    {
      type: "image",
      src: LIST,
      alt: "Two people at reception looking together at one class list on a laptop",
    },
    {
      type: "p",
      text: "Dolphin Edu is built for that loop: courses, classes generated from a weekly pattern, students on a course — not spa-style 1:1 slots. The first slice is a dance studio; the model is one course, many students, many sessions.",
    },
    {
      type: "p",
      text: "Fees, QR attendance, holds — centers ask, and should. Those are not claimed as fully live on the product yet. Do not buy a slide. Buy because course, class, and roster drift apart every time a teacher is off.",
    },
    {
      type: "h2",
      text: "If this is the bottleneck",
    },
    {
      type: "p",
      text: "Excel is not always the mistake. The mistake is cancelling one class and opening four places to answer one parent.",
    },
    {
      type: "p",
      text: "If you are in that night of Zalo then Excel — [message on Zalo](https://zalo.me/0779937633) and say which steps you still do by hand. You do not need a product name.",
    },
    {
      type: "p",
      text: "If the pain is not enough new students, not class ops: see [a landing page for English tutors](/news/landing-page-giao-vien-tieng-anh/) — a shopfront is not a class register.",
    },
    {
      type: "p",
      text: "Still mixing up a website and monthly software? [What SaaS is](/news/saas-la-gi-giai-thich-cho-chu-doanh-nghiep/). The site is how students find you. Internal tools are how staff know which class still runs tomorrow.",
    },
  ],
  faq: [
    {
      q: "Is Excel enough to manage students at a course center?",
      a: "Yes when groups are small, everyone starts on day one, and classes rarely cancel. Mid-course joins, cancelled sessions, and teacher swaps make the sheet and Zalo groups drift. Then you need one view of course, class, and roster.",
    },
    {
      q: "Can spa booking software run a teaching center?",
      a: "Usually no. Spa is one guest, one hour. A course center is one course, many students, many sessions. Cancelling a class hits the whole roster, not one slot.",
    },
    {
      q: "What is Dolphin Edu?",
      a: "An internal CRM for owners and staff at a course center — courses, classes, students, teachers, rooms. First slice is a dance studio. Not a public student portal, not a parent chatbot on the website.",
    },
    {
      q: "Do we need AI to run the center?",
      a: "No. Many centers need a correct class register more than AI. Dolphin Edu has chat as one way to open the right screen — not the opening pitch. If course–class–roster is the jam, talk about that first.",
    },
    {
      q: "Does Dolphin Edu already handle fees and QR attendance?",
      a: "Not claimed as fully live. Discovery asks about fees, QR, and holds so later design is right. The current loop is course, class, roster. Price and SLA: ask directly — not listed in this article.",
    },
    {
      q: "We do not have a website yet. What first?",
      a: "If new students cannot find you: build the shopfront — /services/web/ or the tutor landing article. If you already have students but every sick teacher turns into Zalo-and-Excel night: that is internal ops, not a website job.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title:
    "明日、講師が休む — Zaloグループをひとつずつ送り、Excelで残レッスンを直す夜",
  metaTitle: "講師休み：ZaloのあとExcel — 教室の受講生管理",
  metaDescription:
    "講師から「明日休み」と来る。Zaloグループを送り、Excelで残レッスンを直す。コース型の教室でありがちな夜 — コース・授業・名簿を一箇所にまとめるタイミング。",
  excerpt:
    "講師から「明日休み」。Zaloを送り、Excelで誰のレッスンが残っているかを直す。教室のその夜の話です。ソフトのチェックリストではありません。",
  body: [
    {
      type: "lead",
      text: "昨夜、講師から「明日休み」と来ました。次の作業は画面ひとつでは終わりません。Zaloグループを開き、Excelで残レッスンを確認する。コース型の教室では、ソフトの名前を出す前から、受講生管理はこう動いています。",
    },
    {
      type: "p",
      text: "受付が怠惰なのではありません。オーナーが放置しているのでもありません。",
    },
    {
      type: "p",
      text: "ひとつのコースに複数の受講生。一人が複数コースに入ることもあります。明日の授業は行われない。情報はバラバラです。ヒップホップのZalo、子どもの保護者グループ、人数のExcel、講師のGoogleカレンダー。",
    },
    {
      type: "p",
      text: "電話を持っている人が、夜にその断片をつなぎます。",
    },
    {
      type: "image",
      src: COVER,
      alt: "夜の教室事務所。スマートフォンで連絡しながら、ノートPCのExcelを開いている担当者",
    },
    {
      type: "h2",
      text: "その夜、仕事は一箇所にない",
    },
    {
      type: "p",
      text: "授業のキャンセルは、言葉にすると短い。手作業にすると連鎖になります。",
    },
    {
      type: "p",
      text: "クラスAのグループ。同じ講師ならクラスBも。代講がいれば電話。Excelを直す。その回は中止、振替は誰か、入金済みは誰か、途中入会で残レッスンが少ない人は誰か。",
    },
    {
      type: "image",
      src: GROUPS,
      alt: "夜の空きスタジオ。受付のスマホに複数のチャットが残っている",
    },
    {
      type: "p",
      text: "朝、保護者から聞かれます。今週、子どもはどの授業ですか。",
    },
    {
      type: "p",
      text: "正しい答えは、送ったメッセージ、保存していないファイル、まだ直していない講師カレンダーのあいだにあります。三つは自動ではつながりません。",
    },
    {
      type: "h2",
      text: "途中入会があると、Excelの列はずれやすい",
    },
    {
      type: "p",
      text: "初回から全員が入り、欠席が少なければ、Excelで足ります。",
    },
    {
      type: "p",
      text: "実際の週は違うことが多い。3週目に入る人。祝日で一回なくなる。講師が1回だけ交代。休会の相談 — ルールは書いてなく、その場で決める。",
    },
    {
      type: "p",
      text: "「残り何回」は、ただの引き算ではなくなります。直した人は事情を覚えている。見ていない人は先週の数字のままです。",
    },
    {
      type: "p",
      text: "データが複数の場所にある。手順が、今スマホを持っている人に寄っている。週次の時間割どおりに授業が動かないたび、二つが重なります。",
    },
    {
      type: "h2",
      text: "一人・一枠の予約ソフトは、コース教室に合わない",
    },
    {
      type: "p",
      text: "スパやサロン向けの予約ソフトを試した教室は多い。お客様一人、時間一つ、ベッド一つ。",
    },
    {
      type: "p",
      text: "コース教室はそう動きません。募集期間がある。同じ週次スケジュールを複数の受講生が共有する。各授業は名簿全員の場であり、一人用の枠ではありません。",
    },
    {
      type: "p",
      text: "講師が休むとき、問いは「Lanさんの時間をずらす」ではありません。明日の名簿18人をどうするか — 中止、振り替え、補講、コース終了日はそのままか。",
    },
    {
      type: "p",
      text: "それを1対1予約に押し込むと、現場はExcelに戻ります。ソフト嫌いだからではありません。ソフトの問いが違うからです。",
    },
    {
      type: "h2",
      text: "教室の受講生管理は、コース・授業・名簿が一つの画面にあること",
    },
    {
      type: "p",
      text: "きれいなダッシュボードは、最初に要りません。AIも、最初に要りません。",
    },
    {
      type: "p",
      text: "答えられる場所が要る。このコースはまだ受け付けているか。明日の授業はあるか。名簿は誰か。講師と部屋は誰か。Hươngは今どのコースにいるか。",
    },
    {
      type: "image",
      src: LIST,
      alt: "受付で二人のスタッフが、ノートPCの授業一覧を一緒に見ている",
    },
    {
      type: "p",
      text: "Dolphin Eduはその回り方です。コース、週次から作る授業、コースに紐づく受講生 — スパの1対1枠ではありません。最初のスライスはダンススタジオ。型は「1コース・複数受講生・複数授業」です。",
    },
    {
      type: "p",
      text: "受講料、QR出欠、休会 — 教室は聞きますし、聞くべきです。製品として十分に動いている、とはまだ言いません。スライドで買わないでください。講師が休むたびにコース・授業・名簿がずれるなら、その話をしてください。",
    },
    {
      type: "h2",
      text: "今つまっているのが、ここなら",
    },
    {
      type: "p",
      text: "Excelがいつも悪いわけではありません。悪いのは、授業を1回止めて、保護者一人に答えるために場所を四つ開くことです。",
    },
    {
      type: "p",
      text: "ZaloのあとExcel、という夜にいるなら — [Zalo](https://zalo.me/0779937633)で、今手作業の手順を話してください。ソフト名は要りません。",
    },
    {
      type: "p",
      text: "新しい受講生が足りない話なら、授業運営の話ではありません。[英語講師のランディングページ](/news/landing-page-giao-vien-tieng-anh/)へ。店先と出席簿は別です。",
    },
    {
      type: "p",
      text: "サイトと月額ソフトを混同しているなら、[SaaSとは何か](/news/saas-la-gi-giai-thich-cho-chu-doanh-nghiep/)。サイトは見つけてもらう場所。内部ツールは、明日どの授業が残っているかをスタッフが知る場所です。",
    },
  ],
  faq: [
    {
      q: "Excelだけで教室の受講生管理は足りますか？",
      a: "少人数で初回から入り、休講が少なければ足ります。途中入会、休講、講師交代があるとシートとZaloがずれます。そのときはコース・授業・名簿を同時に見られる場所が要ります。",
    },
    {
      q: "スパの予約ソフトで教室は回せますか？",
      a: "多くの場合、合いません。スパは一人・一枠。教室は1コース・複数受講生・複数授業です。休講は名簿全体に効きます。",
    },
    {
      q: "Dolphin Eduとは何ですか？",
      a: "教室のオーナーとスタッフ向けの社内CRMです。コース、授業、受講生、講師、部屋。最初のスライスはダンススタジオ。公開の受講生ポータルでも、サイト上の保護者チャットでもありません。",
    },
    {
      q: "運営にAIは必要ですか？",
      a: "必須ではありません。正しい授業名簿のほうが先、という教室は多いです。Dolphin Eduのチャットは、仕事の画面を開く入口のひとつ — 売り出しの第一声ではありません。コース・授業・名簿が詰まっているなら、まずその話を。",
    },
    {
      q: "受講料やQR出欠は、もう動いていますか？",
      a: "十分に稼働している、とは言いません。調査フォームでは料金・QR・休会を聞いて、後の設計を合わせます。今の周回はコース、授業、名簿です。価格とSLAはこの記事に書きません。直接聞いてください。",
    },
    {
      q: "まだサイトがありません。何が先ですか？",
      a: "新しい受講生が見つけられないなら、店先が先です。/services/web/ か講師LPの記事へ。すでに受講生がいて、講師が休むたびにZaloとExcelが乱れるなら、それは内部運営の話で、サイトの話ではありません。",
    },
  ],
};

export const maiGvNghiNhanZaloSuaExcelCopy = { vi, en, ja };
