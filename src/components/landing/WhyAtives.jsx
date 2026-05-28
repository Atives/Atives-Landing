import React from "react";
import { motion } from "framer-motion";
import { Eye, UsersFour, Lightning, Target } from "@phosphor-icons/react";

const ARTIST_1 =
  "https://images.unsplash.com/photo-1613483812100-a473b639b423?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxhcnRpc3QlMjB3b3JraW5nJTIwc3R1ZGlvfGVufDB8fHx8MTc3ODkyNDg3Nnww&ixlib=rb-4.1.0&q=85";
const ARTIST_2 =
  "https://images.unsplash.com/photo-1650783756107-739513b38177?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjB3b3JraW5nJTIwc3R1ZGlvfGVufDB8fHx8MTc3ODkyNDg3Nnww&ixlib=rb-4.1.0&q=85";

const pillars = [
  { icon: Eye, label: "Visibility", desc: "Surface your craft to the right eyes." },
  { icon: UsersFour, label: "Networking", desc: "Meet collaborators worth knowing." },
  { icon: Lightning, label: "Opportunities", desc: "Briefs, gigs and commissions, daily." },
  { icon: Target, label: "Identity", desc: "A pro presence that opens doors." },
];

export default function WhyAtives() {
  return (
    <section
      data-testid="why-atives-section"
      className="relative py-28 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: imagery */}
          <div className="relative h-[520px] hidden lg:block" data-testid="why-imagery">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-[60%] h-[70%] rounded-3xl overflow-hidden border border-white/10"
            >
              <img src={ARTIST_1} alt="Creative working" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-zinc-200">
                Before · Working Alone
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="absolute bottom-0 right-0 w-[60%] h-[70%] rounded-3xl overflow-hidden border border-blue-500/30 shadow-[0_30px_80px_-30px_rgba(37,99,235,0.6)]"
            >
              <img src={ARTIST_2} alt="Creative connected" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/20 via-transparent to-blue-700/30" />
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-blue-600 text-xs text-white font-medium">
                After · On Atives
              </div>
            </motion.div>
          </div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.25em] text-blue-300">
                Why Atives Exists
              </span>
              <h2
                className="mt-4 font-[Outfit] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]"
                data-testid="why-headline"
              >
                Talent deserves{" "}
                <span className="text-gradient-blue italic">visibility</span>.
              </h2>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
                Most creative professionals don&apos;t struggle because they lack talent — they struggle because they lack visibility, opportunities, network, and a professional presence.
              </p>
              <p className="mt-4 text-lg text-zinc-400 leading-relaxed max-w-xl">
                Atives was built to change that. One home for your identity, your audience, your work — and the doors it opens.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/40 transition-all"
                    data-testid={`pillar-${p.label.toLowerCase()}`}
                  >
                    <p.icon size={22} weight="duotone" className="text-blue-300" />
                    <div className="mt-3 text-sm font-semibold text-white">{p.label}</div>
                    <div className="text-xs text-zinc-400 mt-1 leading-relaxed">{p.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
