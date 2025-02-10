const express = require("express");
const { getAllUsers } = require("../controllers/userController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Route to get all users (Admin only)
router.get("/", protect, authorize("admin"), getAllUsers);

module.exports = router;
