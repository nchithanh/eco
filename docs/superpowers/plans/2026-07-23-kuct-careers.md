# KUCT Careers Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `/careers` with four freelance openings (~USD 1,000/mo equivalent, hourly flexible) and a dedicated apply form, localized VI/EN/JA/DE.

**Architecture:** New App Router page `app/careers/page.tsx` composing CareersHero, CareersJobs, CareersApplyForm under shared Nav/Footer. Lift `LocaleProvider` into `app/layout.tsx` so homepage and careers share locale. Job data lives in i18n dictionaries; apply uses react-hook-form + zod → mailto (same as Contact).

**Tech Stack:** Next.js App Router, TypeScript, Tailwind, react-hook-form, zod, Vitest + Testing Library, existing KUCT glass tokens.

## Global Constraints

- Engagement: **freelance only** (never full-time)
- Comp copy: **~$1,000/mo equivalent · hourly flexible** (all locales)
- Roles (stable ids): `frontend` | `mobile` | `backend` | `design`
- Apply: form on `/careers#apply` with mailto to `hello@kuct.local`
- Visual: soft glass / lavender–pink KUCT style; no new color system
- i18n: VI / EN / JA / DE for all careers copy
- Spec: `docs/superpowers/specs/2026-07-23-kuct-careers-design.md`
- Commits: only when the human explicitly asks (skip commit steps unless requested)

---

## File structure

| Path | Responsibility |
|------|----------------|
| `app/layout.tsx` | Wrap children with `LocaleProvider` |
| `app/page.tsx` | Homepage only (remove nested LocaleProvider) |
| `app/careers/page.tsx` | Careers route composition |
| `components/Nav.tsx` | Add Careers link; use `/#…` for home anchors when not on `/` |
| `components/Footer.tsx` | Add Careers link; same anchor fix |
| `components/CareersHero.tsx` | Careers hero section |
| `components/CareersJobs.tsx` | Four job cards + Apply → `#apply` + role select |
| `components/CareersApplyForm.tsx` | Apply form client component |
| `lib/careers-schema.ts` | Zod schema for apply form |
| `lib/i18n/types.ts` | Extend `Dictionary` + `nav.careers` |
| `lib/i18n/dictionaries.ts` | Careers copy for vi/en/ja/de |
| `tests/careers.test.tsx` | Careers smoke + locale + form role |

---

### Task 1: i18n types + dictionaries for careers

**Files:**
- Modify: `lib/i18n/types.ts`
- Modify: `lib/i18n/dictionaries.ts`
- Test: Typecheck via `npx tsc --noEmit` (full UI tests in Task 4)

**Interfaces:**
- Consumes: existing `Dictionary`, `Locale`
- Produces: `nav.careers: string`; `careers` block on `Dictionary` (see type below)

- [ ] **Step 1: Extend `Dictionary` in `lib/i18n/types.ts`**

Add to `nav`:

```ts
careers: string;
```

Add after `contact` (before `footer`):

```ts
  careers: {
    meta: { title: string; description: string };
    hero: {
      eyebrow: string;
      headline: string;
      support: string;
    };
    roles: {
      eyebrow: string;
      title: string;
      support: string;
    };
    engagement: string;
    comp: string;
    applyCta: string;
    jobs: {
      id: "frontend" | "mobile" | "backend" | "design";
      title: string;
      summary: string;
      bullets: string[];
      tags: string[];
    }[];
    apply: {
      eyebrow: string;
      title: string;
      support: string;
      name: string;
      contact: string;
      portfolio: string;
      role: string;
      message: string;
      submit: string;
      sent: string;
      mailSubject: string;
      mailBodyName: string;
      mailBodyContact: string;
      mailBodyPortfolio: string;
      mailBodyRole: string;
      errors: {
        name: string;
        contact: string;
        portfolio: string;
        role: string;
        message: string;
      };
    };
  };
```

- [ ] **Step 2: Add Vietnamese `careers` + `nav.careers` (and same keys for en/ja/de)**

For **each** of `vi`, `en`, `ja`, `de` in `dictionaries.ts`:

1. Set `nav.careers` → VI: `"Tuyển dụng"`, EN: `"Careers"`, JA: `"採用"`, DE: `"Karriere"`
2. Add full `careers` object. Job ids must be exactly `frontend`, `mobile`, `backend`, `design`.

**VI content (canonical — translate faithfully for EN/JA/DE):**

```ts
careers: {
  meta: {
    title: "KUCT — Tuyển dụng freelancer",
    description:
      "Cộng tác freelance với KUCT — web, mobile, backend, UI/UX. ~1000 USD/tháng tương đương, linh hoạt theo giờ.",
  },
  hero: {
    eyebrow: "Careers",
    headline: "Freelance cùng KUCT",
    support:
      "Cần đồng đội linh hoạt theo dự án — không phải full-time. Mức ~1000 USD/tháng tương đương full capacity, thanh toán theo giờ thỏa thuận.",
  },
  roles: {
    eyebrow: "Open roles",
    title: "Vị trí đang mở",
    support: "Bốn hướng khớp dịch vụ hiện tại của studio. Remote-friendly.",
  },
  engagement: "Freelance",
  comp: "~$1,000/tháng tương đương · linh hoạt theo giờ",
  applyCta: "Ứng tuyển",
  jobs: [
    {
      id: "frontend",
      title: "Frontend Developer (Next.js / React)",
      summary: "Landing, corporate site và sản phẩm web với Next.js & React.",
      bullets: [
        "Thành thạo React / Next.js / TypeScript",
        "Biết Tailwind và UI component patterns",
        "Giao tiếp rõ ràng, demo theo sprint",
        "Có portfolio web thực tế",
      ],
      tags: ["Next.js", "React", "TypeScript"],
    },
    {
      id: "mobile",
      title: "Mobile Developer (Flutter / React Native)",
      summary: "App iOS/Android hoặc cross-platform theo nhu cầu sản phẩm.",
      bullets: [
        "Flutter và/hoặc React Native",
        "Hiểu lifecycle, navigation, API integration",
        "Ưu tiên UX và ổn định release",
        "Có app đã ship hoặc demo rõ",
      ],
      tags: ["Flutter", "React Native", "Mobile"],
    },
    {
      id: "backend",
      title: "Backend Developer (Node.js / API)",
      summary: "API, auth, thanh toán và tích hợp dịch vụ bên thứ ba.",
      bullets: [
        "Node.js (NestJS / Express) và REST hoặc tương đương",
        "Auth, validation, error handling vững",
        "PostgreSQL hoặc DB tương đương là lợi thế",
        "Viết tài liệu API ngắn gọn",
      ],
      tags: ["Node.js", "API", "PostgreSQL"],
    },
    {
      id: "design",
      title: "UI/UX Designer",
      summary: "Thiết kế giao diện, design system và bàn giao cho engineering.",
      bullets: [
        "Figma thành thạo; biết design system",
        "Tư duy product / UX rõ ràng",
        "Handover sạch cho dev",
        "Portfolio UI web hoặc app",
      ],
      tags: ["UI/UX", "Figma", "Design system"],
    },
  ],
  apply: {
    eyebrow: "Apply",
    title: "Gửi hồ sơ freelance",
    support: "Điền form — KUCT sẽ mở email để bạn gửi kèm portfolio.",
    name: "Tên",
    contact: "Email hoặc Zalo",
    portfolio: "Link portfolio / GitHub",
    role: "Vị trí",
    message: "Giới thiệu ngắn + availability",
    submit: "Gửi ứng tuyển",
    sent: "Đã mở ứng dụng email của bạn (hoặc sao chép nội dung nếu trình duyệt chặn mailto).",
    mailSubject: "KUCT Careers —",
    mailBodyName: "Tên",
    mailBodyContact: "Liên hệ",
    mailBodyPortfolio: "Portfolio",
    mailBodyRole: "Vị trí",
    errors: {
      name: "Vui lòng nhập tên",
      contact: "Vui lòng nhập email hoặc Zalo",
      portfolio: "Vui lòng nhập link portfolio",
      role: "Vui lòng chọn vị trí",
      message: "Vui lòng giới thiệu ngắn",
    },
  },
},
```

**EN `comp`:** `"~$1,000/mo equivalent · hourly flexible"`  
**JA `comp`:** `"約1,000 USD/月相当 · 時間単価で柔軟"`  
**DE `comp`:** `"~1.000 USD/Monat Äquivalent · stundenweise flexibel"`

Translate remaining strings for EN/JA/DE in the same structure. Keep `jobs[].id` and `tags` identical across locales.

- [ ] **Step 3: Verify TypeScript**

```bash
cd /home/thanhnc/projects/startup && npx tsc --noEmit
```

Expected: exit 0 (or only pre-existing unrelated errors — fix careers-related type errors).

---

### Task 2: Careers schema + apply form + jobs + hero components

**Files:**
- Create: `lib/careers-schema.ts`
- Create: `components/CareersHero.tsx`
- Create: `components/CareersJobs.tsx`
- Create: `components/CareersApplyForm.tsx`
- Test: covered in Task 4

**Interfaces:**
- Consumes: `useLocale()`, `t.careers`
- Produces:
  - `CareersHero()`, `CareersJobs()`, `CareersApplyForm({ initialRole?: JobId })`
  - `createCareersSchema(errors)`, `CareersValues`, `JOB_IDS`, `JobId`

- [ ] **Step 1: Create `lib/careers-schema.ts`**

```ts
import { z } from "zod";

export const JOB_IDS = ["frontend", "mobile", "backend", "design"] as const;
export type JobId = (typeof JOB_IDS)[number];

export function createCareersSchema(errors: {
  name: string;
  contact: string;
  portfolio: string;
  role: string;
  message: string;
}) {
  return z.object({
    name: z.string().min(1, errors.name),
    contact: z.string().min(1, errors.contact),
    portfolio: z.string().min(1, errors.portfolio),
    role: z.enum(JOB_IDS, { message: errors.role }),
    message: z.string().min(1, errors.message),
  });
}

export type CareersValues = {
  name: string;
  contact: string;
  portfolio: string;
  role: JobId;
  message: string;
};
```

- [ ] **Step 2: Create `components/CareersHero.tsx`**

```tsx
"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

export function CareersHero() {
  const { t } = useLocale();
  const h = t.careers.hero;

  return (
    <section className="relative overflow-hidden border-b border-white/40 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#faf5ff] via-white/40 to-[#ede9fe]/80" />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {h.eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-5xl">
          {h.headline}
        </h1>
        <p className="mt-4 max-w-xl text-base text-[var(--kuct-muted)] sm:text-lg">
          {h.support}
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/CareersJobs.tsx`**

```tsx
"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { JobId } from "@/lib/careers-schema";

type Props = {
  onApply: (role: JobId) => void;
};

export function CareersJobs({ onApply }: Props) {
  const { t } = useLocale();
  const c = t.careers;

  return (
    <section id="roles" className="scroll-mt-20 border-b border-white/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {c.roles.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {c.roles.title}
        </h2>
        <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">{c.roles.support}</p>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {c.jobs.map((job) => (
            <li
              key={job.id}
              className="flex flex-col rounded-2xl border border-white/60 bg-white/50 p-6 shadow-[0_10px_30px_rgba(139,92,246,0.06)] backdrop-blur-md"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="rounded-full bg-[var(--kuct-accent)]/10 px-3 py-1 text-[var(--kuct-accent)]">
                  {c.engagement}
                </span>
                <span className="text-[var(--kuct-muted)]">{c.comp}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{job.title}</h3>
              <p className="mt-2 text-sm text-[var(--kuct-muted)]">{job.summary}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--kuct-text)]">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/70 bg-white/40 px-2.5 py-0.5 text-xs text-[var(--kuct-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="kuct-btn-primary mt-6 self-start rounded-full px-5 py-2.5 text-sm font-semibold"
                onClick={() => onApply(job.id)}
              >
                {c.applyCta}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create `components/CareersApplyForm.tsx`**

Mirror `ContactForm` patterns: outer wrapper with `key={locale}`, inner form, `createCareersSchema`, mailto including portfolio + role label from `t.careers.jobs`.

```tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createCareersSchema,
  type CareersValues,
  type JobId,
} from "@/lib/careers-schema";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const fieldClass =
  "mt-1 w-full rounded-2xl border border-white/70 bg-white/50 px-4 py-2.5 text-[var(--kuct-text)] outline-none backdrop-blur-md focus:border-[var(--kuct-accent)]";

type Props = { initialRole?: JobId };

export function CareersApplyForm({ initialRole }: Props) {
  const { locale } = useLocale();
  return <CareersApplyFormInner key={`${locale}-${initialRole ?? ""}`} initialRole={initialRole} />;
}

function CareersApplyFormInner({ initialRole }: Props) {
  const { t } = useLocale();
  const a = t.careers.apply;
  const [sent, setSent] = useState(false);
  const schema = useMemo(() => createCareersSchema(a.errors), [a.errors]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CareersValues>({
    resolver: zodResolver(schema),
    defaultValues: { role: initialRole },
  });

  useEffect(() => {
    if (initialRole) setValue("role", initialRole);
  }, [initialRole, setValue]);

  const onSubmit = (data: CareersValues) => {
    const roleTitle =
      t.careers.jobs.find((j) => j.id === data.role)?.title ?? data.role;
    const subject = encodeURIComponent(`${a.mailSubject} ${roleTitle}`);
    const body = encodeURIComponent(
      `${a.mailBodyName}: ${data.name}\n${a.mailBodyContact}: ${data.contact}\n${a.mailBodyPortfolio}: ${data.portfolio}\n${a.mailBodyRole}: ${roleTitle}\n\n${data.message}`,
    );
    window.location.href = `mailto:hello@kuct.local?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="apply" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
          {a.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {a.title}
        </h2>
        <p className="mt-3 max-w-xl text-[var(--kuct-muted)]">{a.support}</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 max-w-xl space-y-5"
          noValidate
        >
          {/* name, contact, portfolio inputs — same pattern as ContactForm */}
          <div>
            <label htmlFor="careers-name" className="block text-sm text-[var(--kuct-muted)]">
              {a.name}
            </label>
            <input id="careers-name" className={fieldClass} {...register("name")} />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="careers-contact" className="block text-sm text-[var(--kuct-muted)]">
              {a.contact}
            </label>
            <input id="careers-contact" className={fieldClass} {...register("contact")} />
            {errors.contact && (
              <p className="mt-1 text-xs text-red-600">{errors.contact.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="careers-portfolio" className="block text-sm text-[var(--kuct-muted)]">
              {a.portfolio}
            </label>
            <input id="careers-portfolio" className={fieldClass} {...register("portfolio")} />
            {errors.portfolio && (
              <p className="mt-1 text-xs text-red-600">{errors.portfolio.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="careers-role" className="block text-sm text-[var(--kuct-muted)]">
              {a.role}
            </label>
            <select id="careers-role" className={fieldClass} {...register("role")}>
              <option value="">{a.role}</option>
              {t.careers.jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title}
                </option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-1 text-xs text-red-600">{errors.role.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="careers-message" className="block text-sm text-[var(--kuct-muted)]">
              {a.message}
            </label>
            <textarea
              id="careers-message"
              rows={4}
              className={fieldClass}
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="kuct-btn-primary rounded-full px-7 py-3 text-sm font-semibold"
          >
            {a.submit}
          </button>
          {sent && <p className="text-sm text-[var(--kuct-accent)]">{a.sent}</p>}
        </form>
      </div>
    </section>
  );
}
```

---

### Task 3: Page route + Nav/Footer + LocaleProvider lift

**Files:**
- Create: `app/careers/page.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `components/Nav.tsx`
- Modify: `components/Footer.tsx`

**Interfaces:**
- Consumes: Careers components from Task 2; `t.nav.careers`
- Produces: `/careers` route; shared locale across pages

- [ ] **Step 1: Lift LocaleProvider into `app/layout.tsx`**

`app/layout.tsx` must be a server component for fonts/metadata — create a thin client wrapper:

Create `components/AppProviders.tsx`:

```tsx
"use client";

import type { ReactNode } from "react";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
```

In `app/layout.tsx`, wrap `{children}` with `<AppProviders>…</AppProviders>`.

Remove `<LocaleProvider>` from `app/page.tsx` (keep only `<main>…</main>` sections).

- [ ] **Step 2: Create `app/careers/page.tsx`**

```tsx
"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/CareersHero";
import { CareersJobs } from "@/components/CareersJobs";
import { CareersApplyForm } from "@/components/CareersApplyForm";
import type { JobId } from "@/lib/careers-schema";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<JobId | undefined>();

  const onApply = (role: JobId) => {
    setSelectedRole(role);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Nav />
      <CareersHero />
      <CareersJobs onApply={onApply} />
      <CareersApplyForm initialRole={selectedRole} />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 3: Update Nav links**

In `components/Nav.tsx`:

1. Import `usePathname` from `next/navigation`.
2. `const pathname = usePathname();`
3. `const home = pathname === "/" ? "" : "/";`
4. Build links:

```ts
const links = [
  { href: `${home}#capabilities`, label: t.nav.services },
  { href: `${home}#process`, label: t.nav.process },
  { href: `${home}#stack`, label: t.nav.stack },
  { href: "/careers", label: t.nav.careers },
  { href: `${home}#contact`, label: t.nav.contact },
] as const;
```

5. Logo / brand `href`: `pathname === "/" ? "#top" : "/"`
6. Primary CTA contact button: `href={`${home}#contact`}`

- [ ] **Step 4: Update Footer links**

Same `usePathname` + `home` prefix pattern; include `/careers` with `t.nav.careers`.

---

### Task 4: Tests + verify

**Files:**
- Create: `tests/careers.test.tsx`
- Modify: `tests/homepage.test.tsx` only if LocaleProvider lift breaks Home render (Home should still work without wrapping LocaleProvider)

**Interfaces:**
- Consumes: `/careers` page, dictionaries
- Produces: green `npm test` and `npm run build`

- [ ] **Step 1: Write `tests/careers.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import CareersPage from "@/app/careers/page";
import { AppProviders } from "@/components/AppProviders";

function renderCareers() {
  return render(
    <AppProviders>
      <CareersPage />
    </AppProviders>,
  );
}

describe("KUCT careers page", () => {
  it("renders freelance hero and four open roles", () => {
    renderCareers();
    expect(
      screen.getByRole("heading", { name: /Freelance cùng KUCT/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Frontend Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/UI\/UX Designer/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Freelance/i).length).toBeGreaterThanOrEqual(4);
    expect(
      screen.getAllByText(/\$1,000|1000 USD|1\.000 USD/i).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("Apply on a job scrolls context by selecting role in the form", async () => {
    const user = userEvent.setup();
    renderCareers();
    const applyButtons = screen.getAllByRole("button", { name: /Ứng tuyển/i });
    await user.click(applyButtons[0]);
    const roleSelect = screen.getByLabelText(/Vị trí/i);
    expect(roleSelect).toHaveValue("frontend");
  });

  it("switches careers copy to English", async () => {
    const user = userEvent.setup();
    renderCareers();
    await user.click(screen.getByRole("button", { name: /^EN$/i }));
    expect(
      screen.getByRole("heading", { name: /Freelance with KUCT|Freelance cùng/i }),
    ).toBeTruthy();
    // Prefer exact EN headline once dictionaries are written:
    // /Freelance with KUCT/i
  });
});
```

Use the **exact EN headline** you put in dictionaries (recommended: `"Freelance with KUCT"`) and assert that string.

- [ ] **Step 2: Fix homepage tests if needed**

If `Home` no longer wraps `LocaleProvider`, tests that render `<Home />` still work because layout is not used in RTL — wrap Home tests with `AppProviders` **or** keep a LocaleProvider inside `app/page.tsx` temporarily.

**Preferred:** In tests, wrap pages that need locale:

```tsx
render(
  <AppProviders>
    <Home />
  </AppProviders>,
);
```

Update `tests/homepage.test.tsx` accordingly for every `render(<Home />)` and keep the existing Nav test.

- [ ] **Step 3: Run tests and build**

```bash
cd /home/thanhnc/projects/startup && npm test -- --run && npm run build
```

Expected: all tests pass; build succeeds with `/careers` route.

---

## Spec coverage self-review

| Spec requirement | Task |
| --- | --- |
| `/careers` page | Task 3 |
| 4 freelance roles | Task 1–2 |
| ~$1000/mo equivalent hourly flexible | Task 1 copy |
| Apply form on page | Task 2 |
| Prefill role from card CTA | Task 2–3 |
| Nav + Footer link | Task 3 |
| i18n VI/EN/JA/DE | Task 1 |
| Glass style | Task 2 classNames |
| Smoke tests | Task 4 |
| No CMS / no slug pages | — intentionally omitted |

No TBD placeholders. Types `JobId` / form fields consistent across tasks.
