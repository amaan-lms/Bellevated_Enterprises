import React from "react";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="bg-black text-white selection:bg-[#C9A24D] selection:text-black">
      <section className="relative pt-32 pb-16 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-bold tracking-[0.5em] text-[#C9A24D] uppercase mb-4"
          >
            Terms of Use
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter leading-none max-w-4xl"
          >
            TERMS & CONDITIONS
          </motion.p>

          <p className="mt-6 text-gray-400 max-w-3xl">
            These Terms govern your use of the Bellevated Enterprises website. By accessing or using the site, you agree to be bound by these Terms.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-12">
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Use of Site</h3>
            <p className="text-gray-400">
              You may use the site for lawful purposes and in accordance with these Terms. You agree not to misuse the site or attempt to interfere with its operation.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Intellectual Property</h3>
            <p className="text-gray-400">
              All content on the site, including text, graphics, logos, and images, is owned by Bellevated Enterprises or its licensors and is protected by applicable intellectual property laws.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Disclaimer & Liability</h3>
            <p className="text-gray-400">
              The site and its content are provided "as is" without warranties of any kind. To the fullest extent permitted by law, Bellevated Enterprises disclaims liability for any damages arising from use of the site.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Links to Other Sites</h3>
            <p className="text-gray-400">
              The site may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Modifications</h3>
            <p className="text-gray-400">
              We may revise these Terms at any time. Continued use of the site after changes indicates your acceptance of the updated Terms.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Governing Law</h3>
            <p className="text-gray-400">
              These Terms are governed by the laws of the State of Washington, without regard to conflicts of law principles.
            </p>
            <p className="mt-4 text-gray-500 text-sm">Last updated: January 6, 2026</p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">For questions about these Terms, email <a className="underline hover:text-[#C9A24D]" href="mailto:ceo@bellevated.com">ceo@bellevated.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
