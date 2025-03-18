import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Shopping</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
