import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

import axios from "axios";


// Using motion directly from framer-motion (no deprecated motion() function)

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Login form state
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const baseURL=import.meta.env.VITE_API_BASE_URL;

    
    // Sign up form state
    const [signupForm, setSignupForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });

    /* -------------------- LOGIN HANDLERS -------------------- */
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({ ...prev, [name]: value }));
        setError("");
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // Simulate API call
            const res = await axios.post(`${baseURL}/api/auth/login`, {
                email: loginForm.email,
                password: loginForm.password,
            });

            // Save token + user
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            // Reset form
            setLoginForm({ email: "", password: "" });

            // Redirect based on role
            if (res.data.user.role === "admin") {
                navigate("/admin-dashboard");
            } else {
                navigate("/dashboard");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    /* -------------------- SIGN UP HANDLERS -------------------- */
    const handleSignupChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSignupForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setError("");
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // Validation
            if (
                !signupForm.firstName ||
                !signupForm.lastName ||
                !signupForm.email ||
                !signupForm.password ||
                !signupForm.confirmPassword
            ) {
                setError("Please fill in all fields");
                setLoading(false);
                return;
            }

            if (signupForm.password !== signupForm.confirmPassword) {
                setError("Passwords do not match");
                setLoading(false);
                return;
            }

            if (signupForm.password.length < 6) {
                setError("Password must be at least 6 characters");
                setLoading(false);
                return;
            }

            if (!signupForm.agreeToTerms) {
                setError("Please agree to the terms and conditions");
                setLoading(false);
                return;
            }

            // Simulate API call
            await axios.post(`${baseURL}/api/auth/signup`, {
                firstName: signupForm.firstName,
                lastName: signupForm.lastName,
                email: signupForm.email,
                password: signupForm.password,
            });

            // After signup → switch to login
            setIsLogin(true);
            setError("Account created! Please log in.");

            // Reset form
            setSignupForm({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                agreeToTerms: false,
            });
        } catch (err) {
            setError(err.response?.data?.message || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const formVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <div className="min-h-screen bg-black pt-24 pb-12 flex items-center justify-center px-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full max-w-md"
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Welcome to Bellevated
                    </h1>
                    <p className="text-gray-400 text-lg">
                        {isLogin
                            ? "Sign in to your account"
                            : "Create your new account"}
                    </p>
                </div>

                {/* Toggle Buttons */}
                <div className="flex gap-4 mb-8 bg-gray-900/50 p-1 rounded-lg border border-white/10">
                    <button
                        onClick={() => {
                            setIsLogin(true);
                            setError("");
                        }}
                        className={`flex-1 py-3 rounded-md font-semibold uppercase tracking-wider transition-all duration-300 ${isLogin
                            ? "bg-[#C9A24D] text-black shadow-lg shadow-[#C9A24D]/50"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => {
                            setIsLogin(false);
                            setError("");
                        }}
                        className={`flex-1 py-3 rounded-md font-semibold uppercase tracking-wider transition-all duration-300 ${!isLogin
                            ? "bg-[#C9A24D] text-black shadow-lg shadow-[#C9A24D]/50"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                    >
                        {error}
                    </motion.div>
                )}

                {/* LOGIN FORM */}
                {isLogin && (
                    <motion.form
                        key="login"
                        initial="hidden"
                        animate="visible"
                        variants={formVariants}
                        onSubmit={handleLoginSubmit}
                        className="space-y-6"
                    >
                        {/* Email */}
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={loginForm.email}
                                onChange={handleLoginChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition-all duration-300"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={loginForm.password}
                                    onChange={handleLoginChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition-all duration-300"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C9A24D] transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <a
                                href="#"
                                className="text-sm text-[#C9A24D] hover:text-[#D4B369] transition-colors"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-[#C9A24D] text-black font-semibold uppercase tracking-widest rounded-lg hover:bg-[#D4B369] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-[#C9A24D]/30 hover:shadow-[#C9A24D]/50"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-black text-gray-400">Or</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                className="py-3 px-4 bg-gray-900/50 border border-white/10 rounded-lg text-white font-semibold hover:bg-gray-800/50 hover:border-[#C9A24D]/30 transition-all duration-300"
                            >
                                Google
                            </button>
                            <button
                                type="button"
                                className="py-3 px-4 bg-gray-900/50 border border-white/10 rounded-lg text-white font-semibold hover:bg-gray-800/50 hover:border-[#C9A24D]/30 transition-all duration-300"
                            >
                                LinkedIn
                            </button>
                        </div>
                    </motion.form>
                )}

                {/* SIGN UP FORM */}
                {!isLogin && (
                    <motion.form
                        key="signup"
                        initial="hidden"
                        animate="visible"
                        variants={formVariants}
                        onSubmit={handleSignupSubmit}
                        className="space-y-4"
                    >
                        {/* Name Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={signupForm.firstName}
                                    onChange={handleSignupChange}
                                    placeholder="John"
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition-all duration-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={signupForm.lastName}
                                    onChange={handleSignupChange}
                                    placeholder="Doe"
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition-all duration-300"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={signupForm.email}
                                onChange={handleSignupChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition-all duration-300"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={signupForm.password}
                                    onChange={handleSignupChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition-all duration-300"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C9A24D] transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={signupForm.confirmPassword}
                                    onChange={handleSignupChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition-all duration-300"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C9A24D] transition-colors"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                id="agreeToTerms"
                                checked={signupForm.agreeToTerms}
                                onChange={handleSignupChange}
                                className="mt-1 w-4 h-4 rounded cursor-pointer accent-[#C9A24D]"
                                required
                            />
                            <label htmlFor="agreeToTerms" className="text-sm text-gray-400">
                                I agree to the{" "}
                                <a
                                    href="/terms"
                                    className="text-[#C9A24D] hover:text-[#D4B369]"
                                >
                                    Terms and Conditions
                                </a>{" "}
                                and{" "}
                                <a
                                    href="/privacy"
                                    className="text-[#C9A24D] hover:text-[#D4B369]"
                                >
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-[#C9A24D] text-black font-semibold uppercase tracking-widest rounded-lg hover:bg-[#D4B369] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-[#C9A24D]/30 hover:shadow-[#C9A24D]/50"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>
                    </motion.form>
                )}

                {/* Footer */}
                <p className="text-center text-gray-400 text-sm mt-8">
                    {isLogin
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError("");
                        }}
                        className="text-[#C9A24D] hover:text-[#D4B369] font-semibold transition-colors"
                    >
                        {isLogin ? "Sign up" : "Login"}
                    </button>
                </p>
            </motion.div>
        </div>
    );
}
