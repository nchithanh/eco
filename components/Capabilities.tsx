const items = [
  {
    title: "Website",
    body: "Landing, corporate, CMS — từ trang giới thiệu đến hệ thống nội dung.",
  },
  {
    title: "Mobile app",
    body: "iOS / Android (hoặc cross-platform) theo nhu cầu sản phẩm.",
  },
  {
    title: "Backend & tích hợp",
    body: "API, auth, thanh toán và kết nối dịch vụ bên thứ ba.",
  },
  {
    title: "UI/UX & bàn giao",
    body: "Thiết kế hệ thống, tài liệu và đào tạo bàn giao.",
  },
] as const;

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 border-t border-white/5 bg-[var(--yega-bg)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Năng lực chính</h2>
        <p className="mt-3 max-w-2xl text-[var(--yega-muted)]">
          Full-cycle: từ ý tưởng đến sản phẩm chạy production.
        </p>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="border-t border-[var(--yega-accent)]/25 pt-6">
              <h3 className="font-display text-xl font-medium text-[var(--yega-text)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--yega-muted)]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
