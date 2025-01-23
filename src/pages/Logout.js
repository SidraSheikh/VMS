import { useHistory } from "react-router-dom"; 
import React from "react";

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 

    history.push("/login"); 
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
};

export default Logout;
