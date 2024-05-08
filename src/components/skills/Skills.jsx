import React from 'react';
import skillsData from '../data/skills.json';

const Skills = ({}) => {

    return (
        <section className='container_Skills'>
            {skillsData.map(skillsData => (
                <div key={skillsData.id} className='container_Img_and_NameLogo' >
                    <img src={skillsData.image} alt={skillsData.nameLogo}/>
                    <p>{skillsData.nameLogo}</p>
                </div>
            ))}
        </section>    
    );
};

export default Skills;