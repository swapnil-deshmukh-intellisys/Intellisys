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
    // eslint-disable-next-line no-console
    console.error("Error in contact controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};
