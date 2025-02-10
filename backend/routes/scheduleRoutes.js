// routes/scheduleRoutes.js
const express = require("express");
const {
  getSchedules,
  addSchedule
} = require("../controllers/scheduleController");

const router = express.Router();

// Fetch all schedules
router.get("/", getSchedules);

// Add a new schedule
router.post("/", addSchedule);

module.exports = router;
