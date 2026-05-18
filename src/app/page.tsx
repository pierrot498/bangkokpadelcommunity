import Image from "next/image";
import FacebookPopup from "@/components/FacebookPopup";

const FACEBOOK_URL = "https://web.facebook.com/groups/bangkok.padel.community";
const INSTAGRAM_URL = "https://www.instagram.com/bangkokpadelcommunity/";

type Link = {
  href: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  primary?: boolean;
};

const links: Link[] = [
  {
    href: FACEBOOK_URL,
    label: "Join the Facebook Group",
    sublabel: "Players, matches, courts & events",
    primary: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
      </svg>
    ),
  },
  {
    href: INSTAGRAM_URL,
    label: "Follow on Instagram",
    sublabel: "@bangkokpadelcommunity",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bangkok Padel Community links",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Bangkok Padel Community on Facebook",
      url: FACEBOOK_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bangkok Padel Community on Instagram",
      url: INSTAGRAM_URL,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <FacebookPopup href={FACEBOOK_URL} />

      <main className="relative isolate flex min-h-dvh flex-col items-center justify-center px-5 py-10 sm:py-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
          <div
            className="absolute inset-0 opacity-40 mix-blend-screen"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 0%, rgba(182,255,60,0.25), transparent 70%), radial-gradient(50% 40% at 50% 100%, rgba(255,226,74,0.18), transparent 70%)",
            }}
            aria-hidden="true"
          />
        </div>

        <article className="w-full max-w-md text-center">
          <header className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
              />
              #1 Padel Community in Bangkok
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Bangkok{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-warm)] bg-clip-text text-transparent">
                Padel
              </span>{" "}
              Community
            </h1>

            <p className="mt-4 text-base text-white/80 sm:text-lg">
              The largest padel network in Bangkok, Thailand. Find players,
              discover courts, and stay up to date on tournaments and events.
            </p>
          </header>

          <nav aria-label="Our channels" className="mt-9 animate-fade-up">
            <h2 className="sr-only">Join the Bangkok Padel Community</h2>
            <ul className="flex w-full flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={[
                      "group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left backdrop-blur-md transition-all",
                      "hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(182,255,60,0.55)]",
                      link.primary
                        ? "border-[var(--accent)]/70 bg-[var(--accent)]/15 text-white hover:bg-[var(--accent)]/25"
                        : "border-white/15 bg-white/5 text-white hover:border-[var(--accent)]/50 hover:bg-white/10",
                    ].join(" ")}
                  >
                    <span
                      aria-hidden="true"
                      className={[
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        link.primary
                          ? "bg-[var(--accent)] text-black"
                          : "bg-white/10 text-white group-hover:bg-[var(--accent)] group-hover:text-black",
                      ].join(" ")}
                    >
                      {link.icon}
                    </span>
                    <span className="flex-1">
                      <span className="block text-base font-semibold leading-tight">
                        {link.label}
                      </span>
                      <span className="block text-xs text-white/65">
                        {link.sublabel}
                      </span>
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section
            aria-label="About"
            className="mt-10 text-balance text-sm text-white/55 animate-fade-up"
          >
            <h2 className="sr-only">About Bangkok Padel Community</h2>
            <p>
              Bangkok Padel Community is the city&apos;s leading padel network,
              connecting players of every level across Bangkok and Thailand.
              Whether you&apos;re looking for a partner, a court, a club or a
              tournament — start here.
            </p>
          </section>

          <footer className="mt-10 text-xs text-white/45 animate-fade-up">
            © {new Date().getFullYear()} Bangkok Padel Community · Bangkok,
            Thailand
          </footer>
        </article>
      </main>
    </>
  );
}
