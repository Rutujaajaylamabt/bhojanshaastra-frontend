import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaSeedling, FaAppleAlt, FaStar, FaSun, FaWater } from "react-icons/fa";
import Features from "./Features";
import RitualSeason from "./RitualSeason";

const Home = () => {
  const floatingIcons = [FaLeaf, FaSeedling, FaAppleAlt, FaStar, FaSun, FaWater];

  // Generate 100 floating icons for whole-page effect
  const floatingItems = [...Array(100)].map((_, i) => {
    const Icon = floatingIcons[i % floatingIcons.length];
    const size = 15 + Math.random() * 35;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = 15 + Math.random() * 15;
    const rotate = Math.random() * 360;

    return (
      <Icon
        key={i}
        className="floating-item"
        style={{
          left: `${left}%`,
          fontSize: `${size}px`,
          color: "rgba(100, 100, 100, 0.55)",
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  });

  const featuresData = [
    { icon: "🧘", title: "Mind-Body Balance", desc: "Meals crafted to align with your Prakriti and lifestyle." },
    { icon: "🕉️", title: "Ritual Friendly", desc: "Supports fasting days, Navratri, and other Hindu rituals." },
    { icon: "📅", title: "Seasonal Meals", desc: "Meals that match the current season for optimal health." },
    { icon: "🍛", title: "Personalized Plans", desc: "Satvik, Rasayana, or digestive-light meals tailored for you." },
  ];

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Floating Icons for whole page */}
      <div className="animated-icons">{floatingItems}</div>

      {/* Hero Section */}
      <div
        className="home-container"
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "linear-gradient(135deg, #C8FACC, #B2F7B0, #FFF7C0)",
          position: "relative",
          fontFamily: "'Poppins', sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "60px 20px",
          color: "#222",
          zIndex: 1,
        }}
      >
        <h1
          className="vedahar-title"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            fontWeight: "900",
            background: "linear-gradient(90deg, #2E7D32, #4CAF50, #FFD700, #FFA000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "20px",
            animation: "floatText 4s ease-in-out infinite",
          }}
        >
          🌿 VedAahar
        </h1>

        <div
          style={{
            width: "120px",
            height: "4px",
            background: "linear-gradient(90deg, #4CAF50, #FFD700)",
            margin: "10px auto 30px",
            borderRadius: "2px",
            animation: "lineSlide 2s infinite alternate",
          }}
        ></div>

        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            maxWidth: "700px",
            lineHeight: "1.8",
            color: "#4E342E",
            animation: "fadeInUp 2s ease-in-out",
          }}
        >
          Your{" "}
          <span
            style={{
              fontWeight: "700",
              background: "linear-gradient(90deg, #2E7D32, #4CAF50, #FFD700, #FFA000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI Meal Planner
          </span>{" "}
          inspired by Ayurveda & Indian Rituals ✨
        </p>

        <Link to="/quiz">
          <button
            style={{
              background: "linear-gradient(135deg, #2E7D32, #6D4C41)",
              color: "#fff",
              borderRadius: "50px",
              padding: "14px 40px",
              fontSize: "1.2rem",
              fontWeight: "600",
              boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              transition: "all 0.3s ease",
              marginTop: "30px",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.08)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            🚀 Start Quiz
          </button>
        </Link>
      </div>

      {/* Features & Ritual Sections */}
      <Features />
      <RitualSeason />

      <style>
        {`
          .animated-icons {
            position: fixed;  
            top: 0; left: 0;
            width: 100%; height: 100%;
            overflow: hidden;
            z-index: 0;
            pointer-events: none; 
          }

          .floating-item {
            position: absolute;
            bottom: -60px;
            animation-name: floatUp;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          @keyframes floatUp {
            0% { transform: translateY(0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.3; }
            50% { opacity: 0.6; }
            100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(25px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes lineSlide {
            0% { transform: scaleX(0.5); }
            100% { transform: scaleX(1); }
          }

          @keyframes floatText {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }

          @media (max-width: 768px) {
            .home-container {
              padding: 40px 15px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
