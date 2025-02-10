const express = require("express");
const {
  registerVisitor,
  getAllVisitors,
  getScheduledVisitors,
  notifyHost
} = require("../controllers/visitorController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Register a new visitor
router.post("/", protect, registerVisitor);

// Get all visitors (Admin only)
router.get("/", protect, authorize("admin"), getAllVisitors);

// Get scheduled visitors (Host only)
router.get("/scheduled", protect, authorize("host"), getScheduledVisitors);

// Notify host about a visitor
router.post("/notify/:visitorId", protect, authorize("host"), notifyHost);

module.exports = router;
