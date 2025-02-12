import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "../../assets/styles.css";

const VisitorRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await api.get("/visitors/host", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        console.log("Host Visitors:", response.data);
        setRequests(response.data);
      } catch (error) {
        console.error(" Error fetching host visitors:", error);
      }
    };
    fetchVisitors();
  }, []);

  const handleApprove = async (id) => {
    await api.post(
      "/visitors/approve",
      { visitorId: id },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      }
    );
    setRequests(
      requests.map((req) =>
        req._id === id ? { ...req, status: "Approved" } : req
      )
    );
  };

  const handleDecline = async (id) => {
    await api.post(
      "/visitors/decline",
      { visitorId: id },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      }
    );
    setRequests(
      requests.map((req) =>
        req._id === id ? { ...req, status: "Declined" } : req
      )
    );
  };

  return (
    <div className="visitor-request-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>CNIC</th>
            <th>Mobile</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>{request.fullName}</td>
              <td>{request.cnic}</td>
              <td>{request.mobileNumber}</td>
              <td>{request.purposeOfVisit}</td>
              <td>{request.status}</td>
              <td>
                {request.status === "Pending" && (
                  <>
                    <button onClick={() => handleApprove(request._id)}>
                      Approve
                    </button>
                    <button onClick={() => handleDecline(request._id)}>
                      Decline
                    </button>
                  </>
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
