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
            SMS Terms & Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter leading-none max-w-4xl"
          >
            TERMS OF SERVICE <br /> FOR SMS COMMUNICATIONS
          </motion.p>

          <p className="mt-6 text-gray-400 max-w-3xl">
            These SMS Terms & Conditions explain how BELLEVATED ENTERPRISES communicates with you via text
            messages and how your information is handled.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-12">
          {/* 1 */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">1. SMS Consent Communication</h3>
            <p className="text-gray-400">
              The phone numbers obtained as part of the SMS consent process will not be shared with
              third parties for marketing purposes.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">2. Types of SMS Communications</h3>
            <p className="text-gray-400 mb-4">
              If you have consented to receive text messages from BELLEVATED ENTERPRISES , you may receive
              messages related to the following:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Appointment reminders</li>
              <li>Follow-up messages</li>
              <li>Billing inquiries</li>
              <li>Scheduling</li>
              <li>Updates</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">3. Message Frequency</h3>
            <p className="text-gray-400">
              Message frequency may vary depending on the type of communication. For example, you
              may receive up to [X] SMS messages per week related to your appointments, billing, or
              scheduling.
            </p>
          </div>

          {/* 4 */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">4. Potential Fees for SMS Messaging</h3>
            <p className="text-gray-400">
              Standard message and data rates may apply depending on your carrier’s pricing plan.
              These fees may vary if the message is sent domestically or internationally.
            </p>
          </div>

          {/* 5 */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">5. Opt-In Method</h3>
            <p className="text-gray-400 mb-4">
              You may opt-in to receive SMS messages from BELLEVATED ENTERPRISES by submitting an online
              form.
            </p>
             <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Verbally, during a conversation</li>
              <li>By messaging us first</li>
              <li>By submitting an online form</li>
             
            </ul>
          </div>

          {/* 6 */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">6. Opt-Out Method</h3>
            <p className="text-gray-400">
              You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong>{" "}
              to any message you receive. You may also contact us directly to request removal from
              our messaging list.
            </p>
          </div>

          {/* 7 */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">7. Help</h3>
            <p className="text-gray-400">
              If you are experiencing any issues, reply with the keyword <strong>HELP</strong>, or
              get assistance directly from us at{" "}
              <a href="#" className="underline hover:text-[#C9A24D]">
                [Link]
              </a>
              .
            </p>
          </div>

          {/* 8 */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">8. Standard Messaging Disclosures</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Message and data rates may apply.</li>
              <li>You can opt out at any time by texting "STOP."</li>
              <li>
                For assistance, text "HELP" or visit our{" "}
                <a href="Privacy" className="underline hover:text-[#C9A24D]">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="Terms" className="underline hover:text-[#C9A24D]">
                  Terms and Conditions
                </a>{" "}
                pages.
              </li>
              <li>Message frequency may vary.</li>
            </ul>
            <p className="mt-4 text-gray-500 text-sm">Last updated: January 6, 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}
