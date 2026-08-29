import { AnimatedHeading } from "@/components/animations/AnimatedHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { ecosystemChannels } from "@/lib/brollam";

export function Hero() {
  const ticker = [...ecosystemChannels, ...ecosystemChannels];

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-background">
      {/* Full-screen video background - RAW with no overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        poster="/assets/hero-bleed.jpg"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text readability - subtle for Brollam */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/50 to-background/70" />

      {/* Grain texture */}
      <div className="grain pointer-events-none absolute inset-0 -z-10" />

      {/* Content container */}
      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-12 pt-28 lg:grid lg:grid-cols-2 lg:items-end lg:pb-16">
        {/* Left Column - Main Content */}
        <div className="pr-0 lg:pr-8">
          {/* Hero Indicator */}
          <FadeIn delay={0} duration={1000} className="mb-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-lime [animation:pulse-ring_2.4s_ease-out_infinite]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              <p className="eyebrow text-foreground/70">Nairobi — Building for African markets</p>
            </div>
          </FadeIn>

          {/* Main Heading with Character Animation and Green "Creating visibility." */}
          <div className="mt-6 display text-[clamp(2.5rem,8vw,5rem)] leading-tight">
            <AnimatedHeading
              text="Building brands."
              className="inline"
              delay={200}
              charDelay={30}
            />
            <AnimatedHeading
              text="Creating visibility."
              className="inline text-lime"
              delay={200 + 16 * 30}
              charDelay={30}
            />
            <AnimatedHeading
              text="Driving growth."
              className="inline"
              delay={200 + (16 + 20) * 30}
              charDelay={30}
            />
          </div>

          {/* Subheading with Fade In */}
          <FadeIn delay={800} duration={1000} className="mt-8">
            <p className="max-w-lg text-base leading-relaxed text-foreground/75 lg:text-lg">
              An integrated strategy, communications, marketing, sales, technology and clean energy
              consultancy. One accountable team, not a referral network.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={1200} duration={1000} className="mt-10">
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                data-magnet
                className="magnetic shine inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink"
              >
                Start a Conversation
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column - See What We Do Button */}
        <div className="mt-12 flex items-end justify-start lg:mt-0 lg:justify-end">
          <FadeIn delay={1400} duration={1000}>
            <a
              href="#services"
              className="sweep rounded-full border border-foreground/25 px-8 py-4 text-sm font-medium text-foreground"
            >
              See What We Do
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Ticker - unchanged */}
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
