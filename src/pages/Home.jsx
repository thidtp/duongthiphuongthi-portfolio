import { Element } from "react-scroll";
import Hero from "../components/Hero";

const Home = () => {
    return(
        <Element name="home" className="home">
            <Hero />
        </Element>
    );
};

export default Home;