import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaClipboardList, FaUtensils, FaLeaf } from "react-icons/fa";

const QuizPreview = ({ isLoggedIn, onStartQuiz }) => {
  return (
    <Container id="quiz" className="my-5">
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#2E7D32", fontSize: "2rem" }}
      >
        🌿 Prakriti Quiz
      </h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm quiz-card">
            <Card.Body>
              <div className="icon-circle">
                <FaClipboardList size={30} />
              </div>
              <Card.Title>
                <Badge bg="success" className="me-2">1</Badge> Take the Quiz
              </Card.Title>
              <Card.Text className="text-muted">
                Answer 20–25 simple questions to discover if you are Vata, Pitta, or Kapha.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm quiz-card">
            <Card.Body>
              <div className="icon-circle">
                <FaUtensils size={30} />
              </div>
              <Card.Title>
                <Badge bg="success" className="me-2">2</Badge> Get Meal Plan
              </Card.Title>
              <Card.Text className="text-muted">
                Receive personalized Ayurvedic meal recommendations tailored to your Prakriti.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm quiz-card">
            <Card.Body>
              <div className="icon-circle">
                <FaLeaf size={30} />
              </div>
              <Card.Title>
                <Badge bg="success" className="me-2">3</Badge> Stay Balanced
              </Card.Title>
              <Card.Text className="text-muted">
                Follow seasonal & ritual-based suggestions to maintain body–mind harmony.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button
          variant="success"
          size="lg"
          onClick={onStartQuiz}
          disabled={!isLoggedIn} // 🔒 Restrict if not logged in
        >
          {isLoggedIn ? "✨ Start Quiz" : "🔒 Login to Start Quiz"}
        </Button>
      </div>

      {/* Extra Styling */}
      <style>
        {`
          .quiz-card {
            border-radius: 15px;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .quiz-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 16px rgba(76, 175, 80, 0.25);
          }
          .icon-circle {
            width: 60px;
            height: 60px;
            margin: 0 auto 15px;
            border-radius: 50%;
            background: linear-gradient(135deg, #A5D6A7, #66BB6A);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
        `}
      </style>
    </Container>
  );
};

export default QuizPreview;
