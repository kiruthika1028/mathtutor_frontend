import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import MainPage from "./pages/MainPage";
import AiMathTutor from "./pages/AIMathTutor";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import AIChatbotPage from "./pages/AIChatbotPage";
import ArLearning from "./pages/ARLearning";
import ImageSearch from "./pages/ImageSearch";
import LiveTutor from "./pages/LiveTutor";
import PerformanceAnalysis from "./pages/PerformanceAnalysis";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginSignup />} />
                <Route path="/home" element={<MainPage />} />
                <Route path="/ai-tutor" element={<AiMathTutor />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/ai-chatbot" element={<AIChatbotPage />} />
                <Route path="/ar-learning" element={<ArLearning />} />
                <Route path="/image-search" element={<ImageSearch />} />
                <Route path="/live-tutor" element={<LiveTutor />} />
                <Route path="/performance-analysis" element={<PerformanceAnalysis />} />
            </Routes>
        </Router>
    );
}

export default App;