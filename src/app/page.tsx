import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import TechStack from "@/components/sections/TechStack";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-bg text-text overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <CtaBanner />
      <Footer />
    </main>
  );
}
