"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { assetPath } from "@/lib/asset";
import {
  getAiChatCopy,
  matchAiChatReply,
} from "@/lib/i18n/ai-chat-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const CONTACTS = {
  phone: "0779937633",
  zalo: "https://zalo.me/0779937633",
  email: "nchithanh9999@gmail.com",
} as const;

const CHAT_AVATAR = "/mascot/dolphin-chat.png";

const TOAST_INITIAL_DELAY_MS = 800;
const TOAST_ROTATE_MS = 5000;
const TOAST_TYPEWRITER_CHAR_MS = 34;
const TOAST_TYPEWRITER_PAUSE_MS = 5000;

function useTypewriterLoop(
  text: string,
  active: boolean,
  charDelayMs = TOAST_TYPEWRITER_CHAR_MS,
  pauseMs = TOAST_TYPEWRITER_PAUSE_MS,
) {
  const [displayed, setDisplayed] = useState("");
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const clearTimers = () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
      timersRef.current = [];
    };

    if (!active) {
      clearTimers();
      setDisplayed("");
      return clearTimers;
    }

    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayed(text);
      return clearTimers;
    }

    let cancelled = false;

    const schedule = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timersRef.current.push(id);
    };

    const run = () => {
      if (cancelled) return;
      let charIndex = 0;
      setDisplayed("");

      const tick = () => {
        if (cancelled) return;
        charIndex += 1;
        setDisplayed(text.slice(0, charIndex));
        if (charIndex < text.length) {
          schedule(tick, charDelayMs);
        } else {
          schedule(run, pauseMs);
        }
      };

      tick();
    };

    run();
    return () => {
      cancelled = true;
      clearTimers();
    };
  }, [text, active, charDelayMs, pauseMs]);

  return displayed;
}

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

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

function IconSend({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
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

let msgSeq = 0;
function nextId(prefix: string) {
  msgSeq += 1;
  return `${prefix}-${msgSeq}`;
}

export function AiChatWidget() {
  const { locale, t } = useLocale();
  const c = getAiChatCopy(locale);
  const fab = t.contactFab;
  const panelId = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toastTimerRef = useRef<number | null>(null);
  const hadOpenRef = useRef(false);

  const [open, setOpen] = useState(false);
  const [toastIndex, setToastIndex] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const toastPool = useMemo(
    () => [c.toastWelcome, c.toastContinue, ...c.suggestions],
    [c],
  );
  const toastText = toastPool[toastIndex] ?? "";
  const typedToast = useTypewriterLoop(toastText, toastVisible && !open);

  const clearToastTimer = () => {
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
  };

  const showToast = () => {
    clearToastTimer();
    setToastVisible(true);
  };

  const scheduleNextToast = () => {
    clearToastTimer();
    setToastVisible(false);
    toastTimerRef.current = window.setTimeout(() => {
      setToastIndex((prev) => (prev + 1) % toastPool.length);
      setToastVisible(true);
      toastTimerRef.current = null;
    }, TOAST_ROTATE_MS);
  };

  useEffect(() => {
    if (open) {
      hadOpenRef.current = true;
      clearToastTimer();
      setToastVisible(false);
      return;
    }

    if (hadOpenRef.current) {
      showToast();
      return;
    }

    const id = window.setTimeout(() => showToast(), TOAST_INITIAL_DELAY_MS);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => () => clearToastTimer(), []);

  useEffect(() => {
    setMessages([{ id: nextId("a"), role: "assistant", text: c.greeting }]);
  }, [c.greeting]);

  useEffect(() => {
    if (!open) return;
    const list = listRef.current;
    if (list && typeof list.scrollTo === "function") {
      list.scrollTo({ top: list.scrollHeight });
    }
    inputRef.current?.focus();
  }, [open, messages]);

  useEffect(() => {
    if (!open) return;
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(max-width: 639px)");
    if (!mq.matches) return;

    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [open]);

  const dismissToast = () => {
    scheduleNextToast();
  };

  const openChat = () => {
    setOpen(true);
  };

  const pushUserAndReply = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: ChatMessage = {
      id: nextId("u"),
      role: "user",
      text: trimmed,
    };
    const reply = matchAiChatReply(trimmed, c);
    const assistantMsg: ChatMessage = {
      id: nextId("a"),
      role: "assistant",
      text: reply,
    };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setDraft("");
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    pushUserAndReply(draft);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      pushUserAndReply(draft);
    }
  };

  const contactItems = [
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
    <div className="kuct-ai-chat pointer-events-none fixed right-4 bottom-0 z-[120] flex items-end gap-3 sm:right-6">
      {open ? (
        <section
          id={panelId}
          role="dialog"
          aria-label={c.agentName}
          className="kuct-ai-chat__panel pointer-events-auto flex w-[min(22.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.25rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.96)] shadow-[0_18px_48px_rgba(var(--kuct-accent-rgb),0.18)] backdrop-blur-xl max-sm:fixed max-sm:inset-0 max-sm:z-[200] max-sm:h-dvh max-sm:w-full max-sm:max-w-none max-sm:rounded-none max-sm:border-0 max-sm:shadow-none"
        >
          <header className="flex shrink-0 items-center gap-3 border-b border-[var(--kuct-border)] bg-gradient-to-r from-[var(--kuct-btn-from)] via-[var(--kuct-btn-mid)] to-[var(--kuct-btn-to)] px-4 py-3 text-white max-sm:pt-[max(0.75rem,env(safe-area-inset-top))]">
            <span className="relative shrink-0">
              <img
                src={assetPath(CHAT_AVATAR)}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <span
                className="absolute right-0 bottom-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[rgba(6,6,14,0.96)]"
                title={c.online}
              />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{c.agentName}</p>
              <p className="text-xs text-white/85">{c.online}</p>
            </div>
            <button
              type="button"
              className="grid size-8 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              aria-label={c.closePanel}
              onClick={() => setOpen(false)}
            >
              <IconClose className="size-4" />
            </button>
          </header>

          <div
            ref={listRef}
            className="flex max-h-[min(22rem,48svh)] min-h-[14rem] flex-col gap-3 overflow-y-auto px-4 py-4 max-sm:min-h-0 max-sm:max-h-none max-sm:flex-1"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user"
                    ? "ml-8 self-end rounded-2xl rounded-br-md bg-[var(--kuct-accent)] px-3.5 py-2.5 text-sm leading-relaxed text-white"
                    : "mr-6 self-start rounded-2xl rounded-bl-md border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.8)] px-3.5 py-2.5 text-sm leading-relaxed text-[var(--kuct-text)]"
                }
              >
                {m.text}
              </div>
            ))}
            <p className="text-[0.7rem] leading-snug text-[var(--kuct-muted)]">
              {c.escalateHint}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-2 border-t border-[var(--kuct-border)] px-3 pt-3">
            {c.suggestions.map((s) => (
              <button
                key={s}
                type="button"
                className="rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.7)] px-3 py-1 text-[0.7rem] font-medium text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/60 hover:text-[var(--kuct-accent)]"
                onClick={() => pushUserAndReply(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <form
            className="flex shrink-0 items-center gap-2 px-3 pt-2 pb-3 max-sm:pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            onSubmit={onSubmit}
          >
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={c.placeholder}
              aria-label={c.placeholder}
              className="min-w-0 flex-1 rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.7)] px-4 py-2.5 text-sm text-[var(--kuct-text)] outline-none placeholder:text-[var(--kuct-muted)]/60 focus:border-[var(--kuct-accent)]/60"
            />
            <button
              type="submit"
              className="kuct-btn-primary grid size-10 shrink-0 place-items-center rounded-full"
              aria-label={c.send}
            >
              <IconSend className="size-4" />
            </button>
          </form>
        </section>
      ) : null}

      <div className={`flex items-end gap-3 ${open ? "max-sm:hidden" : ""}`}>
        {toastVisible && !open ? (
          <div className="pointer-events-auto mb-3 flex max-w-[min(18rem,calc(100vw-5.5rem))] flex-col gap-2 sm:mb-4 sm:max-w-[19rem]">
            <button
              type="button"
              className="self-end text-[0.65rem] font-medium text-[var(--kuct-muted)] underline-offset-2 hover:underline"
              onClick={dismissToast}
            >
              {c.dismissToasts}
            </button>
            <button
              type="button"
              className="kuct-ai-chat__toast text-left"
              onClick={openChat}
            >
              <span className="flex items-center gap-2">
                <span className="kuct-ai-chat__toast-avatar" aria-hidden>
                  <img
                    src={assetPath(CHAT_AVATAR)}
                    alt=""
                    width={28}
                    height={28}
                  />
                </span>
                <span className="relative flex min-w-0 flex-1 items-center gap-1.5">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden
                  />
                  <span className="truncate text-xs font-semibold text-[var(--kuct-text)]">
                    {c.agentName}
                  </span>
                  <span className="ml-auto shrink-0 text-[0.65rem] text-[var(--kuct-muted)]">
                    {c.justNow}
                  </span>
                </span>
              </span>
              <span
                className="mt-2 block min-h-[2.75rem] text-xs leading-relaxed text-[var(--kuct-muted)]"
                aria-live="polite"
              >
                {typedToast}
                {typedToast.length < toastText.length ? (
                  <span
                    className="ml-0.5 inline-block text-[var(--kuct-accent)]"
                    aria-hidden
                  >
                    ▍
                  </span>
                ) : null}
              </span>
            </button>
          </div>
        ) : null}

        <div className="flex flex-col items-center gap-3">
          <ul className="flex flex-col items-center gap-3">
            {contactItems.map((item, index) => (
              <li
                key={item.key}
                className="kuct-contact-fab__item pointer-events-auto"
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

          <span className="kuct-ai-chat__avatar-wrap pointer-events-auto">
            <button
              type="button"
              className={`kuct-ai-chat__avatar${open ? " kuct-ai-chat__avatar--close" : ""}`}
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? c.close : c.open}
              onClick={() => {
                if (open) {
                  setOpen(false);
                } else {
                  openChat();
                }
              }}
            >
              {open ? (
                <IconClose className="size-5 text-white" />
              ) : (
                <img
                  src={assetPath(CHAT_AVATAR)}
                  alt=""
                  width={56}
                  height={56}
                  className="size-full object-contain object-center"
                />
              )}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
