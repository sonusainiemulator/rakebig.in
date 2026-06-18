import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — RakeBig.in",
  description:
    "Read the Terms and Conditions for RakeBig.in AI agency services including AI agent deployment, automation, voice AI, and maintenance.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using RakeBig.in ("the Website") or engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all clients, visitors, and users of our platform.`,
  },
  {
    title: "2. Services",
    content: `RakeBig.in provides AI deployment, automation, voice AI, open-source AI hosting, custom AI integration, and related maintenance services ("Services"). The scope, deliverables, and timelines for each engagement are defined in a separate project agreement or proposal accepted by both parties. We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.`,
  },
  {
    title: "3. Client Responsibilities",
    content: `You agree to: (a) provide accurate and complete information required for service delivery; (b) grant necessary access to systems, APIs, and infrastructure as agreed; (c) ensure you have legal rights to any data, content, or systems you share with us; (d) comply with all applicable laws and regulations in your jurisdiction; (e) designate a point of contact for project communications and approvals.`,
  },
  {
    title: "4. Payment Terms",
    content: `Payment terms are outlined in individual project proposals. Unless otherwise agreed: invoices are due within 14 days of issue; a 50% advance may be required before project commencement; late payments beyond 30 days may incur a 2% monthly interest charge; we reserve the right to pause or terminate services for overdue accounts. All prices are exclusive of applicable taxes (GST or otherwise).`,
  },
  {
    title: "5. Refund Policy",
    content: `Advance payments for completed work milestones are non-refundable. If a project is cancelled before commencement, the advance may be refunded after deducting any reasonable preparation costs. Maintenance subscription fees are non-refundable for the current billing period. Disputes must be raised within 14 days of invoice issue.`,
  },
  {
    title: "6. Intellectual Property",
    content: `Upon receipt of full payment, the client owns all custom-developed code, configurations, and deliverables specific to their project. RakeBig.in retains ownership of proprietary frameworks, methodologies, templates, and tools used in delivery. Open-source components remain subject to their respective licenses. We may reference your project in our portfolio unless you request confidentiality in writing.`,
  },
  {
    title: "7. Confidentiality",
    content: `Both parties agree to keep confidential any proprietary information, business data, API keys, credentials, or trade secrets shared during the engagement. This obligation survives termination of the agreement for a period of two (2) years. Neither party shall disclose confidential information to third parties without prior written consent, except as required by law.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `RakeBig.in's total liability for any claim arising from our services shall not exceed the total fees paid by the client in the three (3) months preceding the claim. We are not liable for: indirect, incidental, or consequential damages; loss of profits or business opportunities; downtime caused by third-party services, AI model providers, or infrastructure outside our control; or decisions made based on AI-generated outputs.`,
  },
  {
    title: "9. AI Output Disclaimer",
    content: `AI systems deployed by RakeBig.in may produce outputs that require human review. We do not guarantee that AI-generated content, decisions, or recommendations are accurate, complete, or fit for any specific purpose. Clients are responsible for reviewing and validating AI outputs before acting on them. RakeBig.in is not liable for business decisions made based on AI system outputs.`,
  },
  {
    title: "10. Uptime & SLA",
    content: `Where a Service Level Agreement (SLA) is included in your engagement, it defines specific uptime targets and response times. Our standard maintenance plans target 99.9% uptime for monitored systems. Planned maintenance windows, force majeure events, and third-party service outages are excluded from SLA calculations.`,
  },
  {
    title: "11. Termination",
    content: `Either party may terminate a project engagement with 14 days written notice. We may terminate immediately if: payment obligations are not met; you breach these terms; or the engagement involves unlawful activity. Upon termination, you will receive all completed deliverables up to the termination date. Fees for completed milestones remain due regardless of termination.`,
  },
  {
    title: "12. Governing Law",
    content: `These Terms are governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000 and its amendments. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Rajasthan, India. We encourage resolution through good-faith negotiation before formal proceedings.`,
  },
  {
    title: "13. Changes to Terms",
    content: `We may update these Terms from time to time. Significant changes will be communicated via email or notice on our website. Continued use of our services after the effective date constitutes acceptance of the revised terms. The date of the last update is indicated at the bottom of this page.`,
  },
  {
    title: "14. Contact",
    content: `For questions about these Terms, reach us through the contact form on our website at rakebig.in/#contact. We aim to respond to all enquiries within 2 business days.`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 bg-indigo-500/10 mb-5">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Terms &amp; <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Please read these terms carefully before engaging our AI services.
            By working with RakeBig.in, you agree to the following.
          </p>
          <p className="text-slate-600 text-sm mt-4">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/10 transition-colors duration-200"
            >
              <h2 className="text-white font-bold text-lg mb-3">{s.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="text-center pt-6 pb-2">
            <p className="text-slate-500 text-sm mb-4">
              Have questions about our terms?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-xl shadow-indigo-500/25"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
