import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logocrop.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Class helper for active links
  const getLinkClass = ({ isActive }) =>
    `relative text-sm uppercase tracking-widest transition-colors duration-300 ${
      isActive ? "text-[#C9A24D]" : "text-gray-400 hover:text-white"
    }`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Consulting", path: "/consulting" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NavLink
                to="/"
                className="flex items-center gap-3 text-xl font-extrabold tracking-tighter"
              >
                <img
                  src={logo}
                  alt="Bellevated Enterprises Logo"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-10 items-center">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={getLinkClass}>
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C9A24D]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-[#C9A24D]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-zinc-950 border-b border-white/10 overflow-hidden"
              >
                <div className="flex flex-col p-6 gap-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-lg uppercase tracking-widest text-white hover:text-[#C9A24D]"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
