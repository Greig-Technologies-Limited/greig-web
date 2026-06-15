"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services",   href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Coverage",   href: "#coverage" },
  { label: "About",      href: "#about" },
  { label: "Contact",    href: "#contact" },
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
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md border-b py-2"
            : "bg-transparent py-4"
        }`}
        style={scrolled ? {
          background: "rgba(26,31,26,0.95)",
          borderColor: "rgba(58,158,63,0.12)"
        } : {}}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo — actual image ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center group"
          >
            <Image
              src="/greig-logo.jpg"
              alt="Greig Technologies Limited"
              width={180}
              height={52}
              className="h-12 w-auto object-contain"
              priority
            />
          </button>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-silver hover:text-white text-sm tracking-wide transition-colors duration-200 relative group"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-greig-green group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="ml-2 px-4 py-2 rounded-md text-white text-sm font-semibold transition-all duration-200"
              style={{ background: "#3a9e3f", fontFamily: "var(--font-body)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#2d7d31")}
              onMouseLeave={e => (e.currentTarget.style.background = "#3a9e3f")}
            >
              Get Connected
            </button>
          </nav>

          {/* ── Mobile toggle ── */}
          <button
            className="md:hidden text-silver hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 backdrop-blur-sm"
              style={{ background: "rgba(26,31,26,0.85)" }}
              onClick={() => setOpen(false)} />
            <motion.nav
              className="absolute top-0 right-0 h-full w-72 flex flex-col pt-20 px-8 gap-2"
              style={{ background: "#222722", borderLeft: "1px solid rgba(58,158,63,0.12)" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="mb-4">
                <Image src="/greig-logo.jpg" alt="Greig Technologies Limited"
                  width={140} height={40} className="h-10 w-auto object-contain" />
              </div>
              {navLinks.map((link, i) => (
                <motion.button key={link.label} onClick={() => handleNav(link.href)}
                  className="text-left py-3 text-silver hover:text-white text-base transition-colors"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}>
                  {link.label}
                </motion.button>
              ))}
              <motion.button onClick={() => handleNav("#contact")}
                className="mt-6 py-3 px-4 rounded-md text-white font-semibold text-sm"
                style={{ background: "#3a9e3f" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}>
                Get Connected
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
