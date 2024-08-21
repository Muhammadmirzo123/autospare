import React from "react";
import "./footer.css";
import auto from "./Rectangle 72 (1).png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src={auto} alt=""/>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="/payment-options">Payment Options</a>
            </li>
            <li>
              <a href="/returns">Returns</a>
            </li>
            <li>
              <a href="/privacy-policies">Privacy Policies</a>
            </li>
          </ul>
        </div>
        <div className="footer-section newsletter-section">
          <h4>Newsletter</h4>
          <div className="form-div">
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023-24 autoessentials. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
