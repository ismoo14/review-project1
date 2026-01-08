import React, { useState } from 'react';
import './writereview.css';
import logo from '../../assets/logo.png';
import illustration from '../../assets/illustration.jpg'; 
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

// Import 4 unique images for the visited section
import img1 from '../../assets/img-1.jpg';
import img2 from '../../assets/img-2.jpg';
import img3 from '../../assets/img-3.jpg';
import img4 from '../../assets/img-4.jpg';

const Writereview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Updated cafes data with unique images
  const cafes = [
    { id: 1, name: "Abyssinia Ethiopian Restaurant", location: "Addis Ababa, ET", image: img1 },
    { id: 2, name: "Tomoca Coffee", location: "Addis Ababa, Ethiopia", image: img2 },
    { id: 3, name: "Kategna Ethio-Cuisine", location: "Jimma, OR", image: img3 },
    { id: 4, name: "Yod Abyssinia", location: "Adama, OR", image: img4 },
  ];

  const filteredCafes = cafes.filter(cafe =>
    searchTerm.length > 0 &&
    cafe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCafe = (cafe, initialRating = 0) => {
    // We pass the cafe AND an optional initial rating to the next page
    navigate('/review-page', { 
      state: { 
        selectedCafe: cafe,
        initialRating: initialRating 
      } 
    });
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
                  <input type="text" placeholder="Mercato, Addis" />
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
          {cafes.slice(0, 4).map((cafe) => (
            <div key={cafe.id} className="visited-card">
              <div className="card-image-container" onClick={() => handleSelectCafe(cafe)}>
                <img src={cafe.image} alt={cafe.name} />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-name" onClick={() => handleSelectCafe(cafe)}>{cafe.name}</h3>
                </div>
                <p className="card-prompt">Do you recommend this business?</p>
                <div className="card-stars">
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <span 
                      key={starValue} 
                      className="empty-star-interactive"
                      onClick={() => handleSelectCafe(cafe, starValue)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer-copyright-bar">
        <div className="copyright-inner-content">
          <span className="copyright-text">Copyright © 2026</span>
          <span className="copyright-brand-name">
            Ethio Mesob, Inc.
            <img src={logo} alt="Ethio Mesob Logo" className="footer-logo" />
          </span>
          <span className="copyright-text">All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Writereview;