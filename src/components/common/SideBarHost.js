import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarHost = ({ isOpen, toggleSidebar }) => {
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

export default SidebarHost;
