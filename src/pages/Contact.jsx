import { Element } from "react-scroll";
import ContactContent from "../components/ContactContent";

const Contact = () => {
    return (
        <Element name="contact" className="contact">
            <ContactContent />
        </Element>
    );
}

export default Contact;