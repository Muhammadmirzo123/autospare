import React from 'react'
import './account.css'
import Header from "./../../componets/header/Header"
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri";
import Shoplistinfo from "../../componets/shoplistinfo/Shoplistinfo"
import Login from '../../componets/login/Login';
import Footer from '../../componets/footer/Footer'

const Account = () => {
  return (
    <div>
        <Header />
        <div className='account-container'>
        <h1>My Account</h1>
        <div className='account-links'>
        <Link to="/">Home</Link>
        <RiArrowRightSLine className='arrow-right' />
        <Link to="/account">My Account</Link>
        </div>
        </div>
        <Login />
        <Shoplistinfo />
        <Footer />
    </div>
  )
}

export default Account