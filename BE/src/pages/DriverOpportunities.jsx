import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Truck, 
  Users, 
  TrendingUp, 
  FileText, 
  Send,
  CheckCircle,
  Award,
  MapPin
} from "lucide-react";
import axios from "axios";



const scrollbarStyles = `
  .scrollbar-black::-webkit-scrollbar {
    width: 8px;
  }
  .scrollbar-black::-webkit-scrollbar-track {
    background: #000;
  }
  .scrollbar-black::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
  }
  .scrollbar-black::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function DriverOpportunities() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    yearsExperience: "",
    licenseType: "",
    serviceAreas: "",
    vehicleType: "",
    availability: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.agreeToTerms) {
    alert("Please agree to the contractor terms and conditions");
    return;
  }

      const baseURL=import.meta.env.VITE_API_BASE_URL;


  try {
    await axios.post(`${baseURL}/api/drivers`, formData);

    alert("Application submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      yearsExperience: "",
      licenseType: "",
      serviceAreas: "",
      vehicleType: "",
      availability: "",
      agreeToTerms: false,
    });

  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <>
      <style>{scrollbarStyles}</style>
      <div className="bg-black text-white selection:bg-[#C9A24D] selection:text-black">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A24D]/10 rounded-full blur-[150px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="text-[#C9A24D] font-mono text-sm tracking-[0.5em] uppercase mb-4 block">
              Join Our Network
            </span>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-10">
              DRIVER <span className="text-[#C9A24D]">OPPORTUNITIES</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Expand your reach nationwide. Partner with Bellevated Enterprises as a sub-contractor 
              and access high-value courier and logistics opportunities across the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              WHY PARTNER WITH <span className="text-[#C9A24D]">US?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin size={32} />,
                title: "Nationwide Coverage",
                desc: "Access high-value opportunities beyond your local area and state boundaries"
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Competitive Rates",
                desc: "Premium compensation with transparent, predictable pricing structures"
              },
              {
                icon: <Award size={32} />,
                title: "Premium Clients",
                desc: "Work with healthcare facilities, government agencies, and corporate partners"
              },
              {
                icon: <Truck size={32} />,
                title: "Flexible Scheduling",
                desc: "Choose your own hours and manage multiple opportunities on your terms"
              },
              {
                icon: <Users size={32} />,
                title: "Support & Resources",
                desc: "Dedicated support team and training for professional operations"
              },
              {
                icon: <CheckCircle size={32} />,
                title: "Professional Standards",
                desc: "Part of an elite network committed to excellence and integrity"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-black border border-white/10 rounded-3xl p-10 hover:border-[#C9A24D]/30 transition-colors"
              >
                <div className="text-[#C9A24D] mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* FORM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-black tracking-tighter mb-10">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors"
                    required
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                  Years of Driving Experience
                </label>
                <select
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors appearance-none"
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                  License Type
                </label>
                <select
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors appearance-none"
                  required
                >
                  <option value="">Select license type</option>
                  <option value="standard">Standard Driver's License</option>
                  <option value="commercial">Commercial Driver's License (CDL)</option>
                  <option value="hazmat">CDL with HazMat</option>
                </select>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                  Service Areas (States)
                </label>
                <textarea
                  name="serviceAreas"
                  value={formData.serviceAreas}
                  onChange={handleChange}
                  placeholder="List states where you can operate (e.g., CA, TX, NY)"
                  rows="3"
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors resize-none"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                  Vehicle Type
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors appearance-none"
                  required
                >
                  <option value="">Select vehicle type</option>
                  <option value="sedan">Sedan/Car</option>
                  <option value="van">Van/Cargo Van</option>
                  <option value="truck">Pickup Truck</option>
                  <option value="box">Box Truck</option>
                  <option value="semi">Semi Truck</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                  Availability
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors appearance-none"
                  required
                >
                  <option value="">Select availability</option>
                  <option value="fulltime">Full-time</option>
                  <option value="parttime">Part-time</option>
                  <option value="flexible">Flexible/As-Needed</option>
                </select>
              </motion.div>

              {/* CONTRACTOR AGREEMENT SECTION */}
              <motion.div variants={fadeInUp} className="bg-zinc-950 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <FileText size={24} className="text-[#C9A24D]" />
                  Contractor Agreement
                </h3>
                <div className="bg-black rounded-lg p-6 mb-6 max-h-64 overflow-y-auto border border-white/5 scrollbar-black">
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    <strong>INDEPENDENT CONTRACTOR AGREEMENT</strong>
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed space-y-3">
                    <span className="block mb-3">
                      This Agreement establishes the terms and conditions under which you will operate as an independent sub-contractor with Bellevated Enterprises.
                    </span>
                    <span className="block mb-3">
                      <strong>1. CONTRACTOR STATUS:</strong> You are an independent contractor and not an employee. You are responsible for your own taxes, insurance, and business expenses.
                    </span>
                    <span className="block mb-3">
                      <strong>2. RESPONSIBILITIES:</strong> You agree to provide professional courier and logistics services meeting our standards for safety, timeliness, and customer service.
                    </span>
                    <span className="block mb-3">
                      <strong>3. COMPENSATION:</strong> Payment terms and rates will be specified in separate engagement agreements for each opportunity.
                    </span>
                    <span className="block mb-3">
                      <strong>4. INSURANCE & LIABILITY:</strong> You maintain appropriate vehicle insurance and liability coverage. You are responsible for all vehicle maintenance and operational costs.
                    </span>
                    <span className="block mb-3">
                      <strong>5. CONDUCT:</strong> You agree to maintain professional standards, follow all traffic laws, and represent Bellevated Enterprises with integrity and excellence.
                    </span>
                    <span className="block mb-3">
                      <strong>6. CONFIDENTIALITY:</strong> You agree to protect client information and maintain confidentiality regarding business details and delivery information.
                    </span>
                    <span className="block mb-3">
                      <strong>7. COMPLIANCE:</strong> You agree to comply with all federal, state, and local regulations applicable to commercial driving and delivery services.
                    </span>
                    <span className="block">
                      <strong>8. TERMINATION:</strong> Either party may terminate this relationship at will with written notice.
                    </span>
                  </p>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 cursor-pointer accent-[#C9A24D]"
                    required
                  />
                  <span className="text-sm text-gray-300">
                    I have read and agree to the Contractor Agreement terms above. I understand my responsibilities as an independent contractor with Bellevated Enterprises.
                  </span>
                </label>

                <p className="text-xs text-gray-500 mt-4">
                  After submission, you will receive a formal DocuSign contract for electronic signature. This ensures secure, legally binding agreement completion.
                </p>
              </motion.div>

              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#C9A24D] text-black px-10 py-5 font-black uppercase tracking-widest hover:bg-white transition-all rounded-2xl flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Submit Application
              </motion.button>
            </form>
          </motion.div>

          {/* REQUIREMENTS SIDEBAR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <div className="sticky top-32">
              <h2 className="text-2xl font-black tracking-tighter mb-8">Minimum Requirements</h2>

              {[
                { title: "Valid License", desc: "Current driver's license or CDL" },
                { title: "Vehicle Insurance", desc: "Proof of active vehicle insurance" },
                { title: "Clean Driving Record", desc: "No major violations or accidents" },
                { title: "Reliable Transportation", desc: "Well-maintained vehicle" },
                { title: "Professional Standards", desc: "Commitment to excellence and integrity" },
                { title: "Background Check", desc: "Pass standard background screening" }
              ].map((req, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-zinc-950 border border-white/10 rounded-2xl p-6 mb-4 hover:border-[#C9A24D]/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C9A24D] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{req.title}</h4>
                      <p className="text-xs text-gray-400">{req.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 bg-zinc-950/50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            READY TO EXPAND YOUR <span className="text-[#C9A24D]">REACH?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Join our network of professional contractors and gain access to nationwide opportunities. 
            Let's elevate your delivery business together.
          </p>
        </motion.div>
      </section>
    </div>
    </>
  );
}
