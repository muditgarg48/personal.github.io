import React from "react";
import './NavBar.css';
import AnimatedIcon from "../../components/AnimatedIcon/AnimatedIcon";
import { Link } from "react-scroll";
import { RotatingText } from 'rotating-text'
import 'rotating-text/dist/index.css'

const NavBar =  () => {

    const home_icon = require('../../assets/icons/home.json');
    const about_icon = require('../../assets/icons/about.json');
    const experience_icon = require('../../assets/icons/experience.json');
    const projects_icon = require('../../assets/icons/projects.json');
    const certificates_icon = require('../../assets/icons/certificates.json');

    return (
        <div id="navbar">
            <div id="website_logo">
                <span className="highlight_text">M</span>udit<span className="highlight_text">.</span>
            </div>
            <div id="navlist">
                <NavBarItem content="HOME" dest="welcome-section" icon={home_icon}></NavBarItem>
                <NavBarItem content="ABOUT" dest="about-section" icon={about_icon}></NavBarItem>
                <NavBarItem content="EXPERIENCE" dest="experience-section" icon={experience_icon}></NavBarItem>
                <NavBarItem content="PROJECTS" dest="projects-section" icon={projects_icon}></NavBarItem>
                <NavBarItem content="CERTIFICATES" dest="certificates-section" icon={certificates_icon}></NavBarItem>
            </div>
        </div>
    );
}

const NavBarItem = ({content, dest, icon=null}) => {
    return (
        <Link to={dest} className="navlistItem" activeClass="activeTab"
            spy={true} smooth={true} duration={500}
            // offset={-100}
        >
            <AnimatedIcon icon={icon}/>
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