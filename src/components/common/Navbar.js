import React, { useState } from "react";
import "../../assets/styles.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div
        className="navbar-brand"
        onClick={() => {
          navigate("/");
          closeMenu();
        }}
      >
        <span className="brand-name">Smart VMS</span>
      </div>

      {/* Hamburger Toggle */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#features" className="navbar-button" onClick={closeMenu}>
          Features
        </a>
        <a href="#pricing" className="navbar-button" onClick={closeMenu}>
          Pricing
        </a>
        <a href="#faqs" className="navbar-button" onClick={closeMenu}>
          FAQs
        </a>
        <a href="#contact" className="navbar-button" onClick={closeMenu}>
          Contact Us
        </a>
        {!isAuthenticated ? (
          <>
            <button
              className="navbar-button primary"
              onClick={() => {
                navigate("/login");
                closeMenu();
              }}
            >
              Login
            </button>
            <button
              className="navbar-button primary"
              onClick={() => {
                navigate("/register");
                closeMenu();
              }}
            >
              Register
            </button>
          </>
        ) : (
          <>
            <button
              className="navbar-button"
              onClick={() => {
                navigate("/dashboard");
                closeMenu();
              }}
            >
              Dashboard
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
