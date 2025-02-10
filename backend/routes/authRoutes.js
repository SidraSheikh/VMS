const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

router.post("/register", (req, res, next) => {
  console.log("Register endpoint hit");
  console.log("Request Body:", req.body);
  register(req, res, next);
});

router.post("/login", (req, res, next) => {
  console.log("Login endpoint hit");
  login(req, res, next);
});

module.exports = router;
