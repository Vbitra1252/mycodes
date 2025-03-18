import React from "react";
import "./Newui.css";

const Newui = ({ title, description, button1, button2, image }) => {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="buttons">
                    <button className="black-button">{button1}</button>
                    <button className="outline-button">{button2}</button>
                </div>
            </div>
            <div className="hero-image">
                <img src={image} alt="Clean Energy" />
            </div>
        </section>
    );
};

export default Newui;
