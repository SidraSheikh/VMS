const socketIO = require("socket.io");

const setupNotificationSocket = (server) => {
  const io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("A client connected");

    // Simulate real-time updates for analytics
    setInterval(() => {
      const visitorTrends = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [50, 60, 45, 70, 80, 90, 100].map(
          (value) => value + Math.floor(Math.random() * 10)
        )
      };

      const parkingUtilization = {
        labels: ["2-Wheelers", "4-Wheelers"],
        data: [30, 70].map((value) => value + Math.floor(Math.random() * 10))
      };

      const approvalRates = {
        labels: ["Approved", "Rejected"],
        data: [80, 20].map((value) => value + Math.floor(Math.random() * 10))
      };

      // Emit real-time updates to the client
      socket.emit("analyticsUpdate", {
        visitorTrends,
        parkingUtilization,
        approvalRates
      });
    }, 10000); // Update every 10 seconds

    socket.on("disconnect", () => {
      console.log("A client disconnected");
    });
  });
};

module.exports = setupNotificationSocket;
