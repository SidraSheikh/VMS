import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./components/LandingPage/Pricing";
import Contact from "./components/LandingPage/Contact";
import Faqs from "./components/LandingPage/Faqs";
import VisitorRegistration from "./pages/VisitorRegistration";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import HostDashboard from "./pages/HostDashboard";
import ReceptionDashboard from "./pages/ReceptionDashboard";
import SecurityDashboard from "./pages/SecurityDashboard";
import LogoutButton from "./pages/Logout";
import "./assets/styles.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/visitor-registration"
            element={<VisitorRegistration />}
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/host" element={<HostDashboard />} />
          <Route path="/reception" element={<ReceptionDashboard />} />
          <Route path="/security" element={<SecurityDashboard />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/logout" element={<LogoutButton/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
