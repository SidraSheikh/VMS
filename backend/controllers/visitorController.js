const Visitor = require("../models/Visitor");

// Register a new visitor
exports.registerVisitor = async (req, res) => {
  try {
    const visitor = new Visitor({
      fullName: req.body.fullName,
      cnic: req.body.cnic,
      mobileNumber: req.body.mobileNumber,
      organizationName: req.body.organizationName,
      purposeOfVisit: req.body.purposeOfVisit,
      hostName: req.body.hostName,
      department: req.body.department,
      visitingOffice: req.body.visitingOffice,
      dateOfVisit: req.body.dateOfVisit,
      timeOfArrival: req.body.timeOfArrival,
      timeOfDeparture: req.body.timeOfDeparture,
      vehicleNumber: req.body.vehicleNumber,
      vehicleType: req.body.vehicleType,
      status: "Pending"
    });

    await visitor.save();
    res.status(201).json({ message: "Visitor registered successfully", visitor });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all visitors (Admin Only)
exports.getAllVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching visitors", error: error.message });
  }
};

// Approve visitor
exports.approveVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.body.visitorId);
    if (!visitor) return res.status(404).json({ message: "Visitor not found" });

    visitor.status = "Approved";
    await visitor.save();
    res.json({ message: "Visitor approved!", visitor });
  } catch (error) {
    res.status(500).json({ message: "Error approving visitor", error: error.message });
  }
};

// Decline visitor
exports.declineVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.body.visitorId);
    if (!visitor) return res.status(404).json({ message: "Visitor not found" });

    visitor.status = "Rejected";
    await visitor.save();
    res.json({ message: "Visitor declined!", visitor });
  } catch (error) {
    res.status(500).json({ message: "Error declining visitor", error: error.message });
  }
};
