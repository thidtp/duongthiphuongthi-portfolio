import React from "react";
import '../styles/Edu.css'
import { educationData } from "../data/EducationData";

const EducationTimeline = () => {
    const [expanded, setExpanded] = React.useState(null);
    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    }

    return (
        <section className="education" id="education">
            <h1 className="edu-title">Education</h1>
            <div className="timeline-items">
                {educationData.map((edu, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">{edu.year}</div>
                        <div className="timeline-content">
                            <h3 className="content-title">{edu.title}</h3>
                            <div className="content-school">
                                {edu.logo && <img src={edu.logo} className="content-logo" alt="Logo" />}
                                {edu.school && <p className="content-title1">{edu.school}</p>}
                            </div>
                            {edu.degree && <p>{edu.degree}</p>}
                            {edu.classification && <p>{edu.classification}</p>}
                            {edu.awards.length > 0 && (
                                <div className="content-award">
                                    {edu.awards.map((award, idx) => (
                                        <p key={idx}>{award}</p>
                                    ))}
                                </div>
                            )}
                            {expanded === index && (
                                <div className="extra-content">
                                    {edu.image && <img src={edu.image} className="content-img" alt="Award Image" />}
                                </div>
                            )}
                            {edu.image && (
                                <button
                                    className="view-more-btn"
                                    onClick={() => handleToggle(index)}
                                >
                                    <strong>{expanded === index ? "View Less" : "View More"}</strong>
                                    <div id="container-stars">
                                        <div id="stars"></div>
                                    </div>
                                    <div id="glow">
                                        <div className="circle"></div>
                                        <div className="circle"></div>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationTimeline;
