import React, { useState } from "react";
import "../../assets/styles.css";

const CheckInOut = () => {
  const [visitorId, setVisitorId] = useState("");
  const [status, setStatus] = useState("");

  const handleCheckIn = async () => {
    try {
      const response = await fetch("/api/visitors/checkin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ visitorId })
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Check-in successful!");
      } else {
        setStatus("Check-in failed: " + data.message);
      }
    } catch (error) {
      setStatus("Error during check-in!");
    }
  };

  const handleCheckOut = async () => {
    try {
      const response = await fetch("/api/visitors/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ visitorId })
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Check-out successful!");
      } else {
        setStatus("Check-out failed: " + data.message);
      }
    } catch (error) {
      setStatus("Error during check-out!");
    }
  };

  return (
    <div className="dashboard-section">
      <input
        type="text"
        className="form-input"
        placeholder="Enter Visitor ID"
        value={visitorId}
        onChange={(e) => setVisitorId(e.target.value)}
      />
      <div className="button-group">
        <button className="btn-primary" onClick={handleCheckIn}>
          Check-In
        </button>
        <button className="btn-primary" onClick={handleCheckOut}>
          Check-Out
        </button>
      </div>
      {status && <p className="notification">{status}</p>}
    </div>
  );
};

export default CheckInOut;
