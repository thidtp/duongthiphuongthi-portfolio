import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "../styles/Header.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header = () => {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log("Đang active:", entry.target.id);
                        setActive(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.2 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
    useEffect(() => {
        setTimeout(() => {
            const projectSection = document.getElementById("projects");
            if (projectSection) {
                console.log("Chiều cao projects:", projectSection.offsetHeight);
                console.log("Vị trí top:", projectSection.getBoundingClientRect().top);
            } else {
                console.log("Không tìm thấy #projects");
            }
        }, 1000);
    }, []);
    
    return (
        <header className="header">
            <Link to="home" smooth={true} duration={500} className="logo" onClick={() => setActive("home")}>
                Portfolio.
            </Link>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <Icon icon="ic:round-menu" width="32" height="32" style={{ color: "#fff" }} />
            </div>
            <nav className={`navbar ${menuOpen ? "open" : ""}`}>
                <Link to="home" smooth={true} duration={500} className={active === "home" ? "active" : ""} onClick={() => { setActive("home"); setMenuOpen(false); }}>
                    Home
                </Link>
                <Link to="education" smooth={true} duration={500} offset={-70} className={active === "education" ? "active" : ""} onClick={() => { setActive("education"); setMenuOpen(false); }}>
                    Education
                </Link>
                <Link to="skills" smooth={true} duration={500} offset={-70} className={active === "skills" ? "active" : ""} onClick={() => { setActive("skills"); setMenuOpen(false); }}>
                    Skills
                </Link>
                <Link to="projects" smooth={true} duration={500} offset={-70} className={active === "projects" ? "active" : ""} onClick={() => { setActive("projects"); setMenuOpen(false); }}>
                    Projects
                </Link>
                <Link to="contact" smooth={true} duration={500} offset={-70} className={active === "contact" ? "active" : ""} onClick={() => { setActive("contact"); setMenuOpen(false); }}>
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;
