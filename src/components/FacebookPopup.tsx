"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "bpc-fb-popup-seen-v1";

type Props = {
  href: string;
  title: string;
  body: string;
  primary: string;
  secondary: string;
};

export default function FacebookPopup({
  href,
  title,
  body,
  primary,
  secondary,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem(STORAGE_KEY);
    if (seen) return;
    const t = window.setTimeout(() => setOpen(true), 600);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  function close() {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="fb-popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-sm rounded-3xl border border-[var(--accent)]/40 bg-[#0b0f0c]/95 p-7 text-center shadow-[0_30px_120px_-20px_rgba(182,255,60,0.4)]">
        <button
          type="button"
          aria-label="Close popup"
          onClick={close}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)] text-black shadow-[0_0_30px_rgba(182,255,60,0.55)]">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8" fill="currentColor">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
          </svg>
        </div>

        <h2
          id="fb-popup-title"
          className="mt-5 text-2xl font-bold leading-tight text-white"
        >
          {title}
        </h2>
        <p className="mt-3 text-sm text-white/70">{body}</p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-3.5 text-base font-semibold text-black transition hover:bg-[var(--accent-soft)]"
        >
          {primary}
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>

        <button
          type="button"
          onClick={close}
          className="mt-3 inline-block w-full rounded-2xl px-5 py-2.5 text-sm text-white/55 transition hover:text-white"
        >
          {secondary}
        </button>
      </div>
    </div>
  );
}
