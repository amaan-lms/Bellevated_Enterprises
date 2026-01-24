const mongoose = require("mongoose");

const driverApplicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  yearsExperience: { type: String, required: true },
  licenseType: { type: String, required: true },
  serviceAreas: { type: String, required: true },
  vehicleType: { type: String, required: true },
  availability: { type: String, required: true },
  agreeToTerms: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("DriverApplication", driverApplicationSchema);
