import React, { useState } from "react";
import CheckInOut from "../components/ReceptionDashboard/CheckInOut";
import ParkingManager from "../components/ReceptionDashboard/ParkingManager";
import ScheduledVisitors from "../components/ReceptionDashboard/ScheduledVisitors";
import SidebarHost from "../components/common/SideBarHost";
import "../assets/styles.css";

const ReceptionDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className={`host-dashboard ${isSidebarOpen ? "" : "closed"}`}>
      <SidebarHost isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <header className="dashboard-header">
        <h1>Reception Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <section className="dashboard-section">
          <h2>CheckInOut</h2>
          <CheckInOut />
        </section>
        <section className="dashboard-section">
          <h2>ParkingManager</h2>
          <ParkingManager />
        </section>
        <section className="dashboard-section">
          <h2>ScheduledVisitors</h2>
          <ScheduledVisitors />
        </section>
      </div>
    </div>
  );
};

export default ReceptionDashboard;
