import React from 'react';
import './Signup.css'

const Signup = () => {
    return (
        <div className='Signup-container'>
            {/* signup */}
            <form className='signup'>
                <h3>Make the most of your professional life.</h3>
                <input placeholder="First Name" type='text'></input>
                <input placeholder="Last Name"type='text'></input>
                <input placeholder="Username" type='text'></input>
                <input placeholder="Email"type='email'></input>
                <input placeholder="Password" type='password '></input>
                <button className="Auth-button">Signup</button>
            </form>            
        </div>

    )
}

export default Signup;