const Visitor = require("../models/Visitor");
const Vehicle = require("../models/Vehicle");
const Alert = require("../models/Alert");

// 📌 Validate QR Code
exports.validateQR = async (req, res) => {
  try {
    const { qrData } = req.body;
    const visitor = await Visitor.findOne({ qrCode: qrData });

    if (!visitor) {
      return res.status(404).json({ success: false, message: "Invalid QR code!" });
    }

    if (visitor.status !== "Approved") {
      return res.status(403).json({ success: false, message: "Visitor not approved!" });
    }

    res.json({
      success: true,
      visitor: {
        name: visitor.fullName,
        purpose: visitor.purposeOfVisit,
        host: visitor.assignedHost
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error!", error: error.message });
  }
};

// 📌 Validate Vehicle
exports.validateVehicle = async (req, res) => {
  try {
    const { vehicleNumber } = req.body;
    const vehicle = await Vehicle.findOne({ number: vehicleNumber });

    if (!vehicle) {
      return res.status(404).json({ success: false, message: "Vehicle not registered!" });
    }

    if (!vehicle.approved) {
      return res.status(403).json({ success: false, message: "Vehicle not approved for entry!" });
    }

    res.json({ success: true, slot: vehicle.parkingSlot });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error!", error: error.message });
  }
};

exports.getSecurityAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ createdAt: -1 }).limit(10);
    res.json({ success: true, alerts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error!", error: error.message });
  }
};
