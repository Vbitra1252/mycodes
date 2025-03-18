import HeroSection from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
    return (
        <div>
            <HeroSection
                title="MUSHROOM"
                description="Mushrooms are edible fungi that can provide several important nutrients."
                imgSrc="/mushroom.png"
                btn1Text="Buy Now"
                btn2Text="Contact Us"
            />
            <Services />
        </div>
    );
};

export default Home;
