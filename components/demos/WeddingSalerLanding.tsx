"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { assetPath } from "@/lib/asset";
import {
  weddingSalerDemoBrand,
  weddingSalerDemoCopy as c,
} from "@/lib/demos/wedding-saler-copy";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--wsal-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--wsal-serif",
  display: "swap",
});

const concerns = [
  {
    n: "01",
    title: "Ảnh thật khác xa ảnh mẫu",
    body: "Studio đăng ảnh concept lung linh, nhưng bộ ảnh thật nhận về thì không như kỳ vọng.",
  },
  {
    n: "02",
    title: "Chi phí phát sinh không báo trước",
    body: "Chốt gói xong mới biết váy, makeup, hay album là phụ phí riêng.",
  },
  {
    n: "03",
    title: "Giao ảnh trễ hẹn",
    body: "Ngày cưới qua lâu mà album vẫn chưa thấy đâu.",
  },
  {
    n: "04",
    title: "Tư vấn qua loa",
    body: "Báo giá nhanh nhưng không hỏi bạn thật sự muốn gì.",
  },
  {
    n: "05",
    title: "Khó so sánh giữa các nơi",
    body: "Mỗi studio báo giá một kiểu, không biết cái nào phù hợp.",
  },
];

const concepts = [
  {
    n: "01",
    label: "CONCEPT 01\nHÀN QUỐC / TỐI GIẢN",
    image: "/demos/wedding-saler/concept-01.jpg",
    alt: "Cặp đôi cưới trên đồi lúc hoàng hôn",
    title: (
      <>
        Hàn Quốc
        <br />
        <em>/ Tối giản</em>
      </>
    ),
    body: "Trong veo, nhẹ nhàng, ánh sáng tự nhiên — hiện đại và tinh tế.",
    reverse: false,
    speed: "0.06",
  },
  {
    n: "02",
    label: "CONCEPT 02\nTRUYỀN THỐNG / VIỆT PHỤC",
    image: "/demos/wedding-saler/concept-02.jpg",
    alt: "Chi tiết váy cưới ren trắng",
    title: (
      <>
        Truyền thống
        <br />
        <em>/ Việt phục</em>
      </>
    ),
    body: "Áo dài, cổ điển, ấm áp — lưu giữ nét đẹp văn hóa.",
    reverse: true,
    speed: "0.09",
  },
  {
    n: "03",
    label: "CONCEPT 03\nPHÓNG SỰ TỰ NHIÊN",
    image: "/demos/wedding-saler/concept-03.jpg",
    alt: "Cô dâu với bó hoa bên cửa sổ",
    title: (
      <>
        Phóng sự
        <br />
        <em>/ Tự nhiên</em>
      </>
    ),
    body: "Chân thật, cảm xúc, ít dàn dựng — khoảnh khắc đời thường đẹp nhất.",
    reverse: false,
    speed: "0.07",
  },
  {
    n: "04",
    label: "CONCEPT 04\nNGOẠI CẢNH / DU LỊCH",
    image: "/demos/wedding-saler/concept-04.jpg",
    alt: "Cặp đôi chạy trên cánh đồng lúc hoàng hôn",
    title: (
      <>
        Ngoại cảnh
        <br />
        <em>/ Du lịch</em>
      </>
    ),
    body: "Đà Lạt, biển, Hội An — và cả nước ngoài nếu bạn muốn khác biệt.",
    reverse: true,
    speed: "0.10",
  },
];

const packages = [
  {
    n: "01",
    featured: false,
    name: "Cơ Bản",
    blurb: "Phù hợp ngân sách tiết kiệm.",
    items: [
      "1 buổi studio hoặc ngoại cảnh gần",
      "40 ảnh chỉnh màu",
      "Album 20 trang",
      "2 trang phục",
      "Makeup có thể thêm",
    ],
    price: "9.900.000đ",
  },
  {
    n: "02",
    featured: true,
    name: "Tiêu Chuẩn",
    blurb: "Cân bằng chất lượng và trải nghiệm.",
    items: [
      "2 buổi studio + ngoại cảnh",
      "80 ảnh chỉnh màu",
      "Album cao cấp",
      "4 trang phục",
      "Makeup cô dâu 1 buổi",
      "Video highlight 3–5 phút",
    ],
    price: "18.900.000đ",
  },
  {
    n: "03",
    featured: false,
    name: "Cao Cấp",
    blurb: "Trải nghiệm trọn vẹn, cá nhân hóa cao.",
    items: [
      "Ngoại cảnh xa / theo yêu cầu",
      "Album da thật cao cấp",
      "6 trang phục",
      "Ekip riêng",
      "Video phóng sự + highlight",
      "Ưu tiên lịch & chăm sóc VIP",
    ],
    price: "35.000.000đ+",
  },
];

const steps = [
  {
    n: "01",
    title: "Tư vấn & chọn gói",
    body: "Chia sẻ phong cách, ngân sách, ngày cưới — chọn gói phù hợp, không ép.",
  },
  {
    n: "02",
    title: "Concept & địa điểm",
    body: "Chọn ý tưởng, trang phục và xác nhận ngày chụp.",
  },
  {
    n: "03",
    title: "Chụp ảnh",
    body: "Buổi chụp đúng kế hoạch. Bạn chỉ cần tận hưởng.",
  },
  {
    n: "04",
    title: "Chọn & chỉnh ảnh",
    body: "Xem, chọn ảnh và gửi yêu cầu chỉnh sửa.",
  },
  {
    n: "05",
    title: "Nhận album",
    body: "Cam kết giao ảnh trong 15 ngày.",
    strong: true,
  },
];

const faqs = [
  {
    q: "Gói chụp ảnh cưới trọn gói bao nhiêu tiền?",
    a: "Các gói dao động từ 9.900.000đ đến 35.000.000đ+, tùy số buổi, ảnh, trang phục và dịch vụ đi kèm. Không có phí ẩn.",
  },
  {
    q: "Nên đặt lịch chụp ảnh cưới trước bao lâu?",
    a: "Nên đặt trước ngày cưới ít nhất 2–3 tháng. Mùa cưới lịch thường kín sớm.",
  },
  {
    q: "Có được xem ảnh thật của khách cũ không?",
    a: "Có. Portfolio trên trang là ảnh thật của các cặp đôi đã chụp.",
  },
  {
    q: "Nếu không hài lòng với ảnh nháp thì sao?",
    a: "Bạn có 2 lượt yêu cầu chỉnh sửa miễn phí.",
  },
  {
    q: "Có thể chụp ngoại cảnh ở tỉnh khác không?",
    a: "Có. Đà Lạt, Hội An, các tỉnh và một số điểm nước ngoài. Chi phí di chuyển thống nhất trước.",
  },
  {
    q: "Quy trình tư vấn có mất phí không?",
    a: "Hoàn toàn miễn phí, không cần đặt cọc hay cam kết.",
  },
];

const IMG = {
  hero: "/demos/wedding-saler/hero.jpg",
  consultant: "/demos/wedding-saler/consultant.jpg",
  break: "/demos/wedding-saler/break.jpg",
  concept01: "/demos/wedding-saler/concept-01.jpg",
  concept02: "/demos/wedding-saler/concept-02.jpg",
  concept03: "/demos/wedding-saler/concept-03.jpg",
  concept04: "/demos/wedding-saler/concept-04.jpg",
  collage01: "/demos/wedding-saler/collage-01.jpg",
  collage02: "/demos/wedding-saler/collage-02.jpg",
  collage03: "/demos/wedding-saler/collage-03.jpg",
  collage04: "/demos/wedding-saler/collage-04.jpg",
  testimonial: "/demos/wedding-saler/testimonial.jpg",
  final: "/demos/wedding-saler/final.jpg",
} as const;

function MediaImg({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <img
      src={assetPath(src)}
      alt={alt}
      className="wsal-media-img"
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );
}

export function WeddingSalerLanding() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 },
    );
    root.querySelectorAll<HTMLElement>(".reveal").forEach((el) => io.observe(el));

    const parallaxEls = root.querySelectorAll<HTMLElement>(".parallax");
    const move = () => {
      if (reduce) return;
      parallaxEls.forEach((el) => {
        const r = el.getBoundingClientRect();
        const s = parseFloat(el.dataset.speed || "0.08");
        el.style.transform = `translate3d(0,${-(r.top + r.height / 2 - window.innerHeight / 2) * s}px,0) scale(1.05)`;
      });
    };
    window.addEventListener("scroll", move, { passive: true });
    move();

    const details = root.querySelectorAll<HTMLDetailsElement>(".faq details");
    const onToggle = (event: Event) => {
      const d = event.currentTarget as HTMLDetailsElement;
      if (d.open) {
        details.forEach((x) => {
          if (x !== d) x.open = false;
        });
      }
    };
    details.forEach((d) => d.addEventListener("toggle", onToggle));

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", move);
      details.forEach((d) => d.removeEventListener("toggle", onToggle));
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`wsal ${dmSans.variable} ${playfair.variable}`}
    >
      <p className="wsal-bar">
        {weddingSalerDemoBrand} · demo template ·{" "}
        <Link href={assetPath("/demos/")}>{c.vaultLabel}</Link>
      </p>

      <header>
        <a className="logo" href="#top">
          {c.brand} <i>{c.brandSub}</i>
        </a>
        <nav>
          <a href="#portfolio">{c.nav.portfolio}</a>
          <a href="#packages">{c.nav.packages}</a>
          <a href="#process">{c.nav.process}</a>
          <a href="#faq">{c.nav.faq}</a>
        </nav>
        <a className="nav-cta" href="#booking">
          {c.nav.cta}
        </a>
        <button type="button" className="menu" aria-label="Menu">
          ☰
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="media has-img parallax" data-speed="0.10">
            <MediaImg
              src={IMG.hero}
              alt="Cặp đôi mới cưới trong ánh nắng"
              priority
            />
          </div>
          <div className="shade" />
          <div className="hero-copy reveal">
            <small>PERSONAL WEDDING CONSULTANT · 01 / 12</small>
            <h1>
              Lưu giữ
              <br />
              <em>ngày trọng đại</em>
              <br />
              theo cách đẹp nhất
            </h1>
            <p>
              Tư vấn cưới cá nhân từ A đến Z — bảng giá minh bạch, ảnh thật đa
              dạng concept, giao ảnh đúng hẹn. Không lo phát sinh, không lo thất
              vọng.
            </p>
            <a className="btn light" href="#booking">
              Đặt lịch tư vấn miễn phí ↗
            </a>
          </div>
          <div className="hero-foot">
            SCROLL TO EXPLORE <span>HÀ NỘI · TP. HCM</span>
          </div>
        </section>

        <section className="dark section concerns">
          <small>02 / 12 · BEFORE THE WEDDING</small>
          <h2>
            Bạn đang lo
            <br />
            <em>điều này</em> trước ngày cưới?
          </h2>
          <div className="list">
            {concerns.map((item) => (
              <div key={item.n}>
                <b>{item.n}</b>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <h3>
            Chúng tôi hiểu những nỗi lo này.
            <br />
            <em>Và đây là lý do trang tư vấn này ra đời.</em>
          </h3>
        </section>

        <section className="section consultant">
          <small>03 / 12 · YOUR PERSONAL CONSULTANT</small>
          <div className="two">
            <div className="portrait has-img reveal">
              <MediaImg
                src={IMG.consultant}
                alt="Tư vấn viên / saler studio wedding"
              />
            </div>
            <div className="reveal">
              <h2>
                Người đồng hành
                <br />
                <em>cá nhân</em> của bạn
              </h2>
              <p className="large">
                <b>[Tên saler]</b> là tư vấn viên cưới cá nhân thuộc Saler Studio
                Wedding, hơn <b>5 năm</b> kinh nghiệm và đã đồng hành cùng hơn{" "}
                <b>500 cặp đôi</b>.
              </p>
              <p>
                Không phải ai cũng cần một studio hoành tráng. Đôi khi bạn chỉ
                cần một người thật sự lắng nghe — hiểu ngân sách, hiểu phong
                cách, và giúp bạn chọn đúng gói ngay từ đầu.
              </p>
              <div className="stats">
                <b>
                  5+
                  <small>NĂM KINH NGHIỆM</small>
                </b>
                <b>
                  500+
                  <small>CẶP ĐÔI</small>
                </b>
                <b>
                  30&apos;
                  <small>PHẢN HỒI</small>
                </b>
                <b>
                  12+
                  <small>CONCEPT</small>
                </b>
              </div>
            </div>
          </div>
        </section>

        <section className="photo-break has-img parallax" data-speed="0.08">
          <MediaImg
            src={IMG.break}
            alt="Cặp đôi trên cánh đồng lúc hoàng hôn"
          />
        </section>

        <section className="section" id="portfolio">
          <small>04 / 12 · REAL COUPLES · REAL PHOTOS</small>
          <h2>
            Portfolio —
            <br />
            <em>Ảnh thật</em> của những cặp đôi thật
          </h2>
          <p className="intro">
            Không có ảnh demo. Không có bộ ảnh “đặt hàng riêng”. Tất cả đều là
            ảnh của khách hàng đã chụp với chúng tôi.
          </p>
          <div className="stories">
            {concepts.map((item) => (
              <article
                key={item.n}
                className={item.reverse ? "reverse" : undefined}
              >
                <div
                  className="story-img has-img parallax"
                  data-speed={item.speed}
                >
                  <MediaImg src={item.image} alt={item.alt} />
                </div>
                <div className="story-copy reveal">
                  <small>{item.n}</small>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <a href="#portfolio">Xem thêm ảnh →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dark collage">
          <small>05 / 12 · A COLLECTION OF MOMENTS</small>
          <h2>
            Không chỉ là
            <br />
            <em>một bộ ảnh.</em>
          </h2>
          <div className="collage-grid">
            {(
              [
                ["-.05", IMG.collage01, "Lễ cưới ngoài trời"],
                [".09", IMG.collage02, "Cô dâu trong váy ren"],
                ["-.08", IMG.collage03, "Bàn tiệc hoa hồng"],
                [".06", IMG.collage04, "Cặp đôi dưới đèn string"],
              ] as const
            ).map(([speed, src, alt]) => (
              <div
                key={src}
                className="c has-img parallax"
                data-speed={speed}
              >
                <MediaImg src={src} alt={alt} />
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="packages">
          <small>06 / 12 · CLEAR PRICING</small>
          <h2>
            Gói dịch vụ
            <br />
            <em>& bảng giá</em>
          </h2>
          <p className="intro">
            Không có phí ẩn. Không có “tư vấn thêm sau”. Tất cả đã rõ ngay từ
            đây.
          </p>
          <div className="packages">
            {packages.map((pkg) => (
              <article
                key={pkg.n}
                className={pkg.featured ? "featured" : undefined}
              >
                {pkg.featured ? <label>ĐƯỢC CHỌN NHIỀU NHẤT</label> : null}
                <span>{pkg.n}</span>
                <div>
                  <h3>{pkg.name}</h3>
                  <p>{pkg.blurb}</p>
                  <ul>
                    {pkg.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                <strong>{pkg.price}</strong>
              </article>
            ))}
          </div>
          <div className="center">
            <a className="btn dark-btn" href="#booking">
              Nhận báo giá chi tiết theo nhu cầu ↗
            </a>
          </div>
        </section>

        <section className="dark section process" id="process">
          <small>07 / 12 · FROM CHAT TO ALBUM</small>
          <h2>
            Từ lần nhắn tin đầu
            <br />
            đến khi <em>cầm album</em>
          </h2>
          <div className="steps">
            {steps.map((s) => (
              <div key={s.n}>
                <b>{s.n}</b>
                <h3>{s.title}</h3>
                <p>{s.strong ? <b>{s.body}</b> : s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <small>08 / 12 · REAL WORDS</small>
          <h2>
            Cặp đôi nói gì
            <br />
            <em>về chúng tôi</em>
          </h2>
          <div className="testimonial">
            <div className="test-img has-img parallax" data-speed="0.07">
              <MediaImg
                src={IMG.testimonial}
                alt="Cặp đôi Ngọc và Duy"
              />
            </div>
            <div className="reveal">
              <small>01 / 03</small>
              <blockquote>
                “Chị tư vấn cực có tâm, gói đúng ngân sách tụi mình mà ảnh đẹp
                hơn mong đợi rất nhiều. Album giao đúng hẹn luôn.”
              </blockquote>
              <p>
                <b>Ngọc &amp; Duy</b>
                <br />
                TP. HCM
              </p>
            </div>
          </div>
        </section>

        <section className="dark section trust">
          <small>09 / 12 · PEACE OF MIND</small>
          <h2>
            Chúng tôi đặt
            <br />
            <em>sự an tâm</em> của bạn
            <br />
            lên trên hết.
          </h2>
          <div className="trust-grid">
            <div>
              <b>15</b>
              <span>NGÀY</span>
              <p>Cam kết giao ảnh đã chỉnh.</p>
            </div>
            <div>
              <b>30%</b>
              <span>ĐẶT CỌC</span>
              <p>Chính sách rõ ràng.</p>
            </div>
            <div>
              <b>2</b>
              <span>LƯỢT CHỈNH SỬA</span>
              <p>Miễn phí sau ảnh nháp.</p>
            </div>
            <div>
              <b>100%</b>
              <span>EKIP XÁC NHẬN</span>
              <p>Không đổi ekip phút chót.</p>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <small>10 / 12 · QUESTIONS</small>
          <h2>
            Câu hỏi
            <br />
            <em>thường gặp</em>
          </h2>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <b>+</b>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final has-img parallax" id="booking" data-speed="0.05">
          <MediaImg
            src={IMG.final}
            alt="Cặp đôi ôm nhau lúc hoàng hôn"
          />
          <div className="final-shade" />
          <div className="final-copy reveal">
            <small>11 / 12 · LAST FRAME</small>
            <h2>
              Sẵn sàng để ngày cưới
              <br />
              của bạn được <em>lưu giữ đúng cách?</em>
            </h2>
            <p>
              5 cặp đôi đặt lịch trong tháng này nhận{" "}
              <b>ưu đãi nâng cấp album miễn phí</b>.
            </p>
            <a className="btn light" href="#booking">
              Đặt lịch tư vấn miễn phí ↗
            </a>
          </div>
        </section>

        <section className="contact">
          <div>
            <small>12 / 12</small>
            <h2>
              Không ép chốt.
              <br />
              <em>Chỉ tư vấn thật.</em>
            </h2>
          </div>
          <div>
            <a href="#booking">Chat Zalo →</a>
            <a href="#booking">Gọi trực tiếp →</a>
            <a href="#booking">Điền form →</a>
          </div>
        </section>
      </main>

      <footer>
        SALER STUDIO WEDDING · PERSONAL WEDDING CONSULTANT · © 2026
      </footer>
    </div>
  );
}
