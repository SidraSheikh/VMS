import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const ScheduledVisitors = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetch("/api/visitors/scheduled")
      .then((response) => response.json())
      .then((data) => setVisitors(data.visitors))
      .catch((error) => console.error("Error fetching visitors:", error));
  }, []);

  const notifyHost = async (visitorId) => {
    try {
      const response = await fetch(`/api/visitors/notify/${visitorId}`, {
        method: "POST"
      });
      const data = await response.json();
      if (data.success) {
        alert("Host notified successfully!");
      } else {
        alert("Failed to notify host: " + data.message);
      }
    } catch (error) {
      alert("Error notifying host!");
    }
  };

  return (
    <div className="dashboard-section">
      <ul className="visitor-list">
        {visitors.map((visitor) => (
          <li className="visitor-item" key={visitor.id}>
            {visitor.name} - {visitor.time}
            <button
              className="btn-secondary"
              onClick={() => notifyHost(visitor.id)}
            >
              Notify Host
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledVisitors;
