export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-medium">YeGa · © 2026</p>
        <nav className="flex flex-wrap gap-4 text-sm text-[var(--yega-muted)]" aria-label="Footer">
          <a href="#capabilities" className="hover:text-[var(--yega-accent)]">Năng lực</a>
          <a href="#process" className="hover:text-[var(--yega-accent)]">Quy trình</a>
          <a href="#services" className="hover:text-[var(--yega-accent)]">Dịch vụ</a>
          <a href="#contact" className="hover:text-[var(--yega-accent)]">Liên hệ</a>
        </nav>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-6 text-xs text-[var(--yega-muted)]">
        Nội dung liên quan chứng khoán chỉ mang tính chia sẻ cộng đồng — không phải tư vấn đầu tư có giấy phép và không cam kết lợi nhuận.
      </p>
    </footer>
  );
}
