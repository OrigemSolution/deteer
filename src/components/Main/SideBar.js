export default function SideBar(){

    return(
        <div className="ps-3">
            <p className="h5 fw-bold">Filter</p>
            <div className="mt-4">
                <p className="h5 fw-bold">Roles</p>
                <select className="form-select" aria-label="Default select example">
                    <option value="all">All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="mt-4">
                <p className="h5 fw-bold">Level</p>
                <select className="form-select" aria-label="Default select example">
                    <option value="all">All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="form-check form-switch mt-4">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" data-onstyle="warning"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Only Remote</label>
            </div>
        </div>
        
    )
}