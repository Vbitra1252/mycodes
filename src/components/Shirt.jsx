// import React, { useState } from "react";
// import "./Shirt.css";

// const Shirt = ({ image, title, price, size, color }) => {
//     const [quantity, setQuantity] = useState(1);

//     const increaseQuantity = () => setQuantity(quantity + 1);
//     const decreaseQuantity = () => {
//         if (quantity > 1) setQuantity(quantity - 1);
//     };

//     return (
//         <div className="shirt">
//             <img src={image} alt={title} className="shirt-image" />
//             <div className="shirt-details">
//                 <h2>{title}</h2>
//                 <p className="shirt-price">${price.toLocaleString()}</p>
//                 <p>Size: {size}</p>
//                 <p>Color: {color}</p>
//                 <div className="quantity">
//                     <button onClick={decreaseQuantity}>-</button>
//                     <span>{quantity}</span>
//                     <button onClick={increaseQuantity}>+</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Shirt;
