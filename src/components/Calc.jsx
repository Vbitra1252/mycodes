// components/Calc.jsx
import React, { useState } from "react";
import "./Calc.css";

const Calc = () => {
    const [loanAmount, setLoanAmount] = useState(240000);
    const [interest, setInterest] = useState(7.143);
    const [loanTerm, setLoanTerm] = useState(30);

    const calculateEMI = () => {
        let monthlyRate = interest / 100 / 12;
        let numberOfPayments = loanTerm * 12;
        let emi =
            (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        return emi ? emi.toFixed(2) : 0;
    };

    return (
        <div className="calculator">
            <h2>Calculator</h2>
            <div className="input-group">
                <label>Loan Amount (₹)</label>
                <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label>Loan Term (years)</label>
                <select value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}>
                    <option value={30}>30-yr fixed</option>
                    <option value={20}>20-yr fixed</option>
                    <option value={15}>15-yr fixed</option>
                    <option value={10}>10-yr fixed</option>
                </select>
            </div>
            <div className="input-group">
                <label>Interest Rate (%)</label>
                <input
                    type="number"
                    value={interest}
                    step="0.01"
                    onChange={(e) => setInterest(e.target.value)}
                />
            </div>
            <div className="result">
                <h3>Monthly Payment: ₹{calculateEMI()}</h3>
            </div>
        </div>
    );
};

export default Calc;
