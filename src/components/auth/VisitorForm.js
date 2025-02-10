import React, { useState } from "react";
import api from "../../services/api";
import "../../assets/styles.css"; // Keep the same styling

const VisitorRegistration = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    cnic: "",
    mobileNumber: "",
    organizationName: "",
    purposeOfVisit: "",
    hostName: "",
    vehicleNumber: "",
    vehicleType: ""
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!/^[0-9]{13}$/.test(formData.cnic))
      errors.cnic = "CNIC must be a 13-digit number.";
    if (!/^\d{10,11}$/.test(formData.mobileNumber))
      errors.mobileNumber = "Mobile number must be 10-11 digits.";
    if (!formData.purposeOfVisit.trim())
      errors.purposeOfVisit = "Purpose of visit is required.";
    if (!formData.hostName.trim()) errors.hostName = "Host name is required.";
    return errors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    const response = await api.post("/visitors", formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    console.log("Visitor Registration Response:", response.data);
    setMessage("Visitor registered successfully!");
    setFormData({
      fullName: "",
      cnic: "",
      mobileNumber: "",
      organizationName: "",
      purposeOfVisit: "",
      hostName: "",
      vehicleNumber: "",
      vehicleType: ""
    });
    setErrors({});
    onSubmit(response.data.visitor);
  } catch (error) {
    console.error("Error registering visitor:", error);
    if (error.response) {
      console.log("Server Response Error:", error.response.data);
      setMessage(`Failed: ${error.response.data.message}`);
    } else {
      setMessage("Failed to register visitor. Server unreachable.");
    }
  }
};

  return (
    <div className="visitor-registration-container">
      <div className="visitor-registration-form">
        <h2>Visitor Registration</h2>
        {message && (
          <p
            className={`message ${
              message.includes("Failed") ? "error-message" : "success-message"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-group-visitor">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && (
              <span className="error">{errors.fullName}</span>
            )}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="cnic">CNIC</label>
            <input
              type="text"
              name="cnic"
              id="cnic"
              placeholder="Enter your CNIC (13 digits)"
              value={formData.cnic}
              onChange={handleChange}
              required
            />
            {errors.cnic && <span className="error">{errors.cnic}</span>}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              placeholder="Enter your mobile number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            {errors.mobileNumber && (
              <span className="error">{errors.mobileNumber}</span>
            )}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="organizationName">Organization Name</label>
            <input
              type="text"
              name="organizationName"
              id="organizationName"
              placeholder="Enter your organization name"
              value={formData.organizationName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group-visitor">
            <label htmlFor="purposeOfVisit">Purpose of Visit</label>
            <input
              type="text"
              name="purposeOfVisit"
              id="purposeOfVisit"
              placeholder="Enter the purpose of your visit"
              value={formData.purposeOfVisit}
              onChange={handleChange}
              required
            />
            {errors.purposeOfVisit && (
              <span className="error">{errors.purposeOfVisit}</span>
            )}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="hostName">Host Name</label>
            <input
              type="text"
              name="hostName"
              id="hostName"
              placeholder="Enter the name of the host"
              value={formData.hostName}
              onChange={handleChange}
              required
            />
            {errors.hostName && (
              <span className="error">{errors.hostName}</span>
            )}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="vehicleNumber">Vehicle Number</label>
            <input
              type="text"
              name="vehicleNumber"
              id="vehicleNumber"
              placeholder="Enter your vehicle number"
              value={formData.vehicleNumber}
              onChange={handleChange}
            />
          </div>

          <div className="input-group-visitor">
            <label htmlFor="vehicleType">Vehicle Type</label>
            <select
              name="vehicleType"
              id="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
            >
              <option value="">Select Vehicle Type</option>
              <option value="2-wheeler">2-Wheeler</option>
              <option value="4-wheeler">4-Wheeler</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">
            Register Visitor
          </button>
        </form>
      </div>
    </div>
  );
};

export default VisitorRegistration;
