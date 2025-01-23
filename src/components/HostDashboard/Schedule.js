import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const Schedule = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      title: "Meeting with Client X",
      time: "3:00 PM",
      location: "Conference Room A"
    },
    { id: 2, title: "Team Meeting", time: "11:00 AM", location: "Online" }
  ]);

  useEffect(() => {
    // Fetch schedules from the backend
    // Example API call: fetch("/api/schedules").then((res) => res.json()).then(setSchedules);
  }, []);

  return (
    <div className="schedule-container">
      <ul className="schedule-list">
        {schedules.map((schedule) => (
          <li key={schedule.id}>
            <p>
              <strong>{schedule.title}</strong> - {schedule.time}
            </p>
            <p>Location: {schedule.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
