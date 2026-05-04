"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const words = ["AI Agents", "Voice Bots", "Automations", "Open-Source AI"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            India&apos;s Premier AI Deployment Agency
          </div>
        </FadeUp>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
        >
          We Deploy & Maintain
          <br />
          <span className="gradient-text">Any AI System</span>
          <br />
          <span className="text-slate-300 text-4xl md:text-5xl font-bold">For Your Business</span>
        </motion.h1>

        {/* Tags */}
        <FadeUp delay={0.35}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {words.map((word) => (
              <span
                key={word}
                className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-sm font-medium"
              >
                {word}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          From AI agent installation to custom voice bots, open-source project
          hosting, and 24/7 AI maintenance — we handle the full lifecycle so you
          can focus on growing your business.
        </motion.p>

        {/* CTAs */}
        <FadeUp delay={0.55}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
            >
              Start Your AI Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 font-semibold text-sm hover:bg-white/10 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4 text-yellow-400" />
              Explore Services
            </a>
          </div>
        </FadeUp>

        {/* Stats row */}
        <FadeUp delay={0.7}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-12">
            {[
              { value: "100+", label: "AI Projects Deployed" },
              { value: "50+", label: "Happy Clients" },
              { value: "99.9%", label: "Uptime Guaranteed" },
              { value: "24/7", label: "AI Maintenance" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
                <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
}
