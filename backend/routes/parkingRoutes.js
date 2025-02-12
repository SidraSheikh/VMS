const express = require("express");
const { getParkingStats } = require("../controllers/parkingController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, authorize("admin"), getParkingStats);

module.exports = router;
