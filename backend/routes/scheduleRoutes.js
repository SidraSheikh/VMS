const express = require("express");
const router = express.Router();
const Schedule = require("../models/Schedule");

router.get("/", async (req, res) => {
  const schedules = await Schedule.find();
  res.json(schedules);
});

router.post("/", async (req, res) => {
  const newSchedule = new Schedule(req.body);
  await newSchedule.save();
  res.status(201).json(newSchedule);
});

module.exports = router;
