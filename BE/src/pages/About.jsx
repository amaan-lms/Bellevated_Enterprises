import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { Quote, Target, Star, Shield, ArrowUpRight } from "lucide-react";
import logo from "../assets/bgremove.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <div className="bg-black text-white selection:bg-[#C9A24D] selection:text-black">
      {/* 1. MINIMALIST HEADER */}
      <section className="relative pt-32 pb-15 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-bold tracking-[0.5em] text-[#C9A24D] uppercase mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none max-w-4xl"
          >
            THE CONVICTION <br /> TO <span className="text-gray-500 italic font-light">RISE.</span>
          </motion.p>
        </div>
      </section>

      {/* 2. THE CORE NARRATIVE (Transparent PNG Image Support) */}
      <section className="py-28 px-10 pt-15 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8 z-10"
          >
            <div className="h-px w-20 bg-[#C9A24D]" />
            <p className="text-2xl md:text-4xl text-gray-200 font-light leading-tight tracking-tight">
              Bellevated Enterprises was founded on the belief that <span className="text-[#C9A24D] font-medium">survival was never the standard.</span>
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              We help individuals and businesses break cycles that drain life and replace them with opportunity, ownership, and growth. Whether through logistics or consulting, we operate as a catalyst for your God-given potential.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-light mt-6">
              Our mission is simple but uncompromising: to elevate leaders at every level. We partner with corporations, small businesses, private contractors, and vision-driven individuals to provide the infrastructure, insight, and execution required to operate with confidence and integrity.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-light mt-6">
              At Bellevated Enterprises, elevation is not a slogan—it is a standard. We exist to open doors, expand capacity, and position our partners to thrive.
            </p>
          </motion.div>

          {/* IMAGE CONTAINER FOR BG-REMOVED IMAGE */}
          <div className="relative flex justify-center items-center">
            {/* Background Glow for the PNG */}
            <div className="absolute w-72 h-72 bg-[#C9A24D]/20 rounded-full blur-[120px] animate-pulse" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-full max-w-md h-[300px]"
            >
              <img
                // REPLACE THIS URL WITH YOUR BG-REMOVED PNG
                src={logo}
                alt="Bellevated Leadership"
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(201,162,77,0.3)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. REDESIGNED VALUE GRID (THE LUCID PILLARS) */}
      <section className="py-32 pt-10 px-3 bg-zinc-950/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className=" px-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
            <h2 className="text-4xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight md:leading-none">
              OUR GUIDING
              <br className="hidden sm:block" />
              <span className="block sm:inline"> PILLARS.</span>
            </h2>

            <p className="text-[#C9A24D] font-mono text-xs md:text-sm tracking-widest uppercase md:mb-2">
              Established in Excellence
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={28} />,
                title: "Integrity",
                tagline: "RADICAL TRANSPARENCY",
                text: "Honesty is our baseline. We operate with radical transparency in every contract and consultation."
              },
              {
                icon: <Shield size={28} />,
                title: "Precision",
                tagline: "SURGICAL ACCURACY",
                text: "Details matter. From logistics to credit repair, we execute with surgical accuracy and focus."
              },
              {
                icon: <Star size={28} />,
                title: "Stewardship",
                tagline: "DIVINE RESPONSIBILITY",
                text: "Excellence is not an option—it is our responsibility to the talents and trust given to us. We create long lasting value and develop long lasting relationships with every partner we serve."
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group relative p-10 bg-black border border-white/5 rounded-3xl transition-all duration-500 hover:border-[#C9A24D]/30"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#C9A24D] mb-8 group-hover:bg-[#C9A24D] group-hover:text-black transition-all duration-500">
                    {value.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">{value.tagline}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 tracking-tight group-hover:text-[#C9A24D] transition-colors">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-200">{value.text}</p>

                  <ArrowUpRight className="absolute top-10 right-10 text-zinc-800 group-hover:text-[#C9A24D] transition-colors" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE GUIDING PRINCIPLE (Matthew 7:12) */}
      <section className="py-35 px-6 text-center bg-white text-black rounded-t-[3rem] md:rounded-t-[6rem]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Quote size={60} className="mx-auto mb-10 text-[#C9A24D] opacity-20" />
          <h2 className="text-4xl md:text-4xl font-serif italic mb-12 leading-tight tracking-tight px-4">
            "So in everything, do to others what you would have them do to you."
          </h2>
          <div className="inline-flex items-center gap-4 px-8 py-3 bg-black text-white font-black uppercase tracking-[0.3em] text-xs">
            The Golden Rule <span className="text-[#C9A24D]">—</span> Matthew 7:12
          </div>
          <p className="mt-12 text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
            This isn't just a verse; it is our operational manual. We treat your business, your packages, and your credit as if they were our own.
          </p>
        </motion.div>
      </section>

      {/* 5. CALL TO ACTION */}
     <section className="py-32 px-6 text-center">
  <motion.div>
    <p className="text-gray-500 mb-6 uppercase tracking-[0.4em] text-[10px] font-bold">
      Ready to take the next step?
    </p>

    <NavLink
      to="/contact"
      className="group text-4xl md:text-5xl font-black tracking-tighter transition-all"
    >
      LET&apos;S{" "}
      <span className="text-[#C9A24D] group-hover:italic transition-all">
        ELEVATE.
      </span>
    </NavLink>
  </motion.div>
</section>
    </div>
  );
}