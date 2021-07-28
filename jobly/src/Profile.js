import React, {useContext} from 'react';
import UserContext from './UserContext';

const Profile = () => {
    
    const currUser = useContext(UserContext)
    console.log(currUser)

    
    return (

        <div>
            <h4>It's your profile {currUser.username}!</h4>
            <p>username {currUser.username}</p>
            <p>first name : {currUser.firstName}</p>
            <p>last name : {currUser.lastName}</p>
            <p>password: {currUser.password}</p>
            <p>email : {currUser.email}</p>
            <p> Jobs Applied:{currUser.applications.map(j => <p>{ j}</p>)}</p>
        </div>    
    )
}

export default Profile;