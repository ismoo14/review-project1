import React from 'react'
import './signin.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import illust from '../../assets/login-img.jpg'
const Signin = () => {
  return (
    <div className="signup-page-container">
      {/* Top Header with Logo */}
      <header className="login-header-simple">
        <div className="header-container">
          <Link to="/" className="logo-container">
            <img src={logo} alt="Ethio Mesob Logo" className="brand-logo" />
          </Link>
        </div>
      </header>

      <div className="signup-content-wrapper">
        
        {/* Left Side: Sign Up Form */}
        <div className="signup-form-side">
          <h2 className="signup-title">Sign Up for Yelp</h2>
          <p className="signup-subtitle">Connect with great local businesses</p>
          <p className="signup-legal">
            By continuing, you agree to Yelp’s <span className="link-text">Terms of Service</span> and acknowledge Yelp’s <span className="link-text">Privacy Policy</span>.
          </p>

          <div className="social-buttons">
            <button className="social-btn google-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
              Continue with Google
            </button>
          </div>

          <div className="divider-container">
          </div>

          <form className="signup-form">
            {/* Row for First and Last Name */}
            <div className="name-row">
              <input type="text" placeholder="First Name" className="form-input" />
              <input type="text" placeholder="Last Name" className="form-input" />
            </div>
            
            <input type="email" placeholder="Email" className="form-input" />
            <input type="password" placeholder="Password" className="form-input" />
            
            <button type="submit" className="signup-submit-btn">Sign Up</button>
          </form>

          <p className="login-footer-text">
            Already on Yelp? <Link to="/login" className="link-text">Log in</Link>
          </p>
        </div>

        {/* Right Side: Circular Illustration */}
        <div className="signup-image-side">
          <div className="illustration-circle">
            <img 
              src= {illust} 
              alt="Yelp Illustration" 
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signin