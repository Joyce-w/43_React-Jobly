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

  //job list
  const [jobId, setjobID] = useState([]);
  
  //pass function down to get login data from /login
  const loginUser = (login) => {
    setLogin(login)
    console.log(login)
  }

    const [currUser, setCurrUser] = useState(localStorage.jwt || null);
  //login user, returning token 
  useEffect(() => {
    const loginUser = async (formData) => {
      try {
        //api to login
        let jwt = await JoblyApi.userLogin(formData)
        //setlogin
        JoblyApi.token = jwt;
        localStorage.setItem("jwt",JSON.stringify(jwt))
        let user = await JoblyApi.getUserInfo(login.username)
        setCurrUser(user)

      } catch (e) {
        console.log(e)
      }
  
    }
    loginUser(login)
  }, [login])
  


  //get job id from applied
  const getjobID = (id) => {
    setjobID(id)
  }
  
  //handle applied jobs if user is logged in
  useEffect(() => {
    const appliedToJob = async (un, jobID) => {
      try {
          //apply to job
          await JoblyApi.appliedJob(un, jobID)
        } catch (e) {
          console.log(e)
        }
    }
    appliedToJob('joyce', jobId)
  },[jobId])


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
          <Job getjobID={getjobID}/>
        </Route>

        <Route exact path="/profile">
          <Profile currUser={ currUser }/>          
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
