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
                <input placeholder='Password' type='password '></input>
                <button>Signup</button>
            </form>
        </div>

    )
}

export default Auth;