// controllers/analyticsController.js
const AnalyticsController = {
  getVisitorTrends: async (req, res) => {
    try {
      // Fetch visitor trends data from the database
      const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [50, 60, 45, 70, 80, 90, 100]
      };
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch visitor trends" });
    }
  },

  getParkingUtilization: async (req, res) => {
    try {
      // Fetch parking utilization data from the database
      const data = {
        labels: ["2-Wheelers", "4-Wheelers"],
        data: [30, 70]
      };
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch parking utilization" });
    }
  },

  getApprovalRates: async (req, res) => {
    try {
      // Fetch approval rates data from the database
      const data = {
        labels: ["Approved", "Rejected"],
        data: [80, 20]
      };
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch approval rates" });
    }
  }
};

module.exports = AnalyticsController;
