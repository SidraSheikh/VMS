const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  title: String,
  time: String,
  location: String
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
