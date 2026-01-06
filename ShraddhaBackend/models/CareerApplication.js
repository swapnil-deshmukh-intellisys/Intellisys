const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  position: String,
  name: String,
  address: String,
  country: String,
  state: String,
  city: String,
  postalcode: String,
  contact: String,
  email: String,
  cvFileName: String,
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CareerApplication", careerSchema);
