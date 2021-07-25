import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar-nav">
            <NavLink to="/">Home</NavLink>
            <span className="NavBar-routes">
                <NavLink to="/companies">Companies</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/profile">Profile</NavLink>                
            </span>

        </nav>

    )

}

export default NavBar;