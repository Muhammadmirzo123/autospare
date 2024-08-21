import React from 'react'
import "./cart.css"
import Header from '../../componets/header/Header'
import Footer from '../../componets/footer/Footer'
import Shoplistinfo from '../../componets/shoplistinfo/Shoplistinfo'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri";
import Cartbanner from '../../componets/cartbanner/Cartbanner'

const Cart = () => {
  return (
    <div>
        <Header />
        <div className='cart-container'>
        <h1>Cart</h1>
        <div className='cart-links'>
        <Link to="/">Home</Link>
        <RiArrowRightSLine className='arrow-right' />
        <Link to="/cart">Cart</Link>
        </div>
        </div>
        <Cartbanner />
        <Shoplistinfo />
        <Footer />
    </div>
  )
}

export default Cart