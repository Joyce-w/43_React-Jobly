import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Jobs.css';
import JoblyApi from '../api';

const Jobs = () => {

    const [jobs, setJobs] = useState();

    useEffect(() => {
        const getJobs = async () => {
            try {
                let res = await JoblyApi.getJobs();
                setJobs(res)
            }
            catch(e) {
                console.log(e)
            }
        }
        //call function to get api
        getJobs();
    }, [])
    
    return (
        <>
            <h2>Available Jobs</h2>

            {!jobs ? <p>Loading data</p> :
                <div className="Jobs-div">                
                {jobs.map(job => {
                    return  <Link to={`/jobs/${job.id}`}>
                                <div className="Job-card">
                            <h4>{job.title}</h4>
                            <h4>@{ job.companyName}</h4>
                                </div>            
                            </Link>
                })}
                    
                </div>           
            }
        </>
    )
}

export default Jobs;