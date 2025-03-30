import { Element } from "react-scroll";
import  EducationTimeline from "../components/EducationTimeline";

const Educations = () => {
    return(
        <Element name="education" className="education">
            <EducationTimeline />
        </Element>
    );
};

export default Educations;