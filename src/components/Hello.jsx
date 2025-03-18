import React from "react";
import { Link } from "react-router-dom";
import "./Hello.css";

const Hello = () => {
    return (
        <nav className="navbar">
            <h2 className="logo">AeroVolt</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><button className="contact-button">Contact Us</button></li>
            </ul>
        </nav>
    );
};

export default Hello;
