import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#services" },
  { label: "Approach", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Insights", href: "#insights" },
];

export function Nav() {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <div className="shell">
        <nav
          className={[
            "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:px-7",
            lifted ? "glass" : "border border-transparent bg-transparent",
          ].join(" ")}
        >
          <a
            href="#top"
            className={[
              "font-display text-xl tracking-tight transition-colors duration-500",
              lifted ? "text-foreground" : "text-primary-foreground",
            ].join(" ")}
          >
            Brollam
            <span className="text-gold">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={[
                  "link-underline text-[0.8rem] font-medium tracking-wide transition-colors duration-500",
                  lifted ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground",
                ].join(" ")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className={[
              "sweep rounded-full border px-5 py-2 text-[0.78rem] font-medium tracking-wide transition-colors duration-500 hover:text-primary-foreground",
              lifted
                ? "border-border text-foreground"
                : "border-primary-foreground/35 text-primary-foreground",
            ].join(" ")}
          >
            Start a Conversation
          </a>
        </nav>
      </div>
    </header>
  );
}
