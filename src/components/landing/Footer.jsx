import React from "react";
import {
  InstagramLogo,
  TwitterLogo,
  TiktokLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const socials = [
  { icon: InstagramLogo, label: "Instagram", href: "#" },
  { icon: TwitterLogo, label: "Twitter", href: "#" },
  { icon: TiktokLogo, label: "TikTok", href: "#" },
  { icon: YoutubeLogo, label: "YouTube", href: "#" },
  { icon: LinkedinLogo, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#020202] pt-32 pb-8 overflow-hidden"
    >
      {/* Premium subtle glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Left Column: Brand & Manifesto */}
          <div className="flex flex-col items-start max-w-sm">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-[0_0_40px_rgba(59,130,246,0.4)] mb-8">
              <span className="text-white font-extrabold text-2xl tracking-tighter">
                A
              </span>
            </div>
            <p
              data-testid="footer-tagline"
              className="font-[Outfit] text-2xl md:text-3xl tracking-[-0.02em] text-white font-light leading-snug"
            >
              Built for the few who{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic font-medium">
                refuse
              </span>{" "}
              to create in silence.
            </p>
            <p className="mt-6 text-sm text-zinc-400 tracking-wide font-light">
              By invitation. By craft. By community.
            </p>
          </div>

          {/* Right Column: Links & Socials */}
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-12 md:gap-24">
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-medium tracking-wide text-sm mb-2">
                  Platform
                </h4>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  Case Studies
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-medium tracking-wide text-sm mb-2">
                  Company
                </h4>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  data-testid={`social-${s.label.toLowerCase()}`}
                  className="h-10 w-10 grid place-items-center rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-zinc-400 hover:text-white transition-all duration-300"
                >
                  <s.icon size={18} weight="fill" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Big Wordmark Section */}
        <div className="relative w-full flex flex-col items-center justify-center pt-8 pb-4">
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/20 to-[#020202] pointer-events-none z-10" />

          {/* Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute bottom-0 w-[60%] h-32 bg-white/5 blur-3xl rounded-full"
          />

          {/* Animated Wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
      text-[20vw]
      font-[Outfit]
      font-black
      tracking-[-0.06em]
      uppercase
      leading-none
      bg-gradient-to-b
      from-white
      via-white/70
      to-[#020202]
      bg-clip-text
      text-transparent
      select-none
      drop-shadow-sm
    "
          >
            Atives
          </motion.h1>
        </div>

        {/* Legal Footer */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 pt-8 pb-4">
          
          <div data-testid="footer-copyright" className="tracking-wide">
            © {new Date().getFullYear()} Atives Technologies. All rights
            reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="#"
              data-testid="footer-link-terms"
              className="hover:text-zinc-300 transition-colors tracking-wide"
            >
              Terms of Service
            </a>
            <a
              href="#"
              data-testid="footer-link-privacy"
              className="hover:text-zinc-300 transition-colors tracking-wide"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              data-testid="footer-link-help"
              className="hover:text-zinc-300 transition-colors tracking-wide"
            >
              Help Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
