import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logocrop.png";

export default function Footer() {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* -------- SCROLL TO TOP ON ROUTE CHANGE -------- */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const footerNavLinkClass =
    "hover:text-[#C9A24D] transition-colors duration-300";

  return (
    <footer className="relative bg-black text-gray-400 border-t border-white/5">
      {/* Decorative Gradient Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        {/* Company Identity */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="Bellevated Enterprises Logo"
            className="w-16 h-16 object-contain"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            Exist to announce opportunity and elevate people, businesses, and
            communities to their God-given potential.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-[0.2em]">
            Navigation
          </h4>
          <nav className="flex flex-col gap-3 text-sm">
            <NavLink to="/" onClick={scrollToTop} className={footerNavLinkClass}>Home</NavLink>
            <NavLink to="/about" onClick={scrollToTop} className={footerNavLinkClass}>About Us</NavLink>
            <NavLink to="/services" onClick={scrollToTop} className={footerNavLinkClass}>Services</NavLink>
            <NavLink to="/consulting" onClick={scrollToTop} className={footerNavLinkClass}>Consulting</NavLink>
            <NavLink to="/contact" onClick={scrollToTop} className={footerNavLinkClass}>Contact</NavLink>
           
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-[0.2em]">
            Inquiries
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col">
              <span className="text-[10px] text-gray-600 uppercase">Email</span>
              <a
                href="mailto:ceo@bellevated.com"
                className="hover:text-[#C9A24D]"
              >
                ceo@bellevated.com
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-[10px] text-gray-600 uppercase">Support</span>
              <span>(888) 200-0472</span>
            </li>
            <li className="flex flex-col">
              <span className="text-[10px] text-gray-600 uppercase">Office</span>
              <address className="not-italic">Seattle, WA 98121</address>
            </li>
          </ul>
        </div>

        {/* Social + Back to Top */}
        <div className="flex flex-col justify-between items-center md:items-end">
          <div className="text-center md:text-right">
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-[0.2em]">
              Connect
            </h4>

            <motion.a
              whileHover={{ x: -5, color: "#C9A24D" }}
              href="https://www.linkedin.com/in/sbellevated-0076b227"
              target="_blank"
              rel="noreferrer"
              className="text-sm flex items-center gap-2 justify-center md:justify-end"
            >
              LinkedIn
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.span>
            </motion.a>
          </div>

          <motion.button
            whileHover={{ y: -8, backgroundColor: "rgba(201, 162, 77, 0.1)" }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mt-8 md:mt-0 p-4 border border-white/10 rounded-full transition-all duration-300"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5 text-[#C9A24D] hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-gray-600 font-medium">
          <p>
            © {new Date().getFullYear()} Bellevated Enterprises. All Rights
            Reserved.
          </p>
          <div className="flex gap-8">
            <NavLink to="/privacy" onClick={scrollToTop} className="hover:text-white transition">
              Privacy
            </NavLink>
            <NavLink to="/terms" onClick={scrollToTop} className="hover:text-white transition">
              Terms
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
