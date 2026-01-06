const ContactMessage = require("../models/ContactMessage");

exports.submitMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "✅ Message sent successfully!" });
  } catch (error) {
    console.error("Error submitting message:", error.message);
    res.status(500).json({ message: "❌ Failed to send message." });
  }
};
