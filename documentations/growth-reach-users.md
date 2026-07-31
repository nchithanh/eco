# Dolphin Software — Tiếp cận user

Plain plan để đưa studio tới nhiều user đúng đối tượng.  
Site: [https://dolphin-software.io.vn/](https://dolphin-software.io.vn/)  
Brand: **Dolphin Software** (không dùng “Dolphin Kich” khi giao tiếp ngoài).

**Thứ tự tiếp cận (quyết định sản phẩm):**

1. **Chính:** user cần **làm website** (và app khi fit)
2. **Sau / upsell:** **Agent Dolphin** (AI hỗ trợ khách trên site) và AI khác

**Follow việc cần làm:** [§12 Checklist theo dõi](#12-checklist-theo-dõi-follow-cái-này) — tick theo giai đoạn A→G. 

Hai tầng mục tiêu (đừng lẫn):


| Tầng                    | Thời gian | Thành công trông như                                           |
| ----------------------- | --------- | -------------------------------------------------------------- |
| A — Lead đầu            | 0–90 ngày | Lead thật từ Zalo/form — chủ yếu **báo giá website**           |
| B — Thương hiệu ổn định | 1–2 năm   | Organic web + case web + landing ngành; Agent là lớp tăng thêm |


---



## 1. Mục tiêu & ICP

- Traffic → **lead** (Zalo / form báo giá website), không KPI pageview suông.
- Ví dụ: ~500 visit/tháng → ~15 lead → ~2 hợp đồng (minh họa).

**ICP chính:** chủ shop, spa, nha khoa / phòng khám, quán, giáo dục nhỏ, SMB cần **website** (landing, doanh nghiệp, booking…).

**ICP phụ / upsell:** cùng khách trên (hoặc khách đã có web) cần **chăm sóc khách trên site** → Agent Dolphin.

**USP khi outreach (thứ tự nói):**

1. Làm website rõ scope, milestone, bàn giao — đo được.
2. *Tuỳ chọn:* gắn Agent Dolphin để hỗ trợ khách 24/7 (không chatbot cứng).

**Không** mở đầu hội thoại bằng “AI Agent” với đa số SMB VN — họ đang tìm **làm website / báo giá web**.

Flow chính:

```text
Cần làm website
  → Xem dịch vụ / works / báo giá
  → Quote / Zalo
  → (Upsell) Agent Dolphin trên site mới hoặc site sẵn
```

Flow phụ (khi khách hỏi chatbot / CSKH):

```text
AI hỗ trợ khách trên website
  → Agent Dolphin
  → Demo / case
  → Báo giá gắn kèm hoặc riêng
```

Custom Agent & AI Transform: ICP B2B / nâng cao — không phải hook outreach tuần đầu.

---



## 2. Đã có trên site (nền kỹ thuật)

- Marketing site đa ngữ, Pages + domain; hero/web-first + section Agent Dolphin.
- Trang dịch vụ / works / ghi chép (`/news/`) / Agent Dolphin / Custom Agent / AI Transform.
- SEO technical: `robots.txt`, `sitemap.xml`, metadata + canonical, OG, JSON-LD.

Chi tiết: [architecture.md](./architecture.md) (SEO), [pages.md](./pages.md), [homepage.md](./homepage.md).

**Đo lường (cập nhật):**

- [x] GSC verify + sitemap submitted  
- [x] Cloudflare Web Analytics đang nhận hit  
- [ ] Event CTA chi tiết (CF Analytics Free hạn chế; GA4 sau nếu cần funnel)

**Chưa có:** GBP; lead magnet PDF; case Problem→Result; GA4/GTM trong code.

Gợi ý nhãn: UI **Blog / Ghi chép**; URL có thể giữ `/news/`.

---



## 3. Nền tảng đo lường

1. [x] Google Search Console + sitemap
2. [x] Cloudflare Web Analytics
3. [ ] Event CTA (đếm tay / Zalo trước; GA4 sau nếu cần)
4. Purge Cloudflare sau deploy lớn
5. Theo dõi `site:dolphin-software.io.vn` + GSC Coverage / Performance



### KPI đo


| KPI                    | Mục tiêu hướng (3–12 tháng)             |
| ---------------------- | --------------------------------------- |
| Indexed pages          | 50 → 100                                |
| Organic keywords (GSC) | theo dõi; hướng ~300 khi content đều    |
| Top 10 keywords        | hướng ~30 (ưu tiên cụm **làm website**) |
| CTR organic            | > 3%                                    |
| Contact / visit        | 2–5%                                    |
| Lead / tuần            | ≥ 1 (chủ yếu báo giá **web**)           |


---



## 4. Nghiên cứu từ khóa

Nhóm theo intent — **web trước, AI sau**. Sheet chi tiết (cột intent / URL / Done): **[seo-keywords.md](./seo-keywords.md)** (~55 cụm P1/P2/P3 + gợi ý 4 tuần viết bài).

### P1 — High intent (làm website) ← ưu tiên viết & ads/social

- thiết kế website, làm website, báo giá website  
- công ty thiết kế web, làm landing page  
- lập trình app, làm app (khi fit)

### P2 — Long-tail theo ngành (landing web)

- website phòng khám / nha khoa / spa  
- website bất động sản / giáo dục / bán lẻ / quán cafe

### P3 — AI / chatbot (upsell Agent Dolphin)

- AI chatbot, chatbot website  
- AI chăm sóc khách hàng  
- AI Agent (luôn kèm giải thích lợi ích)

Mỗi cụm: volume (bổ sung từ GSC), intent, URL đích (`/services/web/`, `/news/`, landing ngành; `/agent-dolphin/` chỉ P3).

---



## 5. Kênh phân phối


| Kênh                    | Cách dùng (web-first)                                                |
| ----------------------- | -------------------------------------------------------------------- |
| Zalo                    | CTA **báo giá website**; case web; *nhắc* Agent như option           |
| Facebook / nhóm SMB     | “Làm website bao nhiêu / checklist bàn giao”; AI chỉ 1 phần nội dung |
| LinkedIn                | Process + case web (EN/JA nếu JP)                                    |
| Google Business Profile | “công ty thiết kế website + khu vực”                                 |
| Partner / BD            | Careers Sales / BD                                                   |
| Review                  | Xin sau dự án **web** (và pilot Agent nếu có)                        |


Nhịp: 3–5 touchpoint / tuần. Không ads lớn khi chưa biết kênh ra lead.

---



## 6. Nội dung: calendar + case + internal link



### Nhịp (1 founder)

- 1 bài blog/ghi chép / tuần + 1 chuỗi social  
- 1 case / 2 tuần–1 tháng  
- ~70–80% chủ đề **website**; ~20–30% Agent / AI



### Mẫu lịch 4 tuần (web-first)


| Tuần | Blog / ghi chép                                    | Ưu tiên       |
| ---- | -------------------------------------------------- | ------------- |
| 1    | Website bán hàng / doanh nghiệp giá bao nhiêu?     | P1 web        |
| 1    | Checklist bàn giao website                         | Lead magnet   |
| 2    | Làm landing page cần những gì?                     | P1 web        |
| 2    | Website phòng khám / spa — nên có gì?              | P2 ngành      |
| 3    | Website chuẩn SEO cho SMB                          | P1/P2         |
| 3    | (Phụ) AI hỗ trợ khách trên website — Agent Dolphin | P3 upsell     |
| 4    | Case study **làm website** (template dưới)         | Bán hàng      |
| 4    | Share works + CTA báo giá                          | Internal link |




### Template case (ưu tiên case web)

```text
Khách hàng: [Spa / quán / phòng khám / …]
Vấn đề: [vd. chưa có web / web cũ không ra lead / đặt lịch rối]
Giải pháp: Website (scope rõ) ± Agent Dolphin nếu có
Kết quả: [Lead / đặt lịch / thời gian ship / …]
CTA: Nhận báo giá website / Zalo
```

Case Agent-only chỉ khi đủ số liệu; không để Agent thay toàn bộ story works.

### Internal link

```text
Homepage (#capabilities / báo giá) → **/services/web/** (nav “Làm website”) → Quote / Zalo
Blog “làm website” → /services/web/ → Quote
Works → Quote
(Phụ) Blog AI/chatbot → /agent-dolphin/ → Quote
Landing ngành → service web → (upsell) Agent Dolphin
```

---



## 7. Lead magnet & nuôi lead


| Magnet                                   | Đổi lấy         | Bước sau                    |
| ---------------------------------------- | --------------- | --------------------------- |
| PDF checklist / **báo giá website 2026** | Email hoặc Zalo | Follow-up báo giá web       |
| Audit website miễn phí (slot giới hạn)   | Form ngắn       | Call / Zalo                 |
| (Phụ) Demo Agent Dolphin 15 phút         | Lịch            | Upsell sau hoặc kèm gói web |


Nurture: checklist web → 2–4 tin giá trị → gợi ý báo giá website (không đẩy Agent trước).

---



## 8. Chuyển đổi trên site

- **CTA chính:** báo giá website / Zalo.  
- **CTA phụ:** Agent Dolphin / AI (nav, teaser dưới hero — upsell).  
- Luồng chính: capabilities / popular services / works → quote.  
- Luồng phụ: teaser Agent → `/agent-dolphin/` → quote.

---



## 9. Sản phẩm & magnet

- Magnet outreach: **website rõ scope** + works.  
- Agent Dolphin: demo/GIF khi khách hỏi CSKH hoặc upsell sau kickoff web.  
- Pilot: ưu tiên **dự án web** có review; Agent pilot riêng nếu có.  
- Landing ngành: trang **website theo ngành** trước; gắn block Agent sau.

---



## 10. Lộ trình (chi tiết nằm ở checklist §12)

Xem **§12 Checklist theo dõi** — tick theo thứ tự. Tóm tắt giai đoạn:

- **Tuần 1–2:** đo + keyword web + post báo giá website + GBP  
- **Tuần 3–4:** blog web + case nháp + lead magnet  
- **Tháng 2:** magnet + review + nhịp 1 bài/tuần (web)  
- **Tháng 3+:** landing ngành web; Agent/ads khi fit

**90 ngày — chỉ 3 việc nếu phải chọn:** (1) keyword + nội dung làm website, (2) case web + lead magnet, (3) 2–3 landing ngành + CTA báo giá.

---



## 11. Việc không làm sớm

- Mở đầu mọi kênh bằng “AI Agent” thay vì làm website.  
- 10 landing Agent mỏng trước khi có lead web.  
- Ads AI lớn khi ICP chính đang tìm báo giá web.  
- Mua traffic ảo / đổi brand lung tung.

---



## 12. Checklist theo dõi (follow cái này)

Tick `[x]` khi xong. Làm **theo thứ tự trong mỗi giai đoạn**; đừng nhảy ads/Agent trước khi có lead web.

### A. Nền tảng đo (trước scale)

- [x] GSC verify domain / URL prefix  
- [x] Submit sitemap `https://dolphin-software.io.vn/sitemap.xml`  
- [x] Cloudflare Web Analytics nhận visit / page view  
- [ ] GSC: xem Coverage / Pages — không lỗi 4xx / canonical hàng loạt  
- [ ] Gói nhật ký lead tuần (Sheet): ngày | kênh | nhu cầu (web/app/agent) | trạng thái  
- [ ] (Tuỳ sau) GA4 chỉ để event CTA nếu CF Analytics không đủ  

**Next nếu A còn mở:** Coverage GSC + Sheet lead tuần.

---



### B. Tuần này / tuần tới (outreach web-first)

- [x] Sheet keyword — [seo-keywords.md](./seo-keywords.md) (P1/P2/P3 + intent + URL đích)  
- [ ] 4 post Zalo hoặc FB: chủ đề **làm website / báo giá / checklist** (không lead bằng AI)  
- [ ] 1 bài ghi chép/blog **web** (đăng `/news/` hoặc nháp sẵn) — gợi ý: `báo giá website` / checklist bàn giao  
- [ ] Share 1 **works** + CTA báo giá / Zalo  
- [ ] Đếm lead tuần (số Zalo/form hỏi làm web)  

**Next mặc định hôm nay:** B — 4 post Zalo/FB + 1 bài `/news/` (keyword P1).

---



### C. Tin cậy & local

- [ ] Google Business Profile (nếu đủ địa chỉ / giấy tờ)  
- [ ] Xin 1 review / testimonial sau dự án web (hoặc pilot)  
- [ ] Đưa review lên site (About / works / quote) khi có  

---



### D. Chuyển đổi & magnet (web)

- [ ] Lead magnet v1: PDF checklist hoặc “báo giá website 2026”  
- [ ] Chỗ để lại Zalo/email trên site hoặc form gắn magnet  
- [ ] CTA chính trên social/site luôn = **báo giá website**  
- [ ] (Phụ) 1 post hoặc 1 block Agent Dolphin / tháng — upsell, không thay hook chính  

---



### E. Case & landing (sau khi có material)

- [ ] 1 case study **làm website** theo template Problem → Solution → Result  
- [ ] Nhịp: 1 bài web / tuần (bền hơn 2 bài rồi bỏ)  
- [ ] 2–3 landing **website theo ngành** (spa / nha khoa / giáo dục…) + CTA báo giá  
- [ ] Internal link: blog web → `/services/web/` → quote  

---



### F. Agent Dolphin (chỉ khi fit)

- [ ] Có ít nhất vài lead/web ổn định hoặc khách hỏi CSKH/chatbot  
- [ ] 1 nội dung / demo Agent (GIF hoặc bài P3)  
- [ ] Upsell Agent vào gói web hoặc pilot riêng + case riêng  

---



### G. Scale (tháng 3+)

- [ ] GSC: từ khóa web bắt đầu có impression / click  
- [ ] Ads nhẹ theo **làm website** nếu organic/social đã ra lead  
- [ ] Mở rộng P3 AI chỉ khi P1/P2 đã chạy  

---



### Trạng thái nhanh (cập nhật tay)


| Hạng mục                  | Trạng thái |
| ------------------------- | ---------- |
| GSC + sitemap             | Done       |
| Cloudflare Analytics      | Done       |
| Keyword sheet web         | Todo       |
| Post Zalo/FB web tuần này | Todo       |
| Blog/case web             | Todo       |
| Sheet lead tuần           | Todo       |
| GBP / review              | Todo       |
| Lead magnet web           | Todo       |


---



## Tóm một câu

SEO nền + đo Cloudflare đã có → **kéo lead bằng “làm website”** (checklist §12 B→E) → chốt dự án web → **upsell Agent** khi fit → rồi mới scale.