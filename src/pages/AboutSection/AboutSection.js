import React from "react";
import './AboutSection.css';
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";

import ScrollFurther from "../../components/ScrollFurther/ScrollFurther";
import myself from '../../assets/imgs/myself.jpg';
import react_icon from '../../assets/imgs/react.svg';
import skills from '../../assets/data/skills.js';

const AboutSection = () => {
    return (
        <div id="about-section">
            <div id="heading">
                About Me
            </div>
            <div id="about-section-content">
                <div id="my-description">
                    <TypeAnimation
                        className="about_me"
                        style={{ whiteSpace: 'pre-line', display: 'block' }}
                        speed={100}
                        sequence={[
                            `Hi there! My name is Mudit Garg. I am an upcoming Software Engineer who is passionate about creating projects that solve various small yet significant problems we usually face in our daily lives. With an aspiration to learn and practically apply new ways to do stuff, I am proficient in many languages and frameworks but currently still involved in learning something new.
                            
                            My first attempt of making something was my Project Asterix in Xth Standard. It was a simple chatbot based in Java which just employed if else statements to look for particular keywords in the prompt provided by the user to respond accordingly. Surprising, it turns out, thats how every chatbot, at a massive scale did, until the emergence of LLMs.

                            Fast-forward to today, my main focus has been to learning new technologies, particularly understanding how LLMs and Generative AI work.

                            I have also recently completed the OCI Generative AI Certification from Oracle.`,
                            1000,
                        ]}
                        repeat={1}
                    />
                    &nbsp;
                </div>
                <div id="myself-subsection">
                    <img id="my-potrait" src={myself} alt="My Potrait"/>
                    <div id="my-quote">
                        <span id="quotation-mark" className="highlight">"</span>
                        <span id="quote">Lets hope for the best and plan for the worst</span>
                    </div>
                </div>
                &nbsp;
                <div id="skills-subsection">
                    {/* <div class="subsection-heading">
                        My Skillset
                    </div> */}
                    <SkillSubSection
                        id="lang-skills"
                        section_name="Programming Languages"
                        dir="left"/> 
                    <SkillSubSection
                        id="web-dev-skills"
                        section_name="Web Development"
                        dir="right"/>
                    <SkillSubSection
                        id="mobile-dev-skills"
                        section_name="Mobile Development"
                        dir="left"/>
                    <SkillSubSection
                        id="tools-skills"
                        section_name="Tools and Libraries"
                        dir="right"/>
                    <SkillSubSection
                        id="ide-skills"
                        section_name="Integrated Development Environments (IDE)"
                        dir="left"/>
                </div>
                <ScrollFurther next="experience-section" side="right"/>
            </div>
        </div>
    );
}

const SkillSubSection = ({id, section_name, dir}) => {
    return (
        <div id={id} className="skill_subsection">
            <div id="">{section_name}</div>
            <Marquee pauseOnHover speed={70} direction={dir}>
                {
                    skills[section_name].map((skill) => 
                        <Skill icon={skill.icon} alt={skill.name}/>
                    )
                }
            </Marquee>
        </div>
    );
}

const Skill = ({icon=null, alt='', name=''}) => {

    return (
        <div className="single_skill">
            <img src={icon} alt={alt}></img>
        </div>
    );
}

export default AboutSection;