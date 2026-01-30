import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  FileText,
  Building2
} from "lucide-react";
import axios from "axios";



const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    serviceRequired: "",
    projectDescription: "",
    timeline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

      const baseURL=import.meta.env.VITE_API_BASE_URL;


  try {
    await axios.post(`${baseURL}/api/quotes`, formData);
    alert("Quote request submitted successfully!");

    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      businessType: "",
      serviceRequired: "",
      projectDescription: "",
      timeline: "",
    });

  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};


  return (
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
              Partnership & Growth
            </span>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-10">
              REQUEST A <span className="text-[#C9A24D]">QUOTE</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Share your vision with us. Whether you're a vendor, hospital, government agency, or enterprise, 
              we provide tailored solutions designed for your specific operational needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
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
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your organization"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Your name"
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
                  Business Type
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors appearance-none"
                  required
                >
                  <option value="">Select your industry</option>
                  <option value="healthcare">Healthcare / Hospital</option>
                  <option value="government">Government Agency</option>
                  <option value="vendor">Vendor / Supplier</option>
                  <option value="logistics">Logistics / Transportation</option>
                  <option value="corporate">Corporate / Enterprise</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                  Service Required
                </label>
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors appearance-none"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="courier">Courier & Logistics</option>
                  <option value="consulting">Consulting & Strategy</option>
                  <option value="credit">Credit Restoration</option>
                  <option value="business">Business Formation</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                  Project Description
                </label>
                <textarea
                  rows="5"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, and specific needs..."
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors resize-none"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-2">
                  Desired Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#C9A24D] transition-colors appearance-none"
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (Within 1 week)</option>
                  <option value="short">Short-term (2-4 weeks)</option>
                  <option value="medium">Medium-term (1-3 months)</option>
                  <option value="long">Long-term (3+ months)</option>
                </select>
              </motion.div>

              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#C9A24D] text-black px-10 py-5 font-black uppercase tracking-widest hover:bg-white transition-all rounded-2xl flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Submit Quote Request
              </motion.button>
            </form>
          </motion.div>

          {/* CONTACT INFO SIDEBAR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-zinc-950 border border-white/10 rounded-3xl p-8 hover:border-[#C9A24D]/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#C9A24D]/10 border border-[#C9A24D]/20 flex items-center justify-center text-[#C9A24D] mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm mb-4">For general inquiries and quote requests</p>
              <a href="mailto:info@bellevated.com" className="text-[#C9A24D] hover:underline font-medium">
                info@bellevated.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-zinc-950 border border-white/10 rounded-3xl p-8 hover:border-[#C9A24D]/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#C9A24D]/10 border border-[#C9A24D]/20 flex items-center justify-center text-[#C9A24D] mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm mb-4">Mon - Fri, 9AM - 5PM</p>
              <a href="tel:+1234567890" className="text-[#C9A24D] hover:underline font-medium">
                (555) 123-4567
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-zinc-950 border border-white/10 rounded-3xl p-8 hover:border-[#C9A24D]/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#C9A24D]/10 border border-[#C9A24D]/20 flex items-center justify-center text-[#C9A24D] mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Response Time</h3>
              <p className="text-gray-400 text-sm">
                We typically respond to quote requests within 24-48 business hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INFO SECTION - PLACEHOLDER FOR YOUR CONTENT */}
      <section className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              WHY CHOOSE <span className="text-[#C9A24D]">BELLEVATED?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Add your key differentiators and value propositions here based on the information from your provided links.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Building2 size={32} />, title: "Industry Expertise", desc: "Proven experience serving major organizations nationwide" },
              { icon: <FileText size={32} />, title: "Detailed Solutions", desc: "Customized approaches tailored to your specific needs" },
              { icon: <Clock size={32} />, title: "Fast Turnaround", desc: "Quick response and efficient project execution" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-black border border-white/10 rounded-3xl p-10 text-center hover:border-[#C9A24D]/30 transition-colors"
              >
                <div className="text-[#C9A24D] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
