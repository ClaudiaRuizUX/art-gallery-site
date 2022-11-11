import { Link } from 'react-router-dom';
import React, { Component }  from 'react';

const NavBar = () => {
    return (
        <div className="navbar">
            <nav id="plainNav" className="flat">
                <ul>
                    <li><Link to="/">ArtGallery</Link></li>
                    <li><Link to="/projects">Art Projects</Link></li>
                    <li><Link to="/">Login and Upload Art</Link></li>
                </ul>
            </nav>
        </div>
     );
};

export default NavBar;