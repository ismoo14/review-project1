import React, { useState } from 'react';
import './writereview.css';
import logo from '../../assets/logo.png';
import illustration from '../../assets/illustration.jpg'; 
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

const Writereview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const cafes = [
    { id: 1, name: "Abyssinia Ethiopian Restaurant", location: "Oakland, CA" },
    { id: 2, name: "Tomoca Coffee", location: "Addis Ababa, Ethiopia" },
    { id: 3, name: "Abyssinian Kitchen", location: "Portland, OR" },
    { id: 4, name: "Capital One Café", location: "San Francisco, CA" },
  ];

  const filteredCafes = cafes.filter(cafe =>
    searchTerm.length > 0 &&
    cafe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCafe = (cafe) => {
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

      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">Find a business to review</h1>
            <p className="hero-subtitle">
              Review anything from your favorite patio spot to your local flower shop.
            </p>

            <div className="search-composite">
              <div className="search-pill">
                <div className="input-box business-box">
                  <input
                    type="text"
                    placeholder="Try lunch, yoga studio, plumber"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {/* Suggestions list stays inside the relative container */}
                  {filteredCafes.length > 0 && (
                    <div className="suggestions-list">
                      {filteredCafes.map((cafe) => (
                        <div key={cafe.id} className="suggestion-item" onMouseDown={() => handleSelectCafe(cafe)}>
                          <div className="item-text">
                            <div className="item-name">{cafe.name}</div>
                            <div className="item-location">{cafe.location}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="input-divider"></div>

                <div className="input-box location-box">
                  <input type="text" placeholder="San Francisco, CA" defaultValue="San Francisco, CA" />
                </div>
              </div>

              <button className="hero-search-btn">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="illustration-card">
              <img src={illustration} alt="Writing reviews" className="hero-image" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Writereview;