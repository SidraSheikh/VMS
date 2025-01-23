import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch("/api/security/alerts")
      .then((response) => response.json())
      .then((data) => setAlerts(data.alerts))
      .catch((error) => console.error("Error fetching alerts:", error));
  }, []);

  return (
    <div className="notification-container">
      {alerts.length > 0 ? (
        <ul className="notification-list">
          {alerts.map((alert, index) => (
            <li key={index}>
              <strong>{alert.type}:</strong> {alert.message} at {alert.time}
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
