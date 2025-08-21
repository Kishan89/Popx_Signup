import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/SigninPage";
import AccountSettings from "./components/AccountSettings";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;