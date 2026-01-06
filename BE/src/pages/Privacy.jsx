import React from "react";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="bg-black text-white selection:bg-[#C9A24D] selection:text-black">
      <section className="relative pt-32 pb-16 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-bold tracking-[0.5em] text-[#C9A24D] uppercase mb-4"
          >
            Privacy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter leading-none max-w-4xl"
          >
            YOUR PRIVACY, <br /> OUR PRIORITY.
          </motion.p>

          <p className="mt-6 text-gray-400 max-w-3xl">
            This Privacy Policy explains how Bellevated Enterprises ("we", "our", or "us") collects, uses, and discloses your information when you visit or use our website.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-12">
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Information We Collect</h3>
            <p className="text-gray-400">
              We may collect information you provide directly (for example, when you contact us), automatically collected data (such as analytics, IP address, and device information), and information from third-party services if you interact with them through our site.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">How We Use Your Information</h3>
            <p className="text-gray-400">
              We use information to operate and improve our services, respond to inquiries, send updates, analyze usage patterns, and for security and fraud prevention.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Cookies & Tracking</h3>
            <p className="text-gray-400">
              We use cookies and similar technologies to enhance site functionality, remember preferences, and analyze site usage. You can manage cookie settings in your browser, but disabling certain cookies may affect site functionality.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Third-Party Services</h3>
            <p className="text-gray-400">
              We may share information with service providers who perform services on our behalf (analytics, hosting, email delivery). Their use of your information is governed by their privacy policies.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Security</h3>
            <p className="text-gray-400">
              We employ reasonable administrative and technical safeguards to protect your information, but no method of transmission or storage is 100% secure.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Children</h3>
            <p className="text-gray-400">
              Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              If you have questions about this Privacy Policy or your data, email us at <a className="underline hover:text-[#C9A24D]" href="mailto:ceo@bellevated.com">ceo@bellevated.com</a>.
            </p>
            <p className="mt-4 text-gray-500 text-sm">Last updated: January 6, 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}
