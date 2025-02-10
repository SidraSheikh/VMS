import React, { useState, useEffect } from "react";
import api from "../../services/api"; // Import the api instance
import "../../assets/styles.css";

const ParkingUtilization = () => {
  const [parkingStats, setParkingStats] = useState({
    twoWheelers: 0,
    fourWheelers: 0,
    totalSlots: 100
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/parking-stats", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        console.log("Parking API Response:", response); // Debug log

        // Check if the response contains the expected data
        if (response.data) {
          setParkingStats(response.data); // Update state with the direct response data
        } else {
          throw new Error("Invalid API response structure");
        }
      } catch (error) {
        console.error("Error fetching parking stats:", error);
        setError("Failed to fetch parking stats. Please try again later.");
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  // Show a loading message while fetching data
  if (loading) {
    return <div>Loading parking stats...</div>;
  }

  // Show an error message if the request fails
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Render the parking stats
  return (
    <div className="parking-utilization">
      <p>2-Wheelers Parked: {parkingStats.twoWheelers}</p>
      <p>4-Wheelers Parked: {parkingStats.fourWheelers}</p>
      <p>Total Slots: {parkingStats.totalSlots}</p>
    </div>
  );
};

export default ParkingUtilization;
