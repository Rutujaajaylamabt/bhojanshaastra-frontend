import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  // Sections for Home page (scroll)
  const sections = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Rituals", id: "rituals" },
  ];

  // Smooth scroll for internal sections
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Offset for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Highlight section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120; // active in viewport
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav className="navbar navbar-expand-lg shadow-sm navbar-custom fixed-top bg-white">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🌿 VedAahar
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {/* Internal scrolling sections (Home page only) */}
            {location.pathname === "/" &&
              sections.map((sec, idx) => (
                <li className="nav-item" key={idx}>
                  <button
                    className={`nav-link btn-section ${
                      activeSection === sec.id ? "active" : ""
                    }`}
                    onClick={() => scrollToSection(sec.id)}
                  >
                    {sec.name}
                  </button>
                </li>
              ))}

            {/* External routes */}
            <li className="nav-item">
              <Link to="/quiz" className="nav-link">
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="btn btn-contact ms-2">
                Contact
              </Link>
            </li>
          </ul>

          {/* Auth buttons */}
          <div className="d-flex ms-lg-3 mt-2 mt-lg-0">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="btn btn-danger rounded-pill px-3 fw-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-success rounded-pill px-3 fw-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
