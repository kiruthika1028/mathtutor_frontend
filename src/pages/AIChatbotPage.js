import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AIChatbotPage.css';

const AIChatbotPage = () => {
    const navigate = useNavigate();
    const chatbotLink = "https://mathtutor-chatbot.onrender.com";
    const passkey = "AIzaSyDs1Q4r6swS1SNWiu_h7WzClq50f2Tmy3g"; // Replace with your actual passkey

    const handleChatbotAccess = () => {
        window.open(chatbotLink, '_blank');
    };

    return (
        <div className="chatbot-page-container">
            <h1>Hi there, welcome to the Chatbot!</h1>
            <p>Kindly copy the passkey before clicking the button:</p>
            <p className="passkey-text">{passkey}</p>
            <button className="access-chatbot-btn" onClick={handleChatbotAccess}>
                Click to Access the Chatbot
            </button>
            <button className="back-btn" onClick={() => navigate("/ai-tutor")}>
                Back to AI Tutor
            </button>
        </div>
    );
};

export default AIChatbotPage;