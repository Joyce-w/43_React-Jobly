import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Auth.css'
import JoblyApi from '../api';
import Job from '../JobComponents/Job';


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
        return res;
    }

    
    const history = useHistory();
    //handle submit
    const handleSubmit= async (e) => {
        e.preventDefault();
        let token = await getToken(form)
        // localStorage.setItem("username", JSON.stringify(form.username));
        localStorage.setItem("jwt", JSON.stringify(token));
        console.log(form.username)
        JoblyApi.token = token;
        loginUser(token,form.username);
        history.push('/')
    }

    return (
        <div className='Login-container'>
            {/* login */}
            <form onSubmit={handleSubmit} className='login'>
                <div className="Login-FormHeading">
                    <h3>Login</h3>
                    <p>Stay updated on your professional world</p>                    
                </div>

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