const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

router.get("/", async (req, res) => {
  const notifications = await Notification.find().sort({ timestamp: -1 });
  res.json(notifications);
});

router.post("/", async (req, res) => {
  const newNotification = new Notification(req.body);
  await newNotification.save();
  res.status(201).json(newNotification);
});

module.exports = router;
