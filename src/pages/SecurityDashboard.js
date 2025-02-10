import React, { useState } from "react";
import Alerts from "../components/SecurityDashboard/Alerts";
import QRScanner from "../components/SecurityDashboard/QRScanner";
import VehicleValidation from "../components/SecurityDashboard/VehicleValidation";
import SidebarHost from "../components/common/SideBarHost";
import "../assets/styles.css";

const SecurityDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`host-dashboard ${isSidebarOpen ? "" : "closed"}`}>
      <SidebarHost isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <header className="dashboard-header">
        <h1>Security Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <section className="dashboard-section">
          <h2>Alerts</h2>
          <Alerts />
        </section>
        <section className="dashboard-section">
          <h2>QR Scanner</h2>
          <QRScanner />
        </section>
        <section className="dashboard-section">
          <h2>Vehicle Validation</h2>
          <VehicleValidation />
        </section>
      </div>
    </div>
  );
};

export default SecurityDashboard;
