import "./Hero.css";

const Hero = ({ title, description, imgSrc, btn1Text, btn2Text }) => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h3>100% Natural Products</h3>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="hero-buttons">
                    <button className="buy-btn">{btn1Text}</button>
                    <button className="contact-btn">{btn2Text}</button>
                </div>
            </div>
            <div className="hero-img">
                <img src={imgSrc} alt="Product" />
            </div>
        </div>
    );
};

export default Hero;
