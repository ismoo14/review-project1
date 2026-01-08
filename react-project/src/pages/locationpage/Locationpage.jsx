import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './locationpage.css';
import logo from "../../assets/logo.png";
import img1 from '../../assets/img-1.jpg';
import img11 from '../../assets/img-11.jpg';
import img3 from '../../assets/img-3.jpg';
import img14 from '../../assets/img-14.jpg';
import img15 from '../../assets/img-15.jpg';
import img10 from '../../assets/img-10.jpg';
import cafe1 from '../../assets/cafe1-img.jpg';

// Sample data
const cafes = [
    { id: 1, name: "Abyssinia Ethiopian cafe", city: "Jimma", location: "mercato", rating: 4.4, reviews: 472, image: cafe1 },
    { id: 2, name: "Hidya coffee House", city: "jimma", location: "Near Grand Mosque", rating: 4.4, reviews: 472, image: img15 },
    { id: 3, name: "Tomoca Coffee House", city: "Addis Ababa", location: "summit", rating: 4.8, reviews: 120, image: img10 },
    { id: 4, name: "Aba jiffar Traditional Coffee House", city: "jimma", location: "qochi", rating: 4.2, reviews: 85, image: img11 },
    { id: 5, name: "Capital One Café", city: "Addis Ababa", location: "ayat", rating: 4.0, reviews: 310, image: img3 },
    { id: 6, name: "1-LOVE cafe", city: "jimma", location: "Near Grand Mosque", rating: 4.4, reviews: 472, image: img1 },
    { id: 7, name: "Friends coffee House", city: "jimma", location: "Near Grand Mosque", rating: 4.4, reviews: 472, image: img14 },
];

const Locationpage = () => {
    const [searchParams] = useSearchParams();
    
    // Get search terms from URL
    const rawDesc = searchParams.get("find_desc")?.toLowerCase().trim() || "";
    const locationQuery = searchParams.get("find_loc")?.toLowerCase().trim() || "";

    // --- TYPO CORRECTION / NORMALIZATION ---
    // This function catches common typos and treats them as the correct word
    const getNormalizedQuery = (query) => {
        // Regex matches: cofe, cofee, coffe, coffee
        if (/^cof+ee?$/.test(query)) return "coffee";
        // Matches: caf, cafee, cafe
        if (query === "caf" || query === "cafee") return "cafe";
        return query;
    };

    const descQuery = getNormalizedQuery(rawDesc);

    // 1. FILTERING LOGIC
    const filteredCafes = cafes.filter(cafe => {
        const name = cafe.name.toLowerCase();
        const city = cafe.city.toLowerCase();
        const loc = cafe.location.toLowerCase();

        let matchesCategory = true; 
        if (descQuery !== "") {
            // Check for normalized keywords
            if (descQuery === "coffee") {
                matchesCategory = name.includes("coffee");
            } else if (descQuery === "cafe" || descQuery === "café") {
                matchesCategory = name.includes("cafe") || name.includes("café");
            } else {
                matchesCategory = name.includes(descQuery);
            }
        }

        const matchesLocation = locationQuery === "" || 
                                city.includes(locationQuery) || 
                                loc.includes(locationQuery);

        return matchesCategory && matchesLocation;
    });

    // 2. DYNAMIC TITLE LOGIC
    const getPageTitle = () => {
        if (filteredCafes.length === 0) {
            return `No results found for "${rawDesc}" in ${locationQuery || "Ethiopia"}`;
        }

        const cityDisplayName = locationQuery 
            ? locationQuery.charAt(0).toUpperCase() + locationQuery.slice(1) 
            : "Ethiopia";

        // Use the normalized descQuery to decide the title
        if (descQuery === "coffee") {
            return `Best Coffee House in ${cityDisplayName}`;
        } else if (descQuery === "cafe" || descQuery === "café") {
            return `Best Cafes in ${cityDisplayName}`;
        }

        return `Top Results in ${cityDisplayName}`;
    };

    return (
        <div className="page-wrapper">
            {/* --- NAVBAR --- */}
            <nav className="navbar-wrapper">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <Link to="/" className="logo-container">
                            <img src={logo} alt="Ethio Mesob Logo" className="brand-logo" />
                        </Link>
                    </div>
                    <div className="navbar-right">
                        <Link to="/login"><button className="nav-btn login-btn">Login</button></Link>
                        <Link to="/signin"><button className="nav-btn signup-btn">Sign Up</button></Link>
                    </div>
                </div>
            </nav>

            {/* --- CONTENT AREA --- */}
            <div className="results-container">
                {/* LEFT SIDE: LIST */}
                <div className="list-side">
                    <h2 className="results-title">{getPageTitle()}</h2>
                    
                    <div className="cafe-list">
                        {filteredCafes.map(cafe => {
                            const isCoffee = cafe.name.toLowerCase().includes("coffee");
                            // Logic to navigate to specific page
                            const destination = isCoffee ? "/coffee-page" : "/cafe-page";

                            return (
                                <Link 
                                    to={destination} 
                                    state={{ cafeData: cafe }} 
                                    key={cafe.id} 
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <div className="cafe-card">
                                        <div className="image-container">
                                            <img src={cafe.image} alt={cafe.name} />
                                        </div>
                                        <div className="cafe-info">
                                            <h3>{cafe.name}</h3>
                                            <p className="stars">⭐⭐⭐⭐⭐ {cafe.rating} ({cafe.reviews} reviews)</p>
                                            <p className="location-text">{cafe.location} • {cafe.city}</p>
                                            <p className="description">
                                                {isCoffee 
                                                    ? "Freshly roasted Ethiopian coffee with a traditional touch." 
                                                    : "Great food and authentic atmosphere in the heart of the city."}
                                            </p>
                                            <div className="tags">
                                                <span>{isCoffee ? "Coffee House" : "Cafe & Restaurant"}</span>
                                                <span>Ethiopian</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT SIDE: STICKY MAP */}
                <div className="map-side">
                    <div className="sticky-map">
                        <iframe
                            title="map"
                            width="100%" height="100%" frameBorder="0"
                            style={{ border: 0, backgroundColor: "#f0f0f0" }}
                            src={`https://maps.google.com/maps?q=${locationQuery || "Ethiopia"}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* --- FOOTER --- */}
            <div className="footer-copyright-bar">
                <div className="copyright-inner-content">
                    <span className="copyright-text">Copyright © 2024</span>
                    <span className="copyright-brand-name">
                        Ethio Mesob, Inc.
                        <img src={logo} alt="Ethio Mesob Logo" className="footer-logo" />
                    </span>
                    <span className="copyright-text">All rights reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default Locationpage;