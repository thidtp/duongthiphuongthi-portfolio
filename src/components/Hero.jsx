import React from "react";
import '../styles/Hero.css'

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
                <p>I am a recent graduate Front-end Developer specializing in modern web interface design and user experience optimization. With internship experience and personal projects, I am eager to develop my career in Front-end programming.</p>
                <button className="download-btn" onClick={handleDownload}> Download CV</button>
                
            </div>
            <div className="hero-img">
                <img src="/src/assets/images/avatar_1.jpg" alt="Profile" className="profile-pic" />
            </div>
        </section>
    );
};

export default Hero;