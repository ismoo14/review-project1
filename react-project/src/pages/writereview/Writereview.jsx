import React, { useState } from 'react';
import './writereview.css';
import logo from '../../assets/logo.png';
import illustration from '../../assets/illustration.jpg'; 
import SearchIcon from '@mui/icons-material/Search';
import img1 from '../../assets/img-10.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Writereview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const cafes = [
    { id: 1, name: "Abyssinia Ethiopian Restaurant", location: "Addis Ababa, ET" },
    { id: 2, name: "Tomoca Coffee", location: "Addis Ababa, Ethiopia" },
    { id: 3, name: "Abyssinian Kitchen", location: "jimma, OR" },
    { id: 4, name: "Capital One Café", location: "Adama, OR" },
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
            <h1 className="hero-title">Find a Business to review</h1>
            <p className="hero-subtitle">
              Review anything from your favorite coffee spot to your local cafe.
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
                  <input type="text" placeholder="mercato, Addis" />
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

      <section className="visited-section">
        <h2 className="visited-title">Visited one of these places recently?</h2>
        <div className="visited-grid">
          {cafes.slice(0, 2).map((cafe) => (
            <div key={cafe.id} className="visited-card">
              <div className="card-image-container">
                <img src={img1} alt={cafe.name} />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-name">{cafe.name}</h3>
                </div>
                <p className="card-prompt">Do you recommend this business?</p>
                <div className="card-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="empty-star">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="footer-copyright-bar">
                          <div className="copyright-inner-content">
            <span className="copyright-text">
            Copyright © 2024 
                    </span>
                  <span className="copyright-brand-name">
                    Ethio Mesob, Inc.
                <img src={logo} alt="Ethio Mesob Logo" className="footer-logo" />
                </span>
          
                <span className="copyright-text">
                All rights reserved.
              </span>
            </div>
                </div>
    </div>
  );
};

export default Writereview;