import React from "react";
import "./Trans.css";

const Trans = ({ transactions }) => {
    return (
        <div className="transaction-container">
            <h2>Recent Transactions</h2>
            <p className="subheading">Transactions overview</p>
            <table>
                <thead>
                    <tr>
                        <th>Card</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Amount ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((txn, index) => (
                        <tr key={index}>
                            <td className="card-info">
                                <img src={txn.cardImage} alt={txn.cardType} className="card-img" />
                                *{txn.cardNumber}
                                <span className="card-type">{txn.cardCategory}</span>
                            </td>
                            <td>{txn.date} <br /> {txn.time}</td>
                            <td className={`status ${txn.status.toLowerCase()}`}>{txn.status}</td>
                            <td className={txn.amount > 0 ? "positive" : "negative"}>{txn.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Trans;
