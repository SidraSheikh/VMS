import React, { useState } from "react";
import "../../assets/styles.css";

const VehicleValidation = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [validationStatus, setValidationStatus] = useState("");

  const validateVehicle = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/security/vehicle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ vehicleNumber })
      });

      const data = await response.json();
      if (data.success) {
        setValidationStatus(`✅ Vehicle approved: Slot ${data.slot}`);
      } else {
        setValidationStatus(`❌ Validation failed: ${data.message}`);
      }
    } catch (error) {
      setValidationStatus("⚠️ Error during vehicle validation!");
    }
  };

  return (
    <div className="vehicle-validation-container">
      <input
        type="text"
        className="form-input"
        placeholder="Enter Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />
      <button className="btn-primary" onClick={validateVehicle}>Validate</button>
      <p className="status-message">{validationStatus}</p>
    </div>
  );
};

export default VehicleValidation;
