import React, { useState } from "react";
import './NavBar.css';
import AnimatedIcon from "../../components/AnimatedIcon/AnimatedIcon";
import { Link } from "react-scroll";
import { RotatingText } from 'rotating-text'
import 'rotating-text/dist/index.css'
import { Divide as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion';
import { useWindowSize } from "@uidotdev/usehooks";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";

const NavBar =  () => {

    const size = useWindowSize();

    const home_icon = require('../../assets/icons/home.json');
    const about_icon = require('../../assets/icons/about.json');
    const experience_icon = require('../../assets/icons/experience.json');
    const projects_icon = require('../../assets/icons/projects.json');
    const certificates_icon = require('../../assets/icons/certificates.json');

    const NavBarItems = [
        <NavBarItem content="HOME" dest="welcome-section" icon={home_icon} key="HOME"></NavBarItem>,
        <NavBarItem content="ABOUT" dest="about-section" icon={about_icon} key="ABOUT"></NavBarItem>,
        <NavBarItem content="EXPERIENCES" dest="experience-section" icon={experience_icon} key="EXPERIENCES"></NavBarItem>,
        <NavBarItem content="PROJECTS" dest="projects-section" icon={projects_icon} key="PROJECTS"></NavBarItem>,
        <NavBarItem content="CERTIFICATES" dest="certificates-section" icon={certificates_icon} key="CERTIFICATES"></NavBarItem>,
    ];

    if(size.width < 1000)
        return(<SideNavBar>{NavBarItems}</SideNavBar>);
    else
        return (<TopNavBar>{NavBarItems}</TopNavBar>);
}

const SideNavBar = ({children}) => {
    
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

    if(!sideBarIsOpen) {
        return (
            <div id="navbar">
                <div id="website_logo">
                    <span className="highlight_text">M</span>udit<span className="highlight_text">.</span>
                </div>
                <div id="hamburger-icon">
                    <Hamburger 
                        color="#00abf0" 
                        toggled={sideBarIsOpen} 
                        toggle={setSideBarIsOpen}
                        rounded
                    />
                </div>
            </div>
        );
    } else {
        return (
            <FullScreenNavigation navscreenState={sideBarIsOpen} setNavscreenState={setSideBarIsOpen}>
                {children}
            </FullScreenNavigation>
        );
    }
}

const FullScreenNavigation = ({navscreenState, setNavscreenState, children}) => {
    
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }

    return (
        <motion.div 
            id="full-screen-navscreen"
            animate={navscreenState === true ? "open" : "closed"}
            variants={variants}
            transition={{duration: 5, delay: 0.5, ease: "linear" }}
        >
            <div id="full-screen-navscreen-top">
                <WebsiteLogo/>
                <div id="hamburger-icon">
                    <Hamburger 
                        color="#00abf0" 
                        toggled={navscreenState} 
                        toggle={setNavscreenState}
                        rounded
                    />
                </div>
            </div>
            <div id="full-screen-navscreen-items" onClick={() => setNavscreenState(false)}>
                {children}
            </div>
        </motion.div>
    );
}

const TopNavBar = ({children}) => {
    return (
        <div id="navbar">
            <WebsiteLogo/>
            <div id="navlist-full">
                {children}
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