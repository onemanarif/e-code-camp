import React from 'react';

const Header = () => {
    
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/codecamp">E-CodeCamp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/buy-course">Our Courses <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Course">Your Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About us</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;