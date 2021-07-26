import React, { useEffect, useState } from 'react'
import './Company.css'
import { Link, useParams } from 'react-router-dom';
import JoblyApi from '../api'

const Companies = () => {

    const { handle } = useParams();
    
    const [company, setCompany] = useState(null);

    useEffect(() => {
        const getCompany = async (coHandle) => {
            try {
                let company = await JoblyApi.getCompany(coHandle);
                setCompany(company)
                console.log(company)
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
            
        <div className="Company-jobs-cards">
            <h4>Recently posted jobs</h4>
            <Link to="/jobs/:id">                    
                    <div className="Company-job">
                        <h4>Job title</h4>
                    </div>
            </Link>
        </div>

        </div>
    )
}

export default Companies;