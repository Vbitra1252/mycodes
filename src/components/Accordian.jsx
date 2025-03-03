import React, { useState } from "react"; // Import useState
import './Accordian.css'; // Ensure the CSS file is correctly named

const Accordian = () => {
    const [openIndex, setOpenIndex] = useState(null); // Initialize to null

    const items = [
        { title: 'Header 1', content: 'This is my 1st Header' },
        { title: 'Header 2', content: 'This is my 2nd Header' },
        { title: 'Header 3', content: 'This is my 3rd Header' },
    ];

    const toggleAccordian = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordian">
            {items.map((item, index) => (
                <div key={index} className="accordian-item">
                    <h3 onClick={() => toggleAccordian(index)} className="accordian-header">
                        {openIndex === index ? '-' : '+'} {item.title}
                    </h3>
                    {openIndex === index && (
                        <div className="accordian-content">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordian;