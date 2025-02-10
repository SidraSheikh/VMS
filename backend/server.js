const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http"); // Import the http module
const parkingRoutes = require("./routes/parkingRoutes");
const setupNotificationSocket = require("./sockets/notificationSocket");

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // Required to parse JSON body
app.use(
  cors({
    origin: "http://localhost:3000", // Allow frontend requests
    credentials: true
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Create an HTTP server
const server = http.createServer(app);

// Set up the notification socket
setupNotificationSocket(server);

// Routes
app.use("/api/analytics", require("./routes/analyticsRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/visitors", require("./routes/visitorRoutes"));
app.use("/api/parking-stats", parkingRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
