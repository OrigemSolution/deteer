import React from "react";

import './Header.css';
import Logo from './Logo.svg';

export default function  Header(){

    return(
        <nav className="navbar">
            <div className="logo-div">
                <img src={Logo} alt="logo" />
                <span>Pro Bono</span>
            </div>
            <div className="button-div">
                <button>Find a Job</button>
                <button>Post a Job</button>
            </div>
        </nav>
    )
}