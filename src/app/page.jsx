"use client";

import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import WhyAtives from "../components/landing/WhyAtives";
import FounderStory from "../components/landing/FounderStory";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import Elevated from "../components/landing/Elevated";
import FAQ from "../components/landing/FAQ";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div
      data-testid="landing-page"
      className="relative min-h-screen bg-[#050508] text-white overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[40%] -right-40 h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-700/10 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Stats />
          <WhyAtives />
          <FounderStory />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Elevated />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
