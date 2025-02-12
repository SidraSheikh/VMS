const Parking = require("../models/Parking");

// Get parking stats
exports.getParkingStats = async (req, res) => {
  try {
    const stats = await Parking.findOne({ location: "Main Parking Lot" });
    if (!stats) {
      return res.json({
        twoWheelers: 0,
        fourWheelers: 0,
        totalSlots: 100
      });
    }

    res.json({
      twoWheelers: stats.twoWheelersUsed,
      fourWheelers: stats.fourWheelersUsed,
      totalSlots: stats.totalSlots
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching parking stats", error: error.message });
  }
};

// Update parking slots based on action (check-in or check-out)
exports.updateParking = async (req, res) => {
  try {
    const { vehicleType, action } = req.body;

    const parking = await Parking.findOne();
    if (!parking) {
      throw new Error("Parking data not found.");
    }

    if (action === "check-in") {
      if (vehicleType === "2-wheeler") {
        parking.twoWheelersUsed += 1;
      } else if (vehicleType === "4-wheeler") {
        parking.fourWheelersUsed += 1;
      }
    } else if (action === "check-out") {
      if (vehicleType === "2-wheeler") {
        parking.twoWheelersUsed -= 1;
      } else if (vehicleType === "4-wheeler") {
        parking.fourWheelersUsed -= 1;
      }
    }

    await parking.save();
    res.json({ success: true, message: "Parking updated successfully!" });
  } catch (error) {
    console.error("Error updating parking:", error);
    res.status(500).json({ message: "Error updating parking", error: error.message });
  }
};

// Update parking slots on check-in
exports.updateParkingOnCheckIn = async (vehicleType) => {
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
  } catch (error) {
    console.error("Error updating parking on check-in:", error);
    throw error;
  }
};

// Update parking slots on check-out
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
