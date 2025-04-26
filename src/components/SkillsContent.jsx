import React from "react";
import { SkillsData } from "../data/SkillsData";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../styles/Skill.css";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const SkillsContent = () =>{
    return(
        <section className="skills" id="skills">
            <h1 className="sk-title">Skills</h1>
            <div className="skills-content">
                <div className="tech-skills">
                    <h2 className="tech-title">Technical Skills</h2>
                    <div className="tech-content">
                        {SkillsData.techSkills.map((tec, index) => (
                            <div key={index} className="skill-box">
                                <div className="tech-info">
                                    <Icon icon={tec.logo} className="tech-logo" />
                                    <span className="tech-name">{tec.name}</span>
                                </div>
                                <div className="skill-bar">
                                    <span 
                                        className={`skill-per`} 
                                        style={{
                                            width: `${tec.percent}%`,
                                            animationDelay: `${0.1 + index * 0.1}s`,
                                            background: 'linear-gradient(90deg, #4facfe, #0ACBE0)'
                                        }}
                                    >
                                        <span className="tooltip">{tec.percent}%</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pro-skills">
                    <h2 className="pro-title">Professional Skills</h2>
                    <div className="pro-content">
                        {SkillsData.proSkills.map((pro, index) => (
                            <div key={index} className="skill-item1">
                                <CircularProgressbar
                                    value={pro.percent}
                                    text={`${pro.percent}%`}
                                    styles={buildStyles({textColor: "#ffffff", pathColor: "#0ACBE0", trailColor: "rgba(255, 255, 255, 255)",textsize: "10px"})}
                                />
                                <p className="pro-name">{pro.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

};

export default SkillsContent;