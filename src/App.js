import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import RitualSeason from "./components/RitualSeason";
import Contact from "./components/Contact";
import Login from "./components/Login";
import QuizPreview from "./components/QuizPreview";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login logic
  const handleLogin = (email, password) => {
    if (email === "user@example.com" && password === "123456") {
      setIsLoggedIn(true);
      alert("✅ Login successful!");
    } else {
      alert("❌ Invalid credentials");
    }
  };

  // Handle logout logic
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("✅ Logged out!");
  };

  return (
    <Router>
      {/* Navbar with login/logout state */}
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/rituals" element={<RitualSeason />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Quiz Route */}
        <Route
          path="/quiz"
          element={
            isLoggedIn ? <QuizPreview /> : <Navigate to="/login" replace />
          }
        />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;