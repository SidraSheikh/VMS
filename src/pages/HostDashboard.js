import React, { useState } from "react";
import Schedule from "../components/HostDashboard/Schedule";
import Notification from "../components/HostDashboard/Notifications";
import VisitorRequest from "../components/HostDashboard/VisitorRequests";
import SidebarHost from "../components/common/SideBarHost";
import "../assets/styles.css";

const HostDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`host-dashboard ${isSidebarOpen ? "" : "closed"}`}>
      <SidebarHost isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <header className="dashboard-header">
        <h1>Host Dashboard</h1>
        <p>
          Manage your schedules, visitor requests, and notifications in one
          place.
        </p>
      </header>
      <div className="dashboard-content">
        <section className="dashboard-section">
          <h2>Schedule</h2>
          <Schedule />
        </section>
        <section className="dashboard-section">
          <h2>Notifications</h2>
          <Notification />
        </section>
        <section className="dashboard-section">
          <h2>Visitor Requests</h2>
          <VisitorRequest />
        </section>
      </div>
    </div>
  );
};

export default HostDashboard;
