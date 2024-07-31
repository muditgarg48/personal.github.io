import React from "react";
import './NavBar.css';
import { Link } from "react-scroll";
import { RotatingText } from 'rotating-text'
import 'rotating-text/dist/index.css'

const NavBar =  () => {
    return (
        <div id="navbar">
            <div id="website_logo">
                <span className="highlight_text">M</span>udit<span className="highlight_text">.</span>
            </div>
            <div id="navlist">
                <NavBarItem content="HOME" dest="welcome-section"></NavBarItem>
                <NavBarItem content="ABOUT" dest="about-section"></NavBarItem>
                <NavBarItem content="EXPERIENCE" dest="experience-section"></NavBarItem>
                <NavBarItem content="PROJECTS" dest="projects-section"></NavBarItem>
                <NavBarItem content="CERTIFICATES" dest="certificates-section"></NavBarItem>
            </div>
        </div>
    );
}

const NavBarItem = ({content, dest}) => {
    return (
        <Link to={dest} className="navlistItem" activeClass="activeTab"
            spy={true} smooth={true} duration={500}
            // offset={-100}
        >
            <RotatingText
                text={content}
                stagger={0.1}
                timing={0.5}
                className="rotating-text"
                styles={{ fontSize: '100px' }}
                />
        </Link>
    );
}

export default NavBar;