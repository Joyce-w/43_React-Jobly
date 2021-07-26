import React from 'react'
import { Link } from 'react-router-dom'
import './Jobs.css'

const Jobs = () => {
    return (
        <>
        <h4>Recently posted jobs</h4>
        <div className="Jobs-div">
            
            <Link to="/jobs/:id">
                <div className="Job-card">
                    <p>Company Img</p>
                    <h4>Job Title</h4>
                </div>            
            </Link>

        </div>
        </>
    )
}

export default Jobs;