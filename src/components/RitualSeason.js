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
      <h2 className="text-center mb-4" style={{ color: "#4CAF50" }}>Ritual & Seasonal Guidance</h2>
      <Row>
        {rituals.map((ritual, idx) => (
          <Col md={4} key={idx} className="mb-3">
            <Card className="text-center" style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body>
                <h1>{ritual.icon}</h1>
                <Card.Title>{ritual.title}</Card.Title>
                <Card.Text>{ritual.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RitualSeason;
