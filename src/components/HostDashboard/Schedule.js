import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/schedules")
      .then((res) => res.json())
      .then(setSchedules);
  }, []);

  return (
    <div className="schedule-container">
      <ul className="schedule-list">
        {schedules.map((schedule) => (
          <li key={schedule._id}>
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
