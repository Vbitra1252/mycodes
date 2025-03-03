// // // // // // // // import Notes from "./components/Notes";

// // // // // // // // function App() {
// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <Notes />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default App;

// // // // // // // // //  import Cart from './components/Cart'; // Ensure the import matches the file name

  
// // // // // // // // // const App = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h1>Cart</h1>
// // // // // // // // //       <Cart />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default App;
// // // // // // // // // // const App = () => {



// // // // // // // // // //   const arr = [
// // // // // // // // // //     { title: "Html" },
// // // // // // // // // //     {
// // // // // // // // // //       title: "CSS"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Js"
// // // // // // // // // //     },

// // // // // // // // // //     {
// // // // // // // // // //       title: "Nodejs"
// // // // // // // // // //     },

// // // // // // // // // //     {
// // // // // // // // // //       title: "MogoDb"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "reactjs"
// // // // // // // // // //     }


// // // // // // // // // //   ]





// // // // // // // // // //   return (
// // // // // // // // // //     //   <div className='Main'>
// // // // // // // // // //     //     {

// // // // // // // // // //     // arr.map((item , index) => {
// // // // // // // // // //     //  return (
// // // // // // // // // //     //    <MyCard key = {index} title = {item.title} />
// // // // // // // // // //     //   )
// // // // // // // // // //     // })
// // // // // // // // // //     //   }

// // // // // // // // // //     <Counter />

// // // // // // // // // //     // </div>

// // // // // // // // // //   )

// // // // // // // // // // }
// // // // // // // // // import React from 'react';
// // // // // // // // // import './App.css';
// // // // // // // // // import About from './pages/About';
// // // // // // // // // import Home from './pages/Home';
// // // // // // // // // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // // // // // // // // function house() {
// // // // // // // // //   return <h1>Home Page</h1>;
// // // // // // // // // }
// // // // // // // // // function Abhi() {
// // // // // // // // //   return <h1>About Page</h1>;
// // // // // // // // // }
// // // // // // // // // function App() {
// // // // // // // // //   return (
// // // // // // // // //     <Router>
// // // // // // // // //       <nav>
// // // // // // // // //         <Link to="/">Home</Link>
        
// // // // // // // // //         <Link to="/about">About</Link>
// // // // // // // // //       </nav>
// // // // // // // // //       <Routes>
// // // // // // // // //         <Route path="/" element={<Home />} />
// // // // // // // // //         <Route path="/about" element={<About />} />
// // // // // // // // //       </Routes>
// // // // // // // // //     </Router>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // import React from "react";
// // // // // // // import PropertyCard from "./components/Real";


// // // // // // // function App() {
// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h1><u>Real Estate Listings</u></h1>
      
// // // // // // //       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
// // // // // // //         <PropertyCard
// // // // // // //           image="https://th.bing.com/th/id/R.e21fbaa4f853d265bacf12a86a56df3a?rik=HSKDow7GwDx9Ig&riu=http%3a%2f%2f2.bp.blogspot.com%2f-gngSGm5OXxc%2fURSSA6EXySI%2fAAAAAAAAKkc%2fW82OY3EZuAc%2fs1600%2fmukesh%2bambani%2bhouse%2bantelina.jpg&ehk=hphm%2fzSa%2fCyG0iWOIiFb7yDKnXQkFJL3%2fsZdyVvQVPo%3d&risl=&pid=ImgRaw&r=0"
// // // // // // //           address="	Altamount Road, Cumballa Hill, Mumbai"
// // // // // // //           price="$2 billion"
// // // // // // //           owner= "Mukesh Ambani"
// // // // // // //         />
// // // // // // //         <PropertyCard
// // // // // // //           image="https://knewz.com/wp-content/uploads/2020/03/im-154006.jpg?w=640"
// // // // // // //           address="12 Indian Creek Island Road, Indian Creek, Florida"
// // // // // // //           price="$150M"
// // // // // // //           owner= "Jeff Bezos"
// // // // // // //         />
// // // // // // //         <PropertyCard
// // // // // // //           image="https://www.omnihomeideas.com/wp-content/uploads/2023/12/Elon-Musk-House-in-Los-Angeles.webp"
// // // // // // //           address="2232 Westridge Rd, Los Angeles, CA 90049, United States"
// // // // // // //           price="$3.7 million"
// // // // // // //           owner= "Elon Musk"
// // // // // // //         />

// // // // // // //         <PropertyCard
// // // // // // //           image="https://th.bing.com/th/id/OIP.p4Pmi841X9eRPfGhY84SngHaDs?w=336&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// // // // // // //           address="2914 Carmel St, Palo Alto, CA 94306, United States"
// // // // // // //           price="$30 million"
// // // // // // //           owner="Larry Page"
// // // // // // //         />
// // // // // // //         <PropertyCard
// // // // // // //           image="https://th.bing.com/th/id/OIP.A0a11KphIPcAtlTP3Ri2WAHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// // // // // // //           address="10 Kensington Palace Gardens, London W8 4QP, United Kingdom"
// // // // // // //           price="£200 million"
// // // // // // //           owner="Lakshmi Mittal"
// // // // // // //         />
// // // // // // //         <PropertyCard
// // // // // // //           image="https://th.bing.com/th/id/OIP.e6qNYLySVim-9zArtWXxqQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// // // // // // //           address="Fairfield Pond, Sagaponack, New York, United States"
// // // // // // //           price="$248 million"
// // // // // // //           owner="Ira Rennert"
// // // // // // //         />


// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default App;
// // // // // // import React from "react";
// // // // // // import Calc from "./components/Calc";

// // // // // // function App() {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <Calc />
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;
// // // // // import React from "react";
// // // // // import Customers from "./components/Customers";

// // // // // const App = () => {
// // // // //   return (
// // // // //     <div style={{ display: "flex", justifyContent: "center", padding: "20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
// // // // //       <Customers />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;
// // // // import Prod from "./components/Prod";
// // // // import "./components/Prod.css";

// // // // function App() {
// // // //   return (
// // // //     <div>
// // // //       <Prod />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;

// // // import React from "react";
// // // import Reven from "./components/Reven";

// // // function App() {
// // //   return (
// // //     <div>
// // //       <Reven />
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React from "react";
// // import Nft from "./components/Nft";

// // function App() {
// //   return (
// //     <div style={{ display: "flex", gap: "20px", justifyContent: "center", padding: "20px" }}>
// //       <Nft
// //         owner="Alice"
// //         creator="Charlie"
// //         image="https://th.bing.com/th/id/OIP.n1pUhmDb3T-b5gcJJXg7JwHaHb?w=195&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// //         priceEth="5.65"
// //         priceUsd="10,344"
// //         ownerAvatar="https://th.bing.com/th/id/OIP.svC2UhLTwdStt92M-nARpgHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// //         creatorAvatar="https://th.bing.com/th/id/OIP.HD5V-QXgzFsy74dwEEf7OAHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// //         highlighted={true}
// //       />

// //       <Nft
// //         owner="Eve"
// //         creator="Bob"
// //         image="https://th.bing.com/th/id/OIP.XSZTz0u_q9X67NTuGjh60AHaHd?w=197&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// //         priceEth="4.65"
// //         priceUsd="8,709.64"
// //         ownerAvatar="https://th.bing.com/th/id/OIP.bg06IzHdiwKutVH9y_IogAHaHa?w=201&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// //         creatorAvatar="https://th.bing.com/th/id/OIP.ysE0_J9by0-1C9uI_6KpIAHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// //         highlighted={false}
// //       />
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import CartItem from "./components/Item";

// const App = () => {
//   return (
//     <div>
//       <CartItem
//         image="https://ts2.mm.bing.net/th?id=OIP.qAKSW5e1S2NdhIFDm2HQUgHaFM&pid=15.1"
//         title="Nike Air Pegasus"
//         subtitle="Your workhorse with wing returns."
//         price={180}
//         bgColor="#fdebed"
//       />
//       <CartItem
//         image="https://ts1.mm.bing.net/th?id=OIP.NmYRVtbQz_RHmnwoATyrFgHaFM&pid=15.1"
//         title="Nike ZoomX"
//         subtitle="The Nike zoomX vaporfly next% clears."
//         price={320}
//         bgColor="#f0f4f8"
//       />
//     </div>
//   );
// };

// export default App;
import React from "react";
import Trans from "./components/Trans";

const transactionsData = [
  { cardNumber: "4920", cardType: "MasterCard", cardCategory: "Credit", cardImage: "https://th.bing.com/th?id=OIP.zy_ViOnhIj5vw5uveqrQ5gHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", date: "Jun 24, 2023", time: "10:00 am", status: "Verified", amount: 2890.00 },
  { cardNumber: "4230", cardType: "Visa", cardCategory: "Debit", cardImage: "https://th.bing.com/th?id=OIP.ygZGQKeZ0aBwHS7e7wbJVgHaDA&w=350&h=142&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", date: "Jun 20, 2023", time: "11:00 am", status: "Rejected", amount: -49.00 },
  { cardNumber: "5510", cardType: "Visa", cardCategory: "Credit", cardImage: "https://th.bing.com/th?id=OIP.ygZGQKeZ0aBwHS7e7wbJVgHaDA&w=350&h=142&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", date: "Jun 19, 2023", time: "2:00 pm", status: "Pending", amount: -80.00 },
  { cardNumber: "0983", cardType: "American Express", cardCategory: "Debit", cardImage: "https://th.bing.com/th?id=OIP.UIALrvxQUDLKhOUCebAsqAHaEF&w=336&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", date: "Jun 18, 2023", time: "11:00 am", status: "Verified", amount: -30.00 },
  { cardNumber: "4443", cardType: "MasterCard", cardCategory: "Credit", cardImage: "https://th.bing.com/th?id=OIP.zy_ViOnhIj5vw5uveqrQ5gHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", date: "Jun 17, 2023", time: "10:00 am", status: "Verified", amount: 1500.00 },
  { cardNumber: "7635", cardType: "Visa", cardCategory: "Debit", cardImage: "https://th.bing.com/th?id=OIP.ygZGQKeZ0aBwHS7e7wbJVgHaDA&w=350&h=142&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", date: "Jun 14, 2023", time: "9:00 am", status: "Rejected", amount: -200.00 },
];

const App = () => {
  return (
    <div>
      <Trans transactions={transactionsData} />
    </div>
  );
};

export default App;

