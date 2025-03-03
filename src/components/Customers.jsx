import React from "react";
import "./Customers.css";

const customersData = [
    { name: "Neil Sims", email: "email@windster.com", amount: "$320", img: "https://i.pravatar.cc/40?img=1" },
    { name: "Bonnie Green", email: "email@windster.com", amount: "$3467", img: "https://i.pravatar.cc/40?img=2" },
    { name: "Michael Gough", email: "email@windster.com", amount: "$67", img: "https://i.pravatar.cc/40?img=3" },
    { name: "Lana Byrd", email: "email@windster.com", amount: "$367", img: "https://i.pravatar.cc/40?img=4" },
    { name: "Thomes Lean", email: "email@windster.com", amount: "$2367", img: "https://i.pravatar.cc/40?img=5" }
];

const Customers = () => {
    return (
        <div className="customers-card">
            <div className="customers-header">
                <h2>Latest Customers</h2>
                <a href="#" className="view-all">View all</a>
            </div>
            <ul className="customers-list">
                {customersData.map((customer, index) => (
                    <li key={index} className="customer-item">
                        <img src={customer.img} alt={customer.name} className="customer-img" />
                        <div className="customer-details">
                            <p className="customer-name">{customer.name}</p>
                            <p className="customer-email">{customer.email}</p>
                        </div>
                        <p className="customer-amount">{customer.amount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Customers;
