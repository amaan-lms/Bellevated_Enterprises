import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logocrop.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  /* -------------------- SCROLL TO TOP ON ROUTE CHANGE -------------------- */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); // close mobile menu on navigation
  }, [location.pathname]);

  /* -------------------- HIDE NAV ON SCROLL DOWN -------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------- ACTIVE LINK STYLES -------------------- */
  const getLinkClass = ({ isActive }) =>
    `relative text-sm uppercase tracking-widest transition-colors duration-300 ${
      isActive ? "text-[#C9A24D]" : "text-gray-400 hover:text-white"
    }`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Consulting", path: "/consulting" },
    { name: "Request a Quote", path: "/request-quote" },
    { name: "Driver Opportunities", path: "/driver-opportunities" },
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
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NavLink to="/" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Bellevated Enterprises Logo"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </NavLink>
            </motion.div>

            {/* DESKTOP NAV */}
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

            {/* MOBILE TOGGLE */}
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

          {/* MOBILE MENU */}
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
