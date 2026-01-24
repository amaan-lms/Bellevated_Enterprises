import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, User } from "lucide-react";
import logo from "../assets/logocrop.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  /* -------------------- CHECK IF USER IS LOGGED IN -------------------- */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [location.pathname]);

  /* -------------------- CLOSE DROPDOWN WHEN CLICKING OUTSIDE -------------------- */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  /* -------------------- HANDLE LOGOUT -------------------- */
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

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
              
              {/* USER PROFILE OR LOGIN BUTTON */}
              {user ? (
                <div ref={dropdownRef} className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="py-2 px-6 rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 bg-[#C9A24D] text-black hover:bg-[#D4B369] shadow-lg shadow-[#C9A24D]/30 flex items-center gap-2"
                  >
                    <User size={18} />
                    {user.firstName}
                  </motion.button>

                  {/* DROPDOWN MENU */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-56 bg-gray-900 border border-white/10 rounded-lg shadow-lg overflow-hidden"
                      >
                        {/* User Info */}
                        <div className="px-4 py-3 border-b border-white/10 bg-gray-800/50">
                          <p className="text-xs text-gray-400 uppercase tracking-wide">Logged in as</p>
                          <p className="text-white font-semibold">{user.firstName} {user.lastName}</p>
                          <p className="text-xs text-gray-400 mt-1">{user.email}</p>
                          <span className="inline-block mt-2 px-2 py-1 bg-[#C9A24D]/20 text-[#C9A24D] text-xs font-semibold rounded uppercase tracking-wide border border-[#C9A24D]/30">
                            {user.role}
                          </span>
                        </div>

                        {/* Dashboard Link */}
                        <NavLink
                          to={user.role === "admin" ? "/admin-dashboard" : "/dashboard"}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-[#C9A24D] transition-colors border-b border-white/10"
                        >
                           {user.role === "admin" ? "Admin" : "User"} Dashboard
                        </NavLink>

                        {/* Logout Button */}
                        <motion.button
                          whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                          onClick={handleLogout}
                          className="w-full px-4 py-3 text-red-400 hover:text-red-300 text-left flex items-center gap-2 transition-colors"
                        >
                          <LogOut size={18} />
                          Logout
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink to="/login">
                  {({ isActive }) => (
                    <button
                      className={`py-2 px-6 rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? "bg-[#C9A24D] text-black shadow-lg shadow-[#C9A24D]/50"
                          : "border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black"
                      }`}
                    >
                      Login
                    </button>
                  )}
                </NavLink>
              )}
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
                  
                  {/* MOBILE USER PROFILE OR LOGIN */}
                  {user ? (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                      <div className="px-3 py-2 bg-gray-800/50 rounded">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Logged in as</p>
                        <p className="text-white font-semibold">{user.firstName} {user.lastName}</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-[#C9A24D]/20 text-[#C9A24D] text-xs font-semibold rounded uppercase tracking-wide border border-[#C9A24D]/30">
                          {user.role}
                        </span>
                      </div>
                      <NavLink
                        to={user.role === "admin" ? "/admin-dashboard" : "/dashboard"}
                        className="inline-block w-full py-2 px-4 bg-[#C9A24D] text-black font-semibold uppercase tracking-widest rounded-lg text-center hover:bg-[#D4B369] transition-all"
                      >
                        Dashboard
                      </NavLink>
                      <button
                        onClick={handleLogout}
                        className="w-full py-2 px-4 bg-red-600 text-white font-semibold uppercase tracking-widest rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </div>
                  ) : (
                    <NavLink
                      to="/login"
                      className="inline-block mt-4 py-3 px-6 bg-[#C9A24D] text-black font-semibold uppercase tracking-widest rounded-lg hover:bg-[#D4B369] transition-all duration-300 text-center w-full"
                    >
                      Login
                    </NavLink>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
