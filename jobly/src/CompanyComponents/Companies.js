import React from 'react'
import './Companies.css'
import { Link } from 'react-router-dom'


const Companies = () => {


    return (
        <>
        <div className="Companies-cards">
            {/* // Map thru company list and use this format */}

            <Link to="/companies/:handle">
                <div className="Companies-div">
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdO8EX13N3nvGDMMRaApmJnHwkNtvSl33S2lE4D3x5CcWBN13SmUzua0ZHhSj7ne-wncw&usqp=CAU"></img>
                    <div>
                        <h4>Company Name</h4>
                    </div>
                </div>            
            </Link>
                
            <Link to="/companies/:handle">
                <div className="Companies-div">
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdO8EX13N3nvGDMMRaApmJnHwkNtvSl33S2lE4D3x5CcWBN13SmUzua0ZHhSj7ne-wncw&usqp=CAU"></img>
                    <div>
                        <h4>Company Name</h4>
                    </div>
                </div>                             
            </Link>
   
        </div>
        </>
    )
}

export default Companies;