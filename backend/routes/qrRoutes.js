const express = require("express");
const { getParkingStats } = require("../controllers/parkingController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", protect, adminOnly, getParkingStats);

module.exports = router;
