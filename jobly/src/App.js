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

  useEffect(() => {
    const  loginUser = async (un, pw) => {
      //api to login
      let token = await JoblyApi.userLogin(un, pw)
      setLogin(token)
      //setlogin
    }

    loginUser('joyce', 'password')

  },[])

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
          <Auth/>          
        </Route>
        <Route exact path="/register">
          <Signup/>          
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
