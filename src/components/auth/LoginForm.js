import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../services/api";
import "../../assets/styles.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      console.log("Logging in with:", formData); // Debugging log
      const response = await axios.post("/auth/login", formData); // Ensure the endpoint is correct
      console.log("Login successful:", response.data);

      const { token, role } = response.data;

      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Redirect to the appropriate dashboard based on role
      switch (role) {
        case "admin":
          navigate("/admin");
          break;
        case "host":
          navigate("/host");
          break;
        case "receptionist":
          navigate("/reception");
          break;
        case "security":
          navigate("/security");
          break;
        default:
          setError("Unknown role. Contact support.");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error); // Debugging log
      setError(error.response?.data?.message || "Login failed. Try again.");
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
        <h2>Welcome Back</h2>
        {error && <p className="error">{error}</p>}
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
