import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import JoblyApi from '../api';

const Job = () => {
    //use context to share company data
    
    const [job, setJob] = useState();

    const { id } = useParams();


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

    return (
        <div>
            {!job ? <p>loading</p> : 
            <div>
                <h4>{job.title}</h4>
                <p>{job.salary}</p>
                <p>{job.equity}</p>
                <button>Apply</button>
            </div>        
            }            
        </div>


    )
}

export default Job;