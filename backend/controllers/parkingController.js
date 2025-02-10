const Parking = require("../models/Parking");

exports.getParkingStats = async (req, res) => {
  try {
    // Fetch parking stats for a specific location (e.g., "Main Parking Lot")
    const stats = await Parking.findOne({ location: "Main Parking Lot" });
    console.log("Fetched Parking Stats:", stats); // Debug log

    // If no stats are found, return default values
    if (!stats) {
      return res.json({
        twoWheelers: 0,
        fourWheelers: 0,
        totalSlots: 100 // Default total slots
      });
    }

    // Map the fields to match the frontend's expected structure
    res.json({
      twoWheelers: stats.twoWheelersUsed, // Map `twoWheelersUsed` to `twoWheelers`
      fourWheelers: stats.fourWheelersUsed, // Map `fourWheelersUsed` to `fourWheelers`
      totalSlots: stats.totalSlots
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching parking stats",
      error: error.message
    });
  }
};

// Update parking stats based on vehicle type
exports.updateParkingStats = async (vehicleType) => {
  try {
    const parking = await Parking.findOne();
    if (!parking) {
      throw new Error("Parking data not found.");
    }

    if (vehicleType === "2-wheeler") {
      parking.twoWheelersUsed += 1;
    } else if (vehicleType === "4-wheeler") {
      parking.fourWheelersUsed += 1;
    }

    await parking.save();
    console.log(`Parking updated for ${vehicleType}`);
  } catch (error) {
    console.error("Error updating parking stats:", error);
    throw error;
  }
};
// Update parking slots when a visitor checks in
exports.updateParkingStats = async (vehicleType) => {
  try {
    const parking = await Parking.findOne();
    if (!parking) {
      throw new Error("Parking data not found.");
    }

    console.log("Before Update:", parking); // Log the parking stats before update

    if (vehicleType === "2-wheeler") {
      parking.twoWheelersUsed += 1;
    } else if (vehicleType === "4-wheeler") {
      parking.fourWheelersUsed += 1;
    }

    await parking.save();
    console.log("After Update:", parking); // Log the parking stats after update
    console.log(`Parking updated for ${vehicleType}`);
  } catch (error) {
    console.error("Error updating parking stats:", error);
    throw error;
  }
};

// Update parking slots when a visitor checks out
exports.updateParkingOnCheckOut = async (vehicleType) => {
  try {
    const parking = await Parking.findOne();
    if (!parking) {
      throw new Error("Parking data not found.");
    }

    if (vehicleType === "2-wheeler") {
      parking.twoWheelersUsed -= 1;
    } else if (vehicleType === "4-wheeler") {
      parking.fourWheelersUsed -= 1;
    }

    await parking.save();
  } catch (error) {
    console.error("Error updating parking on check-out:", error);
    throw error;
  }
};
