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
  
  //pass function down to get login data from /login
  // const loginUser = (login) => {
  //   setLogin(login)
  //   console.log(login)
  // }

    const [currUser, setCurrUser] = useState(localStorage.jwt || null);
 

  //get token from Auth.js
  const [token, setToken] = useState(null)
  const loginUser = async (jwt) => {
    setToken(await jwt);
    }

  useEffect(() => {
    const getUserInfo = async () => {
      let currUser = JSON.parse(localStorage.username);
      console.log(currUser)

      //get user api
      let user = await JoblyApi.getUserInfo(currUser)
      setCurrUser(user)
    }
    getUserInfo();
  },[token, jobId])


  // useEffect(() => {
  //   const loginUser = async (formData) => {
  //     try {
  //       console.log(formData)
  //       //api to login
  //       let jwt = await JoblyApi.userLogin(formData)
  //       //setlogin
  //       JoblyApi.token = jwt;
  //       localStorage.setItem("jwt", JSON.stringify(jwt))
        
        
  //     } catch (e) {
  //       console.log(e)
  //     }
  
  //   }
  //   loginUser(login)
  // }, [login])
  


  //get job id from applied
  /***job id being passed is of previous one */
  const getjobID = (id) => {
    setjobID(id)
    console.log(jobId)
  }
  

  return (
    <UserContext.Provider value={currUser}>

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
            <Signup loginUser={ loginUser }/>
        </Route>

      </BrowserRouter>
      </div>
      
    </UserContext.Provider>
  );
}

export default App;
