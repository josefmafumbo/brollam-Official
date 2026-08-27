import heroPortrait from "@/assets/hero-portrait.jpg";
import heroCity from "@/assets/hero-nairobi.jpg";
import { ecosystemChannels } from "@/lib/brollam";

export function Hero() {
  const ticker = [...ecosystemChannels, ...ecosystemChannels];

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-background">
      {/* atmospheric backdrop */}
      <div data-hero-shift className="absolute inset-0 -z-10">
        <img
          src={heroCity}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1088}
          className="h-full w-full scale-110 object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_20%,transparent_0%,oklch(0.18_0.022_249/0.85)_60%,oklch(0.18_0.022_249)_100%)]" />
      </div>
      <div className="grain pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[34rem] w-[34rem] rounded-full bg-teal/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-lime/15 blur-[120px]" />

      <div className="shell relative grid min-h-[100svh] items-end gap-10 pb-14 pt-36 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:pb-24 lg:pt-32">
        <div>
          <div data-hero-fade className="flex items-center gap-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-lime [animation:pulse-ring_2.4s_ease-out_infinite]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <p className="eyebrow text-foreground/60">Nairobi — Building for African markets</p>
          </div>

          <h1 className="mt-8 display text-[clamp(3rem,10.5vw,9.5rem)]">
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

          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <p
              data-hero-fade
              className="max-w-md text-base leading-relaxed text-foreground/70 lg:text-lg"
            >
              An integrated strategy, communications, marketing, sales, technology and clean
              energy consultancy. One accountable team, not a referral network.
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

        {/* portrait column */}
        <div className="relative hidden lg:block">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              data-hero-portrait
              src={heroPortrait}
              alt="Brollam Partners client portrait"
              width={1088}
              height={1440}
              className="h-[36rem] w-full object-cover"
            />
          </div>
          <div
            data-hero-fade
            className="glass glass-hover absolute -left-16 bottom-10 w-56 rounded-2xl p-5"
          >
            <p className="font-display text-4xl leading-none text-lime">
              <span data-count="120">0</span>+
            </p>
            <p className="mt-2 text-xs leading-relaxed text-foreground/60">
              Design and campaign projects shipped by the partners
            </p>
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
