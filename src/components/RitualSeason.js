import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const rituals = [
  { title: "Ekadashi", desc: "Grain-free meals recommended for inner cleansing & balance.", icon: "🌙" },
  { title: "Navratri", desc: "Light Satvik fasting foods that nurture energy & clarity.", icon: "🪔" },
  { title: "Seasonal Foods", desc: "Wholesome choices for Grishma, Varsha & Hemant seasons.", icon: "🍃" }
];

const RitualSeason = () => {
  return (
    <Container id="rituals" className="my-5 position-relative">
      {/* Decorative background */}
      <div className="ritual-bg"></div>

      <h2
        className="text-center fw-bold mb-5"
        style={{
          color: "#2E7D32",
          fontSize: "2.4rem",
          textShadow: "1px 1px 6px rgba(0,0,0,0.15)",
          zIndex: 1,
          position: "relative"
        }}
      >
        🌿 Ritual & Seasonal Guidance
      </h2>

      <Row className="g-4">
        {rituals.map((ritual, idx) => (
          <Col md={4} key={idx}>
            <Card className="ritual-card h-100 text-center border-0 shadow-lg">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="ritual-icon mb-3">{ritual.icon}</div>
                <Card.Title
                  className="fw-bold"
                  style={{ color: "#388E3C", fontSize: "1.3rem" }}
                >
                  {ritual.title}
                </Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "0.95rem" }}>
                  {ritual.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style>
        {`
          /* Background leaf pattern */
          .ritual-bg {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: url('https://www.transparenttextures.com/patterns/leaf.png') repeat;
            opacity: 0.05;
            pointer-events: none;
            animation: moveBg 25s linear infinite;
            z-index: 0;
          }
          @keyframes moveBg {
            0% { background-position: 0 0; }
            100% { background-position: 500px 0; }
          }

          /* Ritual card */
          .ritual-card {
            border-radius: 20px;
            background: linear-gradient(135deg, #E8F5E9, #C8E6C9);
            transition: transform 0.45s ease, box-shadow 0.45s ease;
            position: relative;
            overflow: hidden;
          }
          .ritual-card:hover {
            transform: translateY(-12px) scale(1.05) rotate(-1deg);
            box-shadow: 0 20px 45px rgba(76, 175, 80, 0.35);
          }

          /* Ritual icon with float + glow */
          .ritual-icon {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            background: linear-gradient(135deg, #4CAF50, #66BB6A);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.2rem;
            color: #fff;
            box-shadow: 0 6px 18px rgba(76, 175, 80, 0.4);
            animation: float 3s ease-in-out infinite;
            transition: transform 0.4s, box-shadow 0.4s;
          }
          .ritual-icon:hover {
            transform: scale(1.2) rotate(10deg);
            box-shadow: 0 10px 25px rgba(46, 125, 50, 0.5);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          /* Responsive tweaks */
          @media (max-width: 576px) {
            .ritual-icon { width: 60px; height: 60px; font-size: 1.8rem; }
            .ritual-card { margin-bottom: 20px; }
          }
        `}
      </style>
    </Container>
  );
};

export default RitualSeason;
