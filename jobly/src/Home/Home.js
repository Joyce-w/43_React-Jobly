import React, {useContext} from 'react'
import { Link, Redirect} from 'react-router-dom'
import './Home.css'
import UserContext from '../UserContext';

const Home = () => {

  let { userData } = useContext(UserContext)
  console.log(userData)

  //if there is a userData, parse from localstorage
  // let user = userData ? JSON.parse(userData) : userData;
  // console.log(user)
  return (
    <>
      
        {!userData ?
        <div className="Home-div">
          <h1>Welcome to Jobly. The one stop for jobs and companies.</h1>  
          <Link to="/login">
            <button className="Home-login">Login</button>
          </Link>
          <Link to="/register">
            <button className="Home-signup">Signup</button>
            </Link>          
        </div> :
          <div className="Home-div">
            <h1>Welcome {userData.username}</h1>
            <Link to="/companies">
              <button className="Home-companies">Explore Companies</button>
            </Link>
            <Link to="/jobs">
              <button className="Home-jobs">Explore Jobs</button>
            </Link>
          </div>  
      }


        


      

    </>
  )
}

export default Home;