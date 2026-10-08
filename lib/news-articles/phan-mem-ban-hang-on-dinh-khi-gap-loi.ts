import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/phan-mem-ban-hang-on-dinh-khi-gap-loi.jpg";
const COUNTER = "/news/phan-mem-ban-hang-on-dinh-khi-gap-loi-quay.jpg";

const vi: NewsArticleCopy = {
  title: "Vì sao phần mềm bán hàng phải ổn định — cảm giác khó chịu khi gặp lỗi",
  metaTitle: "Phần mềm bán hàng ổn định: lỗi giữa ca khó chịu | Dolphin",
  metaDescription:
    "Phần mềm bán hàng ổn định quan trọng hơn thêm tính năng. Lỗi giữa ca làm hàng chờ, sai tiền, và nhân viên hết tin màn hình.",
  excerpt:
    "Giờ cao điểm mà màn hình đứng im, bill không ra, tồn nhảy sai — phần mềm bán hàng không ổn định làm cả quầy khó chịu. Ổn định đáng giá hơn một danh sách tính năng dài.",
  body: [
    {
      type: "lead",
      text: "Phần mềm bán hàng ổn định không phải chuyện “hệ thống xịn”. Nó là chuyện quầy còn bán được khi khách đang đứng đó. Một tính năng hay mà giữa ca đứng im thì vẫn là phần mềm làm chủ cửa hàng khó chịu.",
    },
    {
      type: "p",
      text: "Tối thứ bảy. Quầy trà sữa tám người. Thu ngân bấm xong ly thứ ba thì màn hình quay mãi. Khách nhìn đồng hồ. Nhân viên xin lỗi, ghi tạm lên giấy, thu tiền mặt, hứa “lát nhập lại”. Ca đóng, giấy và máy không khớp. Có ly bị tính hai lần. Có ly không thấy trong sổ.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Bìa Dolphin: máy tính bảng màn hình tối, máy in bill, chuông quầy và ly cà phê nhìn từ trên",
    },
    {
      type: "p",
      text: "Nếu cảnh này quen — cafe, trà sữa, quán ăn, pet shop, thời trang, tạp hóa — bài viết dành cho anh chị. Không cần chuỗi. Một quầy, giờ đông, là đủ để thấy vì sao phần mềm bán hàng phải ổn định.",
    },
    {
      type: "h2",
      text: "Phần mềm bán hàng ổn định khác “nhiều tính năng” ở đâu?",
    },
    {
      type: "p",
      text: "Tính năng là thứ anh chị mở khi rảnh: báo cáo tuần, điểm thành viên, tách bill, mã giảm giá. Ổn định là thứ phải có lúc đang bán: bấm món, thu tiền, lưu đơn, in hoặc gửi bill, trừ tồn đúng một lần.",
    },
    {
      type: "p",
      text: "Một nút điểm thưởng hỏng vào thứ hai thì khó chịu, nhưng quán vẫn bán. Màn hình đứng giữa ca thì hàng chờ dừng. Khách không chờ anh chị “khởi động lại app”. Họ chờ ly của họ.",
    },
    {
      type: "p",
      text: "Nhiều cửa hàng chọn phần mềm vì bảng so sánh dài. Đến lúc dùng mới thấy nút hay nằm ở menu ít ai bấm, còn bước bán mỗi ngày thì chậm, hoặc thỉnh thoảng mất đơn. Phần mềm bán hàng ổn định là phần mềm làm xong việc đang diễn ra trước mặt, rồi mới hay ở chỗ khác.",
    },
    {
      type: "h2",
      text: "Lỗi giữa ca làm khó chịu thật sự như thế nào?",
    },
    {
      type: "image",
      src: COUNTER,
      alt: "Quầy cafe tối: máy tính bảng tối màn hình, sổ giấy trắng, máy in bill và chuông gọi",
    },
    {
      type: "p",
      text: "Khó chịu đầu tiên là với khách. Xin lỗi một lần thì được. Xin lỗi lần thứ ba trong tuần thì giọng nhân viên đổi. Khách không giận “công nghệ”. Họ giận vì phải đứng thêm, hoặc vì bill khác với số vừa đọc.",
    },
    {
      type: "p",
      text: "Khó chịu thứ hai là với nhân viên. Họ không thiết kế phần mềm. Họ chỉ muốn hết hàng chờ. Khi máy không tin được, họ ghi song song một cuốn sổ. Cuốn sổ đó cứu ca hôm nay, và làm hỏng đối chiếu tối nay — vì có hai sự thật.",
    },
    {
      type: "p",
      text: "Khó chịu thứ ba mới tới chủ. Không phải lúc lỗi. Lúc đóng cửa. Mở két, mở màn hình, mở Zalo hỏi “ca này máy có nuốt đơn không?”. Không ai chắc. Tiền mặt có. Chuyển khoản có. Đơn trên máy thì thiếu vài dòng. Anh chị không biết nên tin két hay tin phần mềm.",
    },
    {
      type: "p",
      text: "Cảm giác đó lặp lại thì người ta ghét mở app. Không phải vì giao diện xấu. Vì mỗi lần mở là một lần không biết số có thật không.",
    },
    {
      type: "h2",
      text: "Những sai sót hay gặp khi phần mềm bán hàng không ổn định",
    },
    {
      type: "p",
      text: "Đứng hình lúc thu tiền. Đơn đã lên, khách đã đưa tiền, màn hình không xác nhận. Nhân viên không biết nên giữ tiền hay trả lại. Cách xử lý thường gặp là ghi giấy — rồi tối nhập bù, dễ sót hoặc nhập trùng.",
    },
    {
      type: "p",
      text: "Bill in hai lần, hoặc không in mà tồn đã trừ. Khách cầm một tờ. Kho trừ hai. Hoặc ngược lại: in được, tồn không nhúc nhích, đến giữa ca mới hết hàng trên kệ mà máy vẫn báo còn.",
    },
    {
      type: "p",
      text: "Hai máy không thấy cùng một đơn. Quầy A bán nốt size cuối. Quầy B vẫn hiện còn. Cả hai thu tiền. Một khách về tay không. Đây không phải “tính năng đa thiết bị”. Đây là mất đồng bộ đúng lúc đang bán.",
    },
    {
      type: "p",
      text: "Cập nhật xong, nút hôm qua biến mất hoặc đổi chỗ. Nhân viên bấm theo trí nhớ, đơn không lưu. Họ tưởng mình bấm nhầm. Thật ra phần mềm đổi mà không nói trước bước bán.",
    },
    {
      type: "p",
      text: "Mất mạng vài phút. Một số phần mềm khóa cả quầy. Một số vẫn cho ghi đơn rồi đồng bộ sau. Anh chị cần biết cửa hàng của mình rơi vào kiểu nào trước giờ đông — không phải lúc đang đông.",
    },
    {
      type: "h2",
      text: "Checklist trước khi tin một phần mềm bán hàng",
    },
    {
      type: "p",
      text: "Đừng hỏi “có bao nhiêu tính năng”. Hỏi vài việc nhỏ, làm thật trên máy:",
    },
    {
      type: "p",
      text: "• Bán một món, tải lại trang hoặc mở lại app. Đơn còn đó, đúng số tiền, đúng một lần.\n• Đang mở bill thì tắt mạng vài phút. Quầy còn thu tiền mặt và ghi nhận sau được không, hay cả quầy đứng.\n• In hoặc gửi bill một lần. Tồn chỉ trừ một lần.\n• Hai người, hai máy, cùng một hàng. Cả hai thấy cùng số tồn sau khi một người bán.\n• Hỏi thẳng: lỗi lúc 8 giờ tối thứ bảy thì ai nhận, và quán làm gì trong lúc chờ.",
    },
    {
      type: "p",
      text: "Nếu người bán không trả lời được câu cuối, phần mềm đó chưa sẵn để gánh giờ đông. Thêm báo cáo đẹp không vá chỗ này.",
    },
    {
      type: "p",
      text: "Chọn phần mềm lúc mới mở cũng cùng logic: quy trình bán phải rõ trước, rồi mới chọn máy. Bài [đừng vội chọn phần mềm bán hàng](/news/truoc-khi-mo-cua-hang-dung-voi-chon-phan-mem-ban-hang/) nói phần đó. Bài này nói tiếp: đã chọn rồi thì tiêu chí sống còn là nó có đứng giữa ca hay không.",
    },
    {
      type: "h2",
      text: "Khi nào nên nhờ người xem lại phần mềm?",
    },
    {
      type: "p",
      text: "Một lỗi lẻ, làm lại được, nhân viên vẫn tin màn hình — chưa cần đổi cả hệ. Nên dừng và xem lại khi lỗi lặp đúng một bước (thu tiền, in bill, trừ tồn), khi sổ tay song song đã thành thói quen, hoặc khi cuối ngày anh chị không dám chốt số.",
    },
    {
      type: "p",
      text: "Đổi phần mềm không phải bước đầu. Bước đầu là chỉ ra bước nào gãy: lưu đơn, thu, in, hay tồn. Không mô tả được bước gãy thì phần mềm mới cũng chỉ đổi chỗ khó chịu.",
    },
    {
      type: "p",
      text: "Dolphin làm [phần mềm POS cho cửa hàng bán hàng](/pos/) — quầy, kho, quỹ, ca — tách khỏi CRM lịch và khách của spa hay salon. Demo mở trên trình duyệt, sổ nằm trên máy anh chị, chưa nối ngân hàng thật. Đó không phải lời hứa “không bao giờ lỗi”. Đó là cách để anh chị tự bấm một ca mẫu: bán, thu, gửi bill, xem tồn còn đúng một lần hay không.",
    },
    {
      type: "p",
      text: "Muốn hiểu POS khác sổ tay ở đâu, đọc [vì sao cửa hàng cần phần mềm POS](/news/tai-sao-can-dung-phan-mem-pos/). Muốn xem gói năm: [bảng giá POS](/chinh-sach-gia-dolphin-2026/#pos). Muốn kể đúng chỗ đang gãy — in bill, lệch ca, hai máy lệch tồn — nhắn [Zalo](https://zalo.me/0779937633).",
    },
    {
      type: "h2",
      text: "Kết",
    },
    {
      type: "p",
      text: "Phần mềm bán hàng ổn định là phần mềm không bắt khách và nhân viên chờ một vòng quay. Tính năng thêm vào sau. Lỗi giữa ca thì khó chịu ngay: hàng chờ, xin lỗi, giấy song song, số tối không dám tin.",
    },
    {
      type: "p",
      text: "Trước khi thêm món mới trên menu phần mềm, hãy bán thử một món thật và tải lại. Đơn còn, tiền đúng, tồn trừ một lần — rồi hãy nói đến phần còn lại. Xem quầy mẫu trên [Dolphin POS](/pos/). Cần mặt tiền online riêng: [thiết kế website](/services/web/).",
    },
  ],
  faq: [
    {
      q: "Phần mềm bán hàng ổn định nghĩa là gì?",
      a: "Lúc đang bán, các bước chính làm xong và lưu được: lên món, thu tiền, lưu đơn, in hoặc gửi bill, trừ tồn đúng một lần. Không có nghĩa là không bao giờ có lỗi.",
    },
    {
      q: "Vì sao lỗi giữa ca khó chịu hơn lỗi lúc vắng?",
      a: "Vắng khách thì khởi động lại còn kịp. Giờ đông thì hàng chờ dừng, nhân viên phải xin lỗi, và số sau ca dễ lệch vì ghi tạm.",
    },
    {
      q: "Nhiều tính năng có bù cho phần mềm hay đứng không?",
      a: "Không. Báo cáo hay điểm thưởng không giúp gì nếu đơn đang bán không lưu. Ổn định của bước bán đi trước danh sách tính năng.",
    },
    {
      q: "Nhân viên ghi song song sổ tay thì có sao?",
      a: "Cứu được ca đó, nhưng tạo hai sổ. Tối đối chiếu dễ trùng hoặc sót. Sổ tay song song là dấu hiệu máy không còn được tin.",
    },
    {
      q: "Mất mạng vài phút thì bill đang mở nên xử lý thế nào?",
      a: "Tùy phần mềm. Có chỗ khóa quầy. Có chỗ cho ghi rồi đồng bộ sau. Hãy thử lúc vắng, và thống nhất với nhân viên trước giờ đông.",
    },
    {
      q: "In bill hai lần có trừ tồn hai lần không?",
      a: "Không nên. Một lần bán, một lần trừ. Nếu in lại mà tồn nhảy thêm, đó là lỗi cần ghi rõ bước — đừng coi là chuyện máy in.",
    },
    {
      q: "Làm sao biết số cuối ngày còn đáng tin?",
      a: "Đối chiếu đơn đã lưu với tiền mặt, chuyển khoản và công nợ — từng dòng, không cộng một cục. Nếu không truy được đơn thiếu, số đó chưa đáng chốt.",
    },
    {
      q: "Gặp một lỗi thì nên đổi phần mềm ngay?",
      a: "Chưa. Đổi khi lỗi lặp đúng một bước bán, nhân viên đã bỏ màn hình để ghi giấy, hoặc chủ không dám chốt số cuối ngày.",
    },
    {
      q: "Dolphin POS có cam kết không bao giờ lỗi không?",
      a: "Không. Demo chạy trên trình duyệt, sổ local, chưa nối ngân hàng thật. Mục tiêu là anh chị tự kiểm tra một ca: bán, thu, gửi bill, tồn trừ một lần.",
    },
    {
      q: "Muốn xem quầy chạy thử thì bắt đầu từ đâu?",
      a: "Mở demo trên /pos/ hoặc https://nchithanh.github.io/pos/. Muốn kể chỗ đang gãy thì nhắn Zalo 0779937633. Bảng giá năm nằm ở /chinh-sach-gia-dolphin-2026/#pos.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Why sales software has to stay stable — and how bad a mid-shift bug feels",
  metaTitle: "Stable sales software: why mid-shift bugs hurt | Dolphin",
  metaDescription:
    "Stable sales software matters more than extra features. A freeze at the counter creates a queue, wrong totals, and staff who stop trusting the screen.",
  excerpt:
    "A frozen screen, a missing receipt, stock that jumps — unstable sales software makes the whole counter miserable. Stability beats a long feature list.",
  body: [
    {
      type: "lead",
      text: "Stable sales software is not a slogan about a “solid system”. It means the counter can still sell while the customer is standing there. A clever feature that freezes mid-shift is still software that makes the owner miserable.",
    },
    {
      type: "p",
      text: "Saturday night. Eight people at a bubble-tea counter. The cashier taps the third drink and the screen keeps spinning. The customer checks the time. Staff apologize, write the order on paper, take cash, and promise to “enter it later”. At close, paper and screen disagree. One drink was charged twice. One drink is missing.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Dolphin cover: top-down tablet with a dark screen, receipt printer, counter bell, and a coffee cup",
    },
    {
      type: "p",
      text: "If that feels familiar — cafe, bubble tea, restaurant, pet shop, fashion, grocery — this is for you. One counter at rush hour is enough to see why sales software has to stay stable.",
    },
    {
      type: "h2",
      text: "How is stable sales software different from “more features”?",
    },
    {
      type: "p",
      text: "Features are what you open when it is quiet: weekly reports, loyalty points, split bills, discount codes. Stability is what you need while selling: add the item, take payment, save the order, print or send the bill, deduct stock once.",
    },
    {
      type: "p",
      text: "A broken loyalty button on Monday is annoying, and the shop still sells. A frozen screen mid-shift stops the queue. Customers are not waiting for you to restart an app. They are waiting for their drink.",
    },
    {
      type: "p",
      text: "Many shops pick software from a long comparison table. In daily use, the clever buttons sit in a menu nobody opens, while the sale itself is slow or sometimes disappears. Stable sales software finishes the job in front of you first.",
    },
    {
      type: "h2",
      text: "What does a mid-shift bug actually feel like?",
    },
    {
      type: "image",
      src: COUNTER,
      alt: "Evening cafe counter: dark tablet, blank notepad, receipt printer, and a service bell",
    },
    {
      type: "p",
      text: "The first sting is for the customer. One apology is fine. The third apology that week changes the cashier’s voice. People are not angry at “technology”. They are angry about waiting, or about a bill that does not match the number just read aloud.",
    },
    {
      type: "p",
      text: "The second sting is for staff. They did not design the software. They want the queue gone. When the screen cannot be trusted, they keep a parallel notebook. That notebook saves today’s shift and ruins tonight’s close — because now there are two truths.",
    },
    {
      type: "p",
      text: "The third sting reaches the owner later, at close. Open the drawer, open the screen, message the cashier: “did the system eat an order?” Nobody is sure. Cash is there. Transfers are there. The screen is missing lines. You do not know whether to trust the drawer or the software.",
    },
    {
      type: "p",
      text: "Repeat that and people hate opening the app. Not because the layout is ugly. Because each open is another moment of not knowing whether the number is real.",
    },
    {
      type: "h2",
      text: "Failures you see when sales software is unstable",
    },
    {
      type: "p",
      text: "Freeze at payment. The order is on screen, the customer has paid, and nothing confirms. Staff do not know whether to keep the cash. The usual fix is paper — then a late re-entry that gets skipped or duplicated.",
    },
    {
      type: "p",
      text: "The bill prints twice, or does not print while stock already dropped. Or the reverse: a receipt exists and stock never moves, so the shelf runs out while the screen still says available.",
    },
    {
      type: "p",
      text: "Two devices do not see the same order. Counter A sells the last size. Counter B still shows it. Both take money. One customer leaves with nothing. That is not “multi-device”. That is a sync miss during a sale.",
    },
    {
      type: "p",
      text: "After an update, yesterday’s button moves or vanishes. Staff tap from memory and the order does not save. They think they mis-tapped. The software changed the selling step without saying so.",
    },
    {
      type: "p",
      text: "A few minutes offline. Some tools lock the whole counter. Some still let you record and sync later. You need to know which kind you have before rush hour, not during it.",
    },
    {
      type: "h2",
      text: "A checklist before you trust sales software",
    },
    {
      type: "p",
      text: "Do not ask how many features it has. Do a few small things on the actual machine:",
    },
    {
      type: "p",
      text: "• Sell one item, reload. The order is still there, once, with the right amount.\n• Drop the network for a few minutes with a bill open. Can you still take cash and record it later, or does the counter stop?\n• Print or send the bill once. Stock drops once.\n• Two people, two devices, one product. Both see the same stock after one sale.\n• Ask who answers at 8pm on Saturday, and what the shop does while waiting.",
    },
    {
      type: "p",
      text: "If nobody can answer the last question, the tool is not ready for a rush. A prettier report does not patch that.",
    },
    {
      type: "p",
      text: "Picking software before you open follows the same idea: the selling steps have to be clear first. That piece is in [don’t rush your sales software](/news/truoc-khi-mo-cua-hang-dung-voi-chon-phan-mem-ban-hang/). This piece continues it: once you have chosen, the live test is whether it freezes mid-shift.",
    },
    {
      type: "h2",
      text: "When should you ask someone to look at the software?",
    },
    {
      type: "p",
      text: "One odd bug you can redo, while staff still trust the screen, is not a reason to rip everything out. Stop and look again when the same selling step keeps failing, when the parallel notebook has become the habit, or when you no longer dare to close the day’s numbers.",
    },
    {
      type: "p",
      text: "Replacing the product is not step one. Step one is naming the broken step: save, pay, print, or stock. If you cannot name it, new software only moves the frustration.",
    },
    {
      type: "p",
      text: "Dolphin builds [POS for stores that sell goods](/pos/) — counter, stock, cash, shifts — separate from appointment CRM for spas and salons. The demo runs in the browser. The ledger stays on your machine. It is not connected to a real bank. That is not a promise of zero bugs. It is a way to click through one sample shift: sell, take payment, send a bill, and see whether stock moves once.",
    },
    {
      type: "p",
      text: "For how POS differs from a notebook, read [why a store needs POS](/news/tai-sao-can-dung-phan-mem-pos/). Yearly plans: [POS pricing](/chinh-sach-gia-dolphin-2026/#pos). To describe the step that actually breaks, message [Zalo](https://zalo.me/0779937633).",
    },
    {
      type: "h2",
      text: "Close",
    },
    {
      type: "p",
      text: "Stable sales software does not make the customer and the cashier wait on a spinner. Extra features can come later. A mid-shift bug hurts immediately: the queue, the apology, the side notebook, the total you do not trust at night.",
    },
    {
      type: "p",
      text: "Before you add another item to the software menu, sell one real item and reload. If the order remains, the money is right, and stock drops once, then talk about the rest. Try the counter on [Dolphin POS](/pos/). A separate online front: [website design](/services/web/).",
    },
  ],
  faq: [
    {
      q: "What does stable sales software mean?",
      a: "While you are selling, the main steps finish and stick: add the item, take payment, save the order, print or send the bill, deduct stock once. It does not mean zero bugs forever.",
    },
    {
      q: "Why is a mid-shift bug worse than a quiet-hour bug?",
      a: "When the shop is empty you can restart. At rush hour the queue stops, staff apologize, and the later totals drift because someone wrote it on paper.",
    },
    {
      q: "Can more features make up for software that freezes?",
      a: "No. Reports and loyalty do not help if the sale in front of you does not save. The selling step has to be stable first.",
    },
    {
      q: "What if staff keep a parallel notebook?",
      a: "It saves that shift and creates two books. Closing then double-counts or drops lines. A side notebook means the screen is no longer trusted.",
    },
    {
      q: "What should happen to an open bill if the network drops?",
      a: "It depends on the product. Some lock the counter. Some let you record and sync later. Test it when the shop is quiet and agree the fallback before rush hour.",
    },
    {
      q: "If a bill prints twice, should stock drop twice?",
      a: "No. One sale, one deduction. If a reprint moves stock again, write down that step — do not treat it as a printer quirk.",
    },
    {
      q: "How do I know the end-of-day number is trustworthy?",
      a: "Match saved orders to cash, transfers, and credit line by line. If you cannot trace a missing order, do not close on that total.",
    },
    {
      q: "Should I switch software after one bug?",
      a: "Not yet. Switch the conversation when the same selling step keeps failing, staff have abandoned the screen for paper, or you no longer dare to close the day.",
    },
    {
      q: "Does Dolphin POS promise it will never fail?",
      a: "No. The demo runs in the browser, the ledger is local, and it is not tied to a real bank. The point is to try one shift: sell, pay, send a bill, stock once.",
    },
    {
      q: "Where do I try the counter?",
      a: "Open the demo from /pos/ or https://nchithanh.github.io/pos/. To describe a broken step, message Zalo 0779937633. Yearly plans are at /chinh-sach-gia-dolphin-2026/#pos.",
    },
  ],
};

export const phanMemBanHangOnDinhKhiGapLoiCopy = { vi, en };
