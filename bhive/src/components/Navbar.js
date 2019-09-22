import React from 'react';
import './../App.css'
import Title from './Title'

function Navbar() {
    return(
        <div className="navigationBar">
            <nav class="navbar navbar-expand-lg navbar-light " id="nav">
                <a class="navbar-brand" href="#"><img src="https://bhiveworkspace.com/wp-content/uploads/2019/06/gg_1-1.png"></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}>
                            COWORKING
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">COWORKING HOME</a>
                                <a class="dropdown-item" href="#">PRICING</a>
                                <a class="dropdown-item" href="#">BENEFITS</a>
                                <a class="dropdown-item" href="#">REFER TENANT</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}>
                            LOCATIONS
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">HSR LAYOUT</a>
                                <a class="dropdown-item" href="#">KORAMANGALA</a>
                                <a class="dropdown-item" href="#">MG ROAD</a>
                                <a class="dropdown-item" href="#">INDHIRA NAGAR</a>
                                <a class="dropdown-item" href="#">UTTARAHALLI</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}>
                            ABOUT US
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">About Bhive</a>
                                <a class="dropdown-item" href="#">About Team</a>
                                <a class="dropdown-item" href="#">Investor Realations</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Title />
        </div>
    )
}

export default Navbar;

