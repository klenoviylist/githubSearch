import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="navbar-brand">
        Github Search
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">HOME</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">INFO</NavLink>
            </li>
        </ul>

        </nav>
    )
}

export default Navbar;