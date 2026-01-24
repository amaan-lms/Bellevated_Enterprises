const DriverApplication = require("../models/DriverApplication");

exports.createDriverApplication = async (req, res) => {
  try {
    const application = new DriverApplication(req.body);
    await application.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
