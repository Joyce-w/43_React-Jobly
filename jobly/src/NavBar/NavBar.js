import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({handleSignout}) => {


    return (
        <nav className="NavBar-nav">
            <NavLink to="/">Home</NavLink>
            <span className="NavBar-routes">
                <NavLink to="/companies">Companies</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <Link onClick={ handleSignout} to="/">Signout</Link>
            </span>
        </nav>

    )

}

export default NavBar;