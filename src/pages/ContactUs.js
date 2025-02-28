import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../styles/ContactUs.css";

const API_BASE_URL = "https://mathtutor-backendnew.onrender.com";

const ContactUs = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/feedback/submit`, formData);
            alert(response.data.message || "Feedback submitted successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            alert(error.response?.data?.message || "An error occurred while submitting feedback.");
        }
    };

    return (
        <div className="contact-container">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you! Please fill out the form below.</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <div className="button-wrapper">
                    <button type="submit">Send Message</button>
                </div>
            </form>
            <button className="back-btn" onClick={() => navigate("/home")}>
                Back to Home
            </button>
        </div>
    );
};

export default ContactUs;
