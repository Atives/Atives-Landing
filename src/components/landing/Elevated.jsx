import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Package, FilmSlate, Sparkle, ArrowRight } from "@phosphor-icons/react";

const perks = [
  {
    icon: CreditCard,
    badge: "Select Plans",
    title: "Gold Metal NFC Card",
    desc: "A premium, weighted metal card etched with your Prosite. Tap any phone to share your portfolio, socials and shop instantly — shipped free with select membership plans.",
    accent: "from-amber-200/30 via-amber-400/20 to-yellow-600/10",
    visual: "card",
  },
  {
    icon: Package,
    badge: "Annual",
    title: "Welcome Brand Kit",
    desc: "A hand-curated annual kit delivered to your door — premium branded essentials, limited-edition merch, and surprise collabs to launch your creative identity in style.",
    accent: "from-blue-500/30 via-cyan-500/15 to-blue-700/10",
    visual: "kit",
  },
  {
    icon: FilmSlate,
    badge: "Featured",
    title: "Your Journey, On Film",
    desc: "Our team produces a cinematic coverage video of your creative journey — story, studio, craft. Yours to keep, share, and pitch with.",
    accent: "from-rose-400/25 via-blue-500/15 to-indigo-500/10",
    visual: "film",
  },
];

export default function Elevated() {
  return (
    <section
      id="elevated"
      data-testid="elevated-section"
      className="relative py-28 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-blue-500/30 text-xs uppercase tracking-[0.25em] text-blue-200">
            <Sparkle size={12} weight="fill" /> Members Get More
          </span>
          <h2
            data-testid="elevated-headline"
            className="mt-6 font-[Outfit] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]"
          >
            Built to make you{" "}
            <span className="text-gradient-blue italic">feel elevated.</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Atives isn&apos;t just an app — it&apos;s a membership. Every creative gets perks that make their craft, identity and story feel premium.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 items-stretch">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B12] hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1"
              data-testid={`perk-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
            >
              {/* Accent gradient wash */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60 group-hover:opacity-90 transition-opacity`} />
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />

              {/* Visual */}
              <div className="relative z-10 h-56 px-8 pt-8 flex items-center justify-center">
                {p.visual === "card" && (
                  <div className="relative w-full max-w-[260px] aspect-[16/10] rounded-2xl bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-700 shadow-[0_20px_60px_-15px_rgba(251,191,36,0.5)] rotate-[-6deg] group-hover:rotate-[-3deg] transition-transform duration-500 p-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="font-[Outfit] text-xl font-bold text-black/80 tracking-tight">atives</div>
                      <div className="h-7 w-9 rounded-md bg-black/15 grid place-items-center">
                        <div className="h-3 w-5 rounded-sm border border-black/40" />
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-black/60">Member</div>
                      <div className="text-sm font-semibold text-black/85">@yourname</div>
                    </div>
                    <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  </div>
                )}
                {p.visual === "kit" && (
                  <div className="relative w-full flex items-end justify-center gap-2">
                    <div className="w-16 h-24 rounded-xl bg-gradient-to-b from-blue-500 to-blue-800 shadow-[0_15px_40px_-10px_rgba(37,99,235,0.6)]" />
                    <div className="w-20 h-32 rounded-xl bg-gradient-to-b from-cyan-400 to-blue-700 shadow-[0_15px_40px_-10px_rgba(192,132,252,0.6)]" />
                    <div className="w-14 h-20 rounded-xl bg-gradient-to-b from-blue-300 to-blue-600 shadow-[0_15px_40px_-10px_rgba(168,85,247,0.6)]" />
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] text-white">
                      Brand Kit
                    </div>
                  </div>
                )}
                {p.visual === "film" && (
                  <div className="relative w-full max-w-[260px] aspect-video rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] rotate-[3deg] group-hover:rotate-[1deg] transition-transform duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.4),transparent_60%)]" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 grid place-items-center group-hover:scale-110 transition-transform">
                        <div className="ml-1 w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-white" />
                      </div>
                    </div>
                    {/* Film strip dots */}
                    <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-around">
                      {[...Array(4)].map((_, k) => <div key={k} className="h-1.5 w-1.5 rounded-sm bg-white/40" />)}
                    </div>
                    <div className="absolute right-2 top-0 bottom-0 flex flex-col justify-around">
                      {[...Array(4)].map((_, k) => <div key={k} className="h-1.5 w-1.5 rounded-sm bg-white/40" />)}
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-zinc-300 tracking-[0.3em] uppercase">REC · 4K</div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-blue-200">
                    <p.icon size={20} weight="duotone" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-blue-300 font-medium">
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-[Outfit] text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed text-[15px]">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note + CTA */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 grid place-items-center rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-200 shrink-0">
              <Sparkle size={18} weight="fill" />
            </div>
            <div>
              <div className="font-[Outfit] text-lg font-semibold text-white">
                Reserved for members. Earned by craft.
              </div>
              <div className="text-sm text-zinc-400 mt-1">
                Build your Prosite, unlock your tier — and we&apos;ll elevate the rest.
              </div>
            </div>
          </div>
          <a
            href="#download"
            data-testid="elevated-cta"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_45px_rgba(37,99,235,0.8)] transition-all whitespace-nowrap"
          >
            Claim Your Perks
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
