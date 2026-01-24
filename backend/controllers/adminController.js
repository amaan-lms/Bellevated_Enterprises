const User = require("../models/User");
const QuoteRequest = require("../models/QuoteRequest");
const DriverApplication = require("../models/DriverApplication");


// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    const totalUsers = users.length;
    const totalAdmins = users.filter(u => u.role === "admin").length;

    res.json({ users, totalUsers, totalAdmins });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// GET DASHBOARD STATS
exports.getStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });
    const totalAdmins = await User.countDocuments({ role: "admin" });
    const totalQuotes = await QuoteRequest.countDocuments();
    const totalDrivers = await DriverApplication.countDocuments();

    res.json({
      totalUsers,
      totalAdmins,
      totalQuotes,
      totalDrivers
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// GET ALL QUOTE REQUESTS
exports.getQuotes = async (req, res) => {
  try {
    const quotes = await QuoteRequest.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// GET ALL DRIVER APPLICATIONS
exports.getDrivers = async (req, res) => {
  try {
    const drivers = await DriverApplication.find().sort({ createdAt: -1 });
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
