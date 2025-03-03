import React, { useState } from "react";
import './Cart.css';

const Cart = () => {
    const [items, setItems] = useState([
        { id: 1, name: "A SNAZZY ITEM", quantity: 2, price: 42.68 },
        { id: 2, name: "A FANCY ITEM", quantity: 1, price: 12.84 },
        { id: 3, name: "A FINE ITEM", quantity: 1, price: 8.80 },
    ]);

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div className="cart-container">
            {items.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="flex items-center gap-4">
                        <div className="item-image"></div>
                        <div>
                            <p className="item-info">{item.name}</p>
                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="item-price">${item.price.toFixed(2)}</p>
                        <div className="flex gap-2 mt-2">
                            <button className="button edit-button">EDIT</button>
                            <button className="button remove-button" onClick={() => removeItem(item.id)}>REMOVE</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
