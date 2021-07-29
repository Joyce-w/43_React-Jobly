import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './NavBar.css'
import Home from "../Home/Home"

const NavBar = () => {

    const history = useHistory();
    const handleSignout = () => {
        localStorage.clear();
        history.push("/")
    }

    return (
        <nav className="NavBar-nav">
            <NavLink to="/">Home</NavLink>
            <span className="NavBar-routes">
                <NavLink to="/companies">Companies</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <button onClick={handleSignout}>Signout</button>
            </span>

        </nav>

    )

}

export default NavBar;