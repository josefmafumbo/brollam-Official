import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  CTA,
  Commitment,
  Energy,
  Footer,
  Insights,
  Marquee,
  Process,
  Services,
  Team,
  TrackRecord,
  VisibilityGap,
} from "@/components/site/Sections";
import { useReveal } from "@/hooks/use-reveal";

const title = "Brollam Partners | Building Brands, Creating Visibility";
const description =
  "Integrated strategy, communications, marketing, sales, technology and clean energy consultancy based in Nairobi, Kenya. One accountable team, not a referral network.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <VisibilityGap />
      <Services />
      <Commitment />
      <Process />
      <TrackRecord />
      <Team />
      <Energy />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
}
