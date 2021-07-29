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
                    <p>password: {userData.password}</p>
                    <p>email : {userData.email}</p>                    
                </div> : <Redirect to="/"/>

                      
        }               
        </>
         
        

    )
}

export default Profile;