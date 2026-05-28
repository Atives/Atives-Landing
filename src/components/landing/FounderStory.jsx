import React from "react";
import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

const FOUNDER_IMG =
  "https://res.cloudinary.com/dzwto9zbu/image/upload/v1779813043/ChatGPT_Image_May_26_2026_10_00_07_PM_b2c3ew.png";

export default function FounderStory() {
  return (
    <section
      id="story"
      data-testid="founder-story-section"
      className="relative py-28 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-white/10 shadow-[0_40px_120px_-30px_rgba(37,99,235,0.45)]">
              <img
                src={FOUNDER_IMG}
                alt="Ankur Anand — Founder & Director, Atives"
                className="w-full h-full object-cover"
                data-testid="founder-portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050508]/85 via-[#050508]/20 to-transparent" />

              {/* Caption chip */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-blue-200/80">
                    Founder & Director
                  </div>
                  <div className="mt-0.5 font-[Outfit] text-2xl font-semibold text-white">
                    Ankur Anand
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-[0.2em] text-zinc-200">
                  Est. — Atives
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-blue-700/30 blur-3xl -z-10" />
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-blue-300">
              The Origin
            </span>
            <h2
              data-testid="story-headline"
              className="mt-4 font-[Outfit] text-4xl md:text-5xl lg:text-[3.4rem] font-semibold tracking-[-0.03em] leading-[1.08]"
            >
              We started in a{" "}
              <span className="text-gradient-blue italic">WhatsApp group</span>{" "}
              of 30 artists.
            </h2>

            <div className="mt-10 relative pl-8 border-l border-blue-500/40">
              <Quotes
                size={28}
                weight="fill"
                className="absolute -left-[15px] top-0 text-blue-400 bg-[#050508] p-1 rounded-full"
              />
              <p className="text-lg md:text-xl text-zinc-200 leading-[1.7] font-light">
                In 2021, I started a small WhatsApp group of{" "}
                <span className="text-white font-medium">20–30 artists</span> who
                were tired of being invisible. We swapped briefs, traded
                feedback, and quietly built each other up.
              </p>
              <p className="mt-5 text-lg md:text-xl text-zinc-300 leading-[1.7] font-light">
                Four years later, that group is{" "}
                <span className="text-white font-medium">
                  10,000+ creatives across 4 countries
                </span>{" "}
                — and Atives is the home it always deserved.
              </p>
              <p className="mt-5 text-base md:text-lg text-zinc-400 leading-[1.7] font-light italic">
                This isn&apos;t a platform. It&apos;s a movement we&apos;re
                building for the few who refuse to create in silence.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-700 grid place-items-center text-white font-semibold shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                AA
              </div>
              <div>
                <div className="font-[Outfit] text-lg font-semibold text-white tracking-tight">
                  Ankur Anand
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Founder & Director — Atives
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
