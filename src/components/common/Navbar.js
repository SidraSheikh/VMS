import React from "react";
import "../../assets/styles.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate("/")}>
        <span className="brand-name">Smart VMS</span>
      </div>
      <div className="navbar-links">
        <a href="#features" className="navbar-button">
          Features
        </a>
        <a href="#pricing" className="navbar-button">
          Pricing
        </a>
        <a href="#faqs" className="navbar-button">
          FAQs
        </a>
        <a href="#contact" className="navbar-button">
          Contact Us
        </a>
        {!isAuthenticated ? (
          <>
            <button
              className="navbar-button primary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="navbar-button primary"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </>
        ) : (
          <>
            <button
              className="navbar-button"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
            <button className="navbar-button logout" onClick={onLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
