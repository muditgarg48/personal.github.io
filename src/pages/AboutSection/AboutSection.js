import React, { useState } from "react";
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
    const skills = require('../../assets/data/skills.json');
    return (
        <div id="skills-subsection">
            {/* <div class="subsection-heading">
                My Skillset
            </div> */}
            {
                Object.keys(skills).map((key, index) => {
                    return (
                        <SkillSubSection
                            key={index}
                            skills={skills[key]}
                            section_name={key}
                            dir={index%2===0?"right":"left"}/>
                    );
                })
            }
        </div>
    );
}

const SkillSubSection = ({id, skills, section_name,dir}) => {
    return (
        <div id={id} className="skill_subsection">
            <div style={{display: "flex", justifyContent: "center"}}>{section_name}</div>
            <Marquee pauseOnHover speed={70} direction={dir}>
                {
                    skills.map((skill) => 
                        <Skill icon={skill.icon} name={skill.name} key={skill.name}/>
                    )
                }
            </Marquee>
        </div>
    );
}

const Skill = ({icon=null, name=''}) => {

    const [showName, setShowName] = useState(false);

    return (
        <div className="single_skill" onMouseEnter={()=>setShowName(true)} onMouseLeave={()=>setShowName(false)}>
            <img src={icon} alt={name}></img>
            &nbsp;
            {showName && <>{name}</>}
            {!showName && <>&nbsp;</>}
        </div>
    );
}

export default AboutSection;