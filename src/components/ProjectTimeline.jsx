import React from "react";
import "../styles/Pro.css";
import { projectData } from "../data/ProjectData";

const ProjectTimeline = () => {
    const [expandedPro, setExpandedPro] = React.useState(null);
    const handleToggle1 = (index) => {
        setExpandedPro(expandedPro === index ? null : index);
    }
    return (
        <section className="projects" id="projects">
            <h1 className="project-title">Projects</h1>
            <div className="pro-timeline-items">
                {projectData.map((pro, index) => (
                    <div key={index} className="pro-timeline-item">
                        <div className="pro-timeline-dot"></div>
                        <div className="pro-timeline-date">{pro.year}</div>
                        <div className="pro-timeline-content">
                            {pro.company && (
                                <h3 className="pro-content-title">Company: {pro.company}</h3>
                            )}
                            <div className="project-content">
                                <h4 className="pro-content-title1">Project: {pro.name}</h4>
                                <p><strong>Description:</strong> {pro.description}</p>
                                <p><strong>Role:</strong> {pro.role}</p>
                                <p><strong>Frontend:</strong> {pro.frontend}</p>
                                <p><strong>Backend:</strong> {pro.backend}</p>
                            </div>
                            {pro.contributions && pro.contributions.length > 0 && (
                                <div>
                                    {expandedPro === index && (
                                        <div className="pro-extra-content">
                                            <p><strong>Contributions:</strong></p>
                                            <ul>
                                                {pro.contributions.map((contribution, idx) => (
                                                    <li key={idx}>{contribution}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {/* <button className="pro-view-more-btn" onClick={() => handleToggle1(index)}>
                                        {expandedPro === index ? "View Less" : "View More"}
                                    </button>  */}
                                    <button
                                    className="pro-view-more-btn"
                                        onClick={() => handleToggle1(index)}
                                    >
                                        <strong>{expandedPro === index ? "View Less" : "View More"}</strong>
                                        <div id="container-stars">
                                            <div id="stars"></div>
                                        </div>
                                        <div id="glow">
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectTimeline;
