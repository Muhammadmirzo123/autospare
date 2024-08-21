import React, { useState } from 'react';
import './shopfilter.css';
import nocorect from "./bi_view-list.png"
import info from "./Vector.png"
import setings from "./Vector2.png"

const ShopFilter = () => {

  return (
    <div className="shop-filter-container">
      <div className='shop-filter-icons'>
      <img src={setings} alt=''></img>
      <button className="filter-button">Filter</button>
      <img src={info} alt=''></img>
      <img src={nocorect} alt=''></img>
      </div>
      <div className='shop-filter-colum-hr'></div>
      <p>Showing 1–16 of 32 results</p>
      <div className='shop-filter-show-shorts'>
        <label>Show</label>
        <input type='number' placeholder='16' className='first-input'/>
        <label>Short by</label>
        <input type='text' placeholder='Default'/>
      </div>
    </div>
  );
};

export default ShopFilter;
