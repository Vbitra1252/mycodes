import React from "react";
import "./Real.css"; 

const PropertyCard = ({ image, address, price, owner}) => {
    return (
        <div className="card">
            {/* Property Image */}
            <img src={image} alt="Property" className="property-image" />

            {/* Property Details */}
            <div className="details">
                <h2>{address}</h2>
                <p className="price">{price}</p>

                {/* Score */}
                <div className="owner">Owner: {owner}</div>
            </div>
        </div>
    );
};

export default PropertyCard;
