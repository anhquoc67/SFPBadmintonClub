import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-light shadow-sm py-3">
            <div className="container">
                <div className="row align-items-center">
                    {/* Logo Section */}
                    <div className="col-lg-2 col-md-3 col-6">
                        <Link to="/" className="navbar-brand">
                            <img
                                src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729433981/logo1_tmdtl6.png"
                                alt="Logo"
                                className="img-fluid"
                                style={{ maxWidth: '150px', height: 'auto' ,borderRadius: '10px' }}
                            />
                        </Link>
                    </div>

                    {/* Navigation Section */}
                    <div className="col-lg-10 col-md-9 col-6">
                        <nav className="navbar navbar-expand-lg navbar-light justify-content-end">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link text-dark fw-bold">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                    <button
                                        className="nav-link dropdown-toggle text-dark fw-bold "
                                        href="#"
                                        id="dropdownMenuLink"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"

                                    >
                                        Library
                                    </button>

                                    <ul
                                        className="dropdown-menu "
                                        aria-labelledby="dropdownMenuLink"
                                        style={{
                                            backgroundColor: '#fff',
                                            color: '#4b3b17',
                                            borderRadius: '10px',
                                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                            zIndex: 1000,
                                        }}
                                    >
                                        <li>
                                            <Link className="dropdown-item black" to='/'>
                                                Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item black" to="/">
                                                Video
                                            </Link>
                                        </li>
                                        
                                    </ul>

                                </li>

                                    <li className="nav-item">
                                        <Link to='/AboutUs' className="nav-link text-dark fw-bold">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/ContactUs' className="nav-link text-dark fw-bold">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link text-dark fw-bold">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link text-dark fw-bold">Register</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </nav>
                    </div>
                    
                </div>
            </div>

            {/* Back to Top Button */}
            <a href="#top" className="top" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                <img
                    src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729172852/Top_qokqaf.png"
                    alt="Back to Top"
                    style={{ width: '30px' }}
                />
            </a>
        </header>
    );
};

export default Header;
