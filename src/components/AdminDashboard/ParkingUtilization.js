import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const ParkingUtilization = () => {
  const [parkingStats, setParkingStats] = useState({
    twoWheelers: 0,
    fourWheelers: 0,
    totalSlots: 100
  });

  useEffect(() => {
    fetch("/api/parking-stats")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setParkingStats(data))
      .catch((error) => console.error("Error fetching parking stats:", error));
  }, []);

  return (
    <div className="parking-utilization">
      <p>2-Wheelers Parked: {parkingStats.twoWheelers}</p>
      <p>4-Wheelers Parked: {parkingStats.fourWheelers}</p>
      <p>Total Slots: {parkingStats.totalSlots}</p>
    </div>
  );
};

export default ParkingUtilization;
