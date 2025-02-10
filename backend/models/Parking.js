const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
  totalSlots: { type: Number, required: true },
  twoWheelers: { type: Number, default: 0 }, // Total 2-wheelers
  fourWheelers: { type: Number, default: 0 }, // Total 4-wheelers
});

module.exports = mongoose.model("Parking", parkingSchema);
