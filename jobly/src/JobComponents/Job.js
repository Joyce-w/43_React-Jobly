import React, {useEffect, useState, useContext} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import JoblyApi from '../api';
import UserContext from '../UserContext';
import './Job.css'

const Job = ({ getjobID }) => {
    
    const currUser = useContext(UserContext)
    let jobList = currUser.applications;
    console.log(jobList)
    
    const [job, setJob] = useState();
    const { id } = useParams();
    let btnText = jobList.includes(id) ? console.log(id) : 'Applied'
    
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

    /**Handle job submission when button clicked */
    const history = useHistory();
    //send jobID to parent App.js
    const handleSubmit = (e) => {
        e.preventDefault();
        getjobID(id);
        history.push('/jobs');

    }
    return (
        //load job from api
        <div className="Job-div">
            {!job ? <p>loading</p> : 
            <div>
                    <h4>{job.title}</h4>
                    
                <p>Salary: {job.salary || 'Contact to inquire'}</p>
                <p>Equity: {job.equity || 'None'}</p>
                    <button onClick={ handleSubmit }>{btnText}</button>
            </div>        
            }            
        </div>


    )
}

export default Job;