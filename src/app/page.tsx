import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeServe from "@/components/WhoWeServe";
import Stats from "@/components/Stats";
import ServiceDetail from "@/components/ServiceDetail";
import Recognition from "@/components/Recognition";
import ImageDivider from "@/components/ImageDivider";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <Hero />

      <Marquee />

      <WhatWeDo />

      <ImageDivider
        src="/images/hotel-bedroom.jpg"
        alt="Luxury hotel suite with morning light"
        height={560}
        overlayOpacity={0.08}
        position="center 40%"
        fadeTop="rgba(243, 243, 245, 0.25)"
        fadeBottom="rgba(15, 35, 71, 0.2)"
      />

      <WhoWeServe />

      <Stats />

      <ServiceDetail
        id="services"
        number="01"
        title="Mystery Guest Assessments"
        tagline="We check in. Your staff won't know."
        description="We stay at your hotel as a real guest and assess the entire journey — from booking to check-out. You get the unfiltered truth about what your guests actually experience."
        items={[
          {
            heading: "What We Assess",
            list: [
              "Booking, arrival & first impressions",
              "Room quality & housekeeping",
              "Dining, bar & in-room service",
              "Concierge, spa & facilities",
              "Complaint handling & recovery",
              "Check-out & departure",
            ],
          },
        ]}
        deliverable={{
          heading: "What You Get",
          list: [
            "Scored report across all touchpoints",
            "Behavioral observations per department",
            "Service gap analysis",
            "Prioritized action plan",
          ],
        }}
      />

      <ServiceDetail
        number="02"
        title="Quality Certification"
        tagline="Your standards on paper vs. your standards on the floor."
        description="We evaluate every department against your own brand standards and industry benchmarks — then certify where you actually stand."
        reversed
        dark
        items={[
          {
            heading: "Areas Covered",
            list: [
              "Front office & reception",
              "Food & beverage operations",
              "Housekeeping & maintenance",
              "Spa, pool & leisure",
              "Staff training & readiness",
            ],
          },
        ]}
        deliverable={{
          heading: "What You Get",
          list: [
            "Department performance scores",
            "SOP compliance findings",
            "Risk indicators & gaps",
            "Strategic improvement roadmap",
          ],
        }}
      />

      <ImageDivider
        src="/images/hotel-room-view.jpg"
        alt="Luxury hotel room with elegant interiors"
        height={480}
        overlayOpacity={0.08}
        position="center 45%"
        fadeTop="rgba(15, 35, 71, 0.2)"
        fadeBottom="rgba(15, 35, 71, 0.2)"
      />

      <Recognition />

      <ServiceDetail
        id="advisory"
        number="04"
        title="Executive Advisory"
        tagline="Findings become action. One session."
        description="After certification, we sit with your leadership team and translate every finding into a focused action plan. No retainers. No fluff."
        items={[
          {
            heading: "Advisory Includes",
            list: [
              "Executive debrief on all findings",
              "Guest journey refinement",
              "Service recovery strategy",
              "Leadership alignment",
            ],
          },
        ]}
        footnote="Hotels that act on our advisory see measurable improvement within 90 days."
      />

      <ServiceDetail
        id="insights"
        number="05"
        title="Hospitality Intelligence"
        tagline="What the top 10% do differently."
        description="Insights drawn from hundreds of assessments worldwide — the patterns, benchmarks, and trends that separate good hotels from unforgettable ones."
        reversed
        dark
        items={[
          {
            heading: "Insights On",
            list: [
              "Guest experience trends",
              "Operational performance benchmarks",
              "Service excellence case studies",
              "Competitive market patterns",
            ],
          },
        ]}
      />

      <ImageDivider
        src="/images/swiss-alps.jpg"
        alt="Swiss alpine landscape with mountain peaks"
        height={440}
        overlayOpacity={0.06}
        position="center 45%"
        fadeTop="rgba(15, 35, 71, 0.15)"
        fadeBottom="rgba(243, 243, 245, 0.2)"
      />

      <Footer />
    </>
  );
}
