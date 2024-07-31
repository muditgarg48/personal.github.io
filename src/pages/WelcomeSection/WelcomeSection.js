import React from "react";
import './WelcomeSection.css';
import my_resume from '../../assets/pdfs/My Resume.pdf';
import { TypeAnimation } from 'react-type-animation';
import AnimatedIcon from "../../components/AnimatedIcon/AnimatedIcon";
import { Link } from "react-scroll";

const WelcomeSection = () => {

    const hello_sequence = [
        'Hello!',
        1000,
        'नमस्ते!',
        1000,
        '¡Hola!',
        1000,
        'Bonjour!',
        1000,
        '你好!',
        1000,
        'Привет!',
        1000,
        'Dia dhuit!',
        1000,
        'Ciao!',
        1000,
        'Halò!',
        1000,
    ];

    const linkedin_icon = require('../../assets/icons/linkedin.json');
    const instagram_icon = require('../../assets/icons/instagram.json');
    const gmail_icon = require('../../assets/icons/gmail.json');
    const github_icon = require('../../assets/icons/github.json');
    const scroll_icon = require('../../assets/icons/scroll.json');
    const resume_icon = require('../../assets/icons/resume.json');

    return (
        <div id="welcome-section">
            <TypeAnimation
                sequence={hello_sequence}
                speed={50}
                repeat={Infinity}
                className="hello"
            />
            <div id="name">My name is Mudit Garg</div>
            <div id="brief">
                I specialise in developing software solutions.
            </div>
            &nbsp;
            <div id="summary">
                A software engineer with a specialization in developing product focused applications tailored to address specific challenges and make life simpler.
            </div>
            &nbsp;
            <div id="contact">
                <div id="contact_icons">
                    <AnimatedIcon icon={linkedin_icon} link="https://linkedin.com/in/muditgarg48"/>
                    <AnimatedIcon icon={github_icon} link="https://github.com/muditgarg48"/>
                    <AnimatedIcon icon={instagram_icon} link="https://instagram.com/mudit137"/>
                    <AnimatedIcon icon={gmail_icon} link="mailto:gargmu@tcd.ie"/>
                    <a href={my_resume} id="resume_btn" target="_blank" rel="noreferrer">
                        <AnimatedIcon icon={resume_icon} class_name="nocss"/>
                        &nbsp;
                        RESUME
                    </a>
                </div>
            </div>
            &nbsp;
            <div id="scroll_down">
                <Link to="about-section" smooth={true} duration={500}>
                    <AnimatedIcon icon={scroll_icon} class_name="nocss" icon_size={50}/>
                </Link>
                &nbsp;
                Scroll Down to explore further
            </div>
        </div>
    );
}

export default WelcomeSection;