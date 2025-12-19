import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Imageslider from '../../components/imageslider/Imageslider'
import Catagory from '../../components/catagory/Catagory'
import Footer from '../../components/footer/Footer'
import Recent from '../../components/recent/Recent'
import Writereview from '../writereview/Writereview'
import Login from '../login/Login'

const Home = () => {
return (
    <div className="page-wrapper-full-width">
            <Login />
        </div>
)
}

export default Home