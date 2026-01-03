const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ CREATE document correctly
    const savedContact = await Contact.create({
      name,
      email,
      message,
    });

    // ✅ Send email (optional but recommended)
    await sendEmail({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: savedContact,
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
