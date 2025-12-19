import React from 'react'
import './writereview.css'
import logo from '../../assets/logo.png'
import illustiration from '../../assets/illustration.jpg'
import SearchIcon from '@mui/icons-material/Search';
const Writereview = () => {
  return (
    <div>
        <nav className="navbar-wrapper">
      <div className="navbar-container">
        
        <div className="navbar-left">
            <img src={logo} alt="Ethio Mesob Logo" className="nav-logo" />
        </div>

        <div className="navbar-right">
          <button className="nav-btn login-btn">
            login Up
            </button> 
          <button className="nav-btn signup-btn">
            Sign Up
            </button> 
            
        </div>

      </div>
    </nav>

<div className="hero-container">
        
        {/* Left Side: Text and Search */}
        <div className="hero-left">
          <h1 className="hero-title">Find a business to review</h1>
          <p className="hero-subtitle">
            Review anything from your favorite patio spot to your local flower shop.
          </p>

          <div className="search-bar-container">
            <div className="search-input-group">
              <input 
                type="text" 
                placeholder="Try lunch, yoga studio, plumber" 
                className="search-input business-input"
              />
              <div className="divider"></div>
              <input 
                type="text" 
                placeholder="San Francisco, CA" 
                className="search-input location-input"
              />
            </div>
            <button className="search-btn">
              <SearchIcon style={{ color: 'white' }} />
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img 
            src={illustiration} 
            alt="Review Illustration" 
            className="hero-image"
          />
        </div>

      </div>
    </div>
    
    
  )
}

export default Writereview