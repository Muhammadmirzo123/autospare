import React from 'react'
import "./arrivals.css"
import moylar from "./Asgaard sofa 1.png"

const Arrivals = () => {
  return (
    <div className='arrivals'>
        <div className='arrivals-left'>
            <img src={moylar} alt=''></img>
        </div>
        <div className='arrivals-right'>
            <p>New Arrivals</p>
            <h1>Shell Engine Oil</h1>
            <button>Shop Now</button>
        </div>

    </div>
  )
}

export default Arrivals