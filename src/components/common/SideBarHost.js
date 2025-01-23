import React from "react";

const SidebarHost = ({ setCurrentSection }) => {
  console.log("setCurrentSection:", setCurrentSection);  
  const sections = [
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

export default SidebarHost;
