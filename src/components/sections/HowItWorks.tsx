"use client";

import { motion } from "framer-motion";
import AnimateInView from "@/components/AnimateInView";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Set up your company",
    description:
      "Create your company profile, choose your unique slug, and configure your hiring pipeline stages. Your branded job board goes live at yourapp.com/your-company instantly.",
    highlight: "No credit card required",
  },
  {
    number: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    title: "Post roles with custom forms",
    description:
      "Define your application form per role. Add text, textarea, select, and file upload fields. Candidates can apply directly — no account needed on their end.",
    highlight: "No candidate account needed",
  },
  {
    number: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Manage your pipeline",
    description:
      "Move candidates through your stages, email them from built-in templates, view the full timeline of every action, and export your data to CSV whenever you need it.",
    highlight: "Full email history included",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="absolute inset-0 bg-[#0d0d16] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(99,102,241,0.05),transparent)] pointer-events-none" />

      <div className="container-max relative z-10">
        <AnimateInView className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-violet-500/30 bg-violet-500/10 text-violet-300 mb-4">
            How it works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Up and running in{" "}
            <span className="gradient-text-primary">minutes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            No complex setup. No long onboarding. Just create, post, and hire.
          </p>
        </AnimateInView>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[3.5rem] left-[calc(16.667%+1rem)] right-[calc(16.667%+1rem)] h-px">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/60 via-violet-500/60 to-indigo-500/60"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            />
            <div className="absolute inset-0 bg-white/[0.04]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.18, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <span className="absolute -top-4 -left-2 text-6xl font-black text-white/[0.03] select-none leading-none">
                    {step.number}
                  </span>
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/10">
                    {step.icon}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 w-full hover:border-indigo-500/20 transition-colors group">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{step.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {step.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
