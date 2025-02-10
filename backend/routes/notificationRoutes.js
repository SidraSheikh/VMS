// routes/notificationRoutes.js
const express = require("express");
const {
  getNotifications,
  addNotification
} = require("../controllers/notificationController");

const router = express.Router();

// Fetch all notifications
router.get("/", getNotifications);

// Add a new notification
router.post("/", addNotification);

module.exports = router;
