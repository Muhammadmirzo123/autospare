import React from 'react'
import "./home.css"
import rectangleImage from './Rectangle70.png';
import Header from '../../componets/header/Header';
import Navbar from '../../componets/navbar/Navbar';
import Arrivals from '../../componets/arrivals/Arrivals';
import Bestproducts from '../../componets/bestproducts/Bestproducts';
import Footer from '../../componets/footer/Footer';
import Homeabout from '../../componets/homeabout/Homeabout';
import Ourinstagram from '../../componets/ourinstagram/Ourinstagram';
import Blog from "../../componets/blog/Blog"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
    <div className='banner'>
        <div className='banner-left'>
          <h1> <span>Auto</span> Spare Parts</h1>
          <p>All Major Brands Available</p>
          <button>Shop Now</button>
          
        </div>
        <div className='banner-right'>
        <img src={rectangleImage} alt="Rectangle" />
        </div>
    </div>
        <Homeabout />
        <Bestproducts />
        <Arrivals />
        <Blog />
        <Ourinstagram />
        <Footer />
    </div>
  )
}

export default Home