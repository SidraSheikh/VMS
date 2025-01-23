import React from "react";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  const handleRegister = (formData) => {
    console.log("Registration Data Submitted:", formData);
    // Add API integration here
    // Example:
    // axios.post('/api/register', formData)
    //   .then(response => console.log(response))
    //   .catch(error => console.error(error));
  };

  return (
    <div className="auth-page">
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
