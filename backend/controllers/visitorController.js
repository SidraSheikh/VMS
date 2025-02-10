const Visitor = require("../models/Visitor");
const { updateParkingStats } = require("./parkingController");
const {
  updateParkingOnCheckIn,
  updateParkingOnCheckOut
} = require("./parkingController");

exports.registerVisitor = async (req, res) => {
  try {
    const {
      fullName,
      cnic,
      mobileNumber,
      organizationName,
      purposeOfVisit,
      hostName, 
      vehicleNumber,
      vehicleType
    } = req.body;

    // Validate required fields
    if (!fullName || !cnic || !mobileNumber || !purposeOfVisit || !hostName) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    // Create a new visitor
    const visitor = new Visitor({
      fullName,
      cnic,
      mobileNumber,
      organizationName,
      purposeOfVisit,
      hostName,
      vehicleNumber,
      vehicleType,
      status: "Pending" 
    });

    await visitor.save();

    if (vehicleType === "2-wheeler" || vehicleType === "4-wheeler") {
      await updateParkingStats(vehicleType);
    }

    res
      .status(201)
      .json({ message: "Visitor registered successfully", visitor });
  } catch (error) {
    console.error("❌ Error registering visitor:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching visitors",
      error: error.message
    });
  }
};

exports.getScheduledVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find({
      hostName: req.user.name,
      status: "Pending"
    });
    res.json({ visitors });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching scheduled visitors",
      error: error.message
    });
  }
};

// Notify host about a visitor
exports.notifyHost = async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.params.visitorId);
    if (!visitor) {
      return res.status(404).json({ message: "Visitor not found." });
    }

    // Send notification to host (e.g., email/SMS)
    console.log(
      `Notifying host ${visitor.hostName} about visitor ${visitor.fullName}`
    );

    res.json({ success: true, message: "Host notified successfully!" });
  } catch (error) {
    res.status(500).json({
      message: "Error notifying host",
      error: error.message
    });
  }
};


// Visitor check-in
exports.checkInVisitor = async (req, res) => {
  try {
    const { visitorId, vehicleType } = req.body;

    const visitor = await Visitor.findById(visitorId);
    if (!visitor) {
      return res.status(404).json({ message: "Visitor not found." });
    }

    // Update visitor status
    visitor.status = "Checked In";
    visitor.checkIn = new Date();
    await visitor.save();

    // Update parking slots
    await updateParkingOnCheckIn(vehicleType);

    res.json({ message: "Visitor checked in successfully!", visitor });
  } catch (error) {
    res.status(500).json({
      message: "Error checking in visitor",
      error: error.message
    });
  }
};

// Visitor check-out
exports.checkOutVisitor = async (req, res) => {
  try {
    const { visitorId, vehicleType } = req.body;

    const visitor = await Visitor.findById(visitorId);
    if (!visitor) {
      return res.status(404).json({ message: "Visitor not found." });
    }

    // Update visitor status
    visitor.status = "Checked Out";
    visitor.checkOut = new Date();
    await visitor.save();

    // Update parking slots
    await updateParkingOnCheckOut(vehicleType);

    res.json({ message: "Visitor checked out successfully!", visitor });
  } catch (error) {
    res.status(500).json({
      message: "Error checking out visitor",
      error: error.message
    });
  }
};