import React, { useState } from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {   
   

    return (
        <div className='container_Projects'>
            <h2>Mes projets</h2>
            {projectsData.map((project) => (        
                <div key={project.id} className='projects'>
                    <div className='container_image'>
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className='container_hidden'>
                        <div className="container_content">
                            <p className='title'>{project.title}</p>
                            <p className='title_content'>Objectif :</p>
                            <p className='text_objectif'>{project.description}</p>
                            <p className='title_content'>Compétences :</p>
                            <p className='list-Skills'>{project.skills.join(', ')}</p>
                        </div>
                        <div className='container_Links_Projects'>
                            <a href={project.Link_Github} target="_blank"><p className='link_Github' >Lien Github</p></a>
                        </div>
                    </div>
                </div>      
            ))}  
        </div>
    );
};

export default Projects;