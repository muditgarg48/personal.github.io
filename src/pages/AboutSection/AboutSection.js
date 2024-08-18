import React from "react";
import './AboutSection.css';
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";
import { Chrono } from "react-chrono";

import ScrollFurther from "../../components/ScrollFurther/ScrollFurther";
import SectionHeading from "../../components/SectionHeading/SectionHeading.js";
import myself from '../../assets/imgs/myself.jpg';

const AboutSection = () => {
    return (
        <div id="about-section">
            <SectionHeading section_name="ABOUT"/>
            <div id="about-section-content">
                <div id="my-description">
                    <TypeAnimation
                        className="about_me"
                        style={{ whiteSpace: 'pre-line', display: 'block' }}
                        speed={100}
                        sequence={[
                            `Hi there! My name is Mudit Garg. I am an upcoming Software Engineer who is passionate about creating projects that solve various small yet significant problems we usually face in our daily lives. With an aspiration to learn and practically apply new ways to do stuff, I am proficient in many languages and frameworks but currently still involved in learning something new.

                            Currently, my main focus has been to learning new technologies, particularly understanding how LLMs and Generative AI work.

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
                <SkillSection/>
                &nbsp;
                <ScrollFurther next="experience-section" side="right"/>
                <EducationSection/>
                &nbsp;
            </div>
        </div>
    );
}

const EducationSection = () => {

    const themeSettings = {
        primary: 'var(--font-primary-color)',
        secondary: 'var(--font-highlight-color)',
        cardBgColor: 'var(--font-secondary-color)',
        cardDetailsBgColor: 'transparent',
        cardMediaBgColor: 'transparent',
        cardDetailsColor: 'var(--font-highlight-color)',
        cardSubtitleColor: 'var(--font-highlight-color)',
        cardTitleColor: 'var(--font-highlight-color)',
        titleColor: 'var(--font-highlight-color)',
        toolbarBgColor: 'var(--bg-color)',
        toolbarBtnBgColor: 'var(--secondary-color)',
        toolbarTextColor: 'var(--font-highlight-color)',
        nestedCardBgColor: 'var(--font-secondary-color)',
        nestedCardTitleColor: 'var(--font-highlight-color)'
    };
    const mediaSettings = {
        fit:'contain'
    };

    const education_history = require('../../assets/data/education_history.json');

    return (
        <div id="education-subsection">
            <div className="subsection-heading">
                Education History
            </div>
            &nbsp;
            <Chrono 
                mode="VERTICAL"
                mediaSettings={mediaSettings}
                slideShow
                slideItemDuration={3000}
                slideShowType="slide_from_sides"
                items={education_history}
                theme={themeSettings}
            />
        </div>
    );
}

const SkillSection = () => {
    return (
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
    );
}

const SkillSubSection = ({id, section_name, dir}) => {

    const skills = require('../../assets/data/skills.json');

    return (
        <div id={id} className="skill_subsection">
            <div id="">{section_name}</div>
            <Marquee pauseOnHover speed={70} direction={dir}>
                {
                    skills[section_name].map((skill) => 
                        <Skill icon={skill.icon} alt={skill.name} key={skill.name}/>
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