import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyApi from '../api';
import './Signup.css'

const Signup = () => {

    const initial_state = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    }
    
    const [form, setForm] = useState(initial_state)

    //handle change on form submit 
    const handleChange = e => {
        const { name, value } = e.target;
        setForm(form => ({
            ...form,
            [name]: value
        }))
    }

    //handle form change
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        let token = await JoblyApi.registerUser(form)
        JoblyApi.token = token;
        localStorage.setItem("username", JSON.stringify(form.username))
        history.push('/')
        
    }

    return (
        <div className='Signup-container'>
            {/* signup */}
            <form onSubmit={ handleSubmit} className='signup'>
                <h3>Make the most of your professional life.</h3>
                <label>Username</label>
                <input onChange={handleChange} name="username" placeholder="Username" type='text'></input>
                <label>First Name</label>
                <input onChange={handleChange} name="firstName" placeholder="First Name" type='text'></input>
                <label>Last Name</label>
                <input onChange={handleChange} name="lastName" placeholder="Last Name" type='text'></input>
                <label>Email</label>
                <input onChange={handleChange} name="email" placeholder="Email" type='email'></input>
                <label>Password</label>
                <input onChange={handleChange} name="password" placeholder="Password" type='password'></input>
                <button className="Auth-button">Signup</button>
            </form>            
        </div>

    )
}

export default Signup;