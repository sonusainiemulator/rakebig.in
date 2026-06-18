"use client";

import { Bot, ExternalLink, Globe, Link2, Mail } from "lucide-react";

const services = [
  "AI Agent Deployment",
  "AI Automation",
  "Voice AI Agents",
  "Open-Source Deployment",
  "AI Maintenance",
];

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">
                Rake<span className="gradient-text">Big</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner for AI agent deployment, automation, voice AI,
              and open-source project hosting. We make AI work for your business.
            </p>
            <div className="flex gap-4 mt-6">
              {[Globe, ExternalLink, Link2, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} RakeBig.in — All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-slate-600 hover:text-indigo-400 text-xs transition-colors">Privacy Policy</a>
            <span className="text-slate-700 text-xs">·</span>
            <a href="/terms" className="text-slate-600 hover:text-indigo-400 text-xs transition-colors">Terms &amp; Conditions</a>
            <span className="text-slate-700 text-xs">·</span>
            <p className="text-slate-600 text-xs">Built with Next.js · Framer Motion · Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
