import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHandHoldingHeart } from "react-icons/fa";
import "../styles/Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-wrapper">
      <Container className="text-center py-5">
        <FaHandHoldingHeart size={80} className="hand-icon mb-3" />
        <h2 className="welcome-title">Welcome to Your Emotional Jar</h2>
        <p className="welcome-text">
          Collect the moments when you feel happy or grateful,
          and revisit them whenever you need.
        </p>
        <div className="mt-4">
          <button className="custom-purple-button mx-2" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="custom-purple-button mx-2" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Welcome;
