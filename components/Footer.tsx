"use client";

import { Signal } from "lucide-react";

const LINKS = {
  Services: ["VSAT Solutions", "Maritime Comms", "Enterprise Networking", "Wireless Services", "Managed Services", "Network Security"],
  Company: ["About Us", "Industries", "Coverage", "Contact"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-full bg-signal/20" />
                <Signal className="absolute inset-0 m-auto w-5 h-5 text-signal" strokeWidth={2} />
              </div>
              <div>
                <span
                  className="font-display font-bold text-white text-sm tracking-tight block"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  GREIG TECHNOLOGIES
                </span>
                <span
                  className="text-steel text-[10px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Limited
                </span>
              </div>
            </div>
            <p className="text-steel text-sm leading-relaxed max-w-xs mb-4">
              Satellite, maritime, and enterprise connectivity solutions across
              West Africa. Established 2009.
            </p>
            <p
              className="text-steel/50 text-xs"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              10 Anuoluwapo Close, Opebi, Ikeja, Lagos, Nigeria.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4
                className="text-white text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-steel hover:text-white text-sm transition-colors duration-200 cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel/50 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            © {year} Greig Technologies Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse-slow"
              style={{ boxShadow: "0 0 6px #00b4d8" }}
            />
            <span className="text-signal/60 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
              NOC Online · 24/7
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
