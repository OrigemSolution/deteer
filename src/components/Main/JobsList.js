import { useState } from "react"

export default function JobsList({job, i, handleClick}){

    const[clicked, setClicked] = useState(false)

    return(
        <>
                    <div key={i} onClick={() => {
                        handleClick(i)
                        setClicked(!clicked)
                    }}>
                        <div className="px-3 d-flex justify-content-between">
                            <div>
                                <p className="h5 fw-bold">{job.role}</p>
                                <p className="text-secondary">{job.level}</p>
                            </div>
                            <div>
                                <p className="fs-6 text-warning">
                                    {job.datePast} days ago
                                </p>
                            </div>
                            
                            <div className="d-none d-md-block">
                                {clicked && 
                                <i className="bi-caret-right-fill text-black"></i>
                                } 
                            </div>
                        </div> 
                        <hr />
                    </div>
        </> 
    )
}