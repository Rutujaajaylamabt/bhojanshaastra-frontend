import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      setTimeout(() => setError(false), 500); // reset after shake
      return;
    }
    onLogin(email.trim(), password);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center px-3"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #a8e6cf, #dcedc1, #ffd3b6, #ffaaa5, #ff8c94, #88d8b0)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 5s linear infinite",
      }}
    >
      <style>
        {`
          /* Animated Background */
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            25% {background-position: 50% 100%;}
            50% {background-position: 100% 50%;}
            75% {background-position: 50% 0%;}
            100% {background-position: 0% 50%;}
          }

          /* Floating Card Animation */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }

          /* Shake Animation for Errors */
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
          }

          /* Input Focus Glow */
          .form-control:focus {
            border-color: #43a047 !important;
            box-shadow: 0 0 12px rgba(67, 160, 71, 0.6) !important;
            transition: all 0.3s ease;
          }

          /* Login Button Pulse */
          .btn-success {
            background: linear-gradient(90deg, #388E3C, #66BB6A);
            border: none;
            transition: all 0.3s ease;
          }
          .btn-success:hover {
            background: linear-gradient(90deg, #2E7D32, #43A047);
            box-shadow: 0 10px 22px rgba(56, 142, 60, 0.4);
            transform: translateY(-2px) scale(1.02);
            animation: pulse 1.2s infinite;
          }
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(56, 142, 60, 0.6); }
            70% { box-shadow: 0 0 0 10px rgba(56, 142, 60, 0); }
            100% { box-shadow: 0 0 0 0 rgba(56, 142, 60, 0); }
          }

          /* Password Toggle Hover */
          .btn-outline-secondary:hover {
            background-color: #f1f8e9;
            transition: all 0.3s ease;
          }

          /* Glowing Border Animation */
          @keyframes borderGlow {
            0% { border-color: #ff8c94; box-shadow: 0 0 15px #ff8c94; }
            25% { border-color: #88d8b0; box-shadow: 0 0 15px #88d8b0; }
            50% { border-color: #ffd3b6; box-shadow: 0 0 15px #ffd3b6; }
            75% { border-color: #a8e6cf; box-shadow: 0 0 15px #a8e6cf; }
            100% { border-color: #ffaaa5; box-shadow: 0 0 15px #ffaaa5; }
          }

          .glow-card {
            animation: float 6s ease-in-out infinite, borderGlow 5s linear infinite;
          }
        `}
      </style>

      <div
        className={`card shadow-lg rounded-4 p-4 p-md-5 ${error ? "shake" : "glow-card"}`}
        style={{
          maxWidth: "420px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(15px)",
          border: "2px solid transparent",
        }}
      >
        {/* Title */}
        <div className="text-center mb-4">
          <h3 className="fw-bold" style={{ color: "#2E7D32" }}>
            🌿 BhojanShaastra Login
          </h3>
          <p className="text-muted" style={{ fontSize: "0.95rem" }}>
            Access your personalized Ayurvedic meal planner
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="form-control rounded-3 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <div className="input-group shadow-sm rounded-3 overflow-hidden">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="form-control border-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                required
                style={{ padding: "0.75rem 1rem" }}
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="btn btn-outline-secondary border-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-success w-100 rounded-3 mt-3 fw-bold"
            style={{ padding: "0.65rem", fontSize: "1rem" }}
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-3 text-muted">or</div>

        {/* Extra Links */}
        <div className="d-flex justify-content-between flex-column flex-sm-row gap-2">
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
