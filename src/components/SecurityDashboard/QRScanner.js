import React, { useState } from "react";
import "../../assets/styles.css";

const QRScanner = () => {
  const [qrData, setQrData] = useState("");
  const [visitorDetails, setVisitorDetails] = useState(null);
  const [error, setError] = useState("");

  const handleScan = async () => {
    try {
      const response = await fetch("/api/security/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ qrData })
      });
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
    <div>
      <input
        type="text"
        className="form-input"
        placeholder="Scan QR Code"
        value={qrData}
        onChange={(e) => setQrData(e.target.value)}
      />
      <button onClick={handleScan}>Validate</button>
      {visitorDetails ? (
        <div>
          <h3>Visitor Details</h3>
          <p>Name: {visitorDetails.name}</p>
          <p>Purpose: {visitorDetails.purpose}</p>
          <p>Host: {visitorDetails.host}</p>
        </div>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : null}
    </div>
  );
};

export default QRScanner;
