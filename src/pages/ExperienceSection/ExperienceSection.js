import React, { useState } from "react";
import './ExperienceSection.css';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const ExperienceSection = () => {

    const experience_data = require('../../assets/data/experience_data.json');

    const [expIndex, setExpIndex] = useState(0);

    const highlightedExpCSS = {
        border: "3px solid var(--font-primary-color)"
    };

    return (
        <div id="experience-section">
            <SectionHeading section_name="EXPERIENCES"/>
            <div id="experience-logos">
                {
                    experience_data.map((experience, index) => {
                        const link = "https://cdn.brandfetch.io/"+experience.domain;
                        return(
                            <div className="experience-logo" onClick={() => setExpIndex(index)} >
                                <img 
                                    src={link} 
                                    alt={experience.name} 
                                    key={index} 
                                    style={index === expIndex? highlightedExpCSS: null}
                                ></img>
                            </div>
                        );
                    })
                }
            </div>
            <div id="experience-details">
                <div className="experience-headline">
                    <h3>
                        {experience_data[expIndex].role}
                        &nbsp; 
                        <span className="experience-company">
                            @
                            &nbsp;
                            <a href={experience_data[expIndex].website} target="_blank" rel="noreferrer">
                                {experience_data[expIndex].name}
                            </a>
                        </span>
                    </h3>
                    <div className="experience-period">
                        <span>{experience_data[expIndex].start}</span> - <span>{experience_data[expIndex].end}</span>
                    </div>
                </div>
                <ul className="experience-desc">
                    {
                        experience_data[expIndex].desc.map((line) => (
                            <li>{line}</li>
                        ))
                    }
                </ul>
                &nbsp;
                <div className="experience-tech">
                    {
                        experience_data[expIndex].tech.map((tech) => (
                            <div className="tech">{tech}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;