import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <div>
            <div className='container_Header'>
                <div >
                    <h1 className='header_Title'>Portfolio</h1>
                </div>   
                <nav>
                    <ul className='container_Links'>
                        <li className={location.pathname === "/" ? "active" : ""}><Link to="/">A propos</Link></li>
                        <li className={location.pathname === "/Projects" ? "active" : ""}><Link to="/Projects">Projets</Link></li>
                        <li className={location.pathname === "/Skills" ? "active" : ""}><Link to="/Skills">Compétences</Link></li>                        
                    </ul>
                </nav>
            </div>

            
            
        </div>
    );
};

export default Header;