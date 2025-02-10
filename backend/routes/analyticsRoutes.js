// routes/analyticsRoutes.js
const express = require("express");
const router = express.Router();
const AnalyticsController = require("../controllers/analyticsController");

// Visitor Trends
router.get("/visitor-trends", AnalyticsController.getVisitorTrends);

// Parking Utilization
router.get("/parking-utilization", AnalyticsController.getParkingUtilization);

// Approval Rates
router.get("/approval-rates", AnalyticsController.getApprovalRates);

module.exports = router;
