// controllers/scheduleController.js
const Schedule = require("../models/Schedule");

// Fetch all schedules
exports.getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching schedules", error: error.message });
  }
};

// Add a new schedule
exports.addSchedule = async (req, res) => {
  try {
    const { title, time, location } = req.body;
    const schedule = new Schedule({ title, time, location });
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding schedule", error: error.message });
  }
};
