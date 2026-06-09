"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const REGIONS = [
  { name: "Nigeria", detail: "Lagos HQ · Abuja · Port Harcourt", primary: true },
  { name: "West Africa", detail: "Ghana · Benin · Cameroon · Senegal" },
  { name: "Offshore West Africa", detail: "Gulf of Guinea · Bight of Benin" },
  { name: "Indian Ocean", detail: "Remote monitoring & VSAT support" },
];

const BANDS = [
  { name: "Ku-Band", freq: "12–18 GHz", use: "Enterprise & Maritime broadband" },
  { name: "Ka-Band", freq: "26–40 GHz", use: "High-throughput VSAT" },
  { name: "C-Band", freq: "4–8 GHz", use: "Weather-resilient remote sites" },
];

export default function Coverage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coverage" className="section-pad bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-signal text-xs tracking-widest uppercase mb-4 block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Coverage & Technology
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Signal reaches{" "}
              <span className="gradient-text">where roads don&apos;t.</span>
            </h2>
            <p className="text-steel text-lg leading-relaxed mb-10">
              Our satellite footprint spans West Africa from the coast to deepwater
              offshore. Using multi-band infrastructure, we deliver connectivity
              regardless of terrain, weather, or distance from shore.
            </p>

            {/* Regions */}
            <div className="space-y-3 mb-10">
              {REGIONS.map((r, i) => (
                <motion.div
                  key={r.name}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <MapPin
                    size={16}
                    className={`mt-0.5 flex-shrink-0 ${r.primary ? "text-signal" : "text-steel-dark"}`}
                  />
                  <div>
                    <span
                      className={`text-sm font-medium ${r.primary ? "text-white" : "text-steel-light"}`}
                    >
                      {r.name}
                    </span>
                    <span className="text-steel text-sm ml-2">— {r.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bands */}
            <div className="grid grid-cols-3 gap-3">
              {BANDS.map((band, i) => (
                <motion.div
                  key={band.name}
                  className="glass rounded-lg p-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <div
                    className="text-signal text-xs font-semibold mb-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {band.name}
                  </div>
                  <div className="text-steel text-[10px] mb-1">{band.freq}</div>
                  <div className="text-steel/60 text-[10px]">{band.use}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Animated globe/map viz */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg
              viewBox="0 0 500 500"
              className="w-full max-w-[480px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer atmosphere glow */}
              <defs>
                <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.08" />
                  <stop offset="70%" stopColor="#00b4d8" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="globeFill" cx="45%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#0d2b54" />
                  <stop offset="100%" stopColor="#020817" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background glow */}
              <circle cx="250" cy="250" r="220" fill="url(#globeGlow)" />

              {/* Globe */}
              <circle cx="250" cy="250" r="170" fill="url(#globeFill)" stroke="#00b4d8" strokeWidth="0.8" strokeOpacity="0.3" />

              {/* Latitude lines */}
              {[-3, -2, -1, 0, 1, 2, 3].map((t, i) => {
                const y = 250 + t * 42;
                const half = Math.sqrt(Math.max(0, 170 * 170 - (y - 250) * (y - 250)));
                return half > 0 ? (
                  <ellipse key={i} cx="250" cy={y} rx={half * 0.85} ry={8} fill="none" stroke="#00b4d8" strokeWidth="0.5" strokeOpacity="0.12" />
                ) : null;
              })}

              {/* Longitude lines */}
              {[0, 30, 60, 90, 120, 150].map((deg, i) => (
                <ellipse
                  key={i}
                  cx="250"
                  cy="250"
                  rx={Math.abs(Math.cos((deg * Math.PI) / 180)) * 170}
                  ry="170"
                  fill="none"
                  stroke="#00b4d8"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
              ))}

              {/* Africa landmass (simplified) */}
              <path
                d="M230,165 L245,158 L260,162 L270,172 L272,185 L268,195 L274,210 L272,226 L264,240 L258,255 L252,270 L248,280 L244,288 L240,295 L236,288 L230,275 L226,260 L222,248 L218,235 L220,222 L216,210 L218,196 L224,183 Z"
                fill="rgba(0,180,216,0.15)"
                stroke="#00b4d8"
                strokeWidth="1"
                strokeOpacity="0.5"
              />

              {/* Gulf of Guinea coastline hint */}
              <path
                d="M218,230 Q205,238 198,250 Q192,262 198,270 Q210,278 224,272"
                fill="rgba(0,180,216,0.1)"
                stroke="#00b4d8"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />

              {/* Lagos beacon */}
              <circle cx="236" cy="238" r="4" fill="#00b4d8" filter="url(#glow)">
                <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="236" cy="238" r="4" fill="#00b4d8" />

              {/* Port Harcourt */}
              <circle cx="244" cy="248" r="2.5" fill="#48cae4" opacity="0.7" />

              {/* Abuja */}
              <circle cx="238" cy="222" r="2.5" fill="#48cae4" opacity="0.7" />

              {/* Satellite orbit arc */}
              <ellipse cx="250" cy="250" rx="210" ry="60" fill="none" stroke="#00b4d8" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="6 4" />

              {/* Satellite 1 */}
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  dur="18s"
                  repeatCount="indefinite"
                />
                <rect x="440" y="248" width="14" height="6" rx="1" fill="#00b4d8" opacity="0.8" />
                <rect x="430" y="250" width="24" height="2" rx="1" fill="#48cae4" opacity="0.5" />
              </g>

              {/* Signal beams from satellite to Lagos */}
              <line x1="236" y1="238" x2="236" y2="165" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4">
                <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="236" y1="238" x2="280" y2="180" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4">
                <animate attributeName="stroke-opacity" values="0.05;0.3;0.05" dur="4s" repeatCount="indefinite" />
              </line>

              {/* Coverage arc over Nigeria */}
              <path
                d="M210,220 Q236,180 262,220"
                fill="rgba(0,180,216,0.06)"
                stroke="#00b4d8"
                strokeWidth="1"
                strokeOpacity="0.25"
                strokeDasharray="5 3"
              />

              {/* Label */}
              <text x="236" y="260" textAnchor="middle" fill="#00b4d8" fontSize="8" fontFamily="JetBrains Mono, monospace" opacity="0.7">Lagos HQ</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
