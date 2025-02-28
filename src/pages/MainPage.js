import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/MainPage.css";

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* Navigation Bar */}
            <nav className="navbar">
                <button onClick={() => navigate("/home")}>Home</button>
                <button onClick={() => navigate("/about")}>About</button>
                <button onClick={() => navigate("/contact")}>Contact Us</button>
            </nav>

            {/* Main Content */}
            <div className="content">
                <h1>Master Mathematics with AI</h1>
                <p>
                    Get personalized learning, interactive exercises, and instant feedback to improve your math skills.
                </p>
                <button className="get-started-btn" onClick={() => navigate("/ai-tutor")}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default MainPage;