import React from 'react'
import "./homeabout.css"
import lubricant from './Cloud sofa three seater + ottoman_3 1.png'
import spareparts from './Granite square side table 1.png'

const Homeabout = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={spareparts} alt='spareparts'/>
            <h1>Lubricants</h1>
            <button>View More <div></div></button>
        </div>
        <div className='about-right'>
            <img src={lubricant} alt='lubricant'/>
            <h1>Spare Parts</h1>
            <button>View More <div></div></button>
        </div>
    </div>
  )
}

export default Homeabout