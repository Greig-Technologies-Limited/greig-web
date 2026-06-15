"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Satellite, Ship, Network, Server, Radio, Wifi, Shield, Headphones } from "lucide-react";

const SERVICES = [
  { icon: Satellite,  title: "VSAT Solutions",        description: "Ku, Ka, and C-band VSAT connectivity for remote sites, enterprises, and offshore platforms with high uptime SLAs.", highlight: true,  band: "Ku · Ka · C" },
  { icon: Ship,       title: "Maritime Communications",description: "Marine stabilized antenna systems and offshore satellite services for vessels operating across West African waters.", highlight: false, band: "Marine · Offshore" },
  { icon: Network,    title: "Enterprise Networking",  description: "End-to-end WAN design, cabling, fibre optics, and network consulting for enterprises and institutions.",            highlight: false, band: "LAN · WAN · Fibre" },
  { icon: Wifi,       title: "Wireless Services",      description: "Licensed wireless broadband services including last-mile delivery for business parks and campuses.",                highlight: false, band: "Broadband · Wireless" },
  { icon: Radio,      title: "Telecom Consulting",     description: "Independent advisory on satellite procurement, ISP integration, and infrastructure optimisation.",                   highlight: false, band: "Advisory · Integration" },
  { icon: Server,     title: "Managed Services",       description: "Proactive monitoring, remote management, and on-site field support to keep your network performing.",              highlight: false, band: "NOC · Field Support" },
  { icon: Shield,     title: "Network Security",       description: "Perimeter defence, VPN tunnelling, and traffic management for enterprise and maritime deployments.",               highlight: false, band: "VPN · Firewall" },
  { icon: Headphones, title: "24/7 NOC Support",       description: "Round-the-clock network operations centre staffed by certified engineers for critical uptime.",                    highlight: false, band: "24 · 7 · 365" },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-xl p-6 glass glass-hover cursor-default ${service.highlight ? "border-greig-green/25" : ""}`}
      style={service.highlight ? { background: "rgba(58,158,63,0.06)" } : {}}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      {service.highlight && (
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full"
          style={{ background: "rgba(58,158,63,0.15)", border: "1px solid rgba(58,158,63,0.25)" }}>
          <span className="text-greig-green text-[10px] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}>Core</span>
        </div>
      )}
      <div className="flex items-start gap-4 mb-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center`}
          style={{ background: service.highlight ? "rgba(58,158,63,0.18)" : "rgba(255,255,255,0.04)" }}>
          <service.icon size={20} className={service.highlight ? "text-greig-green" : "text-silver"} />
        </div>
        <div>
          <h3 className="font-semibold text-white text-base leading-tight"
            style={{ fontFamily: "var(--font-display)" }}>{service.title}</h3>
          <span className="text-[10px] tracking-wider" style={{ color: "rgba(58,158,63,0.7)", fontFamily: "var(--font-mono)" }}>
            {service.band}
          </span>
        </div>
      </div>
      <p className="text-silver text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-pad bg-charcoal-950 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-greig-green/20" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={titleRef} className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-greig-green text-xs tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-mono)" }}>What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}>
            End-to-end connectivity,{" "}
            <span className="gradient-text">everywhere</span>.
          </h2>
          <p className="text-silver text-lg leading-relaxed">
            From offshore rigs to enterprise campuses — we design, deploy, and manage communications infrastructure that keeps Africa connected.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
