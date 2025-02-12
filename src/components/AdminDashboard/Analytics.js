import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import io from "socket.io-client";
import "../../assets/styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"], // Allow WebSocket and fallback
  withCredentials: true
});
const Analytics = () => {
  const [visitorTrends, setVisitorTrends] = useState({
    labels: [],
    data: []
  });
  const [parkingUtilization, setParkingUtilization] = useState({
    labels: [],
    data: []
  });
  const [approvalRates, setApprovalRates] = useState({
    labels: [],
    data: []
  });

  useEffect(() => {
    // Fetch initial analytics data
    fetch("/api/analytics/visitor-trends")
      .then((res) => res.json())
      .then((data) => setVisitorTrends(data));

    fetch("/api/analytics/parking-utilization")
      .then((res) => res.json())
      .then((data) => setParkingUtilization(data));

    fetch("/api/analytics/approval-rates")
      .then((res) => res.json())
      .then((data) => setApprovalRates(data));

    // Listen for real-time updates
    socket.on("analyticsUpdate", (data) => {
      setVisitorTrends(data.visitorTrends);
      setParkingUtilization(data.parkingUtilization);
      setApprovalRates(data.approvalRates);
    });

    return () => {
      socket.disconnect(); 
    };
  }, []);

  return (
    <div className="analytics-container">

      <div className="chart-container">
        <h3>Visitor Trends</h3>
        <Line
          data={{
            labels: visitorTrends.labels,
            datasets: [
              {
                label: "Visitors",
                data: visitorTrends.data,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)"
              }
            ]
          }}
        />
      </div>

      <div className="chart-container">
        <h3>Parking Utilization</h3>
        <Bar
          data={{
            labels: parkingUtilization.labels,
            datasets: [
              {
                label: "Parking Slots",
                data: parkingUtilization.data,
                backgroundColor: ["#4caf50", "#2196f3"]
              }
            ]
          }}
        />
      </div>

      <div className="chart-container">
        <h3>Approval Rates</h3>
        <Pie
          data={{
            labels: approvalRates.labels,
            datasets: [
              {
                label: "Approval Rates",
                data: approvalRates.data,
                backgroundColor: ["#4caf50", "#f44336"]
              }
            ]
          }}
        />
      </div>
    </div>
  );
};

export default Analytics;
