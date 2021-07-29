import React, { useContext } from 'react';
import {Redirect} from 'react-router-dom'
import UserContext from './UserContext';

const Profile = () => {
    
    const {userData} = useContext(UserContext)
    console.log(userData)
    let user = userData ? JSON.parse(userData) : userData;
    return (
        <>
            {user ?
                <div>
                    <h4> {user.username}</h4>
                    <p>first name : {user.firstName}</p>
                    <p>last name : {user.lastName}</p>
                    <p>email : {user.email}</p>
                    <h5>Jobs Applied: { user.applications.length }!</h5>

                </div> : <Redirect to="/"/>

                      
        }               
        </>
         
        

    )
}

export default Profile;