import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  CTA,
  Commitment,
  Energy,
  Footer,
  Gallery,
  Insights,
  Process,
  ServicesRail,
  Team,
  TrackRecord,
  VisibilityGap,
} from "@/components/site/Sections";
import { useSiteMotion } from "@/hooks/use-site-motion";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useSiteMotion();

  return (
    <main>
      <Nav />
      <Hero />
      <VisibilityGap />
      <ServicesRail />
      <Commitment />
      <Process />
      <TrackRecord />
      <Gallery />
      <Team />
      <Energy />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
}
