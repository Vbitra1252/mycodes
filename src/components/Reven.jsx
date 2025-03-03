import React from "react";
import "./reven.css";

const Reven = () => {
    return (
        <div className="dashboard">
            <div className="widget revenue">
                <h3>Revenue</h3>
                <p className="amount">$435,756</p>
                <p className="change down">↓ 16%</p>
            </div>

            <div className="widget users">
                <h3>Total Users</h3>
                <p className="amount">93,656</p>
                <p className="change up">↑ 346</p>
            </div>
        </div>
    );
};

export default Reven;
