import React from "react";
import "./header.css";
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import auto from "./Rectangle 72 (1).png";
import { useState } from "react";
import { Link } from "react-router-dom";
import tire from "./Asgaard sofa 5.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <Link to="/">
        <img src={auto} alt="auto" className="auto"></img>
        </Link>
        <div className="header-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/tools">Tools</Link>
        </div>
        <div className="header-icons">
          <Link to="/account">
            <TbUserExclamation className="user" />
          </Link>
          <Link to="/checkout">
            <FiSearch className="search" />
          </Link>
          <GoHeart className="heart" />
          <Link to="/cart">
            <MdOutlineShoppingCart className="cart" />
          </Link>
        </div>
        <div>
          <button onClick={toggleSidebar} className="menu-icon">
            ☰
          </button>
          <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/tools">Tools</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
