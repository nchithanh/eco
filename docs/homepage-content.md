# Homepage content — Dolphin Kich

Mô tả toàn bộ nội dung trang chủ (`/`), theo thứ tự render trong `app/page.tsx`.

| Mục | Giá trị |
| --- | --- |
| Brand UI | **Dolphin Kich** (`components/Logo.tsx` → `BRAND_DISPLAY_NAME`) |
| Locale mặc định (copy dưới đây) | **VI** |
| Locales khác | EN, JA, DE, ZH |
| Nguồn chính | `lib/i18n/dictionaries.ts`, `faq-copy.ts`, `news-copy.ts`, `ai-transform-copy.ts`, `ai-chat-copy.ts` |

> Ghi chú: một số chuỗi trong i18n vẫn còn **KU THANH** / **Dolphin Kick** (legacy). UI brand hiện tại là **Dolphin Kich**.

---

## Thứ tự section

1. Nav (+ Announcement bar)
2. Hero
3. Technology (`#technology`) — copy AI transform trên homepage
4. Capabilities (`#capabilities`)
5. Site outcomes (`#outcomes`)
6. What you get (`#what-you-get`)
7. Ops lifecycle (`#ops`)
8. Works (`#works`)
9. Process (`#process`)
10. Trust strip (`#handover`)
11. Tech stack (`#stack`)
12. Why (`#why`)
13. Co-founder (`#cofounder`)
14. Home news (`#news`)
15. FAQ (`#faq`)
16. Contact (`#contact`)
17. Footer

**Overlay toàn trang (không trong `<main>` flow):** Cookie consent, Contact FAB, Dolphin Assist chat, Agent loader (lần đầu).

---

## 1. Nav + Announcement bar

**Component:** `Nav`, `AnnouncementBar`, `LanguageSwitcher`, `ThemeSwitcher`

### Meta (SEO)

- **Title:** KU THANH *(legacy — nên đổi thành Dolphin Kich)*
- **Description:** Studio web & app cho SMB: từ bài toán kinh doanh đến hệ thống dễ vận hành — phạm vi rõ, kết quả đo được, đồng hành sau bàn giao.

### Nav labels

| Key | VI |
| --- | --- |
| services | Dịch vụ |
| customAgent (menu) | AI Agent |
| customAgentItem | AI Agent theo yêu cầu |
| aiTransform | Chuyển đổi AI doanh nghiệp |
| process | Quy trình |
| stack | Công nghệ |
| news | Tin tức |
| careers | Tuyển dụng |
| contact | Liên hệ |

### Announcement bar

- **Text:** Dolphin Kick đang tuyển freelancer — Sales ưu tiên gấp, hoa hồng 50% deal. Ứng tuyển ngay!
- **CTA:** Ứng tuyển → `/careers`

---

## 2. Hero

**Component:** `Hero` · **id:** `#top`

| Field | VI |
| --- | --- |
| Eyebrow | Studio |
| Headline | Từ bài toán **kinh doanh** đến **hệ thống** dễ vận hành *(marker `[[…]]` = accent typography)* |
| Support | Bạn nói mục tiêu — bán hàng, nhận lead, đặt lịch hay vận hành nội bộ. Dolphin Kick chốt phạm vi rõ, giao đúng milestone, bàn giao source + hướng dẫn để đội bạn tự chạy. Không bán giờ công hay danh sách công nghệ; đo bằng kết quả vận hành. 7 năm production: giao tiếp thẳng, không phóng scope. |
| CTA primary | Nhận báo giá *(mở Quote estimator)* |
| CTA secondary | Xem dịch vụ → `#capabilities` |

### Visual panels (hero glass)

- Web & App
- Tự động hóa
- Tích hợp AI

---

## 3. Technology (`#technology`)

**Component:** `Technology`

Trên homepage, **eyebrow / headline / support** lấy từ `getAiTransformCopy(locale)` (không dùng `t.technology.title/support` cho khối copy chính). CTA + dashboard UI dùng `t.technology`.

### Copy AI transform (homepage)

| Field | VI |
| --- | --- |
| Eyebrow | Chuyển đổi AI doanh nghiệp |
| Headline | Gắn AI vào **lõi vận hành** — không phát tài khoản rồi chờ phép màu |
| Support | Dolphin rà soát quy trình thật của bạn, chọn khâu đang ngốn người/tiền, rồi gắn agent và tự động hóa có kiểm soát. Lộ trình theo milestone đo được — bắt đầu nhỏ, nhân rộng khi đã chứng minh. |
| CTA | Tìm hiểu thêm → `/ai-transform/` |

### Dashboard demo (UI)

| Field | VI |
| --- | --- |
| Live badge | live |
| Tabs | Tổng quan · Dữ liệu · Insight · Cảnh báo |
| Widgets | Hoạt động · Nhịp hệ thống · Node đang chạy |

---

## 4. Capabilities (`#capabilities`)

**Component:** `Capabilities`

| Field | VI |
| --- | --- |
| Eyebrow | Dịch vụ |
| Title | Giải pháp gắn **kết quả vận hành** |
| Support | Kết quả đo được — không phải kịch bản giờ công. Bạn nói mục tiêu kinh doanh; chúng tôi đề xuất cách làm, cắt thừa, giao đúng milestone. Website & mobile, backend, UI/UX, tích hợp tới agent nghiệp vụ — một vòng dịch vụ để SMB đi từ ý tưởng đến hệ thống ổn định, dễ mở rộng. |
| Filter all | Tất cả |
| Learn more | Tìm hiểu thêm |

### Filters (tab)

Tất cả · Website · Mobile · Backend · UI/UX · Integrations · Agents

### Service cards

| ID | Category | Title | Body | Tags |
| --- | --- | --- | --- | --- |
| web | Website | Phát triển website theo yêu cầu | Landing, corporate hay CMS giúp khách hiểu và hành động — form/CTA rõ, SEO on-page, responsive; cấu trúc sẵn để mở rộng sau. | Next.js, React, CMS |
| mobile | Mobile | Phát triển mobile app | App trên điện thoại giúp khách đặt / mua / theo dõi nhanh hơn — cân bằng UX và tốc độ ra mắt theo nhu cầu sản phẩm. | Flutter, React Native, iOS/Android |
| backend | Backend | Backend & tích hợp hệ thống | API, auth, thanh toán vững — dữ liệu và luồng nghiệp vụ chạy ổn khi web/app scale. | Node.js, API, Auth |
| design | UI/UX | UI/UX & bàn giao | UI đúng brand + design system + hướng dẫn — đội bạn tự vận hành nội dung, ít phụ thuộc studio. | UI/UX, Design system, Handover |
| integrations | Integrations | Tích hợp dịch vụ bên thứ ba | Gắn MoMo, ZaloPay, VNPay, Zalo OA vào luồng thật — ít sai sót vận hành, dễ theo dõi và an toàn. | MoMo, Zalo, VNPay, Webhook |
| agents | Agents | Hệ sinh thái agent cho business | Agent gắn nghiệp vụ + MCP/tool nội bộ — hỗ trợ vận hành theo domain, không chỉ chatbot marketing. | MCP, Agents, Context, AI |
| custom-agent | Agents | AI Agent theo yêu cầu | Nạp nghiệp vụ thật + nối hệ thống đang chạy — agent gánh một khâu tới kết quả, không chatbot kịch bản. | Custom agent, Ops, Zalo/CRM, AI |

---

## 5. Site outcomes (`#outcomes`)

**Component:** `SiteOutcomes`

| Field | VI |
| --- | --- |
| Eyebrow | Kết quả vận hành |
| Title | Sau bàn giao, bạn **chạy được những việc này** |
| Support | Gắn mục tiêu kinh doanh — lead, đặt lịch, nội dung, thanh toán, vận hành — không phải catalog tính năng. |

### Items (01–06)

1. **Thu lead và chuyển đổi rõ** — Form/CTA và luồng liên hệ gọn — khách hiểu rồi hành động; đội bạn theo dõi được nguồn.
2. **Đặt lịch / giữ chỗ ổn định** — Slot trống, xác nhận và nhắc lịch — giảm gọi hỏi giờ và double-book.
3. **Thương hiệu dễ tin, dễ nhớ** — Landing hoặc corporate đúng trọng tâm — responsive, nội dung quét nhanh, xây dựng niềm tin.
4. **Đội bạn tự cập nhật nội dung** — CMS/admin trong phạm vi — sửa bài, ảnh, giá mà không gọi studio mỗi lần.
5. **Thanh toán và kênh nhắn tin vào luồng thật** — Gắn MoMo / ZaloPay / VNPay / Zalo OA khi cần — ít sai sót vận hành hơn so với gắn tay.
6. **Vận hành nội bộ bớt rời rạc** — Dashboard, agent nghiệp vụ hoặc vòng Collect → Govern — một bức tranh thay vì mười công cụ.

---

## 6. What you get (`#what-you-get`)

**Component:** `WhatYouGet`

| Field | VI |
| --- | --- |
| Eyebrow | Đầu ra hợp tác |
| Title | Mỗi dự án **kết thúc bằng đầu ra rõ** |
| Support | Phạm vi, source, nền tảng mở rộng và bảo hành — đội bạn vận hành độc lập, không bị khóa vendor. |

### Deliverables (6 node)

1. **Phạm vi và milestone đã chốt** — Báo giá theo đầu ra thống nhất — demo định kỳ để chỉnh sớm, không giờ công mơ hồ.
2. **Source và quyền vận hành thuộc bạn** — Mã nguồn / repo theo thỏa thuận — bạn nắm quyền chạy tiếp, không bị khóa nhà thầu.
3. **Cấu trúc sẵn để mở rộng sau** — Thêm trang, form hay tính năng theo milestone — không phải dựng lại từ đầu.
4. **SEO on-page và hiệu năng nền** — Responsive, heading/meta rõ, tốc độ hợp lý cho SMB — nền để tối ưu tiếp, không hứa xếp hạng ảo.
5. **Hướng dẫn vận hành ngắn** — Docs / walkthrough để đội bạn tự chạy nội dung và checklist deploy cơ bản.
6. **Bảo hành lỗi kỹ thuật 3–6 tháng** — Trong phạm vi đã nghiệm thu theo thỏa thuận — tính năng mới là hạng mục riêng, báo giá trước.

---

## 7. Ops lifecycle (`#ops`)

**Component:** `OpsLifecycle`

| Field | VI |
| --- | --- |
| Eyebrow | Tự động hóa vận hành |
| Title | Một **lifecycle** điều hành — không còn gom tin từ mười nơi |
| Support | Trước: tin rải trên Slack, Jira, docs — lãnh đạo phải tự ghép. Sau: một vòng Collect → Normalize → Run → Govern chạy định kỳ, toàn cảnh trên một luồng. |
| Before | Trước: nhảy qua lại giữa Slack / Jira / docs để “biết đang gì”. |
| After | Sau: tín hiệu được thu → chuẩn hóa → chạy chu kỳ → điều hành từ một console. |
| CTA | Trao đổi về tự động hóa → `#contact` |

### Steps

| # | Name | Detail |
| --- | --- | --- |
| 01 | Collect | Thu thập tín hiệu từ Slack, Jira, docs và công cụ nội bộ. |
| 02 | Normalize | Chuẩn hóa ngữ cảnh, bỏ nhiễu, gắn đúng nghiệp vụ. |
| 03 | Run | Lặp chu kỳ định kỳ — báo cáo, nhắc việc, escalate đúng lúc. |
| 04 | Govern | Điều hành từ một bảng điều khiển — không phải tự đi gom tin. |

### Visual chips

Slack · Jira · Docs · Lifecycle *(+ Observe / Improve trên visual)*

---

## 8. Works (`#works`)

**Component:** `WorksShowcase`

| Field | VI |
| --- | --- |
| Eyebrow | Dự án SMB |
| Title | Website personal & **business nhỏ** đã làm |
| Support | Mỗi case: bài toán → phạm vi → kết quả vận hành đo được — không chỉ ảnh đẹp. |
| CTA | Muốn làm website tương tự? → `#contact` |
| Labels | Bài toán · Phạm vi · Kết quả |

### Cases

| ID | Title | Tag | Problem | Scope | Result |
| --- | --- | --- | --- | --- | --- |
| billiard | Quản lý cửa hàng bida | Website · Đặt bàn | Ghi sổ/Excel: khó biết bàn trống, dễ sai doanh thu ca. | Bản đồ bàn, timer, dịch vụ kèm, tóm tắt ca trên web/ops. | Giảm sót giờ; nhân viên onboard nhanh; chủ xem ca mọi lúc. |
| badminton | Website sân cầu lông | Booking | Khách gọi hỏi lịch trống; admin khó chốt slot trùng. | Giới thiệu sân, lịch trống, luồng đặt sân rõ ràng. | Giảm cuộc gọi hỏi lịch; tăng giữ chỗ đúng slot. |
| tickets | Booking vé & convert | Convert | Khách xem sự kiện nhưng rớt giữa chừng trước khi đặt. | Luồng xem → chọn → thanh toán/giữ chỗ tối ưu convert. | Rút ngắn bước đặt; tăng tỷ lệ hoàn tất booking. |
| beauty | Booking làm đẹp | Beauty | Sót lịch, double-book, khách khó tự giữ chỗ ngoài giờ. | Đặt lịch theo slot nail/makeup/dịch vụ + xác nhận. | Ít sót lịch hơn; tăng giữ chỗ ngoài giờ hành chính. |
| cafe | Cafe đặt món QR | QR · Order | Giờ cao điểm gọi món chậm, dễ sai vì ghi tay. | Menu QR theo bàn, giỏ món, đẩy order tới quầy/bếp. | Gọi món nhanh hơn; giảm sai món; nhân viên ít chạy sổ. |
| clinic | Đặt lịch phòng khám | Clinic | Bệnh nhân gọi hỏi lịch; dễ trùng slot, quên nhắc tái khám. | Lịch theo bác sĩ/slot + xác nhận và nhắc lịch. | Giảm cuộc gọi hỏi lịch; ít trùng slot hơn. |

---

## 9. Process (`#process`)

**Component:** `Process`

| Field | VI |
| --- | --- |
| Eyebrow | Phương pháp |
| Title | Quy trình **bàn giao** 5 bước |
| Support | Mỗi bước có đầu ra rõ — từ tóm tắt bài toán đến source + bảo hành. Bắt đầu từ mục tiêu thực tế (bán hàng, lead, đặt lịch, vận hành nội bộ) rồi mới chốt UI, tính năng, tiến độ và chi phí. |
| Deliverable label | Đầu ra |

### Steps

1. **Lắng nghe & Khảo sát** — Làm rõ website/app phục vụ bán hàng, giới thiệu, nhận liên hệ hay quản lý nội bộ — và ràng buộc ngân sách/thời gian. → *Tóm tắt bài toán, mục tiêu và ràng buộc đã thống nhất.*
2. **Lập kế hoạch & Báo giá** — Bóc tách tính năng, nội dung, milestone, chi phí và đúng những gì bạn nhận khi bàn giao. → *Đề xuất phạm vi, timeline và báo giá rõ ràng.*
3. **Phát triển theo sprint** — Triển khai UI, tính năng, responsive và kết nối cần thiết — demo định kỳ để chỉnh sớm. → *Bản build/demo theo sprint để review sớm.*
4. **Kiểm thử & UAT** — Kiểm soát chất lượng và nghiệm thu cùng bạn trước khi lên production. → *Checklist nghiệm thu và danh sách lỗi đã xử lý.*
5. **Bàn giao & Đồng hành** — Deploy, hướng dẫn vận hành, tài liệu — hỗ trợ lỗi kỹ thuật khi hệ thống đi vào dùng thật. → *Source, domain/hosting & env, admin (nếu có), hướng dẫn và BH kỹ thuật theo thỏa thuận.*

---

## 10. Trust strip (`#handover`)

**Component:** `TrustStrip`

| Field | VI |
| --- | --- |
| Eyebrow | Bàn giao |
| Title | Đầu ra bạn nhận khi xong dự án |
| Support | Không chỉ “website chạy được” — bạn nắm source, domain/hosting, hướng dẫn vận hành và bảo hành lỗi kỹ thuật trong phạm vi đã nghiệm thu. |

### Items

| Value | Label |
| --- | --- |
| Source | Bạn sở hữu mã nguồn / repo theo thỏa thuận — không bị khóa vendor |
| CMS / Admin | Truy cập quản trị nội dung hoặc panel vận hành (nếu có trong scope) |
| Domain / Hosting | Hướng dẫn gắn domain/hosting, biến môi trường và checklist deploy |
| Hướng dẫn | Tài liệu / walkthrough để đội bạn vận hành độc lập |
| BH 3–6 tháng | Bảo hành lỗi kỹ thuật theo thỏa thuận, trong phạm vi đã nghiệm thu — không gồm tính năng mới |

---

## 11. Tech stack (`#stack`)

**Component:** `TechStack`

| Field | VI |
| --- | --- |
| Eyebrow | Công nghệ |
| Title lead | Năng lực kỹ thuật |
| Title highlight | công nghệ hiện đại |
| Support | Chọn đúng stack cho từng bài toán — frontend, mobile, backend đến hạ tầng vận hành. Bộ công cụ đã được kiểm chứng qua dự án thực tế. |

### Logos (click → tech detail preview)

React · Next.js · TypeScript · Tailwind · Node.js · Flutter · React Native · PostgreSQL · Docker · NestJS · Express · Strapi · AWS · Kubernetes · Grafana · Elasticsearch · Redis · Terraform

---

## 12. Why (`#why`)

**Component:** `WhyKuct`

| Field | VI |
| --- | --- |
| Eyebrow | Vì sao chọn Dolphin Kick |
| Title | **Đồng hành dài hạn**, không chỉ bàn giao code |
| Support | Tư vấn theo mục tiêu kinh doanh và kết quả vận hành — hạn chế thuật ngữ khó hiểu; cam kết rõ về tiến độ, chất lượng và hỗ trợ sau ra mắt. |

### Reasons

1. **Kinh nghiệm thực chiến** — Co-founder với 7 năm trên production — reliability, observability và bàn giao end-to-end cho web & app SMB.
2. **Giao hàng end-to-end** — Từ discovery đến deploy — một đội chịu trách nhiệm xuyên suốt, cấu trúc sẵn để thêm trang/form/tính năng sau.
3. **Quy trình minh bạch** — Milestone cụ thể, demo định kỳ và báo giá rõ phạm vi — đo bằng đầu ra, không bằng giờ công mơ hồ.
4. **Đồng hành sau bàn giao** — Hướng dẫn vận hành, hỗ trợ lỗi kỹ thuật theo thỏa thuận, tối ưu và mở rộng khi sản phẩm đi vào thực tế.

---

## 13. Co-founder (`#cofounder`)

**Component:** `CoFounder`

| Field | VI |
| --- | --- |
| Eyebrow | Đội ngũ |
| Role | Co-founder |
| Name | Nguyễn Chí Thành |
| Description | 7 năm làm sản phẩm và hệ thống — xây dựng, vận hành production, ứng phó sự cố, observability (Prometheus/Grafana), chuyển monolith→microservices, và workflow AI-agent có human-in-the-loop. Stack quen thuộc: NestJS, Golang, TypeScript, Docker, GitLab CI/CD, MySQL, Redis. Dolphin Kick đưa kinh nghiệm vận hành thật vào web & app cho SMB — giao tiếp thẳng, báo giá hợp lý. |

---

## 14. Home news (`#news`)

**Component:** `HomeNews` · nguồn list: `lib/news-details.ts` · UI labels: `lib/i18n/news-copy.ts`

| Field | VI |
| --- | --- |
| Eyebrow | Tin tức |
| Title | Ghi chép **mới nhất** |
| Blurb | Bài ngắn về sản phẩm, kỹ thuật và cách làm việc — không phải thông cáo báo chí. |
| View all | Xem tất cả tin → `/news/` |
| Categories | Quy trình · Sản phẩm · Kỹ thuật · Studio · Case |

### Hành vi UI

- Grid 3 cột; **3 bài đầu** có ảnh featured.
- Phân trang **9 bài / trang** nếu list dài hơn.
- Click mở preview / trang chi tiết `/news/[slug]/`.

### Slugs hiện có (30)

`discovery-before-build`, `sprint-demo-cadence`, `scope-without-scope-creep`, `handover-and-ops`, `landing-that-converts`, `booking-ux-patterns`, `mobile-first-or-responsive`, `design-system-lite`, `nextjs-app-router-notes`, `react-component-boundaries`, `flutter-vs-react-native`, `api-auth-payments`, `integrations-checklist`, `ai-agents-in-products`, `architecture-audit-lite`, `billiard-ops-dashboard`, `badminton-court-booking`, `event-ticket-convert`, `beauty-salon-booking`, `remote-freelance-rhythm`, `hiring-for-delivery`, `why-we-write-estimates`, `client-comms-that-work`, `stock-community-disclaimer`, `performance-budgets`, `cms-when-you-need-it`, `smoke-tests-before-ship`, `multi-locale-sites`, `theme-tokens-not-themes`, `from-mvp-to-v1`

*(Title/excerpt từng bài theo locale trong `lib/news-details.ts` — không liệt kê full body ở đây.)*

---

## 15. FAQ (`#faq`)

**Component:** `Faq` · `lib/i18n/faq-copy.ts`

| Field | VI |
| --- | --- |
| Eyebrow | FAQ |
| Title | Câu hỏi **thường gặp** |
| Support | Timeline, báo giá, bảo hành và bảo mật — trước khi bắt đầu cùng studio. |

### Q&A

1. **Studio làm những gì?** — Dolphin Kick / KU THANH giúp SMB đi từ bài toán kinh doanh đến hệ thống dễ vận hành — website, mobile, tự động hóa và tích hợp AI. Bạn nói mục tiêu; chúng tôi đề xuất phạm vi và cách làm phù hợp.
2. **Không biết kỹ thuật có làm được không?** — Có. Đa số khách không code. Gửi ý tưởng, mẫu tham khảo hoặc mô tả ngắn — chúng tôi tư vấn phạm vi bằng ngôn ngữ kinh doanh, làm trọn gói và bàn giao kèm hướng dẫn vận hành.
3. **Quy trình làm việc thế nào?** — Làm rõ mục tiêu → chốt phạm vi & báo giá → thiết kế/build theo sprint (có đầu ra mỗi bước) → nghiệm thu → bàn giao & hỗ trợ. Bạn luôn biết bước tiếp theo.
4. **Báo giá và quy trình nhận quote?** — Gửi mô tả ngắn qua form Contact, nút “Nhận báo giá” hoặc chat Zalo. Chúng tôi phản hồi phạm vi ước tính và bước tiếp theo; chi tiết hợp đồng theo từng dự án — không phí ẩn ngoài phạm vi đã thống nhất.
5. **Timeline thường bao lâu?** — Landing đơn giản: khoảng 2–4 tuần. Website doanh nghiệp nhiều trang: vài tuần đến ~1–2 tháng. App/workflow phức tạp: thường theo milestone 4–12 tuần tùy phạm vi.
6. **Website có tối ưu SEO / mobile không?** — Mặc định responsive, heading/meta rõ và SEO on-page cơ bản. SEO nội dung dài hạn / Ads lớn có thể thỏa thuận thêm.
7. **Làm remote được không?** — Có — chat/call, demo định kỳ, tài liệu bàn giao; phục vụ khách toàn quốc.
8. **Bảo trì sau bàn giao khác gì tính năng mới?** — BH lỗi kỹ thuật (thường 3–6 tháng) trong phạm vi đã nghiệm thu. Tính năng mới = hạng mục riêng, báo giá trước.
9. **Bảo mật và dữ liệu thế nào?** — HTTPS, phân quyền, env vars, không commit secret. Dữ liệu thuộc khách; yêu cầu nâng cao thỏa thuận thêm.
10. **Về nội dung chứng khoán trên site?** — Chỉ chia sẻ cộng đồng — không phải tư vấn đầu tư có giấy phép, không cam kết lợi nhuận.
11. **Làm sao bắt đầu?** — “Nhận báo giá”, chat Zalo, hoặc form Contact.
12. **Phạm vi có bị phình giữa chừng không?** — Scope chốt ở báo giá; yêu cầu mới ghi nhận + ước lượng lại trước khi làm.
13. **Có làm MVP theo giai đoạn không?** — Có — MVP đủ chạy rồi mở rộng theo milestone.
14. **AI agent khác chatbot marketing thế nào?** — Chatbot FAQ/script; agent gắn quy trình, tool/MCP và ngữ cảnh nội bộ.

---

## 16. Contact (`#contact`)

**Component:** `ContactForm`

| Field | VI |
| --- | --- |
| Eyebrow | Liên hệ |
| Title | Sẵn sàng **khởi động** dự án? |
| Support | Chat Zalo để trao đổi nhanh, hoặc gửi form / email với mục tiêu và mẫu tham khảo. Dolphin Kick đề xuất hướng triển khai và báo giá theo phạm vi — không cần biết kỹ thuật. Xem FAQ phía trên nếu muốn rõ timeline, bảo hành và MVP trước. |
| CTA Zalo | Chat Zalo → `https://zalo.me/0779937633` |
| CTA Email | Gửi email → `mailto:nchithanh9999@gmail.com` |

### Form fields (nếu bật)

Tên · Email hoặc Zalo · Mô tả ngắn dự án · Gửi yêu cầu

---

## 17. Footer

**Component:** `Footer`

- Links mirror nav (services, process, stack, news, careers, contact).
- **Disclaimer:** Nội dung liên quan chứng khoán chỉ mang tính chia sẻ cộng đồng — không phải tư vấn đầu tư có giấy phép và không cam kết lợi nhuận.

---

## Overlay / chrome toàn trang

### Cookie consent

**Component:** `CookieConsent`

| Field | VI |
| --- | --- |
| Title | Cookie & quyền riêng tư |
| Body | Chúng tôi dùng cookie và lưu trữ trình duyệt cần thiết để ghi nhớ ngôn ngữ, theme giao diện và lựa chọn cookie của bạn — giúp trang tải đúng và tránh hỏi lại mỗi lần vào. Cookie tùy chọn (nếu có) chỉ phục vụ cải thiện trải nghiệm, không bán dữ liệu cho bên thứ ba. Bạn có thể chấp nhận hoặc từ chối phần không bắt buộc; từ chối vẫn dùng được site với các chức năng cốt lõi. |
| Accept | Chấp nhận |
| Decline | Từ chối |

### Contact FAB

Mở liên hệ nhanh · Chat Zalo · Gọi điện · Gửi email

### Dolphin Assist (AI chat)

**Component:** `AiChatWidget` · `lib/i18n/ai-chat-copy.ts`

| Field | VI |
| --- | --- |
| Agent name | Dolphin Assist |
| Toast welcome | Chào anh/chị! Em là Dolphin Assist — sẵn sàng hỗ trợ khi anh/chị cần. |
| Greeting (trong panel) | Xin chào! Em là Dolphin Assist của Dolphin Kich. Anh/chị đang cần tư vấn website, app, AI Agent, hay chuyển đổi AI cho doanh nghiệp? |

### Agent loader (lần đầu)

Status: Đang khởi động agent… · Agents: Scout · Plan · Build · Ship

### Quote estimator modal

Mở từ CTA “Nhận báo giá” — copy riêng trong modal (`QuoteEstimatorModal`), không nằm trong dictionary section homepage chính.

### Page preview modal

Đóng · Xem full · Đang tải nội dung…

---

## Map file ↔ component

| Section | Component | Copy source |
| --- | --- | --- |
| Nav / banner | `Nav`, `AnnouncementBar` | `dictionaries.ts` → `nav`, `banner` |
| Hero | `Hero` | `hero` |
| Technology | `Technology` | `ai-transform-copy.ts` + `technology` (CTA/widgets) |
| Capabilities | `Capabilities` | `capabilities` |
| Outcomes | `SiteOutcomes` | `siteOutcomes` |
| What you get | `WhatYouGet` | `whatYouGet` |
| Ops | `OpsLifecycle` | `ops` |
| Works | `WorksShowcase` | `works` |
| Process | `Process` | `process` |
| Trust | `TrustStrip` | `trust` |
| Stack | `TechStack` | `stack` |
| Why | `WhyKuct` | `why` |
| Co-founder | `CoFounder` | `cofounder` |
| News | `HomeNews` | `news-copy.ts` + `news-details.ts` |
| FAQ | `Faq` | `faq-copy.ts` |
| Contact | `ContactForm` | `contact` |
| Footer | `Footer` | `footer` + nav |
| Cookie | `CookieConsent` | `cookie` |
| Chat | `AiChatWidget` | `ai-chat-copy.ts` |

---

## Cập nhật tài liệu này

Khi đổi copy homepage:

1. Sửa nguồn i18n tương ứng (ưu tiên cả 5 locale).
2. Đồng bộ brand: **Dolphin Kich** (không để sót KU THANH / Dolphin Kick trên UI).
3. Cập nhật file MD này nếu thay đổi cấu trúc section hoặc messaging chính.
