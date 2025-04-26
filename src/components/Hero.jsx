import React from "react";
import '../styles/Hero.css'
import '../styles/ButtonCV.css'
import Avatar from "../assets/images/avatar_1.jpg"
const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/DUONG THI PHUONG THI - FRONT END - ENG.pdf';
        link.download = 'DuongThiPhuongThi_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className="home" id="home">
            <div className="hero-container">
                <h2 className="hero-title">Hi, It's Me</h2>
                <h1 className="hero-name">Duong Thi Phuong Thi</h1>
                <h3 className="text-animation">And I'm a <span></span></h3>
                <p>I am a recent graduate with one year of Front-end development experience through personal projects and internships. Skilled in web design, user experience optimization, and experienced with ReactJS and Tailwind CSS, I am passionate about creating intuitive, visually appealing web experiences and eager to contribute to innovative digital products.</p>
                {/* <button className="download-btn" onClick={handleDownload}> Download CV</button> */}
                <div className="container1">
                    <a href="#" className="button type--C" onClick={handleDownload}>
                        <div className="button__line"></div>
                        <div className="button__line"></div>
                        <span className="button__text">Download CV</span>
                        <div className="button__drow1"></div>
                        <div className="button__drow2"></div>
                    </a>
                </div>
            </div>
            <div className="hero-img">
                <img src={Avatar} alt="Profile" className="profile-pic" />
            </div>
        </section>
    );
};

export default Hero;