import React, { useState } from 'react';
import "./navbar.css";
import { useNavigate, Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const cafes = [
        { id: 1, name: "Abyssinia Ethiopian Restaurant", location: "Oakland, CA", rating: 4.4, reviews: 472 },
        { id: 2, name: "Tomoca Coffee", location: "Addis Ababa, Ethiopia", rating: 4.8, reviews: 120 },
        { id: 3, name: "Abyssinian Kitchen", location: "Portland, OR", rating: 4.2, reviews: 85 },
        { id: 4, name: "Capital One Café", location: "San Francisco, CA", rating: 4.0, reviews: 310 },
        { id: 5, name: "Abyssinia Market", location: "Oakland, CA", rating: 4.5, reviews: 55 },
    ];

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const term = searchTerm.toLowerCase().trim();
        const loc = location.toLowerCase().trim();

        if (loc !== "") {
            navigate(`/locationpage?find_desc=${searchTerm}&find_loc=${location}`);
            setIsMenuOpen(false); // Close menu on search
            return;
        }
        const foundCafe = cafes.find(c => c.name.toLowerCase() === term);
        if (foundCafe) {
            navigate('/cafe-page', { state: { cafeData: foundCafe } });
        } else if (term !== "") {
            navigate(`/locationpage?find_desc=${searchTerm}&find_loc=`);
        }
        setIsMenuOpen(false);
    };

    return (
        <div className='navbar'>
            <div className="container">
                {/* LOGO */}
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                {/* SEARCH FORM */}
                <div className="form">
                    <form onSubmit={handleSearchSubmit} className="search-bar-pill">
                        <div className="input-group what">
                            <input 
                                type="text" 
                                placeholder='coffee place, cafe'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="search-divider"></div>
                        <div className="input-group where">
                            <input 
                                type="text" 
                                placeholder='Mercato, Addis Ababa'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="search-icon-btn">
                            <SearchIcon style={{ color: 'white' }} />
                        </button>
                    </form>
                </div>

                {/* HAMBURGER BUTTON (Visible only on mobile) */}
                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* RIGHT CONTENT (Sliding Menu on mobile) */}
                <div className={`nav-right-content ${isMenuOpen ? 'open' : ''}`}>
                    <div className="business-dropdown-container">
                        <div className="business" onClick={toggleDropdown}>
                            <h5>Ethio Mesob for business
                                <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
                            </h5>
                        </div>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <Link to="/business" className="dropdown-item">
                                    <span className="icon">➕</span> Add a Business
                                </Link>
                                <a href="/claim-business" className="dropdown-item">
                                    <span className="icon">✔️</span> Claim your business
                                </a>
                                <Link to="/businesslogin" className="dropdown-item">
                                    <span className="icon">👤</span> Business Login
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="write">
                        <Link to="/writereveiw" onClick={() => setIsMenuOpen(false)}>
                            <button type="button">Write a Review</button>
                        </Link>
                    </div>

                    <div className="login">
                        <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                            <button>Login</button>
                        </Link>
                    </div>

                    <div className="sign-Up">
                        <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                            <button>Sign-Up</button>
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* OVERLAY: Dims the background when menu is open */}
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </div>
    );
}

export default Navbar;