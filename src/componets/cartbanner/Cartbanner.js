import React from "react";
import "./cartbanner.css";
import tire from "./Asgaard sofa 4.png";
import { AiFillDelete } from "react-icons/ai";

const Cartbanner = () => {
  return (
    <div className="cartbanner-container">
      <div className="cartbanner-left">
        <div className="cartbanner-left-header">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="cartbanner-left-product-info">
          <div className="img-div">
            <img src={tire} alt="" />
          </div>
          <p>MIRAGE MR-AT172 285/65</p>
          <span>Rs. 50,000.00</span>
          <div className="number-div">1</div>
          <h4>Rs. 50,000.00</h4>
          <AiFillDelete className="delete" />
        </div>
      </div>
      <div className="cartbanner-right">
        <h1>Cart Totals</h1>
        <div className="cartbanner-right-info-div">
          <div className="cartbanner-right-info-div-left">
            <p>Subtotal</p>
            <p>Total</p>
          </div>
          <div className="cartbanner-right-info-div-right">
            <p>Rs. 50,000.00</p>
            <h3>Rs. 50,000.00</h3>
          </div>
        </div>
        <button>Check Out</button>  
      </div>
    </div>
  );
};

export default Cartbanner;
