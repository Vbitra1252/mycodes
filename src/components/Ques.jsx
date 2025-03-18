import { useState } from "react";
import "./Ques.css";

const Ques = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-container">
            <div className={`faq-question ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span className="icon">💬</span>
                <b>Question:</b> "{question}"
                <span className="arrow">{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && <div className="faq-answer"><b>Answer:</b> {answer}</div>}
        </div>
    );
};

export default Ques;
