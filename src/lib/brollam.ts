/**
 * Brollam Partners brand content.
 * Sourced from the company repository seed + narrative content modules.
 */

export const services = [
  {
    n: "01",
    title: "Brand Strategy & Identity",
    short:
      "Positioning, naming, messaging and visual systems built for how a company actually wants to grow.",
    capabilities: ["Positioning", "Naming", "Identity systems", "Messaging", "Guidelines"],
  },
  {
    n: "02",
    title: "Communications & PR",
    short:
      "Media strategy, press relations and storytelling designed to land coverage in outlets that matter.",
    capabilities: ["Media strategy", "Press relations", "Executive profiling", "Crisis comms", "Media training"],
  },
  {
    n: "03",
    title: "Marketing & Campaigns",
    short:
      "Integrated launches and digital campaigns designed to move brand and business metrics together.",
    capabilities: ["Campaigns", "Film & photography", "Drone", "Media buying", "Influencer"],
  },
  {
    n: "04",
    title: "Web & Technology",
    short:
      "Websites, platforms and custom software engineered around performance, search and the people using them.",
    capabilities: ["Websites", "Web applications", "Product design", "SEO", "Automation"],
  },
  {
    n: "05",
    title: "B2B Sales & Partnerships",
    short:
      "Pipeline strategy, key accounts and go to market execution that turns visibility into revenue.",
    capabilities: ["Go to market", "Key accounts", "Partnerships", "Pipeline", "Market entry"],
  },
  {
    n: "06",
    title: "Clean Energy & E-Mobility",
    short:
      "Feasibility studies, solar and EV charging deployment, and the technical strategy underneath them.",
    capabilities: ["Solar PV", "EV charging", "Feasibility", "Deployment", "Technical advisory"],
  },
] as const;

export const processStages = [
  {
    number: "01",
    name: "Discover",
    description:
      "Business, audience and investor audit: understanding where you stand and who needs to see you.",
  },
  {
    number: "02",
    name: "Position",
    description:
      "Narrative, brand and messaging built around what makes you fundable and worth backing.",
  },
  {
    number: "03",
    name: "Build",
    description:
      "Websites, content, campaign assets and pitch materials, produced in-house by the team.",
  },
  {
    number: "04",
    name: "Launch",
    description:
      "PR, media outreach, digital campaigns and investor-facing communications that put you in the room.",
  },
  {
    number: "05",
    name: "Sustain",
    description:
      "Reporting and growth recommendations that keep momentum compounding after the first push.",
  },
] as const;

export const visibilityChain = [
  { name: "Brand", note: "A position people understand" },
  { name: "Website", note: "Where attention lands" },
  { name: "Content", note: "Proof of expertise" },
  { name: "Public Relations", note: "Borrowed credibility" },
  { name: "Media", note: "Reach with intent" },
  { name: "Marketing", note: "Consistent presence" },
  { name: "Customers", note: "Attention converted" },
  { name: "Growth", note: "Visibility compounded" },
] as const;

export const ecosystemChannels = [
  "Brand Strategy",
  "Content",
  "Websites",
  "Technology",
  "AI",
  "Public Relations",
  "Media Buying",
  "Influencer Marketing",
  "Digital Marketing",
  "Sales",
  "Analytics",
  "Growth",
] as const;

export const team = [
  {
    name: "Josef Mafumbo",
    role: "Design & Creative Systems",
    bio: "Brand identity, motion design and brand films, UI/UX, 3D renders and editorial design: the visual language investors and customers see first.",
    expertise: ["Brand Identity", "Motion Design", "UI/UX", "3D & Renders"],
    marker: "9+ years, 120+ projects shipped",
  },
  {
    name: "Adala Allan",
    role: "Communications, PR & Brand Strategy",
    bio: "Media strategy, storytelling, integrated campaigns, digital growth and founder profiling: turning credibility into coverage.",
    expertise: ["Media Strategy", "Public Relations", "Campaigns", "Founder Profiling"],
    marker: "Work placed with BBC, CNN, National Geographic, Bloomberg, The Economist",
  },
  {
    name: "Brian M. Burudi",
    role: "B2B Sales & Market Expansion",
    bio: "Enterprise sales, market expansion, strategic partnerships, key accounts and agent networks: converting visibility into signed deals.",
    expertise: ["Enterprise Sales", "Market Expansion", "Partnerships", "Key Accounts"],
    marker: "Grew an SME agent network from 18 to 100",
  },
  {
    name: "Roy Okola Otieno",
    role: "Clean Energy & E-Mobility Systems",
    bio: "Solar PV, battery storage, EV-charging infrastructure, feasibility studies and data & GIS tooling: the technical authority behind the clean-energy story.",
    expertise: ["Solar PV", "Battery Storage", "EV Charging", "Data & GIS"],
    marker: "25+ active sites monitored, KES 50M+ pipeline supported",
  },
] as const;

export const trackRecord = [
  { value: "5", suffix: "", label: "Global media outlets secured" },
  { value: "94", suffix: "%", label: "Fleet uptime maintained" },
  { value: "120", suffix: "+", label: "Design projects shipped" },
  { value: "8,500", suffix: "km", label: "Expedition PR coverage" },
] as const;

export const trackRecordNote =
  "Figures reflect verified results from individual team members' prior and current roles.";

export const teamClosingStatement =
  "Together, this platform combines brand design, strategic communications, B2B sales and clean-energy engineering: one accountable group, not a referral network.";

export const insights = [
  {
    category: "Business",
    title: "The Visibility Gap: Why Great Businesses Go Unnoticed",
    excerpt:
      "Most growing companies do not have a product problem. They have a visibility problem. Here is what that actually means, and what to do about it.",
    date: "06 Jul 2026",
  },
  {
    category: "Marketing",
    title: "Stop Buying Spikes. Build A Compounding System.",
    excerpt:
      "Campaigns that evaporate cost you twice. Treating marketing as infrastructure makes every launch land higher than the last.",
    date: "21 Jul 2026",
  },
  {
    category: "Clean Energy",
    title: "The Energy Transition Is Also A Communications Challenge",
    excerpt:
      "Clean energy and e-mobility projects succeed on engineering, and stall on trust. Evidence led storytelling is now part of the technical work.",
    date: "28 Jul 2026",
  },
] as const;
