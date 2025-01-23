import React, { useRef, useEffect } from "react";
import "../../assets/styles.css";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const lineChartInstance = useRef(null);
  const barChartInstance = useRef(null);

  useEffect(() => {
    const ctxLine = lineChartRef.current.getContext("2d");
    const ctxBar = barChartRef.current.getContext("2d");

    if (lineChartInstance.current) lineChartInstance.current.destroy();
    if (barChartInstance.current) barChartInstance.current.destroy();

    lineChartInstance.current = new Chart(ctxLine, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Visitors Per Day",
            data: [50, 60, 45, 70, 80, 90, 100],
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Visitor Trends"
          }
        }
      }
    });

    barChartInstance.current = new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: ["2-Wheelers", "4-Wheelers"],
        datasets: [
          {
            label: "Parking Usage",
            data: [30, 70],
            backgroundColor: ["#4caf50", "#2196f3"]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Parking Utilization"
          }
        }
      }
    });

    return () => {
      if (lineChartInstance.current) lineChartInstance.current.destroy();
      if (barChartInstance.current) barChartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="analytics">
      <div style={{ marginBottom: "20px" }}>
        <h3>Visitor Trends</h3>
        <div style={{ width: "100%", height: "300px" }}>
          <canvas ref={lineChartRef}></canvas>
        </div>
      </div>

      <div>
        <h3>Parking Utilization</h3>
        <div style={{ width: "100%", height: "300px" }}>
          <canvas ref={barChartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
