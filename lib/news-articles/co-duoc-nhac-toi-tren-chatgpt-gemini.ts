import type { NewsArticleCopy } from "@/lib/news-details";

const COVER = "/news/co-duoc-nhac-toi-chatgpt-gemini-cover.jpg";
const CHECKLIST = "/news/co-duoc-nhac-toi-chatgpt-gemini-checklist.jpg";
const TEST = "/news/co-duoc-nhac-toi-chatgpt-gemini-test.jpg";

const vi: NewsArticleCopy = {
  title: "Bạn có được nhắc tới khi khách tìm trên ChatGPT, Gemini?",
  metaTitle: "Được nhắc tới trên ChatGPT, Gemini — doanh nghiệp cần gì?",
  metaDescription:
    "Khách hỏi ChatGPT/Gemini trước khi gọi tiệm. Vì sao nhiều SMB không được nhắc tên — và checklist hiện diện số (website, FAQ, schema) thực tế.",
  excerpt:
    "Khách hỏi ChatGPT hay Gemini trước khi nhắn Zalo. Nếu câu trả lời không nhắc tên tiệm anh chị — cơ hội đã trôi ở bước tìm hiểu. Bài này nói về tín hiệu AI đọc được, và checklist làm trước khi nghĩ tới quảng cáo.",
  body: [
    {
      type: "lead",
      text: "Được nhắc tới trên ChatGPT hay Gemini nghĩa là tên tiệm, dịch vụ hoặc địa chỉ của anh chị xuất hiện trong câu trả lời khi khách hỏi bằng ngôn ngữ tự nhiên — không chỉ khi họ gõ đúng tên trên Google. Nhiều chủ spa, salon, clinic vẫn chỉ tối ưu fanpage; trong khi khách đang hỏi AI trước khi gọi.",
    },
    {
      type: "p",
      text: "Hình quen: tối, khách gõ “spa gần quận 7 còn lịch tối nay”, “phòng khám da giá khoảng bao nhiêu”, “lớp học guitar cho người mới”. Họ không mở mười tab. Họ đọc một đoạn trả lời — rồi mới nhắn Zalo chỗ được nhắc.",
    },
    {
      type: "p",
      text: "Nếu đoạn đó không có tên anh chị, không phải AI “ghét” tiệm. Thường là AI không đủ tín hiệu rõ ràng trên web để trích dẫn anh chị một cách an toàn.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Chủ tiệm nhìn laptop hiện câu trả lời ChatGPT và Gemini liệt kê vài chỗ khác, thiếu tên tiệm của mình",
    },
    {
      type: "h2",
      text: "AI trả lời lấy tín hiệu từ đâu?",
    },
    {
      type: "p",
      text: "Không có một công tắc “đăng ký để ChatGPT nhắc tên”. Các hệ thống trả lời thường dựa trên nội dung công khai họ có thể đọc và tin: trang web rõ ràng, FAQ trả lời được, thông tin địa chỉ–giờ–dịch vụ nhất quán, và cấu trúc trang máy đọc được (meta, heading, schema khi có).",
    },
    {
      type: "p",
      text: "Fanpage đẹp giúp người. Nhưng khi AI cần một câu trích dẫn độc lập — “tiệm này làm gì, ở đâu, giá khoảng nào” — một trang dịch vụ và FAQ trên website thường hữu ích hơn một album ảnh.",
    },
    {
      type: "p",
      text: "Đây không phải lời hứa “làm schema là lên top AI”. Chỉ là điều kiện tối thiểu: có chỗ công khai, rõ, khớp nhau — để nếu AI nhắc tới ngành của anh chị, nó có nguồn để nhắc đúng.",
    },
    {
      type: "h2",
      text: "Checklist hiện diện số trước khi đổ ads",
    },
    {
      type: "image",
      src: CHECKLIST,
      alt: "Ba thẻ trên bàn: Website dịch vụ rõ, FAQ hỏi đáp, Schema cấu trúc dữ liệu",
    },
    {
      type: "h3",
      text: "1. Website hoặc landing nói rõ dịch vụ",
    },
    {
      type: "p",
      text: "Một trang đủ: anh chị làm gì, cho ai, ở đâu, làm sao liên hệ. Heading thật (H1/H2), không chỉ chữ lớn trong ảnh. Form hoặc Zalo dễ bấm. Xem hướng làm [website doanh nghiệp](/services/web/) hoặc [landing](/services/landing/) nếu đang trống nền.",
    },
    {
      type: "h3",
      text: "2. FAQ viết như câu trả lời độc lập",
    },
    {
      type: "p",
      text: "Mỗi câu hỏi một đoạn ngắn: “Có chỗ đậu xe không?”, “Đặt lịch thế nào?”, “Giá gội đầu khoảng bao nhiêu?”. Viết để người và máy đều cắt được câu trả lời — không cần đọc cả trang.",
    },
    {
      type: "h3",
      text: "3. Thông tin khớp trên mọi kênh",
    },
    {
      type: "p",
      text: "Tên tiệm, địa chỉ, giờ mở cửa, số điện thoại — website, Google Business, Zalo OA nên cùng một bộ. AI và khách đều bối rối khi mỗi nơi một giờ đóng cửa.",
    },
    {
      type: "h3",
      text: "4. Cấu trúc kỹ thuật nền (khi đã có site)",
    },
    {
      type: "p",
      text: "Meta title/description đúng trang, tốc độ ổn trên điện thoại, sitemap. Schema FAQ hoặc LocalBusiness khi khớp nội dung thật — không nhồi keyword giả. Đây là lớp hỗ trợ crawler và công cụ trả lời, không thay nội dung kém.",
    },
    {
      type: "h2",
      text: "Tự kiểm tra trong năm phút",
    },
    {
      type: "image",
      src: TEST,
      alt: "Người dùng hỏi ChatGPT và Gemini về spa gần nhà trên điện thoại và laptop",
    },
    {
      type: "p",
      text: "1. Mở ChatGPT hoặc Gemini (tài khoản anh chị dùng hàng ngày).",
    },
    {
      type: "p",
      text: "2. Hỏi như khách: “spa / salon / phòng khám [khu vực] nên chọn chỗ nào?”, hoặc “tiệm [tên] có uy tín không?”.",
    },
    {
      type: "p",
      text: "3. Ghi lại: có nhắc tên không? Nhắc đúng dịch vụ không? Có dẫn sang đối thủ không?",
    },
    {
      type: "p",
      text: "4. Lặp lại sau khi anh chị sửa website/FAQ vài tuần — đừng kỳ vọng đổi trong một đêm.",
    },
    {
      type: "p",
      text: "Nếu câu trả lời chỉ nói chung chung hoặc chỉ nhắc chuỗi lớn: checklist ở trên thường là chỗ bắt đầu, không phải mua thêm một tool AI nữa.",
    },
    {
      type: "h2",
      text: "Liên quan tới CRM và chăm khách — khi nào?",
    },
    {
      type: "p",
      text: "Được AI nhắc tên chỉ là bước tìm thấy. Sau đó khách vẫn cần lịch, follow-up, trả lời ngoài giờ. Dolphin bắt đầu từ vận hành: [CRM thuê theo kỳ](/dolphin-ops/), [Care trên Web/Zalo/Messenger](/dolphin-care/) khi đã có nền. Website có thể đi theo [quyền lợi combo](/#popular-services) — không phải sản phẩm mở đầu.",
    },
    {
      type: "p",
      text: "Muốn rà website và FAQ trước khi chạy ads AI: [nhắn Zalo](https://zalo.me/0779937633) hoặc [gửi brief](/#contact). Kể ngành và khu vực — cùng xem khách hỏi gì mà tiệm chưa trả lời trên web.",
    },
  ],
  faq: [
    {
      q: "Làm sao biết tiệm mình có được ChatGPT hay Gemini nhắc tới không?",
      a: "Hỏi như khách thật (dịch vụ + khu vực, hoặc tên tiệm). Ghi lại có nhắc tên và có đúng dịch vụ không. Lặp lại sau khi cập nhật website/FAQ — kết quả có thể đổi theo thời điểm và phiên bản AI.",
    },
    {
      q: "Chỉ có fanpage Facebook có đủ để AI nhắc tới không?",
      a: "Thường chưa đủ. AI cần câu trả lời trích dẫn được về dịch vụ, địa chỉ, giờ mở cửa. Website hoặc landing rõ ràng thường hữu ích hơn album ảnh trên fanpage.",
    },
    {
      q: "Schema JSON có đảm bảo được nhắc trên ChatGPT không?",
      a: "Không đảm bảo. Schema giúp máy đọc cấu trúc khi khớp nội dung thật. Không thay trang trống hoặc copy mơ hồ. Không nhồi schema giả.",
    },
    {
      q: "Có cần chạy ChatGPT Ads để được nhắc tên không?",
      a: "Ads (nếu có ở thị trường của anh chị) là thẻ tài trợ — khác với được nhắc trong câu trả lời tự nhiên. Nên có trang đích và FAQ rõ trước khi đổ ngân sách. Xem thêm bài ChatGPT Ads trên /news/.",
    },
    {
      q: "Dolphin Software giúp gì ở bước này?",
      a: "Giúp dựng website/landing rõ, FAQ và nền kỹ thuật; khi cần thì gắn CRM và Care theo combo. Liên hệ Zalo hoặc /#contact — không ép gói.",
    },
  ],
};

const en: NewsArticleCopy = {
  title: "Do ChatGPT and Gemini mention your business when customers ask?",
  metaTitle: "Mentioned on ChatGPT & Gemini — what SMBs need first",
  metaDescription:
    "Customers ask ChatGPT or Gemini before they message you. Why many SMBs never get named — and a practical checklist: website, FAQ, consistent facts, light schema.",
  excerpt:
    "Customers ask ChatGPT or Gemini before they open Zalo. If the answer never names your shop, the chance already slipped at the research step. Here is what AI can cite — and what to fix before you buy more ads.",
  body: [
    {
      type: "lead",
      text: "Being mentioned on ChatGPT or Gemini means your shop name, services, or address shows up in a natural-language answer — not only when someone types your exact brand into Google. Many spa, salon, and clinic owners still polish the fanpage while buyers ask AI first.",
    },
    {
      type: "p",
      text: "Familiar scene: at night someone asks “spa near District 7 with a slot tonight”, “rough price for a skin clinic”, “guitar class for beginners”. They do not open ten tabs. They read one answer — then message the place that was named.",
    },
    {
      type: "p",
      text: "If that answer skips your name, AI is not “against” you. Often it lacks clear, public signals it can cite safely.",
    },
    {
      type: "image",
      src: COVER,
      alt: "Shop owner at a laptop showing ChatGPT and Gemini answers listing other places, missing their own shop name",
    },
    {
      type: "h2",
      text: "Where do AI answers get their signals?",
    },
    {
      type: "p",
      text: "There is no switch labeled “register to be named in ChatGPT”. Answer systems usually lean on public content they can read and trust: a clear website, citable FAQs, consistent address–hours–services, and machine-readable structure (meta, headings, schema when it matches reality).",
    },
    {
      type: "p",
      text: "A pretty fanpage helps people. When AI needs a standalone sentence — what you do, where you are, rough pricing — a service page and FAQ on your site usually beat a photo album.",
    },
    {
      type: "p",
      text: "This is not a promise that “schema puts you on top of AI”. It is a minimum: clear, consistent public facts — so if AI talks about your niche, it has something accurate to cite.",
    },
    {
      type: "h2",
      text: "Digital presence checklist before you spend on ads",
    },
    {
      type: "image",
      src: CHECKLIST,
      alt: "Three desk cards: clear services website, FAQ Q&A, schema structured data",
    },
    {
      type: "h3",
      text: "1. A website or landing that states the offer",
    },
    {
      type: "p",
      text: "One solid page: what you do, for whom, where, how to contact. Real headings (H1/H2), not only text baked into images. Easy Zalo or form. See [business websites](/services/web/) or [landing pages](/services/landing/) if the foundation is missing.",
    },
    {
      type: "h3",
      text: "2. FAQs written as standalone answers",
    },
    {
      type: "p",
      text: "One short answer per question: parking, how to book, rough price bands. Write so a person or a model can quote the line without reading the whole page.",
    },
    {
      type: "h3",
      text: "3. Facts that match everywhere",
    },
    {
      type: "p",
      text: "Name, address, hours, phone — website, Google Business, Zalo OA should share one set. Mismatched closing times confuse both AI and customers.",
    },
    {
      type: "h3",
      text: "4. Light technical structure (once you have a site)",
    },
    {
      type: "p",
      text: "Per-page meta, mobile speed, sitemap. FAQ or LocalBusiness schema only when it mirrors real copy — no fake keyword stuffing. Structure helps crawlers; it does not fix empty content.",
    },
    {
      type: "h2",
      text: "A five-minute self-check",
    },
    {
      type: "image",
      src: TEST,
      alt: "Someone asking ChatGPT and Gemini about a nearby spa on phone and laptop",
    },
    {
      type: "p",
      text: "1. Open ChatGPT or Gemini on the account you use daily.",
    },
    {
      type: "p",
      text: "2. Ask like a customer: “which spa / salon / clinic in [area]?”, or “is [your shop name] trustworthy?”.",
    },
    {
      type: "p",
      text: "3. Note: named or not? Services correct? Mostly competitors?",
    },
    {
      type: "p",
      text: "4. Retest a few weeks after you fix the site/FAQ — do not expect overnight change.",
    },
    {
      type: "p",
      text: "If answers stay vague or only name big chains, the checklist above is usually the start — not another AI tool purchase.",
    },
    {
      type: "h2",
      text: "When CRM and care come in",
    },
    {
      type: "p",
      text: "Getting named is only discovery. Guests still need booking, follow-up, and after-hours replies. Dolphin starts from ops: [term CRM](/dolphin-ops/), [Care on Web/Zalo/Messenger](/dolphin-care/) when the foundation exists. A website can follow [combo rights](/#popular-services) — it is not the opening product.",
    },
    {
      type: "p",
      text: "Want a pass on website and FAQ before AI ads: [message Zalo](https://zalo.me/0779937633) or [send a brief](/#contact). Tell us your vertical and area — we look at what customers ask that your site still does not answer.",
    },
  ],
  faq: [
    {
      q: "How do I know if ChatGPT or Gemini mentions my shop?",
      a: "Ask like a real customer (service + area, or your shop name). Note whether you are named and whether services match. Retest after site/FAQ updates — results can vary by time and model version.",
    },
    {
      q: "Is a Facebook page enough to get mentioned?",
      a: "Usually not. AI needs citable facts about services, address, and hours. A clear website or landing often helps more than a photo album.",
    },
    {
      q: "Does JSON schema guarantee a ChatGPT mention?",
      a: "No. Schema helps machines read structure when it matches real content. It does not fix an empty page or vague copy. Do not fake schema.",
    },
    {
      q: "Do I need ChatGPT Ads to be named?",
      a: "Sponsored placements (where available) are different from organic answer mentions. Get a clear destination and FAQ before spending. See related ChatGPT Ads posts under /news/.",
    },
    {
      q: "How can Dolphin Software help here?",
      a: "Clear website/landing, FAQ, and technical basics; CRM and Care when you need the ops layer. Contact via Zalo or /#contact — no package pressure.",
    },
  ],
};

const ja: NewsArticleCopy = {
  title: "ChatGPT・Geminiで客に名前を挙げてもらえていますか？",
  metaTitle: "ChatGPT・Geminiに言及されるためにSMBが先に整えること",
  metaDescription:
    "客は連絡前にChatGPTやGeminiに聞きます。名前が出ない理由と、サイト・FAQ・情報の一致・軽いschemaのチェックリスト。",
  excerpt:
    "客はZaloの前にChatGPTやGeminiに聞きます。回答に店名が無いなら、調査の段階で機会が流れています。AIが引用できる信号と、広告の前に直すリストです。",
  body: [
    {
      type: "lead",
      text: "ChatGPTやGeminiで言及されるとは、客が自然な言葉で聞いたときに店名・サービス・住所が回答に出ることです。Googleで正式名称を打ったときだけではありません。スパ・サロン・クリニックの多くはファンページを磨く一方で、客は先にAIに聞いています。",
    },
    {
      type: "p",
      text: "夜、「今夜空いている第7区のスパ」「皮膚科のだいたいの料金」「初心者のギター教室」。タブを10個は開きません。一段落を読んで、名前が出た店にメッセージします。",
    },
    {
      type: "p",
      text: "名前が無いのはAIが嫌っているからではないことが多い。安全に引用できる公開情報が足りないだけです。",
    },
    {
      type: "image",
      src: COVER,
      alt: "店主がノートPCでChatGPTとGeminiの回答を見ており、他店ばかりで自店名が無い",
    },
    {
      type: "h2",
      text: "AIの回答はどこから信号を取るか",
    },
    {
      type: "p",
      text: "「ChatGPTに登録して名前を出す」スイッチはありません。回答系は読めて信頼できる公開情報に寄りがちです。明確なサイト、引用できるFAQ、住所・営業時間・サービスの一致、機械が読める構造（meta、見出し、実態に合うschema）。",
    },
    {
      type: "p",
      text: "きれいなファンページは人には効きます。AIが一文で引用したいとき — 何をして、どこで、おおよその価格 — は、サイト上のサービスページとFAQの方が写真アルバムより役立つことが多いです。",
    },
    {
      type: "p",
      text: "「schemaを付ければAIの上位」という約束ではありません。最低条件は、明確で一致した公開事実です。",
    },
    {
      type: "h2",
      text: "広告の前のデジタル存在チェック",
    },
    {
      type: "image",
      src: CHECKLIST,
      alt: "机の上の3カード：サービスサイト、FAQ、Schema",
    },
    {
      type: "h3",
      text: "1. サービスが分かるサイト／ランディング",
    },
    {
      type: "p",
      text: "何を・誰に・どこで・どう連絡するか。本物の見出し（H1/H2）。画像の中の文字だけでは不十分。Zaloやフォームが押しやすい。[企業サイト](/services/web/)や[ランディング](/services/landing/)を参照。",
    },
    {
      type: "h3",
      text: "2. 単独で引用できるFAQ",
    },
    {
      type: "p",
      text: "駐車、予約方法、おおよその価格帯など、質問ごとに短い答え。ページ全体を読まなくても切って使える文にします。",
    },
    {
      type: "h3",
      text: "3. チャネル間で事実を一致",
    },
    {
      type: "p",
      text: "店名、住所、営業時間、電話 — サイト、Googleビジネス、Zalo OAで同じセット。閉店時間がバラバラだとAIも客も迷います。",
    },
    {
      type: "h3",
      text: "4. 軽い技術基盤（サイトがある場合）",
    },
    {
      type: "p",
      text: "ページごとのmeta、モバイル速度、sitemap。FAQやLocalBusinessのschemaは中身と一致するときだけ。空のページは直せません。",
    },
    {
      type: "h2",
      text: "5分の自己チェック",
    },
    {
      type: "image",
      src: TEST,
      alt: "スマホとノートPCで近くのスパについてChatGPTとGeminiに聞いている人",
    },
    {
      type: "p",
      text: "1. いつものアカウントでChatGPTまたはGeminiを開く。",
    },
    {
      type: "p",
      text: "2. 客として聞く：「[エリア]のスパ／サロン／クリニックは？」「[店名]は信頼できる？」",
    },
    {
      type: "p",
      text: "3. 記録：名前はあるか、サービスは合っているか、競合ばかりか。",
    },
    {
      type: "p",
      text: "4. サイト／FAQを直して数週間後に再テスト。一夜での変化は期待しない。",
    },
    {
      type: "p",
      text: "回答が曖昧か大手ばかりなら、上のチェックリストが入口です。別のAIツールを買う話ではありません。",
    },
    {
      type: "h2",
      text: "CRMとケアはいつか",
    },
    {
      type: "p",
      text: "名前が出るのは発見だけです。その後も予約・フォロー・時間外対応が要ります。Dolphinは運用から：[期間契約CRM](/dolphin-ops/)、土台があるときの[Care（Web/Zalo/Messenger）](/dolphin-care/)。サイトは[コンボ権利](/#popular-services)に沿う場合があり、入口商品ではありません。",
    },
    {
      type: "p",
      text: "AI広告の前にサイトとFAQを見たい：[Zalo](https://zalo.me/0779937633)または[brief](/#contact)。業種とエリアを教えてください。客が聞いているのにサイトが答えていない点を一緒に見ます。",
    },
  ],
  faq: [
    {
      q: "ChatGPTやGeminiに店が言及されているかどうやって知る？",
      a: "本物の客のように聞きます（サービス＋エリア、または店名）。名前とサービスの正否を記録。サイト／FAQ更新後に再テスト。時期やモデルで結果は変わり得ます。",
    },
    {
      q: "Facebookページだけで十分？",
      a: "多くの場合不足。AIはサービス・住所・営業時間の引用できる事実が要ります。明確なサイト／LPの方が写真アルバムより役立つことが多いです。",
    },
    {
      q: "JSON schemaでChatGPT言及は保証される？",
      a: "保証されません。実態と一致する構造の読みやすさに役立つだけ。空ページや曖昧な文は直りません。偽のschemaは避けてください。",
    },
    {
      q: "言及されるためにChatGPT Adsが必要？",
      a: "スポンサー枠（利用可能な地域）は自然な回答での言及とは別です。予算の前に明確な着地ページとFAQを。関連記事は /news/ を参照。",
    },
    {
      q: "Dolphin Softwareはこの段階で何ができる？",
      a: "明確なサイト／LP、FAQ、技術の土台。必要ならCRMとCare。Zaloまたは /#contact — パッケージの押し売りはしません。",
    },
  ],
};

export const coDuocNhacToiTrenChatgptGeminiCopy = { vi, en, ja };
