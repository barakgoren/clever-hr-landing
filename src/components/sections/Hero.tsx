"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Spotlight } from "@/components/ui/spotlight";

const BackgroundBeams = dynamic(
  () => import("@/components/ui/background-beams").then((m) => m.BackgroundBeams),
  { ssr: false }
);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-violet-500/20 to-indigo-500/30 blur-xl" />
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111118]/90 backdrop-blur shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center px-3">
            <span className="text-xs text-slate-500">app.claverhr.com/dashboard</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5 grid grid-cols-3 gap-4">
          {/* Stat cards */}
          {[
            { label: "Total Applications", value: "1,284", change: "+12%", color: "indigo" },
            { label: "Active Roles", value: "8", change: "+2 this week", color: "violet" },
            { label: "Interviews", value: "24", change: "This month", color: "emerald" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
              <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className={`text-xs mt-1 ${stat.color === "emerald" ? "text-emerald-400" : stat.color === "violet" ? "text-violet-400" : "text-indigo-400"}`}>
                {stat.change}
              </div>
            </div>
          ))}

          {/* Pipeline stages */}
          <div className="col-span-2 rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
            <div className="text-xs text-slate-500 mb-3">Senior Frontend Engineer — Pipeline</div>
            <div className="flex gap-2">
              {[
                { stage: "Applied", count: 48, color: "bg-slate-600" },
                { stage: "Review", count: 22, color: "bg-indigo-600" },
                { stage: "Interview", count: 9, color: "bg-violet-600" },
                { stage: "Offer", count: 2, color: "bg-emerald-600" },
              ].map((s) => (
                <div key={s.stage} className="flex-1">
                  <div className={`${s.color} rounded-md px-2 py-1.5 text-center`}>
                    <div className="text-white font-semibold text-sm">{s.count}</div>
                    <div className="text-white/70 text-[10px] mt-0.5">{s.stage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent applications */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
            <div className="text-xs text-slate-500 mb-2">Recent</div>
            <div className="flex flex-col gap-2">
              {[
                { name: "Sarah M.", role: "Frontend Eng.", status: "Interview" },
                { name: "Alex K.", role: "Backend Eng.", status: "Review" },
                { name: "Jamie L.", role: "Designer", status: "Applied" },
              ].map((app) => (
                <div key={app.name} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                    {app.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] text-white truncate">{app.name}</div>
                    <div className="text-[10px] text-slate-500 truncate">{app.role}</div>
                  </div>
                  <div className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                    {app.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <BackgroundBeams className="opacity-70" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(99,102,241,0.4)" />
      <Spotlight className="-top-40 right-0 md:right-60" fill="rgba(168,85,247,0.3)" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.2),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(168,85,247,0.08),transparent)] pointer-events-none" />

      <div className="relative z-10 container-max px-6 py-20 flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              HR Management Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08]"
          >
            <span className="gradient-text">Hire Smarter,</span>
            <br />
            <span className="text-white">Build Better Teams</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            Publish your branded job board, build custom application forms, and track candidates
            through a configurable pipeline — all in one platform.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <a href="#" className="btn-primary text-base px-7 py-3.5">
              Get started free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
              </svg>
            </a>
            <a href="#how-it-works" className="btn-ghost text-base px-7 py-3.5">
              See how it works
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={item} className="flex items-center gap-3 mt-1">
            <div className="flex -space-x-2">
              {["#6366f1", "#8b5cf6", "#a855f7", "#ec4899"].map((color, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: color }}
                >
                  {["A", "B", "C", "D"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500">
              Trusted by <span className="text-slate-300 font-medium">200+</span> hiring teams
            </p>
          </motion.div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9, ease: "easeOut" }}
          className="w-full mt-16"
        >
          <DashboardMockup />
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}
