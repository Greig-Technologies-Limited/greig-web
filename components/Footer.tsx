"use client";

import GlobeIcon from "./icons/GlobeIcon";

const LINKS = {
  Services: ["VSAT Solutions", "Maritime Comms", "Enterprise Networking", "Wireless Services", "Managed Services", "Network Security"],
  Company:  ["About Us", "Industries", "Coverage", "Contact"],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal-950" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <GlobeIcon size={36} />
              <div>
                <span className="font-bold text-white text-sm tracking-widest uppercase block"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.18em" }}>GREIG TECHNOLOGIES</span>
                <span className="text-silver text-[10px] tracking-[0.22em] uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}>Limited</span>
              </div>
            </div>
            <p className="text-silver text-sm leading-relaxed max-w-xs mb-4">
              Satellite, maritime, and enterprise connectivity solutions across West Africa. Established 2009.
            </p>
            <p className="text-[10px]" style={{ color: "rgba(158,170,160,0.45)", fontFamily: "var(--font-mono)" }}>
              10 Anuoluwapo Close, Opebi, Ikeja, Lagos, Nigeria.
            </p>
          </div>
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ fontFamily: "var(--font-mono)" }}>{group}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-silver hover:text-white text-sm transition-colors duration-200 cursor-default">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-[10px]" style={{ color: "rgba(158,170,160,0.45)", fontFamily: "var(--font-mono)" }}>
            © {year} Greig Technologies Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-greig-green animate-pulse-slow"
              style={{ boxShadow: "0 0 6px #3a9e3f" }} />
            <span className="text-[10px]" style={{ color: "rgba(58,158,63,0.65)", fontFamily: "var(--font-mono)" }}>
              NOC Online · 24/7
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
