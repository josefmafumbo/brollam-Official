import heroBleed from "@/assets/hero-bleed.jpg";
import { ecosystemChannels } from "@/lib/brollam";

export function Hero() {
  const ticker = [...ecosystemChannels, ...ecosystemChannels];

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-background">
      {/* full-bleed backdrop */}
      <div data-hero-shift className="absolute inset-0 -z-10">
        <img
          src={heroBleed}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1088}
          className="h-full w-full scale-105 object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.18_0.022_249/0.75)_0%,oklch(0.18_0.022_249/0.55)_35%,oklch(0.18_0.022_249/0.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_30%,transparent_0%,oklch(0.18_0.022_249/0.7)_100%)]" />
      </div>
      <div className="grain pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[34rem] w-[34rem] rounded-full bg-teal/20 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-lime/12 blur-[130px]" />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-36 lg:pb-28">
        <div data-hero-fade className="flex items-center gap-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-lime [animation:pulse-ring_2.4s_ease-out_infinite]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          <p className="eyebrow text-foreground/60">Nairobi — Building for African markets</p>
        </div>

        <h1 className="mt-8 display text-[clamp(3rem,11vw,10.5rem)]">
          <span className="block" data-words="hero">
            Building brands.
          </span>
          <span className="block italic text-lime" data-words="hero">
            Creating visibility.
          </span>
          <span className="block" data-words="hero">
            Driving growth.
          </span>
        </h1>

        <div className="mt-14 grid gap-10 border-t hairline pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p
            data-hero-fade
            className="max-w-xl text-base leading-relaxed text-foreground/70 lg:text-lg"
          >
            An integrated strategy, communications, marketing, sales, technology and clean energy
            consultancy. One accountable team, not a referral network.
          </p>

          <div data-hero-fade className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              data-magnet
              className="magnetic shine inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink"
            >
              Start a Conversation
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#services"
              className="sweep rounded-full border border-foreground/25 px-8 py-4 text-sm font-medium text-foreground"
            >
              See What We Do
            </a>
          </div>
        </div>
      </div>

      {/* ticker */}
      <div className="relative border-y hairline bg-background/60 py-4 backdrop-blur-xl">
        <div data-ticker className="marquee-track items-center">
          {ticker.map((c, i) => (
            <span key={`${c}-${i}`} className="eyebrow flex shrink-0 items-center gap-8 px-8">
              <span className={i % 3 === 0 ? "text-lime" : "text-foreground/55"}>{c}</span>
              <span className="h-1 w-1 rounded-full bg-teal" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
