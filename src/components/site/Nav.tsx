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
    const onScroll = () => setLifted(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
        <div
          data-progress
          className="h-full origin-left scale-x-0 bg-lime"
          style={{ transformOrigin: "left center" }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <div className="shell">
          <nav
            className={[
              "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:px-7",
              lifted ? "glass" : "border border-transparent",
            ].join(" ")}
          >
            <a href="#top" className="font-display text-xl tracking-tight text-foreground">
              Brollam<span className="text-lime">.</span>
            </a>

            <div className="hidden items-center gap-10 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="link-underline text-[0.8rem] font-medium tracking-wide text-foreground/70 transition-colors duration-500 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              data-magnet
              className="sweep rounded-full border border-foreground/25 px-5 py-2 text-[0.78rem] font-medium tracking-wide text-foreground"
            >
              Start a Conversation
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
