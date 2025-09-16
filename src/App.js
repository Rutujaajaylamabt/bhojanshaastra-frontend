import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";

// ✅ Protected Route wrapper
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Load login state from localStorage
  useEffect(() => {
    const savedLogin = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(savedLogin);
  }, []);

  // ✅ Save login state in localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = (email, password) => {
    // Dummy credentials (replace with backend in real app)
    if (email === "user@example.com" && password === "123456") {
      setIsLoggedIn(true);
      alert("✅ Login successful!");
    } else {
      alert("❌ Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("✅ Logged out!");
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Protected route */}
          <Route
            path="/quiz"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Home /> {/* 👈 You might later replace this with a Quiz component */}
              </ProtectedRoute>
            }
          />

          {/* Catch-all route → redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
