import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Navbar from "./components/common/Navbar";
import Pricing from "./components/LandingPage/Pricing";
import Register from "./pages/Register";
import FeatureCard from "./components/LandingPage/FeatureCard";
import Contact from "./components/LandingPage/Contact";
import Faqs from "./components/LandingPage/Faqs";
import VisitorRegistration from "./pages/VisitorRegistration";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import HostDashboard from "./pages/HostDashboard";
import ReceptionDashboard from "./pages/ReceptionDashboard";
import SecurityDashboard from "./pages/SecurityDashboard";
import "./assets/styles.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className="main-content">
          <div className="page-content">
            <Routes>
              <Route path="/visitor-registration" element={<VisitorRegistration />}/>
              <Route path="/Navbar" element={<Navbar />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/featureCard" element={<FeatureCard />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/reception" element={<ReceptionDashboard />} />
              <Route path="/Security" element={<SecurityDashboard />} />
              <Route path="/host" element={<HostDashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
