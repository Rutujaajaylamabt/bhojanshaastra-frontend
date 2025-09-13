import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const rituals = [
  { title: "Ekadashi", desc: "Grain-free meals recommended", icon: "🌙" },
  { title: "Navratri", desc: "Satvik fasting foods", icon: "🪔" },
  { title: "Seasonal Foods", desc: "Grishma, Varsha, Hemant meal guidance", icon: "🍃" }
];

const RitualSeason = () => {
  return (
    <Container id="rituals" className="my-5">
      <h2
        className="text-center fw-bold mb-5"
        style={{ color: "#2E7D32", fontSize: "2.25rem", textShadow: "1px 1px 6px rgba(0,0,0,0.2)" }}
      >
        🌿 Ritual & Seasonal Guidance
      </h2>
      <Row className="g-4">
        {rituals.map((ritual, idx) => (
          <Col md={4} key={idx}>
            <Card className="ritual-card h-100 text-center border-0 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="ritual-icon mb-3">
                  {ritual.icon}
                </div>
                <Card.Title className="fw-bold" style={{ color: "#388E3C", fontSize: "1.25rem" }}>
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
          .ritual-card {
            border-radius: 20px;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            background: linear-gradient(135deg, #E8F5E9, #C8E6C9);
          }
          .ritual-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 15px 30px rgba(76, 175, 80, 0.3);
          }

          .ritual-icon {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(135deg, #81C784, #4CAF50);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: #fff;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            animation: float 3s ease-in-out infinite;
          }

          .ritual-icon:hover {
            transform: scale(1.2) rotate(10deg);
            box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </Container>
  );
};

export default RitualSeason;
