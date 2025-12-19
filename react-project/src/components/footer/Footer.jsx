import React from 'react'
import './footer.css'; 
import logo from '../../assets/logo.png'; 

// 🌟 UPDATED: Streamlined Links focusing on Food and Drink
const footerLinks = [
    {
        title: 'About',
        links: ['About Ethio Mesob', 'Careers', 'Press', 'Content Guidelines', 'Accessibility']
    },
    {
        title: 'Discover Food & Drink',
        links: ['Collections of Top Cafes', 'Best Ethiopian Restaurants', 'New & Trending Spots', 'Foodie Blog', 'Talk about Food']
    },
    {
        title: 'Ethio Mesob for Business',
        links: ['Claim your Restaurant Page', 'Advertise your Cafe', 'Restaurant Success Stories', 'Request a Demo']
    },
    {
        title: 'Community',
        links: ['Write a Review', 'Support', 'Terms of Service', 'Privacy Policy']
    }
];

const Footer = () => {
return (
    <footer className="main-footer">
            <div className="container footer-content-wrapper">
                
                {/* 🌟 Column Links */}
                <div className="footer-links-grid">
                    {footerLinks.map((section, index) => (
                        <div key={index} className="footer-column">
                            <h4 className="footer-title">{section.title}</h4>
                            <ul className="footer-link-list">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="footer-link">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                {/* 🌟 Copyright Section */}
                <div className="footer-copyright-bar">
                <div className="copyright-inner-content">
                        <span className="copyright-text">
            Copyright © 2024 
        </span>
        
        {/* 🌟 FIX 1: Place the logo next to the brand name */}
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
        </footer>
)
}

export default Footer