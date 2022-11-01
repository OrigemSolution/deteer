export default function ConfirmModal({id, headText, descText, btnType, actionText}){
    return(
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <h4 className="fw-bold">{headText}</h4>
                        <p className="text-secondary">{descText}</p>
                        <button type="button" className="btn btn-outline-secondary mt-3 d-block w-100" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className={`btn ${btnType} mt-3 d-block w-100`}>{actionText}</button>
                    </div>
                    </div>
                </div>
            </div>
               
       
    )
}
