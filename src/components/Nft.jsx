import React, { useState } from "react";
import "./nft.css";

const Nft = ({ owner, creator, image, priceEth, priceUsd, ownerAvatar, creatorAvatar }) => {
    const [isHighlighted, setIsHighlighted] = useState(false);

    const toggleHighlight = () => {
        setIsHighlighted(!isHighlighted);
    };

    return (
        <div
            className={`nft-card ${isHighlighted ? "highlighted" : ""}`}
            onClick={toggleHighlight}
        >
            <div className="nft-header">
                <div className="owner">
                    <img src={ownerAvatar} alt="Owner Avatar" className="avatar" />
                    <p>Owned by <span>{owner}</span></p>
                </div>
                <div className="creator">
                    <img src={creatorAvatar} alt="Creator Avatar" className="avatar" />
                    <p>Created by <span>{creator}</span></p>
                </div>
            </div>

            <img src={image} alt="NFT" className="nft-image" />

            <div className="nft-details">
                <p>Price: <strong>ETH {priceEth} - X1</strong></p>
                <p className="price-usd">(${priceUsd})</p>
            </div>

            <div className="nft-actions">
                <button className="view-history">📖 View history</button>
                <button className="buy-now">Buy Now</button>
            </div>
        </div>
    );
};

export default Nft;
