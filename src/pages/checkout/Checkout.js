import React from 'react'
import "./checkout.css"
import Header from '../../componets/header/Header'
import Footer from '../../componets/footer/Footer'
import Shoplistinfo from '../../componets/shoplistinfo/Shoplistinfo'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri";
import Checkoutinputs from '../../componets/checkoutinputs/Checkoutinputs'

const Checkout = () => {
  return (
    <div>
        <Header />
        <div className='checkout-container'>
        <h1>Checkout</h1>
        <div className='checkout-links'>
        <Link to="/">Home</Link>
        <RiArrowRightSLine className='arrow-right' />
        <Link to="/checkout">Checkout</Link>
        </div>
        </div>
        <Checkoutinputs />
        <Shoplistinfo />
        <Footer />
    </div>
  )
}

export default Checkout