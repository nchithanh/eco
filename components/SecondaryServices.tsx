export function SecondaryServices() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Thêm từ YeGa</h2>
        <p className="mt-3 max-w-2xl text-[var(--yega-muted)]">
          Phụ trợ khi bạn đã tin đội ngũ — không phải dịch vụ chính.
        </p>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          <article className="py-8">
            <h3 className="font-display text-xl font-medium">Kiến trúc & hỗ trợ hệ thống</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--yega-muted)]">
              Audit, giải pháp khắc phục, hỗ trợ remote khi hệ thống đang gặp vấn đề.
            </p>
            <a href="#contact" className="mt-4 inline-block text-sm text-[var(--yega-accent)] hover:underline">
              Tìm hiểu thêm
            </a>
          </article>
          <article className="py-8">
            <h3 className="font-display text-xl font-medium">Cộng đồng đầu tư CK</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--yega-muted)]">
              Hỗ trợ gắn ID; miễn phí theo điều kiện. Không phải tư vấn đầu tư có giấy phép và không cam kết lợi nhuận.
            </p>
            <a href="#contact" className="mt-4 inline-block text-sm text-[var(--yega-accent)] hover:underline">
              Tìm hiểu thêm
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
