import commitmentImage from "@/assets/commitment.jpg";
import energyImage from "@/assets/energy.jpg";
import textureTeal from "@/assets/texture-teal.jpg";
import {
  ecosystemChannels,
  insights,
  processStages,
  services,
  team,
  teamClosingStatement,
  trackRecord,
  trackRecordNote,
  visibilityChain,
} from "@/lib/brollam";

function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "light",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-primary-foreground/65" : "text-muted-foreground";
  const strong = tone === "dark" ? "text-primary-foreground" : "text-foreground";
  return (
    <div className="max-w-3xl">
      <p data-reveal className={`reveal eyebrow ${tone === "dark" ? "text-lime" : "text-teal"}`}>
        {eyebrow}
      </p>
      <h2
        data-reveal
        data-reveal-delay="80"
        className={`reveal mt-5 text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.02] ${strong}`}
      >
        {title}
      </h2>
      {lead ? (
        <p data-reveal data-reveal-delay="160" className={`reveal mt-6 text-base leading-relaxed lg:text-lg ${muted}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function Marquee() {
  const items = [...ecosystemChannels, ...ecosystemChannels];
  return (
    <div className="border-y hairline bg-surface py-6">
      <div className="marquee-track">
        {items.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="eyebrow flex shrink-0 items-center gap-10 px-10 text-muted-foreground"
          >
            {c}
            <span className="h-1 w-1 rounded-full bg-teal" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function VisibilityGap() {
  return (
    <section className="shell py-28 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <SectionHead
          eyebrow="The Visibility Gap"
          title={
            <>
              Most companies do not have a product problem. They have a{" "}
              <span className="italic text-teal">visibility</span> problem.
            </>
          }
          lead="The distance between how good a business is and how well that quality is known, understood and remembered by the audiences that decide its future."
        />

        <div className="grid gap-px overflow-hidden rounded-3xl border hairline bg-border sm:grid-cols-2">
          {visibilityChain.map((step, i) => (
            <div
              key={step.name}
              data-reveal
              data-reveal-delay={i * 60}
              className="reveal group relative bg-card px-7 py-8 transition-colors duration-500 hover:bg-surface"
            >
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-lg text-foreground">{step.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{step.note}</p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-teal transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="border-t hairline bg-surface py-28 lg:py-40">
      <div className="shell">
        <SectionHead
          eyebrow="What We Do"
          title="Six disciplines, one accountable team"
          lead="Brand, communications, marketing, technology, sales and clean energy engineering, delivered by the people who do the work."
        />

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border hairline bg-border lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              data-reveal-delay={(i % 3) * 90}
              className="reveal group relative overflow-hidden bg-card px-8 py-12 transition-colors duration-700 hover:bg-ink lg:px-10 lg:py-14"
            >
              <span className="pointer-events-none absolute -right-6 -top-10 font-display text-[9rem] leading-none text-border transition-all duration-700 group-hover:text-[oklch(1_0_0/0.07)]">
                {s.n}
              </span>

              <div className="relative">
                <h3 className="max-w-[16ch] text-2xl leading-tight text-foreground transition-colors duration-500 group-hover:text-primary-foreground lg:text-[1.75rem]">
                  {s.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/70">
                  {s.short}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {s.capabilities.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border hairline px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-500 group-hover:border-[oklch(1_0_0/0.18)] group-hover:text-primary-foreground/65"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Commitment() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={commitmentImage}
        alt="Brollam Partners team reviewing strategy materials"
        loading="lazy"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,oklch(0.213_0.025_249/0.92)_0%,oklch(0.213_0.025_249/0.55)_55%,oklch(0.213_0.025_249/0.25)_100%)]" />

      <div className="relative shell py-32 lg:py-48">
        <div data-reveal className="reveal glass-dark max-w-2xl rounded-3xl p-10 lg:p-14">
          <p className="eyebrow text-lime">Why We Exist</p>
          <p className="mt-7 font-display text-[clamp(1.7rem,3.2vw,2.75rem)] leading-[1.15] text-primary-foreground">
            African founders build fundable companies every day. Capital and attention still
            flow to whoever is easiest to find.
          </p>
          <p className="mt-7 text-base leading-relaxed text-primary-foreground/70">
            We close that gap with the full chain: a position people understand, a place attention
            lands, proof of expertise, and the credibility to put you in the room.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="shell py-28 lg:py-40">
      <SectionHead
        eyebrow="How We Work"
        title="Five stages, run in sequence"
        lead="Momentum compounds when each stage feeds the next. Nothing is handed off to a stranger."
      />

      <ol className="mt-20 border-t hairline">
        {processStages.map((stage, i) => (
          <li
            key={stage.number}
            data-reveal
            data-reveal-delay={i * 70}
            className="reveal group grid grid-cols-1 gap-4 border-b hairline py-10 transition-all duration-700 hover:pl-4 md:grid-cols-[8rem_1fr_1.4fr] md:items-baseline md:gap-8 lg:py-12"
          >
            <span className="font-mono text-[0.7rem] tracking-[0.24em] text-teal">
              {stage.number}
            </span>
            <h3 className="text-2xl text-foreground transition-colors duration-500 group-hover:text-teal lg:text-3xl">
              {stage.name}
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              {stage.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function TrackRecord() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-28 lg:py-40">
      <img
        src={textureTeal}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_0%,transparent_0%,oklch(0.213_0.025_249/0.9)_70%)]" />

      <div className="relative shell">
        <SectionHead eyebrow="Track Record" title="Evidence, not adjectives" tone="dark" />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-4">
          {trackRecord.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              data-reveal-delay={i * 90}
              className="reveal glass-dark px-8 py-12 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2"
            >
              <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-lime">
                {s.value}
                <span className="text-primary-foreground/50">{s.suffix}</span>
              </p>
              <p className="mt-5 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-primary-foreground/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-primary-foreground/45">
          {trackRecordNote}
        </p>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="shell py-28 lg:py-40">
      <SectionHead
        eyebrow="The Practice"
        title="The people who do the work"
        lead={teamClosingStatement}
      />

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {team.map((m, i) => (
          <article
            key={m.name}
            data-reveal
            data-reveal-delay={(i % 2) * 100}
            className="reveal magnetic group rounded-3xl border hairline bg-card p-9 lg:p-11"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl text-foreground lg:text-[1.65rem]">{m.name}</h3>
                <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-teal">
                  {m.role}
                </p>
              </div>
              <span className="mt-1 h-9 w-9 shrink-0 rounded-full border hairline transition-colors duration-700 group-hover:border-teal group-hover:bg-teal" />
            </div>

            <p className="mt-7 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {m.expertise.map((e) => (
                <span
                  key={e}
                  className="rounded-full bg-surface px-3 py-1 text-[0.7rem] text-muted-foreground"
                >
                  {e}
                </span>
              ))}
            </div>

            <p className="mt-8 border-t hairline pt-5 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground/70">
              {m.marker}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground/70">
        {trackRecordNote}
      </p>
    </section>
  );
}

export function Energy() {
  return (
    <section className="border-y hairline bg-surface py-28 lg:py-40">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="zoomable relative order-2 overflow-hidden rounded-3xl lg:order-1">
          <img
            src={energyImage}
            alt="Solar array and EV charging installation at dusk"
            loading="lazy"
            width={1600}
            height={1008}
            className="h-full w-full object-cover"
          />
          <div className="glass absolute bottom-5 left-5 right-5 rounded-2xl px-6 py-5">
            <p className="eyebrow text-teal">Clean Energy & E-Mobility</p>
            <p className="mt-2 text-sm text-foreground">
              Feasibility to commissioning, documented as it happens.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHead
            eyebrow="Engineering Meets Narrative"
            title="The energy transition is also a communications challenge"
            lead="Because the same team handles engineering and communications, technical work is documented, evidenced and told properly to financiers, partners, regulators and customers."
          />
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  return (
    <section id="insights" className="shell py-28 lg:py-40">
      <SectionHead eyebrow="Insights" title="Thinking we publish" />

      <div className="mt-16 border-t hairline">
        {insights.map((post, i) => (
          <a
            key={post.title}
            href="#insights"
            data-reveal
            data-reveal-delay={i * 80}
            className="reveal group grid gap-4 border-b hairline py-10 transition-all duration-700 hover:pl-4 md:grid-cols-[9rem_1.2fr_1.4fr] md:items-baseline md:gap-8"
          >
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-teal">
              {post.category}
            </span>
            <h3 className="text-xl leading-snug text-foreground transition-colors duration-500 group-hover:text-teal lg:text-2xl">
              {post.title}
            </h3>
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <p className="mt-3 font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground/60">
                {post.date}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink">
      <img
        src={textureTeal}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl"
      />
      <div className="relative shell py-32 text-center lg:py-48">
        <p data-reveal className="reveal eyebrow text-lime">
          Start a Conversation
        </p>
        <h2
          data-reveal
          data-reveal-delay="100"
          className="reveal mx-auto mt-8 max-w-4xl text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] text-primary-foreground"
        >
          Your work deserves to be <span className="italic text-lime">seen</span>.
        </h2>
        <p
          data-reveal
          data-reveal-delay="200"
          className="reveal mx-auto mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/65"
        >
          Tell us where you are trying to get to. We will tell you honestly whether we are the
          team to help you get there.
        </p>
        <div data-reveal data-reveal-delay="300" className="reveal mt-12">
          <a
            href="mailto:hello@brollam.com"
            className="magnetic inline-flex items-center gap-3 rounded-full bg-lime px-9 py-4 text-sm font-semibold text-ink"
          >
            hello@brollam.com
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t hairline bg-background py-14">
      <div className="shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="font-display text-xl text-foreground">
          Brollam<span className="text-teal">.</span> Partners
        </p>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
          Nairobi, Kenya
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Brollam Partners. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
