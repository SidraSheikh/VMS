import React, { useState } from "react";
import "../../assets/styles.css";

const VehicleValidation = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [validationStatus, setValidationStatus] = useState("");

  const validateVehicle = async () => {
    try {
      const response = await fetch("/api/security/vehicle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ vehicleNumber })
      });
      const data = await response.json();
      if (data.success) {
        setValidationStatus(`Vehicle approved: Slot ${data.slot}`);
      } else {
        setValidationStatus(`Validation failed: ${data.message}`);
      }
    } catch (error) {
      setValidationStatus("Error during vehicle validation!");
    }
  };

  return (
    <div>
      <input
        type="text"
        className="form-input"
        placeholder="Enter Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />
      <button onClick={validateVehicle}>Validate</button>
      <p>{validationStatus}</p>
    </div>
  );
};

export default VehicleValidation;
