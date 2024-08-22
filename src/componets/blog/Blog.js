import React from 'react'
import "./blog.css"
import img1 from "./Rectangle 13.png"
import img2 from "./Rectangle 14.png"
import img3 from "./Rectangle 15.png"
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const Blog = () => {
  return (
    <div className='blog'>
        <h1>Our Blogs</h1>
        <p>Find a bright ideal to suit your taste with our great selection</p>
        <div className='blog-cards'>
          <div className='blog-card'>
            <img src={img1} alt=''/>
            <p>How to change engine oil at home?</p>
            <button>Read More <div></div></button>
            <h4><FaRegClock/>5 min <CiCalendar/> 12</h4>
          </div>
          <div className='blog-card'>
            <img src={img2} alt=''/>
            <p>Guide to prolong the life of engine oil</p>
            <button>Read More <div></div></button>
          </div>
          <div className='blog-card'>
            <img src={img3} alt=''/>
            <p>How to take care of engine oil?</p>
            <button>Read More <div></div></button>
          </div>
        </div>
        <button> View All Post <div></div></button>
    </div>
  )
}

export default Blog