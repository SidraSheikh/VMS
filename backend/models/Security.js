const mongoose = require("mongoose");

// Visitor Schema (QR Validation)
const visitorSchema = new mongoose.Schema({
  fullName: String,
  purposeOfVisit: String,
  assignedHost: String,
  qrCode: String,
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  }
});

// Vehicle Schema (Vehicle Validation)
const vehicleSchema = new mongoose.Schema({
  number: { type: String, unique: true },
  owner: String,
  approved: { type: Boolean, default: false },
  parkingSlot: { type: String }
});

// Security Alerts Schema
const alertSchema = new mongoose.Schema({
  type: { type: String, required: true },
  message: { type: String, required: true },
  time: { type: Date, default: Date.now }
});

const Visitor = mongoose.model("Visitor", visitorSchema);
const Vehicle = mongoose.model("Vehicle", vehicleSchema);
const Alert = mongoose.model("Alert", alertSchema);

module.exports = { Visitor, Vehicle, Alert };
