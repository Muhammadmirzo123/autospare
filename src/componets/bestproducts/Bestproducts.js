import React from 'react'
import "./bestproducts.css"
import circledetail from "./Trenton modular sofa_3 1.png"
import circle from "./Plain console with teak mirror 1.png"
import outdoor from "./Outdoor bar table and stool 1.png"
import granite from "./Granite dining table with dining chair 1.png"

const Bestproducts = () => {
  return (
    <div className='best'>
      <h1>Top Picks For You </h1>
      <p>Find a bright ideal to suit your taste with our great selection of products.</p>
        <div className='best-cards'>
          <div className='best-card'>
            <img src={circledetail} alt=''></img>
            <p>Brake system <br/> Part Number: 8-97100-344-2 <br/> Shope: Al Fareed </p>
            <h2>Rs. 25,000.00</h2>
          </div>
          <div className='best-card'>
            <img src={circle} alt=''></img>
            <p>Brake system <br/> Part Number: 8-97100-344-2 <br/> Shope: Al Fareed </p>
            <h2>Rs. 25,000.00</h2>
          </div>
          <div className='best-card'>
            <img src={outdoor} alt=''></img>
            <p>Brake system <br/> Part Number: 8-97100-344-2 <br/> Shope: Al Fareed </p>
            <h2>Rs. 25,000.00</h2>
          </div>
          <div className='best-card'>
            <img src={granite} alt=''></img>
            <p>Brake system <br/> Part Number: 8-97100-344-2 <br/> Shope: Al Fareed </p>
            <h2>Rs. 25,000.00</h2>
          </div>
        </div>
        <button>View More <div></div></button>
    </div>
  )
}

export default Bestproducts