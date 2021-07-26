import React from 'react'
import './Company.css'
import { Link } from 'react-router-dom';


const Companies = () => {

    return (
        <div className="Company-div">
            <div className="Companies-info">
                <img className="Companies-logo" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdO8EX13N3nvGDMMRaApmJnHwkNtvSl33S2lE4D3x5CcWBN13SmUzua0ZHhSj7ne-wncw&usqp=CAU"></img>
                <div>
                <h4>Company Name</h4>
                <p>Company Description</p>
                <p>123,212,123 employees</p>
                </div>
            </div>
            

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