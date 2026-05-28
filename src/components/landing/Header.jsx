import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Discover", href: "#features" },
  { label: "Network", href: "#how-it-works" },
  { label: "Prosite", href: "#elevated" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          data-testid="header-logo"
          className="flex items-center gap-2 group"
        >
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200 grid place-items-center shadow-[0_0_25px_rgba(168,85,247,0.6)]">
            <img
  src="https://res.cloudinary.com/dzwto9zbu/image/upload/v1779959585/Atives_Logo_1_mpnssp.png"
  alt="Profile"
  className="w-10 h-9 rounded-xl"
/>
            <div className="absolute inset-0 rounded-xl bg-blue-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-[Outfit] text-3xl font-semibold tracking-tight">
            Atives
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-2 py-2">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="px-4 py-1.5 text-sm text-zinc-300 hover:text-white rounded-full hover:bg-white/10 transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            data-testid="header-cta-download"
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]"
          >
            Download App
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 grid place-items-center rounded-full bg-white/5 border border-white/10"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  className="py-3 text-zinc-200 border-b border-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#download"
                data-testid="mobile-cta-download"
                className="mt-3 text-center py-3 rounded-full bg-blue-600 text-white font-medium"
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
