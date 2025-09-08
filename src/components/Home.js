import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import RitualSeason from "./RitualSeason";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const featuresData = [
    { icon: "🧘", title: "Mind-Body Balance", desc: "Meals crafted to align with your Prakriti and lifestyle." },
    { icon: "🕉️", title: "Ritual Friendly", desc: "Supports fasting days, Navratri, and other Hindu rituals." },
    { icon: "📅", title: "Seasonal Meals", desc: "Meals that match the current season for optimal health." },
    { icon: "🍛", title: "Personalized Plans", desc: "Satvik, Rasayana, or digestive-light meals tailored for you." },
  ];

  const testimonialsData = [
    { text: "BhojanShaastra transformed my daily meals! I feel more energetic and healthy.", author: "Priya R." },
    { text: "The quiz helped me discover my body type and adjust my diet accordingly. Amazing app!", author: "Rohan S." },
    { text: "I love how it aligns meals with seasons and rituals. Very thoughtful and practical.", author: "Anjali K." },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Quick Benefits Section */}
      <section className="py-5" style={{ backgroundColor: "#E8F5E9" }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#2E7D32", fontWeight: "700" }}>
            Why Choose BhojanShaastra?
          </h2>
          <Row className="justify-content-center g-4">
            {featuresData.map((feature, idx) => (
              <Col key={idx} xs={12} sm={6} md={3}>
                <div
                  className="card shadow-sm p-4 text-center h-100 feature-card"
                  style={{
                    borderRadius: "15px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
                  }}
                >
                  <h1 className="mb-3" style={{ fontSize: "3rem" }}>{feature.icon}</h1>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted">{feature.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Ritual & Seasonal Section */}
      <RitualSeason />

      {/* Testimonials Section */}
      <section className="py-5" style={{ backgroundColor: "#C8E6C9" }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#2E7D32", fontWeight: "700" }}>What Users Say</h2>
          <Row className="justify-content-center g-4">
            {testimonialsData.map((testimonial, idx) => (
              <Col key={idx} xs={12} sm={6} md={4}>
                <div
                  className="card shadow-sm p-4 h-100 testimonial-card"
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                  }}
                >
                  <p className="mb-3" style={{ fontStyle: "italic", color: "#555" }}>{testimonial.text}</p>
                  <footer className="text-muted fw-bold">- {testimonial.author}</footer>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
