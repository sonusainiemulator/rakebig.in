import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — RakeBig.in",
  description:
    "Learn how RakeBig.in collects, uses, and protects your personal data in compliance with applicable Indian privacy regulations.",
};

const sections = [
  {
    title: "1. Who We Are",
    content: `RakeBig.in ("we", "our", "us") is an AI deployment agency based in India. We provide services including AI agent deployment, automation, voice AI, open-source AI hosting, and AI maintenance. This Privacy Policy explains how we handle personal data collected through our website (rakebig.in) and during service delivery. For questions, please contact us via our website.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect the following categories of information:\n\n• Contact information: name, email address, phone number, and company name submitted via our contact form or project discussions.\n• Technical data: IP address, browser type, device type, pages visited, and time spent — collected automatically via analytics tools.\n• Project data: information you share about your business, systems, and requirements during project scoping and delivery.\n• Communication records: emails, messages, and notes from our interactions with you.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use collected information to: (a) respond to your enquiries and deliver the services you have engaged us for; (b) send project updates, invoices, and support communications; (c) improve our website and services based on usage patterns; (d) comply with legal and regulatory obligations; (e) protect the security of our systems and detect fraud. We do not use your data for unsolicited marketing without your consent.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your personal data under the following bases: contractual necessity (to deliver services you have requested); legitimate interests (to operate and improve our business, prevent fraud); legal obligation (to comply with applicable Indian law including the IT Act, 2000 and applicable DPDP Act provisions); and consent (where you have explicitly opted in to communications).`,
  },
  {
    title: "5. Cookies & Analytics",
    content: `Our website may use cookies and similar tracking technologies to understand how visitors interact with our pages. These may include essential cookies (required for the site to function), analytics cookies (e.g., Google Analytics, Vercel Analytics), and preference cookies. You can control cookie settings through your browser. Disabling cookies may affect some website functionality.`,
  },
  {
    title: "6. Third-Party Services",
    content: `We use trusted third-party services to operate our business, including: cloud hosting providers (Vercel, AWS, GCP), email and communication tools, analytics platforms, and payment processors. These providers are bound by their own privacy policies and are selected for compliance with applicable data protection standards. We do not sell your personal data to any third party.`,
  },
  {
    title: "7. Data We Access During Projects",
    content: `To deliver AI services, we may be granted access to your systems, databases, APIs, and business data. This access is used solely for service delivery purposes. We implement strict access controls, use encrypted connections, and do not retain client data beyond the engagement unless agreed in writing. All credentials and access tokens shared with us are treated as confidential.`,
  },
  {
    title: "8. Data Retention",
    content: `We retain personal data for as long as necessary to fulfil the purposes outlined in this policy. Specifically: contact enquiry data is retained for up to 2 years; project data and communications are retained for up to 5 years for legal and tax compliance; analytics data is retained per the policies of the respective analytics provider. After the retention period, data is securely deleted or anonymised.`,
  },
  {
    title: "9. Data Security",
    content: `We take appropriate technical and organisational measures to protect your data against unauthorised access, loss, or disclosure. These include encrypted data transmission (HTTPS/TLS), access controls and authentication for internal systems, secure credential management, and regular security reviews. However, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.`,
  },
  {
    title: "10. Your Rights",
    content: `Depending on your jurisdiction, you may have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data (subject to legal obligations); object to or restrict certain processing; and withdraw consent where processing is based on consent. To exercise any of these rights, please contact us via our website. We will respond within 30 days.`,
  },
  {
    title: "11. Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe a minor has provided us with personal data, please contact us immediately and we will take steps to delete that information.`,
  },
  {
    title: "12. International Transfers",
    content: `As an India-based company using global cloud infrastructure, your data may be processed on servers located outside India. Where required, we ensure appropriate safeguards are in place in accordance with applicable data protection laws. By using our services, you acknowledge this transfer may occur.`,
  },
  {
    title: "13. Changes to This Policy",
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or applicable regulations. Significant changes will be communicated on our website or via email. The updated policy will take effect from the date shown at the bottom of this page. We encourage you to review this page regularly.`,
  },
  {
    title: "14. Contact & Complaints",
    content: `For privacy-related questions, data requests, or complaints, please reach us through the contact form at rakebig.in/#contact. If you are not satisfied with our response, you may have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 mb-5">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Your privacy matters to us. Here is exactly what data we collect,
            why we collect it, and how we protect it.
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
              <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                {s.content}
              </p>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="text-center pt-6 pb-2">
            <p className="text-slate-500 text-sm mb-4">
              Questions about your data or this policy?
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
