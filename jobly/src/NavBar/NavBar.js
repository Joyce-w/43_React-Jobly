import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar-nav">
            <NavLink to="/">Home</NavLink>
            <span className="NavBar-routes">
                <NavLink to="/">Companies</NavLink>
                <NavLink to="/">Jobs</NavLink>
                <NavLink to="/">Profile</NavLink>                
            </span>

        </nav>

    )

}

export default NavBar;