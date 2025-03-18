import "./Services.css";

const services = [
    { title: "Free Shipping", icon: "🚚", description: "Enjoy fast and free shipping on all orders." },
    { title: "Certified Organic", icon: "✅", description: "Our products are certified organic and chemical-free." },
    { title: "Easy Returns", icon: "🔄", description: "Easy 30-day return policy for your convenience." }
];

const Services = () => {
    return (
        <div className="services">
            <h2>We offer for you</h2>
            <div className="service-cards">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <span className="service-icon">{service.icon}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
