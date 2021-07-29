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
import UserContext from './UserContext';

function App() {

  //login function
  const [login, setLogin] = useState(null);

  //job list
  const [jobId, setjobID] = useState(null);

  const [currUser, setCurrUser] = useState(localStorage.username || null);
  
  const [userData, setUserData] = useState(JSON.parse(localStorage.user) || null);
  
  console.log(currUser, userData)

  //get token from Auth.js
  const [token, setToken] = useState(localStorage.jwt || null)
  const loginUser = async (jwt) => {
    setToken(await jwt);
  }
  
  //get user information 
  useEffect(() => {
    const getUserInfo = async () => {
      JoblyApi.token = token;
      //get user api
      let user = await JoblyApi.getUserInfo(JSON.parse(localStorage.username))
      localStorage.setItem("user", JSON.stringify(user));
      // localStorage.setItem("username", JSON.stringify(localStorage.user));
      setCurrUser(user)
      setUserData(user)
    }
    getUserInfo();
  },[token, jobId])
  
  
  //get job id from Job component when job is applied
  const getjobID = (id) => {
    setjobID(id)
  }

  
  return (
    <UserContext.Provider value={{userData, loginUser}}>

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
