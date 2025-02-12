import React, { useState } from "react";
import "../../assets/styles.css";

const QRScanner = () => {
  const [qrData, setQrData] = useState("");
  const [visitorDetails, setVisitorDetails] = useState(null);
  const [error, setError] = useState("");

  const handleScan = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/security/validate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({ qrData })
        }
      );

      const data = await response.json();
      if (data.success) {
        setVisitorDetails(data.visitor);
        setError("");
      } else {
        setVisitorDetails(null);
        setError(data.message);
      }
    } catch (error) {
      setError("Error validating QR code!");
    }
  };

  return (
    <div className="qr-scanner-container">
      <input
        type="text"
        className="form-input"
        placeholder="Scan QR Code"
        value={qrData}
        onChange={(e) => setQrData(e.target.value)}
      />
      <button className="btn-primary" onClick={handleScan}>
        Validate
      </button>

      {visitorDetails ? (
        <div className="visitor-info">
          <h3>Visitor Details</h3>
          <p>
            <strong>Name:</strong> {visitorDetails.name}
          </p>
          <p>
            <strong>Purpose:</strong> {visitorDetails.purpose}
          </p>
          <p>
            <strong>Host:</strong> {visitorDetails.host}
          </p>
        </div>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : null}
    </div>
  );
};

export default QRScanner;
