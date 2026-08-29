import commitmentImage from "@/assets/commitment.jpg";
import energyImage from "@/assets/energy.jpg";
import textureFlow from "@/assets/texture-flow.jpg";
import galMedia from "@/assets/gal-media.jpg";
import galStudio from "@/assets/gal-studio.jpg";
import galCity from "@/assets/gal-city.jpg";
import galTech from "@/assets/gal-tech.jpg";
import teamAdala from "@/assets/team-adala.jpg";
import teamBrian from "@/assets/team-brian.jpg";
import teamRoy from "@/assets/team-roy.jpg";
import teamJosef from "@/assets/team-josef.jpg";
import {
  insights,
  processStages,
  services,
  team,
  teamClosingStatement,
  trackRecord,
  trackRecordNote,
  visibilityChain,
} from "@/lib/brollam";

const serviceImages = [galStudio, galMedia, galCity, galTech, commitmentImage, energyImage];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p data-fade className="eyebrow text-ink">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */

export function VisibilityGap() {
  return (
    <section className="relative overflow-hidden">
      {/* full-bleed statement */}
      <div className="relative isolate flex min-h-[80svh] items-center overflow-hidden py-28 lg:py-40">
        <img
          data-parallax="6"
          src={galCity}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 -z-10 h-[125%] w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_80%_at_50%_50%,oklch(0.18_0.022_249/0.55)_0%,oklch(0.18_0.022_249/0.97)_75%)]" />

        <div className="shell max-w-5xl text-center">
          <Eyebrow>The Visibility Gap</Eyebrow>
          <h2 className="mx-auto mt-10 display text-[clamp(2.4rem,7vw,6.5rem)]">
            <span className="block" data-words>
              Most companies do not have
            </span>
            <span className="block" data-words>
              a product problem.
            </span>
            <span className="block italic text-lime" data-words>
              They have a visibility problem.
            </span>
          </h2>
          <p
            data-fade
            className="mx-auto mt-12 max-w-2xl text-base leading-relaxed text-foreground/65 lg:text-lg"
          >
            The distance between how good a business is and how well that quality is known,
            understood and remembered by the audiences that decide its future.
          </p>
        </div>
      </div>

      {/* chain */}
      <div className="shell pb-28 lg:pb-40">
        <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-border sm:grid-cols-2 lg:grid-cols-4">
          {visibilityChain.map((step, i) => (
            <div
              key={step.name}
              data-fade
              className="group relative bg-surface px-7 py-9 transition-colors duration-500 hover:bg-card"
            >
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-lime">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 text-lg text-foreground transition-colors duration-500 group-hover:text-lime">
                {step.name}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-foreground/50">{step.note}</p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-lime transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */

export function ServicesRail() {
  return (
    <section
      id="services"
      data-rail
      className="relative overflow-hidden border-y hairline py-20 lg:flex lg:h-[100svh] lg:flex-col lg:justify-center lg:py-0"
    >
      <div className="shell pb-10 pt-4 lg:pt-0">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="mt-6 display text-[clamp(2.2rem,5vw,4.5rem)]" data-words>
          Six disciplines, one accountable team
        </h2>
      </div>


      <div className="overflow-hidden">
        <div
          data-rail-track
          className="flex gap-6 px-6 pb-8 lg:w-max lg:px-14"
          style={{ maxWidth: "100%" }}
        >
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:flex lg:w-max lg:gap-6">
            {services.map((s, i) => (
              <article
                key={s.title}
                data-fade
                className="group relative isolate w-full shrink-0 overflow-hidden rounded-[1.75rem] lg:h-[26rem] lg:w-[24rem]"
              >
                <img
                  src={serviceImages[i]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:opacity-70"
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.18_0.022_249/0.35)_0%,oklch(0.18_0.022_249/0.92)_75%)]" />

                <div className="flex h-full min-h-[22rem] flex-col justify-between p-8">
                  <span className="font-mono text-[0.65rem] tracking-[0.24em] text-lime">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="max-w-[14ch] text-[1.6rem] leading-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/65">
                      {s.short}
                    </p>
                    <ul className="mt-6 flex max-h-0 flex-wrap gap-2 overflow-hidden opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-h-32 group-hover:opacity-100">
                      {s.capabilities.map((c) => (
                        <li
                          key={c}
                          className="rounded-full border border-foreground/20 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-foreground/70"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Commitment() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          data-parallax="10"
          src={commitmentImage}
          alt="Brollam Partners team reviewing strategy"
          loading="lazy"
          width={1920}
          height={1200}
          className="h-[120%] w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.18_0.022_249/0.94)_0%,oklch(0.18_0.022_249/0.6)_55%,oklch(0.18_0.022_249/0.35)_100%)]" />

      <div className="shell py-32 lg:py-52">
        <div data-fade className="glass glass-hover max-w-2xl rounded-[2rem] p-10 lg:p-14">
          <Eyebrow>Why We Exist</Eyebrow>
          <p className="mt-8 font-display text-[clamp(1.7rem,3.4vw,3rem)] leading-[1.12]">
            African founders build fundable companies every day. Capital and attention still flow
            to whoever is <span className="italic text-lime">easiest to find</span>.
          </p>
          <p className="mt-8 text-base leading-relaxed text-foreground/65">
            We close that gap with the full chain: a position people understand, a place attention
            lands, proof of expertise, and the credibility to put you in the room.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Process() {
  return (
    <section id="process" className="relative isolate overflow-hidden py-28 lg:py-40">
      <img
        data-parallax="5"
        src={galStudio}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1500}
        height={1000}
        className="absolute inset-0 -z-10 h-[120%] w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.18_0.022_249/0.95)_0%,oklch(0.18_0.022_249/0.8)_50%,oklch(0.18_0.022_249/0.97)_100%)]" />

      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="mt-6 display text-[clamp(2.4rem,6vw,5.5rem)]">
              <span className="block" data-words>
                Five stages,
              </span>
              <span className="block italic text-lime" data-words>
                run in sequence
              </span>
            </h2>
          </div>
          <p data-fade className="max-w-sm text-base leading-relaxed text-foreground/65">
            Momentum compounds when each stage feeds the next. Nothing is handed off to a stranger.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[1.75rem] bg-border md:grid-cols-2 lg:grid-cols-5">
          {processStages.map((stage) => (
            <div
              key={stage.number}
              data-fade
              className="group relative flex min-h-[19rem] flex-col justify-between bg-surface p-8 transition-colors duration-500 hover:bg-card"
            >
              <span className="font-display text-[3.4rem] leading-none text-foreground/12 transition-colors duration-500 group-hover:text-lime/70">
                {stage.number}
              </span>
              <div>
                <h3 className="text-2xl transition-colors duration-500 group-hover:text-lime">
                  {stage.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                  {stage.description}
                </p>
              </div>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-lime transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */

export function TrackRecord() {
  return (
    <section className="relative isolate overflow-hidden py-28 lg:py-40">
      <img
        data-parallax="6"
        src={textureFlow}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 -z-10 h-[120%] w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_100%_at_50%_0%,oklch(0.18_0.022_249/0.6)_0%,oklch(0.18_0.022_249/0.96)_70%)]" />

      <div className="shell">
        <Eyebrow>Track Record</Eyebrow>
        <h2 className="mt-6 display text-[clamp(2.2rem,5vw,4.5rem)]" data-words>
          Evidence, not adjectives
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trackRecord.map((s) => {
            const numeric = Number(s.value.replace(/,/g, ""));
            return (
              <div
                key={s.label}
                data-fade
                className="glass glass-hover rounded-[1.5rem] px-8 py-12"
              >
                <p className="font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-none text-lime">
                  {Number.isNaN(numeric) ? (
                    s.value
                  ) : (
                    <span data-count={numeric}>0</span>
                  )}
                  <span className="text-foreground/45">{s.suffix}</span>
                </p>
                <p className="mt-6 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-foreground/55">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>

        <p data-fade className="mt-8 max-w-2xl text-xs leading-relaxed text-foreground/40">
          {trackRecordNote}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const teamPortraits: Record<string, string> = {
  "Adala Allan": teamAdala,
  "Brian M. Burudi": teamBrian,
  "Roy Okola Otieno": teamRoy,
  "Josef Mafumbo": teamJosef,
};

export function Team() {
  return (
    <section id="team" className="shell py-28 lg:py-44">
      <header className="mb-16 flex flex-col justify-between gap-6 border-b hairline pb-8 md:mb-20 md:flex-row md:items-end">
        <div>
          <Eyebrow>The Practice</Eyebrow>
          <h2 className="mt-4 display text-[clamp(2.4rem,5vw,4.5rem)] italic" data-words>
            The people who do the work
          </h2>
        </div>
        <p data-fade className="max-w-xs text-right text-sm leading-relaxed text-foreground/50 md:text-base">
          {teamClosingStatement}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16">
        {team.map((m, i) => (
          <article key={m.name} data-fade className="group cursor-pointer">
            <div
              data-mask-reveal
              className="zoomable relative mb-6 overflow-hidden rounded-[1.25rem] bg-teal/10"
            >
              <img
                src={teamPortraits[m.name]}
                alt={`${m.name}, ${m.role}`}
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full border border-lime/30 px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.18em] text-lime backdrop-blur-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-teal">{m.role}</p>
              <h3 className="font-display text-2xl leading-tight transition-colors duration-500 group-hover:text-lime">
                {m.name}
              </h3>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/55">
              {m.bio}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {m.expertise.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-foreground/10 px-2.5 py-1 text-[0.62rem] text-foreground/55 transition-colors duration-500 group-hover:border-lime/30 group-hover:text-foreground/80"
                >
                  {e}
                </span>
              ))}
            </div>

            <p className="mt-4 text-[0.58rem] uppercase leading-relaxed tracking-[0.14em] text-foreground/40" style={{ fontFamily: '"Poppins", ui-sans-serif, system-ui, sans-serif' }}>
              {m.marker}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */

export function Gallery() {
  const strip = [galCity, galStudio, galMedia, galTech, commitmentImage, energyImage];
  return (
    <section className="overflow-hidden border-y hairline py-6">
      <div data-ticker="reverse" className="marquee-track gap-6">
        {[...strip, ...strip].map((src, i) => (
          <div
            key={i}
            className="zoomable h-56 w-80 shrink-0 overflow-hidden rounded-2xl lg:h-72 lg:w-[26rem]"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover opacity-70 transition-opacity duration-700 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Energy() {
  return (
    <section className="relative py-28 lg:py-44">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div data-mask-reveal className="zoomable relative order-2 overflow-hidden rounded-[2rem] lg:order-1">
          <img
            src={energyImage}
            alt="Solar array and EV charging installation at dusk"
            loading="lazy"
            width={1600}
            height={1008}
            className="h-[30rem] w-full object-cover"
          />
          <div className="glass glass-hover absolute bottom-5 left-5 right-5 rounded-2xl px-6 py-5">
            <p className="eyebrow text-lime">Clean Energy & E-Mobility</p>
            <p className="mt-2 text-sm text-foreground/80">
              Feasibility to commissioning, documented as it happens.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>Engineering Meets Narrative</Eyebrow>
          <h2 className="mt-6 display text-[clamp(2rem,4.4vw,3.8rem)]" data-words>
            The energy transition is also a communications challenge
          </h2>
          <p data-fade className="mt-8 max-w-lg text-base leading-relaxed text-foreground/65">
            Because the same team handles engineering and communications, technical work is
            documented, evidenced and told properly to financiers, partners, regulators and
            customers.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Insights() {
  const imageMap: Record<string, string> = {
    "gal-media.jpg": galMedia,
    "gal-city.jpg": galCity,
    "energy.jpg": energyImage,
  };

  const categoryConfig: Record<string, { bg: string; accent: string; border: string }> = {
    Business: { bg: "from-slate-deep to-slate-deep", accent: "lime", border: "border-lime/50" },
    Marketing: { bg: "from-slate-deep to-slate-deep", accent: "lime", border: "border-lime/50" },
    "Clean Energy": { bg: "from-slate-deep to-slate-deep", accent: "lime", border: "border-lime/50" },
  };

  return (
    <section id="insights" className="on-mist py-28 lg:py-44">
      <div className="shell">
        <div className="mb-16">
          <Eyebrow>Insights</Eyebrow>
          <h2 className="mt-6 display text-[clamp(2.2rem,5vw,4.5rem)]" data-words>
            Thinking we publish
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post) => {
            const config = categoryConfig[post.category] || categoryConfig.Business;
            const accentClass =
              config.accent === "lime"
                ? "from-lime to-lime"
                : config.accent === "teal"
                  ? "from-teal to-teal"
                  : "from-leaf to-leaf";
            const imageUrl = imageMap[post.image as keyof typeof imageMap];

            return (
              <a
                key={post.title}
                href="#insights"
                data-fade
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Featured Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-deep to-slate-deep">
                  <img
                    src={imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Badge - absolutely positioned over image */}
                  <div
                    className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accentClass} px-3 py-1.5 shadow-lg`}
                  >
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-ink">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col p-6 lg:p-7">
                  <h3 className="mb-3 text-lg font-semibold leading-snug text-ink transition-colors duration-500 group-hover:text-slate-deep lg:text-xl">
                    {post.title}
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-ink/70">
                    {post.excerpt}
                  </p>

                  {/* Footer with date and arrow */}
                  <div className="flex items-center justify-between border-t border-ink/10 pt-4">
                    <p className="text-[0.625rem] font-medium uppercase tracking-[0.12em] text-ink/50">
                      {post.date}
                    </p>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${accentClass} transition-all duration-500 group-hover:translate-x-1`}
                    >
                      <svg
                        className="h-4 w-4 text-ink"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Top accent line */}
                <div
                  className={`absolute left-0 top-0 h-1 w-0 bg-gradient-to-r ${accentClass} transition-all duration-500 group-hover:w-full`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden">
      <img
        data-parallax="8"
        src={textureFlow}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 -z-10 h-[120%] w-full scale-110 object-cover opacity-40 blur-[2px]"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_80%_at_50%_50%,oklch(0.18_0.022_249/0.75)_0%,oklch(0.18_0.022_249/0.97)_75%)]" />
      <div className="grain pointer-events-none absolute inset-0 -z-10" />

      <div className="shell py-36 text-center lg:py-56">
        <Eyebrow>Start a Conversation</Eyebrow>
        <h2 className="mx-auto mt-8 max-w-5xl display text-[clamp(2.6rem,9vw,7.5rem)]">
          <span className="block" data-words>
            Your work deserves
          </span>
          <span className="block italic text-lime" data-words>
            to be seen.
          </span>
        </h2>
        <p data-fade className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-foreground/65">
          Tell us where you are trying to get to. We will tell you honestly whether we are the team
          to help you get there.
        </p>
        <div data-fade className="mt-14">
          <a
            href="mailto:hello@brollam.com"
            data-magnet
            className="magnetic shine inline-flex items-center gap-3 rounded-full bg-lime px-10 py-5 text-base font-semibold text-ink"
          >
            hello@brollam.com
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="border-t hairline py-14">
      <div className="shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="font-display text-xl">
          Brollam<span className="text-lime">.</span> Partners
        </p>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-foreground/50">
          Nairobi, Kenya
        </p>
        <p className="text-xs text-foreground/50">
          &copy; {new Date().getFullYear()} Brollam Partners. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
