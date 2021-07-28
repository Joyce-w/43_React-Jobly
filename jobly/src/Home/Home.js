import React, {useContext} from 'react'
import { Link} from 'react-router-dom'
import './Home.css'
import UserContext from '../UserContext';

const Home = () => {

  const currUser = useContext(UserContext)

  return (
    <>
      
        {!currUser ?
        <div className="Home-div">
          <h1>Welcome to Jobly. The one stop for jobs and companies.</h1>  
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Signup</button>
            </Link>          
        </div> :
          <div className="Home-div">
            <h1>Welcome {currUser.username}</h1>
            <Link to="/companies">
              <button>Explore Companies</button>
            </Link>
            <Link to="/jobs">
              <button>Explore Jobs</button>
            </Link>
          </div>  
      }


        


      

    </>
  )
}

export default Home;