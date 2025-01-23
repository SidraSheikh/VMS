import React, { useState } from "react";
import Analytics from "../components/AdminDashboard/Analytics";
import ParkingUtilization from "../components/AdminDashboard/ParkingUtilization";
import UserManagement from "../components/AdminDashboard/UserManagement";
import VisitorLogs from "../components/AdminDashboard/VisitorLogs";
import "../assets/styles.css";

const AdminDashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`admin-dashboard ${isSidebarOpen ? "" : "closed"}`}>
      <div className={`sidebar ${isSidebarOpen ? "" : "closed"}`}>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? "❮" : "❯"}
        </div>
        <h2>VMS Dashboard</h2>
        <ul>
          <li className="active">
            <i className="fas fa-chart-line"></i>
            <span>Analytics</span>
          </li>
          <li>
            <i className="fas fa-car"></i>
            <span>Parking</span>
          </li>
          <li>
            <i className="fas fa-users"></i>
            <span>User Management</span>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <span>Visitor Logs</span>
          </li>
          <li>
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </li>
          <li>
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="dashboard-content">
        <div className="host-dashboard">
          <header className="dashboard-header">
            <h1>Admin Dashboard</h1>
          </header>
          <div className="dashboard-widgets">
            <section className="dashboard-section" id="Parking">
              <h2>ParkingUtilization</h2>
              <ParkingUtilization />
            </section>
            <section className="dashboard-section">
              <h2>Analytics</h2>
              <Analytics />
            </section>
            <section className="dashboard-section">
              <h2>UserManagement</h2>
              <UserManagement />
            </section>
          </div>
          <section className="dashboard-section">
            <h2>VisitorLogs</h2>
            <VisitorLogs />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
