export default function JobDescription({job}){
        if(job) return(
                <>
                <div className="d-flex justify-content-between">
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
                        </p>
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
                </>
            )
        
        return(
            null
        )    
}