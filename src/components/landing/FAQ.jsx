import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    q: "What exactly is Atives?",
    a: "Atives is a super app for creative professionals — artists, designers, photographers, musicians, writers and more. It combines discovery, networking, a professional portfolio (Prosite), commerce, events and an opportunities feed into one beautifully designed app.",
  },
  {
    q: "What is a Prosite?",
    a: "A Prosite is your professional creative identity on Atives. Think portfolio + bio link + shop + booking page in one. It's free to start and works on a custom domain on the Pro plan.",
  },
  {
    q: "How is Atives different from Instagram or Behance?",
    a: "Instagram is built for everyone — Atives is built only for creative professionals. Unlike Behance, you don't just post — you network, sell, host events and get matched with paid opportunities.",
  },
  {
    q: "Is the app free?",
    a: "Yes. The Atives App and a basic Prosite are completely free, forever. Prosite Pro and Studio plans unlock monetization, custom domains, analytics and team features.",
  },
  {
    q: "Where is Atives available?",
    a: "Atives is live across 4 countries today and rolling out globally on iOS and Android.",
  },
  {
    q: "Can I sell my products and services on Atives?",
    a: "Absolutely. Prosite Pro lets you sell digital downloads, physical products, services and commissions directly to your audience with global payments.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-28 md:py-40"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-blue-300">
            Frequently Asked
          </span>
          <h2
            data-testid="faq-headline"
            className="mt-4 font-[Outfit] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]"
          >
            Questions, answered.
          </h2>
        </div>

        <div className="mt-16 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-[#0A0A0F] border-blue-500/40"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
                data-testid={`faq-${i}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  data-testid={`faq-toggle-${i}`}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 py-5"
                >
                  <span className="font-[Outfit] text-lg md:text-xl font-medium text-white">
                    {f.q}
                  </span>
                  <span
                    className={`h-8 w-8 grid place-items-center rounded-full border shrink-0 transition-all ${
                      isOpen
                        ? "bg-blue-500/20 border-blue-500/50 text-blue-200"
                        : "border-white/10 text-zinc-400"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
