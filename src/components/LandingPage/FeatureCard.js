import React from "react";
import "../../assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FeatureCard = ({ iconClass, title, description }) => {
  return (
    <section
      className="card feature-card text-center shadow-sm p-2 border-0 h-100 "
      style={{ borderRadius: "12px", transition: "transform 0.3s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <i
        className={`${iconClass} text-primary`}
        style={{ fontSize: "3rem" }}
      ></i>
      <h3 className="mt-3">{title}</h3>
      <p className="text-muted">{description}</p>
    </section>
  );
};

export default FeatureCard;
