import React, { useState } from "react";
import api from "../../services/api";
import "../../assets/styles.css";

const VisitorRegistration = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    cnic: "",
    mobileNumber: "",
    organizationName: "",
    purposeOfVisit: "",
    hostName: "",
    department: "",
    vehicleNumber: "",
    vehicleType: "",
    visitingOffice: "",
    dateOfVisit: "",
    timeOfArrival: "",
    timeOfDeparture: ""
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "cnic") {
      value = value.replace(/\D/g, "");
      if (value.length > 5) value = value.slice(0, 5) + "-" + value.slice(5);
      if (value.length > 13)
        value = value.slice(0, 13) + "-" + value.slice(13);
      value = value.slice(0, 15);
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!/^\d{5}-\d{7}-\d{1}$/.test(formData.cnic))
      errors.cnic = "CNIC must be in the format XXXXX-XXXXXXX-X.";
    if (!/^\d{10,11}$/.test(formData.mobileNumber))
      errors.mobileNumber = "Mobile number must be 10-11 digits.";
    if (!formData.purposeOfVisit.trim())
      errors.purposeOfVisit = "Purpose of visit is required.";
    if (!formData.hostName.trim()) errors.hostName = "Host name is required.";
    if (!formData.department.trim())
      errors.department = "Department is required.";
    if (!formData.visitingOffice)
      errors.visitingOffice = "Visiting office selection is required.";
    if (!formData.dateOfVisit)
      errors.dateOfVisit = "Date of visit is required.";
    if (!formData.timeOfArrival)
      errors.timeOfArrival = "Time of arrival is required.";

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
      const token = localStorage.getItem("token");
      const response = await api.post("/visitors", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
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
        department: "",
        vehicleNumber: "",
        vehicleType: "",
        visitingOffice: "",
        dateOfVisit: "",
        timeOfArrival: "",
        timeOfDeparture: ""
      });
      setErrors({});

      if (
        formData.vehicleType === "2-wheeler" ||
        formData.vehicleType === "4-wheeler"
      ) {
        await api.post(
          "/parking/update",
          { vehicleType: formData.vehicleType, action: "check-in" },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
        );
        console.log("Parking slots updated successfully!");
      }

      if (onSubmit) onSubmit(response.data.visitor);
    } catch (error) {
      console.error("Error registering visitor:", error);
      if (error.response) {
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
          <p className={`message ${message.includes("Failed") ? "error-message" : "success-message"}`}>{message}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-group-visitor">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="cnic">CNIC</label>
            <input type="text" name="cnic" id="cnic" value={formData.cnic} onChange={handleChange} required />
            {errors.cnic && <p className="error">{errors.cnic}</p>}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input type="text" name="mobileNumber" id="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
            {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="organizationName">Organization Name</label>
            <input type="text" name="organizationName" id="organizationName" value={formData.organizationName} onChange={handleChange} />
          </div>

          <div className="input-group-visitor">
            <label htmlFor="purposeOfVisit">Purpose of Visit</label>
            <input type="text" name="purposeOfVisit" id="purposeOfVisit" value={formData.purposeOfVisit} onChange={handleChange} required />
            {errors.purposeOfVisit && <p className="error">{errors.purposeOfVisit}</p>}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="hostName">Host Name</label>
            <input type="text" name="hostName" id="hostName" value={formData.hostName} onChange={handleChange} required />
            {errors.hostName && <p className="error">{errors.hostName}</p>}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="department">Department</label>
            <input type="text" name="department" id="department" value={formData.department} onChange={handleChange} required />
            {errors.department && <p className="error">{errors.department}</p>}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="visitingOffice">Visiting Office</label>
            <select name="visitingOffice" id="visitingOffice" value={formData.visitingOffice} onChange={handleChange} required>
              <option value="">Select an Office</option>
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
              <option value="Company C">Company C</option>
            </select>
            {errors.visitingOffice && <p className="error">{errors.visitingOffice}</p>}
          </div>

          <div className="input-group-visitor">
            <label htmlFor="dateOfVisit">Date of Visit</label>
            <input type="date" name="dateOfVisit" id="dateOfVisit" value={formData.dateOfVisit} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn-primary">Register Visitor</button>
        </form>
      </div>
    </div>
  );
};

export default VisitorRegistration;
