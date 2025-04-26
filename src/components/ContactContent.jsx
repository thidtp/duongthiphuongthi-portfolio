import React from "react";
import "../styles/Contact.css";
import { Icon } from "@iconify/react";
import Avatar from "../assets/images/avatar_1.jpg";
import { contactData } from "../data/ContactData";

const ContactContent = () => {
    return (
        <section className="contact" id="contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-content">
                {contactData.map((contact, index) => (
                    <div key={index} className="card">
                        <button className="mail">
                            <Icon icon="material-symbols-light:mail-outline" width="44" height="44" />
                        </button>
                        <div className="profile-pic">
                            <img src={Avatar} alt="Avatar" />
                        </div>
                        <div className="bottom">
                            <div className="content">
                                <span className="name">{contact.name}</span>
                                <span className="about-me">{contact.about}</span>
                            </div>
                            <div className="bottom-bottom">
                                <div className="social-links-container">
                                    {contact.link.map((url, idx) => {
                                        let iconName = "";
                                        if (url.includes("linkedin")) iconName = "mdi:linkedin";
                                        else if (url.includes("facebook")) iconName = "mdi:facebook";
                                        else if (url.includes("github")) iconName = "mdi:github";
                                        else iconName = "mdi:web"; 

                                        return (
                                            <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
                                                <Icon icon={iconName} width="44" height="24" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactContent;
