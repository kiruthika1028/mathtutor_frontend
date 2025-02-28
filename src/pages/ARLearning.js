import React from "react";
import "../styles/ARLearning.css";

const ARLearning = () => {
    const apkUrl = "https://drive.google.com/uc?export=download&id=1T16hrH2BCz0Lv2Txc2cuBI_Ve5JSlcG8";

    const handleDownload = () => {
        window.location.href = apkUrl; // Trigger download
    };

    return (
        <div className="ar-container">
            <h1>Experience Math in Augmented Reality! 🚀</h1>
            <p>Enhance your learning with interactive 3D math models using AR technology.</p>

            <div className="ar-section">
                <img src="/assets/ar-demo.gif" alt="AR Demo" />

                <div className="ar-info">
                    <h2>How to Use the AR App?</h2>
                    <ol>
                        <li>Click the <b>Download AR App</b> button below.</li>
                        <li>Install the APK on your Android device.</li>
                        <li>Open the app and scan math problems to see 3D models!</li>
                    </ol>

                    <button onClick={handleDownload} className="download-btn">
                        📥 Download AR App
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ARLearning;