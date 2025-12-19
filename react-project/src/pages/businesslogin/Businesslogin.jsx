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
            <span>(877) 767-9357</span>
          </div>
        </div>
      </header>

      {/* Centered Login Content */}
      <main className="biz-login-main">
        <div className="biz-login-card">
          <h1 className="biz-welcome-title">Welcome back</h1>
          <p className="biz-legal-text">
            By continuing, you agree to Yelp’s <span className="blue-link">Terms of Service</span> and acknowledge Yelp’s <span className="blue-link">Privacy Policy</span>.
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

          <div className="biz-or-divider">
          </div>

          <div className="biz-social-stack">
            <button className="biz-social-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
              Continue with Google
            </button>
          </div>

          <p className="biz-signup-footer">
            Don’t have an account? <span className="blue-link">Claim your business on Yelp</span> or continue with Google to create one.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Businesslogin;