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
  {
    id: 1,
    name: "I L.",
    userImage: "https://randomuser.me/api/portraits/women/1.jpg", // Real person image
    friends: 3,
    reviewsCount: 44,
    photosCount: 77,
    isElite: false,
    stars: 5,
    date: "Dec 4, 2025",
    text: "Love the wonderful vegan options at Abyssinia's Ethiopian Restaurant..."
  },
  {
    id: 2,
    name: "Alana E.",
    userImage: "https://randomuser.me/api/portraits/women/2.jpg",
    friends: 8,
    reviewsCount: 127,
    photosCount: 97,
    isElite: true,
    stars: 4,
    date: "Sep 25, 2025",
    text: "Pulled up for a friend's birthday dinner..."
  },
  {
    id: 2,
    name: "Alana E.",
    userImage: "https://randomuser.me/api/portraits/women/2.jpg",
    friends: 8,
    reviewsCount: 127,
    photosCount: 97,
    isElite: true,
    stars: 4,
    date: "Sep 25, 2025",
    text: "Pulled up for a friend's birthday dinner..."
  },
  {
    id: 2,
    name: "Alana E.",
    userImage: "https://randomuser.me/api/portraits/women/2.jpg",
    friends: 8,
    reviewsCount: 127,
    photosCount: 97,
    isElite: true,
    stars: 4,
    date: "Sep 25, 2025",
    text: "Pulled up for a friend's birthday dinner..."
  }
];

  return (
    <div className="page-container">
  <nav className="navbar-wrapper">
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Ethio Mesob Logo" className="brand-logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/login"><button className="nav-btn login-btn">Login</button></Link>
        <Link to="/signin"><button className="nav-btn signup-btn">Sign Up</button></Link>
      </div>
    </div>
  </nav>

  <div className="review-layout">
    {/* LEFT SIDE: THE FORM */}
    <div className="review-main">
      <div className="cafe-header">
        <img src={bussimg} alt="Cafe Logo" className="cafe-icon" />
        <div className="cafe-title-info">
          <h1>{cafe.name}</h1>
          <p>{cafe.location}</p>
        </div>
      </div>

      <div className="rating-section-card">
        <h3 className="section-title">How would you rate your experience?</h3>
        <div className="stars-wrapper">
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
          <span className="rating-label">
            {hover || rating ? getRatingText(hover || rating) : "Select your rating"}
          </span>
        </div>
      </div>

      <div className="review-input-section">
        <h3 className="section-title">Tell us about your experience</h3>
        <p className="subtitle">A few things to consider in your review</p>
        <div className="tags">
          <span>Food</span> <span>Service</span> <span>Ambiance</span>
        </div>
        <textarea 
          placeholder="Start your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="textarea-footer">
          <p className={`min-chars ${reviewText.length >= 75 ? 'success' : ''}`}>
            {reviewText.length < 75 
              ? `Reviews need to be at least 75 characters. You need ${75 - reviewText.length} more.` 
              : "Minimum length reached!"}
          </p>
        </div>
      </div>

      <button 
        className="post-btn" 
        disabled={rating === 0 || reviewText.length < 75}
      >
        Post Review
      </button>
    </div>

    {/* RIGHT SIDE: SIDEBAR */}
    <div className="review-sidebar">
      <h2 className="sidebar-title">Recent reviews</h2>
      <div className="sidebar-list">
        {recentReviews.map(rev => (
          <div key={rev.id} className="sidebar-rev-card">
            <div className="user-info">
              <div className="user-avatar">
                <img src={rev.userImage} alt={rev.name} />
              </div>
              <div className="user-meta">
                <strong>{rev.name}</strong>
                <p className="rev-date">{rev.date}</p>
              </div>
            </div>
            <div className="rev-rating-row">
  <div className="mini-stars">
    {[1, 2, 3, 4, 5].map((index) => (
      <span 
        key={index} 
        className={`star-box-mini ${index <= rev.stars ? 'filled' : ''}`}
      >
        ★
      </span>
    ))}
  </div>
  <span className="rev-date">{rev.date}</span>
</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default Reviewpage;