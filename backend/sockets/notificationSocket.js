const socketIO = require("socket.io");

const setupNotificationSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    console.log("Client connected to WebSocket");

    // Real-time updates every 10 seconds
    setInterval(() => {
      const visitorTrends = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [50, 60, 45, 70, 80, 90, 100].map(
          (value) => value + Math.floor(Math.random() * 10)
        )
      };

      socket.emit("analyticsUpdate", { visitorTrends });
    }, 10000);

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected");
    });
  });
};

module.exports = setupNotificationSocket;
