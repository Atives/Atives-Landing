import React from "react";
import { motion } from "framer-motion";
import { AppleLogo, GooglePlayLogo, Sparkle, ArrowRight } from "@phosphor-icons/react";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/3eb10312-ee54-42ef-843b-45f16c4098dd/images/28a108fd65d09e6af98125dd333a39486faeffbbcecd4877eab8b3aa19da421b.png";
const PHONE_1 =
  "https://images.unsplash.com/photo-1709178295004-893b38ec2a4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxpcGhvbmUlMjBtb2NrdXAlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3Nzg5MjQ4NzZ8MA&ixlib=rb-4.1.0&q=85";
const PHONE_2 =
  "https://images.unsplash.com/photo-1644329968124-4c68f17c21e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBtb2NrdXAlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3Nzg5MjQ4NzZ8MA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/30 via-[#050508]/60 to-[#050508]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050508_75%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left content */}
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-blue-500/30 backdrop-blur-md text-sm text-blue-200 mb-8"
            data-testid="hero-eyebrow"
          >
            <Sparkle size={14} weight="fill" className="text-blue-400" />
            <span className="uppercase tracking-[0.2em] text-xs">The Creative Economy Starts Here</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.04em] leading-[0.95]"
            data-testid="hero-headline"
          >
            The Super App
            <br />
            for the{" "}
            <span className="text-gradient-blue italic font-[Outfit]">
              Creative
            </span>
            <br />
            World.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-zinc-300 max-w-xl leading-relaxed"
            data-testid="hero-subheadline"
          >
            Atives helps creative professionals build their identity, get discovered, network, sell products & services, host events, and grow opportunities — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#download"
              data-testid="hero-cta-primary"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_45px_rgba(37,99,235,0.8)] transition-all"
            >
              Download Atives App
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#prosite"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md text-white font-medium transition-all"
            >
              Build Your Prosite
            </a>
          </motion.div>

          {/* Store badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#"
              data-testid="hero-app-store"
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-black/60 border border-white/10 hover:border-white/30 backdrop-blur-md transition-all"
            >
              <AppleLogo size={26} weight="fill" />
              <div className="leading-tight text-left">
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              data-testid="hero-play-store"
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-black/60 border border-white/10 hover:border-white/30 backdrop-blur-md transition-all"
            >
              <GooglePlayLogo size={26} weight="fill" className="text-blue-400" />
              <div className="leading-tight text-left">
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right: floating phone mockups */}
        <div className="lg:col-span-5 relative h-[560px] hidden lg:block" data-testid="hero-mockups">
          {/* Glow halo */}
          <div className="absolute inset-0 m-auto h-[400px] w-[400px] rounded-full bg-blue-600/30 blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 12 }}
            animate={{ opacity: 1, y: 0, rotate: 8 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-2 right-0 w-[260px] h-[520px] rounded-[44px] overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(37,99,235,0.6)] animate-float"
          >
            <img src={PHONE_1} alt="Atives app phone mockup" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-cyan-500/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80, rotate: -16 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-16 left-0 w-[240px] h-[490px] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(192,132,252,0.5)] animate-float-delayed"
          >
            <img src={PHONE_2} alt="Atives app phone mockup" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/40 via-transparent to-blue-500/20" />
          </motion.div>

          {/* Floating chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-6 left-6 px-4 py-3 rounded-2xl bg-black/70 backdrop-blur-xl border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-xs text-zinc-300">+412 creatives joined today</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
