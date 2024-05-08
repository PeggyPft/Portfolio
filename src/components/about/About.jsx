import React from 'react';
import myPhoto from '/images/Photo_Peggy.jpg';

const About = () => {
    return (
        <div className='container_About'>
            <div className='container-TitleandPicture'>
                <h2 className='about_Title'>A propos</h2><br />
                <img src={myPhoto} alt="Photo de Peggy Proffit" className='myPhoto'/>
            </div>
                <div className='descrition-About_Me'>
                    <p className='text-Description'>Bienvenue sur mon portfolio !</p>
                    <br />
                    <p className='text-Description'>
                    Après plus de quinze années d'expérience en tant qu'assistante administrative, je me suis lancée dans une nouvelle aventure enrichissante en intégrant une formation de 9 mois pour devenir intégrateuse web. 
                    </p><br />
                    <p> Durant cette formation, j'ai plongé avec enthousiasme dans l'univers du développement web, explorant les langages fondamentaux tels que HTML, CSS et JavaScript.                    
                    </p><br />
                    <p className='text-Description'>
                    Cette transition m'a permis de découvrir un réel intérêt pour la création web et de développer de nouvelles compétences techniques.
                        Mon objectif principal est de continuer à me former pour ensuite pouvoir créer des sites web esthétiques, fonctionnels et intuitifs, offrant une bonne expérience utilisateur.
                    </p>
                </div>
        </div>
    );
};

export default About;