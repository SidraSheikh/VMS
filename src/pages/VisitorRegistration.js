import React from "react";
import VisitorForm from "../components/auth/VisitorForm";

const VisitorRegistrationPage = () => {
  const handleVisitorRegistration = (visitorData) => {
    console.log("Visitor Registration Data:", visitorData);
    // Call backend API to register the visitor
  };

  return (
    <div className="auth-page">
      <VisitorForm onSubmit={handleVisitorRegistration} />
    </div>
  );
};

export default VisitorRegistrationPage;
