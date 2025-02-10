import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../services/api"; // Ensure the path is correct
import "../../assets/styles.css"; // Ensure the path to your CSS is correct
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "receptionist" // Default role
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      console.log("Registering user:", formData); // Debugging log
      const response = await axios.post("/auth/register", formData); // Ensure the endpoint is correct
      console.log("Registration successful:", response.data);

      alert("Registration successful! You can now log in.");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.response?.data || error);
      setError(error.response?.data?.message || "Registration failed.");
    }
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
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email Input */}
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
          {/* Password Input */}
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
          {/* Role Selection */}
          <div className="input-group">
            <div className="input-group mb-3">
              <select
                name="role"
                className="form-select"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="admin">Admin</option>
                <option value="host">Host</option>
                <option value="receptionist">Receptionist</option>
                <option value="security">Security</option>
              </select>
            </div>
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
