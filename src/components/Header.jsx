import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import '../styles/Header.css'
const Header = () =>{
    const [active, setActive] = useState("home");
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        console.log("Sections found:", sections);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, { root: null, rootMargin: "30px", threshold: 0.5 });
        document.querySelectorAll("section").forEach(section => observer.observe(section));
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);
    return (
        <header className = "header">
            <Link to="home" smooth={true} duration={500} className="logo" onClick={() => setActive("home")}>Portfolio.</Link>
            <nav className="navbar">
                <Link to="home" smooth={true} duration={500}  className={active === "home"? "active" : ""} onClick={() => setActive("home")}>Home</Link>
                <Link to="education" smooth={true} duration={500} offset={-70} className={active === "education"? "active" : ""} onClick={() => setActive("education")}>Education</Link>
                <Link to="skills" smooth={true} duration={500} offset={-70} className={active === "skills"? "active" : ""} onClick={() => setActive("skills")} >Skills</Link>
                <Link to="projects" smooth={true} duration={500} offset={-70} className={active === "projects"? "active" : ""} onClick={() => setActive("projects")} >Projects</Link>
                <Link to="contact" smooth={true} duration={500} offset={-70} className={active === "contact"? "active" : ""} onClick={() => setActive("contact")} >Contact</Link>
            </nav>
        </header>
    );
};

export default Header;