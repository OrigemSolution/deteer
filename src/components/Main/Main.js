import JobsList from "./JobsList"

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

export default function Main(){

    return(
       <div className="container">
        <div className="row py-4 vh-100">
            <div className="col-4 bg-white h-100 border-end pt-3">
                <JobsList jobList={jobDetailsOnly} />
            </div>
            <div className="col-6 bg-white h-100"></div>
            <div className="col-2 h-50"></div>
        </div>
       </div>
    )
}