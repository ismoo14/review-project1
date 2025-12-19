import React, { useState, useEffect } from 'react';
import './imageslider.css'

// MUI Icon Import (required for the CTA button)
import SearchIcon from '@mui/icons-material/Search'; 

// NOTE: Ensure these images exist in your '../../assets/' directory
import img1 from '../../assets/img-1.jpg'; 
import img2 from '../../assets/img-2.jpg';
import img3 from '../../assets/img-3.jpg';
import img9 from '../../assets/img-9.jpg';

const images = [
    img1,
    img2,
    img3,
    img9
];

const Imageslider = () => {
    const phrases = [
        "Read trusted reviews. Share your experience.",
        "Finding the next great place?",
        "From injera to Ethiopian coffee",
        "Your local guide to Ethiopian restaurants."
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Total number of images
    const totalImages = images.length;
    
    // Time interval for slide change (e.g., 5000ms = 5 seconds)
    const slideInterval = 5000;

    // useEffect to handle the automatic sliding
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => 
                (prevIndex + 1) % totalImages
            );
        }, slideInterval);

        return () => clearInterval(intervalId);
    }, [totalImages]);
return (
    <div className="slider-container">
            <div className="hero-text-overlay">
                
                {/* 🌟 FIX 2: Mapped over phrases to create dynamic loader lines */}
                <div className="hero-loader">
                    {phrases.map((_, index) => (
                        <div 
                            key={index}
                            // Apply 'active' class only when the index matches the current slide
                            className={`loader-line ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)} 
                        ></div>
                    ))}
                </div>

                <div className="hero-content">
                    {/* Main Hero Text (Automatically broken by CSS max-width) */}
                    <h1 className="hero-phrase">
                        {phrases[currentImageIndex]}
                    </h1>
                    
                    <div className="hero-search-cta">
                        {/* We use a static button/link to mimic the search input */}
                        <a href="/assistant-search" className="hero-assistant-button">
                            {/* 🌟 FIX 3: Added the SearchIcon component */}
                            <SearchIcon className="cta-search-icon" />
                            Start your search
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Image Slides Mapping */}
            {images.map((image, index) => (
                <div 
                    key={index}
                    className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                    // Inline style for background image
                    style={{ backgroundImage: `url(${image})` }}
                >
                    {/* Optional: Add text or overlay here */}
                </div>
            ))}
        </div>
)
}

export default Imageslider