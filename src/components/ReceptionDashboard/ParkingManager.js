import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const ParkingManager = () => {
  const [parkingSlots, setParkingSlots] = useState([]);
  const [vehicleNumber, setVehicleNumber] = useState("");

  useEffect(() => {
    fetch("/api/parking/status")
      .then((response) => response.json())
      .then((data) => setParkingSlots(data.slots))
      .catch((error) => console.error("Error fetching parking data:", error));
  }, []);

  const allocateParking = async () => {
    try {
      const response = await fetch("/api/parking/allocate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ vehicleNumber })
      });
      const data = await response.json();
      if (data.success) {
        alert("Parking allocated successfully!");
        setParkingSlots(data.updatedSlots);
      } else {
        alert("Failed to allocate parking: " + data.message);
      }
    } catch (error) {
      alert("Error during parking allocation!");
    }
  };

  return (
    <div className="dashboard-section">
      <input
        type="text"
        className="form-input"
        placeholder="Enter Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />
      <button className="btn-primary" onClick={allocateParking}>
        Allocate Parking
      </button>
      <ul className="parking-list">
        {parkingSlots.map((slot) => (
          <li className="parking-item" key={slot.id}>
            Slot {slot.id}: {slot.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingManager;
