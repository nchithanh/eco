export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#121a2b_0%,_#0B1220_55%,_#070b14_100%)]"
      />
      <div aria-hidden className="yega-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 animate-yega-fade">
        <p className="font-display text-5xl font-bold tracking-tight text-[var(--yega-text)] sm:text-7xl md:text-8xl">
          YeGa
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-tight text-[var(--yega-text)] sm:text-4xl">
          Xây web & app — từ MVP đến sản phẩm thật.
        </h1>
        <p className="mt-4 max-w-xl text-base text-[var(--yega-muted)] sm:text-lg">
          Đội ngũ 7+ năm kinh nghiệm — thiết kế, xây dựng và bàn giao end-to-end.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-[var(--yega-accent)] px-6 py-3 text-sm font-semibold text-[#0B1220] transition hover:brightness-110"
          >
            Nhận báo giá
          </a>
          <a
            href="#capabilities"
            className="border border-[var(--yega-accent)]/40 px-6 py-3 text-sm font-medium text-[var(--yega-accent)] transition hover:border-[var(--yega-accent)] hover:underline"
          >
            Xem năng lực
          </a>
        </div>
      </div>
    </section>
  );
}
