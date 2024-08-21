import React from 'react'
import "./navbar.css"
import { IoCallSharp } from "react-icons/io5";
import { IoMailOpenSharp } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav>
        <div className='call'>
        <IoCallSharp className='call-icon'/>

        <div className='right-call'>
        <h3>Call us</h3>
        <p>+92 314 61 46 470</p>
        </div>
        </div>

        <div className='send'>
        <IoMailOpenSharp className='send-icon' />
        <div className='right-send'>
        <h3>Send us mail</h3>
        <p>autoessentials@gmail.com</p>
        </div>
        </div>

        <button>Become A Seller</button>
    </nav>
  )
}

export default Navbar