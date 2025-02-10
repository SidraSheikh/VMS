const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// User Registration
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Normalize email to lowercase
    const normalizedEmail = email.toLowerCase();

    // Check if user already exists
    const userExists = await User.findOne({ email: normalizedEmail });
    if (userExists) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Create new user (password hashing handled in schema)
    const user = await User.create({
      name,
      email: normalizedEmail,
      password,
      role
    });

    res.status(201).json({
      message: "User registered successfully!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token: generateToken(user._id, user.role)
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login Request:", { email, password }); // Debug log

    // Normalize email to lowercase
    const normalizedEmail = email.toLowerCase();

    // Find user by email
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      console.log("User not found"); // Debug log
      return res.status(400).json({ message: "Invalid email or password." });
    }

    console.log("User found:", user); // Debug log

    // Compare entered password with the stored hash using bcrypt
    const trimmedPassword = password.trim();
    console.log("Entered Password (trimmed):", trimmedPassword); // Debug log
    console.log("Stored Hashed Password:", user.password); // Debug log

    const passwordMatch = await user.matchPassword(trimmedPassword);

    console.log("Password Match:", passwordMatch); // Debug log

    if (!passwordMatch) {
      console.log("Password mismatch"); // Debug log
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // If passwords match, generate and return JWT token
    res.status(200).json({
      token: generateToken(user._id, user.role),
      role: user.role,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error("Login Error:", error); // Debug log
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
