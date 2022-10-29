
import Logo from '../assets/Logo.svg';

export default function Navbar(){

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={Logo} alt="logo" />
                    <span className="ms-3 fs-6 text-secondary">Pro Bono</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-md-5 mt-3 mt-md-0">
                        <a class="nav-link btn btn-dark text-white" href="#">Find a Job</a>
                    </li>
                    <li class="nav-item mt-3 mt-md-0">
                        <a class="nav-link btn btn-dark text-white" href="#">Post a Job</a>
                    </li>
                   
                </ul>
               
                </div>
            </div>
        </nav>
       
    )
}