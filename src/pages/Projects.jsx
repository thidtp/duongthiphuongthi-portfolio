import { Element } from "react-scroll";
import ProjectTimeline from "../components/ProjectTimeline";

const Projects = () => {
    return(
        <Element name="projects" className="projects">
            <ProjectTimeline />
        </Element>
    );
};

export default Projects;