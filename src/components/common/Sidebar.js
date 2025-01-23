import React from "react";

const Sidebar = ({ setCurrentSection }) => {
  console.log("setCurrentSection:", setCurrentSection);  
  const sections = [
    "Analytics",
    "Parking",
    "User Management",
    "Visitor Logs",
    "Logout"
  ];

  return (
    <div className="sidebar">
      <h2>VMS Dashboard</h2>
      <ul>
        {sections.map((section, index) => (
          <li key={index} onClick={() => setCurrentSection(section)}>
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
