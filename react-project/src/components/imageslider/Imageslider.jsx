import React, { useState, useEffect } from 'react';
import './imageslider.css'
import SearchIcon from '@mui/icons-material/Search'; 
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
    
    const totalImages = images.length;
    
    const slideInterval = 5000;
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
                
                <div className="hero-loader">
                    {phrases.map((_, index) => (
                        <div 
                            key={index}
                            className={`loader-line ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)} 
                        ></div>
                    ))}
                </div>

                <div className="hero-content">
                    <h1 className="hero-phrase">
                        {phrases[currentImageIndex]}
                    </h1>
                    
                    <div className="hero-search-cta">
                        <a href="/assistant-search" className="hero-assistant-button">
                            <SearchIcon className="cta-search-icon" />
                            Start your search
                        </a>
                    </div>
                </div>
            </div>
            
            {images.map((image, index) => (
                <div 
                    key={index}
                    className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                </div>
            ))}
        </div>
)
}

export default Imageslider