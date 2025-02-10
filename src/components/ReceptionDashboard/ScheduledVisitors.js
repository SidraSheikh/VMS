import React, { useState, useEffect } from "react";
import api from "../../services/api"; // Import the api instance
import "../../assets/styles.css";

const ScheduledVisitors = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/visitors/scheduled", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        console.log("Scheduled Visitors API Response:", response); // Debug log
        setVisitors(response.data.visitors);
      } catch (error) {
        console.error("Error fetching scheduled visitors:", error);
      }
    };

    fetchData();
  }, []);

  const notifyHost = async (visitorId) => {
    try {
      const response = await api.post(`/visitors/notify/${visitorId}`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = response.data;
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
          <li className="visitor-item" key={visitor._id}>
            {visitor.fullName} - {visitor.purposeOfVisit}
            <button
              className="btn-secondary"
              onClick={() => notifyHost(visitor._id)}
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
