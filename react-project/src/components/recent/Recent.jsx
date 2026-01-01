import React from 'react'
import './recent.css'; // New CSS file
import StarIcon from '@mui/icons-material/Star';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';

import userPhoto1 from '../../assets/pic-1.jpg'; 
import userPhoto2 from '../../assets/pic-2.jpg'; 
import userPhoto3 from '../../assets/pic-3.jpg';
import userPhoto4 from '../../assets/pic-4.jpg';
import userPhoto5 from '../../assets/pic-5.jpg';
import userPhoto6 from '../../assets/pic-6.jpg';

import reviewPhoto1 from '../../assets/img-4.jpg';
import reviewPhoto2 from '../../assets/img-7.jpg';
import reviewPhoto3 from '../../assets/img-10.jpg';
import reviewPhoto4 from '../../assets/img-11.jpg';
import reviewPhoto5 from '../../assets/img-12.jpg';
import reviewPhoto6 from '../../assets/img-13.jpg';

const activities = [
    {
        user: 'Mahlet M.',
        action: 'wrote a review',
        time: 'just now',
        businessName: 'gordo Cafe',
        category: 'Mexican, Fast Food',
        rating: 4.0,
        reviewText: 'Cheap fast easy place to get burritos in Addis. This is a great take out spot. Its not the best but I...',
        photo: reviewPhoto1,
        userPhoto: userPhoto1,
        link: '/business/gordo-cafe'
    },
    {
        user: 'Kal.',
        action: 'wrote a review',
        time: 'just now',
        businessName: 'MIYAGI CAFE',
        category: 'Chinease, Food',
        rating: 4.0,
        reviewText: 'Cheap fast easy place to get chinease food in Addis. This is a great take out spot. Its not the best but I...',
        photo: reviewPhoto4,
        userPhoto: userPhoto4,
        link: '/business/tokio fries'
    },
    {
        user: 'lil-Hayfa.',
        action: 'wrote a review',
        time: 'just now',
        businessName: 'Gordo Taqueria',
        category: 'Mexican, Fast Food',
        rating: 4.0,
        reviewText: 'Cheap fast easy place to get burritos in Addis. This is a great take out spot. Its not the best but I...',
        photo: reviewPhoto5,
        userPhoto: userPhoto5,
        link: '/business/gordo-taqueria'
    },
    {
        user: 'Samri.',
        action: 'wrote a review',
        time: 'just now',
        businessName: 'TOTOT Traditional food',
        category: 'Traditional, Food',
        rating: 4.0,
        reviewText: 'traditional food to find in Addis. This is a great take out spot...',
        photo: reviewPhoto6,
        userPhoto: userPhoto6,
        link: '/business/gordo-taqueria'
    },
    {
        user: 'Mike20.',
        action: 'added 3 photos',
        time: '5 minutes ago',
        businessName: 'Morning Dew Cafe',
        category: 'Coffee, Pastries',
        rating: 5.0,
        reviewText: 'The best cafe ambiance and the macchiato is perfect! A must-visit place for morning study sessions.',
        photo: reviewPhoto2,
        userPhoto: userPhoto2,
        link: '/business/morning-dew-cafe'
    },
    {
        user: 'Afomiya12.',
        action: 'wrote a review',
        time: '1 hour ago',
        businessName: 'Addis Jazz Bar',
        category: 'Bar, Live Music',
        rating: 4.5,
        reviewText: 'Amazing live music and great cocktails. A bit pricey but worth it for the atmosphere and the talented band.',
        photo: reviewPhoto3,
        userPhoto: userPhoto3,
        link: '/business/addis-jazz-bar'
    },
];

// Helper to render star rating
const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const starArray = [];
    for (let i = 0; i < 5; i++) {
        const starClass = i < fullStars ? 'star-icon full' : 'star-icon empty';
        starArray.push(<StarIcon key={i} className={starClass} />);
    }
    return starArray;
};


const Recent = () => {
return (
    <div className="activity-section-wrapper">
            <div className="container">
                <h2 className="activity-section-title">
                    Recent Activity
                </h2>
                
                <div className="activity-grid">
                    {activities.map((activity, index) => (
                        <div className="activity-card" key={index}>
                            

                            <div className="user-header">
                                <img src={activity.userPhoto} alt={activity.user} className="user-avatar" />
                                <p className="user-action-text">
                                    <span className="user-name">{activity.user}</span> {activity.action}
                                    <span className="time-ago"> - {activity.time}</span>
                                </p>
                            </div>

                            <a href={activity.link} className="review-link-block">

                                <h3 className="business-name">{activity.businessName}</h3>
                                
                                <div className="business-meta-line">
                                    <div className="star-rating">{renderStars(activity.rating)}</div>
                                    <span className="category-text">{activity.category}</span>
                                </div>
                                
                                <div className="review-photo" style={{ backgroundImage: `url(${activity.photo})` }}></div>
                                
                                <p className="review-snippet">{activity.reviewText}</p>
                                <span className="read-more">Read more</span>
                            </a>
                            
                            <div className="interaction-footer">
                                <div className="interaction-icon-group">
                                    <ThumbUpOutlinedIcon className="interaction-icon" />
                                    <LightbulbOutlinedIcon className="interaction-icon" />
                                    <MoodOutlinedIcon className="interaction-icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
)
}

export default Recent