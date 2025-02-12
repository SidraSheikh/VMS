import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import api from "../../services/api"; // Import the api instance
import "../../assets/styles.css";

const VisitorLogs = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/visitors", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        console.log("Visitors API Response:", response); // Debug log
        setVisitors(response.data);
      } catch (error) {
        console.error("Error fetching visitors:", error);
      }
    };

    fetchData();
  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [["Name", "Email", "Purpose", "Status", "Check-In", "Check-Out"]],
      body: visitors.map((visitor) => [
        visitor.fullName,
        visitor.hostName,
        visitor.visitingOffice,
        visitor.dateOfVisit,
        visitor.organizationName,
        visitor.mobileNumber,
        visitor.purposeOfVisit,
        visitor.status,
        visitor.checkIn,
        visitor.checkOut
      ])
    });
    doc.save("visitor-logs.pdf");
  };

  return (
    <div className="visitor-request-container">
      <button
        className="btn-primary"
        onClick={exportToPDF}
        style={{ marginBottom: "10px" }}
      >
        Export to PDF
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Host Name</th>
            <th>visitingOffice</th>
            <th>dateOfVisit</th>
            <th>organization Name</th>
            <th>Mobile Number</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Check-In</th>
            <th>Check-Out</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor) => (
            <tr key={visitor._id}>
              <td>{visitor.fullName}</td>
              <td>{visitor.hostName}</td>
              <td>{visitor.visitingOffice}</td>
              <td>{visitor.dateOfVisit}</td>
              <td>{visitor.organizationName}</td>
              <td>{visitor.mobileNumber}</td>
              <td>{visitor.purposeOfVisit}</td>
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
