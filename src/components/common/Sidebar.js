import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    toggleSidebar(); 
  };

  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      {/* Sidebar Toggle Button */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? "❮" : "❯"}
      </div>

      {/* Sidebar Header */}
      <h2>{isOpen ? "VMS Dashboard" : "VMS"}</h2>

      <ul>
        <li>
          <a className="navbar-button" href="#analytics">
            <i className="fas fa-chart-line"></i>
            Analytics
          </a>
        </li>
        <li>
          <a className="navbar-button" href="#parking">
            <i className="fas fa-car"></i>
            Parking
          </a>
        </li>
        <li>
          <a className="navbar-button" href="#users">
            <i className="fas fa-users"></i>
            User Management
          </a>
        </li>
        <li>
          <a className="navbar-button" href="#visitor-logs">
            <i className="fas fa-book"></i>
            Visitor Logs
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleNavigation("/logout")}
            className="navbar-button"
          >
            <i className="fas fa-sign-out-alt"></i>
            {isOpen && <span>Logout</span>}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
