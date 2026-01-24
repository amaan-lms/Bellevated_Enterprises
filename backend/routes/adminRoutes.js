const express = require("express");
const router = express.Router();
const { adminAuth } = require("../middleware/authMiddleware");
const { getAllUsers, getStats, getQuotes, getDrivers } = require("../controllers/adminController");
const User = require("../models/User"); // ✅ MUST EXIST


router.get("/users", adminAuth, getAllUsers);
router.get("/stats", adminAuth, getStats);
router.get("/quotes", adminAuth, getQuotes);
router.get("/drivers", adminAuth, getDrivers);

// ❌ DELETE USER
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    await user.deleteOne();

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;