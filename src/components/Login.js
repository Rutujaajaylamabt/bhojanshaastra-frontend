import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center px-3"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #E8F5E9, #FFF8E1)",
      }}
    >
      <div className="card shadow-lg rounded-4 p-4 p-md-5" style={{ maxWidth: "400px", width: "100%" }}>
        {/* Title */}
        <h3 className="text-center mb-2 fw-bold" style={{ color: "#388E3C" }}>
          🌿 BhojanShaastra Login
        </h3>
        <p className="text-center text-muted mb-4" style={{ fontSize: "0.95rem" }}>
          Access your personalized Ayurvedic meal planner
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              className="form-control rounded-3 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ transition: "all 0.2s" }}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group shadow-sm rounded-3 overflow-hidden">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control border-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                style={{ padding: "0.75rem 1rem" }}
              />
              <button
                type="button"
                className="btn btn-outline-secondary border-0"
                onClick={() => setShowPassword(!showPassword)}
                style={{ fontSize: "1rem" }}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-success w-100 rounded-3 mt-3 fw-bold"
            style={{
              padding: "0.65rem",
              fontSize: "1rem",
              transition: "all 0.2s",
            }}
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="d-flex justify-content-between mt-3 flex-column flex-sm-row gap-2">
          <a
            href="#"
            className="text-decoration-none text-success"
            style={{ fontSize: "0.9rem" }}
          >
            Forgot password?
          </a>
          <a
            href="/signup"
            className="text-decoration-none text-success"
            style={{ fontSize: "0.9rem" }}
          >
            Create account
          </a>
        </div>
      </div>
    </div>
  );
}
