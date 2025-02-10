const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  cnic: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  organizationName: { type: String },
  purposeOfVisit: { type: String, required: true },
  hostName: { type: String, required: true },
  vehicleNumber: { type: String },
  vehicleType: { type: String },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  },
  checkIn: { type: Date },
  checkOut: { type: Date }
});

module.exports = mongoose.model("Visitor", visitorSchema);
