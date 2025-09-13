import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero-container text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(-45deg, #FFB74D, #FF8A65, #FF7043, #F57C00)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 8s ease infinite",
        color: "#fff",
        padding: "50px 20px",
        position: "relative",
        textShadow: "1px 1px 8px rgba(0,0,0,0.3)",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <h1
        className="display-3 fw-bold mb-3"
        style={{
          animation: "fadeIn 1.2s ease-in-out",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        🌿 BhojanShaastra
      </h1>

      {/* Subtitle */}
      <p
        className="lead mb-4"
        style={{
          fontSize: "1.5rem",
          animation: "fadeIn 2s ease-in-out",
          maxWidth: "700px",
          lineHeight: "1.6",
        }}
      >
        Your <span style={{ fontWeight: "bold", color: "#FFD54F" }}>AI Meal Planner</span> inspired by Ayurveda & Indian Rituals ✨
      </p>

      {/* Start Quiz Button */}
      <Link to="/quiz">
        <button
          className="btn btn-lg fw-bold"
          style={{
            background: "linear-gradient(90deg, #fff, #f1f8e9)",
            color: "#2E7D32",
            padding: "14px 40px",
            borderRadius: "50px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
            transition: "all 0.4s ease",
            fontSize: "1.2rem",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
            e.target.style.background =
              "linear-gradient(90deg, #C8E6C9, #A5D6A7)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 6px 18px rgba(0,0,0,0.3)";
            e.target.style.background = "linear-gradient(90deg, #fff, #f1f8e9)";
          }}
        >
          🚀 Start Quiz
        </button>
      </Link>

      {/* Scroll Down Hint */}
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          fontSize: "2rem",
          animation: "bounce 2s infinite",
          color: "#fff",
        }}
      >
        ↓
      </div>

      {/* Decorative Wave Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "140px",
          background:
            "url('https://www.transparenttextures.com/patterns/diagonal-waves.png') repeat-x",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      ></div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-12px); }
            60% { transform: translateY(-6px); }
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
