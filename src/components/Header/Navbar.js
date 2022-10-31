
import Logo from '../assets/Logo.svg';

export default function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="logo" />
                    <span className="ms-3 fs-6 text-secondary">Pro Bono</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item me-md-5 mt-3 mt-md-0">
                        <a className="nav-link btn btn-dark text-white" href="/">Find a Job</a>
                    </li>
                    <li className="nav-item mt-3 mt-md-0">
                        <a className="nav-link btn btn-dark text-white" href="/">Post a Job</a>
                    </li>
                   
                </ul>
               
                </div>
            </div>
        </nav>
       
    )
}