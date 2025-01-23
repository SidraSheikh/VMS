// Pricing.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
      const navigate = useNavigate();

  return (
    <section className="page-container text-white g-4">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">$10/month</p>
          <p className="features">Visitor Logs, Check-In/Out</p>
          <button className="btn" onClick={() => navigate("/register")}>
            Get Started
          </button>
        </div>

        <div className="pricing-card">
          <h3>Pro</h3>
          <p className="price">$20/month</p>
          <p className="features">All Basic Features + Analytics</p>
          <button className="btn" onClick={() => navigate("/register")}>
            Get Started
          </button>
        </div>

        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="price">Contact for pricing</p>
          <p className="features">Custom Integrations</p>
          <button className="btn" onClick={() => navigate("/register")}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
