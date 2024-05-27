import React from 'react';
import { NavLink } from 'react-router-dom';

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
                        <li><NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>A propos</NavLink></li>
                        <li><NavLink to="/Projects" end className={({isActive}) => (isActive ? "active" : "")}>Projets</NavLink></li>
                        <li><NavLink to="/Skills" end className={({isActive}) => (isActive ? "active" : "")}>Compétences</NavLink></li>                        
                    </ul>
                </nav>
            </div>

            
            
        </div>
    );
};

export default Header;