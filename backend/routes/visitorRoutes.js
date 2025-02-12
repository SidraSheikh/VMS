const express = require("express");
const {
  registerVisitor,
  getAllVisitors,
  approveVisitor,
  declineVisitor
} = require("../controllers/visitorController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, registerVisitor);
router.get("/", protect, authorize("admin"), getAllVisitors);
router.post("/approve", protect, authorize("host"), approveVisitor);
router.post("/decline", protect, authorize("host"), declineVisitor);

module.exports = router;
