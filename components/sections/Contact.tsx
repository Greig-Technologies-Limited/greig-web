"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    values: ["08147024765", "08032652425"],
  },
  {
    icon: Mail,
    label: "Email",
    values: ["info@greigtechnologies.com"],
  },
  {
    icon: MapPin,
    label: "Address",
    values: ["No. 16 Amore Street, off Toyin Street,", "Ikeja, Lagos, Nigeria"],
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", service: "", message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire to Formspree / Resend / your API
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-signal/20"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-signal text-xs tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Get in Touch
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to{" "}
            <span className="gradient-text">get connected?</span>
          </h2>
          <p className="text-steel text-lg">
            Tell us about your connectivity challenge. Our team will respond within
            one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-signal/10 border border-signal/15 flex items-center justify-center flex-shrink-0">
                  <info.icon size={16} className="text-signal" />
                </div>
                <div>
                  <div
                    className="text-steel text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {info.label}
                  </div>
                  {info.values.map((v) => (
                    <div key={v} className="text-white text-sm">{v}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="glass rounded-xl p-5 mt-6">
              <div
                className="text-signal text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Business Hours
              </div>
              <div className="space-y-1 text-sm text-steel">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-white">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>NOC Support</span>
                  <span className="text-signal">24 / 7 / 365</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle size={48} className="text-signal" />
                <h3
                  className="text-white text-xl font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message received.
                </h3>
                <p className="text-steel text-sm max-w-xs">
                  Our team will be in touch within one business day. For urgent support, call us directly.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-steel mb-1.5 tracking-wide" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Adeola Okafor"
                      className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-steel/40 focus:outline-none focus:border-signal/40 focus:bg-navy-800/80 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-steel mb-1.5 tracking-wide" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-steel/40 focus:outline-none focus:border-signal/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-steel mb-1.5 tracking-wide" htmlFor="company">
                    Company / Organisation
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Ltd."
                    className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-steel/40 focus:outline-none focus:border-signal/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs text-steel mb-1.5 tracking-wide" htmlFor="service">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-signal/40 transition-all"
                    style={{ color: form.service ? "white" : "#8fa3b8" }}
                  >
                    <option value="" style={{ background: "#0a1f3d" }}>Select a service…</option>
                    <option value="vsat" style={{ background: "#0a1f3d" }}>VSAT Solutions</option>
                    <option value="maritime" style={{ background: "#0a1f3d" }}>Maritime Communications</option>
                    <option value="enterprise" style={{ background: "#0a1f3d" }}>Enterprise Networking</option>
                    <option value="wireless" style={{ background: "#0a1f3d" }}>Wireless Services</option>
                    <option value="managed" style={{ background: "#0a1f3d" }}>Managed Services</option>
                    <option value="other" style={{ background: "#0a1f3d" }}>Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-steel mb-1.5 tracking-wide" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your connectivity needs, location, or any other relevant details…"
                    className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-steel/40 focus:outline-none focus:border-signal/40 resize-none transition-all"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email || !form.message}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-signal text-navy-950 font-semibold text-sm hover:bg-signal-bright disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                  style={{ fontFamily: "var(--font-body)", boxShadow: "0 0 20px rgba(0,180,216,0.25)" }}
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
