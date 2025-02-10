import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token"); // Clear token
    navigate("/login"); // Redirect to login
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
