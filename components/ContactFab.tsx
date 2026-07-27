"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const CONTACTS = {
  phone: "0779937633",
  zalo: "https://zalo.me/0779937633",
  email: "nchithanh9999@gmail.com",
} as const;

function IconChat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M5 6.5A2.5 2.5 0 017.5 4h9A2.5 2.5 0 0119 6.5v7A2.5 2.5 0 0116.5 16H11l-3.8 2.7c-.55.4-1.2-.1-1.05-.75L7 16H7.5A2.5 2.5 0 015 13.5v-7z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9h7M8.5 12h4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M8.2 4.8l2.1 2.1c.3.3.35.78.12 1.15L9.2 9.8a11.2 11.2 0 005 5l1.75-1.22c.37-.23.85-.18 1.15.12l2.1 2.1c.4.4.4 1.05 0 1.45l-1.2 1.2c-.55.55-1.35.78-2.12.55A15.7 15.7 0 014.5 7.27c-.23-.77 0-1.57.55-2.12l1.2-1.2c.4-.4 1.05-.4 1.45 0z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 7.5L12 13l7.5-5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M7 7l10 10M17 7L7 17"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ContactFab() {
  const { t } = useLocale();
  const fab = t.contactFab;
  const [open, setOpen] = useState(false);

  const items = [
    {
      key: "zalo",
      href: CONTACTS.zalo,
      label: fab.zalo,
      icon: <IconChat className="size-5" />,
      external: true,
    },
    {
      key: "phone",
      href: `tel:${CONTACTS.phone}`,
      label: fab.phone,
      icon: <IconPhone className="size-5" />,
      external: false,
    },
    {
      key: "email",
      href: `mailto:${CONTACTS.email}`,
      label: fab.email,
      icon: <IconMail className="size-5" />,
      external: false,
    },
  ] as const;

  return (
    <div className="kuct-contact-fab pointer-events-none fixed right-4 bottom-5 z-[120] flex flex-col items-center gap-3 sm:right-6 sm:bottom-7">
      {open ? (
        <ul className="pointer-events-auto flex flex-col items-center gap-3">
          {items.map((item, index) => (
            <li
              key={item.key}
              className="kuct-contact-fab__item"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <a
                href={item.href}
                aria-label={item.label}
                title={item.label}
                className="kuct-contact-fab__btn"
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <button
        type="button"
        className="kuct-contact-fab__btn kuct-contact-fab__toggle pointer-events-auto"
        aria-expanded={open}
        aria-label={open ? fab.close : fab.open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <IconClose className="size-5" />
        ) : (
          <IconChat className="size-5" />
        )}
      </button>
    </div>
  );
}
