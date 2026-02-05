const QuoteRequest = require("../models/QuoteRequest");
const sendmail = require("../utils/sendmail");

exports.createQuoteRequest = async (req, res) => {
  try {
    const {
      companyName,
      contactName,
      email,
      phone,
      businessType,
      serviceRequired,
      projectDescription,
      timeline,
    } = req.body;

    // 🔐 Validation (important for public form)
    if (
      !companyName ||
      !contactName ||
      !email ||
      !phone ||
      !businessType ||
      !serviceRequired ||
      !projectDescription ||
      !timeline
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 🗄️ Save to DB
    await QuoteRequest.create({
      companyName,
      contactName,
      email,
      phone,
      businessType,
      serviceRequired,
      projectDescription,
      timeline,
    });

    // 🔗 Optional PDF URL
    const pdfUrl = "https://drive.google.com/file/d/1YcHqd6IO7ZYpt04GnOCpnz8FNwa_-nV-/view?usp=drive_link";

    // 📧 Send confirmation email to user
    sendmail({
      to: email,
      subject: "Quote Request Received",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${contactName},</p>

        <p>We have received your quote request for <b>${serviceRequired}</b>.</p>

        <p><b>Company:</b> ${companyName}</p>
        <p><b>Business Type:</b> ${businessType}</p>
        <p><b>Timeline:</b> ${timeline}</p>

        <p>Our team will review your requirements and get back to you shortly.</p>

        <p>You can also learn more about our services here:</p>
        <a href="${pdfUrl}" target="_blank">Download Company Brochure (PDF)</a>

        <br/><br/>
        <p>Regards,<br/>Team</p>
      `,
    }).catch(console.error);

    return res.status(201).json({
      success: true,
      message: "Quote request submitted successfully. Please check your email.",
    });

  } catch (error) {
    console.error("Create Quote Request Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};