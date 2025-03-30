import React from "react";
import "../styles/Contact.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { contactData } from "../data/ContactData";

const ContactContent = () => {
    return (
        <section className="contact" id="contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-content">
                {contactData.map((contact, index) => (
                    <div key={index} className="contact-item">
                        <a href={contact.link} target="_blank" rel="noreferrer">
                            <Icon icon={contact.logo} width="32" height="32" style={{ color: "#0ACBE0" }} />
                            <span className="contact-name">{contact.name}</span>
                        </a>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactContent;