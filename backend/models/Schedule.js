// models/Schedule.js
const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true }
});

module.exports = mongoose.model("Schedule", scheduleSchema);
