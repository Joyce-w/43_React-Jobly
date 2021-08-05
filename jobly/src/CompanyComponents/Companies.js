import React, { useState, useEffect } from 'react'
import './Companies.css'
import { Link, Redirect } from 'react-router-dom'
import JoblyApi from '../api';


const Companies = () => {
    //get token to make sure user is signed in
    let isLoggedIn = (JSON.parse(localStorage.getItem('jwt')))
    
    const [companies, setCompanies] = useState();
        //state for form data
    const [search, setSearch] = useState({})

    useEffect(() => {
        const getCompanies = async () => {
            try {
                let company = await JoblyApi.getCompanies(search);
                setCompanies(company)
                console.log(companies)
            }
            catch(e) {
                console.log(e)
            }
        }
        //call function to get api
        getCompanies();
    },[search])

    //handle form change
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setSearch(search => ({
            ...search,
            [name]: value
        }))

    }

    return (
        <>
            {/* If there is no token, redirect to home */}
            {!isLoggedIn ? <Redirect to="/"/> :
            <> 
            {/* loading */}<h2>Companies!</h2>
                <form>
                        <label htmlFor="name">Company</label>
                        <input
                            type="text"
                            placeholder=""
                            name="name"
                            onChange={handleChange}>
                        </input>
                        
                        <label htmlFor="minEmployees">Min Employees</label>
                        <input
                                type="number"
                                placeholder="0"
                                name="minEmployees"
                                onChange={handleChange}>
                        </input>
                        
                            <label htmlFor="maxEmployees">Max Employees</label>
                        <input
                                type="number"
                                placeholder="0"
                                name="maxEmployees"
                                onChange={handleChange}>
                                </input>
                </form>

            {!companies ? <p>Loading</p> :
                <div className="Companies-cards">
                    {/* // Map thru company list and use this format */}
                    
                    {companies.map(co => {
                        return <Link to={`/companies/${co.handle}`}>
                            <div className="Companies-div">
                                <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdO8EX13N3nvGDMMRaApmJnHwkNtvSl33S2lE4D3x5CcWBN13SmUzua0ZHhSj7ne-wncw&usqp=CAU"></img>
                                <div>
                                    <h4>{co.name}</h4>
                                </div>
                            </div>
                        </Link>                        
                    })}

   
                </div>
            }            
            </>
            }

        </>
    )
}

export default Companies;