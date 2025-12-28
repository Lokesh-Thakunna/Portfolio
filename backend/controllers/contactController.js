import Contact from "../models/Contact.js";
import transporter from "../config/mailer.js";

export const sendContactMail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    /* 1️⃣ Save message to MongoDB */
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    /* 2️⃣ Send Email */
    await transporter.sendMail({
      from: `"Portfolio Contact" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Portfolio Contact Message",
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({
      message: "Message sent & saved successfully",
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
