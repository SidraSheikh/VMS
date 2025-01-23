import React from "react";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  const handleLogin = (formData) => {
    console.log("Login Data Submitted:", formData);
    // Call API or handle authentication logic here
  };

  return (
    <div className="auth-page">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
