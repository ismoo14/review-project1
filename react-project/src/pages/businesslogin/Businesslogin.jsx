import React from 'react';
import { Link } from 'react-router-dom';
import './businesslogin.css';
import logo from '../../assets/logo.png';

const Businesslogin = () => {
  return (
    <div className="biz-login-wrapper">
      {/* Business Header */}
      <header className="business-header">
        <div className="biz-header-left">
          <Link to="/" className="biz-logo-link">
            <img src={logo} alt="Ethio Mesob" className="biz-logo-img" />
            <span className="biz-tag">for business</span>
          </Link>
        </div>
        <div className="biz-header-right">
          <div className="biz-phone">
            <span className="phone-icon">🎧</span>
            <span>+251991719302</span>
          </div>
        </div>
      </header>

      {/* Centered Login Content */}
      <main className="biz-login-main">
        <div className="biz-login-card">
          <h1 className="biz-welcome-title">Welcome back</h1>
          <p className="biz-legal-text">
            By continuing, you agree to Habesh Mesob's <span className="blue-link">Terms of Service</span> and acknowledge Habesh Mesob’s <span className="blue-link">Privacy Policy</span>.
          </p>

          <form className="biz-credentials-form">
            <div className="biz-input-field">
              <input type="email" placeholder="Email address" className="biz-input" />
            </div>
            <div className="biz-input-field">
              <input type="password" placeholder="Password" className="biz-input" />
            </div>
            
            <div className="forgot-pass-wrapper">
              <span className="blue-link small-text">Forgot password?</span>
            </div>

            <button type="submit" className="biz-continue-btn">Continue</button>
          </form>

          <p className="biz-signup-footer">
            Don’t have an account? <Link to="/business"> <span className="blue-link">Create One.</span> </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Businesslogin;