const Contact = require("../models/Contact");

// CREATE NEW CONTACT SUBMISSION
exports.createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
