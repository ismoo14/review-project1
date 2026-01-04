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
          <h2 className="login-title">Log in to Ethio Mesob</h2>
          <p className="login-legal">
            By continuing, you agree to Ethio Mesob <span className="link-text">Terms of Service</span> and acknowledge Habesh Mesob’s <span className="link-text">Privacy Policy</span>.
          </p>

          <div className="divider-container">
          </div>

          <form className="login-form">
            <input type="email" placeholder="Email" className="form-input" />
            <input type="password" placeholder="Password" className="form-input" />
            <button type="submit" className="login-submit-btn">Log In</button>
          </form>

        <p className='login-footer-link'>New to Habesha Mesob? <Link to="/signin"> <span>Sign in</span></Link></p>
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

export default Login;