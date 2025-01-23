import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FeatureCard from "../components/LandingPage/FeatureCard";
import Pricing from "../components/LandingPage/Pricing";
import Faq from "../components/LandingPage/Faqs";
import "../assets/styles.css";
import { useNavigate } from "react-router-dom";
import Contact from "../components/LandingPage/Contact";

const LandingPage = () => {
    const navigate = useNavigate();
  const features = [
    {
      iconClass: "bi bi-calendar-check-fill",
      title: "Visitor Pre-Appointment",
      description:
        "Allow visitors to schedule appointments effortlessly before arrival."
    },
    {
      iconClass: "bi bi-qr-code-scan",
      title: "QR Code Check-In",
      description:
        "Streamline the check-in process with quick QR code scanning."
    },
    {
      iconClass: "bi bi-clock-history",
      title: "Real-Time Logs",
      description: "Monitor visitor activity and generate logs in real time."
    },
    {
      iconClass: "bi bi-car-front-fill",
      title: "Parking Management",
      description: "Efficiently allocate parking spaces for visitors and staff."
    }
  ];

  return (
    <section>
      <Navbar isAuthenticated={false} />
      <header className="landing-header text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-3 mt-5 mb-4 fw-bold text-dark mb-4">
            Welcome to Smart Visitor Management System
          </h1>
          <p className="lead text-muted mb-4 fw-bold">
            Streamline visitor registration, enhance security, and provide a
            seamless experience for both visitors and hosts. Empower your
            workspace with efficiency.
          </p>
          <button
            className="btn btn-primary btn-lg px-4 py-2 shadow-sm rounded-pill"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
      </header>

      <section id="features">
        <div className="container">
          <h2 className="text-center mt-5 mb-4 fw-bold text-white">
            Key Features
          </h2>
          <div className="row gy-4">
            {features.map((feature, index) => (
              <div className="col-md-3" key={index}>
                <FeatureCard
                  iconClass={feature.iconClass}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs">
        <Faq />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <Contact />
      </section>

    <section>
        <Footer />
      </section>
    </section>

  );
};

export default LandingPage;
