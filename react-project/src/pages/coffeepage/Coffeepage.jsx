import React, { useRef } from 'react'
import './coffeepage.css';
import logo from '../../assets/logo.png';
import cafeimg from '../../assets/cafe1-img.jpg';
import cafeimg2 from '../../assets/cafe-img121.jpg';
import img1 from '../../assets/img-111.jpg';
import img2 from '../../assets/img-22.jpg';
import img3 from '../../assets/img-33.jpg';
import img33 from '../../assets/img-333.jpg';
import pic1 from '../../assets/pic-1.jpg';
import pic2 from '../../assets/pic-2.jpg';
import pic3 from '../../assets/pic-3.jpg';
import img5 from '../../assets/img-55.jpg';
import img6 from '../../assets/img-66.jpg';
import img7 from '../../assets/img-7.jpg';
import img9 from '../../assets/img-99.jpg';
import img15 from '../../assets/img-15.jpg';
import img414 from '../../assets/img-414.jpg';
import { useLocation, Link } from 'react-router-dom';

const Coffeepage = () => {
    const location = useLocation();
      const menuSliderRef = useRef(null);
      
      const scrollMenu = (direction) => {
        if (menuSliderRef.current) {
          const { scrollLeft, clientWidth } = menuSliderRef.current;
          const scrollAmount = clientWidth / 2;
          const scrollTo = direction === 'left' 
            ? scrollLeft - scrollAmount 
            : scrollLeft + scrollAmount;
          
          menuSliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
      };
      
      const cafe = location.state?.cafeData || { 
    name: "Abyssinia Ethiopian Restaurant", 
    rating: 4.4, 
    reviews: 472,
    city: "Addis Ababa",
    location: "Bole",
    image: cafeimg // default image
  };
    
      const menuCategories = [
        { name: "Mocha", img: img1, price: "$150" },
        { name: "Buna", img: img15, price: "$50" },
        { name: "Americano", img: img3, price: "$100" },
        { name: "Black coffee", img: img33, price: "$70" },
        { name: "Latte", img: img9, price: "$130" },
        { name: "Espresso", img: img6, price: "$200" },
        { name: "Cappuccino", img: img5, price: "$150" },
        { name: "Macchiato", img: img414, price: "$150" },
      ];
    
      const popularDishes = [
        { name: "Buna", price: "$50", img: img15 },
        { name: "Americano", price: "$100", img: img3 },
        { name: "Latte", price: "$130", img: img9 },
      ];
    
      const reviewsData = [
        {
          userImg: pic1,
          user: "Alana E.",
          location: "Addis Ababa, ET",
          status: "Elite 25",
          stats: { friends: 8, reviews: 123, photos: 94 },
          rating: 4,
          date: "Sep 25, 2025",
          text: "Best spot in Jimma for a quick caffeine fix. The spriss was amazing, and the staff is incredibly fast. They serve it with fresh popcorn which was a nice touch. Perfect place to sit and people-watch near the mosque.",
          dishImg: img15,
          dishName: "Beyaynet"
        },
        {
          userImg: pic2,
          user: "Rahmet M.",
          location: "Qochi, JI",
          status: "",
          stats: { friends: 12, reviews: 45, photos: 10 },
          rating: 5,
          date: "Dec 2, 2023",
          text: "A very authentic atmosphere. It’s a bit crowded during the afternoons, but the quality of the beans is undeniable. You can tell they roast them fresh every morning. Great place to bring friends for a long chat.",
          dishImg: img2, 
          dishName: "Doro Wot"
        },
        {
          userImg: pic3,
          user: "Siham M.",
          location: "Goro, ET",
          status: "Elite 25",
          stats: { friends: 24, reviews: 89, photos: 150 },
          rating: 5,
          date: "Apr 2, 2025",
          text: "The aroma of roasting beans hits you before you even walk in. I loved the traditional setup with the grass on the floor and the frankincense burning. The macchiato was perfectly layered and strong—exactly how I like it!",
          dishImg: img3, 
          dishName: "Kitifo"
        },
      ];
  return (
    <div className="profile-page">
      {/* NAVBAR */}
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

      {/* PHOTO GALLERY */}
      <div className="photo-banner">
        <div className="photo-grid">
          <img src={img33} alt="Interior" className="banner-img" />
          <img src={cafeimg2} alt="Food" className="banner-img main-focus" />
          <img src={img2} alt="Outside" className="banner-img" />
        </div>
        
        <div className="business-header-info">
          <h1 className="biz-name">{cafe.name}</h1>
          <div className="rating-row">
            <div className="stars-mini">★★★★★</div>
            <span className="review-count">{cafe.rating} ({cafe.reviews} reviews)</span>
          </div>
          <div className="meta-tags">
            <span className="claimed">✓ Claimed</span>
            <span className="dot">•</span>
            <span>$$</span>
            <span className="dot">•</span>
            <span>Ethiopian, Bars, Juice Bars & Smoothies</span>
          </div>
          <div className="status-row">
            <span>11:30 AM - 9:00 PM</span>
          </div>
        </div>
      </div>

      {/* ACTION BAR */}
      <div className="action-bar">
        <Link to="/writereveiw">
          <button type="button" className="write-review-btn">
            ★ Write a review
          </button>
        </Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content-container">
        <div className="left-column">
          
          {/* SECTION 1: MENU CATEGORIES */}
          <div className="menu-header">
            <h2>Our Menu</h2>
          </div>
          <div className="clickable-menu-wrapper">
            <button className="slider-nav-btn prev" onClick={() => scrollMenu('left')}>❮</button>
            <div className="clickable-viewport" ref={menuSliderRef}>
              <div className="clickable-track">
                {menuCategories.map((cat, index) => (
                  <div className="menu-cat-card" key={index}>
                    <img src={cat.img} alt={cat.name} />
                    <span className="dish-price">{cat.price}</span>
                    <h4>{cat.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <button className="slider-nav-btn next" onClick={() => scrollMenu('right')}>❯</button>
          </div>

          <hr className="section-divider" />

          {/* SECTION 2: POPULAR DISHES */}
          <div className="menu-header">
            <h2>Popular Dishes</h2>
          </div>
          <div className="auto-slider-wrapper">
            <div className="dishes-slider">
              <div className="slide-track">
                {[...popularDishes, ...popularDishes].map((dish, index) => (
                  <div className="dish-card" key={index}>
                    <div className="dish-img-wrapper">
                      <img src={dish.img} alt={dish.name} />
                      <span className="dish-price">{dish.price}</span>
                    </div>
                    <div className="dish-info">
                      <h4>{dish.name}</h4>
                      <p>{dish.reviews || "Popular Selection"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="section-divider" />

          {/* SECTION 3: REVIEWS - REFRESHED FOR RESPONSIVENESS */}
          <div className="reviews-container">
            <h3>Recommended Reviews</h3>
            {reviewsData.map((review, index) => (
              <div className="review-card" key={index}>
                {/* Sidebar with Profile Header wrapper */}
                <div className="review-sidebar">
                  <div className="user-profile-header">
                    {review.userImg ? (
                      <img src={review.userImg} alt={review.user} className="user-avatar-img" />
                    ) : (
                      <div className="user-avatar-placeholder"></div>
                    )}
                    <div className="user-info-text">
                      <p className="user-name">
                        {review.user} 
                        {review.status && <span className="elite-tag">{review.status}</span>}
                      </p>
                      <p className="user-location">{review.location}</p>
                      <div className="user-stats">
                        <span>👤 {review.stats.friends}</span> 
                        <span>⭐ {review.stats.reviews}</span> 
                        <span>📷 {review.stats.photos}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="review-main">
                  <div className="review-rating-row">
                    <span className="stars-red">★★★★★</span>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-text">{review.text}</p>
                  
                  {review.dishImg && (
                    <div className="review-photo-attachment">
                      <img src={review.dishImg} alt={review.dishName} />
                      <span className="photo-label">{review.dishName}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN (STICKY MAP) */}
        <div className="right-column">
          <div className="sticky-wrapper">
            <div className="location-card tall-card">
              <div className="map-display">
                <iframe
                  title="Cafe Location"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: '8px 8px 0 0' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.663363321523!2d-121.3942369234857!3d38.601968871787474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ada381e427181%3A0x708a3832c3821016!2s1346%20Fulton%20Ave%2C%20Sacramento%2C%20CA%2095825!5e0!3m2!1sen!2sus!4v1700000000000"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="contact-details">
                <div className="contact-item">
                  <a href="http://www.abyssiniasacramento.com/" target="_blank" rel="noreferrer">
                    abyssiniasacramento.com
                  </a>
                  <span className="icon">🔗</span>
                </div>
                <div className="contact-item">
                  <span>(916) 481-1580</span>
                  <span className="icon">📞</span>
                </div>
                <div className="contact-item directions">
                  <div>
                    <strong>Get Directions</strong>
                    <p>1346 Fulton Ave, Sacramento, CA 95825</p>
                  </div>
                  <span className="icon">📍</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  )
}

export default Coffeepage