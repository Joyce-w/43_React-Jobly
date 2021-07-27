import React, { useEffect, useState } from 'react'
import './Company.css'
import { Link, useParams } from 'react-router-dom';
import JoblyApi from '../api'

const Companies = () => {

    const { handle } = useParams();
    
    const [company, setCompany] = useState(null);
    const [coJobs, setcoJobs] = useState(null)
    
    useEffect(() => {
        const getCompany = async (coHandle) => {
            try {
                let company = await JoblyApi.getCompany(coHandle);
                let jobs = await JoblyApi.getJobs();
                console.log(jobs)
                let coJobs = jobs.filter(job => {
                    return job.companyHandle === handle;
                })
                setcoJobs(coJobs)
                setCompany(company)
            }
            catch(e) {
                console.log(e)
            }
        }
        getCompany(handle)
    },[handle])

    //load appropriate logo
    // let logo = company.logo === null ? "https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png" : company.logo;

    // Loads company data according to handle
    let companyData = company ?
        <div className="Companies-info">
            <img className="Companies-logo" alt="" src="https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png"></img>
            <div>
                <h4>{company.name}</h4>
                <p>{company.description}</p>
                <p>{company.numEmployees} employees</p>
            </div>
        </div>
        : <p>Loading...</p>

    return (
        <div className="Company-div">
            
        {companyData}
            <h4>Recently posted jobs</h4>
        <div className="Company-jobs-cards">
            
                {/*map through jobs for the company and display them  */}
                {/* create if statement in case company does not have any openings */}
                {coJobs.map(j => {
                return <Link to={`/jobs/${j.id}`}>                    
                    <div className="Company-job">
                        <h4>{j.title}</h4>
                    </div>
            </Link>
            })}
            
        </div>

        </div>
    )
}

export default Companies;