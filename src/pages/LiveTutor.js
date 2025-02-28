import React, { useState } from 'react';
import '../styles/LiveTutor.css'; // Assuming you have this CSS file

const LiveTutor = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [doubt, setDoubt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically send the phone number and doubt to a backend server
        // or use a service like Twilio to send a WhatsApp message.
        alert("Your doubt has been submitted. Our tutor will contact you via WhatsApp.");
        setPhoneNumber('');
        setDoubt('');
    };

    return (
        <div className="live-tutor-container">
            <h1>Live Tutor Support</h1>
            <p>Please provide your phone number and your doubts. Our tutor will contact you through WhatsApp.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="doubt">Your Doubt:</label>
                    <textarea
                        id="doubt"
                        value={doubt}
                        onChange={(e) => setDoubt(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit Doubt</button>
            </form>
        </div>
    );
};

export default LiveTutor;