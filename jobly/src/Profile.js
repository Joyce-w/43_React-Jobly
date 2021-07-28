import React from 'react';

const Profile = ({ currUser }) => {
    
    console.log(currUser)

    let test = !currUser ? <p>Loading User </p> :
        <div>
            <h4>It's your profile {currUser.username}!</h4>
            <p>username {currUser.username}</p>
            <p>first name : {currUser.firstName}</p>
            <p>last name : {currUser.lastName}</p>
            <p>password: {currUser.password}</p>
            <p>email : {currUser.email}</p>
            <p> Jobs Applied:{currUser.applications.map(j => <p>{ j}</p>)}</p>

        </div>        
    return (

        {test}
    )
}

export default Profile;