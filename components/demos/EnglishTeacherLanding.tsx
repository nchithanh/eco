"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { assetPath } from "@/lib/asset";
import {
  englishTeacherDemoBrand,
  englishTeacherDemoCopy as c,
} from "@/lib/demos/english-teacher-copy";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--en11-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  variable: "--en11-serif",
  display: "swap",
});

const pains = [
  "Học mãi vẫn không dám mở miệng nói, dù đã biết ngữ pháp",
  "Mất gốc từ lâu, không biết bắt đầu lại từ đâu",
  "Lịch bận, không theo được lớp cố định đông người",
  "Thi IELTS/TOEIC nhiều lần vẫn chưa đạt band mục tiêu",
  "Cho con học nhiều nơi nhưng bé vẫn chưa có nền tảng thật sự",
];

const pathSteps = [
  { n: "01", title: "TEST ĐẦU VÀO", desc: "Xác định đúng trình độ và mục tiêu" },
  { n: "02", title: "SPEAKING", desc: "Bạn nói, tôi sửa, bạn nói lại" },
  { n: "03", title: "WRITING", desc: "Sửa chi tiết từng lỗi" },
  { n: "04", title: "PROGRESS", desc: "Luôn biết mình đang ở đâu" },
  { n: "05", title: "FLEXIBLE", desc: "Lịch theo thời gian rảnh của bạn" },
];

const courses = [
  {
    no: "01 / 03",
    title: "Tiếng Anh giao tiếp cho người đi làm & người mất gốc",
    lines: [
      "Dành cho ai: người lớn muốn nói được tiếng Anh thực tế trong công việc và cuộc sống, kể cả khi đã mất gốc hoàn toàn.",
      "Hình thức: Online 1-1 | 60 phút/buổi | 3 buổi/tuần",
      "Thời lượng lộ trình: 3 tháng",
    ],
  },
  {
    no: "02 / 03",
    title: "Luyện thi IELTS — Band 5.0 đến 7.0+",
    lines: [
      "Dành cho ai: sinh viên và người đi làm cần đạt band IELTS cụ thể trong thời gian ngắn.",
      "Hình thức: Online 1-1 | Sửa Writing cá nhân từng bài | Luyện Speaking thực chiến",
      "Thời lượng lộ trình: 2–4 tháng tùy band đầu vào",
    ],
  },
  {
    no: "03 / 03",
    title: "Tiếng Anh trẻ em — Lớp nhóm nhỏ (2–4 bé)",
    lines: [
      "Dành cho ai: học sinh tiểu học và THCS cần xây nền tảng vững từ sớm.",
      "Hình thức: Online hoặc offline | Nhóm nhỏ tối đa 4 bé | Báo bài và tiến độ qua Zalo mỗi tuần",
    ],
  },
];

const methods = [
  {
    n: "01",
    title: "Test đầu vào miễn phí",
    body: "Xác định đúng trình độ và mục tiêu trước khi bắt đầu bất kỳ khóa học nào.",
  },
  {
    n: "02",
    title: "Luyện speaking mỗi buổi",
    body: "Không có buổi học nào chỉ nghe — bạn nói, tôi sửa, và bạn nói lại cho đến khi tự nhiên.",
  },
  {
    n: "03",
    title: "Sửa writing chi tiết từng lỗi",
    body: "Với IELTS, mỗi bài writing được chấm kèm nhận xét cụ thể — không phải điểm chung chung.",
  },
  {
    n: "04",
    title: "Báo tiến độ định kỳ",
    body: "Bạn luôn biết mình đang ở đâu và cần làm gì tiếp theo.",
  },
  {
    n: "05",
    title: "Linh hoạt lịch học",
    body: "Lịch được sắp xếp theo thời gian rảnh của bạn — không cần phải theo lịch cố định của lớp đông.",
  },
];

const stories = [
  {
    quote:
      "Mình mất gốc hoàn toàn, ngại nói tiếng Anh suốt nhiều năm. Sau 3 tháng học 1-1, mình đã tự tin nói chuyện với đồng nghiệp nước ngoài trong công việc.",
    name: "Minh Anh",
    meta: "nhân viên marketing, TP. HCM",
  },
  {
    quote:
      "Cô dạy IELTS rất sát. Mình từ 5.5 lên 7.0 Writing chỉ trong một khóa. Điều mình thích nhất là được sửa bài chi tiết từng lỗi.",
    name: "Hoàng Nam",
    meta: "sinh viên năm 3, Hà Nội",
  },
  {
    quote:
      "Con mình học lớp nhóm nhỏ, thầy báo bài đều đặn qua Zalo. Sau 4 tháng bé đã dám nói và phát âm rõ hơn hẳn.",
    name: "Chị Thu",
    meta: "phụ huynh học sinh lớp 5, Đà Nẵng",
  },
];

const prices = [
  {
    course: "Tiếng Anh giao tiếp 1-1",
    fee: "Liên hệ để nhận báo giá theo lộ trình",
    format: "Online",
  },
  {
    course: "Luyện thi IELTS 1-1",
    fee: "Liên hệ để nhận báo giá theo band mục tiêu",
    format: "Online",
  },
  {
    course: "Tiếng Anh trẻ em (nhóm nhỏ)",
    fee: "Liên hệ để nhận báo giá theo nhóm",
    format: "Online / Offline",
  },
];

const faqs = [
  {
    q: "Tôi mất gốc hoàn toàn thì có học được không?",
    a: "Được. Phần lớn học viên của tôi bắt đầu từ nền tảng rất thấp hoặc gần như bằng không. Buổi test đầu vào giúp xác định đúng điểm xuất phát để xây lộ trình thực tế — không ép bạn chạy theo chương trình chuẩn của người học lâu hơn.",
  },
  {
    q: "Học online 1-1 có thực sự hiệu quả không?",
    a: "Có. Học 1-1 online thường hiệu quả hơn lớp đông vì 100% thời gian học tập trung vào bạn — sửa lỗi trực tiếp, luyện nói ngay trong buổi, không bị mất thời gian chờ lượt. Nhiều học viên tiến bộ nhanh hơn hẳn so với khi học lớp truyền thống.",
  },
  {
    q: "Bao lâu thì thấy kết quả rõ ràng?",
    a: "Phần lớn học viên nhận thấy sự thay đổi rõ rệt sau 4–6 tuần học đều đặn, đặc biệt ở kỹ năng nói và phản xạ giao tiếp. Kết quả phụ thuộc vào trình độ đầu vào và mức độ luyện tập ngoài giờ học.",
  },
  {
    q: "Lịch học có linh hoạt không nếu tôi bận công việc?",
    a: "Có. Lịch học được xếp theo thời gian rảnh của bạn, bao gồm buổi tối và cuối tuần. Nếu cần dời lịch, chỉ cần báo trước 24 giờ.",
  },
  {
    q: "Tôi có thể học thử trước khi đăng ký chính thức không?",
    a: "Có. Buổi đầu tiên là buổi test đầu vào và tư vấn lộ trình miễn phí. Sau buổi đó, bạn mới quyết định có đăng ký tiếp hay không — không có áp lực.",
  },
  {
    q: "Với trẻ em, tôi có nhận được cập nhật về tiến độ học không?",
    a: "Có. Với lớp trẻ em, tôi báo bài và tiến độ qua Zalo mỗi tuần để phụ huynh nắm được con đang học đến đâu và cần hỗ trợ gì thêm ở nhà.",
  },
];

export function EnglishTeacherLanding() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const nav = navRef.current;
    if (!root || !nav) return;

    const reveals = root.querySelectorAll<HTMLElement>(".reveal");
    const pathItems = root.querySelectorAll<HTMLElement>(".path-item");
    const personalize = root.querySelector<HTMLElement>(".personalize");

    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 30);
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (!reduced) {
        root.querySelectorAll<HTMLElement>(".parallax").forEach((el) => {
          const speed = parseFloat(el.dataset.speed || "0.1");
          const r = el.getBoundingClientRect();
          const offset =
            (window.innerHeight / 2 - r.top - r.height / 2) * speed;
          el.style.transform = `translate3d(0,${offset}px,0)`;
        });
      }
      if (personalize && pathItems.length) {
        const rect = personalize.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(
            0,
            (window.innerHeight - rect.top) /
              (rect.height + window.innerHeight),
          ),
        );
        const idx = Math.min(
          pathItems.length - 1,
          Math.floor(progress * pathItems.length),
        );
        pathItems.forEach((item, i) =>
          item.classList.toggle("active", i === idx),
        );
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`en11 ${dmSans.variable} ${playfair.variable}`}
    >
      <p className="en11-bar">
        {c.demoBadge} ·{" "}
        <Link href={assetPath("/")}>Về Dolphin Software</Link>
        {" · "}
        <Link href={assetPath("/demos/")}>Demo vault</Link>
        {" · "}
        {c.demoNote}
      </p>
      <div className="noise" aria-hidden />

      <header className="nav" id="nav" ref={navRef}>
        <a className="brand" href="#top">
          ENGLISH<span>/</span>1–1
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#teacher">Giáo viên</a>
          <a href="#courses">Khóa học</a>
          <a href="#method">Phương pháp</a>
          <a href="#students">Học viên</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href="#booking">
          Học thử miễn phí ↗
        </a>
        <button type="button" className="menu-btn" aria-label="Mở menu">
          ☰
        </button>
      </header>

      <main id="top">
        <section className="hero section" aria-labelledby="en11-hero-title">
          <div className="hero-grid" aria-hidden />
          <div className="hero-copy reveal">
            <div className="eyebrow">
              PERSONAL ENGLISH STUDIO <span>01 / 10</span>
            </div>
            <h1 id="en11-hero-title">
              Học Tiếng Anh 1-1 Với Giáo Viên Riêng — Lộ Trình Cá Nhân Hóa Theo
              Đúng Trình Độ Của Bạn
            </h1>
            <p className="lead">
              Bạn không cần theo kịp cả lớp. Bạn chỉ cần một giáo viên hiểu đúng
              điểm xuất phát của mình — và biết cách đưa bạn đến mục tiêu theo
              cách ngắn nhất.
            </p>
            <div className="actions">
              <a className="btn btn-dark" href="#booking">
                Đăng ký học thử miễn phí <span>↗</span>
              </a>
              <a className="btn btn-ghost" href="#booking">
                Chat Zalo ngay
              </a>
            </div>
          </div>
          <div
            className="hero-image image-placeholder parallax"
            data-speed="0.12"
            aria-hidden
          >
            <span>
              TEACHER
              <br />
              PHOTO
            </span>
          </div>
          <div className="hero-meta" aria-hidden>
            <span>01 — PERSONALIZED</span>
            <span>ONLINE / OFFLINE</span>
            <span>1–1 LEARNING</span>
          </div>
        </section>

        <section className="problem section" aria-labelledby="en11-problem">
          <div className="section-head reveal">
            <div className="eyebrow">
              THE PROBLEM <span>02 / 10</span>
            </div>
            <h2 id="en11-problem">Bạn có đang gặp một trong những điều này?</h2>
            <p>
              Rất nhiều người học tiếng Anh mãi mà không tiến bộ — không phải vì
              họ không cố, mà vì họ đang học sai cách hoặc sai người.
            </p>
          </div>
          <div className="pain-list">
            {pains.map((text, i) => (
              <div className="pain reveal" key={text}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span>{text}</span>
                <i aria-hidden>↘</i>
              </div>
            ))}
          </div>
          <p className="closing reveal">
            Nếu bạn gật đầu với bất kỳ điều nào trên, đây là nơi phù hợp để bắt
            đầu lại — đúng hướng, đúng tốc độ.
          </p>
        </section>

        <section
          className="teacher section"
          id="teacher"
          aria-labelledby="en11-teacher"
        >
          <div className="section-head reveal">
            <div className="eyebrow">
              MEET YOUR TEACHER <span>03 / 10</span>
            </div>
            <h2 id="en11-teacher">Giới thiệu giáo viên</h2>
          </div>
          <div className="teacher-layout">
            <div
              className="teacher-photo image-placeholder parallax"
              data-speed="0.08"
              aria-hidden
            >
              <span>
                TEACHER
                <br />
                PORTRAIT
              </span>
            </div>
            <div className="teacher-content reveal">
              <p className="kicker">{c.teacherName}</p>
              <h3>
                Giáo viên tiếng Anh cá nhân với hơn 6 năm kinh nghiệm
              </h3>
              <p>
                Tôi bắt đầu dạy tiếng Anh vì tin rằng ai cũng có thể học được —
                khi được dạy đúng cách và đúng lộ trình.
              </p>
              <div className="stats">
                <div className="stat">
                  <strong>8.0</strong>
                  <span>IELTS</span>
                </div>
                <div className="stat">
                  <strong>6 năm</strong>
                  <span>Kinh nghiệm</span>
                </div>
                <div className="stat">
                  <strong>120+</strong>
                  <span>Học viên</span>
                </div>
                <div className="stat">
                  <strong>85%</strong>
                  <span>Đạt mục tiêu / 3 tháng</span>
                </div>
              </div>
              <p>
                Tôi không dạy theo giáo trình cứng nhắc. Mỗi học viên bắt đầu
                bằng một bài test đầu vào — để tôi hiểu đúng trình độ thật và
                xây lộ trình phù hợp với mục tiêu cụ thể của bạn.
              </p>
              <div className="specialties">
                NGƯỜI LỚN MẤT GỐC · IELTS / TOEIC · GIAO TIẾP · TRẺ EM
              </div>
            </div>
          </div>
        </section>

        <section
          className="personalize section"
          aria-labelledby="en11-path"
        >
          <div className="pin-wrap">
            <div className="personal-copy">
              <div className="eyebrow">
                PERSONALIZED PATH <span>04 / 10</span>
              </div>
              <h2 id="en11-path">
                Không có lộ trình nào giống nhau — vì không học viên nào giống
                nhau.
              </h2>
              <p>
                Mỗi học viên bắt đầu bằng một bài test đầu vào — để hiểu đúng
                trình độ thật và xây lộ trình phù hợp với mục tiêu cụ thể.
              </p>
            </div>
            <div className="path">
              <div className="path-line" aria-hidden />
              {pathSteps.map((step, i) => (
                <div
                  className={`path-item${i === 0 ? " active" : ""}`}
                  key={step.n}
                >
                  <span>{step.n}</span>
                  <b>{step.title}</b>
                  <small>{step.desc}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="courses section"
          id="courses"
          aria-labelledby="en11-courses"
        >
          <div className="section-head reveal">
            <div className="eyebrow">
              LEARNING PATHS <span>05 / 10</span>
            </div>
            <h2 id="en11-courses">Các khóa học hiện đang mở</h2>
          </div>
          <div className="course-track">
            {courses.map((course) => (
              <article className="course reveal" key={course.no}>
                <div className="course-no">{course.no}</div>
                <h3>{course.title}</h3>
                {course.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <span className="course-arrow" aria-hidden>
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        <section
          className="method section"
          id="method"
          aria-labelledby="en11-method"
        >
          <div className="section-head reveal">
            <div className="eyebrow">
              THE METHOD <span>06 / 10</span>
            </div>
            <h2 id="en11-method">Phương pháp giảng dạy</h2>
          </div>
          <div className="method-list">
            {methods.map((m) => (
              <article className="method-item reveal" key={m.n}>
                <span>{m.n}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
                <b aria-hidden>+</b>
              </article>
            ))}
          </div>
        </section>

        <section
          className="students section"
          id="students"
          aria-labelledby="en11-students"
        >
          <div className="section-head reveal">
            <div className="eyebrow">
              STUDENT STORIES <span>07 / 10</span>
            </div>
            <h2 id="en11-students">Học viên nói gì sau khi học</h2>
          </div>
          <div className="stories">
            {stories.map((s, i) => (
              <article className="story reveal" key={s.name}>
                <div className="story-photo image-placeholder" aria-hidden>
                  <span>
                    STUDENT
                    <br />
                    PHOTO
                  </span>
                </div>
                <div className="story-body">
                  <div className="story-no">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <blockquote>“{s.quote}”</blockquote>
                  <p>
                    <strong>{s.name}</strong>
                    <br />
                    {s.meta}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing section" aria-labelledby="en11-pricing">
          <div className="section-head reveal">
            <div className="eyebrow">
              TUITION <span>08 / 10</span>
            </div>
            <h2 id="en11-pricing">Học phí & lịch học</h2>
          </div>
          <div className="price-table">
            <div className="price-row price-head">
              <span>KHÓA HỌC</span>
              <span>HỌC PHÍ</span>
              <span>HÌNH THỨC</span>
            </div>
            {prices.map((row) => (
              <div className="price-row reveal" key={row.course}>
                <strong>{row.course}</strong>
                <span>{row.fee}</span>
                <span>{row.format}</span>
              </div>
            ))}
          </div>
          <div className="trial-note reveal">
            <strong>HỌC THỬ MIỄN PHÍ</strong>
            <p>
              Buổi đầu tiên là buổi test đầu vào và tư vấn lộ trình — hoàn toàn
              miễn phí, không ràng buộc.
            </p>
            <p>
              Lịch học được sắp xếp linh hoạt theo thời gian của bạn, bao gồm cả
              buổi tối và cuối tuần.
            </p>
          </div>
          <div className="actions reveal">
            <a className="btn btn-dark" href="#booking">
              Đặt lịch học thử miễn phí ↗
            </a>
            <a className="btn btn-ghost" href="#booking">
              Hỏi học phí qua Zalo
            </a>
          </div>
        </section>

        <section className="faq section" id="faq" aria-labelledby="en11-faq">
          <div className="section-head reveal">
            <div className="eyebrow">
              FAQ <span>09 / 10</span>
            </div>
            <h2 id="en11-faq">Câu hỏi thường gặp</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <details className="faq-item reveal" key={item.q}>
                <summary>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item.q}
                  <b aria-hidden>+</b>
                </summary>
                <div className="answer">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section
          className="booking section"
          id="booking"
          aria-labelledby="en11-booking"
        >
          <div className="booking-bg image-placeholder" aria-hidden>
            <span>
              TEACHER / DESK
              <br />
              PHOTO
            </span>
          </div>
          <div className="booking-content reveal">
            <div className="eyebrow">
              START HERE <span>10 / 10</span>
            </div>
            <h2 id="en11-booking">
              Bắt đầu bằng một buổi học thử — hoàn toàn miễn phí
            </h2>
            <p>
              Không cần cam kết ngay. Chỉ cần 60 phút để tôi hiểu đúng trình độ
              của bạn và đưa ra lộ trình thực tế — rồi bạn tự quyết định.
            </p>
            <div className="actions">
              <a className="btn btn-light" href="#booking">
                Đặt lịch học thử miễn phí ↗
              </a>
              <a className="btn btn-outline-light" href="#booking">
                Chat Zalo
              </a>
              <a className="btn btn-outline-light" href="#booking">
                Gọi trực tiếp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>{englishTeacherDemoBrand}</div>
        <div>
          Trang demo được xây dựng bởi <strong>Dolphin Software</strong> —
          landing page cho giáo viên tiếng Anh cá nhân. Số liệu minh họa.
        </div>
        <Link href={assetPath("/")}>dolphin-software.io.vn ↗</Link>
      </footer>
    </div>
  );
}
