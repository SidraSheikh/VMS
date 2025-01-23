import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const VisitorLogs = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetch("/api/visitors")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setVisitors(data))
      .catch((error) => console.error("Error fetching visitors:", error));
  }, []);

  return (
    <div className="visitor-request-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Check-In</th>
            <th>Check-Out</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor) => (
            <tr key={visitor.id}>
              <td>{visitor.name}</td>
              <td>{visitor.email}</td>
              <td>{visitor.purpose}</td>
              <td>{visitor.status}</td>
              <td>{visitor.checkIn}</td>
              <td>{visitor.checkOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorLogs;
