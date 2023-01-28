import { useState } from "react"
import JobDescription from "./JobDescription"

export default function JobMobile({job, handleClick, jobArray, i}){
    const[clicked, setClicked] = useState(false)

    
    return(
    <>
            <div key={i} >
                <div className="px-3 d-flex justify-content-between" onClick={() => {
                handleClick(i)
                setClicked(!clicked)
            }}>
                    <div>
                        <p className="h5 fw-bold">{job.role}</p>
                        <p className="text-secondary">{job.level}</p>
                    </div>
                    <div>
                        <p className="fs-6 text-warning">
                            {job.datePast} days ago
                        </p>
                    </div>
                    <div className="d-md-none">
                        {clicked ? 
                        <i className="bi-caret-down-fill text-black"></i> 
                        :
                        <i className="bi-caret-right-fill text-black"></i>
                        } 
                    </div>
                </div> 
                <div>
                   {clicked && <JobDescription  job={jobArray} />}
                </div>
                <hr />
            </div>

        </> 
    )

}
    
