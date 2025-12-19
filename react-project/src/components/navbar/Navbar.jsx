
import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };
return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="form">
                <form>
                        <div className="input-with-icon"> 
                            <input 
                                type="text" 
                                className='input-1' 
                                placeholder='coffee place, cafe'
                            />
                        </div>
                    </form>
            
            </div>

            <div className="business-dropdown-container">
                    <div className="business" onClick={toggleDropdown}>
                        <h5>Ethio Mesob for business
                        <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                                ▼
                            </span>
                            </h5>
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <a href="/add-business" className="dropdown-item">
                                <span className="icon">➕</span> Add a Business
                            </a>
                            <a href="/claim-business" className="dropdown-item">
                                <span className="icon">✔️</span> Claim your business for free
                            </a>
                            <a href="/business-login" className="dropdown-item">
                                <span className="icon">👤</span> Log in to Business Account
                            </a>
                            <hr />
                            <a href="/explore-business" className="dropdown-item explore-link">
                                Explore Ethio Mesob for Business
                            </a>
                        </div>
                    )}
                </div>
            <div className="write">
                <button type="button">
                    Write a Review
                </button>
            </div>

            <div className="login">
                <button>Login</button>
            </div>

            <div className="sign-Up">
                <button>Sign-Up</button>
            </div>
        </div>
    </div>
)
}

export default Navbar