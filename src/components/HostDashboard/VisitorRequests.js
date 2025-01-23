import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const VisitorRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch visitor requests from the backend
    // Example API call: fetch("/api/visitor-requests").then((res) => res.json()).then(setRequests);
  }, []);

  const handleAction = (id, action) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: action } : req))
    );

    // Update the backend with the new status
    // Example API call: fetch(`/api/visitor-requests/${id}`, { method: "PUT", body: JSON.stringify({ status: action }) });
  };

  return (
    <div className="visitor-request-container">
      <table>
        <thead>
          <tr>
            <th>Visitor Name</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.visitorName}</td>
              <td>{request.purpose}</td>
              <td>{request.status}</td>
              <td>
                {request.status === "Pending" ? (
                  <>
                    <button onClick={() => handleAction(request.id, "Approved")}>Approve</button>
                    <button onClick={() => handleAction(request.id, "Rejected")}>Reject</button>
                  </>
                ) : (
                  <span>{request.status}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorRequest;
