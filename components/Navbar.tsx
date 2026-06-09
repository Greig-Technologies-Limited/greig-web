"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Signal } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Coverage", href: "#coverage" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-950/95 backdrop-blur-md border-b border-signal/10 py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-full bg-signal/20 group-hover:bg-signal/30 transition-colors duration-300" />
              <Signal
                className="absolute inset-0 m-auto w-5 h-5 text-signal"
                strokeWidth={2}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-display font-700 text-white text-[15px] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                GREIG
              </span>
              <span
                className="text-steel text-[10px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Technologies
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-steel hover:text-white text-sm tracking-wide transition-colors duration-200 relative group"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-signal group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="ml-2 px-4 py-2 rounded-md bg-signal/10 border border-signal/30 text-signal text-sm font-medium hover:bg-signal/20 hover:border-signal/60 transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get Connected
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-steel hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute top-0 right-0 h-full w-72 bg-navy-900 border-l border-signal/10 flex flex-col pt-20 px-8 gap-2"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 text-steel hover:text-white border-b border-white/5 transition-colors text-base"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNav("#contact")}
                className="mt-6 py-3 px-4 rounded-md bg-signal text-navy-950 font-semibold text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                Get Connected
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
