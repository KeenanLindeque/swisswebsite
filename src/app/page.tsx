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
        src="/images/hotel-lobby.jpg"
        alt="Luxury hotel lobby with marble interiors"
        height={560}
        overlayOpacity={0.2}
        position="center 45%"
        fadeTop="rgba(243, 243, 245, 0.6)"
        fadeBottom="rgba(15, 35, 71, 0.5)"
      />

      <WhoWeServe />

      <Stats />

      <ServiceDetail
        id="services"
        number="01"
        title="Mystery Guest Assessments"
        tagline="Discreet. Independent. Measured."
        description="We check into your hotel as a real guest. From the moment we book to the moment we leave, every interaction is observed and documented. You receive a complete picture of your guest journey — not what staff think happens, but what actually happens."
        items={[
          {
            heading: "We Assess",
            list: [
              "Pre-arrival communication & booking",
              "Arrival, doorman & check-in",
              "Room quality & housekeeping",
              "Concierge & guest requests",
              "Restaurant & bar service",
              "Spa & wellness facilities",
              "Complaint handling & recovery",
              "Check-out & departure",
            ],
          },
        ]}
        deliverable={{
          heading: "You Receive",
          list: [
            "Scored performance across all touchpoints",
            "Behavioral observations per department",
            "Service gap analysis",
            "Prioritized improvement roadmap",
          ],
        }}
      />

      <ServiceDetail
        number="02"
        title="Quality & Operational Certification"
        tagline="Where Standards Meet Execution."
        description="A systematic, department-by-department evaluation of your hotel's operational reality. We certify the alignment between your brand standards and what's actually happening on the floor — across front office, F&B, housekeeping, and leadership."
        reversed
        dark
        items={[
          {
            heading: "Hotel Areas Covered",
            list: [
              "Front office & reception",
              "Food & beverage operations",
              "Housekeeping & laundry",
              "Engineering & maintenance",
              "Spa, pool & leisure",
              "Staff training & readiness",
            ],
          },
        ]}
        deliverable={{
          heading: "You Receive",
          list: [
            "Department performance scores",
            "SOP compliance findings",
            "Risk indicators & critical gaps",
            "Strategic improvement roadmap",
          ],
        }}
      />

      <ImageDivider
        src="/images/mountain-chalet.jpg"
        alt="Swiss mountain chalet in alpine setting"
        height={480}
        overlayOpacity={0.2}
        position="center 40%"
        fadeTop="rgba(15, 35, 71, 0.5)"
        fadeBottom="rgba(15, 35, 71, 0.5)"
      />

      <Recognition />

      <ServiceDetail
        id="advisory"
        number="04"
        title="Executive Quality Advisory"
        tagline="Targeted Strategic Guidance."
        description="After we certify your hotel, we sit with your leadership team. Not a long-term consultancy retainer — a focused session to translate our findings into action. We help GMs, hotel directors, and ownership groups understand exactly where to invest attention."
        items={[
          {
            heading: "Advisory Includes",
            list: [
              "Executive debrief on certification findings",
              "Guest journey design refinement",
              "Service recovery strategy",
              "Leadership & team alignment",
            ],
          },
        ]}
        footnote="We provide diagnostic clarity and strategic direction — not ongoing retainers."
      />

      <ServiceDetail
        id="insights"
        number="05"
        title="Hospitality Intelligence"
        tagline="Observations from the Field."
        description="Drawing from hundreds of hotel assessments across global markets, we publish independent insights on what's working, what's declining, and what separates good hotels from exceptional ones."
        reversed
        dark
        items={[
          {
            heading: "We Publish",
            list: [
              "Guest experience quality trends",
              "Hotel operational performance signals",
              "Service excellence case studies",
              "Emerging patterns across luxury, boutique & chain hotels",
            ],
          },
        ]}
      />

      <ImageDivider
        src="/images/hotel-terrace.jpg"
        alt="Hotel terrace overlooking the landscape"
        height={440}
        overlayOpacity={0.15}
        position="center 40%"
        fadeTop="rgba(15, 35, 71, 0.5)"
        fadeBottom="rgba(243, 243, 245, 0.5)"
      />

      <Footer />
    </>
  );
}
