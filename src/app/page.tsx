import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhoWeServe from "@/components/WhoWeServe";
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

      <Hero />

      <Marquee />

      <WhoWeServe />

      <ImageDivider
        src="/images/luxury-lobby.jpg"
        alt="Grand luxury hotel lobby"
        height={600}
        overlayOpacity={0.5}
        position="center 40%"
        fadeTop="transparent"
        fadeBottom="transparent"
      />

      <Recognition />

      <ImageDivider
        src="/images/luxury-suite.jpg"
        alt="Five-star luxury hotel suite"
        height={500}
        overlayOpacity={0.5}
        position="center 45%"
        fadeTop="transparent"
        fadeBottom="transparent"
      />

      <WhatWeDo />

      <Footer />
    </>
  );
}
