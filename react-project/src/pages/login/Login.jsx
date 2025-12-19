import React from 'react';
import './login.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import illust from '../../assets/login-img.jpg'

const Login = () => {
  return (
    <div className="login-page-container">
      {/* HEADER: Moves to the top, outside of the center wrapper */}
      <header className="login-header-simple">
        <div className="header-container">
          <Link to="/" className="logo-container">
            <img src={logo} alt="Ethio Mesob Logo" className="brand-logo" />
          </Link>
        </div>
      </header>
        
      <div className="login-content-wrapper">
        {/* Left Side: Form Section */}
        <div className="login-form-side">
          <h2 className="login-title">Log in to Yelp</h2>
          <p className="login-legal">
            By continuing, you agree to Yelp’s <span className="link-text">Terms of Service</span> and acknowledge Yelp’s <span className="link-text">Privacy Policy</span>.
          </p>

          <div className="social-buttons">
            <button className="social-btn google-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
              Continue with Google
            </button>
            <button className="social-btn apple-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
              Continue with Apple
            </button>
          </div>

          <div className="divider-container">
            <hr /> <span>OR</span> <hr />
          </div>

          <form className="login-form">
            <input type="email" placeholder="Email" className="form-input" />
            <input type="password" placeholder="Password" className="form-input" />
            <button type="submit" className="login-submit-btn">Log In</button>
          </form>

          <p className="login-footer-link">Login via email link</p>
        </div>

        {/* Right Side: Circular Illustration */}
        <div className="login-image-side">
          <div className="illustration-circle">
            <img 
              src= {illust} 
              alt="Yelp Illustration" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;