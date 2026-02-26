"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import AnimateInView from "@/components/AnimateInView";

const features = [
  {
    title: "Configurable Hiring Pipeline",
    description:
      "Define custom stages per role — Pending, Screening, Interview, Offer, or anything that fits your process. Every stage change is tracked on a full timeline.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    header: (
      <div className="h-28 bg-gradient-to-br from-indigo-950/60 to-violet-950/40 rounded-xl p-3 flex gap-2">
        {["Applied", "Review", "Interview", "Offer"].map((s, i) => (
          <div
            key={s}
            className={`flex-1 rounded-lg flex flex-col items-center justify-center gap-1 text-[10px] font-medium ${
              i === 2
                ? "bg-indigo-500/30 border border-indigo-500/40 text-indigo-300"
                : "bg-white/[0.04] text-slate-500"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                i < 3 ? "bg-indigo-500 text-white" : "bg-white/10 text-slate-600"
              }`}
            >
              {i + 1}
            </div>
            {s}
          </div>
        ))}
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Branded Job Board",
    description:
      "Every company gets a public job board at your-company.app.com. Customise with your logo, hero image, and brand colors.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Dynamic Application Forms",
    description:
      "Build custom forms per role with text, textarea, select, and file upload fields. Candidates apply without needing an account.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    header: (
      <div className="h-28 bg-gradient-to-br from-violet-950/60 to-indigo-950/40 rounded-xl p-3 flex flex-col gap-2">
        {[
          { label: "Full name", type: "text" },
          { label: "Portfolio URL", type: "url" },
          { label: "Resume", type: "file" },
        ].map((f) => (
          <div key={f.label} className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 w-20 flex-shrink-0">{f.label}</span>
            <div className="flex-1 h-5 rounded-md bg-white/[0.05] border border-white/[0.08]" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track total applications, weekly trends, stage distribution charts, and conversion rates — all at a glance.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Email Candidates",
    description:
      "Send Handlebars-templated emails to candidates directly from the platform. Full email history logged on every application.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Team Management",
    description:
      "Invite teammates, assign roles, and manage your HR team. Each company is fully isolated in its own multi-tenant environment.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />

      <div className="container-max relative z-10">
        <AnimateInView className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
            Everything your hiring team needs
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            From job post to signed offer — Claver HR handles the entire candidate journey.
          </p>
        </AnimateInView>

        <BentoGrid>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className={feature.className}
            >
              <BentoGridItem
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                header={feature.header}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
