import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Auth.css'
import JoblyApi from '../api';


const Auth = ({loginUser}) => {
    const initial_state = {
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

    //get data from api
    const getToken = async (data) => {
        let res = await JoblyApi.userLogin(data)
        JoblyApi.token = res;
        return res;
    }

    
    const history = useHistory();
    //handle submit
    const handleSubmit= (e) => {
        e.preventDefault();
        let token = getToken(form)
        localStorage.setItem("username", JSON.stringify(form.username))
        loginUser(token);
        history.push('/')
    }

    return (
        <div className='Login-container'>
            {/* login */}
            <form onSubmit={ handleSubmit} className='login'>
                <h3>Login to start view job opportunities!</h3>
                <label>Username</label>
                <input
                    placeholder='Username'
                    type='text'
                    name="username"
                    onChange={handleChange}
                />

                <label>Password</label>
                <input
                    placeholder='Password'
                    type='password'
                    name="password"
                    onChange={handleChange}
                />

                <button className="Login-button">Login</button>
            </form>
        </div>

    )
}

export default Auth;