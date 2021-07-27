import React from 'react';
import './Auth.css'
const Auth = () => {

    return (
        <div className='Login-container'>
            {/* login */}
            <form className='login'>
                <h3>Login to start view job opportunities!</h3>
                <label>Username</label>
                <input placeholder = 'Username' type='text'></input>

                <label>Password</label>
                <input placeholder='Password' type='password '></input>
                <button className="Login-button">Login</button>
            </form>
        </div>

    )
}

export default Auth;