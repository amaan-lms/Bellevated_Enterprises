import React from "react";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="bg-black text-white selection:bg-[#C9A24D] selection:text-black">
      {/* HEADER */}
      <section className="relative pt-32 pb-16 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-bold tracking-[0.5em] text-[#C9A24D] uppercase mb-4"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter leading-none max-w-4xl"
          >
            YOUR PRIVACY, <br /> OUR COMMITMENT.
          </motion.p>

          <p className="mt-6 text-gray-400 max-w-3xl">
            This Privacy Policy describes how BELLEVATED ETERPRISES collects, uses,
            protects, and handles your personal information when you interact
            with our website, services, and communications.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-12">
          {/* Introduction */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">1. Introduction</h3>
            <p className="text-gray-400">
              BELLEVATED ETERPRISES values your privacy and is committed to protecting
              your personal information. This policy explains what data we
              collect, how we use it, and the choices you have regarding your
              information.
            </p>
          </div>

          {/* Types of Info */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              2. Types of Information Collected
            </h3>
            <p className="text-gray-400">
              We may collect personal information including, but not limited to:
              your name, email address, phone number, billing details, and any
              other information you voluntarily provide.
            </p>
          </div>

          {/* Collection Methods */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              3. Method of Information Collection
            </h3>
            <p className="text-gray-400">
              Information is collected when you submit forms, contact us, sign
              up for services, opt in to SMS communications, or interact with
              our website.
            </p>
          </div>

          {/* Purpose */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              4. Purpose of Data Collection
            </h3>
            <p className="text-gray-400">
              We collect customer information to provide services, communicate
              updates, respond to inquiries, manage appointments, process
              billing, improve our offerings, and ensure operational security.
            </p>
          </div>

          {/* SMS Consent Statement */}
          <div className="bg-zinc-900 border border-[#C9A24D]/40 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#C9A24D]">
              5. SMS & Mobile Communication Privacy
            </h3>
            <p className="text-gray-400 font-medium">
              Mobile Opt-In, SMS consent, and phone numbers collected for SMS
              communication purposes will not be shared with third parties or
              affiliates for marketing purposes.
            </p>
          </div>

          {/* Data Sharing */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">6. Data Sharing</h3>
            <p className="text-gray-400">
              We do not sell or rent personal information. Data may be shared
              only with trusted service providers who assist in operating our
              services and are contractually obligated to maintain
              confidentiality.
            </p>
          </div>

          {/* Security */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              7. Data Security Measures
            </h3>
            <p className="text-gray-400">
              We implement reasonable administrative, technical, and physical
              safeguards to protect personal data against unauthorized access,
              alteration, disclosure, or misuse.
            </p>
          </div>

          {/* User Rights */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">8. User Rights</h3>
            <p className="text-gray-400">
              You have the right to request access to, correction of, or deletion
              of your personal information. You may also withdraw consent for
              communications at any time.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">9. Contact Information</h3>
            <p className="text-gray-400">
              If you have questions or concerns regarding this Privacy Policy,
              please contact us at{" "}
              <a
                className="underline hover:text-[#C9A24D]"
                href="mailto:ceo@bellevated.com"
              >
                ceo@bellevated.com
              </a>
              .
            </p>
            <p className="mt-4 text-gray-500 text-sm">
              Last updated: January 6, 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
