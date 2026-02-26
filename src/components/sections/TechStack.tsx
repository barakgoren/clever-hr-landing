"use client";

import { motion } from "framer-motion";
import AnimateInView from "@/components/AnimateInView";

const techItems = [
  {
    name: "Next.js",
    description: "Frontend Framework",
    color: "text-white",
    icon: (
      <svg viewBox="0 0 180 180" fill="currentColor" width="26" height="26">
        <mask id="mask0" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1V69.438L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#grad1)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#grad2)" />
        </g>
        <defs>
          <linearGradient id="grad1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Express.js",
    description: "API Server",
    color: "text-slate-300",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c-.013-.484-.013-.968-.013-1.452zm1.064-.575h9.38c-.053-3.028-2.036-5.051-4.542-5.051-2.637 0-4.696 2.085-4.837 5.051z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    description: "Database",
    color: "text-blue-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2.4c4.97 0 9.12 3.44 10.24 8.08H1.76C2.88 5.84 7.03 2.4 12 2.4zm0 19.2c-4.97 0-9.12-3.44-10.24-8.08h20.48C21.12 18.16 16.97 21.6 12 21.6z" />
      </svg>
    ),
  },
  {
    name: "Prisma",
    description: "ORM",
    color: "text-teal-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M21.807 18.285L13.553.756a1.324 1.324 0 00-1.129-.754 1.31 1.31 0 00-1.189.633L2.191 14.803a1.356 1.356 0 00.014 1.387l4.546 7.426a1.36 1.36 0 001.181.684 1.271 1.271 0 00.468-.087l12.874-4.882a1.358 1.358 0 00.533-2.046zm-1.816 1.035l-11.242 4.26L6.04 17.43l7.815-8.875zm-5.698 4.513l-7.253-11.861 6.898 15.673z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    description: "Language",
    color: "text-blue-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: "Cloudflare R2",
    description: "File Storage",
    color: "text-orange-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M16.5 12c0 2.485-2.015 4.5-4.5 4.5S7.5 14.485 7.5 12c0-.832.225-1.61.619-2.279L6.5 8.5C5.563 9.539 5 10.932 5 12.5c0 3.038 2.462 5.5 5.5 5.5s5.5-2.462 5.5-5.5c0-.568-.081-1.118-.232-1.637l-1.5.731c.15.283.232.606.232.906zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Resend",
    description: "Email API",
    color: "text-pink-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    name: "JWT Auth",
    description: "Authentication",
    color: "text-emerald-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding relative">
      <div className="container-max">
        <AnimateInView className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Built on technology{" "}
            <span className="gradient-text-primary">you already trust</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Modern, battle-tested tools chosen for reliability, performance, and developer experience.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {techItems.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="glass rounded-2xl p-5 flex flex-col items-center gap-3 text-center h-full hover:border-white/[0.12] transition-colors group cursor-default">
                <div className={`${tech.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  {tech.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{tech.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{tech.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
