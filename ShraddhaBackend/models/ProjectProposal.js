const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  email: String,
  category: String,
  contact: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ProjectProposal", projectSchema);
