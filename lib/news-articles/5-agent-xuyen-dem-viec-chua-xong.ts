import type { NewsArticleCopy } from "@/lib/news-details";

const vi: NewsArticleCopy = {
  title: "5 agent làm xuyên đêm — sáng ra việc nào đã xong thật?",
  metaTitle: "Checklist bàn giao website khi máy báo Done",
  excerpt:
    "Để 5 agent chạy xuyên đêm, sáng dậy thấy màn hình báo xong — nhưng form có gửi về không? Đây là checklist bàn giao website để biết cái gì thật sự xong.",
  body: [
    {
      type: "lead",
      text: "Máy báo “Done” không có nghĩa là website đã sẵn sàng vận hành. Bài này chỉ ra 4 chỗ ảo tưởng hay trượt nhất — và một checklist bàn giao website thực tế để anh chị biết cái gì thật sự xong, cái gì vẫn còn dang dở.",
    },
    {
      type: "p",
      text: "Hình dung một buổi sáng thứ Hai. Một chị chủ spa đăng Facebook: “Tối qua mình để 5 agent chạy xuyên đêm. Sáng dậy website xong rồi anh chị ơi!”",
    },
    {
      type: "p",
      text: "Bình luận đầy câu hỏi: dùng gì, bao nhiêu tiền, cài thế nào. Có một câu ít ai hỏi: website đó sáng ra có nhận được lead không?",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-facebook.jpg",
      alt: "Chủ spa buổi sáng nhìn laptop báo Done, điện thoại hiện bài Facebook khoe 5 agent xuyên đêm, form đặt lịch trên màn hình vẫn trống",
    },
    {
      type: "h2",
      text: "“5 agent làm xuyên đêm” đang nói điều gì — và điều gì bị bỏ qua",
    },
    {
      type: "p",
      text: "Câu chuyện hấp dẫn vì nó chạm đúng nỗi lo của chủ SMB: tốn tiền, tốn thời gian, không biết lập trình, mà lại cần một thứ ra hồn để chạy quảng cáo.",
    },
    {
      type: "p",
      text: "Khi AI agent được gói vào một workflow, nó thật sự có thể tạo file, viết code, đưa trang lên hosting — rồi báo xong. Không ai nói dối ở bước đó.",
    },
    {
      type: "p",
      text: "Vấn đề nằm chỗ khác: máy báo xong theo định nghĩa của máy, không phải theo định nghĩa của anh chị.",
    },
    {
      type: "p",
      text: "Định nghĩa “xong” của máy thường là: file đã tạo, code không báo lỗi, trang load được. Định nghĩa “xong” của chủ shop hay spa là: khách vào được, form đặt lịch chạy được, mình vào sửa được khi cần, và khi hỏng thì có người sửa.",
    },
    {
      type: "p",
      text: "Hai cái đó khác nhau rất xa.",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-done-khong-lead.jpg",
      alt: "Màn hình laptop hiện chữ Done cạnh website spa; điện thoại bên cạnh không có thông báo lead hay form đặt lịch",
    },
    {
      type: "h2",
      text: "4 chỗ ảo tưởng hay trượt nhất",
    },
    {
      type: "h3",
      text: "1. Nhiều agent không có nghĩa là nhiều tiến độ thật",
    },
    {
      type: "p",
      text: "Năm agent chạy song song nghe như năm người cùng làm. Nhưng nếu không ai chia việc rõ, kết quả dễ chồng chéo: agent này tạo file, agent kia ghi đè, agent tiếp theo không biết bản nào mới nhất.",
    },
    {
      type: "p",
      text: "Tốc độ có. Tiến độ thật thì cần người hiểu cả bức tranh — không phải thêm máy.",
    },
    {
      type: "h3",
      text: "2. Xuyên đêm có nghĩa là không ai review",
    },
    {
      type: "p",
      text: "Khi người làm xuyên đêm, sáng ra vẫn có người đọc lại, bắt lỗi, chỉnh. Khi máy làm xuyên đêm, vòng review đó không tự có — trừ khi anh chị đặt sẵn.",
    },
    {
      type: "p",
      text: "Sáng ra anh chị nhận một thứ trông như hoàn chỉnh, nhưng chưa ai nhìn bằng mắt của khách cuối.",
    },
    {
      type: "h3",
      text: "3. Việc không nằm trong prompt thì không được làm",
    },
    {
      type: "p",
      text: "Agent chỉ làm những gì được yêu cầu. Prompt “tạo website cho spa” có thể ra trang đẹp, đủ mục, đúng màu. Nhưng form đặt lịch có gửi về cho anh chị không? Nếu prompt không nhắc, thường là không.",
    },
    {
      type: "p",
      text: "Ai vào sửa giờ mở cửa khi Tết đổi? Khách đặt lịch mà anh chị không nhận thông báo — ai phát hiện? Trang ổn trên máy tính, còn trên điện thoại khách thì sao?",
    },
    {
      type: "p",
      text: "Những thứ này không phải lỗi của AI. Chúng là việc con người phải định nghĩa trước, rồi máy mới chạy.",
    },
    {
      type: "h3",
      text: "4. Sáng hôm sau: nhiều code, ít tài liệu, không ai dám đụng",
    },
    {
      type: "p",
      text: "Anh chị đã bao giờ nhận bàn giao phần mềm không tài liệu, không ai giải thích, và cảm giác “nếu mình sửa thì không biết có hỏng không”?",
    },
    {
      type: "p",
      text: "Đó là thứ có thể xảy ra sau một đêm agent chạy. Code có. Trang mở được. Nhưng không ai hiểu đủ để bảo trì, không có tài liệu cho người mới, không có quy trình khi hỏng.",
    },
    {
      type: "p",
      text: "Khi khách báo trang load chậm, anh chị gọi cho ai?",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-khong-tai-lieu.jpg",
      alt: "Bàn làm việc buổi sáng: nhiều file code trên màn hình, không có tài liệu bàn giao, chủ shop không biết gọi ai khi trang lỗi",
    },
    {
      type: "p",
      text: "Cùng họ với việc tin một quy trình tự động mà không kiểm: copy prompt lạ từ Facebook rồi dán dữ liệu thật. Bài [rủi ro copy prompt AI trên mạng](/news/rui-ro-copy-prompt-chatgpt-doanh-nghiep/) nói về dán dữ liệu. Bài này nói về coi máy chạy = việc xong.",
    },
    {
      type: "h2",
      text: "Checklist bàn giao website trước khi tuyên bố “xong”",
    },
    {
      type: "p",
      text: "Dù website làm bằng agent, công ty hay freelancer — đây là những thứ cần kiểm trước khi anh chị nói với khách “vào đây đặt lịch nhé.” Checklist bàn giao website này dành cho người chịu trách nhiệm vận hành, không phải cho dân kỹ thuật.",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-checklist.jpg",
      alt: "Infographic bảy mục checklist bàn giao website: scope, form, điện thoại, source, người vận hành, bảo hành, tự dùng thử như khách",
    },
    {
      type: "h3",
      text: "1. Scope đã được chốt bằng văn bản",
    },
    {
      type: "p",
      text: "Anh chị và bên làm đồng ý cái gì được làm, cái gì không. Không phải “tự hiểu”. Không có tài liệu scope thì “xong” chưa có định nghĩa.",
    },
    {
      type: "h3",
      text: "2. Form và lead chạy thật",
    },
    {
      type: "p",
      text: "Điền thử một form, bấm gửi, kiểm anh chị có nhận thông báo không — email, Zalo, hay kênh đã chốt. Đây là bước nhiều người bỏ qua nhất, và cũng quan trọng nhất.",
    },
    {
      type: "h3",
      text: "3. Xem được và dùng được trên điện thoại",
    },
    {
      type: "p",
      text: "Phần lớn khách shop và spa vào web từ điện thoại. Mở trên iPhone và một máy Android phổ thông, bấm từng bước đặt lịch. Kiểm chỗ bị che, bị lệch, không bấm được.",
    },
    {
      type: "h3",
      text: "4. Source code và tài liệu đã được bàn giao",
    },
    {
      type: "p",
      text: "Anh chị (hoặc người anh chị tin) cần nắm source và tài liệu cấu trúc. Không phải để tự sửa mọi thứ, mà để không phụ thuộc một bên duy nhất.",
    },
    {
      type: "h3",
      text: "5. Rõ ai vận hành sau khi live",
    },
    {
      type: "p",
      text: "Ai cập nhật giờ, ảnh, dịch vụ khi cần? Ai được vào CMS? Nếu câu trả lời là “không ai” — đó là rủi ro vận hành, không phải vấn đề kỹ thuật.",
    },
    {
      type: "h3",
      text: "6. Bảo hành và quy trình khi hỏng",
    },
    {
      type: "p",
      text: "Sáng mai trang trắng — anh chị gọi ai? Bao lâu được sửa? Có phí không? Hỏi và trả lời trước khi bàn giao, không phải sau sự cố.",
    },
    {
      type: "h3",
      text: "7. Anh chị tự dùng thử với con mắt của khách",
    },
    {
      type: "p",
      text: "Mở trang như lần đầu gặp nó. Có hiểu ngay mình đang ở đâu không? Có biết phải làm gì không? Nếu anh chị — người hiểu dịch vụ nhất — cũng bối rối thì khách sẽ bỏ đi.",
    },
    {
      type: "h2",
      text: "Khi nào agent thật sự hữu ích?",
    },
    {
      type: "p",
      text: "Agent không phải xấu. Nó là lớp tốc độ — nhưng chỉ khi có đủ ba thứ dưới đây.",
    },
    {
      type: "p",
      text: "Việc đã được hiểu rõ. Anh chị biết mình cần gì, input là gì, output trông thế nào. Không giao được việc anh chị chưa định nghĩa.",
    },
    {
      type: "p",
      text: "Có người nhận và review kết quả. Agent cần một người thật ở đầu kia — không để làm thay, mà để kiểm, chỉnh, và chịu trách nhiệm khi sai.",
    },
    {
      type: "p",
      text: "“Xong” có định nghĩa cụ thể. Không phải “máy không báo lỗi”. Mà là form chạy, khách vào được, mình sửa được, và có người sửa khi hỏng.",
    },
    {
      type: "p",
      text: "Khi đủ ba thứ, agent giúp làm nhanh hơn. Thiếu một trong ba, tốc độ chỉ giúp đi đến chỗ sai nhanh hơn.",
    },
    {
      type: "p",
      text: "Anh chị đang ở giai đoạn nào trong ba thứ đó? Câu hỏi đó thường cho thấy ngay agent có phù hợp ở bước này không.",
    },
    {
      type: "h2",
      text: "Máy chạy xong — trách nhiệm vẫn cần người chịu",
    },
    {
      type: "p",
      text: "FOMO với AI là bình thường. Công cụ đang mạnh hơn, dễ dùng hơn. Không ai nên bỏ qua nó.",
    },
    {
      type: "p",
      text: "Nhưng AI agent không tự chịu trách nhiệm khi kết quả không khớp khách thật, tiền thật, thời gian thật của anh chị.",
    },
    {
      type: "p",
      text: "Một website vận hành được không cần làm xuyên đêm. Nó cần scope rõ, một checklist bàn giao website đủ ý, và một bên đứng sau sản phẩm khi có sự cố.",
    },
    {
      type: "p",
      text: "Nếu anh chị cần website rõ scope, có tài liệu bàn giao và bảo hành kỹ thuật — xem [cách Dolphin Software làm website](/services/web/), hoặc [nhắn Zalo](https://zalo.me/0779937633) / [xin báo giá](/#contact).",
    },
  ],
  faq: [
    {
      q: "Website làm bằng AI agent có dùng được cho việc thật không?",
      a: "Được — nếu có người review, có scope rõ trước khi chạy, và có quy trình bàn giao sau khi xong. Vấn đề không phải ở agent, mà ở việc không có định nghĩa “xong” trước khi bắt đầu.",
    },
    {
      q: "Form trên website không gửi được về cho tôi — ai chịu trách nhiệm?",
      a: "Đây là câu hỏi nên hỏi trước khi ký, không phải sau khi live. Nếu bên làm không trả lời rõ — dừng lại và làm rõ scope. Checklist bàn giao website luôn gồm bước điền thử form.",
    },
    {
      q: "Tôi không biết lập trình, tôi có tự kiểm tra được checklist bàn giao không?",
      a: "Được. Hầu hết checklist bàn giao website không cần biết lập trình — chỉ cần biết mình muốn gì từ website, rồi thử dùng như một khách bình thường.",
    },
    {
      q: "Agent tạo ra website rồi, tôi cần thuê ai bảo trì không?",
      a: "Tùy độ phức tạp. Landing đơn giản, anh chị có thể tự cập nhật qua CMS. Site có form, tích hợp, logic nghiệp vụ — nên có bên kỹ thuật sẵn sàng khi sự cố. Xem /services/web/.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Five agents overnight — what is actually done by morning?",
  metaTitle: "Website handover checklist when the machine says Done",
  excerpt:
    "Leave five agents running overnight and wake up to “Done” — but does the form actually notify you? A practical website handover checklist.",
  body: [
    {
      type: "lead",
      text: "A machine saying “Done” does not mean the website is ready to run. This piece names four common illusions — and a practical website handover checklist so you can tell what is finished and what is still open.",
    },
    {
      type: "p",
      text: "Picture a Monday morning. A spa owner posts on Facebook: “I left five agents running overnight. The website is done!”",
    },
    {
      type: "p",
      text: "Comments ask which tool, how much, how to set it up. One question is rarer: did that site actually take a lead this morning?",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-facebook.jpg",
      alt: "Spa owner in the morning looking at a laptop that says Done, phone showing a Facebook post about five overnight agents, booking form still empty",
    },
    {
      type: "h2",
      text: "What “five agents overnight” is really saying — and what it skips",
    },
    {
      type: "p",
      text: "The story lands because it hits an SMB fear: money, time, no coding skills, and still needing something solid enough to run ads.",
    },
    {
      type: "p",
      text: "Packed into a workflow, an AI agent can create files, write code, put a page on hosting — then report done. That step is not a lie.",
    },
    {
      type: "p",
      text: "The gap is elsewhere: the machine’s definition of done is not yours.",
    },
    {
      type: "p",
      text: "For the machine, done often means files exist, the build did not error, the page loads. For a shop or spa owner, done means a customer can enter, the booking form works, you can edit when needed, and someone will fix it when it breaks.",
    },
    {
      type: "p",
      text: "Those are far apart.",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-done-khong-lead.jpg",
      alt: "Laptop screen showing Done next to a spa website; a phone beside it with no lead or booking notification",
    },
    {
      type: "h2",
      text: "Four illusions that slip the most",
    },
    {
      type: "h3",
      text: "1. More agents is not more real progress",
    },
    {
      type: "p",
      text: "Five agents in parallel sounds like five people. Without a clear split, they overlap: one writes a file, another overwrites it, the next does not know which version is current.",
    },
    {
      type: "p",
      text: "You get speed. Real progress still needs someone who sees the whole picture — not more machines.",
    },
    {
      type: "h3",
      text: "2. Overnight means nobody reviewed",
    },
    {
      type: "p",
      text: "When a person works late, morning still brings a reread, bugs, edits. When a machine works overnight, that review loop does not appear unless you set it up.",
    },
    {
      type: "p",
      text: "You wake up to something that looks finished, unseen by a real customer’s eyes.",
    },
    {
      type: "h3",
      text: "3. Work that was not in the prompt does not get done",
    },
    {
      type: "p",
      text: "Agents do what they are asked. “Build a spa website” can yield a pretty page with the right sections and colours. Does the booking form notify you? If the prompt never said so, usually not.",
    },
    {
      type: "p",
      text: "Who changes holiday hours? Who notices a booking that never reached you? Does the page work on a customer’s phone?",
    },
    {
      type: "p",
      text: "That is not an AI failure. It is work people must define before the machine starts.",
    },
    {
      type: "h3",
      text: "4. Morning after: lots of code, little documentation, nobody dares to touch it",
    },
    {
      type: "p",
      text: "Have you ever been handed software with no docs, no walkthrough, and the feeling that one edit might break it?",
    },
    {
      type: "p",
      text: "That can be the morning after agents run. Code exists. The page opens. Nobody understands enough to maintain it.",
    },
    {
      type: "p",
      text: "When a customer says the page is slow, whom do you call?",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-khong-tai-lieu.jpg",
      alt: "Morning desk with many code files on screen, no handover notes, shop owner unsure who to call when the site fails",
    },
    {
      type: "p",
      text: "Same family as trusting an automatic process without a check: copying a stranger’s Facebook prompt and pasting real data. [Copying AI prompts from the web](/news/rui-ro-copy-prompt-chatgpt-doanh-nghiep/) is about pasted data. This article is about treating a machine run as finished work.",
    },
    {
      type: "h2",
      text: "Website handover checklist before you say “done”",
    },
    {
      type: "p",
      text: "Whether the site came from an agent, a studio, or a freelancer — check these before you tell customers to book. This website handover checklist is for the person who has to operate the site, not for engineers.",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-checklist.jpg",
      alt: "Infographic of a seven-item website handover checklist: scope, form, phone, source, operator, warranty, try it as a customer",
    },
    {
      type: "h3",
      text: "1. Scope is written down",
    },
    {
      type: "p",
      text: "You and the builder agree what is in and what is out. Not “you’ll know”. Without a scope note, “done” has no definition.",
    },
    {
      type: "h3",
      text: "2. Forms and leads actually fire",
    },
    {
      type: "p",
      text: "Fill a form, submit, check that you get the notice — email, Zalo, or the channel you agreed. The step people skip most, and the one that matters most.",
    },
    {
      type: "h3",
      text: "3. It works on a phone",
    },
    {
      type: "p",
      text: "Most shop and spa visitors arrive on mobile. Open an iPhone and a common Android, tap through booking. Watch for overlap, shift, dead taps.",
    },
    {
      type: "h3",
      text: "4. Source and docs were handed over",
    },
    {
      type: "p",
      text: "You (or someone you trust) should hold the source and a short structure note. Not so you fix everything yourself — so you are not locked to one vendor.",
    },
    {
      type: "h3",
      text: "5. Someone operates it after go-live",
    },
    {
      type: "p",
      text: "Who updates hours, photos, services? Who has CMS access? “Nobody” is an operations risk, not a tech quirk.",
    },
    {
      type: "h3",
      text: "6. Warranty and a path when it breaks",
    },
    {
      type: "p",
      text: "If the page is blank tomorrow, whom do you call? How fast is a fix? Is there a fee? Answer this before handover, not after an incident.",
    },
    {
      type: "h3",
      text: "7. You try it as a first-time customer",
    },
    {
      type: "p",
      text: "Open the page as if you have never seen it. Do you know where you are? What to do next? If you — the person who knows the service best — are lost, customers leave.",
    },
    {
      type: "h2",
      text: "When is an agent actually useful?",
    },
    {
      type: "p",
      text: "Agents are not the enemy. They are a speed layer — if three things are in place.",
    },
    {
      type: "p",
      text: "The work is understood. You know what you need, what goes in, what “good” looks like. You cannot delegate what you have not defined.",
    },
    {
      type: "p",
      text: "Someone receives and reviews the output. An agent needs a real person on the other end — not to replace the work, but to check, adjust, and own the result when it is wrong.",
    },
    {
      type: "p",
      text: "“Done” is specific. Not “the machine did not error”. Form works, customers can enter, you can edit, someone fixes breakage.",
    },
    {
      type: "p",
      text: "With all three, agents make you faster. Missing one, speed only gets you to the wrong place sooner.",
    },
    {
      type: "p",
      text: "Which of the three are you in? That question usually shows whether an agent fits this step.",
    },
    {
      type: "h2",
      text: "The machine finished — a person still owns the outcome",
    },
    {
      type: "p",
      text: "FOMO around AI is normal. Tools are stronger and easier. Nobody should ignore them.",
    },
    {
      type: "p",
      text: "An AI agent still cannot own the outcome when it does not match a real customer, real money, and your real time.",
    },
    {
      type: "p",
      text: "A site that can operate does not need an all-nighter. It needs clear scope, a complete website handover checklist, and someone standing behind the product when things break.",
    },
    {
      type: "p",
      text: "If you need a site with clear scope, handover docs, and technical warranty — see [how Dolphin Software builds websites](/services/web/), or [message on Zalo](https://zalo.me/0779937633) / [request a quote](/#contact).",
    },
  ],
  faq: [
    {
      q: "Can an AI-agent website be used for real work?",
      a: "Yes — if someone reviews the result, scope is clear before the run, and handover exists after. The issue is not the agent. It is starting without a definition of done.",
    },
    {
      q: "The form does not reach me — who is responsible?",
      a: "Ask before you sign, not after go-live. If the builder has no clear answer, stop and fix scope. A website handover checklist always includes a live form test.",
    },
    {
      q: "I don’t code. Can I still run the handover checklist?",
      a: "Yes. Most of a website handover checklist is not engineering — know what you want from the site, then use it like a normal customer.",
    },
    {
      q: "The agent built a site. Do I still need maintenance?",
      a: "Depends on complexity. A simple landing page may be enough to update in a CMS. Forms, integrations, and business logic need someone technical on call. See /services/web/.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title: "エージェント5体が夜通し作業——朝、本当に終わっている仕事はどれか",
  metaTitle: "機械が Done と出しても、サイト引き渡しチェックは別",
  excerpt:
    "エージェント5体を夜通し走らせ、朝に Done。フォームは届くのか。何が本当に終わったかを見る、サイト引き渡しチェックリスト。",
  body: [
    {
      type: "lead",
      text: "機械が「Done」と出しても、サイトが運用できるとは限りません。よく滑る幻想を4つ挙げ、何が終わり何が未完かを見る実務的なサイト引き渡しチェックリストを置きます。",
    },
    {
      type: "p",
      text: "月曜の朝を想像してください。スパの店主がFacebookに書く。「昨夜、エージェント5体を夜通し動かした。朝起きたらサイトは完成！」",
    },
    {
      type: "p",
      text: "コメントは「何を使った？」「いくらか？」「どう入れる？」。あまり聞かれないのは、「そのサイト、今朝リードを取れましたか？」です。",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-facebook.jpg",
      alt: "朝のスパ店主が Done と出たノートPCを見ている。スマホには夜通しエージェント5体の投稿。予約フォームは空のまま",
    },
    {
      type: "h2",
      text: "「夜通し5体」が言っていること——と、抜けていること",
    },
    {
      type: "p",
      text: "話が刺さるのは、SMBの不安そのものだからです。お金、時間、コードが書けない。それでも広告を回せる形が欲しい。",
    },
    {
      type: "p",
      text: "ワークフローに載せたAIエージェントは、ファイルを作り、コードを書き、ホスティングへ上げ、「完了」と報告できます。その一歩に嘘はありません。",
    },
    {
      type: "p",
      text: "ずれは別の場所にあります。機械の「完了」と、あなた方の「完了」は違う。",
    },
    {
      type: "p",
      text: "機械にとっての完了は、ファイルがある、エラーが出ない、ページが開く、が多い。店やスパにとっての完了は、お客が入る、予約フォームが動く、必要なときに自分で直せる、壊れたら直す人がいる、です。",
    },
    {
      type: "p",
      text: "この二つはかなり離れています。",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-done-khong-lead.jpg",
      alt: "ノートPCに Done とスパのサイト。横のスマホにリードや予約の通知はない",
    },
    {
      type: "h2",
      text: "いちばん滑りやすい幻想、4つ",
    },
    {
      type: "h3",
      text: "1. エージェントが多い＝本当の進捗、ではない",
    },
    {
      type: "p",
      text: "5体同時は、5人で作業しているように聞こえます。役割が分かれていなければ重なります。一方がファイルを作り、一方が上書きし、次がどれが最新か分からない。",
    },
    {
      type: "p",
      text: "速さは出ます。本当の進捗には、全体を見ている人が要ります。機械を足すことではありません。",
    },
    {
      type: "h3",
      text: "2. 夜通し＝誰もレビューしていない",
    },
    {
      type: "p",
      text: "人が夜通し作業しても、朝には読み直し・バグ・修正があります。機械が夜通し動くと、その確認は自動では生まれません。あらかじめ置いたときだけです。",
    },
    {
      type: "p",
      text: "朝に届くのは、完成に見えるもの。最終のお客の目では、まだ見ていない。",
    },
    {
      type: "h3",
      text: "3. 指示にない仕事は、行われない",
    },
    {
      type: "p",
      text: "エージェントは頼まれたことだけします。「スパのサイトを作って」で、見た目の良いページは出ることがあります。予約フォームは届くのか。指示になければ、たいてい届きません。",
    },
    {
      type: "p",
      text: "年末年始の営業時間は誰が直すのか。予約したのに通知が来ないことを、誰が気づくのか。お客のスマホではどう見えるのか。",
    },
    {
      type: "p",
      text: "それはAIの欠陥ではありません。人が先に定義し、それから機械を走らせる仕事です。",
    },
    {
      type: "h3",
      text: "4. 翌朝：コードは多い、資料は少ない、誰も触れない",
    },
    {
      type: "p",
      text: "説明も資料もなくソフトを渡され、「触ると壊れるかも」と感じたことはありませんか。",
    },
    {
      type: "p",
      text: "エージェントが走った翌朝に、それが起き得ます。コードはある。ページは開く。保守できるほど理解している人はいない。",
    },
    {
      type: "p",
      text: "お客が「遅い」と言ったとき、誰に電話しますか。",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-khong-tai-lieu.jpg",
      alt: "朝の机。画面にコードファイルが並び、引き渡し資料はなく、店主は故障時に誰へ連絡するか分からない",
    },
    {
      type: "p",
      text: "確認なしで自動の流れを信じる、という点では同じ仲間です。Facebookの見知らぬプロンプトをコピーし、本物のデータを貼る話は[ウェブのAIプロンプトをコピーするリスク](/news/rui-ro-copy-prompt-chatgpt-doanh-nghiep/)へ。本記事は、機械が走ったことを仕事の完了とみなす話です。",
    },
    {
      type: "h2",
      text: "「完了」と言う前の、サイト引き渡しチェックリスト",
    },
    {
      type: "p",
      text: "エージェントでも会社でもフリーランスでも、お客に「ここで予約して」と言う前に見る項目です。このサイト引き渡しチェックリストは、運用の責任を持つ人向けで、技術者専用ではありません。",
    },
    {
      type: "image",
      src: "/news/5-agent-xuyen-dem-checklist.jpg",
      alt: "サイト引き渡しチェック7項目の図：範囲、フォーム、スマホ、ソース、運用者、保証、お客として使う",
    },
    {
      type: "h3",
      text: "1. 範囲が文書で固まっている",
    },
    {
      type: "p",
      text: "何をやり、何をやらないか、作り手と合意する。「察して」ではない。範囲のメモがなければ、「完了」の定義がありません。",
    },
    {
      type: "h3",
      text: "2. フォームとリードが本当に動く",
    },
    {
      type: "p",
      text: "試しに送り、メールやZaloなど決めた経路で届くかを見る。いちばん飛ばされやすく、いちばん大事な一歩です。",
    },
    {
      type: "h3",
      text: "3. スマホで見られ、使える",
    },
    {
      type: "p",
      text: "店やスパのお客の多くはスマホから来ます。iPhoneとよくあるAndroidで予約の手順を踏む。隠れ、ずれ、押せない箇所を見る。",
    },
    {
      type: "h3",
      text: "4. ソースと資料が渡されている",
    },
    {
      type: "p",
      text: "ご自身か、信頼できる人がソースと短い構成メモを持つ。全部自分で直すためではなく、一社に縛られないためです。",
    },
    {
      type: "h3",
      text: "5. 公開後、誰が運用するかが分かる",
    },
    {
      type: "p",
      text: "営業時間・写真・メニューは誰が更新するか。CMSの権限は誰か。「誰もいない」は技術の問題ではなく、運用のリスクです。",
    },
    {
      type: "h3",
      text: "6. 壊れたときの保証と手順",
    },
    {
      type: "p",
      text: "翌朝ページが真っ白なら、誰に電話するか。どれくらいで直るか。費用は。事故のあとではなく、引き渡しの前に答える。",
    },
    {
      type: "h3",
      text: "7. 初めてのお客の目で自分で使う",
    },
    {
      type: "p",
      text: "初めて見るつもりで開く。今どこにいるか分かるか。次に何をすればよいか。サービスをいちばん知るあなたが迷うなら、お客は離れます。",
    },
    {
      type: "h2",
      text: "エージェントが本当に役立つのは、いつか",
    },
    {
      type: "p",
      text: "エージェントは悪ではありません。速さの層です。ただし、次の三つが揃ったとき。",
    },
    {
      type: "p",
      text: "仕事が分かっている。何が必要か、入力は何か、よい出力はどんな形か。定義していない仕事は渡せません。",
    },
    {
      type: "p",
      text: "結果を受け取り、確認する人がいる。向こうに本物の人が要ります。代わりに全部やる人ではなく、点検し、直し、間違ったときに責任を持つ人です。",
    },
    {
      type: "p",
      text: "「完了」が具体的。エラーが出ない、ではない。フォームが動く、お客が入る、自分で直せる、壊れたら直す人がいる。",
    },
    {
      type: "p",
      text: "三つ揃えば速くなります。一つ欠ければ、速さは間違った場所へ早く着くだけです。",
    },
    {
      type: "p",
      text: "今、三つのうちどこにいますか。その問いが、この段階でエージェントが合うかをほぼ示します。",
    },
    {
      type: "h2",
      text: "機械は終わっても、責任は人が持つ",
    },
    {
      type: "p",
      text: "AIへの焦りは普通です。道具は強く、使いやすくなっています。無視する理由はありません。",
    },
    {
      type: "p",
      text: "それでもAIエージェントは、本物のお客・お金・時間と結果がずれたとき、責任を代わりに取れません。",
    },
    {
      type: "p",
      text: "運用できるサイトに、夜通しは不要です。必要なのは明確な範囲、十分なサイト引き渡しチェックリスト、問題が起きたときに立つ相手です。",
    },
    {
      type: "p",
      text: "範囲が明確で、引き渡し資料と技術保証があるサイトが必要なら、[Dolphin Softwareのサイトの作り方](/services/web/)を見るか、[Zalo](https://zalo.me/0779937633) / [見積もり](/#contact)へ。",
    },
  ],
  faq: [
    {
      q: "AIエージェントで作ったサイトは、本番に使えますか？",
      a: "使えます。ただし結果を確認する人、走る前の範囲、終わったあとの引き渡しがある場合です。問題はエージェントではなく、「完了」の定義がないまま始めることです。",
    },
    {
      q: "フォームが届かない——誰の責任ですか？",
      a: "公開後ではなく、契約前に聞く質問です。作り手が答えられないなら、いったん止めて範囲を固めます。サイト引き渡しチェックリストには、必ずフォームの実送信があります。",
    },
    {
      q: "コードが書けません。引き渡しチェックは自分でできますか？",
      a: "できます。サイト引き渡しチェックリストの大半は技術ではありません。サイトに何を求めるかを知り、普通のお客として使ってみることです。",
    },
    {
      q: "エージェントがサイトを作りました。保守は必要ですか？",
      a: "複雑さ次第です。簡単なランディングならCMSで自分更新できることが多いです。フォーム、連携、業務の流れがあるなら、障害時に技術の相手がいた方がよいです。/services/web/ を参照。",
    },
  ],
};

export const fiveAgentXuyenDemViecChuaXongCopy = { vi, en, ja };
