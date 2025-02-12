import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/security/alerts`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        const data = await response.json();
        if (data.success) {
          setAlerts(data.alerts);
        }
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <div className="alerts-container">
      {alerts.length > 0 ? (
        <ul className="alerts-list">
          {alerts.map((alert, index) => (
            <li key={index}>
              <strong>{alert.type}:</strong> {alert.message} at {new Date(alert.time).toLocaleTimeString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No active alerts.</p>
      )}
    </div>
  );
};

export default Alerts;
