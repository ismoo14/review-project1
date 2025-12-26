import React, { useState } from 'react';
import './writereview.css';
import logo from '../../assets/logo.png';
import illustration from '../../assets/illustration.jpg'; // fixed typo
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

const Writereview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Mock cafe data
  const cafes = [
    { id: 1, name: "Abyssinia Ethiopian Restaurant", location: "Oakland, CA" },
    { id: 2, name: "Tomoca Coffee", location: "Addis Ababa, Ethiopia" },
    { id: 3, name: "Abyssinian Kitchen", location: "Portland, OR" },
    { id: 4, name: "Capital One Café", location: "San Francisco, CA" },
    { id: 5, name: "Abyssinia Market", location: "Oakland, CA" },
  ];

  // Filter cafes based on input
  const filteredCafes = cafes.filter(cafe =>
    searchTerm.length > 0 &&
    cafe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCafe = (cafe) => {
    setSearchTerm(cafe.name); // Optional: fill input with selected name
    navigate('/review-page', { state: { selectedCafe: cafe } });
  };

  return (
    <div className="page-wrapper">
      <nav className="navbar-wrapper">
        <div className="navbar-container">
          <div className="navbar-left">
            <Link to="/" className="logo-container">
              <img src={logo} alt="Ethio Mesob Logo" className="brand-logo" />
            </Link>
          </div>
          <div className="navbar-right">
            <button className="nav-btn login-btn">Login</button>
            <button className="nav-btn signup-btn">Sign Up</button>
          </div>
        </div>
      </nav>

      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">Find a business to review</h1>
          <p className="hero-subtitle">
            Review anything from your favorite patio spot to your local flower shop.
          </p>

          <div className="search-bar-container">
            <div className="search-input-group">
              {/* Business Name Input + Inline Suggestions */}
              <div className="business-input-wrapper">
                <input
                  type="text"
                  placeholder="Try lunch, yoga studio, plumber"
                  className="search-input business-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Suggestions List - Flows naturally in document (pushes content down) */}
                {filteredCafes.length > 0 && (
                  <div className="suggestions-list">
                    {filteredCafes.slice(0, 5).map((cafe) => (
                      <div
                        key={cafe.id}
                        className="suggestion-item"
                        onMouseDown={() => handleSelectCafe(cafe)} // Prevents blur before click
                      >
                        <div className="item-image-placeholder"></div>
                        <div className="item-text">
                          <div className="item-name">{cafe.name}</div>
                          <div className="item-location">{cafe.location}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="divider"></div>

              <input
                type="text"
                placeholder="San Francisco, CA"
                className="search-input location-input"
                defaultValue="San Francisco, CA"
              />
            </div>

            <button className="search-btn">
              <SearchIcon style={{ color: 'white' }} />
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img src={illustration} alt="Review Illustration" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Writereview;