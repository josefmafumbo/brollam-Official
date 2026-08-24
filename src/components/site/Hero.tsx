import heroImage from "@/assets/hero-nairobi.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="Nairobi skyline at golden hour"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.155_0.006_80/0.72)_0%,oklch(0.155_0.006_80/0.35)_38%,oklch(0.155_0.006_80/0.86)_100%)]" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-40 lg:pb-24">
        <div className="shell">
          <p
            data-reveal
            className="reveal eyebrow text-primary-foreground/65"
          >
            Nairobi, Kenya
          </p>

          <h1
            data-reveal
            data-reveal-delay="120"
            className="reveal mt-6 max-w-5xl text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] text-primary-foreground"
          >
            Building brands.
            <br />
            Creating <span className="italic text-gold-bright">visibility</span>.
            <br />
            Driving growth.
          </h1>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p
              data-reveal
              data-reveal-delay="240"
              className="reveal max-w-xl text-base leading-relaxed text-primary-foreground/75 lg:text-lg"
            >
              An integrated strategy, communications, marketing, sales, technology and clean
              energy consultancy. One accountable team, not a referral network.
            </p>

            <div
              data-reveal
              data-reveal-delay="340"
              className="reveal flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="magnetic rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-medium text-ink"
              >
                Start a Conversation
              </a>
              <a
                href="#services"
                className="glass-dark magnetic rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground"
              >
                See What We Do
              </a>
            </div>
          </div>

          <div
            data-reveal
            data-reveal-delay="420"
            className="reveal glass-dark mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4"
          >
            {[
              ["Strategy", "Positioning that funds"],
              ["Communications", "Coverage that counts"],
              ["Technology", "Platforms that convert"],
              ["Clean Energy", "Engineering that proves"],
            ].map(([title, note]) => (
              <div
                key={title}
                className="group px-6 py-7 transition-colors duration-500 hover:bg-[oklch(1_0_0/0.07)]"
              >
                <p className="eyebrow text-gold-bright">{title}</p>
                <p className="mt-2 text-sm text-primary-foreground/70">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
