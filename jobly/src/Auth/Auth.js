import React from 'react';
import './Auth.css'
const Auth = () => {

    return (
        <div className='Auth-container'>
            {/* login */}
            <form className='login'>
                <h3>Login</h3>
                <label>Username</label>
                <input placeholder = 'Username' type='text'></input>

                <label>Password</label>
                <input placeholder = 'Password'type='password '></input>
            </form>
            {/* signup */}
            <form className='signup'>
                <h3>Signup</h3>
                <label>First Name</label>
                <input type='text'></input>
                <label>Last Name</label>
                <input type='text'></input>
                <label>Username</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Password</label>
                <input type='password '></input>
            </form>            
        </div>

    )
}

export default Auth;