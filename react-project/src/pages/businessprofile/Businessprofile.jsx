import React, { useState } from 'react';
import './businessprofile.css';
import logo from '../../assets/logo.png';
import bannerImg from '../../assets/illustration.jpg';

// Material UI Icons
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const Businessprofile = () => {
  // 1. Navigation & UI State
  const [activeTab, setActiveTab] = useState('reviews');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. State for Business Information
  const [businessInfo, setBusinessInfo] = useState({
    name: "Abyssinia Ethiopian Restaurant",
    location: "Addis Ababa, Bole Atlas",
    phone: "+251 911 000 000",
    banner: null,
    logo: null
  });

  // 3. State for Customer Reviews
  const [reviews] = useState([
    { 
      id: 1, 
      user: "I L.", 
      userPic: "https://randomuser.me/api/portraits/women/44.jpg",
      foodPic: "https://images.unsplash.com/photo-1548029960-695d127f4543?q=80&w=500",
      rating: 5, 
      date: "Dec 4, 2025", 
      text: "Love the wonderful vegan options at Abyssinia's Ethiopian Restaurant. The traditionally made injera is perfect for scooping up the delicious mesir wat!" 
    },
    { 
      id: 2, 
      user: "Alana E.", 
      userPic: "https://randomuser.me/api/portraits/women/68.jpg",
      foodPic: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=500",
      rating: 4, 
      date: "Sep 25, 2025", 
      text: "Pulled up for a friend's birthday dinner. The Doro Wat was incredibly flavorful and the service was top-notch." 
    }
  ]);

  // 4. State for Menu Data
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Special Kitfo", price: "450 ETB", cat: "Beef", status: "In Stock", img: null },
    { id: 2, name: "Veggie Combo", price: "320 ETB", cat: "Vegan", status: "In Stock", img: null },
    { id: 3, name: "Doro Wat", price: "550 ETB", cat: "Poultry", status: "Out of Stock", img: null },
  ]);

  // 5. State for "New Dish" Form
  const [newDish, setNewDish] = useState({
    name: '',
    price: '',
    cat: 'Beef',
    img: null
  });

  const cafeStats = {
    averageRating: 4.8,
    totalReviews: 124,
  };

  // --- Handlers ---

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBusinessInfo({ ...businessInfo, [type]: url });
    }
  };

  const handleNewDishImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewDish({ ...newDish, img: URL.createObjectURL(file) });
    }
  };

  const saveNewDish = () => {
    if (newDish.name && newDish.price) {
      const dishToAdd = {
        ...newDish,
        id: Date.now(),
        status: "In Stock",
        price: newDish.price.includes("ETB") ? newDish.price : `${newDish.price} ETB`
      };
      setMenuItems([...menuItems, dishToAdd]);
      setNewDish({ name: '', price: '', cat: 'Beef', img: null }); 
      setIsModalOpen(false); 
    }
  };

  const deleteDish = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <div className="dashboard-wrapper">
      {/* SIDEBAR NAVIGATION */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Ethio Mesob" />
        </div>
        <nav className="sidebar-nav">
          <button className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Customer Reviews</button>
          <button className={`nav-item ${activeTab === 'info' ? 'active' : ''}`} onClick={() => setActiveTab('info')}>General Info</button>
          <button className={`nav-item ${activeTab === 'menu' ? 'active' : ''}`} onClick={() => setActiveTab('menu')}>Manage Menu</button>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>
            {activeTab === 'reviews' && "Customer Reviews"}
            {activeTab === 'info' && "General Info"}
            {activeTab === 'menu' && "Menu Management"}
          </h1>
          <button className="save-all-btn">
            <SaveIcon fontSize="small" /> Save Changes
          </button>
        </header>

        {/* TAB 1: CUSTOMER REVIEWS */}
        {activeTab === 'reviews' && (
          <section className="animate-fade-in">
            <div className="dashboard-card">
              <div className="cafe-banner">
                <img src={businessInfo.banner || bannerImg} alt="Cafe Banner" />
                <div className="banner-overlay">
                  <div className="banner-content">
                    <h2 className="cafe-name-display">{businessInfo.name}</h2>
                    <p className="cafe-location-display">{businessInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="rating-summary-bar">
                <div className="stat-box">
                  <span className="stat-number">{cafeStats.averageRating}</span>
                  <div className="stat-stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                       <StarIcon key={s} className="star-filled" />
                    ))}
                  </div>
                  <span className="stat-label">{cafeStats.totalReviews} Reviews</span>
                </div>
              </div>

              <div className="reviews-feed">
                <h3 className="feed-title">What people are saying</h3>
                {reviews.map(rev => (
                  <div key={rev.id} className="feed-item">
                    <div className="rev-header">
                      <div className="rev-user-profile">
                        <img src={rev.userPic} alt={rev.user} className="user-avatar-img" />
                        <div>
                          <span className="rev-user-name">{rev.user}</span>
                          <span className="rev-date">{rev.date}</span>
                        </div>
                      </div>
                      <div className="rev-stars-row">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <StarIcon 
                            key={s} 
                            className={s <= rev.rating ? "star-filled" : "star-empty"} 
                          />
                        ))}
                      </div>
                    </div>
                    <div className="rev-body">
                      <p className="rev-text">{rev.text}</p>
                      <div className="reviewed-food-container">
                        <img src={rev.foodPic} alt="Food" className="reviewed-food-img" />
                        <span className="photo-tag">Dish reviewed</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: GENERAL INFO */}
        {activeTab === 'info' && (
          <section className="animate-fade-in">
            <div className="dashboard-card info-card">
              <h2 className="card-title">Cafe Branding</h2>
              <div className="branding-editor">
                {/* Banner Upload Area */}
                <div className="banner-edit-container" onClick={() => document.getElementById('banner-upload').click()}>
                    <img src={businessInfo.banner || bannerImg} alt="Banner" className="banner-preview-img" />
                    <div className="edit-overlay"><PhotoCameraIcon /> Change Banner Image</div>
                    <input id="banner-upload" type="file" hidden accept="image/*" onChange={(e) => handleImageUpload(e, 'banner')} />
                </div>
                
                {/* Logo Upload Area */}
                <div className="logo-edit-container" onClick={() => document.getElementById('logo-upload').click()}>
                    <img src={businessInfo.logo || logo} alt="Logo" className="logo-preview-img" />
                    <div className="edit-overlay"><PhotoCameraIcon fontSize="small" /></div>
                    <input id="logo-upload" type="file" hidden accept="image/*" onChange={(e) => handleImageUpload(e, 'logo')} />
                </div>
              </div>
            </div>

            <div className="dashboard-card info-card" style={{ marginTop: '80px' }}>
              <h2 className="card-title">Business Details</h2>
              <div className="info-grid">
                <div className="input-group">
                  <label>Business Name</label>
                  <input type="text" value={businessInfo.name} onChange={(e) => setBusinessInfo({...businessInfo, name: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>Location</label>
                  <input type="text" value={businessInfo.location} onChange={(e) => setBusinessInfo({...businessInfo, location: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input type="tel" value={businessInfo.phone} onChange={(e) => setBusinessInfo({...businessInfo, phone: e.target.value})} />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: MANAGE MENU */}
        {activeTab === 'menu' && (
          <section className="animate-fade-in">
            <div className="dashboard-card">
              <div className="menu-header-row">
                <h2 className="card-title">Menu Management</h2>
                <button className="add-item-btn" onClick={() => setIsModalOpen(true)}>
                  <AddIcon fontSize="small" /> Add New Dish
                </button>
              </div>

              <div className="menu-table-container">
                <table className="menu-table">
                  <thead>
                    <tr>
                      <th>Dish</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems.map((item) => (
                      <tr key={item.id}>
                        <td className="dish-cell">
                          <img 
                            src={item.img || "https://via.placeholder.com/50"} 
                            alt={item.name} 
                            className="dish-img-thumbnail" 
                          />
                          <span className="dish-name">{item.name}</span>
                        </td>
                        <td>{item.cat}</td>
                        <td className="price-text">{item.price}</td>
                        <td>
                          <span className={`status-badge ${item.status.toLowerCase().replace(/\s/g, '-')}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button className="edit-btn">
                              <EditIcon fontSize="inherit" /> Edit
                            </button>
                            <button className="delete-icon-btn" onClick={() => deleteDish(item.id)}>
                              <DeleteOutlineIcon fontSize="small" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* --- ADD DISH MODAL --- */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content animate-fade-in">
            <div className="modal-header">
              <h3>Add New Menu Item</h3>
              <button className="close-modal" onClick={() => setIsModalOpen(false)}><CloseIcon /></button>
            </div>
            
            <div className="modal-body">
              {/* Clickable Dish Image Upload */}
              <div className="dish-image-upload-area" onClick={() => document.getElementById('dish-img-input').click()}>
                  {newDish.img ? (
                    <img src={newDish.img} alt="Preview" className="dish-preview-large" />
                  ) : (
                    <div className="dish-upload-placeholder">
                      <PhotoCameraIcon />
                      <span>Upload Dish Photo</span>
                    </div>
                  )}
                <input id="dish-img-input" type="file" hidden accept="image/*" onChange={handleNewDishImage} />
              </div>

              <div className="input-group">
                <label>Dish Name</label>
                <input type="text" placeholder="e.g. Special Tibs" value={newDish.name} onChange={(e) => setNewDish({...newDish, name: e.target.value})} />
              </div>

              <div className="info-grid">
                <div className="input-group">
                  <label>Price (ETB)</label>
                  <input type="number" placeholder="450" value={newDish.price} onChange={(e) => setNewDish({...newDish, price: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>Category</label>
                  <select className="custom-select" value={newDish.cat} onChange={(e) => setNewDish({...newDish, cat: e.target.value})}>
                    <option value="Beef">Beef</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Poultry">Poultry</option>
                    <option value="Drinks">Drinks</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="confirm-add-btn" onClick={saveNewDish}>Add to Menu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Businessprofile;