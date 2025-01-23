import React, { useState } from "react";
import "../../assets/styles.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data Submitted:", formData);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <div className="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/256/6716/6716646.png"
            alt="User Icon"
          />
        </div>
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-register">
            Sign Up
          </button>
        </form>

        <div className="link-container">
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
          <p>
            Are you a visitor? <a href="/visitor-registration">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
