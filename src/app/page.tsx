import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Experiences from "@/components/Experiences";
import MostDelivered from "@/components/MostDelivered";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <Experiences />
      <MostDelivered />
      <About />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
