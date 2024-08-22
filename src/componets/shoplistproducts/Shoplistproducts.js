import React from "react";
import "./shoplistproducts.css";
import moy1 from "./Group 18.png";
import gildirak from "./Group 199.png";
import buyumlar from "./Group 210.png";
import tire from "../header/Asgaard sofa 5.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Shoplistproducts = () => {

  return (
    <div>
        <h1 className="king">New Products</h1>
      <div className="shop-list-products-container">
        <div className="shop-list-products-main-card">
          <div className="shop-list-products-cards1">
            <div className="shop-list-products-card">
              <img src={moy1}></img>
            </div>
            <div className="shop-list-products-card">
              <img src={moy1}></img>
            </div>
            <div className="shop-list-products-card">
              <img src={moy1}></img>
            </div>
            <div className="shop-list-products-card">
              <img src={moy1}></img>
            </div>
          </div>
          <div className="shop-list-products-cards1">
            <div className="shop-list-products-card">
              <img src={moy1}></img>
            </div>
            <div className="shop-list-products-card">
              <img src={moy1}></img>
            </div>
            <div className="shop-list-products-card">
              <img src={moy1}></img>
            </div>
            <div className="shop-list-products-card">
              <img src={moy1}></img>
            </div>
          </div>
          <div className="shop-list-products-cards1">
            <div className="shop-list-products-card">
              <Link to="/about">
                <img  src={gildirak}></img>
              </Link>
            </div>
            <div className="shop-list-products-card">
              <Link to="/about">
                <img  src={gildirak}></img>
              </Link>
            </div>
            <div className="shop-list-products-card">
              <Link to="/about">
                <img  src={gildirak}></img>
              </Link>
            </div>
            <div className="shop-list-products-card">
              <Link to="/about">
                <img  src={gildirak}></img>
              </Link>
            </div>
          </div>
          <div className="shop-list-products-cards1">
            <img src={buyumlar} alt=""></img>
          </div>
          <div className="shop-list-products-homes">
            <div className="shop-list-products-home1">1</div>
            <div className="shop-list-products-home2">2</div>
            <div className="shop-list-products-home3">3</div>
            <div className="shop-list-products-next">Next</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Shoplistproducts;
