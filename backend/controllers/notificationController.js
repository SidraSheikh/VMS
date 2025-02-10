// controllers/notificationController.js
const Notification = require("../models/Notification");

// Fetch all notifications
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ timestamp: -1 });
    res.json(notifications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching notifications", error: error.message });
  }
};

// Add a new notification (for testing or real-time updates)
exports.addNotification = async (req, res) => {
  try {
    const { message } = req.body;
    const notification = new Notification({ message });
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding notification", error: error.message });
  }
};
