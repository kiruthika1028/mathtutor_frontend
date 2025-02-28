import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./../styles/About.css";

const About = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleGetStarted = () => {
    navigate("/ai-tutor"); // Redirect to AI Math Tutor page
  };

  return (
    <div className="about-container">
      
      
      {/* Get Started Button */}
      <button className="get-started-btn" onClick={handleGetStarted}>
        Get Started
      </button>

      <div className="why-section">
        <h2>Why Choose AI Math Tutor?</h2>
        <p>Our AI-powered tutor adapts to your learning style, provides interactive solutions, and helps you master math concepts with ease.</p>
      </div>

      {/* Feature Boxes */}
      <div className="features">
        <div className="feature-box">
          <strong>📚 Personalized Learning</strong>
          <p>Adaptive learning based on your performance.</p>
        </div>
        <div className="feature-box">
          <strong>🧩 Interactive Exercises</strong>
          <p>Interactive quizzes and problems to solve.</p>
        </div>
        <div className="feature-box">
          <strong>⚡ Instant Feedback</strong>
          <p>Immediate responses to improve learning.</p>
        </div>
        <div className="feature-box">
          <strong>🌎 24/7 Availability</strong>
          <p>Learn anytime, anywhere with AI assistance.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
