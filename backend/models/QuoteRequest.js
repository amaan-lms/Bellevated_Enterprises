const mongoose = require("mongoose");

const quoteRequestSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  businessType: { type: String, required: true },
  serviceRequired: { type: String, required: true },
  projectDescription: { type: String, required: true },
  timeline: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("QuoteRequest", quoteRequestSchema);
