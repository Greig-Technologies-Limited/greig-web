"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, MapPin, Users, Zap } from "lucide-react";

const MILESTONES = [
  { year: "2009", event: "Founded in Lagos, Nigeria as an ISP and satellite services provider." },
  { year: "2012", event: "Expanded into maritime communications and offshore VSAT deployments." },
  { year: "2016", event: "Achieved full Ka-band services coverage across Nigerian offshore blocks." },
  { year: "2020", event: "Launched 24/7 Network Operations Centre (NOC) for enterprise clients." },
  { year: "2025", event: "Serving 100+ enterprises and maritime clients across West Africa." },
];

const PILLARS = [
  { icon: Zap,   title: "Technical Excellence", body: "Certified engineers, proven deployment methodology, and rigorous SLA discipline." },
  { icon: MapPin,title: "Local Depth",           body: "Deep roots in Nigeria with field teams across Lagos, Abuja, and Port Harcourt." },
  { icon: Users, title: "Client Partnership",   body: "We treat your uptime as ours. Proactive, not reactive — always." },
  { icon: Award, title: "Proven Track Record",  body: "15+ years operating across the most demanding environments in West Africa." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-pad bg-charcoal-900 relative overflow-hidden">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(58,158,63,0.05) 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div ref={ref}
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-greig-green text-xs tracking-widest uppercase mb-4 block"
              style={{ fontFamily: "var(--font-mono)" }}>About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}>
              Connecting Africa,<br />
              <span className="gradient-text">since 2009.</span>
            </h2>
            <p className="text-silver text-base leading-relaxed mb-4">
              Greig Technologies Limited is a leading Nigerian provider of satellite and telecommunications services, headquartered in Ikeja, Lagos. For over 15 years, we have built and maintained critical communications infrastructure for enterprises, maritime operators, and government agencies.
            </p>
            <p className="text-silver text-base leading-relaxed mb-12">
              Our independence means we recommend the right solution for your needs — not the easiest sale. From C-band resilience to Ka-band throughput, we deploy what the mission demands.
            </p>

            {/* Timeline */}
            <div className="relative pl-6 space-y-8"
              style={{ borderLeft: "1px solid rgba(58,158,63,0.18)" }}>
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year} className="relative"
                  initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}>
                  <div className="absolute -left-[1.65rem] w-3 h-3 rounded-full bg-charcoal-900"
                    style={{ border: "2px solid rgba(58,158,63,0.45)" }} />
                  <span className="text-greig-green text-xs font-semibold tracking-widest"
                    style={{ fontFamily: "var(--font-mono)" }}>{m.year}</span>
                  <p className="text-silver text-sm mt-1">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 lg:mt-0">
            {PILLARS.map((p, i) => (
              <motion.div key={p.title} className="glass glass-hover rounded-xl p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(58,158,63,0.12)" }}>
                  <p.icon size={20} className="text-greig-green" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
            <motion.div className="sm:col-span-2 glass rounded-xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-greig-green mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium mb-1"
                    style={{ fontFamily: "var(--font-display)" }}>Headquarters</div>
                  <p className="text-silver text-sm">
                    10 Anuoluwapo Close, Opebi,<br />
                    Ikeja, Lagos State, Nigeria.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
