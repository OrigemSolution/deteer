export default function FormModal({id}){
    return(
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="p-3">
                        <form>
                            <div className="row">
                                <h6 className="text-secondary fw-bold">CONTACT DETAILS</h6>
                                <div className="col-md-6">
                                    <div className="mt-3">
                                        <label htmlFor="firstname" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="emailAddress" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mt-3">
                                        <label htmlFor="lastname" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="emailAddress" className="form-label">Phone Number(Whatsapp)</label>
                                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <h6 className="text-secondary fw-bold">JOB DETAILS</h6>
                                <div className="col-md-6">
                                    <div className="mt-3">
                                        <label htmlFor="firstname" className="form-label">Role</label>
                                        <input type="text" className="form-control" id="role" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mt-3">
                                        <label htmlFor="lastname" className="form-label">Level</label>
                                        <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="summary" className="form-label">Summary</label>
                                <textarea className="form-control h-100" rows={10}></textarea>
                            </div>
                            <button className="btn btn-dark mt-4">Post Job</button>
                        </form>
                        </div>           
                    </div>
                    </div>
                </div>
            </div>        
       
    )
}