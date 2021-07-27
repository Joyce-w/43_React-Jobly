import React, {useEffect, useState} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import JoblyApi from '../api';
import './Job.css'

const Job = ({getjobID}) => {
    //use context to share company data
    
    const [job, setJob] = useState();

    const { id } = useParams();

    //load job data
    useEffect(() => {
        const getJob = async () => {
            try {
                let res = await JoblyApi.getJob(id);
                setJob(res)
                console.log(res)
            }
            catch(e) {
                console.log(e)
            }
        }
        //call function to get api
        getJob();
    }, [id])

    const history = useHistory();
    //send jobID to parent App.js
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id)
        getjobID(id);
        history.push('/jobs');

    }
    return (
        <div className="Job-div">
            {!job ? <p>loading</p> : 
            <div>
                    <h4>{job.title}</h4>
                    
                <p>Salary: {job.salary || 'Contact to inquire'}</p>
                <p>Equity: {job.equity || 'None'}</p>
                    <button onClick={ handleSubmit }>Apply</button>
            </div>        
            }            
        </div>


    )
}

export default Job;