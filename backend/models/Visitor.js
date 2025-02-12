const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  cnic: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  organizationName: String,
  purposeOfVisit: { type: String, required: true },
  hostName: { type: String, required: true },
  department: { type: String, required: true },
  visitingOffice: String,
  dateOfVisit: Date,
  timeOfArrival: String,
  timeOfDeparture: String,
  vehicleNumber: String,
  vehicleType: String,
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  },
  createdAt: { type: Date, default: Date.now }
});

const Visitor = mongoose.model("Visitor", visitorSchema);
module.exports = Visitor;
