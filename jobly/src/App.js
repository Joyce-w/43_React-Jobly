import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Companies from './CompanyComponents/Companies';
import Company from './CompanyComponents/Company'
import Jobs from './JobComponents/Jobs';
import Job from './JobComponents/Job';
import Profile from './Profile';
import Auth from './Auth/Auth';
import Signup from './Auth/Signup'
import NavBar from './NavBar/NavBar';
import Home from './Home/Home'
import JoblyApi from './api';

function App() {

  //login function
  const [login, setLogin] = useState(null);
  const [token, setToken] = useState(null)
  
  //pass function down to get login data from /login
  const loginUser = (login) => {
    setLogin(login)
  }

  //login user, returning token 
  useEffect(() => {
    const loginUser = async (formData) => {
      try {
        //api to login
        let token = await JoblyApi.userLogin(formData)
        //setlogin
        setToken(token)
        console.log(token)           
      } catch (e) {
        console.log(e)
      }
  
    }
    loginUser(login)

  },[login])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Route exact path="/">
          <Home/>          
        </Route>
        {/* Company list/handle */}
        <Route exact path="/companies">
          <Companies/>          
        </Route>
        <Route exact path="/companies/:handle">
          <Company/>          
        </Route>
        {/* Job list / id */}
        <Route exact path="/jobs">
          <Jobs/>          
        </Route>
        <Route exact path="/jobs/:id">
          <Job/>          
        </Route>

        <Route exact path="/profile">
          <Profile/>          
        </Route>
        <Route exact path="/login">
          <Auth loginUser={loginUser}/>
        </Route>
        <Route exact path="/register">
          <Signup/>          
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
