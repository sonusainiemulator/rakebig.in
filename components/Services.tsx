"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bot,
  Mic,
  GitBranch,
  Zap,
  Wrench,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agent Installation",
    description:
      "Deploy any AI agent — LangChain, CrewAI, AutoGen, n8n, or custom-built. We handle setup, integration, and go-live on any infrastructure.",
    tags: ["LangChain", "CrewAI", "AutoGen", "n8n"],
    color: "from-indigo-500 to-purple-600",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: Zap,
    title: "AI Automation Services",
    description:
      "End-to-end workflow automation powered by AI. Connect your tools, trigger smart actions, and eliminate repetitive tasks across your entire stack.",
    tags: ["Zapier", "Make", "Custom APIs", "Webhooks"],
    color: "from-yellow-500 to-orange-500",
    glow: "shadow-yellow-500/20",
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    description:
      "Custom voice AI built to your specs — inbound/outbound calling, multilingual support, natural conversation flow, and CRM integration.",
    tags: ["Twilio", "Vapi", "ElevenLabs", "Deepgram"],
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: GitBranch,
    title: "Open-Source AI Deployment",
    description:
      "We deploy any open-source AI project from GitHub — Ollama, LocalAI, Open WebUI, Flowise, and more — on your cloud or VPS in hours.",
    tags: ["Ollama", "Flowise", "LocalAI", "Open WebUI"],
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: Wrench,
    title: "AI Maintenance & Support",
    description:
      "24/7 monitoring, bug fixes, model updates, and performance optimization. We keep your AI systems running at peak performance, always.",
    tags: ["24/7 Monitoring", "Updates", "Optimization", "SLA"],
    color: "from-rose-500 to-pink-600",
    glow: "shadow-rose-500/20",
  },
  {
    icon: LayoutGrid,
    title: "Custom AI Integration",
    description:
      "Seamlessly embed AI into your existing products — CRMs, e-commerce platforms, mobile apps, or internal tools. Any stack, any scale.",
    tags: ["REST API", "Webhooks", "SDK", "Custom Build"],
    color: "from-purple-500 to-violet-600",
    glow: "shadow-purple-500/20",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${service.glow}`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-400 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Learn more */}
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group/link"
      >
        Get a quote
        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
      </a>

      {/* Hover gradient overlay */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none`}
      />
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 bg-indigo-500/10 mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Complete AI Services,
            <br />
            <span className="gradient-text">One Expert Team</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From day-one deployment to long-term AI maintenance — we cover every
            stage of your AI journey.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
