import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    LogOut,
    Users,
    Trash2,
    Shield,
    FileText, 
    Truck,
    X,
    Search,
    ChevronDown
} from "lucide-react";
import axios from "axios";

export default function AdminDashboard() {
    const [admin, setAdmin] = useState(null);
    const [users, setUsers] = useState([]);
    const [quotes, setQuotes] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("users");
    const [selectedQuote, setSelectedQuote] = useState(null);
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalAdmins: 0,
        totalQuotes: 0,
        totalDrivers: 0,
    });

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/login");
            return;
        }

        const user = JSON.parse(storedUser);
        if (user.role !== "admin") {
            navigate("/dashboard");
            return;
        }

        setAdmin(user);
        fetchUsers();
        fetchStats();
        fetchQuotes();
        fetchDrivers();
    }, [navigate]);

    const fetchStats = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get("http://localhost:5000/api/admin/stats", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setStats(prev => ({
                ...prev,
                totalUsers: res.data.totalUsers,
                totalAdmins: res.data.totalAdmins,
                totalQuotes: res.data.totalQuotes,
                totalDrivers: res.data.totalDrivers,
            }));
        } catch (err) {
            console.error(err);
        }
    };

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem("token");
            const usersRes = await axios.get("http://localhost:5000/api/admin/users", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUsers(usersRes.data.users);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchQuotes = async () => {
        try {
            const token = localStorage.getItem("token");
            const quotesRes = await axios.get("http://localhost:5000/api/admin/quotes", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setQuotes(quotesRes.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchDrivers = async () => {
        try {
            const token = localStorage.getItem("token");
            const driversRes = await axios.get("http://localhost:5000/api/admin/drivers", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setDrivers(driversRes.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/");
    };

    const handleDeleteUser = async (userId) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:5000/api/admin/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUsers(users.filter(u => u._id !== userId));
            alert("User deleted successfully");
        } catch (err) {
            console.error(err);
            alert("Failed to delete user");
        }
    };

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredQuotes = quotes.filter(quote =>
        quote.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredDrivers = drivers.filter(driver =>
        `${driver.firstName} ${driver.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        driver.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24 pb-12 flex items-center justify-center">
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl text-[#C9A24D] font-semibold"
                >
                    ⟳ Loading Dashboard...
                </motion.div>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const statCardVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.1 },
        }),
    };

    const StatCard = ({ icon: Icon, label, value, color }) => (
        <motion.div
            custom={Math.random()}
            variants={statCardVariants}
            initial="hidden"
            animate="visible"
            className={`${color} rounded-xl p-6 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300`}
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-2">{label}</p>
                    <p className="text-4xl font-bold text-white">{value}</p>
                </div>
                <Icon size={40} className="opacity-40" />
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                {/* HEADER */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                            Dashboard
                        </h1>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Welcome back, <span className="text-[#C9A24D] font-semibold">{admin?.firstName}</span>
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/50 w-full sm:w-auto justify-center"
                    >
                        <LogOut size={18} />
                        Logout
                    </motion.button>
                </div>

                {/* STATS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    <StatCard
                        icon={Users}
                        label="Total Users"
                        value={stats.totalUsers}
                        color="bg-gradient-to-br from-blue-600/20 to-blue-600/5"
                    />
                    <StatCard
                        icon={Shield}
                        label="Admins"
                        value={stats.totalAdmins}
                        color="bg-gradient-to-br from-[#C9A24D]/20 to-[#C9A24D]/5"
                    />
                    <StatCard
                        icon={FileText}
                        label="Quote Requests"
                        value={stats.totalQuotes}
                        color="bg-gradient-to-br from-purple-600/20 to-purple-600/5"
                    />
                    <StatCard
                        icon={Truck}
                        label="Driver Apps"
                        value={stats.totalDrivers}
                        color="bg-gradient-to-br from-pink-600/20 to-pink-600/5"
                    />
                </div>

                {/* TAB NAVIGATION */}
                <div className="flex flex-wrap gap-2 mb-8 bg-gray-900/50 p-2 rounded-xl border border-white/10 backdrop-blur-md">
                    {["users", "quotes", "drivers"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => { setActiveTab(tab); setSearchTerm(""); }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold uppercase tracking-wider transition-all text-sm sm:text-base ${
                                activeTab === tab
                                    ? "bg-[#C9A24D] text-black shadow-lg shadow-[#C9A24D]/50"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {tab === "users" && <Users size={18} />}
                            {tab === "quotes" && <FileText size={18} />}
                            {tab === "drivers" && <Truck size={18} />}
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* SEARCH BAR */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 relative"
                >
                    <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder={`Search ${activeTab}...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition-all"
                    />
                </motion.div>

                {/* CONTENT CONTAINER */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-xl backdrop-blur-md overflow-hidden"
                >
                    {/* USERS TAB */}
                    {activeTab === "users" && (
                        <div className="p-4 sm:p-6">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Users size={28} className="text-[#C9A24D]" />
                                User Management
                            </h2>

                            {filteredUsers.length === 0 ? (
                                <div className="text-center py-12 text-gray-400">
                                    <Users size={48} className="mx-auto mb-4 opacity-50" />
                                    <p>No users found</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/10 bg-gray-800/50">
                                                <th className="px-4 py-4 text-left font-semibold text-gray-300 uppercase tracking-wider text-xs">Name</th>
                                                <th className="px-4 py-4 text-left font-semibold text-gray-300 uppercase tracking-wider text-xs hidden sm:table-cell">Email</th>
                                                <th className="px-4 py-4 text-left font-semibold text-gray-300 uppercase tracking-wider text-xs">Role</th>
                                                <th className="px-4 py-4 text-center font-semibold text-gray-300 uppercase tracking-wider text-xs">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredUsers.map((user, idx) => (
                                                <motion.tr
                                                    key={user._id}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                                >
                                                    <td className="px-4 py-4 text-white font-semibold">{user.firstName} {user.lastName}</td>
                                                    <td className="px-4 py-4 text-gray-400 hidden sm:table-cell truncate">{user.email}</td>
                                                    <td className="px-4 py-4">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide inline-block ${
                                                            user.role === "admin"
                                                                ? "bg-[#C9A24D]/20 text-[#C9A24D] border border-[#C9A24D]/30"
                                                                : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                                        }`}>
                                                            {user.role}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4 text-center">
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => handleDeleteUser(user._id)}
                                                            className="inline-flex items-center gap-1 px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded hover:bg-red-500/30 transition-all text-xs font-semibold"
                                                        >
                                                            <Trash2 size={14} />
                                                            <span className="hidden sm:inline">Delete</span>
                                                        </motion.button>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* QUOTES TAB */}
                    {activeTab === "quotes" && (
                        <div className="p-4 sm:p-6">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <FileText size={28} className="text-purple-400" />
                                Quote Requests ({filteredQuotes.length})
                            </h2>

                            {filteredQuotes.length === 0 ? (
                                <div className="text-center py-12 text-gray-400">
                                    <FileText size={48} className="mx-auto mb-4 opacity-50" />
                                    <p>No quote requests found</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                    {filteredQuotes.map((quote, idx) => (
                                        <motion.div
                                            key={quote._id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="bg-gray-800/30 border border-purple-500/20 rounded-lg p-4 hover:border-purple-500/40 transition-all group cursor-pointer"
                                            onClick={() => setSelectedQuote(quote)}
                                        >
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Company</p>
                                                    <p className="text-white font-semibold truncate">{quote.companyName}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Contact</p>
                                                    <p className="text-white font-semibold truncate">{quote.contactName}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</p>
                                                    <p className="text-white text-sm truncate">{quote.email}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Timeline</p>
                                                    <p className="text-white font-semibold truncate">{quote.timeline}</p>
                                                </div>
                                            </div>
                                            <motion.button
                                                whileHover={{ x: 4 }}
                                                onClick={(e) => { e.stopPropagation(); setSelectedQuote(quote); }}
                                                className="text-purple-400 text-sm font-semibold flex items-center gap-1 hover:text-purple-300 transition-colors"
                                            >
                                                View Details <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                                            </motion.button>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* DRIVERS TAB */}
                    {activeTab === "drivers" && (
                        <div className="p-4 sm:p-6">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Truck size={28} className="text-pink-400" />
                                Driver Applications ({filteredDrivers.length})
                            </h2>

                            {filteredDrivers.length === 0 ? (
                                <div className="text-center py-12 text-gray-400">
                                    <Truck size={48} className="mx-auto mb-4 opacity-50" />
                                    <p>No driver applications found</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                    {filteredDrivers.map((driver, idx) => (
                                        <motion.div
                                            key={driver._id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="bg-gray-800/30 border border-pink-500/20 rounded-lg p-4 hover:border-pink-500/40 transition-all group cursor-pointer"
                                            onClick={() => setSelectedDriver(driver)}
                                        >
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Name</p>
                                                    <p className="text-white font-semibold truncate">{driver.firstName} {driver.lastName}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Experience</p>
                                                    <p className="text-white font-semibold">{driver.yearsExperience} years</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</p>
                                                    <p className="text-white text-sm truncate">{driver.email}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">License</p>
                                                    <p className="text-white font-semibold truncate">{driver.licenseType}</p>
                                                </div>
                                            </div>
                                            <motion.button
                                                whileHover={{ x: 4 }}
                                                onClick={(e) => { e.stopPropagation(); setSelectedDriver(driver); }}
                                                className="text-pink-400 text-sm font-semibold flex items-center gap-1 hover:text-pink-300 transition-colors"
                                            >
                                                View Details <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                                            </motion.button>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>
            </motion.div>

            {/* QUOTE DETAILS MODAL */}
            <AnimatePresence>
                {selectedQuote && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedQuote(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-white">Quote Request Details</h3>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSelectedQuote(null)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X size={24} />
                                </motion.button>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Company Name</p>
                                        <p className="text-white font-semibold">{selectedQuote.companyName}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Contact Name</p>
                                        <p className="text-white font-semibold">{selectedQuote.contactName}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Email</p>
                                        <p className="text-white text-sm break-all">{selectedQuote.email}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Phone</p>
                                        <p className="text-white font-semibold">{selectedQuote.phone}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Business Type</p>
                                        <p className="text-white font-semibold">{selectedQuote.businessType}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Service Required</p>
                                        <p className="text-white font-semibold">{selectedQuote.serviceRequired}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Timeline</p>
                                        <p className="text-white font-semibold">{selectedQuote.timeline}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Submitted</p>
                                        <p className="text-white font-semibold">{new Date(selectedQuote.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Project Description</p>
                                    <p className="text-gray-300 leading-relaxed">{selectedQuote.projectDescription}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* DRIVER DETAILS MODAL */}
            <AnimatePresence>
                {selectedDriver && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedDriver(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-white">Driver Application Details</h3>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSelectedDriver(null)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X size={24} />
                                </motion.button>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">First Name</p>
                                        <p className="text-white font-semibold">{selectedDriver.firstName}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Last Name</p>
                                        <p className="text-white font-semibold">{selectedDriver.lastName}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Email</p>
                                        <p className="text-white text-sm break-all">{selectedDriver.email}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Phone</p>
                                        <p className="text-white font-semibold">{selectedDriver.phone}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Experience</p>
                                        <p className="text-white font-semibold">{selectedDriver.yearsExperience}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">License Type</p>
                                        <p className="text-white font-semibold">{selectedDriver.licenseType}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Vehicle Type</p>
                                        <p className="text-white font-semibold">{selectedDriver.vehicleType}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Availability</p>
                                        <p className="text-white font-semibold">{selectedDriver.availability}</p>
                                    </div>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Service Areas</p>
                                    <p className="text-gray-300 leading-relaxed">{selectedDriver.serviceAreas}</p>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-4 border border-white/5">
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Submitted</p>
                                    <p className="text-white font-semibold">{new Date(selectedDriver.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
