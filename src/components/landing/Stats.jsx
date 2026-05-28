import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50, suffix: "K+", label: "Creatives Served" },
  { value: 1, suffix: "M+", label: "Opportunities Generated" },
  { value: 10, suffix: "K+", label: "Active Members" },
  { value: 4, suffix: "", label: "Countries Reached" },
];

function Counter({ to, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.floor(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setN(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      data-testid="stats-section"
      className="relative py-20 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#0A0A0F] p-8 md:p-10 hover:bg-[#12121A] transition-colors"
              data-testid={`stat-${i}`}
            >
           <div
  className="
    font-[Outfit]
    text-4xl
    md:text-5xl
    lg:text-6xl
    font-semibold
    tracking-tight
    bg-gradient-to-r
    from-blue-500
    via-blue-300
    to-white
    bg-clip-text
    text-transparent
  "
>
  <Counter to={s.value} suffix={s.suffix} />
</div>
              <div className="mt-2 text-sm text-zinc-400 uppercase tracking-[0.15em]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
