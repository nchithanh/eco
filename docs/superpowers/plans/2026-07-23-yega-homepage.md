# YeGa Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the YeGa Vietnamese one-page marketing homepage (studio-first) per `docs/superpowers/specs/2026-07-23-yega-homepage-design.md`.

**Architecture:** Next.js App Router app with a single route `app/page.tsx` composing section components under `components/`. Global tokens and fonts live in `app/globals.css` + `app/layout.tsx`. Contact uses client-side `react-hook-form` + zod with mailto fallback (no backend).

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4 (or v3 if create-next-app defaults), next/font (Syne + DM Sans), react-hook-form, zod, @hookform/resolvers, Vitest + Testing Library for smoke tests.

## Global Constraints

- Brand name: **YeGa** (exact casing)
- Primary positioning: web & mobile app studio; secondary services must not compete in hero
- Copy language: Vietnamese only (v1)
- Colors: background `#0B1220`, accent `#2DD4BF`, near-white text, muted slate
- Fonts: display **Syne**, body **DM Sans**
- Hero: one composition only — brand, headline, support, CTAs, full-bleed atmosphere — no cards/badges/stats
- Motion: hero fade-in, CTA hover accent, slow grid drift
- Contact: fields Tên · Email hoặc Zalo · Mô tả ngắn · submit **Gửi yêu cầu**
- Do not invent social links or contact channels not in the spec
- Spec path: `docs/superpowers/specs/2026-07-23-yega-homepage-design.md`
- Commits: only when the human explicitly asks (skip commit steps unless requested)

---

## File structure

| Path | Responsibility |
|------|----------------|
| `package.json` | Dependencies & scripts |
| `app/layout.tsx` | Root layout, fonts, metadata title YeGa |
| `app/globals.css` | CSS variables, grid animation, base styles |
| `app/page.tsx` | Compose all homepage sections |
| `components/Nav.tsx` | Sticky nav + anchors |
| `components/Hero.tsx` | First viewport brand composition |
| `components/Capabilities.tsx` | `#capabilities` four groups |
| `components/Process.tsx` | Four-step process |
| `components/SecondaryServices.tsx` | `#services` two subordinate offers |
| `components/ContactForm.tsx` | Client form `#contact` |
| `components/Footer.tsx` | Footer + disclaimer |
| `lib/contact-schema.ts` | Zod schema shared by form + tests |
| `vitest.config.ts` | Test runner config |
| `tests/homepage.test.tsx` | Smoke tests for key copy & sections |

---

### Task 1: Scaffold Next.js + theme tokens

**Files:**
- Create: project via `create-next-app` in `/home/thanhnc/projects/startup` (or nested `web/` if root must stay docs-only — **prefer app at repo root** alongside `docs/`)
- Create/Modify: `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `package.json`
- Test: `tests/homepage.test.tsx` (minimal “YeGa” render after Task 2; Task 1 verifies `npm run build`)

**Interfaces:**
- Consumes: nothing
- Produces: runnable Next app; CSS variables `--yega-bg`, `--yega-accent`, `--yega-text`, `--yega-muted`, `--yega-surface`

- [ ] **Step 1: Scaffold the app**

```bash
cd /home/thanhnc/projects/startup
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*" --turbopack --yes
```

If create-next-app refuses non-empty directory (because `docs/` exists), scaffold into a temp dir and move app files to root, keeping `docs/`:

```bash
cd /home/thanhnc/projects/startup
npx create-next-app@latest web-tmp --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*" --turbopack --yes
shopt -s dotglob
mv web-tmp/* .
rmdir web-tmp
```

- [ ] **Step 2: Install form + test deps**

```bash
npm install react-hook-form zod @hookform/resolvers
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Add to `package.json` scripts:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, ".") },
  },
});
```

- [ ] **Step 4: Create `vitest.setup.ts`**

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 5: Set fonts + metadata in `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "YeGa — Studio web & app",
  description:
    "YeGa là studio làm website & mobile app — từ landing đơn giản đến hệ thống phức tạp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Theme + motion base in `app/globals.css`**

Replace/extend with:

```css
@import "tailwindcss";

:root {
  --yega-bg: #0b1220;
  --yega-surface: #121a2b;
  --yega-accent: #2dd4bf;
  --yega-text: #f8fafc;
  --yega-muted: #94a3b8;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--yega-bg);
  color: var(--yega-text);
  font-family: var(--font-body), system-ui, sans-serif;
}

.font-display {
  font-family: var(--font-display), system-ui, sans-serif;
}

@keyframes yega-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes yega-grid-drift {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 48px 48px;
  }
}

.animate-yega-fade {
  animation: yega-fade-in 0.8s ease-out both;
}

.yega-grid {
  background-image:
    linear-gradient(rgba(45, 212, 191, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(45, 212, 191, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
  animation: yega-grid-drift 28s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-yega-fade,
  .yega-grid {
    animation: none;
  }
}
```

If Tailwind v3 (not v4), keep `@tailwind base/components/utilities` and map colors via `tailwind.config.ts` instead of only CSS variables — still expose the same hex values.

- [ ] **Step 7: Temporary `app/page.tsx` placeholder**

```tsx
export default function Home() {
  return <main className="min-h-screen p-8">YeGa</main>;
}
```

- [ ] **Step 8: Verify build**

```bash
npm run build
```

Expected: exit 0, Next.js compiles successfully.

---

### Task 2: Nav + Hero

**Files:**
- Create: `components/Nav.tsx`, `components/Hero.tsx`
- Modify: `app/page.tsx`
- Test: `tests/homepage.test.tsx`

**Interfaces:**
- Consumes: CSS classes `font-display`, `animate-yega-fade`, `yega-grid`, CSS vars
- Produces: `Nav`, `Hero` React components (no props)

- [ ] **Step 1: Write failing smoke test**

Create `tests/homepage.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("YeGa homepage", () => {
  it("renders hero brand and primary CTA", () => {
    render(<Home />);
    expect(screen.getAllByText("YeGa").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("heading", {
        name: /Xây web & app — từ MVP đến sản phẩm thật/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Nhận báo giá/i }),
    ).toHaveAttribute("href", "#contact");
  });
});
```

- [ ] **Step 2: Run test — expect fail**

```bash
npm test
```

Expected: FAIL (missing heading / CTA link).

- [ ] **Step 3: Implement `components/Nav.tsx`**

```tsx
const links = [
  { href: "#capabilities", label: "Năng lực" },
  { href: "#process", label: "Quy trình" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#contact", label: "Liên hệ" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0B1220]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Chính"
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-[var(--yega-text)]">
          YeGa
        </a>
        <ul className="hidden gap-8 text-sm text-[var(--yega-muted)] md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-[var(--yega-accent)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
```

- [ ] **Step 4: Implement `components/Hero.tsx`**

```tsx
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
```

- [ ] **Step 5: Wire into `app/page.tsx`**

```tsx
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
}
```

- [ ] **Step 6: Run tests — expect pass**

```bash
npm test
```

Expected: PASS for hero brand + CTA.

---

### Task 3: Capabilities + Process

**Files:**
- Create: `components/Capabilities.tsx`, `components/Process.tsx`
- Modify: `app/page.tsx`, `tests/homepage.test.tsx`

**Interfaces:**
- Consumes: page composition
- Produces: `Capabilities`, `Process` (no props); ids `#capabilities`, `#process`

- [ ] **Step 1: Extend failing assertions in test**

Add to `tests/homepage.test.tsx`:

```tsx
  it("renders capabilities and process headings", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Năng lực chính/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Quy trình gọn/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Discovery/i)).toBeInTheDocument();
    expect(screen.getByText(/Handover/i)).toBeInTheDocument();
  });
```

- [ ] **Step 2: Run test — expect fail**

```bash
npm test
```

Expected: FAIL on new headings.

- [ ] **Step 3: Implement `components/Capabilities.tsx`**

```tsx
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
```

- [ ] **Step 4: Implement `components/Process.tsx`**

```tsx
const steps = [
  { name: "Discovery", detail: "Hiểu bài toán & phạm vi" },
  { name: "Estimate", detail: "Báo giá + milestone" },
  { name: "Build", detail: "Sprint, demo định kỳ" },
  { name: "Handover", detail: "UAT, deploy, chuyển giao" },
] as const;

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Quy trình gọn</h2>
        <ol className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.name}>
              <span className="text-xs font-medium tracking-widest text-[var(--yega-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium">{step.name}</h3>
              <p className="mt-2 text-sm text-[var(--yega-muted)]">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Update `app/page.tsx`**

```tsx
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Capabilities />
      <Process />
    </main>
  );
}
```

- [ ] **Step 6: Run tests**

```bash
npm test
```

Expected: all PASS.

---

### Task 4: Secondary services + Contact + Footer

**Files:**
- Create: `components/SecondaryServices.tsx`, `components/ContactForm.tsx`, `components/Footer.tsx`, `lib/contact-schema.ts`
- Modify: `app/page.tsx`, `tests/homepage.test.tsx`

**Interfaces:**
- Consumes: `contactSchema` from `lib/contact-schema.ts`
- Produces:
  - `contactSchema` zod object: `{ name: string, contact: string, message: string }`
  - `SecondaryServices`, `ContactForm` (`"use client"`), `Footer`

- [ ] **Step 1: Add failing tests for services + contact**

```tsx
  it("renders secondary services and contact form", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Thêm từ YeGa/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Kiến trúc & hỗ trợ hệ thống/i)).toBeInTheDocument();
    expect(screen.getByText(/Cộng đồng đầu tư CK/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Bắt đầu dự án với YeGa/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Gửi yêu cầu/i })).toBeInTheDocument();
  });
```

- [ ] **Step 2: Run test — expect fail**

```bash
npm test
```

Expected: FAIL on secondary / contact copy.

- [ ] **Step 3: Create `lib/contact-schema.ts`**

```ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập tên"),
  contact: z.string().min(1, "Vui lòng nhập email hoặc Zalo"),
  message: z.string().min(1, "Vui lòng mô tả ngắn dự án"),
});

export type ContactValues = z.infer<typeof contactSchema>;
```

- [ ] **Step 4: Implement `components/SecondaryServices.tsx`**

```tsx
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
```

- [ ] **Step 5: Implement `components/ContactForm.tsx`**

```tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactValues) => {
    const subject = encodeURIComponent(`YeGa — yêu cầu từ ${data.name}`);
    const body = encodeURIComponent(
      `Tên: ${data.name}\nLiên hệ: ${data.contact}\n\n${data.message}`,
    );
    window.location.href = `mailto:hello@yega.local?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/5 bg-[var(--yega-surface)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Bắt đầu dự án với YeGa
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 max-w-xl space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-sm text-[var(--yega-muted)]">
              Tên
            </label>
            <input
              id="name"
              className="mt-1 w-full border border-white/10 bg-[#0B1220] px-3 py-2 text-[var(--yega-text)] outline-none focus:border-[var(--yega-accent)]"
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm text-[var(--yega-muted)]">
              Email hoặc Zalo
            </label>
            <input
              id="contact"
              className="mt-1 w-full border border-white/10 bg-[#0B1220] px-3 py-2 text-[var(--yega-text)] outline-none focus:border-[var(--yega-accent)]"
              {...register("contact")}
            />
            {errors.contact && (
              <p className="mt-1 text-xs text-red-400">{errors.contact.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-[var(--yega-muted)]">
              Mô tả ngắn dự án
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 w-full border border-white/10 bg-[#0B1220] px-3 py-2 text-[var(--yega-text)] outline-none focus:border-[var(--yega-accent)]"
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[var(--yega-accent)] px-6 py-3 text-sm font-semibold text-[#0B1220] transition hover:brightness-110"
          >
            Gửi yêu cầu
          </button>
          {sent && (
            <p className="text-sm text-[var(--yega-accent)]">
              Đã mở ứng dụng email của bạn (hoặc sao chép nội dung nếu trình duyệt chặn mailto).
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
```

Note: `hello@yega.local` is a placeholder until a real inbox exists — keep visible only in mailto, do not advertise as a public channel in footer.

- [ ] **Step 6: Implement `components/Footer.tsx`**

```tsx
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
```

- [ ] **Step 7: Final `app/page.tsx`**

```tsx
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Process } from "@/components/Process";
import { SecondaryServices } from "@/components/SecondaryServices";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Capabilities />
      <Process />
      <SecondaryServices />
      <ContactForm />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 8: Run tests + build**

```bash
npm test
npm run build
```

Expected: tests PASS; build exit 0.

- [ ] **Step 9: Manual visual check**

```bash
npm run dev
```

Open `http://localhost:3000` — verify first viewport brand hierarchy, mobile nav readability, `#contact` scroll from CTAs, reduced-motion still usable.

---

## Plan self-review

| Spec requirement | Task |
|------------------|------|
| Nav + anchors | Task 2 |
| Hero composition + motion classes | Task 1 (CSS) + Task 2 |
| Capabilities ×4 | Task 3 |
| Process ×4 | Task 3 |
| Secondary services + disclaimer | Task 4 |
| Contact form RHF + zod + mailto | Task 4 |
| Footer + disclaimer | Task 4 |
| Syne / DM Sans / tokens | Task 1 |
| VI copy, no EN i18n | All tasks |
| Smoke tests | Tasks 2–4 |

**Placeholder scan:** mailto uses `hello@yega.local` until real email — documented; no TBD steps remaining.

**Type consistency:** `ContactValues` / `contactSchema` fields `name`, `contact`, `message` match form `register` keys.
