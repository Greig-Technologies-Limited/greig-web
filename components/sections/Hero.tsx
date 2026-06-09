"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Satellite, Wifi, Globe } from "lucide-react";

const STATS = [
  { value: "15+", label: "Years of Operation" },
  { value: "3", label: "Satellite Bands" },
  { value: "100+", label: "Enterprise Clients" },
  { value: "24/7", label: "NOC Support" },
];

const TYPEWRITER_WORDS = ["Offshore", "Maritime", "Enterprise", "Nigeria"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const word = TYPEWRITER_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
      } else {
        timeout = setTimeout(() => setTyping(false), 1600);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55);
      } else {
        setWordIndex((i) => (i + 1) % TYPEWRITER_WORDS.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  // Radar canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const dots: Array<{ x: number; y: number; r: number; opacity: number; decay: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width, height } = canvas;
      const cx = width / 2;
      const cy = height / 2;
      const R = Math.min(width, height) * 0.42;

      ctx.clearRect(0, 0, width, height);

      // Background circle
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0,180,216,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Concentric rings
      [0.25, 0.5, 0.75, 1].forEach((t) => {
        ctx.beginPath();
        ctx.arc(cx, cy, R * t, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,180,216,0.07)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Cross hairs
      ctx.strokeStyle = "rgba(0,180,216,0.08)";
      ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R); ctx.stroke();

      // Sweep gradient

      // Draw sweep as a filled arc
      const sweepArc = 0.8; // radians
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, angle - sweepArc, angle);
      ctx.closePath();
      const radialGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
      radialGrad.addColorStop(0, "rgba(0,180,216,0)");
      radialGrad.addColorStop(0.6, "rgba(0,180,216,0.04)");
      radialGrad.addColorStop(1, "rgba(0,180,216,0.12)");
      ctx.fillStyle = radialGrad;
      ctx.fill();
      ctx.restore();

      // Sweep line
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * R, cy + Math.sin(angle) * R);
      ctx.strokeStyle = "rgba(0,180,216,0.7)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "#00b4d8";
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.restore();

      // Blip generation
      const bx = cx + Math.cos(angle) * (R * (0.3 + Math.random() * 0.65));
      const by = cy + Math.sin(angle) * (R * (0.3 + Math.random() * 0.65));
      if (Math.random() > 0.85) {
        dots.push({ x: bx, y: by, r: 2.5, opacity: 1, decay: 0.012 });
      }

      // Draw + decay dots
      for (let i = dots.length - 1; i >= 0; i--) {
        const d = dots[i];
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,180,216,${d.opacity})`;
        ctx.shadowColor = "#00b4d8";
        ctx.shadowBlur = 6;
        ctx.fill();
        d.opacity -= d.decay;
        if (d.opacity <= 0) dots.splice(i, 1);
      }

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#00b4d8";
      ctx.shadowColor = "#00b4d8";
      ctx.shadowBlur = 12;
      ctx.fill();

      angle += 0.012;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-signal opacity-40" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-950 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div>
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal/10 border border-signal/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse-slow"
              style={{ boxShadow: "0 0 6px #00b4d8" }}
            />
            <span
              className="text-signal text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Signal Active — Lagos, Nigeria
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-[2.8rem] md:text-[3.6rem] lg:text-[4.2rem] font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white">Connecting</span>
            <br />
            <span className="gradient-text glow-text">
              {displayed}
              <span className="cursor" />
            </span>
            <br />
            <span className="text-white">Africa.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-steel text-lg leading-relaxed max-w-md mb-10"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            VSAT, maritime stabilized antennas, and enterprise networking
            solutions — delivered across West Africa and offshore since 2009.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-2 px-6 py-3 rounded-md bg-signal text-navy-950 font-semibold text-sm hover:bg-signal-bright transition-all duration-200 shadow-lg"
              style={{ fontFamily: "var(--font-body)", boxShadow: "0 0 24px rgba(0,180,216,0.3)" }}
            >
              Explore Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-md border border-white/15 text-steel hover:text-white hover:border-white/30 text-sm transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact Us
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-left"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
              >
                <div
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-steel mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Radar */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Outer glow rings */}
          <div
            className="absolute w-[420px] h-[420px] rounded-full border border-signal/5 radar-ring"
            style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
          />
          <div
            className="absolute w-[320px] h-[320px] rounded-full border border-signal/8 radar-ring-2"
            style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
          />

          {/* Canvas radar */}
          <canvas
            ref={canvasRef}
            className="w-full max-w-[420px] aspect-square"
            style={{ maxHeight: 420 }}
          />

          {/* Floating service chips */}
          {[
            { icon: Satellite, label: "VSAT", pos: "top-4 left-8" },
            { icon: Globe, label: "Ka-Band", pos: "top-4 right-8" },
            { icon: Wifi, label: "LTE Backup", pos: "bottom-12 left-0" },
          ].map(({ icon: Icon, label, pos }, i) => (
            <motion.div
              key={label}
              className={`absolute ${pos} glass rounded-lg px-3 py-2 flex items-center gap-2`}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={14} className="text-signal" />
              <span
                className="text-xs text-steel-light"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
