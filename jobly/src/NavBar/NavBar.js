import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({handleSignout}) => {

    //get token to make sure user is signed in
    let isLoggedIn = (JSON.parse(localStorage.getItem('jwt')))
    

    return (
        <nav className="NavBar-nav">
            <span className="NavBar-routes">
                
                {!isLoggedIn ?<Link to="/">Home</Link> :
                    <>
                        <NavLink to="/companies">Companies</NavLink>
                        <NavLink to="/jobs">Jobs</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                        <Link onClick={handleSignout} to="/">Signout</Link>
                    </> 
            }

            </span>
        </nav>

    )

}

export default NavBar;