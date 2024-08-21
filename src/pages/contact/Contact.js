import React from 'react'
import "./contact.css"
import Header from '../../componets/header/Header'
import Footer from '../../componets/footer/Footer'
import Shoplistinfo from '../../componets/shoplistinfo/Shoplistinfo'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri";
import Contactbanner from '../../componets/contactbanner/Contactbanner'

const Contact = () => {
  return (
    <div>
        <Header />
        <div className='contact-container'>
        <h1>Contact</h1>
        <div className='contact-links'>
        <Link to="/">Home</Link>
        <RiArrowRightSLine className='arrow-right' />
        <Link to="/contact">Contact</Link>
        </div>
        </div>
        <Contactbanner />
        <Shoplistinfo />
        <Footer />
    </div>
  )
}

export default Contact