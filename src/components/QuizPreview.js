import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaClipboardList, FaUtensils, FaLeaf } from "react-icons/fa";

const QuizPreview = ({ isLoggedIn, onStartQuiz }) => {
  return (
    <Container id="quiz" className="my-5">
      <h2
        className="text-center fw-bold mb-5"
        style={{
          color: "#2E7D32",
          fontSize: "2.5rem",
          textShadow: "1px 1px 8px rgba(0,0,0,0.2)",
        }}
      >
        🌿 Prakriti Quiz
      </h2>

      <Row className="g-4">
        {[{
          icon: <FaClipboardList size={30} />,
          title: "Take the Quiz",
          badge: "1",
          desc: "Answer 20–25 simple questions to discover if you are Vata, Pitta, or Kapha."
        }, {
          icon: <FaUtensils size={30} />,
          title: "Get Meal Plan",
          badge: "2",
          desc: "Receive personalized Ayurvedic meal recommendations tailored to your Prakriti."
        }, {
          icon: <FaLeaf size={30} />,
          title: "Stay Balanced",
          badge: "3",
          desc: "Follow seasonal & ritual-based suggestions to maintain body–mind harmony."
        }].map((item, idx) => (
          <Col key={idx} md={4}>
            <Card className="h-100 text-center border-0 shadow-lg quiz-card">
              <Card.Body>
                <div className="icon-circle mb-3">
                  {item.icon}
                </div>
                <Card.Title>
                  <Badge bg="success" className="me-2">{item.badge}</Badge> {item.title}
                </Card.Title>
                <Card.Text className="text-dark">
                  {item.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <Button
          variant="success"
          size="lg"
          onClick={onStartQuiz}
          disabled={!isLoggedIn}
          className="start-quiz-btn"
        >
          {isLoggedIn ? "✨ Start Quiz" : "🔒 Login to Start Quiz"}
        </Button>
      </div>

      <style>
        {`
          /* Card styling and hover effects */
          .quiz-card {
            border-radius: 20px;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            background: linear-gradient(145deg, #E8F5E9, #C8E6C9);
            position: relative;
            overflow: hidden;
          }
          .quiz-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 20px 40px rgba(76, 175, 80, 0.3);
          }

          /* Icon styling with gradient and animation */
          .icon-circle {
            width: 70px;
            height: 70px;
            margin: 0 auto 15px;
            border-radius: 50%;
            background: linear-gradient(135deg, #81C784, #4CAF50);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            transition: transform 0.4s, box-shadow 0.4s;
            animation: floatIcon 3s ease-in-out infinite;
          }
          .icon-circle:hover {
            transform: scale(1.2) rotate(10deg);
            box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
          }

          @keyframes floatIcon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          /* Start quiz button hover */
          .start-quiz-btn {
            transition: all 0.3s ease;
            padding: 0.8rem 2.5rem;
            font-size: 1.1rem;
            border-radius: 50px;
            background: linear-gradient(90deg, #66BB6A, #388E3C);
            border: none;
          }
          .start-quiz-btn:hover:not(:disabled) {
            transform: scale(1.1);
            box-shadow: 0 10px 25px rgba(76, 175, 80, 0.3);
            background: linear-gradient(90deg, #81C784, #2E7D32);
          }
        `}
      </style>
    </Container>
  );
};

export default QuizPreview;
