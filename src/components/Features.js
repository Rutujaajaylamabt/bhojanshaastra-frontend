import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const features = [
  { title: "Prakriti Detection", desc: "Discover your Ayurvedic body type: Vata, Pitta, or Kapha.", icon: "🧬" },
  { title: "Ritual Awareness", desc: "Meals aligned with Ekadashi, Navratri, Purnima & more.", icon: "🕉️" },
  { title: "Seasonal Meals", desc: "Food choices based on Grishma, Varsha, Hemant seasons.", icon: "📅" },
  { title: "Personalized Plans", desc: "Customized Satvik, Rasayana, or digestive-light meals.", icon: "🍛" }
];

const Features = () => {
  return (
    <Container id="features" className="my-5">
      <h2
        className="text-center fw-bold mb-5"
        style={{ color: "#388E3C", fontSize: "2.25rem" }}
      >
        🌟 Features
      </h2>

      <Row className="g-4">
        {features.map((feature, idx) => (
          <Col key={idx} xs={12} sm={6} lg={3}>
            <Card
              className="h-100 text-center border-0 shadow-sm feature-card"
              style={{
                borderRadius: "20px",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                cursor: "pointer",
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                {/* Icon Circle */}
                <div
                  className="feature-icon mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #81C784, #4CAF50)",
                    fontSize: "2rem",
                    color: "#fff",
                  }}
                >
                  {feature.icon}
                </div>

                <Card.Title className="fw-bold" style={{ color: "#2E7D32", fontSize: "1.2rem" }}>
                  {feature.title}
                </Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "0.95rem" }}>
                  {feature.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Extra Styling */}
      <style>
        {`
          /* Hover effect for all cards */
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(76, 175, 80, 0.25);
          }

          /* Responsive Icon Sizes */
          @media (min-width: 768px) {
            .feature-icon {
              width: 80px;
              height: 80px;
              font-size: 2.5rem;
            }
          }

          @media (max-width: 576px) {
            .feature-card {
              margin-bottom: 20px;
            }
            .feature-icon {
              width: 60px;
              height: 60px;
              font-size: 1.8rem;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Features;
