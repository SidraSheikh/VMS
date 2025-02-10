import React, { useState } from "react";
import Analytics from "../components/AdminDashboard/Analytics";
import ParkingUtilization from "../components/AdminDashboard/ParkingUtilization";
import UserManagement from "../components/AdminDashboard/UserManagement";
import VisitorLogs from "../components/AdminDashboard/VisitorLogs";
import Sidebar from "../components/common/Sidebar"; // Import Sidebar
import "../assets/styles.css";

const AdminDashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`admin-dashboard ${isSidebarOpen ? "" : "closed"}`}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="dashboard-content">
        <div className="host-dashboard">
          <header className="dashboard-header">
            <h1>Admin Dashboard</h1>
          </header>
          <div className="dashboard-widgets">
            <section className="dashboard-section" id="parking">
              <h2>Parking Utilization</h2>
              <ParkingUtilization />
            </section>
            <section className="dashboard-section" id="analytics">
              <h2>Analytics</h2>
              <Analytics />
            </section>
          </div>
          <section className="dashboard-section" id="users">
            <h2>User Management</h2>
            <UserManagement />
          </section>
          <section className="dashboard-section" id="visitor-logs">
            <h2>Visitor Logs</h2>
            <VisitorLogs />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
