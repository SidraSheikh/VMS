import React, { useState } from "react";
import "../../assets/styles.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);
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
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-register">
            Login
          </button>
        </form>

        <div className="link-container">
          <p>
            Forgot your password? <a href="/reset-password">Reset here</a>
          </p>
          <p>
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
