const DriverApplication = require("../models/DriverApplication");
const sendmail = require("../utils/sendmail");

exports.createDriverApplication = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      yearsExperience,
      licenseType,
      serviceAreas,
      vehicleType,
      availability,
      agreeToTerms,
    } = req.body;

    // 🔐 Validation (important for public form)
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !yearsExperience ||
      !licenseType ||
      !serviceAreas ||
      !vehicleType ||
      !availability ||
      agreeToTerms !== true
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required and terms must be accepted",
      });
    }

    // 🗄️ Save to DB
    const application = await DriverApplication.create({
      firstName,
      lastName,
      email,
      phone,
      yearsExperience,
      licenseType,
      serviceAreas,
      vehicleType,
      availability,
      agreeToTerms,
    });


    // 🔗 PDF URL for contractor agreement
    const pdfUrl = req.body.pdfUrl || "https://drive.google.com/file/d/1YcHqd6IO7ZYpt04GnOCpnz8FNwa_-nV-/view?usp=drive_link";

    // 📧 Send confirmation email to applicant
    sendmail({
      to: email,
      subject: "Driver Application Received - Bellevated Enterprises",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #C9A24D; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #000; margin: 0; font-size: 24px;">Thank you for applying!</h1>
          </div>

          <div style="background-color: #fff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Hi <strong>${firstName} ${lastName}</strong>,</p>

            <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
              We’ve received your driver application successfully. Here are the details you submitted:
            </p>

            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 8px 0;"><strong>Experience:</strong> ${yearsExperience} years</p>
              <p style="margin: 8px 0;"><strong>License Type:</strong> ${licenseType}</p>
              <p style="margin: 8px 0;"><strong>Service Areas:</strong> ${serviceAreas}</p>
              <p style="margin: 8px 0;"><strong>Vehicle Type:</strong> ${vehicleType}</p>
              <p style="margin: 8px 0;"><strong>Availability:</strong> ${availability}</p>
            </div>

            <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #C9A24D;">
              <h3 style="margin: 0 0 10px 0; color: #C9A24D;">📄 Contractor Agreement</h3>
              <p style="margin: 0; font-size: 14px; color: #666;">
                Please review and sign our contractor agreement to proceed with your application:
              </p>
              <p style="margin: 15px 0 0 0;">
                <a href="${pdfUrl}" style="background-color: #C9A24D; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                  📋 View & Sign Agreement
                </a>
              </p>
            </div>

            <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
              Our team will review your application and contact you if you are shortlisted. We'll reach out within 3-5 business days.
            </p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">

            <p style="font-size: 14px; color: #666; margin: 0;">
              <strong>Regards,</strong><br>
              Bellevated Enterprises Team<br>
              <a href="mailto:ceo@bellevated.com" style="color: #C9A24D;">ceo@bellevated.com</a>
            </p>
          </div>
        </div>
      `,
    }).catch(console.error);

    return res.status(201).json({
      success: true,
      message: "Driver application submitted successfully. Please check your email.",
      applicationId: application._id,
    });

  } catch (error) {
    console.error("Create Driver Application Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
