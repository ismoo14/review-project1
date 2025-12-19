import React from 'react'
import { Link } from 'react-router-dom';
import './business.css';
import logo from '../../assets/logo.png';
import bussimg from '../../assets/buss-img.svg'

const Business = () => {
  return (
    <div className="business-page-wrapper">
      {/* Detailed Header for Business */}
      <header className="business-header">
        <div className="biz-header-left">
          <Link to="/" className="biz-logo-container">
            <img src={logo} alt="Ethio Mesob Logo" className="biz-brand-logo" />
            <span className="biz-logo-tag">for business</span>
          </Link>
        </div>
        <div className="biz-header-right">
          <div className="phone-info">
            <i className="phone-icon">📞</i>
            <span>(877) 767-9357</span>
          </div>
          <Link to="/login" className="biz-nav-btn login-white">Log In</Link>
          <Link to="/signup" className="biz-nav-btn signup-red">Sign Up</Link>
        </div>
      </header>

      <main className="business-main-content">
        {/* Left Side: Onboarding Form */}
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
              <button className="biz-search-icon">🔍</button>
            </div>
          </div>
        </section>

        {/* Right Side: Large Illustration with Stats */}
        <section className="biz-image-section">
          <div className="biz-stats-card">
            <p>An average of 2.5 million people visit Yelp each day¹</p>
          </div>
          <div className="biz-illustration-container">
             {/* Replace with your specific business illustration image */}
            <img src={bussimg} alt="Business Illustration" />
          </div>
          <p className="biz-footnote">¹ Comscore Media Metrix®, calculation based on the monthly average of Yelp visitors for 2024.</p>
        </section>
      </main>
    </div>
  )
}

export default Business