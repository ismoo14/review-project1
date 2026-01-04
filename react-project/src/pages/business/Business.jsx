import React from 'react'
import { Link } from 'react-router-dom';
import './business.css';
import logo from '../../assets/logo.png';
import bussimg from '../../assets/buss-img.svg'

const Business = () => {
  return (
    <div className="business-page-wrapper">
      <header className="business-header">
        <div className="biz-header-left">
          <Link to="/" className="biz-logo-container">
            <img src={logo} alt="Ethio Mesob Logo" className="biz-brand-logo" />
            <span className="biz-logo-tag">for Business</span>
          </Link>
        </div>
        <div className="biz-header-right">
          <div className="phone-info">
            <span className="phone-icon">📞</span>
            <span>+251991719305</span>
          </div>
          <Link to="/login" className="biz-nav-btn login-white">Log In</Link>
          <Link to="/signup" className="biz-nav-btn signup-red">Sign Up</Link>
        </div>
      </header>

      <main className="business-main-content">
        <section className="biz-form-section">
          <h1 className="biz-main-title">Hello! Let’s start with your business name!</h1>
          <p className="biz-subtitle">Search or add your business name.</p>
          
          <div className="biz-input-group">
            <label className="biz-input-label">Your business name</label>
            <div className="biz-input-wrapper">
              <input 
                type="text" 
                className="biz-name-input" 
                placeholder=" "
              />
              <button className="biz-search-icon" style={{background: 'transparent', border: 'none', cursor: 'pointer'}}>🔍</button>
            </div>
          </div>
        </section>

        <section className="biz-image-section">
          <div className="biz-stats-card">
            <p> people can find and visit you using Habesh Mesob¹</p>
          </div>
          <div className="biz-illustration-container">
            <img src={bussimg} alt="Business Illustration" />
          </div>
          <p className="biz-footnote">¹ Comscore Media Metrix®, calculation based on the monthly average of Yelp visitors for 2024.</p>
        </section>
      </main>
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

export default Business