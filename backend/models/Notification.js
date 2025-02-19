const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  message: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Notification", NotificationSchema);
