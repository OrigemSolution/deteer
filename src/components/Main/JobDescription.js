import { useState } from "react";
import ConfirmModal  from "../Modals/ConfirmModal";

export default function JobDescription({job}){
    
        const [showDelete, setShowDelete] = useState(false);

        if(job) return(
                <>
                <div className="d-flex justify-content-between position-relative">
                    <div>
                        <p className="h5">
                            {job['jobDetails'].role} 
                            <i className="bi-dot text-secondary mx-3"></i>
                            <span className="text-secondary">{job['jobDetails'].level}</span>
                        </p>
                        <p className="text-secondary">
                            {job['jobDetails'].jobDesc}
                        </p>
                    </div>
                    <div>
                        <p className="fs-6 text-warning">
                            {job['jobDetails'].datePast} days ago
                            <i className="bi-three-dots mx-3" onClick={() => setShowDelete(!showDelete)}></i>
                        </p>
                        <div className={showDelete ? "position-absolute vw-25 d-block" : "position-absolute vw-25 d-none"}>
                            <button className="btn-outline-secondary border-0 text-danger fs-6 w-50"
                             data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-backdrop="false" data-bs-keyboard="false">
                                <i className="bi-trash"></i> Delete Opening
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="text-secondary">
                    <h5 className="text-black">Contact Details: </h5>
                    <p>Name: <span className="fw-bold">{job['contactDetails'].name}</span> </p>
                    <p>Whatsapp Number: <span className="fw-bold">{job['contactDetails'].number}</span> </p>
                    <p>Email: <span className="fw-bold">{job['contactDetails'].email}</span> </p>
                </div>
                <hr />
                <div className="text-secondary">
                    <h5 className="text-black">Job Details: </h5>
                    <p>{job.summary} </p>
                </div>
                <hr />
                
                    <ConfirmModal id="deleteModal" headText="Delete Opening"
                     descText="Are you sure you want to delete this opening? This action would be permanent"
                     btnType="btn-danger"
                     actionText="Yes, Delete Opening"/>
               
                </>
            )
        
        return(
            null
        )    
}