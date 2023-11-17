import React from "react";
import "../../styling/Footer.css";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/footerLogo.png";
import {BsInstagram} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

const socialLinks = [
    {
        path: "https://www.youtube.com",
        icon: <BsYoutube className="socialIcons"/>
    },
    {
        path: "https://github.com",
        icon: <BsGithub className="socialIcons"/>
    },
    {
        path: "https://www.instagram.com",
        icon: <BsInstagram className="socialIcons"/>
    },
    {
        path: "https://www.linkedin.com",
        icon:  <BsLinkedin className="socialIcons"/>
    },
];

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className="footerSection">
            <div className="footerContainer">
                <div className="footerInnerContainer">
                    <div>
                        <img src={footerLogo} alt="" />
                        <p className="footerCopyright">
                            Copyright © {year} developed by Jubai-Khalil
                        </p>
                        <div className="footerIcons">
                            {socialLinks.map((link, index) => (
                            <a href={link.path} key={index} target="_blank" rel="noopener noreferrer" className="socialIcons">
                            {link.icon}
                            </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footerInnerContainer">
                    <div className="footerInnerContainerLinks">
                        <h2>
                            Quick Links
                        </h2>
                        <Link to="/Home" className="footerLinkWrapper">Home</Link>
                        <Link to="/About" className="footerLinkWrapper">About Us</Link>
                        <Link to="/Doctors" className="footerLinkWrapper">Find A Doctor</Link>
                        <Link to="/Services" className="footerLinkWrapper">Services</Link>
                    </div>
                </div>
                <div className="footerInnerContainer">
                    <div className="footerInnerContainerLinks">
                        <h2>
                            Support
                        </h2>
                        <Link to="/Donate" className="footerLinkWrapper">Donate</Link>
                        <Link to="/Contact" className="footerLinkWrapper">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

