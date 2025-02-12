import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/notifications")
      .then((res) => res.json())
      .then(setNotifications);
  }, []);

  return (
    <div className="notification-container">
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification._id}>
            <p>{notification.message}</p>
            <small>
              {new Date(notification.timestamp).toLocaleTimeString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
