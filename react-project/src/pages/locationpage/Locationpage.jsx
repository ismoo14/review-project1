import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './locationpage.css';
import logo from "../../assets/logo.png"; // Ensure this path is correct

// Sample data - You can move this to a separate file later
const cafes = [
    { id: 1, name: "Abyssinia Ethiopian Restaurant", city: "Mercato", location: "Near Grand Mosque", rating: 4.4, reviews: 472, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Tomoca Coffee", city: "Addis Ababa", location: "Piazza", rating: 4.8, reviews: 120, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Mercato Traditional Coffee", city: "Mercato", location: "Market Square", rating: 4.2, reviews: 85, image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "Capital One Café", city: "San Francisco", location: "Downtown", rating: 4.0, reviews: 310, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=60" },
    { id: 5, name: "Hidya cafe", city: "Mercato", location: "Near Grand Mosque", rating: 4.4, reviews: 472, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "1-LOVE cafe", city: "Mercato", location: "Near Grand Mosque", rating: 4.4, reviews: 472, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60" },
    { id: 7, name: "Friends coffee House", city: "Mercato", location: "Near Grand Mosque", rating: 4.4, reviews: 472, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60" },

];

const Locationpage = () => {
    const [searchParams] = useSearchParams();
    
    // Get the location from the URL (?find_loc=Mercato)
    const locationQuery = searchParams.get("find_loc") || "";

    // Filter cafes based on the city in the URL
    const filteredCafes = cafes.filter(cafe => 
        cafe.city.toLowerCase().includes(locationQuery.toLowerCase())
    );

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
                        <Link to="/login">
                            <button className="nav-btn login-btn">Login</button>
                        </Link>
                        <Link to="/signin">
                            <button className="nav-btn signup-btn">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* --- CONTENT AREA --- */}
            <div className="results-container">
                {/* LEFT SIDE: SCROLLABLE LIST */}
                <div className="list-side">
                    <h2 className="results-title">
                        {filteredCafes.length > 0 
                            ? `Best Cafes in ${locationQuery}` 
                            : `No cafes found in "${locationQuery}"`}
                    </h2>
                    
                    <div className="cafe-list">
                        {filteredCafes.map(cafe => (
                            <Link 
        to="/cafe-page" 
        state={{ cafeData: cafe }} 
        key={cafe.id} 
        style={{ textDecoration: 'none', color: 'inherit' }} // Keeps your styling clean
    >
                            <div key={cafe.id} className="cafe-card">
                                <div className="image-container">
                                    <img src={cafe.image} alt={cafe.name} />
                                </div>
                                <div className="cafe-info">
                                    <h3>{cafe.name}</h3>
                                    <p className="stars">⭐⭐⭐⭐⭐ {cafe.rating} ({cafe.reviews} reviews)</p>
                                    <p className="location-text">{cafe.location} • {cafe.city}</p>
                                    <p className="description">"Great coffee and authentic atmosphere in the heart of the city..."</p>
                                    <div className="tags">
                                        <span>Coffee & Tea</span>
                                        <span>Ethiopian</span>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE: STICKY MAP */}
                <div className="map-side">
                    <div className="sticky-map">
        <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0, backgroundColor: "#f0f0f0" }} /* Light gray instead of black */
            /* Fixed URL format for Google Maps Embed */
            src={`https://www.google.com/maps?q=${locationQuery || "Addis Ababa"}&output=embed`}
            allowFullScreen
        ></iframe>
    </div>
                </div>
            </div>
        </div>
    );
}

export default Locationpage;