import React from "react";
import { motion } from "framer-motion";
import { AppleLogo, GooglePlayLogo, ArrowRight } from "@phosphor-icons/react";

export default function FinalCTA() {
  return (
    <section
      id="download"
      data-testid="final-cta-section"
      className="relative py-28 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] overflow-hidden border border-blue-500/30 bg-gradient-to-br from-blue-900/40 via-[#0A0A0F] to-blue-950/40 p-12 md:p-20 text-center"
        >
          {/* Background glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/40 blur-[140px]" />
          <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/30 blur-[120px]" />

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-blue-200">
              Join The Movement
            </span>
            <h2
              data-testid="final-cta-headline"
              className="mt-6 font-[Outfit] text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.02] max-w-4xl mx-auto"
            >
              The creative economy
              <br />
              <span className="text-gradient-blue italic">starts with you.</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Download Atives, build your Prosite, and join 10,000+ creative professionals turning talent into opportunity.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                data-testid="final-cta-primary"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:shadow-[0_0_60px_rgba(37,99,235,0.9)] transition-all"
              >
                Download Atives App
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                data-testid="final-cta-secondary"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white font-medium transition-all"
              >
                Build Your Prosite
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                data-testid="final-app-store"
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-black/60 border border-white/15 hover:border-white/30 backdrop-blur-md transition-all"
              >
                <AppleLogo size={26} weight="fill" />
                <div className="leading-tight text-left">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                data-testid="final-play-store"
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-black/60 border border-white/15 hover:border-white/30 backdrop-blur-md transition-all"
              >
                <GooglePlayLogo size={26} weight="fill" className="text-blue-400" />
                <div className="leading-tight text-left">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
