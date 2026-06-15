"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Anchor, Building2, Flame, GraduationCap, Landmark, Truck } from "lucide-react";

const INDUSTRIES = [
  { icon: Anchor,        title: "Maritime & Offshore", description: "VSAT and stabilized antenna solutions for vessels, oil rigs, and port facilities across West African waters.", color: "#3a9e3f" },
  { icon: Flame,         title: "Oil & Gas",           description: "Mission-critical connectivity for onshore fields, FPSO vessels, and upstream exploration sites.",             color: "#4caf50" },
  { icon: Building2,     title: "Enterprise & Corporate",description: "Scalable WAN solutions for multi-site enterprises, banks, and large-format retail chains.",                color: "#3a9e3f" },
  { icon: GraduationCap, title: "Education",           description: "High-availability broadband for universities and schools in underserved or rural locations.",                 color: "#6dcc72" },
  { icon: Landmark,      title: "Government & NGO",    description: "Secure, resilient communications for public sector agencies and humanitarian operations.",                    color: "#4caf50" },
  { icon: Truck,         title: "Logistics & Transport",description: "Fleet tracking, vehicle telemetry, and depot networking for logistics operations.",                         color: "#6dcc72" },
];

export default function Industries() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="industries" className="section-pad bg-charcoal-900 relative overflow-hidden">
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(58,158,63,0.06) 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={titleRef} className="mb-16"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-greig-green text-xs tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-mono)" }}>Industries Served</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}>
            Built for the sectors<br />
            <span className="gradient-text-subtle">that cannot go offline.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <motion.div key={ind.title}
              className="group relative rounded-xl p-7 glass glass-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${ind.color}18`, border: `1px solid ${ind.color}28` }}>
                <ind.icon size={22} style={{ color: ind.color }} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2"
                style={{ fontFamily: "var(--font-display)" }}>{ind.title}</h3>
              <p className="text-silver text-sm leading-relaxed">{ind.description}</p>
              <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${ind.color}35, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
