import React from 'react';
import './shop.css';
import back from "./Rectangle 1.png"
import { RiArrowRightSLine } from "react-icons/ri";
import Header from '../../componets/header/Header';
import Footer from '../../componets/footer/Footer';
import Shopfilter from '../../componets/shopfilter/Shopfilter';
import Shoplistproducts from '../../componets/shoplistproducts/Shoplistproducts';
import Shoplistinfo from '../../componets/shoplistinfo/Shoplistinfo';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div>
            <Header />
        <div className="shop-container">
            <div className="shop-background">
                <h1>Shop</h1>
                <div className='shop-links'>
                <Link to="/">Home  </Link>
                <RiArrowRightSLine className='arrow-right' />
                <Link to="/shop">Shop</Link>
                </div>
            </div>
        </div>
            <Shopfilter />
            <Shoplistproducts />
            <Shoplistinfo />
            <Footer />
        </div>
    );
};

export default Shop;
