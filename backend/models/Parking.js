const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
  location: { type: String, default: "Main Parking Lot" },
  totalSlots: { type: Number, default: 100 },
  twoWheelersUsed: { type: Number, default: 0 },
  fourWheelersUsed: { type: Number, default: 0 }
});

module.exports = mongoose.model("Parking", parkingSchema);
