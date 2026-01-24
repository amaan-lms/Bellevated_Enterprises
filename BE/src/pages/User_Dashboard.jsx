import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, User, Mail, Calendar, Shield } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    
    // Redirect to admin dashboard if user is admin
    if (parsedUser.role === "admin") {
      navigate("/admin-dashboard");
      return;
    }
    
    setUser(parsedUser);
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Redirect to home
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-24 pb-12 flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-2xl text-[#C9A24D]"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 flex items-center justify-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Welcome,  {user ? user.firstName : "User"} !
            </h1>
            <p className="text-gray-400 text-lg">
              Here's your profile information
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg"
          >
            <LogOut size={20} />
            Logout
          </motion.button>
        </div>

        {/* Profile Card */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-md"
        >
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#D4B369] flex items-center justify-center">
                <User size={32} className="text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {user?.firstName} {user?.lastName}
                </h2>
                <p className="text-gray-400">User Profile</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-white/5"
            >
              <Mail className="text-[#C9A24D] mt-1" size={24} />
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Email Address
                </p>
                <p className="text-white font-semibold">{user?.email}</p>
              </div>
            </motion.div>

            {/* Signup Type */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-white/5"
            >
              <Shield className="text-[#C9A24D] mt-1" size={24} />
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Account Role
                </p>
                <p className="text-white font-semibold capitalize">
                  {user?.role || "User"}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          custom={3}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-gradient-to-br from-[#C9A24D]/20 to-[#C9A24D]/5 border border-[#C9A24D]/30 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-[#C9A24D] mb-2">1</p>
            <p className="text-gray-400 text-sm">Account Active</p>
          </div>
          <div className="bg-gradient-to-br from-[#C9A24D]/20 to-[#C9A24D]/5 border border-[#C9A24D]/30 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-[#C9A24D] mb-2">✓</p>
            <p className="text-gray-400 text-sm">Verified</p>
          </div>
          <div className="bg-gradient-to-br from-[#C9A24D]/20 to-[#C9A24D]/5 border border-[#C9A24D]/30 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-[#C9A24D] mb-2">∞</p>
            <p className="text-gray-400 text-sm">Access Unlimited</p>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          custom={4}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4"
        >
          <button className="py-4 px-6 bg-[#C9A24D] text-black font-semibold rounded-lg hover:bg-[#D4B369] transition-all duration-300 shadow-lg shadow-[#C9A24D]/30 uppercase tracking-wider">
            Edit Profile
          </button>
          <button className="py-4 px-6 bg-gray-900/50 border border-white/10 text-white font-semibold rounded-lg hover:bg-gray-800/50 hover:border-[#C9A24D]/30 transition-all duration-300 uppercase tracking-wider">
            Settings
          </button>
        </motion.div>

        {/* Logout Confirmation Info */}
        <motion.div
          custom={5}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
        >
          <p className="text-blue-300 text-center text-sm">
            💡 Click the Logout button in the top right to exit your account securely.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
