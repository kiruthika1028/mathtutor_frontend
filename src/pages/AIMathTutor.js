import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/AiMathTutor.css";

const AIMathTutor = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="aimath-container">
            <h1>Welcome to AI Math Tutor</h1>
            <p>Learn math interactively with AI-powered tutoring and AR visualizations.</p>

            <div className="feature-boxes">
                <div className="feature-box">
                    <h2>AI Chatbot</h2>
                    <p>Get step-by-step solutions with our AI tutor.</p>
                    <button onClick={() => navigate('/ai-chatbot')}>Try Now</button>
                </div>
                <div className="feature-box">
                    <h2>AR Learning</h2>
                    <p>Visualize math concepts in Augmented Reality.</p>
                    <button onClick={() => navigate('/ar-learning')}>Explore AR</button>
                </div>
                <div className="feature-box">
                    <h2>Image Search</h2>
                    <p>Find and solve images using AI-powered search.</p>
                    <button onClick={() => navigate('/image-search')}>Upload Image</button>
                </div>
                <div className="feature-box">
                    <h2>Live Tutor Support</h2>
                    <p>Connect with live tutors for expert guidance.</p>
                    <button onClick={() => navigate('/live-tutor')}>Chat Now</button>
                </div>
                <div className="feature-box">
                    <h2>Geometry Solver</h2>
                    <p>Solve geometry problems instantly with AI-powered 2D diagrams!</p>
                    <button onClick={() => navigate('/performance-analysis')}>Try Now</button>
                </div>
            </div>
        </div>
    );
};

export default AIMathTutor;