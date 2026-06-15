"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const REGIONS = [
  { name: "Nigeria",             detail: "Lagos HQ · Abuja · Port Harcourt", primary: true },
  { name: "West Africa",         detail: "Ghana · Ivory Coast · Liberia · Cameroon · Senegal" },
  { name: "Offshore West Africa",detail: "Gulf of Guinea · Bight of Benin" },
  { name: "Indian Ocean",        detail: "Remote monitoring & VSAT support" },
];

const BANDS = [
  { name: "Ku-Band",    freq: "12–18 GHz",  use: "Enterprise & Maritime broadband" },
  { name: "C-Band",     freq: "4–8 GHz",    use: "Weather-resilient remote sites" },
  { name: "Amazon LEO", freq: "Low Orbit",  use: "High-speed low-latency LEO" },
  { name: "Starlink",   freq: "LEO/VLEO",   use: "Global broadband coverage" },
];

export default function Coverage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coverage" className="section-pad bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div ref={ref}
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-greig-green text-xs tracking-widest uppercase mb-4 block"
              style={{ fontFamily: "var(--font-mono)" }}>Coverage & Technology</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}>
              Signal reaches{" "}
              <span className="gradient-text">where roads don&apos;t.</span>
            </h2>
            <p className="text-silver text-lg leading-relaxed mb-10">
              Our satellite footprint spans West Africa from the coast to deepwater offshore. Using multi-band infrastructure, we deliver connectivity regardless of terrain, weather, or distance from shore.
            </p>
            <div className="space-y-3 mb-10">
              {REGIONS.map((r, i) => (
                <motion.div key={r.name} className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}>
                  <MapPin size={16} className={`mt-0.5 flex-shrink-0 ${r.primary ? "text-greig-green" : "text-silver-dark"}`} />
                  <div>
                    <span className={`text-sm font-medium ${r.primary ? "text-white" : "text-silver-light"}`}>{r.name}</span>
                    <span className="text-silver text-sm ml-2">— {r.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {BANDS.map((band, i) => (
                <motion.div key={band.name} className="glass rounded-lg p-3"
                  initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}>
                  <div className="text-greig-green text-xs font-semibold mb-1"
                    style={{ fontFamily: "var(--font-mono)" }}>{band.name}</div>
                  <div className="text-silver text-[10px] mb-1">{band.freq}</div>
                  <div className="text-[10px]" style={{ color: "rgba(158,170,160,0.6)" }}>{band.use}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Globe SVG */}
          <motion.div className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <svg viewBox="0 0 500 500" className="w-full max-w-[480px]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="cGlobeGrad" cx="40%" cy="35%" r="60%">
                  <stop offset="0%"   stopColor="#6dcc72" />
                  <stop offset="50%"  stopColor="#3a9e3f" />
                  <stop offset="100%" stopColor="#1a5c1e" />
                </radialGradient>
                <radialGradient id="cAtmos" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#3a9e3f" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="cSheen" cx="38%" cy="30%" r="45%">
                  <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
                <clipPath id="cClip"><circle cx="250" cy="250" r="170" /></clipPath>
                <filter id="cGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Atmosphere */}
              <circle cx="250" cy="250" r="210" fill="url(#cAtmos)" />

              {/* Globe */}
              <circle cx="250" cy="250" r="170" fill="url(#cGlobeGrad)" />

              {/* Grid lines */}
              <g clipPath="url(#cClip)" stroke="#1a5c1e" strokeWidth="0.8" strokeOpacity="0.4" fill="none">
                {[-3,-2,-1,0,1,2,3].map((t, i) => {
                  const y = 250 + t * 42;
                  const half = Math.sqrt(Math.max(0, 170*170 - (y-250)*(y-250)));
                  return half > 0 ? <ellipse key={i} cx="250" cy={y} rx={half * 0.82} ry={7} /> : null;
                })}
                {[0,30,60,90,120,150].map((deg, i) => (
                  <ellipse key={i} cx="250" cy="250" rx={Math.abs(Math.cos(deg*Math.PI/180))*170} ry="170" />
                ))}
              </g>

              {/* Africa */}
              <path d="M230,165 L245,158 L260,162 L270,172 L272,185 L268,195 L274,210 L272,226 L264,240 L258,255 L252,270 L248,280 L244,288 L240,295 L236,288 L230,275 L226,260 L222,248 L218,235 L220,222 L216,210 L218,196 L224,183 Z"
                fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />

              {/* Lagos beacon */}
              <circle cx="236" cy="238" r="5" fill="#4caf50" filter="url(#cGlow)">
                <animate attributeName="r" values="5;10;5" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.2;1" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="236" cy="238" r="4.5" fill="#6dcc72" />

              {/* Other cities */}
              <circle cx="244" cy="248" r="2.5" fill="rgba(255,255,255,0.7)" />
              <circle cx="238" cy="222" r="2.5" fill="rgba(255,255,255,0.7)" />

              {/* Satellite orbit */}
              <ellipse cx="250" cy="250" rx="210" ry="58" fill="none" stroke="rgba(58,158,63,0.2)" strokeWidth="0.8" strokeDasharray="6 4" />

              {/* Orbiting satellite */}
              <g>
                <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="18s" repeatCount="indefinite" />
                <rect x="440" y="248" width="14" height="6" rx="1" fill="#4caf50" opacity="0.85" />
                <rect x="430" y="250" width="24" height="2" rx="1" fill="#6dcc72" opacity="0.5" />
              </g>

              {/* Signal beams */}
              <line x1="236" y1="238" x2="236" y2="168" stroke="#4caf50" strokeWidth="1" strokeDasharray="4 4">
                <animate attributeName="strokeOpacity" values="0.1;0.45;0.1" dur="3s" repeatCount="indefinite" />
              </line>

              {/* Coverage arc */}
              <path d="M210,220 Q236,182 262,220" fill="rgba(58,158,63,0.07)" stroke="#4caf50" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="5 3" />

              {/* Sheen */}
              <circle cx="250" cy="250" r="170" fill="url(#cSheen)" />

              {/* Label */}
              <text x="236" y="260" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="8"
                fontFamily="JetBrains Mono, monospace">Lagos HQ</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
