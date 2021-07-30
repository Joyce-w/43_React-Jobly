import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
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
import UserContext from './UserContext';

function App() {

  //login function
  const [login, setLogin] = useState(null);

  //job list
  const [jobId, setjobID] = useState(null);

  const [currUsername, setCurrUsername] = useState(null);
  
  const [userData, setUserData] = useState(localStorage.user || null);
  

  //get token from Auth.js
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('jwt')) || null)


    const handleSignout = () => {
      localStorage.clear();
      setUserData(null)
    }
  
  //saves jwt to state
  const loginUser = async (jwt, formUser) => {
    setToken(await jwt);
    //get username with token
    localStorage.setItem("jwt", JSON.stringify(jwt));
    setCurrUsername(() => formUser)

  }

  //get user information 
  useEffect(() => {
    const getUserInfo = async () => {
      console.log(currUsername)
      
      JoblyApi.token = token ? JoblyApi.token: <Redirect to="/home"/>;
      console.log(JoblyApi.token)
      //get user api
      // let decodedToken = decodeToken(JoblyApi.token)
      // setCurrUsername(decodedToken)
      let user = await JoblyApi.getUserInfo(currUsername)
      console.log(user)
      // localStorage.setItem("username", JSON.stringify(localStorage.user));
      // setCurrUser(JSON.parse(user))
      setUserData(user)
    }
    getUserInfo();
  },[token, jobId, currUsername])
  
  
  //get job id from Job component when job is applied
  const getjobID = (id) => {
    setjobID(id)
  }

  
  return (
    <UserContext.Provider value={{userData, loginUser}}>

    <div className="App">
      <BrowserRouter>
          <NavBar handleSignout={ handleSignout }/>
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
          <Profile />          
        </Route>
        <Route exact path="/login">
          <Auth loginUser={loginUser}/>
        </Route>
        <Route exact path="/register">
            <Signup loginUser={ loginUser }/>
        </Route>

      </BrowserRouter>
      </div>
      
    </UserContext.Provider>
  );
}

export default App;
