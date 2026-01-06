import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Package, LineChart, Rocket, ArrowRight, ShieldCheck } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  // Parallax effect for the hero background
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="bg-black text-white overflow-hidden">

      {/* 1. HERO SECTION: PARALLAX & DEPTH */}
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50 scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000')`,
            y: y1
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 max-w-7xl mx-auto px-6 text-center"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#C9A24D] text-[10px] font-bold tracking-[0.2em] uppercase">
              <ShieldCheck size={9} strokeWidth={3} />
              Elevating Excellence
            </span>
          </motion.div>


          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8"
          >
            DELIVERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24D] via-[#f3d692] to-[#C9A24D]">
              COURIER
            </span>
            <span className="italic font-light text-white"> & </span>
            LOGISTICS
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-gray-400 text-md md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Bellevated Enterprises bridges the gap between logistical precision
            and entrepreneurial growth. We move missions, not just packages.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/services"
                className="group flex items-center justify-center gap-3 bg-[#C9A24D] text-black px-12 py-5 font-black uppercase tracking-widest transition-all rounded-sm shadow-[0_0_40px_rgba(201,162,77,0.2)]"
              >
                Our Services <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/about"
                className="flex items-center justify-center border border-white/20 text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm"
              >
                About Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* 2. ABOUT PREVIEW: CINEMATIC SPLIT */}
      <div className="bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="w-full lg:w-1/2 aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                initial={{ scale: 1.2, filter: "grayscale(100%)" }}
                whileInView={{ scale: 1, filter: "grayscale(0%)" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
                alt="Leadership"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tighter leading-none">
                THE CALL <br /> <span className="text-[#C9A24D]">TO RISE.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Bellevated was founded on the belief that survival was never the
                standard. We help individuals and businesses break cycles that drain
                life and replace them with opportunity and ownership.
              </p>
              <div className="pt-4">
                <Link to="/about" className="text-black font-black uppercase tracking-[0.2em] border-b-2 border-[#C9A24D] pb-1 hover:border-black transition-colors">
                  Read our Story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="relative bg-black text-white">
        {/* SERVICES */}
        <div className="py-40 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-20 text-center space-y-4">
            <h2 className="text-sm font-bold tracking-[0.4em] text-[#C9A24D] uppercase">
              Expertise
            </h2>
            <p className="text-4xl md:text-6xl font-bold tracking-tighter">
              Core Elevation Pillars
            </p>
          </div>

          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                title: "Logistics",
                icon: <Package size={32} />,
                desc:
                  "White-glove courier services ensuring your deliverables represent your brand's excellence.",
              },
              {
                title: "Consulting",
                icon: <LineChart size={32} />,
                desc:
                  "Strategic business and credit consulting to fuel sustainable long-term expansion.",
              },
              {
                title: "Entrepreneurship",
                icon: <Rocket size={32} />,
                desc:
                  "Development programs designed to bridge the gap between vision and execution.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -20 }}
                className="
                group relative p-12
                bg-gradient-to-b from-white/5 to-transparent
                border border-white/10
                rounded-3xl
                transition-all duration-500
              "
              >
                {/* Icon */}
                <div
                  className="
                  mb-10 p-4 w-fit rounded-2xl
                  bg-[#C9A24D]/10
                  border border-[#C9A24D]/20
                  text-[#C9A24D]
                  group-hover:bg-[#C9A24D]
                  group-hover:text-black
                  group-hover:scale-110
                  transition-all duration-300
                "
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-6 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-lg font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. CTA: THE FINAL ELEVATION */}
      <div className="px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto rounded-[3rem] overflow-hidden py-18 px-6 text-center"
        >
          {/* CTA Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
              alt="Corporate Architecture"
              className="w-full h-full object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 max-w-3]xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black mb-12 leading-none tracking-tighter">
              READY TO <br /> <span className="text-[#C9A24D]">BELLEVATE?</span>
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-white text-black px-8 py-6 font-black text-xs tracking-[0.2em] uppercase transition-all shadow-2xl rounded-full hover:bg-[#C9A24D]"
              >
                Start Your Elevation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}