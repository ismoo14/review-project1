import React from 'react'
import './catagory.css'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalBarIcon from '@mui/icons-material/LocalBar';

const categories = [
    { name: 'All Restaurants', icon: RestaurantIcon },
    { name: 'Cafes & Coffee', icon: LocalCafeIcon },
    { name: 'Ethiopian Food', icon: TakeoutDiningIcon },
    { name: 'Breakfast & Brunch', icon: BrunchDiningIcon },
    { name: 'Fast Food', icon: FastfoodIcon },
    { name: 'Bars & Pubs', icon: LocalBarIcon },
];
const Catagory = () => {
return (
    <div className="category-section-wrapper">
            <div className="container">
                <h2 className="section-title">
                    Catagories
                </h2>
                
                <div className="categories-grid">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <a href={`/search?category=${category.name}`} className="category-tile" key={category.name}>
                                <div className="category-icon-bg">
                                    <IconComponent className="category-icon" />
                                </div>
                                <p className="category-name">{category.name}</p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
)
}

export default Catagory