import React, { useContext } from 'react';
import {Redirect} from 'react-router-dom'
import UserContext from './UserContext';

const Profile = () => {
    
    const {userData} = useContext(UserContext)
    console.log(userData)
    
    return (
        <>
            {userData ?
                <div>
                    <h4> {userData.username}</h4>
                    <p>first name : {userData.firstName}</p>
                    <p>last name : {userData.lastName}</p>
                    <p>email : {userData.email}</p>
                    <h5>Jobs Applied: { userData.applications.length }!</h5>

                </div> : <Redirect to="/"/>

                      
        }               
        </>
         
        

    )
}

export default Profile;