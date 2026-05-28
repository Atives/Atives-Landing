import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Storefront,
  IdentificationBadge,
  CalendarStar,
  ChatsCircle,
  TrendUp,
} from "@phosphor-icons/react";

const STUDIO_IMG =
  "https://static.prod-images.emergentagent.com/jobs/3eb10312-ee54-42ef-843b-45f16c4098dd/images/469758c5c15eb5c12e4e37122844dc4ce20f804bf221915dfa06e9e522fc9000.png";

const features = [
  {
    icon: Compass,
    title: "Discovery",
    desc: "Algorithm-powered feed that surfaces work to people who actually care about your craft.",
    span: "md:col-span-2",
    visual: "discovery",
  },
  {
    icon: IdentificationBadge,
    title: "Prosite — Your Pro Identity",
    desc: "A premium portfolio + profile site. Built in minutes. Your link in bio, evolved.",
    span: "md:col-span-1",
    visual: "prosite",
  },
  {
    icon: Storefront,
    title: "Monetize",
    desc: "Sell products, services, prints and commissions directly to your audience.",
    span: "md:col-span-1",
    visual: "monetize",
  },
  {
    icon: ChatsCircle,
    title: "Network",
    desc: "DM, follow, collab. Meet creatives, mentors, clients and collaborators.",
    span: "md:col-span-1",
    visual: "network",
  },
  {
    icon: CalendarStar,
    title: "Events",
    desc: "Host or attend exhibitions, meet-ups, workshops and live sessions.",
    span: "md:col-span-1",
    visual: "events",
  },
  {
    icon: TrendUp,
    title: "Opportunities",
    desc: "Briefs, grants, jobs and commissions — surfaced to the right creatives every day.",
    span: "md:col-span-2",
    visual: "opps",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-28 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-blue-300">
            One App · Six Superpowers
          </span>
          <h2
            data-testid="features-headline"
            className="mt-4 font-[Outfit] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]"
          >
            Everything a creative needs.
            <br />
            <span className="text-gradient-blue italic">Nothing they don&apos;t.</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-xl">
            Atives is a super app for the creative world — replacing five tools with one.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`group relative ${f.span} bg-[#0A0A0F] border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
              data-testid={`feature-${f.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              {/* Visual area */}
              {f.visual === "discovery" && (
                <div className="absolute -right-10 -top-10 w-72 h-72 opacity-30 group-hover:opacity-60 transition-opacity">
                  <img src={STUDIO_IMG} alt="" className="w-full h-full object-cover rounded-full blur-xl" />
                </div>
              )}
              {f.visual === "opps" && (
                <div className="absolute right-8 bottom-8 flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  {["Brief", "Grant", "Job", "Gig"].map((t, k) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-medium border ${
                        k === 1
                          ? "bg-blue-600 border-blue-500 text-white"
                          : "bg-white/5 border-white/10 text-zinc-300"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="relative z-10">
                <div className="h-12 w-12 grid place-items-center rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-300 group-hover:bg-blue-500/20 transition-colors">
                  <f.icon size={24} weight="duotone" />
                </div>
                <h3 className="mt-6 font-[Outfit] text-2xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed max-w-md">
                  {f.desc}
                </p>
              </div>

              {/* Glow border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(37,99,235,0.15)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
