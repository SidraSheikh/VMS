import React, { useState, useEffect } from "react";
import "../../assets/styles.css";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the backend or WebSocket
    // Example API call: fetch("/api/notifications").then((res) => res.json()).then(setNotifications);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setNotifications((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          message: `New notification ${prev.length + 1}`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notification-container">
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification.id}>
            <p>{notification.message}</p>
            <small>{notification.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
