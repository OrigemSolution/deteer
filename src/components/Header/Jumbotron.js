import background from "../assets/jumbotronBg.png"

export default function Jumbotron(){

    return(
        <section className="border-50 vh-50 bg-primary position-relative mt-5">
            <img src={background} alt="" className="w-100 h-100" />
            <div className="position-absolute top-50 w-100 w-md-50 start-50 translate-middle p-3">
                <h1 className="text-white text-center px-2">
                    Discover Volunteer Opportunities in Nigeria
                </h1>
                <div className="searchBox input-group w-100 w-md-75 mx-auto pt-3 pe-5">
                    <input className="form-control border-0 ms-5 ps-3" type="search" placeholder="Search .." aria-label="Search" />
                    <span className="input-group-text bg-white border-0"><i className="bi-search"></i></span>
                </div>
            </div>
        </section>
    )
}