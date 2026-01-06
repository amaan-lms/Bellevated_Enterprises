import React from "react";
import { motion } from "framer-motion";
import { 
  Truck, 
  ShieldCheck, 
  Briefcase, 
  CreditCard, 
  Building2, 
  ChevronRight,
  TrendingUp,
  Fingerprint
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Services() {
  const serviceList = [
    {
      title: "Courier & Logistics",
      tagline: "GOVERNMENT & CORPORATE",
      icon: <Truck size={32} />,
      desc: "White-glove delivery solutions for hospitals, government agencies, and law firms. We handle sensitive materials with zero-fail precision.",
      features: ["HIPAA Compliant", "Real-time Tracking", "Priority Routes"],
    },
    {
      title: "Credit Restoration",
      tagline: "FINANCIAL POSITIONING",
      icon: <TrendingUp size={32} />,
      desc: "Strategic restoration designed to move you from consumer to owner. We fix the foundation so you can access high-level funding.",
      features: ["Inquiry Removal", "Revolving Debt Strategy", "Funding Readiness"],
    },
    {
      title: "Business Formation",
      tagline: "STRUCTURE & COMPLIANCE",
      icon: <Building2 size={32} />,
      desc: "Comprehensive LLC setup, EIN acquisition, and compliance audits. We build your business to be bankable from day one.",
      features: ["Entity Structuring", "Operating Agreements", "DUNS & Bradstreet"],
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen selection:bg-[#C9A24D] selection:text-black">
      {/* 1. HEADER SECTION */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: `radial-gradient(#C9A24D 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="text-[#C9A24D] font-mono text-sm tracking-[0.4em] uppercase">Service Portfolio</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-4 mb-8">
              ELITE <span className="italic font-light text-gray-500">SOLUTIONS.</span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed">
              We provide the logistical backbone and financial intelligence 
              required to elevate your operations to a global standard.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. MAIN SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {serviceList.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-900/40 border border-white/5 p-10 rounded-[2rem] hover:bg-zinc-900/80 transition-all duration-500"
            >
              <div className="mb-12 p-4 w-fit rounded-2xl bg-black border border-[#C9A24D]/20 text-[#C9A24D] group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#C9A24D] uppercase">{s.tagline}</span>
              <h3 className="text-3xl font-bold mt-2 mb-6">{s.title}</h3>
              <p className="text-gray-400 font-light mb-8 leading-relaxed">
                {s.desc}
              </p>

              <ul className="space-y-4 mb-10">
                {s.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <ShieldCheck size={16} className="text-[#C9A24D]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:text-[#C9A24D] transition-colors">
                Inquire Now <ChevronRight size={18} />
              </button>

              {/* Subtle card glow */}
              <div className="absolute inset-0 bg-[#C9A24D]/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. "HOW WE ELEVATE" SECTION (The Process) */}
      <div className="bg-white text-black py-32 rounded-t-[4rem] md:rounded-t-[6rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">THE BELLEVATED WAY.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A systematic approach to breaking cycles and building empires.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: "01", name: "Assessment", desc: "We audit your current logistics or credit profile." },
              { step: "02", name: "Strategy", desc: "We build a custom blueprint for your specific goal." },
              { step: "03", name: "Execution", desc: "Our team moves with precision and integrity." },
              { step: "04", name: "Elevation", desc: "Long-term growth and continuous opportunity." },
            ].map((p, i) => (
              <div key={i} className="relative">
                <span className="text-6xl font-black text-gray-100 absolute -top-10 -left-4 z-0">
                  {p.step}
                </span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-3 uppercase tracking-tighter">{p.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. FINAL CALL TO ACTION */}
      <div className="py-32 px-6 text-center">
         <motion.div 
           className="max-w-4xl mx-auto"
         >
           <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
             READY FOR <span className="text-[#C9A24D]">ELITE</span> EXECUTION?
           </h2>
           <a href="/contact" className="inline-block bg-[#C9A24D] text-black px-6 py-4 font-black uppercase tracking-widest hover:bg-white transition-colors rounded-sm">
             Start Your Application
           </a>
         </motion.div>
      </div>
    </section>
  );
}