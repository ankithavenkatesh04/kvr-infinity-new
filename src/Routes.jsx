import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivayPolicyPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
