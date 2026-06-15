"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const CONTACT_INFO = [
  { icon: Phone, label: "Phone",   values: ["08147024765", "08032652425"] },
  { icon: Mail,  label: "Email",   values: ["info@greigtechnologies.com"] },
  { icon: MapPin,label: "Address", values: ["10 Anuoluwapo Close, Opebi,", "Ikeja, Lagos State, Nigeria"] },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad bg-charcoal-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-greig-green/20" />
      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div ref={ref} className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-greig-green text-xs tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-mono)" }}>Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}>
            Ready to <span className="gradient-text">get connected?</span>
          </h2>
          <p className="text-silver text-lg">
            Tell us about your connectivity challenge. Our team will respond within one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Info */}
          <motion.div className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(58,158,63,0.1)", border: "1px solid rgba(58,158,63,0.18)" }}>
                  <info.icon size={16} className="text-greig-green" />
                </div>
                <div>
                  <div className="text-silver text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: "var(--font-mono)" }}>{info.label}</div>
                  {info.values.map((v) => <div key={v} className="text-white text-sm">{v}</div>)}
                </div>
              </div>
            ))}
            <div className="glass rounded-xl p-5 mt-6">
              <div className="text-greig-green text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-mono)" }}>Business Hours</div>
              <div className="space-y-1 text-sm text-silver">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-white">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>NOC Support</span>
                  <span className="text-greig-green">24 / 7 / 365</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="lg:col-span-3 glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle size={48} className="text-greig-green" />
                <h3 className="text-white text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                  Message received.
                </h3>
                <p className="text-silver text-sm max-w-xs">
                  Our team will be in touch within one business day. For urgent support, call us directly.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: "name",  label: "Full Name *",      placeholder: "Adeola Okafor",     type: "text" },
                    { id: "email", label: "Email Address *",  placeholder: "you@company.com",   type: "email" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="block text-xs text-silver mb-1.5 tracking-wide" htmlFor={f.id}>{f.label}</label>
                      <input id={f.id} name={f.id} type={f.type}
                        value={form[f.id as keyof typeof form]} onChange={handleChange}
                        placeholder={f.placeholder}
                        className="w-full rounded-lg px-4 py-3 text-white text-sm placeholder:text-silver/40 focus:outline-none transition-all"
                        style={{ background: "rgba(30,33,30,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
                        onFocus={e => e.target.style.borderColor = "rgba(58,158,63,0.4)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs text-silver mb-1.5 tracking-wide" htmlFor="company">Company / Organisation</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={handleChange}
                    placeholder="Company Ltd."
                    className="w-full rounded-lg px-4 py-3 text-white text-sm placeholder:text-silver/40 focus:outline-none transition-all"
                    style={{ background: "rgba(30,33,30,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={e => e.target.style.borderColor = "rgba(58,158,63,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                </div>
                <div>
                  <label className="block text-xs text-silver mb-1.5 tracking-wide" htmlFor="service">Service Interest</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all"
                    style={{ background: "rgba(30,33,30,0.6)", border: "1px solid rgba(255,255,255,0.08)", color: form.service ? "white" : "#9eaaa0" }}>
                    <option value="" style={{ background: "#1e211e" }}>Select a service…</option>
                    {["VSAT Solutions","Maritime Communications","Enterprise Networking","Wireless Services","Managed Services","Other / Not Sure"].map(s => (
                      <option key={s} value={s.toLowerCase().replace(/\s+/g,"-")} style={{ background: "#1e211e" }}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-silver mb-1.5 tracking-wide" htmlFor="message">Message *</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Describe your connectivity needs, location, or any other relevant details…"
                    className="w-full rounded-lg px-4 py-3 text-white text-sm placeholder:text-silver/40 focus:outline-none resize-none transition-all"
                    style={{ background: "rgba(30,33,30,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={e => e.target.style.borderColor = "rgba(58,158,63,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                </div>
                <button onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email || !form.message}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                  style={{ background: "#3a9e3f", boxShadow: "0 0 20px rgba(58,158,63,0.25)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#2d7d31")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#3a9e3f")}>
                  {loading
                    ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    : <><Send size={15} /> Send Message</>}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
