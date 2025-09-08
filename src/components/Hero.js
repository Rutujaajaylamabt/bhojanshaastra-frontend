import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero-container text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FFB74D, #FF8A65)",
        color: "#fff",
        padding: "50px 20px",
        position: "relative",
        textShadow: "1px 1px 8px rgba(0,0,0,0.3)",
        overflow: "hidden"
      }}
    >
      {/* Title */}
      <h1
        className="display-3 fw-bold mb-3"
        style={{
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        BhojanShaastra
      </h1>

      {/* Subtitle */}
      <p
        className="lead mb-4"
        style={{
          fontSize: "1.5rem",
          animation: "fadeIn 2s ease-in-out",
          maxWidth: "700px"
        }}
      >
        Your AI Meal Planner for Ayurveda & Indian Rituals
      </p>

      {/* Start Quiz Button */}
      <Link to="/quiz">
        <button
          className="btn btn-light btn-lg"
          style={{
            color: "#388E3C",
            fontWeight: "bold",
            padding: "12px 35px",
            borderRadius: "50px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
          }}
        >
          Start Quiz
        </button>
      </Link>

      {/* Scroll Down Hint */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "2rem",
          animation: "bounce 2s infinite",
          color: "#fff"
        }}
      >
        &#x2193;
      </div>

      {/* Optional Decorative Wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "120px",
          background: "url('https://www.transparenttextures.com/patterns/wave.png') repeat-x",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      ></div>

      {/* Keyframes for fadeIn and bounce */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-10px);}
            60% {transform: translateY(-5px);}
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
