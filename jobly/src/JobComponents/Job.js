import React, {useEffect, useState, useContext} from 'react'
import { useParams, useHistory, Redirect } from 'react-router-dom'
import JoblyApi from '../api';
import UserContext from '../UserContext';
import './Job.css'

const Job = ({ getjobID }) => {
    
    //get token to make sure user is signed in
    let isLoggedIn = (JSON.parse(localStorage.getItem('jwt')))
    
    const { userData } = useContext(UserContext)
    const [jobList, setjobList] = useState(userData || null);
    
    const [job, setJob] = useState();
    const { id } = useParams();
    //load job data according to id
    useEffect(() => {
        const getJob = async () => {
            try {
                let res = await JoblyApi.getJob(id);
                setJob(res)
            }
            catch(e) {
                console.log(e)
            }
        }
        //call function to get api
        getJob();
    }, [id])


    const appliedToJob = async (username, jobID) => {
    try {
        //apply to job
        await JoblyApi.appliedJob(username, jobID)
        setjobList(jobList => ([...jobList, +id ]))
    } catch (e) {
        console.log(e)
        }
    }

    /**Handle job submission when button clicked */
    const history = useHistory();
    //send jobID to parent App.js
    const handleSubmit = (e) => {
        e.preventDefault();
        appliedToJob(userData.username, +id)
        getjobID(id);
        history.push('/jobs');

    }

    return (
        // load job from api
        <div className="Job-div">
            {!isLoggedIn ? <Redirect to="/" /> :
                <>
                    {!job ? <p>loading</p> : 
                    <div>
                        <h4>{job.title}</h4>
                        <p>Salary: {job.salary || 'Contact to inquire'}</p>
                        <p>Equity: {job.equity || 'None'}</p>
                            <button onClick={ handleSubmit }>Apply</button>
                    </div>        
                    }                     
                </>
            }
       
        </div>


    )
}

export default Job;