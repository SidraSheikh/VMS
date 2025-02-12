const express = require("express");
const {
  validateQR,
  validateVehicle,
  getSecurityAlerts
} = require("../controllers/securityController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/validate", protect, authorize("security"), validateQR);
router.post("/vehicle", protect, authorize("security"), validateVehicle);
router.get("/alerts", protect, authorize("security"), getSecurityAlerts);

module.exports = router;
