import React, { useState } from 'react';
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };
    const cafes = [
    { id: 1, name: "Abyssinia Ethiopian Restaurant", location: "Oakland, CA", rating: 4.4, reviews: 472 },
    { id: 2, name: "Tomoca Coffee", location: "Addis Ababa, Ethiopia", rating: 4.8, reviews: 120 },
    { id: 3, name: "Abyssinian Kitchen", location: "Portland, OR", rating: 4.2, reviews: 85 },
    { id: 4, name: "Capital One Café", location: "San Francisco, CA", rating: 4.0, reviews: 310 },
    { id: 5, name: "Abyssinia Market", location: "Oakland, CA", rating: 4.5, reviews: 55 },
  ];
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    
    const foundCafe = cafes.find(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundCafe) {
      // Navigate to the Profile View (not the review page)
      navigate('/cafe-page', { state: { cafeData: foundCafe } });
    }
  };

    return (
        <div className='navbar'>
        <div className="container">
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="" />
                </Link>
            </div>
            <div className="form">
                <form onSubmit={handleSearchSubmit}>
                        <div className="input-with-icon"> 
                            <input 
                                type="text" 
                                className='input-1' 
                                placeholder='coffee place, cafe'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
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
                            <Link to="/business">
                            <a href="/add-business" className="dropdown-item">
                                <span className="icon">➕</span> Add a Business
                            </a>
                            </Link>
                            <a href="/claim-business" className="dropdown-item">
                                <span className="icon">✔️</span> Claim your business for free
                            </a>
                            <Link to="/businesslogin">
                            <a href="/business-login" className="dropdown-item">
                                <span className="icon">👤</span> Log in to Business Account
                            </a>
                            </Link>
                            <hr />
                            <a href="/explore-business" className="dropdown-item explore-link">
                                Explore Ethio Mesob for Business
                            </a>
                        </div>
                    )}
                </div>
            <div className="write">
                <Link to="/writereveiw">
                <button type="button">
                    Write a Review
                </button>
                </Link>
            </div>

            <div className="login">
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>

            <div className="sign-Up">
                <Link to="/signin">
                <button>Sign-Up</button>
                </Link>
            </div>
        </div>
    </div>
    );
}

export default Navbar;