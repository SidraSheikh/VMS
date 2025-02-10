const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/admin", protect(["admin"]), (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard." });
});

router.get("/receptionist", protect(["receptionist"]), (req, res) => {
  res.json({ message: "Welcome to the Reception Dashboard." });
});

router.get("/security", protect(["security"]), (req, res) => {
  res.json({ message: "Welcome to the Security Dashboard." });
});

router.get("/host", protect(["host"]), (req, res) => {
  res.json({ message: "Welcome to the Host Dashboard." });
});

module.exports = router;
