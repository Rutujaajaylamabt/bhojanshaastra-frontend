import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm"
      style={{
        backgroundColor: "#FFF8E1",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container">
        {/* Brand */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: "#4CAF50", fontSize: "1.5rem" }}
        >
          BhojanShaastra
        </Link>

        {/* Mobile Hamburger */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {[ 
              { name: "Home", path: "/" },
              { name: "Features", path: "/features" },
              { name: "Rituals", path: "/rituals" },
              { name: "Quiz", path: "/quiz" },
            ].map((link, idx) => (
              <li className="nav-item" key={idx}>
                <NavLink
                  className={({ isActive }) =>
                    "nav-link px-3" + (isActive ? " active fw-bold text-success" : "")
                  }
                  to={link.path}
                  end={link.path === "/"} // exact for home
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Contact Button */}
            <li className="nav-item my-2 my-lg-0">
              <Link
                to="/contact"
                className="btn btn-outline-success fw-bold"
                style={{
                  borderRadius: "25px",
                  padding: "6px 18px",
                  marginLeft: "10px",
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Login / Logout Button */}
          <div className="d-flex ms-lg-3 mt-2 mt-lg-0">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="btn btn-danger fw-bold"
                style={{ borderRadius: "25px", padding: "6px 18px" }}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-success fw-bold"
                style={{ borderRadius: "25px", padding: "6px 18px" }}
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