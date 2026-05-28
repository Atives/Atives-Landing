import React from "react";
import { motion } from "framer-motion";
import { UserCirclePlus, UsersThree, Rocket } from "@phosphor-icons/react";

const steps = [
  {
    n: "01",
    icon: UserCirclePlus,
    title: "Build your Prosite",
    desc: "Set up your professional creative identity in minutes — bio, portfolio, links, services and shop.",
  },
  {
    n: "02",
    icon: UsersThree,
    title: "Get discovered & connect",
    desc: "Our discovery engine puts your work in front of the right audience. Network with creators, mentors and clients.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Monetize & grow",
    desc: "Sell products, take commissions, host events and unlock opportunities — all from one place.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-testid="how-section"
      className="relative py-28 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-blue-300">
            How It Works
          </span>
          <h2
            data-testid="how-headline"
            className="mt-4 font-[Outfit] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]"
          >
            Three steps from solo to{" "}
            <span className="text-gradient-blue italic">unstoppable.</span>
          </h2>
        </div>

        <div className="mt-20 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative"
                data-testid={`step-${s.n}`}
              >
                <div className="relative h-24 w-24 mx-auto md:mx-0">
                  <div className="absolute inset-0 rounded-2xl bg-blue-600/20 blur-xl" />
                  <div className="relative h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 grid place-items-center border border-blue-400/40 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    <s.icon size={36} weight="duotone" className="text-white" />
                  </div>
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-[Outfit] text-5xl font-bold text-white/10">
                    {s.n}
                  </span>
                  <h3 className="font-[Outfit] text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-zinc-400 leading-relaxed max-w-sm">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
