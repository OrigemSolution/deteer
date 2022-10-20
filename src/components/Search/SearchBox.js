import React from "react";
import './SearchBox.css'

export default function SearchBox(){

    return(

        <div className="search-box">
            <div className="overlay">
                <div className="search-box-body">
                    <div>
                    <h1 className="search-box-text">
                        Discover Volunteer 
                    </h1>
                    <h1 className="search-box-text">
                    Opportunities in Nigeria
                    </h1>
                    </div>
                    
                    <div className="search-input">
                        <input type='search' />
                    </div>
                </div>
            </div> 
        </div>
    )
}