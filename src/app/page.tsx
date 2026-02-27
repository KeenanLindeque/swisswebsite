import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhoWeServe from "@/components/WhoWeServe";
import Stats from "@/components/Stats";
import Recognition from "@/components/Recognition";
import WhatWeDo from "@/components/WhatWeDo";
import ImageDivider from "@/components/ImageDivider";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      {/* 1. Authority — who we are */}
      <Hero />

      <Marquee />

      {/* 2. Credibility — institutional positioning + proof */}
      <WhoWeServe />

      <Stats />

      <ImageDivider
        src="/images/luxury-lobby.jpg"
        alt="Grand luxury hotel lobby"
        height={560}
        overlayOpacity={0.55}
        position="center 40%"
        fadeTop="transparent"
        fadeBottom="transparent"
      />

      {/* 3. Scarcity — the crown jewel */}
      <Recognition />

      <ImageDivider
        src="/images/luxury-suite.jpg"
        alt="Five-star luxury hotel suite"
        height={480}
        overlayOpacity={0.55}
        position="center 45%"
        fadeTop="transparent"
        fadeBottom="transparent"
      />

      {/* 4. Mechanics — what we do (services last) */}
      <WhatWeDo />

      <ImageDivider
        src="/images/swiss-alps.jpg"
        alt="Swiss alpine landscape with mountain peaks"
        height={440}
        overlayOpacity={0.5}
        position="center 45%"
        fadeTop="transparent"
        fadeBottom="transparent"
      />

      <Footer />
    </>
  );
}
