import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Imageslider from '../../components/imageslider/Imageslider'
import Catagory from '../../components/catagory/Catagory'
import Footer from '../../components/footer/Footer'
import Recent from '../../components/recent/Recent'
import Writereview from '../writereview/Writereview'
import Login from '../login/Login'
import Signin from '../signin/Signin'
import Business from '../business/Business'
import Businesslogin from '../businesslogin/Businesslogin'

const Home = () => {
return (
    <div className="page-wrapper-full-width">
            <Navbar />
            <Imageslider />
            <Recent />
            <Catagory />
            <Footer />
        </div>
)
}

export default Home