import React, { useState, useRef } from 'react';
import '../styles/Geometry.css'; // Import the CSS file

const PerformanceAnalysis = () => {
    const [question, setQuestion] = useState('');
    const [error, setError] = useState('');
    const canvasRef = useRef(null);

    const handleSolve = () => {
        const questionLower = question.toLowerCase();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Set canvas size
        canvas.width = 300;
        canvas.height = 300;

        // Clear previous drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        setError("");

        if (questionLower.includes("triangle")) {
            drawTriangle(ctx);
        } else if (questionLower.includes("circle")) {
            drawCircle(ctx);
        } else if (questionLower.includes("square")) {
            drawSquare(ctx);
        } else {
            setError("Sorry, I don't recognize that shape.");
        }
    };

    function drawTriangle(ctx) {
        ctx.beginPath();
        ctx.moveTo(150, 50); // Top vertex
        ctx.lineTo(50, 250); // Bottom left
        ctx.lineTo(250, 250); // Bottom right
        ctx.closePath();
        ctx.fillStyle = "blue";
        ctx.fill();
    }

    function drawCircle(ctx) {
        ctx.beginPath();
        ctx.arc(150, 150, 80, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    function drawSquare(ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(75, 75, 150, 150);
    }

    return (
        <div className="aimath-container">
            <nav>
                <h1>Geometry Solver</h1>
            </nav>
            <div className="geometry-content">
                <input
                    type="text"
                    id="question"
                    placeholder="Enter a shape (e.g., Draw a triangle)"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button id="solveButton" onClick={handleSolve}>Solve</button>
                {error && <p className="error">{error}</p>}
                <div className="canvas-container">
                    <canvas ref={canvasRef} id="canvas"></canvas>
                </div>
            </div>
        </div>
    );
};

export default PerformanceAnalysis;