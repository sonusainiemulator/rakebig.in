"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Clock,
  Layers,
  Code2,
  HeartHandshake,
  Globe,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Full-Stack AI Expertise",
    description:
      "We work across the entire AI stack — LLMs, embeddings, vector DBs, APIs, voice pipelines, and deployment infrastructure.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most AI deployments go live within 24–72 hours. We move fast without cutting corners on quality or security.",
  },
  {
    icon: Layers,
    title: "Any Platform, Any Cloud",
    description:
      "AWS, GCP, Azure, Hetzner, or your own VPS — we deploy on whatever infrastructure you already have or prefer.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade Quality",
    description:
      "Every deployment is production-ready: monitored, secured, optimized, and documented so your team can manage it.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Approach",
    description:
      "We work as your AI partner, not just a vendor. Your success is our metric — and we're transparent every step of the way.",
  },
  {
    icon: Globe,
    title: "Open-Source Specialists",
    description:
      "Deep expertise in the open-source AI ecosystem. We deploy, patch, and maintain hundreds of GitHub AI projects.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why-us" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-600/8 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 mb-4">
            Why RakeBig
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Built by AI Builders,
            <br />
            <span className="gradient-text">For Your Business</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            We don&apos;t just install software — we engineer AI systems that actually
            deliver business value, reliably.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center mt-0.5">
                  <Icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5">{reason.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trusted by banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center"
        >
          <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest font-medium">
            Technologies We Deploy
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "OpenAI", "Anthropic", "Ollama", "LangChain", "CrewAI", "AutoGen",
              "n8n", "Flowise", "Vapi", "ElevenLabs", "Pinecone", "Supabase",
              "FastAPI", "Vercel", "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-white/5 border border-white/8 text-slate-400 text-xs font-medium hover:text-indigo-300 hover:border-indigo-500/30 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
