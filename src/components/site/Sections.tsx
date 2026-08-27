import commitmentImage from "@/assets/commitment.jpg";
import energyImage from "@/assets/energy.jpg";
import textureFlow from "@/assets/texture-flow.jpg";
import galMedia from "@/assets/gal-media.jpg";
import galStudio from "@/assets/gal-studio.jpg";
import galCity from "@/assets/gal-city.jpg";
import galTech from "@/assets/gal-tech.jpg";
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
    <p data-fade className="eyebrow text-lime">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */

export function VisibilityGap() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-44">
      <div className="shell grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <div>
          <Eyebrow>The Visibility Gap</Eyebrow>
          <h2 className="mt-8 display text-[clamp(2.4rem,6vw,5.5rem)]">
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
          <p data-fade className="mt-10 max-w-lg text-base leading-relaxed text-foreground/65 lg:text-lg">
            The distance between how good a business is and how well that quality is known,
            understood and remembered by the audiences that decide its future.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-4">
            {visibilityChain.map((step, i) => (
              <div
                key={step.name}
                data-fade
                className="group relative bg-surface px-5 py-7 transition-colors duration-500 hover:bg-card"
              >
                <span className="font-mono text-[0.6rem] tracking-[0.2em] text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm text-foreground">{step.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-foreground/50">{step.note}</p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-lime transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[30rem]">
          <div
            data-mask-reveal
            className="zoomable absolute right-0 top-0 w-[72%] overflow-hidden rounded-[1.75rem]"
          >
            <img
              src={galMedia}
              alt="Press conference in Nairobi"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-[26rem] w-full object-cover"
            />
          </div>
          <div
            data-mask-reveal
            data-parallax="8"
            className="zoomable absolute bottom-0 left-0 w-[58%] overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-lift)]"
          >
            <img
              src={galTech}
              alt="Analytics dashboards at night"
              loading="lazy"
              width={1500}
              height={1000}
              className="h-[16rem] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function ServicesRail() {
  return (
    <section id="services" data-rail className="relative overflow-hidden border-y hairline py-20 lg:h-[100svh] lg:py-0">
      <div className="shell pb-12 pt-4 lg:pt-28">
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
    <section id="process" className="on-mist relative py-28 lg:py-44">
      <div className="shell grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="mt-6 display text-[clamp(2.2rem,4.6vw,4rem)]" data-words>
            Five stages, run in sequence
          </h2>
          <p data-fade className="mt-8 max-w-sm text-base leading-relaxed text-foreground/65">
            Momentum compounds when each stage feeds the next. Nothing is handed off to a stranger.
          </p>
          <div data-mask-reveal className="zoomable mt-12 hidden overflow-hidden rounded-[1.5rem] lg:block">
            <img
              src={galStudio}
              alt="Production crew on location"
              loading="lazy"
              width={1500}
              height={1000}
              className="h-64 w-full object-cover"
            />
          </div>
        </div>

        <ol className="border-t hairline">
          {processStages.map((stage) => (
            <li
              key={stage.number}
              data-fade
              className="group grid gap-3 border-b hairline py-10 transition-all duration-700 hover:pl-4 md:grid-cols-[5rem_1fr] md:gap-8 lg:py-12"
            >
              <span className="font-mono text-[0.7rem] tracking-[0.24em] text-teal">
                {stage.number}
              </span>
              <div>
                <h3 className="text-2xl transition-colors duration-500 group-hover:text-teal lg:text-[2rem]">
                  {stage.name}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/65 lg:text-base">
                  {stage.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
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

export function Team() {
  return (
    <section id="team" className="shell py-28 lg:py-44">
      <Eyebrow>The Practice</Eyebrow>
      <h2 className="mt-6 max-w-3xl display text-[clamp(2.2rem,5vw,4.5rem)]" data-words>
        The people who do the work
      </h2>
      <p data-fade className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/65">
        {teamClosingStatement}
      </p>

      <div className="mt-16 border-t hairline">
        {team.map((m, i) => (
          <article
            key={m.name}
            data-fade
            className="group relative grid items-start gap-4 border-b hairline py-10 transition-all duration-700 hover:pl-4 lg:grid-cols-[4rem_1fr_1.3fr] lg:gap-10 lg:py-14"
          >
            <span className="font-mono text-[0.65rem] tracking-[0.24em] text-lime">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-[1.8rem] leading-tight transition-colors duration-500 group-hover:text-lime lg:text-[2.2rem]">
                {m.name}
              </h3>
              <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-teal">
                {m.role}
              </p>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-foreground/65 lg:text-base">{m.bio}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {m.expertise.map((e) => (
                  <span
                    key={e}
                    className="rounded-full border border-foreground/15 px-3 py-1 text-[0.68rem] text-foreground/60 transition-colors duration-500 group-hover:border-lime/40"
                  >
                    {e}
                  </span>
                ))}
              </div>
              <p className="mt-5 font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.14em] text-foreground/40">
                {m.marker}
              </p>
            </div>
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
  return (
    <section id="insights" className="on-mist py-28 lg:py-44">
      <div className="shell">
        <Eyebrow>Insights</Eyebrow>
        <h2 className="mt-6 display text-[clamp(2.2rem,5vw,4.5rem)]" data-words>
          Thinking we publish
        </h2>

        <div className="mt-14 border-t hairline">
          {insights.map((post) => (
            <a
              key={post.title}
              href="#insights"
              data-fade
              className="group grid gap-4 border-b hairline py-10 transition-all duration-700 hover:pl-4 md:grid-cols-[9rem_1.2fr_1.4fr] md:items-baseline md:gap-8"
            >
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-teal">
                {post.category}
              </span>
              <h3 className="text-xl leading-snug transition-colors duration-500 group-hover:text-teal lg:text-2xl">
                {post.title}
              </h3>
              <div>
                <p className="text-sm leading-relaxed text-foreground/65">{post.excerpt}</p>
                <p className="mt-3 font-mono text-[0.62rem] tracking-[0.16em] text-foreground/45">
                  {post.date}
                </p>
              </div>
            </a>
          ))}
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
