export default function JobsList({jobList}){

    return(
        <>
            {jobList.map((job, i) => {
                return(
                    <div key={i}>
                    <div className="px-3 d-flex justify-content-between">
                        <div>
                            <p className="h5">{job.role}</p>
                            <p className="text-secondary">{job.level}</p>
                        </div>
                        <div>
                            <p className="fs-6 text-warning">
                                {job.datePast} days ago
                            </p>
                        </div>
                    </div> 
                    <hr />
                    </div>
                )
                
            })}
        </> 
    )
}