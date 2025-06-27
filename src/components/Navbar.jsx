import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <style>
                {`.custom-hover:hover {
                   background-color:rgb(44, 47, 50) ; 
                   color: white;
                   border: 0px solidrgb(54, 57, 60);
                   border-radius: 5px;
                   }
                `}
            </style>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
                <div className="container p-3">
                    <Link className="navbar-brand fw-bold text-light" to="/">Notes App</Link>
                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navb"
                        aria-controls="navb"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navb">
                        <ul className="navbar-nav ms-auto mb-3z mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link text-light custom-hover" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light custom-hover" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light custom-hover" to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 

        </div>
    )
}

export default Navbar