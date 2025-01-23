import React from "react";
import Schedule from "../components/HostDashboard/Schedule";
import Notification from "../components/HostDashboard/Notifications";
import VisitorRequest from "../components/HostDashboard/VisitorRequests";
import SidebarHost from "../components/common/SideBarHost";
import "../assets/styles.css";

const HostDashboard = () => {
  return (
    <div className="host-dashboard">
      <header className="dashboard-header">
      <SidebarHost/>
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
