import { useState } from "react";
import JobDescription from "./JobDescription";
import JobsList from "./JobsList";
import SideBar from "./SideBar";
import JobMobile from "./JobMobile";

const response = [
    {
        contactDetails:{
            name: "",
            number: "", 
            email: ""
        },
        jobDetails:{
            role: "UI/UX Designer",
            level: "Expert",
            jobDesc: "We are building a fintech application and the ...",
            datePast: 2
        },
        summary:"You will be responsible for.... omo, almost everything guy",
        
    },
    {
        contactDetails:{
            name: "",
            number: "", 
            email: ""
        },
        jobDetails:{
            role: "Frontend Developer",
            level: "Beginner",
            jobDesc: "We are building a fintech application and the ...",
            datePast: 5
        },
        summary:"You will be responsible for.... omo, almost everything guy",
        
    },
]

const jobDetailsOnly = response.map(item => item.jobDetails)

const getSpecificJob = (index) => {
    return (response[index]);
}



export default function Main(){

    const [jobDescArray, setJobDescArray] = useState(null);

    const feedDescriptionArray = (i) => {
        setJobDescArray(getSpecificJob(i))
    }

    return(
       <div className="container">
        <div className="row pt-4 vh-md-100 h-auto">   
            <div className="col-4 bg-white h-100 border-end pt-3 d-none d-md-block">
                {jobDetailsOnly.map(
                    (job, i) => {
                        return(
                            <JobsList job={job} i={i} handleClick={ feedDescriptionArray}/>
                        )
                    }
                )}
            </div>
            <div className="col-12 bg-white h-100 border-end pt-3 d-md-none">
                {jobDetailsOnly.map(
                    (job, i) => {
                        return(
                            <JobMobile job={job} i={i} handleClick={feedDescriptionArray} jobArray={jobDescArray}/>
                        )
                    }
                )}
            </div>
            <div className="col-6 bg-white h-100 p-3  d-none d-md-block">
                <JobDescription job={jobDescArray} />
            </div>
            <div className="col-2 h-50 d-none d-md-block">
                <SideBar />
            </div>
        </div>
        
       </div>
    )
}