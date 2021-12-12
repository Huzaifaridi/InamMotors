import React from 'react';
import { Link } from '@reach/router';
import NavMenu from './NavMenu';
import Logo from '../images/logo.png'
// "../images/logo.png"

function Header() {
    return (
        <div className="site-header">
        <div className="container">
            <Link id="branding" to="/">
                <img src={Logo} alt="Company Logo" className="logo" />
                <h1 className="site-title">INAM MOTARS</h1>
            </Link>
            <NavMenu />
            <nav className="mobile-navigation"></nav>
        </div>
    </div>
    );
}

export default Header;
