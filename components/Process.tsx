"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Search, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a free consultation to understand your business goals, current stack, and which AI solution fits best.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/30",
  },
  {
    icon: Search,
    step: "02",
    title: "Solution Design",
    description:
      "Our team designs the architecture — choosing the right AI models, tools, and integrations for your specific use case.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy & Launch",
    description:
      "We build, test, and deploy your AI system with zero downtime. From staging to production, we handle everything.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    icon: LifeBuoy,
    step: "04",
    title: "Maintain & Scale",
    description:
      "Post-launch, we monitor performance, push updates, and scale your AI as your business grows — 24/7 support included.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" className="py-28 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-purple-400 border border-purple-500/30 bg-purple-500/10 mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            From Idea to
            <span className="gradient-text"> Live AI</span>
            <br />in Days, Not Months
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Our proven 4-step process gets your AI system up and running fast,
            with ongoing support built in from day one.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative text-center"
                >
                  {/* Icon circle */}
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl border ${step.bg} flex items-center justify-center mb-5 relative z-10`}
                  >
                    <Icon className={`w-8 h-8 ${step.color}`} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 border border-white/10 text-xs font-bold text-slate-400 flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
