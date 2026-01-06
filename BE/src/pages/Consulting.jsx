import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  BarChart3,
  Workflow,
  Key,
  ArrowRight,
  Trophy,
  Zap,
  Anchor
} from "lucide-react";
import ownershipImg from "../assets/girlbgd.png";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Consulting() {
  return (
    <div className="bg-black text-white selection:bg-[#C9A24D] selection:text-black">

      {/* 1. HERO / INTRODUCTION */}
      <section className="relative pt-32 pb-1 px-6 overflow-hidden">
        {/* Abstract Background Blur */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A24D]/10 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-[#C9A24D] font-mono text-sm tracking-[0.5em] uppercase mb-4 block">
              Entrepreneurial Development
            </span>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-10">
              STRATEGY <br />
              <span className="text-gray-500 font-light italic text-5xl md:text-8xl">Over</span>
              <br /> SURVIVAL.
            </h1>
            <p className="max-w-2xl text-xl md:text-1xl text-gray-400 font-light leading-relaxed">
              We help entrepreneurs break limiting cycles and build scalable,
              sustainable businesses rooted in <span className="text-white">ownership, strategy, and discipline.</span>
            </p>
          </motion.div>
        </div>
      </section>
      {/* 2. THE CONSULTING FRAMEWORK (Bento Grid) */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Large Feature Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-12 bg-zinc-900 border border-white/10 rounded-[2.5rem] flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#C9A24D]/15 flex items-center justify-center text-[#C9A24D] mb-8">
                  <Workflow size={32} />
                </div>

                <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white">
                  Scalable Systems
                </h3>

                <p className="text-zinc-200 text-lg font-medium leading-relaxed max-w-md">
                  We don't just solve today's problems; we build the infrastructure that prevents them tomorrow.
                  From SOPs to automation.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-2 text-[#C9A24D] font-extrabold uppercase tracking-widest text-sm cursor-pointer">
                Explore Methodology <ArrowRight size={18} />
              </div>
            </motion.div>

            {/* Small High-Impact Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-10 bg-[#C9A24D] text-black rounded-[2.5rem] group"
            >
              <Lightbulb size={40} strokeWidth={2.5} className="mb-6" />
              <h3 className="text-2xl font-black mb-4 uppercase leading-none">
                Vision <br /> Clarification
              </h3>
              <p className="text-black/80 text-sm font-semibold leading-relaxed">
                Transforming vague goals into a rigorous, actionable blueprint for market dominance.
              </p>
            </motion.div>

            {/* Small High-Impact Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-10 bg-zinc-900 border border-white/10 rounded-[2.5rem] group"
            >
              <BarChart3 size={40} className="text-[#C9A24D] mb-6" />
              <h3 className="text-2xl font-extrabold mb-4 text-white">
                Market Positioning
              </h3>
              <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                Analyzing your competitive landscape to find the “blue ocean” where your business thrives.
              </p>
            </motion.div>

            {/* Large Feature Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative md:col-span-2 p-12 bg-white text-black rounded-[2.5rem] flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white mb-8">
                  <Key size={32} />
                </div>

                <h3 className="text-4xl font-extrabold mb-4 tracking-tight">
                  Foundational Ownership
                </h3>

                <p className="text-zinc-700 text-lg font-medium leading-relaxed max-w-md">
                  Ownership is a mindset before it is a legal status. We train leaders to take full stewardship
                  over their enterprise.
                </p>
              </div>

              <div className="mt-12 text-sm font-black uppercase tracking-[0.2em] opacity-40 italic">
                ESTABLISHED IN EXCELLENCE
              </div>

              {/* Bottom-right image */}
              <img
                src={ownershipImg}
                alt="Foundational Ownership Illustration"
                className="absolute bottom-0 right-0 w-48 md:w-56 opacity-90 pointer-events-none"
              />
            </motion.div>


          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section className="py-20 pt-2 pb-15 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Zap className="text-[#C9A24D] mx-auto mb-8" size={48} />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              LIMITING CYCLES END <br /> <span className="text-[#C9A24D]">WHERE STRATEGY BEGINS.</span>
            </h2>
            <div className="h-px w-24 bg-[#C9A24D] mx-auto mb-8" />
            <p className="text-gray-500 text-xl font-light leading-relaxed">
              Our consulting is not for those looking for a quick fix. It is for the
              visionary who understands that discipline is the bridge between
              a God-given dream and its physical manifestation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. RESULTS / METRICS SECTION */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Systems Built", value: "50+", icon: <Workflow size={16} /> },
              { label: "Growth Rate", value: "2X", icon: <BarChart3 size={16} /> },
              { label: "Client Success", value: "100%", icon: <Trophy size={16} /> },
              { label: "Rooted In", value: "Purpose", icon: <Anchor size={16} /> },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-center text-[#C9A24D] mb-2">
                  {stat.icon}
                </div>

                <p className="text-3xl font-black text-white tracking-tight">
                  {stat.value}
                </p>

                <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. CALL TO ACTION */}
      <section className="py-24 px-6 text-center bg-[#C9A24D] text-black">
        <motion.div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
            SCHEDULE YOUR <br /> STRATEGY AUDIT
          </h2>

          <motion.a
            href="/contact"
            whileHover={{
              y: -4,
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="relative inline-block bg-black text-white px-10 py-5 font-black uppercase tracking-widest text-sm rounded-full overflow-hidden"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />

            <span className="relative z-10">Begin Development</span>
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
}