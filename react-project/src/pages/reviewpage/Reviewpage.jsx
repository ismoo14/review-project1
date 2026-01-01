import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './reviewpage.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import bussimg from '../..//assets/img-4.jpg'

const Reviewpage = () => {
  const location = useLocation();
  
  const cafe = location.state?.selectedCafe || { 
    name: "Capital One Café", 
    location: "Union Square, San Francisco" 
  };

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const getRatingText = (value) => {
    switch (value) {
      case 1: return "Terrible";
      case 2: return "Bad";
      case 3: return "OK";
      case 4: return "Good";
      case 5: return "Great";
      default: return "";
    }
  };

  const recentReviews = [
    { id: 1, name: "Rahmet M.", date: "Dec 2, 2023", text: "The service is excellent, they are always very attentive...", stars: 5 },
    { id: 2, name: "Ahmed K.", date: "jan 20, 2025", text: "Located in Addis Ababa, this is one of the best places...", stars: 3 },
    { id: 3, name: "Siham M.", date: "Apr 2, 2025", text: "The service is excellent...", stars: 5 },
    { id: 4, name: "Ismail A.", date: "mar 2, 2024", text: "Family firendly returant", stars: 4 },
  ];

  return (
    <div>
        <nav className="navbar-wrapper">
            <div className="navbar-container">
              <div className="navbar-left">
                <Link to="/" className="logo-container">
                  <img src={logo} alt="Ethio Mesob Logo" className="brand-logo" />
                </Link>
              </div>
              <div className="navbar-right">
                <Link to="/login">
                <button className="nav-btn login-btn">Login</button>
                </Link>
                <Link to="/signin">
                <button className="nav-btn signup-btn">Sign Up</button>
                </Link>
              </div>
            </div>
          </nav>
    
    <div className="review-layout">
        
      {/* LEFT SIDE: THE FORM */}
      <div className="review-main">
        <div className="cafe-header">
          <img src={bussimg} alt="Cafe Logo" className="cafe-icon" />
          <div>
            <h1>{cafe.name}</h1>
            <p>{cafe.location}</p>
          </div>
        </div>

        {/* UPDATED RATING BOX */}
        <div className="rating-section-wrapper">
          <h3 className="rating-question">How would you rate your experience?</h3>
          <div className="stars-container">
            <div className="stars-row">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className={`star-box ${num <= (hover || rating) ? 'active' : ''}`}
                  onClick={() => setRating(num)}
                  onMouseEnter={() => setHover(num)}
                  onMouseLeave={() => setHover(0)}
                  type="button"
                >
                  ★
                </button>
              ))}
            </div>
            {/* Dynamic label appearing next to stars */}
            <span className="rating-label">
              {getRatingText(hover || rating)}
            </span>
          </div>
        </div>

        <div className="input-box">
          <h3>Tell us about your experience</h3>
          <div className="tags">
            <span>Food</span> <span>Service</span> <span>Ambiance</span>
          </div>
          <textarea 
            placeholder="Start your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <p className="min-chars">
            {reviewText.length < 75 
              ? `Reviews need to be at least 75 characters. You need ${75 - reviewText.length} more.` 
              : "Minimum length reached!"}
          </p>
        </div>

        <button 
          className="post-btn" 
          disabled={rating === 0 || reviewText.length < 85}
        >
          Post Review
        </button>
      </div>

      {/* RIGHT SIDE: SIDEBAR */}
      <div className="review-sidebar">
        <h2>Recent reviews</h2>
        {recentReviews.map(rev => (
          <div key={rev.id} className="sidebar-rev-card">
            <div className="user-info">
              <div className="user-avatar">👤</div>
              <div>
                <strong>{rev.name}</strong>
                <p className="rev-date">{rev.date}</p>
              </div>
            </div>
            <div className="mini-stars">{"★".repeat(rev.stars)}</div>
            <p className="rev-preview">{rev.text}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Reviewpage;