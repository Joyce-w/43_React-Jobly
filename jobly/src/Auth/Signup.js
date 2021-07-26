import React from 'react';
import './Signup.css'

const Signup = () => {
    return (
        <div className='Auth-container'>
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
                <button>Signup</button>
            </form>            
        </div>

    )
}

export default Signup;