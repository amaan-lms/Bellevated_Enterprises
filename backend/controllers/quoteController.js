const QuoteRequest = require("../models/QuoteRequest");

// CREATE NEW QUOTE REQUEST
exports.createQuoteRequest = async (req, res) => {
  try {
    const newRequest = new QuoteRequest(req.body);
    await newRequest.save();
    res.status(201).json({ message: "Quote request submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
