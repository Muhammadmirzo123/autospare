import React from 'react'
import "./blog.css"
import blogcard from "./Group 51.png"

const Blog = () => {
  return (
    <div className='blog'>
        <h1>Our Blogs</h1>
        <p>Find a bright ideal to suit your taste with our great selection</p>
        <div className='blogs-cards'>
          <img src={blogcard} alt=''></img>
        </div>
        <button> View All Post <div></div></button>
    </div>
  )
}

export default Blog