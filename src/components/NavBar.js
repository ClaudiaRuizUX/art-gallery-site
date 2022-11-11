import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <nav id="plainNav" className="flat">
                <Link to="/">ArtGallery</Link>
                <Button>Login and Upload Art</Button>
            </nav>
        </div>
     );
};

export default NavBar;