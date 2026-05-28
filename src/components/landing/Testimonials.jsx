import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Quotes, Star, Play, SpeakerHigh } from "@phosphor-icons/react";

const PORTRAIT_1 =
  "https://images.unsplash.com/photo-1532170579297-281918c8ae72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwZGFya3xlbnwwfHx8fDE3Nzg5MjQ4NzZ8MA&ixlib=rb-4.1.0&q=85";
const PORTRAIT_2 =
  "https://images.unsplash.com/photo-1516117525866-d85459db7457?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwZGFya3xlbnwwfHx8fDE3Nzg5MjQ4NzZ8MA&ixlib=rb-4.1.0&q=85";

const testimonials = [
  { name: "Aanya Mehta", role: "Illustrator · Mumbai", avatar: PORTRAIT_1, quote: "I went from 200 followers to 12 paid commissions in 3 months. Atives put my work in front of the right people." },
  { name: "Diego Reyes", role: "3D Designer · Mexico City", avatar: PORTRAIT_2, quote: "Prosite replaced four tools I was paying for. Cleanest creative portfolio I've ever had." },
  { name: "Mira Patel", role: "Photographer · London", avatar: PORTRAIT_1, quote: "The opportunities feed alone is worth it. I get briefs I'd never find on LinkedIn or Behance." },
  { name: "Kenji Aoki", role: "Sound Artist · Tokyo", avatar: PORTRAIT_2, quote: "Finally a community that gets it. I met two long-term collaborators within a week." },
  { name: "Lara Costa", role: "Fashion Stylist · São Paulo", avatar: PORTRAIT_1, quote: "Selling directly from my profile changed everything. No middlemen, no platform fees eating my margin." },
  { name: "Noah Williams", role: "Motion Designer · Toronto", avatar: PORTRAIT_2, quote: "It feels like Instagram, LinkedIn, Etsy and Behance had a beautifully designed baby." },
];

const reels = [
  {
    name: "Riya Sharma",
    role: "Ceramic Artist",
    duration: "0:42",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&w=700&q=85",
    caption: "From 80 followers to a sold-out kiln in 5 months.",
  },
  {
    name: "Marcus Hale",
    role: "Filmmaker",
    duration: "1:08",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&w=700&q=85",
    caption: "Two brand films landed via the Opportunities feed.",
  },
  {
    name: "Sana Iqbal",
    role: "Visual Artist",
    duration: "0:56",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=srgb&fm=jpg&w=700&q=85",
    caption: "My Prosite became the gallery I always wanted.",
  },
  {
    name: "Theo Bennett",
    role: "Music Producer",
    duration: "1:24",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&w=700&q=85",
    caption: "Found my collaborator. Released our EP together.",
  },
];

function Card({ t }) {
  return (
    <div
      className="mx-3 w-[360px] sm:w-[420px] bg-[#0A0A0F] border border-white/10 rounded-3xl p-7 hover:border-blue-500/40 transition-all"
      data-testid={`testimonial-${t.name.split(" ")[0].toLowerCase()}`}
    >
      <Quotes size={28} weight="fill" className="text-blue-400/60" />
      <p className="mt-4 text-zinc-200 leading-relaxed text-[15px]">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover border border-white/20" />
        <div>
          <div className="text-sm font-semibold text-white">{t.name}</div>
          <div className="text-xs text-zinc-500">{t.role}</div>
        </div>
        <div className="ml-auto flex gap-0.5 text-blue-400">
          {[...Array(5)].map((_, i) => (<Star key={i} size={12} weight="fill" />))}
        </div>
      </div>
    </div>
  );
}

function ReelCard({ r, i }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: i * 0.08, duration: 0.6 }}
      data-testid={`reel-${r.name.split(" ")[0].toLowerCase()}`}
      className="group relative aspect-[9/16] w-full rounded-[28px] overflow-hidden border border-white/10 hover:border-blue-500/50 bg-[#0A0A0F] transition-all duration-500 hover:-translate-y-1 text-left"
    >
      <img
        src={r.img}
        alt={`${r.name} — ${r.role}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.06]"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/40 to-[#050508]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.25),transparent_60%)]" />

      {/* Top chrome — duration + sound icon */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
        <div className="px-2 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[10px] text-white tracking-wider">
          {r.duration}
        </div>
        <div className="h-7 w-7 grid place-items-center rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white">
          <SpeakerHigh size={12} weight="fill" />
        </div>
      </div>

      {/* Center play button */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-16 w-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 grid place-items-center group-hover:scale-110 group-hover:bg-blue-500/40 group-hover:border-blue-300/60 transition-all duration-300">
          <Play size={22} weight="fill" className="text-white ml-1" />
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="font-[Outfit] text-base font-semibold text-white tracking-tight">
          {r.name}
        </div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-blue-200/90">
          {r.role}
        </div>
        <p className="mt-2 text-[12px] text-zinc-300 leading-snug line-clamp-2">
          &ldquo;{r.caption}&rdquo;
        </p>
      </div>
    </motion.button>
  );
}

export default function Testimonials() {
  return (
    <section data-testid="testimonials-section" className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-blue-300">
            Loved by Creatives
          </span>
          <h2
            data-testid="testimonials-headline"
            className="mt-4 font-[Outfit] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]"
          >
            A movement of{" "}
            <span className="text-gradient-blue italic">10,000+</span> creatives.
          </h2>
        </div>
      </div>

      <div className="fade-edges">
        <Marquee speed={40} pauseOnHover gradient={false}>
          {testimonials.map((t) => (<Card key={t.name} t={t} />))}
        </Marquee>
        <div className="h-6" />
        <Marquee speed={32} direction="right" pauseOnHover gradient={false}>
          {[...testimonials].reverse().map((t) => (<Card key={`r-${t.name}`} t={t} />))}
        </Marquee>
      </div>

      {/* Real Stories — Reels */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-blue-300">
              Real Stories
            </span>
            <h3
              data-testid="reels-headline"
              className="mt-3 font-[Outfit] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-xl"
            >
              Watch creatives tell it{" "}
              <span className="text-gradient-blue italic">themselves.</span>
            </h3>
          </div>
          <p className="text-zinc-400 leading-relaxed max-w-sm">
            Real, unscripted reels from members building their craft on Atives.
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
          data-testid="reels-grid"
        >
          {reels.map((r, i) => (<ReelCard key={r.name} r={r} i={i} />))}
        </div>
      </div>
    </section>
  );
}
