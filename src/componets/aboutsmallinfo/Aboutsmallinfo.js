import React from 'react'
import "./aboutsmallinfo.css"
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";

const Aboutsmallinfo = () => {
  return (
    <div className='about-small-info-container'>
        <div className='hrs'></div>

        <div className='about-small-info-text'>
            <p>SKU   <span>: SS001</span> </p>
            <p>Category   <span>: Tire</span> </p>
            <p>Tags   <span>: Tire, rims, Shop</span> </p>
            <p>Share   <span className='span'>: <FaFacebook /> <IoLogoLinkedin /> <AiFillTwitterCircle /></span> </p>
        </div>
        
        <div className='hrs'></div> 
    </div>
  )
}

export default Aboutsmallinfo